import React, { useState } from 'react'
import styles from '../styles/modules/todoItem.module.scss';
import { getClasses } from '../utils/getClasses';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../slices/todoSlice';
import toast from 'react-hot-toast';
import TodoModal from './TodoModal';

function TodoItem({ todo }) {

    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);

    function closeModal() {
        setModalOpen(false);
    }

    const handleDelete = () => {
        dispatch(deleteTodo(todo));
        toast.success("Task deleted successfully");
    }
    const handleEdit = () => {
        setModalOpen(true);
    }
    return (
        <div className={styles.item}>
            <div className={styles.todoDetails}>
                [ ]
                <div className={styles.texts}>
                    <p className={getClasses([styles.todoText, todo.status === 'complete' && styles['todoText--completed']])}>{todo.title}</p>
                    <p className={styles.time}>{todo.time}</p>
                </div>
            </div>
            <div className={styles.todoActions}>
                <div className={styles.icon} onClick={() => handleDelete()}>
                    <MdDelete />
                </div>
                <div className={styles.icon} onClick={() => handleEdit()}>
                    <MdEdit />
                </div>
            </div>
            {modalOpen && <TodoModal closeHandler={() => closeModal()} type='update' todo={todo}></TodoModal>}
        </div>
    )
}

export default TodoItem