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

  const isActiveLink = (slug: string | null | undefined) => {
    if (!slug) return false;
    const linkPath = `/${slug}`;
    return pathname === linkPath || pathname.startsWith(`${linkPath}/`);
  };

  return (
    <>
      <style jsx global>{`
        .navbar > div {
          width: 100%;
        }
      `}</style>
      <Header theme={openNav ? "light" : theme} type="navbar">
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
            <div className="menu-wrapper">
              <Nav navbar>
                {mainLinks.map((link) => (
                  <NavItem key={link.id} active={isActiveLink(link.slug)}>
                    <NavLink
                      active={isActiveLink(link.slug)}
                      href={`/${link.slug || "#"}`}
                    >
                      <span className="fw-semibold">{link.title}</span>
                      {isActiveLink(link.slug) && (
                        <span className="visually-hidden">current</span>
                      )}
                    </NavLink>
                  </NavItem>
                ))}
              </Nav>
              <Nav navbar>
                {secondaryLinks.map((link) => (
                  <NavItem key={link.id} active={isActiveLink(link.slug)}>
                    <NavLink
                      active={isActiveLink(link.slug)}
                      href={`/${link.slug || "#"}`}
                    >
                      <span className="fw-semibold">{link.title}</span>
                      {isActiveLink(link.slug) && (
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
