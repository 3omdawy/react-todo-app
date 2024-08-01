import React from 'react'
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function AppContent() {
  const todolist = useSelector((state) => state.todo.todolist);
  const sortedTodoList = [...todolist];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  return (
    <div>{
      sortedTodoList.length === 0 ? <p>No todos found</p> :
        sortedTodoList.map(item => <TodoItem key={item.id} todo={item} />)
    }</div>
  )
}

export default AppContent