"use client";

import { usePathname } from "next/navigation";
import { Breadcrumb } from "design-react-kit";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllPages } from "@/lib/datocms";
import { AllPagesQuery } from "@/graphql/generated";
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
      const pathSegments = pathname.split("/").filter(Boolean);

      const items: BreadcrumbItem[] = [
        { title: "Home", href: "/", isActive: pathname === "/" },
      ];

      let currentPath = "";
      for (const segment of pathSegments) {
        currentPath += `/${segment}`;
        const page = pages.allPages.find((p) => p.slug === segment);
        if (page && page.title) {
          items.push({
            title: page.title,
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
