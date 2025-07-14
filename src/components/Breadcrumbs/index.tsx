"use client";

import { usePathname } from "next/navigation";
import { Breadcrumb } from "design-react-kit";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePages } from "@/src/contexts/PagesContext";
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
  const { pages, faqs, news, resources, supportos, datis } = usePages();

  useEffect(() => {
    const generateBreadcrumbs = () => {
      const pathSegments = pathname.split("/").filter(Boolean);

      const items: BreadcrumbItem[] = [
        { title: "Home", href: "/", isActive: pathname === "/" },
      ];

      let currentPath = "";
      for (const segment of pathSegments) {
        currentPath += `/${segment}`;

        // Cerca la pagina in base al tipo di contenuto
        let pageTitle: string | undefined;

        // Se è l'ultimo segmento (pagina foglia), usa la logica specifica per il tipo di contenuto
        if (segment === pathSegments[pathSegments.length - 1]) {
          switch (true) {
            case currentPath.includes("domande-frequenti/"):
              const faqPage = faqs.allFaqs.find(
                (p) => p.slug === currentPath.slice(1)
              );
              pageTitle = faqPage?.title || undefined;
              break;

            case currentPath.includes("notizie/"):
              const newsPage = news.allNews.find(
                (p) => p.slug === currentPath.slice(1)
              );
              pageTitle = newsPage?.title || undefined;
              break;

            case currentPath.includes("guide-e-risorse/"):
              const resourcePage = resources.allResources.find(
                (p) => p.slug === currentPath.slice(1)
              );
              pageTitle = resourcePage?.title || undefined;
              break;

            case currentPath.includes("supporto/"):
              // Qui puoi aggiungere eccezioni future se necessario
              const supportPage = supportos.allSupportos.find(
                (p) => p.slug === currentPath.slice(1)
              );
              pageTitle = supportPage?.title || undefined;
              break;

            case currentPath.includes("open-data") ||
              currentPath.includes("dati"):
              const datiPage = datis.allDatis.find(
                (p) => p.slug === currentPath.slice(1)
              );
              pageTitle = datiPage?.title || undefined;
              break;

            default:
              const normalPage = pages.allPages.find(
                (p) => p.slug === currentPath.slice(1)
              );
              pageTitle = normalPage?.title || undefined;
              break;
          }
        } else {
          // Per le pagine intermedie, cerca in base al contesto del percorso

          // Se siamo nel contesto di guide-e-risorse, cerca anche nelle risorse
          if (currentPath.includes("guide-e-risorse/")) {
            // Prima cerca nelle risorse
            const resource = resources.allResources.find(
              (r) => r.slug === currentPath.slice(1)
            );

            // Se non trova nelle risorse, cerca nelle pagine normali
            if (!resource) {
              let page = pages.allPages.find((p) => p.slug === segment);

              // Se non trova una corrispondenza esatta, cerca una corrispondenza parziale
              if (!page) {
                page = pages.allPages.find((p) =>
                  p.slug?.endsWith(`/${segment}`)
                );
              }

              pageTitle = page?.title || undefined;
            } else {
              pageTitle = resource.title || undefined;
            }
          } else if (currentPath.includes("supporto/")) {
            // Qui puoi aggiungere eccezioni future se necessario
            const supportPage = supportos.allSupportos.find(
              (p) => p.slug === currentPath.slice(1)
            );
            if (!supportPage) {
              let page = pages.allPages.find((p) => p.slug === segment);
              if (!page) {
                page = pages.allPages.find((p) =>
                  p.slug?.endsWith(`/${segment}`)
                );
              }
              pageTitle = page?.title || undefined;
            } else {
              pageTitle = supportPage.title || undefined;
            }
          } else if (
            currentPath.includes("open-data") ||
            currentPath.includes("dati")
          ) {
            const datiPage = datis.allDatis.find(
              (p) => p.slug === currentPath.slice(1)
            );
            pageTitle = datiPage?.title || undefined;
            if (!pageTitle) {
              let page = pages.allPages.find((p) => p.slug === segment);
              if (!page) {
                page = pages.allPages.find((p) =>
                  p.slug?.endsWith(`/${segment}`)
                );
              }
              pageTitle = page?.title || undefined;
            }
          } else {
            // Per altri contesti, usa sempre getAllPages
            // Prima cerca una corrispondenza esatta
            let page = pages.allPages.find((p) => p.slug === segment);

            // Se non trova una corrispondenza esatta, cerca una corrispondenza parziale
            if (!page) {
              page = pages.allPages.find((p) =>
                p.slug?.endsWith(`/${segment}`)
              );
            }

            pageTitle = page?.title || undefined;
          }
        }

        if (pageTitle) {
          items.push({
            title: pageTitle,
            href: currentPath,
            isActive: currentPath === pathname,
          });
        } else {
          // Fallback: usa il segmento formattato se non troviamo il titolo
          const formattedSegment = segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase());
          items.push({
            title: formattedSegment,
            href: currentPath,
            isActive: currentPath === pathname,
          });
        }
      }

      setBreadcrumbs(items);
    };

    generateBreadcrumbs();
  }, [pathname, pages, faqs, news, resources, supportos, datis]);

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
