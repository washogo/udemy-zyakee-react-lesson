import { ReactNode } from "react";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";

type RouteProps = {
  path: string;
  children: ReactNode;
};

export const page1Routes: Array<RouteProps> = [
  {
    path: "page1/detailA",
    children: <Page1DetailA />,
  },
  {
    path: "page1/detailB",
    children: <Page1DetailB />,
  },
];
