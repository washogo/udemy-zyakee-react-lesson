import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../provider/UserProvider";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `じゃけえ${val}`,
    image: "https://source.unsplash.com/Mv9hjnEUHR4",
    email: "12345@example.com",
    phone: "090-0000-9999",
    company: {
      name: "テスト株式会社",
    },
    website: "https://www.example.com",
  };
});

export const Users = () => {
  const { userInfo, setUserInfo } = useContext(UserContext)
  const onClickSwitch = () => userInfo && setUserInfo({isAdmin: !userInfo.isAdmin})

  return (
    <SContainer>
      <h1>ユーザ一覧ページです</h1>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
