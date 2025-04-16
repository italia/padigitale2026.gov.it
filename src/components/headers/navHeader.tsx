"use client";
import { useState } from "react";
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

export default function NavHeader({ theme }: { theme?: "dark" | "light" }) {
  const [openNav, setOpenNav] = useState(false);
  const toggle = () => {
    setOpenNav(!openNav);
  };

  return (
    <>
      <style jsx global>{`
        .navbar > div {
          width: 100%;
        }
      `}</style>
      <Header theme={openNav ? "light" : theme} type="navbar">
        <HeaderContent expand="lg">
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
                <NavItem active>
                  <NavLink active href="#">
                    <span className="fw-semibold">Avvisi </span>
                    <span className="visually-hidden">current</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <span className="fw-semibold">Guide e risorse</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <span className="fw-semibold">Novità</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <span className="fw-semibold">Enti</span>
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav navbar>
                <NavItem>
                  <NavLink href="#">
                    <span className="fw-semibold">Open data</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <span className="fw-semibold">Supporto</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </Collapse>
        </HeaderContent>
      </Header>
    </>
  );
}
