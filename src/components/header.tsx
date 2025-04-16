"use client";
import { Headers } from "design-react-kit";
import CenterHeader from "@/src/components/headers/centerHeader";
import SlimHeader from "@/src/components/headers/slimHeader";
import NavHeader from "@/src/components/headers/navHeader";
import type { HeaderQuery } from "@/graphql/generated";

export default function Header({ props }: { props: HeaderQuery }) {
  return (
    <Headers>
      <SlimHeader theme="light" />
      <div className="it-nav-wrapper">
        <CenterHeader theme="light" props={props} />
        <NavHeader theme="light" props={props} />
      </div>
    </Headers>
  );
}
