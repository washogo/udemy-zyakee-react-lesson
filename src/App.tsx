import styled from 'styled-components';
import './App.css';
import { UserCard } from './UserCard';
import { useAllUsers } from './hooks/useAllUsers';

export default function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();
  const onClickFetchData = () => getUsers();

  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      <br />
      {error ? (
        <SErrorText>データの取得に失敗しました</SErrorText>
      ) : loading ? (
        <p>Loading....</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}

const SErrorText = styled.p`
  color: red;
  font-weight: bold;
`;
