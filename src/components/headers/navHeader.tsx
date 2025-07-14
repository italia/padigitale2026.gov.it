"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  // Col,
  Collapse,
  // Dropdown,
  // DropdownMenu,
  // DropdownToggle,
  Header,
  HeaderContent,
  HeaderToggler,
  Icon,
  // LinkList,
  // LinkListItem,
  // MegamenuHighlightColumn,
  // MegamenuItem,
  Nav,
  // Row,
} from "design-react-kit";
import { NavItem, NavLink } from "reactstrap";
import type { HeaderQuery } from "@/graphql/generated";

export default function NavHeader({
  theme,
  props,
}: {
  theme?: "dark" | "light";
  props: HeaderQuery;
}) {
  const [openNav, setOpenNav] = useState(false);
  const pathname = usePathname();
  const toggle = () => {
    setOpenNav(!openNav);
  };

  const mainLinks = props.header?.mainLinks || [];
  const secondaryLinks = props.header?.secondaryLinks || [];

  // Funzione per determinare se un link è attivo, dando priorità al più specifico
  const isActiveLinkSpecific = (
    slug: string | null | undefined,
    allLinks: Array<{ slug?: string | null | undefined }>
  ) => {
    if (!slug) return false;
    const linkPath = `/${slug}`;

    // Se il pathname è esattamente uguale al link, controlla se non c'è un link più specifico
    if (pathname === linkPath) {
      // Trova se esiste un link più specifico che matcha esattamente il pathname
      const moreSpecificLink = allLinks.find((link) => {
        if (!link.slug) return false;
        const otherLinkPath = `/${link.slug}`;
        return (
          pathname === otherLinkPath && otherLinkPath.length > linkPath.length
        );
      });
      return !moreSpecificLink;
    }

    // Se il pathname inizia con il link, controlla se c'è un link più specifico
    if (pathname.startsWith(`${linkPath}/`)) {
      // Trova se esiste un link più specifico che matcha il pathname corrente
      const moreSpecificLink = allLinks.find((link) => {
        if (!link.slug) return false;
        const otherLinkPath = `/${link.slug}`;
        return (
          (pathname === otherLinkPath ||
            pathname.startsWith(`${otherLinkPath}/`)) &&
          otherLinkPath.length > linkPath.length
        );
      });

      // Se non c'è un link più specifico, questo è attivo
      return !moreSpecificLink;
    }

    return false;
  };

  return (
    <>
      <style jsx global>{`
        .navbar > div {
          width: 100%;
        }
      `}</style>
      <Header
        theme={openNav ? "light" : theme}
        type="navbar"
        className="px-0"
        role="navigation"
        aria-label="Navigazione principale"
      >
        <HeaderContent expand="lg" className="px-0">
          <HeaderToggler
            aria-controls="nav1"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => toggle()}
          >
            <Icon icon="it-burger" />
          </HeaderToggler>
          <Collapse
            isOpen={openNav}
            header
            navbar
            onOverlayClick={() => toggle()}
          >
            <div
              className="menu-wrapper"
              role="navigation"
              aria-label="Menu principale"
            >
              <Nav navbar aria-label="Menu principale" className="w-100">
                <NavItem>
                  <NavLink href="https://areariservata.padigitale2026.gov.it/Pa_digitale2026_avvisi">
                    <span className="fw-semibold">Avvisi</span>
                  </NavLink>
                </NavItem>
                {mainLinks.map((link) => (
                  <NavItem
                    key={link.id}
                    active={isActiveLinkSpecific(link.slug, mainLinks)}
                  >
                    <NavLink
                      active={isActiveLinkSpecific(link.slug, mainLinks)}
                      href={`/${link.slug || "#"}`}
                    >
                      <span className="fw-semibold">{link.title}</span>
                      {isActiveLinkSpecific(link.slug, mainLinks) && (
                        <span className="visually-hidden">current</span>
                      )}
                    </NavLink>
                  </NavItem>
                ))}
                {secondaryLinks.map((link, index) => (
                  <NavItem
                    key={link.id}
                    active={isActiveLinkSpecific(link.slug, secondaryLinks)}
                    className={index === 0 ? "ms-lg-auto" : ""}
                  >
                    <NavLink
                      active={isActiveLinkSpecific(link.slug, secondaryLinks)}
                      href={`/${link.slug || "#"}`}
                    >
                      <span className="fw-semibold">{link.title}</span>
                      {isActiveLinkSpecific(link.slug, secondaryLinks) && (
                        <span className="visually-hidden">current</span>
                      )}
                    </NavLink>
                  </NavItem>
                ))}
              </Nav>
            </div>
          </Collapse>
        </HeaderContent>
      </Header>
    </>
  );
}
