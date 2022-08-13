import { ReactNode } from "react";
import { Footer } from "../atoms/layout/Footer";
import { Header } from "../atoms/layout/Header";

type DefaultLayoutProps = {
  children: ReactNode;
};

export const DefaultLayout = (props: DefaultLayoutProps) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
