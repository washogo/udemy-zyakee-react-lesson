import styled from "styled-components";
import { BaseButton } from "./BaseButton";
import { ButtonProps } from "./PrimaryButton";

export const SecondaryButton = (props: ButtonProps) => {
  const { children } = props;

  return (
    <SButton>{children}</SButton>
  )
}

const SButton = styled(BaseButton)`
  background-color: #11999e;
`