import React, { useState } from 'react'
import style from '../styles/modules/app.module.scss';
import { Button, SelectButton } from './Button'
import TodoModal from './TodoModal';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../slices/todoSlice';

function AppHeader() {

    const [modalOpen, setModalOpen] = useState(false);
    let filter = useSelector((state) => state.todo.filterStatus);

    const dispatch = useDispatch();

    function selectDone(option) {
        dispatch(updateFilter({ filter: option }));
    }
    function closeModal() {
        setModalOpen(false);
    }

    return (
        <div className={style.appHeader}>
            <Button variant='primary' onClick={() => setModalOpen(true)}>Add Task</Button>
            <SelectButton id="status" value={filter} selectChangeCbk={(option) => selectDone(option)}>
                <option value='all'>All</option>
                <option value='incomplete'>Incomplete</option>
                <option value='complete'>Complete</option>
            </SelectButton>
            {modalOpen && <TodoModal closeHandler={() => closeModal()}></TodoModal>}
        </div>
    )
}

export default AppHeader