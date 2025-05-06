"use client";

import { LayoutSidebarRecord } from "@/graphql/generated";
import { useEffect, useRef } from "react";
import { RichText } from "@/src/components/RichText";

declare global {
  interface Window {
    bootstrap: {
      NavScroll: {
        getOrCreateInstance: (element: HTMLElement) => {
          setScrollPadding: (callback: () => number) => void;
        };
      };
    };
  }
}

export function LayoutSidebar({ props }: { props: LayoutSidebarRecord }) {
  const { title, sidebar, content } = props;
  console.log("sidebar", sidebar);
  const navscrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeNavScroll = () => {
      if (navscrollRef.current && window.bootstrap) {
        const navscrollElement = navscrollRef.current;
        const navscroll =
          window.bootstrap.NavScroll.getOrCreateInstance(navscrollElement);

        navscroll.setScrollPadding(() => {
          const header = document.querySelector(".it-header-wrapper");
          return header ? header.getBoundingClientRect().height + 10 : 0;
        });
      }
    };

    // Se Bootstrap è già caricato, inizializza subito
    if (window.bootstrap) {
      initializeNavScroll();
    } else {
      // Altrimenti aspetta che il documento sia completamente caricato
      window.addEventListener("load", initializeNavScroll);
      return () => window.removeEventListener("load", initializeNavScroll);
    }
  }, []);

  return (
    <div className="container-xxl py-lg-5">
      <div className="row">
        <div className="col-12 col-lg-4">
          <div data-bs-toggle="sticky" data-bs-stackable="true">
            <nav
              ref={navscrollRef}
              className="navbar it-navscroll-wrapper navbar-expand-lg it-bottom-navscroll it-right-side"
              data-bs-navscroll
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
                <span className="it-list"></span>1. Introduzione
              </button>
              <div className="progress custom-navbar-progressbar">
                <div
                  className="progress-bar it-navscroll-progressbar"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              <div className="navbar-collapsable" id="navbarNav">
                <div className="overlay fade"></div>
                <a className="it-back-button" href="#" role="button">
                  <svg className="icon icon-sm icon-primary align-top">
                    <use
                      href="{{site.baseurl}}/dist/svg/sprites.svg#it-chevron-left"
                      xlinkHref="{{site.baseurl}}/dist/svg/sprites.svg#it-chevron-left"
                    ></use>
                  </svg>
                  <span>Indietro</span>
                </a>
                <div className="menu-wrapper">
                  <div className="link-list-wrapper">
                    <h3>{title}</h3>
                    <div className="progress">
                      <div
                        className="progress-bar it-navscroll-progressbar"
                        role="progressbar"
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                    <ul className="link-list">
                      <li className="nav-item">
                        <a className="nav-link active" href="#p1">
                          <span>1. Introduzione </span>
                        </a>
                        <ul className="link-list">
                          <li className="nav-link">
                            <a className="nav-link" href="#p1_1">
                              <span>1.1 Elemento annidato </span>
                            </a>
                            <ul className="tertiary link-list">
                              <li className="nav-link">
                                <a className="nav-link" href="#p1_1_1">
                                  <span>1.1.1 Elemento annidato </span>
                                </a>
                              </li>
                              <li className="nav-link">
                                <a className="nav-link" href="#p1_1_2">
                                  <span>1.1.2 Elemento annidato </span>
                                </a>
                              </li>
                              <li className="nav-link">
                                <a className="nav-link" href="#p1_1_3">
                                  <span>1.1.3 Elemento annidato </span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-link">
                            <a className="nav-link" href="#p1_2">
                              <span>1.2 Elemento annidato </span>
                            </a>
                          </li>
                          <li className="nav-link">
                            <a className="nav-link" href="#p1_3">
                              <span>1.3 Elemento annidato </span>
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#p2">
                          <span>2. Seconda sezione </span>
                        </a>
                        <ul className="link-list">
                          <li className="nav-link">
                            <a className="nav-link" href="#p2_1">
                              <span>2.1 Elemento annidato </span>
                            </a>
                            <ul className="tertiary link-list">
                              <li className="nav-link">
                                <a className="nav-link" href="#p2_1_1">
                                  <span>2.1.1 Elemento annidato </span>
                                </a>
                              </li>
                              <li className="nav-link">
                                <a className="nav-link" href="#p2_1_2">
                                  <span>2.1.2 Elemento annidato </span>
                                </a>
                              </li>
                              <li className="nav-link">
                                <a className="nav-link" href="#p2_1_3">
                                  <span>2.1.3 Elemento annidato </span>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="col-12 col-lg-8 it-page-sections-container">
          {content.map((item, index) => (
            <RichText key={index} props={item} padding={false} />
          ))}
        </div>
      </div>
    </div>
  );
}
