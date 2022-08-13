import { ReactNode } from "react";
import { UrlParameter } from "../UrlParameter";

type RouteProps = {
  path: string;
  children: ReactNode;
};

export const page2Routes: Array<RouteProps> = [
  {
    path: "page2/:id",
    children: <UrlParameter />,
  },
];
