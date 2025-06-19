import { TabsWrapRecord } from "@/graphql/generated";

import styles from "./index.module.scss";
import classNames from "classnames/bind";
import {
  TabContainer,
  TabContent,
  TabNav,
  TabNavItem,
  TabNavLink,
  TabPane,
} from "design-react-kit";
import { BloccoGrafico } from "../BloccoGrafico";
const cn = classNames.bind(styles);

export function TabsWrap({ props }: { props: TabsWrapRecord }) {
  const { tabs } = props;

  console.log("tabs", tabs);
  return (
    <div className={cn("container-xxl py-5")}>
      <TabContainer defaultActiveKey={tabs[0].id}>
        <TabNav className="auto pt-4">
          {tabs.map((tab) => (
            <TabNavItem key={tab.id}>
              <TabNavLink eventKey={tab.id}>{tab.title}</TabNavLink>
            </TabNavItem>
          ))}
        </TabNav>
        {/* content */}
        <TabContent>
          {tabs.map((tab) => (
            <TabPane key={tab.id} className="p-4" eventKey={tab.id}>
              {tab.content.map((content) => (
                <div key={content.id}>
                  {content.__typename === "BloccoGraficoRecord" && (
                    <BloccoGrafico props={content} />
                  )}
                </div>
              ))}
            </TabPane>
          ))}
        </TabContent>
      </TabContainer>
    </div>
  );
}
