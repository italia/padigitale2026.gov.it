"use client";
import {
  Button,
  // Dropdown,
  // DropdownMenu,
  // DropdownToggle,
  Header,
  HeaderBrand,
  HeaderContent,
  HeaderRightZone,
  Icon,
  // LinkList,
  // LinkListItem,
} from "design-react-kit";

export default function SlimHeader({ theme }: { theme?: "dark" | "light" }) {
  return (
    <Header theme={theme || ""} type="slim">
      <HeaderContent>
        <HeaderBrand responsive href="/">
          Dipartimento per la trasformazione digitale
        </HeaderBrand>
        <HeaderRightZone>
          <ul className="list-inline align-items-center mb-0 h-100 d-none d-md-flex">
            <li
              className="list-inline-item px-4 border-end border-primary border-opacity-25 h-100 d-flex align-items-center me-0"
              style={{ fontSize: "0.875rem" }}
            >
              <a
                href="#"
                title="Italia digitale 2026"
                className="text-decoration-underline"
              >
                Italia digitale 2026
              </a>
            </li>
            <li
              className="list-inline-item px-4 h-100 d-flex align-items-center"
              style={{ fontSize: "0.875rem" }}
            >
              <a
                href="#"
                title="Italia domani - PNRR"
                className="text-decoration-underline"
              >
                Italia domani - PNRR
              </a>
            </li>
          </ul>

          {/* <Dropdown inNavbar>
            <DropdownToggle inNavbar caret>
              ITA
            </DropdownToggle>
            <DropdownMenu style={{ marginTop: 60 }}>
              <LinkList>
                <LinkListItem inDropdown href="#">
                  <span>ITA</span>
                </LinkListItem>
                <LinkListItem inDropdown href="#">
                  <span>ENG</span>
                </LinkListItem>
              </LinkList>
            </DropdownMenu>
          </Dropdown> */}
          <Button className="btn-icon btn-full" color="primary" href="#">
            <span className="rounded-icon">
              <Icon color="primary" icon="it-user" />
            </span>
            <span className="d-none d-lg-block">
              Accedi all&#39;area personale
            </span>
          </Button>
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  );
}
