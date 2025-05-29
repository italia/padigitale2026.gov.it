import { CardMisuraRecord } from "@/graphql/generated";
// import { Icon } from "design-react-kit";
// import Link from "next/link";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

// const getButtonHref = (button: CardMisuraRecord["button"]) => {
//   // href link > cms page
//   if (button?.href) {
//     return `${button.href}`;
//   }
//   if (button?.cmsPage?.slug) {
//     return `/${button.cmsPage.slug}`;
//   }
//   return "";
// };

// const getButtonTitle = (button: CardMisuraRecord["button"]) => {
//   // href link > cms page
//   if (button?.href) {
//     return button.text || "";
//   }
//   if (button?.cmsPage?.title) {
//     return `Vai alla pagina ${button.cmsPage.title}`;
//   }
//   return "";
// };

export function CardMisura({ props }: { props: CardMisuraRecord }) {
  const { title } = props;
  return (
    <div className={cn("p-0")}>
      <div className={cn("container-xxl")}>
        {/* Body */}
        <div className="row h-100 py-4">
          {title && <h2 className={"col-12 mb-3 fs-2 lh-sm"}>{title}</h2>}
        </div>
      </div>
    </div>
  );
}
