import { ReactNode } from "react";
import { Header } from "../atoms/layout/Header";

type HeaderOnlyProps = {
  children: ReactNode;
};

export const HeaderOnly = (props: HeaderOnlyProps) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
    </>
  );
};
