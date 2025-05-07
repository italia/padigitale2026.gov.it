"use client";

import { usePathname } from "next/navigation";
import { Breadcrumb } from "design-react-kit";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllPages, getAllFaqs, getAllNews } from "@/lib/datocms";
import { AllPagesQuery, AllFaqsQuery, AllNewsQuery } from "@/graphql/generated";
import classNames from "classnames/bind";
import styles from "./index.module.scss";

const cn = classNames.bind(styles);

interface BreadcrumbItem {
  title: string;
  href: string;
  isActive: boolean;
}

interface BreadcrumbsProps {
  lightTheme?: boolean;
  className?: string;
}

export function Breadcrumbs({
  lightTheme = false,
  className,
}: BreadcrumbsProps) {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);

  useEffect(() => {
    const generateBreadcrumbs = async () => {
      const pages = (await getAllPages()) as AllPagesQuery;
      const faqs = (await getAllFaqs()) as AllFaqsQuery;
      const news = (await getAllNews()) as AllNewsQuery;
      const pathSegments = pathname.split("/").filter(Boolean);

      console.log(
        "Tutte le pagine disponibili:",
        pages.allPages.map((p) => ({ slug: p.slug, title: p.title }))
      );

      const items: BreadcrumbItem[] = [
        { title: "Home", href: "/", isActive: pathname === "/" },
      ];

      let currentPath = "";
      for (const segment of pathSegments) {
        currentPath += `/${segment}`;

        // Cerca la pagina in base al tipo di contenuto
        let pageTitle: string | undefined;

        console.log("Segmento corrente:", segment);
        console.log("Path corrente:", currentPath);
        console.log(
          "È l'ultimo segmento?",
          segment === pathSegments[pathSegments.length - 1]
        );

        // Se è l'ultimo segmento (pagina foglia), usa la logica specifica per il tipo di contenuto
        if (segment === pathSegments[pathSegments.length - 1]) {
          switch (true) {
            case currentPath.includes("domande-frequenti/"):
              const page = faqs.allFaqs.find(
                (p) => p.slug === currentPath.slice(1)
              );
              console.log("Cercando FAQ con slug:", currentPath.slice(1));
              console.log("FAQ trovata:", page);
              pageTitle = page?.title || undefined;
              break;

            case currentPath.includes("notizie/"):
              const newsPage = news.allNews.find(
                (p) => p.slug === currentPath.slice(1)
              );
              pageTitle = newsPage?.title || undefined;
              break;

            default:
              const normalPage = pages.allPages.find((p) => p.slug === segment);
              pageTitle = normalPage?.title || undefined;
              break;
          }
        } else {
          // Per le pagine intermedie, usa sempre getAllPages
          // Prima cerca una corrispondenza esatta
          let page = pages.allPages.find((p) => p.slug === segment);

          // Se non trova una corrispondenza esatta, cerca una corrispondenza parziale
          if (!page) {
            page = pages.allPages.find((p) => p.slug?.endsWith(`/${segment}`));
          }

          console.log("Cercando pagina normale con slug:", segment);
          console.log("Pagina trovata:", page);
          pageTitle = page?.title || undefined;
        }

        if (pageTitle) {
          items.push({
            title: pageTitle,
            href: currentPath,
            isActive: currentPath === pathname,
          });
        }
      }

      setBreadcrumbs(items);
    };

    generateBreadcrumbs();
  }, [pathname]);

  if (breadcrumbs.length <= 1) return null;

  return (
    <Breadcrumb className={cn("w-100 mb-0", className)}>
      {breadcrumbs.map((item) => (
        <li
          key={item.href}
          className="breadcrumb-item"
          aria-current={item.isActive ? "page" : undefined}
        >
          {!item.isActive ? (
            <>
              <Link
                href={item.href}
                className={lightTheme ? "text-secondary" : "text-white"}
              >
                {item.title}
              </Link>
              <span
                className={cn("separator mb-0", {
                  "text-secondary": lightTheme,
                  "text-white": !lightTheme,
                })}
              >
                /
              </span>
            </>
          ) : (
            <span className={lightTheme ? "text-secondary" : "text-white"}>
              {item.title}
            </span>
          )}
        </li>
      ))}
    </Breadcrumb>
  );
}
