import axios from 'axios';
import { useState } from 'react';
import './App.css';
import { Text } from './Text';
import { Todo } from './Todo';
import { TodoType } from './types/todo';
import { UserType } from './types/user';
import { UserProfile } from './UserProfile';

const user: UserType = {
  name: 'じゃけえ',
  // hobbies: ["映画", "ゲーム"],
};

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios.get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos').then((res) => {
      setTodos(res.data);
    });
  };
  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color="red" fontSize="8" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed} />
      ))}
    </div>
  );
}
