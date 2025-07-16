"use client";
import Link from "next/link";
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
    <Header
      theme={theme || ""}
      type="slim"
      className={"px-0"}
      role="banner"
      aria-label="Header principale del sito"
    >
      <HeaderContent className={"px-0"}>
        <HeaderBrand responsive href="/" className={"fw-semibold"}>
          Dipartimento per la trasformazione digitale
        </HeaderBrand>
        <HeaderRightZone>
          <ul className="list-inline align-items-center mb-0 h-100 d-none d-md-flex">
            <li
              className="list-inline-item px-4 border-end border-primary border-opacity-25 h-100 d-flex align-items-center me-0"
              style={{ fontSize: "0.875rem" }}
            >
              <Link
                href="https://innovazione.gov.it/italia-digitale-2026/"
                title="Italia digitale 2026"
                className="text-decoration-underline"
              >
                Italia digitale 2026
              </Link>
            </li>
            <li
              className="list-inline-item px-4 h-100 d-flex align-items-center"
              style={{ fontSize: "0.875rem" }}
            >
              <Link
                href="https://www.italiadomani.gov.it/it/home.html"
                title="Italia domani - PNRR"
                className="text-decoration-underline"
              >
                Italia domani - PNRR
              </Link>
            </li>
          </ul>

          <Button
            className="btn-icon btn-full"
            color="primary"
            title={"Clicca qui per accedere all'area personale"}
            href="https://areariservata.padigitale2026.gov.it/sis_SpidPage"
          >
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
