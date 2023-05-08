import React from 'react'
import styles from './Button.module.css'
import { PlusCircle } from "@phosphor-icons/react";

export default function Button(){
    return (
        <button className={styles.button}>Criar <PlusCircle size={16} /></button>
    )
}