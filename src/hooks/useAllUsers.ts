import axios from 'axios';
import { useCallback, useContext, useState } from 'react';
import { AllUserContext } from '../providers/AllUserProvider';
import { User } from '../types/api/user';
import { useMessage } from './useMessage';

export const useAllUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<Array<User>>([]);
  const { showMessage } = useMessage();
  const { setAllUsers } = useContext(AllUserContext);

  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<User>>('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setAllUsers(res.data);
        setUsers(res.data);
      })
      .catch(() => {
        showMessage({ title: 'ユーザー取得に失敗しました', status: 'error' });
      })
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { getUsers, loading, users };
};
