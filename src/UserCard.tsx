import { FC } from 'react';
import styled from 'styled-components';
import { UserProfile } from './types/userProfile';

type Props = {
  user: UserProfile;
};

export const UserCard: FC<Props> = (props) => {
  const { user } = props;
  return (
    <SCard>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>メール</dt>
      <dd>{user.email}</dd>
      <dt>住所</dt>
      <dd>{user.address}</dd>
    </SCard>
  );
};

const SCard = styled.dl`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0 16px;
  margin: 8px;
`;
