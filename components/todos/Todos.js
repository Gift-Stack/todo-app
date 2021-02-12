import React from 'react';
import { View } from 'react-native';
import { TodoItem } from './TodoItem';

export const Todos = ({ todos, setTodos }) => {
  const deleteItem = (id) => {
    setTodos((previosTodos) => previosTodos.filter((todo) => todo.id !== id));
  };
  return (
    <View>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteItem={deleteItem} />
      ))}
    </View>
  );
};
