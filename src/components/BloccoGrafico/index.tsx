import { useEffect, useState, useCallback, useMemo } from "react";
import { BloccoGraficoRecord } from "@/graphql/generated";

import {
  type FieldDataType,
  type KpiItemType,
  ChartWrapper,
  KpiItem,
} from "dataviz-components";
import "dataviz-components/dist/style.css";

import Link from "next/link";
import { Icon } from "design-react-kit";
import { Spinner } from "design-react-kit";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

// Tipo per la struttura del chartData
type ChartDataStructure = {
  chart: string;
  config: {
    h?: number;
    w?: number | null;
    colors?: string[];
    direction?: string;
    labeLine?: boolean;
    legend?: boolean;
    legendPosition?: string;
    tooltip?: boolean;
    tooltipFormatter?: string;
    valueFormatter?: string;
    totalLabel?: string;
    tooltipTrigger?: string;
    responsive?: boolean;
    showPieLabels?: boolean;
    palette?: string;
    background?: string;
  };
  data: (string | number)[][];
};

export function BloccoGrafico({ props }: { props: BloccoGraficoRecord }) {
  const {
    id,
    bgTransparent,
    titleBig,
    title,
    subtitle,
    button,
    chart,
    kpi,
    info,
    textBottom,
    downloadData = false,
    downloadImage = false,
    showShare = false,
  } = props;
  const [isClient, setIsClient] = useState(false);

  const getButtonHref = (button: BloccoGraficoRecord["button"]) => {
    // href link > cms page
    if (button?.href) {
      return `${button.href}`;
    }
    if (button?.cmsPage?.slug) {
      return `/${button.cmsPage.slug}`;
    }
    return "";
  };

  const getButtonTitle = (button: BloccoGraficoRecord["button"]) => {
    // href link > cms page
    if (button?.href) {
      return button.text || "";
    }
    if (button?.cmsPage?.title) {
      return `Vai alla pagina ${button.cmsPage.title}`;
    }
    return "";
  };

  // console.log("kpi", kpi);
  // console.log("chart", chart);
  // console.log("info", info);

  // Type assertion per evitare errori TS su chartData
  const chartData = chart?.chartData as { data?: unknown[] } | undefined;

  // Aggiungi il parametro background alla configurazione del chart
  // RICHIESTA DI INTERVENTO LATO CODICE PER MANCANZA DI PERSONALIZZAZIONE LATO PLUGIN
  const chartDataWithBackground = useMemo(
    () =>
      chart?.chartData
        ? {
            ...(chart.chartData as ChartDataStructure),
            config: {
              ...(chart.chartData as ChartDataStructure).config,
              background: "transparent",
            },
          }
        : null,
    [chart]
  );

  // Stato per feedback copia link
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";

  // Funzione stabile per la condivisione, da passare a ChartWrapper
  const handleShare = useCallback(
    (event?: React.MouseEvent) => {
      event?.preventDefault();
      const url = `${window.location.origin}${pathname}#${id}`;
      navigator.clipboard.writeText(url);
      setIsLinkCopied(true);
      setTimeout(() => {
        setIsLinkCopied(false);
      }, 3000);
    },
    [pathname, id]
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  const chartWrapperProps = useMemo(
    () => ({
      id,
      data: chartDataWithBackground as FieldDataType,
      info: {
        text: info ? info : "Non ci sono informazioni aggiuntive",
        chartFooterText: textBottom ? textBottom : undefined,
      },
      enableDownloadData: downloadData,
      enableDownloadImage: downloadImage,
      ...(showShare
        ? {
            shareFunction: (_: string, event?: React.MouseEvent) =>
              handleShare(event),
          }
        : {}),
    }),
    [
      id,
      chartDataWithBackground,
      info,
      textBottom,
      downloadData,
      downloadImage,
      showShare,
      handleShare,
    ]
  );

  return (
    <div
      id={id}
      className={cn(
        "wrapper",
        {
          "bg-light-blue": !bgTransparent,
        },
        "p-0"
      )}
    >
      <div
        className={cn("container-xxl py-4 px-0", { "px-4": !bgTransparent })}
      >
        <div className={cn("", { "py-4": title || subtitle })}>
          {titleBig ? (
            <>{title && <h2 className={"col-12 mb-3 h2"}>{title}</h2>}</>
          ) : (
            <>{title && <h3 className={"col-12 mb-3 h3"}>{title}</h3>}</>
          )}
          {subtitle && <p className={"col-12"}>{subtitle}</p>}

          {chartData && chartData.data && chartData.data.length > 0 && (
            <div className="mx-auto position-relative">
              {isClient ? (
                <>
                  <ChartWrapper {...chartWrapperProps} />
                  {isLinkCopied && (
                    <div
                      className="alert alert-success position-absolute top-100 start-50 translate-middle"
                      role="alert"
                    >
                      Link copiato!
                    </div>
                  )}
                </>
              ) : (
                <div
                  style={{ height: "300px" }}
                  className="d-flex align-items-center justify-content-center"
                >
                  <Spinner active small />
                  <span className="visually-hidden">Caricamento...</span>
                </div>
              )}
            </div>
          )}

          {kpi && kpi.length > 0 && (
            <>
              {isClient ? (
                <div className="container px-0">
                  <div className="row">
                    {kpi.map((item) => {
                      // Mappatura manuale camelCase -> snake_case per backgroundColor
                      const mappedItem = {
                        ...item,
                        background_color: item.backgroundColor,
                        value_prefix: item.valuePrefix,
                        value_suffix: item.valueSuffix,
                        show_flow: item.showFlow,
                        flow_value: item.flowValue,
                        flow_direction: item.flowDirection,
                        flow_detail: item.flowDetail,
                        footer_text: item.footerText,
                      };
                      return (
                        <div
                          className={cn("kpi-item-style", "col")}
                          key={item.id}
                        >
                          <KpiItem data={mappedItem as KpiItemType} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div
                  style={{ height: "300px" }}
                  className="d-flex align-items-center justify-content-center"
                >
                  <Spinner active small />
                  <span className="visually-hidden">Caricamento...</span>
                </div>
              )}
            </>
          )}

          {button && (
            <div className="text-center">
              <Link
                prefetch={false}
                className="btn btn-sm btn-outline-primary mt-2"
                href={getButtonHref(button)}
                target={button.target || "_self"}
                title={getButtonTitle(button)}
              >
                {button.text}
                {button.icon && (
                  <Icon
                    className="my-0"
                    color="primary"
                    icon={button.icon}
                    size="sm"
                    title=""
                    padding
                  />
                )}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
