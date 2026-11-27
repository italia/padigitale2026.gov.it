"use client";

import type { NavScrollRecord } from "@/graphql/generated";
import { NavScroll as BootstrapNavScroll, Sticky } from "bootstrap-italia";
import { Icon } from "design-react-kit";
import { useEffect, useRef } from "react";

type DASTNode = {
  type: string;
  children?: DASTNode[];
  value?: string;
  url?: string;
  style?: string;
};

type DASTDocument = {
  type: string;
  children: DASTNode[];
};

type DASTValue = {
  schema: string;
  document: DASTDocument;
};

type NavSubsection = {
  id: string;
  title: string;
};

type NavSubsections = Record<string, NavSubsection[]>;

const renderNavList = (items: DASTNode[], subsections: NavSubsections) => {
  return (
    <ul className="link-list">
      {items.map((item, index) => {
        if (item.type === "listItem") {
          const linkItem = item.children?.find(
            (child) =>
              child.type === "paragraph" && child.children?.[0]?.type === "link"
          );

          if (linkItem) {
            const link = linkItem.children?.[0];
            const text = link?.children?.[0]?.value;
            const url = link?.url;
            const sectionId = url?.startsWith("#") ? url.slice(1) : undefined;
            const sectionSubsections = sectionId
              ? subsections[sectionId] || []
              : [];

            if (text && url) {
              return (
                <li key={index} className="nav-item">
                  <a className="nav-link" href={url}>
                    <span>{text}</span>
                  </a>
                  {sectionSubsections.length > 0 && (
                    <ul className="link-list ps-3">
                      {sectionSubsections.map((subsection) => (
                        <li key={subsection.id} className="nav-item">
                          {/* NavScroll usa offsetTop relativo per .nav-link: qui serve l'anchor nativo. */}
                          <a
                            className="it-heading-link fw-semibold"
                            href={`#${subsection.id}`}
                            onClick={(event) => {
                              const collapsible = event.currentTarget.closest(
                                ".navbar-collapsable.expanded",
                              );
                              collapsible
                                ?.querySelector<HTMLAnchorElement>(
                                  ".it-back-button",
                                )
                                ?.click();
                            }}
                          >
                            <span>{subsection.title}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.children?.find((child) => child.type === "list") && (
                    <ul className="link-list">
                      <li>
                        {renderNavList(
                          item.children.find((child) => child.type === "list")
                            ?.children || [],
                          subsections,
                        )}
                      </li>
                    </ul>
                  )}
                </li>
              );
            }
          }
        }
        return null;
      })}
    </ul>
  );
};

export function NavScroll({
  props,
  subsections = {},
}: {
  props: NavScrollRecord;
  subsections?: NavSubsections;
}) {
  const { title, content } = props;
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = navRef.current;
    if (!element) return;

    let navScroll: BootstrapNavScroll | undefined;
    let sticky: Sticky | undefined;

    // The plugin attaches native listeners to the links. Initialize once React
    // has committed the DOM, including when effects are replayed in development.
    const frame = requestAnimationFrame(() => {
      navScroll = BootstrapNavScroll.getOrCreateInstance(element);
      const sidebar = element.closest<HTMLElement>('[data-bs-toggle="sticky"]');
      if (sidebar) sticky = Sticky.getOrCreateInstance(sidebar);
    });

    return () => {
      cancelAnimationFrame(frame);
      navScroll?.dispose();
      sticky?.dispose();
    };
  }, []);

  const navItems =
    (content?.value as DASTValue)?.document?.children?.[0]?.children || [];

  return (
    <nav
      className="navbar it-navscroll-wrapper navbar-expand-lg it-bottom-navscroll it-right-side"
      ref={navRef}
      role="navigation"
      aria-label="Navigazione contenuti"
    >
      <button
        className="custom-navbar-toggler"
        type="button"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        data-bs-toggle="navbarcollapsible"
        data-bs-target="#navbarNav"
      >
        <span className="it-list"></span>
        {navItems[0]?.children?.[0]?.children?.[0]?.children?.[0]?.value ||
          "Menu"}
      </button>
      <div
        className="progress custom-navbar-progressbar"
        aria-hidden={true}
        role={"presentation"}
      >
        <div
          className="progress-bar it-navscroll-progressbar"
          role="progressbar"
          aria-valuenow={0}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{ width: "0%" }}
        ></div>
      </div>
      <div className="navbar-collapsable" id="navbarNav">
        <div className="overlay fade"></div>
        <a className="it-back-button" href="#" role="button">
          <Icon
            className="icon icon-sm icon-primary align-top"
            color="primary"
            icon="it-chevron-left"
            size="sm"
            title="Indietro"
          />
          <span>Indietro</span>
        </a>
        <div className="menu-wrapper">
          <div className="link-list-wrapper">
            {title && <h3>{title}</h3>}
            <div className="progress" aria-hidden={true} role={"presentation"}>
              <div
                className="progress-bar it-navscroll-progressbar"
                role="progressbar"
                aria-valuenow={0}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "0%" }}
              ></div>
            </div>
            <div role={"navigation"} aria-label={"Navigazione contenuti"}>
              {renderNavList(navItems, subsections)}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
