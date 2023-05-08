import { ReactNode } from 'react';
import styles from './Button.module.css'

interface IButtonProps {
    text: string,
    icon: ReactNode,
}
export default function Button({text, icon}: IButtonProps){
    return (
        <button className={styles.button}>{text} {icon}</button>
    )
}