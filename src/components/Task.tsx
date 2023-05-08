import { Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'
import { useState } from 'react';

export interface ITask {
    id: number,
    content: string,
    checked?: boolean,
}

interface ITaskProps {
    task: ITask,
    onDeleteTask: (task: ITask) => void,
    onCheckboxChange: () => void,
}

export default function Task({task, onDeleteTask, onCheckboxChange} : ITaskProps){

    const [isChecked, setIsChecked] = useState(task.checked); 

    function handleDeleteTask(){
        onDeleteTask(task);
    }

    function handleCheckboxChange(){
        task.checked = !task.checked;
        onCheckboxChange();
        setIsChecked(!isChecked);
    }

    return (
        <li className={styles.task}>
            <input 
            type="checkbox" 
            id={`task${task.id}`}
            checked={isChecked}
            onChange={handleCheckboxChange}
            />
            <label htmlFor={`task${task.id}`}></label>
            <p>{task.content}</p>
            <button 
            className={styles.trash}
            onClick={handleDeleteTask}
            ><Trash /></button>
        </li>
    )
}