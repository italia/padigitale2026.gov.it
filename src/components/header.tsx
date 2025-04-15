"use client";
import { Headers } from "design-react-kit";
import CenterHeader from "@/src/components/headers/centerHeader";
import SlimHeader from "@/src/components/headers/slimHeader";
import NavHeader from "@/src/components/headers/navHeader";
export default function Footer() {
  return (
    <Headers>
      <SlimHeader theme="light" />
      <div className="it-nav-wrapper">
        <CenterHeader theme="light" />
        <NavHeader theme="light" />
      </div>
    </Headers>
  );
}
