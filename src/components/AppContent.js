import React from 'react'
import styles from '../styles/modules/app.module.scss';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function AppContent() {
  const todolist = useSelector((state) => state.todo.todolist);
  const sortedTodoList = [...todolist];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  return (
    <div className={styles.content__wrapper}>{
      sortedTodoList.length === 0 ? <p>No todos found</p> :
        sortedTodoList.map(item => <TodoItem key={item.id} todo={item} />)
    }</div>
  )
}

export default AppContent