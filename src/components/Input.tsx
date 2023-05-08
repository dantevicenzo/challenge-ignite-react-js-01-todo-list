import { ChangeEvent } from 'react'
import styles from './Input.module.css'

interface IInputProps {
    placeholder: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    value: string,
}

export default function Input({placeholder, onChange, value} : IInputProps){
    return (
        <input 
        className={styles.input} 
        type="text" 
        placeholder={placeholder} 
        onChange={onChange}
        value={value}
        required
        />
    )
}