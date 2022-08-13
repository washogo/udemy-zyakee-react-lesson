import { ReactNode } from 'react';
import styled from "styled-components";

type CardProps = {
  children: ReactNode;
}

export const Card = (props: CardProps) => {
  const { children } = props;

  return (
    <SCard>{children}</SCard>
  )
}

const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 8px;
  padding: 16px;
`