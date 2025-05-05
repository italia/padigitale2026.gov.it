"use client";

import { NavScrollRecord } from "@/graphql/generated";
import { useEffect, useRef } from "react";

declare module "bootstrap" {
  interface NavScroll {
    setScrollPadding: (callback: () => number) => void;
  }
}

export function NavScroll({ props }: { props: NavScrollRecord }) {
  const { title } = props;
  const navscrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeNavScroll = () => {
      if (navscrollRef.current && window.bootstrap) {
        const navscrollElement = navscrollRef.current;
        // @ts-expect-error NavScroll non è incluso nei tipi di Bootstrap
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
    <div className="container py-lg-5">
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
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="navbar-collapsable" id="navbarNav">
                <div className="overlay"></div>
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
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
            congue eros. Maecenas sagittis commodo libero nec porta. Nunc semper
            velit venenatis ligula condimentum ultricies. In hac habitasse
            platea dictumst. In malesuada pharetra nulla, id aliquam metus
            egestas ut. Nulla sollicitudin cursus felis, eu sagittis ante porta
            id. Suspendisse pellentesque ex non sem tincidunt, aliquam rhoncus
            turpis maximus. Vivamus eget massa turpis. Proin placerat ipsum
            massa, ac commodo velit tempor quis. In ante augue, sodales ac
            rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia
            nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Aliquam laoreet, diam quis blandit porttitor,
            leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat
            pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut
            quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget
            purus vitae convallis. Integer euismod pharetra lorem, non
            ullamcorper lorem euismod vel. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Integer
            feugiat et massa nec rhoncus. Morbi vitae metus et sapien suscipit
            mattis vitae ac ex. Proin pharetra, sem vitae varius malesuada,
            risus tortor sodales arcu, eu aliquam lorem libero vel urna. Aliquam
            massa lacus, faucibus quis urna ac, pharetra pretium ex. In
            facilisis urna non urna luctus, a bibendum tortor facilisis. Mauris
            sed risus justo. In et erat fermentum eros hendrerit tempor. Quisque
            accumsan magna ac risus ultricies, vel condimentum ipsum accumsan.
            Proin blandit mauris sed sodales sollicitudin.
          </p>
          <h2 className="it-page-section" id="p1">
            Introduzione
          </h2>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante
            augue, sodales ac rhoncus in, ultricies a neque. Morbi non semper
            felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis
            blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu
            magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus
            viverra malesuada vel ut quam. Cras vehicula rutrum vehicula.
            Suspendisse efficitur eget purus vitae convallis. Integer euismod
            pharetra lorem, non ullamcorper lorem euismod vel. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
          <h3 className="it-page-section" id="p1_1">
            Elemento annidato 1.1
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante
            augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper
            felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis
            blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu
            magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus
            viverra malesuada vel ut quam. Cras vehicula rutrum vehicula.
            Suspendisse efficitur eget purus vitae convallis. Integer euismod
            pharetra lorem, non ullamcorper lorem euismod vel. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
          <h4 className="it-page-section" id="p1_1_1">
            Elemento annidato 1.1.1
          </h4>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante
            augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper
            felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis
            blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu
            magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus
            viverra malesuada vel ut quam. Cras vehicula rutrum vehicula.
            Suspendisse efficitur eget purus vitae convallis. Integer euismod
            pharetra lorem, non ullamcorper lorem euismod vel. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
          <h4 className="it-page-section" id="p1_1_2">
            Elemento annidato 1.1.2
          </h4>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante
            augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper
            felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis
            blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu
            magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus
            viverra malesuada vel ut quam. Cras vehicula rutrum vehicula.
            Suspendisse efficitur eget purus vitae convallis. Integer euismod
            pharetra lorem, non ullamcorper lorem euismod vel. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
          <h4 className="it-page-section" id="p1_1_3">
            Elemento annidato 1.1.3
          </h4>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante
            augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper
            felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis
            blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu
            magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus
            viverra malesuada vel ut quam. Cras vehicula rutrum vehicula.
            Suspendisse efficitur eget purus vitae convallis. Integer euismod
            pharetra lorem, non ullamcorper lorem euismod vel. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
          <h3 className="it-page-section" id="p1_2">
            Elemento annidato 1.2
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante
            augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper
            felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis
            blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu
            magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus
            viverra malesuada vel ut quam. Cras vehicula rutrum vehicula.
            Suspendisse efficitur eget purus vitae convallis. Integer euismod
            pharetra lorem, non ullamcorper lorem euismod vel. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
          <h3 className="it-page-section" id="p1_3">
            Elemento annidato 1.3
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante
            augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper
            felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis
            blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu
            magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus
            viverra malesuada vel ut quam. Cras vehicula rutrum vehicula.
            Suspendisse efficitur eget purus vitae convallis. Integer euismod
            pharetra lorem, non ullamcorper lorem euismod vel. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
          <h2 className="it-page-section" id="p2">
            Seconda sezione
          </h2>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante
            augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper
            felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis
            blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu
            magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus
            viverra malesuada vel ut quam. Cras vehicula rutrum vehicula.
            Suspendisse efficitur eget purus vitae convallis. Integer euismod
            pharetra lorem, non ullamcorper lorem euismod vel. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
          <h3 className="it-page-section" id="p2_1">
            Elemento annidato 2.1
          </h3>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante
            augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper
            felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis
            blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu
            magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus
            viverra malesuada vel ut quam. Cras vehicula rutrum vehicula.
            Suspendisse efficitur eget purus vitae convallis. Integer euismod
            pharetra lorem, non ullamcorper lorem euismod vel. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
          <h4 className="it-page-section" id="p2_1_1">
            Elemento annidato 2.1.1
          </h4>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante
            augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper
            felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis
            blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu
            magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus
            viverra malesuada vel ut quam. Cras vehicula rutrum vehicula.
            Suspendisse efficitur eget purus vitae convallis. Integer euismod
            pharetra lorem, non ullamcorper lorem euismod vel. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
          <h4 className="it-page-section" id="p2_1_2">
            Elemento annidato 2.1.2
          </h4>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante
            augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper
            felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis
            blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu
            magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus
            viverra malesuada vel ut quam. Cras vehicula rutrum vehicula.
            Suspendisse efficitur eget purus vitae convallis. Integer euismod
            pharetra lorem, non ullamcorper lorem euismod vel. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
          <h4 className="it-page-section" id="p2_1_3">
            Elemento annidato 2.1.3
          </h4>
          <p>
            Proin placerat ipsum massa, ac commodo velit tempor quis. In ante
            augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper
            felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis
            blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu
            magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus
            viverra malesuada vel ut quam. Cras vehicula rutrum vehicula.
            Suspendisse efficitur eget purus vitae convallis. Integer euismod
            pharetra lorem, non ullamcorper lorem euismod vel. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
        </div>
      </div>
    </div>
  );
}
