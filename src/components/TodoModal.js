import React, { useState } from 'react'
import styles from '../styles/modules/modal.module.scss';
import { MdOutlineClose } from 'react-icons/md';
import { Button } from './Button';
import { addTodo } from '../slices/todoSlice';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import toast from 'react-hot-toast';

function TodoModal({ closeHandler }) {

    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('incomplete');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addTodo({
            id: uuid(),
            title,
            status,
            time: Date(),
        }));
        toast.success('Task added successfully');
        closeHandler();
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.closeButton} onClick={() => closeHandler()}>
                    <MdOutlineClose></MdOutlineClose>
                </div>
                <form className={styles.form} onSubmit={e => handleSubmit(e)}>
                    <h1 className={styles.formTitle}>Add Task</h1>

                    <label htmlFor='title'>
                        Title
                        <input type='text' id='title' name='title' value={title} onChange={e => setTitle(e.target.value)}></input>
                    </label>

                    <label htmlFor='status'>
                        Status
                        <select name='status' id='status' value={status} onChange={e => setStatus(e.target.value)}>
                            <option value='incomplete'>Incomplete</option>
                            <option value='complete'>Complete</option>
                        </select>
                    </label>

                    <div className={styles.buttonContainer}>
                        {title && <Button type='submit' variant='primary'>Add Task</Button>}
                        <Button variant='secondary' onClick={() => closeHandler()}>Cancel</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TodoModal