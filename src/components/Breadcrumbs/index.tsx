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

      const items: BreadcrumbItem[] = [
        { title: "Home", href: "/", isActive: pathname === "/" },
      ];

      let currentPath = "";
      for (const segment of pathSegments) {
        currentPath += `/${segment}`;

        // Cerca la pagina in base al tipo di contenuto
        let pageTitle: string | undefined;

        if (currentPath.includes("domande-frequenti/")) {
          const page = faqs.allFaqs.find(
            (p) => p.slug === currentPath.slice(1)
          );
          pageTitle = page?.title || undefined;
        } else if (currentPath.includes("notizie/")) {
          const page = news.allNews.find(
            (p) => p.slug === currentPath.slice(1)
          );
          pageTitle = page?.title || undefined;
        } else {
          const page = pages.allPages.find((p) => p.slug === segment);
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
