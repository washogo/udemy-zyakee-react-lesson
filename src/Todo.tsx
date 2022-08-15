import { FC } from 'react';
import { TodoType } from './types/todo';

export const Todo: FC<Omit<TodoType, 'id'>> = (props) => {
  const { title, userId, completed } = props;
  const completedMark = completed ? '完' : '未';
  return <p>{`${completedMark} ${title}(ユーザー：${userId})`}</p>;
};
