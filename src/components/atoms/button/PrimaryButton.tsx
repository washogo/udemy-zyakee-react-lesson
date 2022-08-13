import styled from "styled-components";
import { ReactNode } from "react";
import { BaseButton } from "./BaseButton";

export type ButtonProps = {
  children: ReactNode;
};

export const PrimaryButton = (props: ButtonProps) => {
  const { children } = props;

  return <SButton>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
