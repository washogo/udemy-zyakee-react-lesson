import { MouseEventHandler } from "react";
import styled from "styled-components";
import { BaseButton } from "./BaseButton";
import { ButtonProps } from "./PrimaryButton";

type SecondaryButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const SecondaryButton = (props: ButtonProps & SecondaryButtonProps) => {
  const { children, onClick } = props;

  return (
    <SButton onClick={onClick}>{children}</SButton>
  )
}

const SButton = styled(BaseButton)`
  background-color: #11999e;
`