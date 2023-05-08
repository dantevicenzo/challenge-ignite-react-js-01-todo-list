import { Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'

interface ITaskProps {
    id: string,
    content: string,
}

export default function Task({id, content} : ITaskProps){
    return (
        <li className={styles.task}>
            <input type="checkbox" id={id} />
            <label htmlFor={id}></label>
            <p>{content}</p>
            <button className={styles.trash}><Trash /></button>
        </li>
    )
}