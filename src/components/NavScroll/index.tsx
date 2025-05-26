import { NavScrollRecord } from "@/graphql/generated";
import { Icon } from "design-react-kit";

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

const renderNavList = (items: DASTNode[]) => {
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

            if (text && url) {
              return (
                <li key={index} className="nav-item">
                  <a className="nav-link" href={url}>
                    <span>{text}</span>
                  </a>
                  {item.children?.find((child) => child.type === "list") && (
                    <ul className="link-list">
                      <li>
                        {renderNavList(
                          item.children.find((child) => child.type === "list")
                            ?.children || []
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

export function NavScroll({ props }: { props: NavScrollRecord }) {
  const { title, content } = props;

  const navItems =
    (content?.value as DASTValue)?.document?.children?.[0]?.children || [];

  return (
    <nav
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
              {renderNavList(navItems)}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
