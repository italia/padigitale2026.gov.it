import { HeroSearchRecord } from "@/graphql/generated";
import {
  Button,
  Hero as HeroComponent,
  HeroTitle,
  Icon,
  Input,
} from "design-react-kit";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

export function HeroSearch({ props }: { props: HeroSearchRecord }) {
  const { title, description, hideBreadcrumbs = false } = props;

  return (
    <HeroComponent className={cn("wrapper")}>
      <div className={"container-xxl position-relative"}>
        <div className={"row"}>
          {/* Breadcrumbs */}
          {!hideBreadcrumbs && (
            <section className={cn("pt-2 col-12")}>
              <Breadcrumbs lightTheme />
            </section>
          )}
          {/* Body */}
          <div className={"pb-4 col-12 text-center"}>
            {title && <HeroTitle className={cn("fs-1")}>{title}</HeroTitle>}
            {description && <p className={cn("fs-6")}>{description}</p>}
            <div className={cn("col-12 col-md-7 mx-auto mt-5")}>
              <Input
                buttonRight={<Button color="primary">Cerca</Button>}
                hasButtonRight
                hasIconLeft
                iconLeft={
                  <Icon
                    aria-hidden
                    color="primary"
                    icon="it-search"
                    size="sm"
                  />
                }
                id="search"
                label="Scrivi una parola per iniziare la ricerca"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    </HeroComponent>
  );
}
