import { DataHeroRecord } from "@/graphql/generated";
import { Hero as HeroComponent, HeroTitle } from "design-react-kit";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { CopyLinkButton } from "@/src/components/CopyLinkButton";
import { usePathname } from "next/navigation";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

const getBadge = (item: DataHeroRecord) => {
  const createdAt = item._createdAt;
  const updatedAt = item._updatedAt;
  const now = new Date();
  const createdDate = new Date(createdAt);
  const updatedDate = new Date(updatedAt);

  // Badge "Nuovo" wins over "Aggiornato" (if both are true)

  // if createdDate is < of 60 days return "Nuovo"
  if (createdDate > new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000)) {
    return "Nuovo";
  }

  // if updatedDate is < of 60 days return "Aggiornato"
  if (updatedDate > new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000)) {
    return "Aggiornato";
  }

  return null;
};

export function HeroWithData({ props }: { props: DataHeroRecord }) {
  const {
    title,
    hideBreadcrumbs = false,
    updateDate,
    argomento,
    misura,
    beneficiari,
  } = props;

  const pathname = usePathname();
  const parentPath = pathname.split("/").slice(0, -1).join("/") || "/";

  return (
    <HeroComponent className={cn("wrapper")}>
      <div className={"container-xxl position-relative"}>
        <div className={"row"}>
          {/* Breadcrumbs */}
          {!hideBreadcrumbs && (
            <section className={cn("pt-2 col-12")}>
              <Breadcrumbs lightTheme />
            </section>
          )}
          {/* Body */}
          <div className={"pb-4 col-12"}>
            {title && <HeroTitle className={cn("h-1")}>{title}</HeroTitle>}
            <div
              className={cn("d-flex flex-wrap my-4 pb-3")}
              style={{ columnGap: "4rem", rowGap: "1rem" }}
            >
              {argomento && (
                <div
                  className={cn("text-secondary h-6")}
                  style={{ minWidth: "114px" }}
                >
                  <div className="fw-normal h-6">Argomento</div>
                  <a className="fw-semibold h-6" href={parentPath}>
                    {argomento.label}
                  </a>
                </div>
              )}
              {misura && (
                <div className={cn("text-secondary h-6")}>
                  <div className="fw-normal h-6">Misura</div>
                  <a
                    className="fw-semibold h-6"
                    // href={`${misura.basePath || ""}${misura.slug || ""}`}
                    href={`${parentPath}${misura.ancora || ""}`}
                  >
                    {misura.label}
                  </a>
                </div>
              )}
              {getBadge(props) && (
                <div className={cn("text-secondary h-6")}>
                  <div className="fw-normal h-6">Stato</div>
                  <p className="fw-semibold h-6 mb-0">{getBadge(props)}</p>
                </div>
              )}
              {beneficiari && beneficiari.length > 0 && (
                <div className={cn("text-secondary h-6")}>
                  <div className="fw-normal h-6">Beneficiari</div>
                  <p className="fw-semibold h-6 mb-0">
                    {beneficiari.map((ente, idx) => (
                      <span key={idx}>
                        {ente.label}
                        {idx < beneficiari.length - 1 && ", "}
                      </span>
                    ))}
                  </p>
                </div>
              )}
            </div>
            <div
              className={cn("d-flex flex-wrap align-items-center")}
              style={{ columnGap: "4rem", rowGap: "1rem" }}
            >
              <div className={cn("it-btn-container")}>
                <CopyLinkButton />
              </div>

              {updateDate && updateDate.length > 0 && (
                <p
                  className={
                    "font-sans-serif text-body-secondary m-0 fw-normal h-6"
                  }
                >
                  Aggiornato il{" "}
                  <time dateTime={updateDate}>
                    {new Intl.DateTimeFormat("it-IT", {
                      timeZone: "Europe/Rome",
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    }).format(new Date(updateDate))}
                  </time>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </HeroComponent>
  );
}
