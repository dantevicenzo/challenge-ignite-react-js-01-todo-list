import { ChangeEvent } from 'react'
import styles from './Input.module.css'

interface IInputProps {
    placeholder: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
}

export default function Input({placeholder, onChange} : IInputProps){
    return (
        <input 
        className={styles.input} 
        type="text" 
        placeholder={placeholder} 
        onChange={onChange}
        required
        />
    )
}