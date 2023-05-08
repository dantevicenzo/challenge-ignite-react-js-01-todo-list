import clipboard from '../assets/clipboard.png'
import styles from './Empty.module.css'

export default function Empty(){
    return (
        <div className={styles.empty}>
            <img src={clipboard} />
            <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}