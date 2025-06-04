import { HeroSearchRecord } from "@/graphql/generated";
import {
  Button,
  Hero as HeroComponent,
  HeroTitle,
  Icon,
  Input,
} from "design-react-kit";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { SearchSuggestion } from "@/src/components/SearchSuggestion";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

export function HeroSearch({ props }: { props: HeroSearchRecord }) {
  const { title, description, hideBreadcrumbs = false, suggestion } = props;

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
            <div className={cn("col-12 col-md-7 mx-auto my-5")}>
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
                wrapperClassName={cn("mb-0")}
              />
              {suggestion && (
                <div className={cn("position-relative w-100")}>
                  <div
                    className={cn(
                      "position-absolute top-0 start-0 w-100 bg-white"
                    )}
                  >
                    <SearchSuggestion props={suggestion} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </HeroComponent>
  );
}
