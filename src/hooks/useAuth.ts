import axios from 'axios';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../types/api/user';
import { useLoginUser } from './useLoginUser';
import { useMessage } from './useMessage';

export const useAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const login = useCallback((id: string) => {
    setLoading(true);

    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data === undefined) {
          showMessage({ title: 'ユーザーが見つかりません', status: 'error' });
        } else {
          const isAdmin = res.data.id === 10;
          setLoginUser({ ...res.data, isAdmin });
          showMessage({ title: 'ログインに成功しました', status: 'success' });
          navigate('/home');
        }
      })
      .catch(() => {
        showMessage({ title: 'ログインできません', status: 'error' });
      })
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { login, loading };
};
