/** @jsx h */

import { h } from "preact";
import {
  BasicNavTree,
  NavTreeWithButtons,
  NavTreeMega,
} from "./NavTreeExample";

import { Nav } from ".";

export default {
  component: Nav,
  title: "Nav",
};

const buttons = [
  {
    href: "/",
    text: "CTA Button 1",
    color: "gold"
  },
  {
    text: "CTA Button 2",
    href: "#",
    color: "light"
  },
];

export const base = () => <Nav navTree={BasicNavTree} />;

export const mobileOpen = () => (
  <Nav navTree={BasicNavTree} mobileOpen={true} />
);

export const withButtons = () => (
  <Nav navTree={NavTreeWithButtons} mobileOpen={true} buttons={buttons} />
);

export const withMenuColumns = () => (
  <Nav navTree={NavTreeMega} mobileOpen={true} />
);
