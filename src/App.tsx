import { PlusCircle } from "@phosphor-icons/react";
import logo from './assets/todo-logo.svg'
import clipboard from './assets/clipboard.png'
import Input from "./components/Input";
import Button from "./components/Button";

import styles from './App.module.css';

function App() {

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <img src={logo} />
      </header>
      <main>
        <form className={styles.formNewTask}>
          <Input />
          <Button />
        </form>
        <div>
          <div className={styles.infoWrapper}>
            <div>
              <span className={styles.created}>Tarefas criadas</span><span className={styles.counter}>0</span>
            </div>
            <div>
              <span className={styles.completed}>Concluídas</span><span className={styles.counter}>0</span>
            </div>
          </div>
          <div className={styles.empty}>
            <img src={clipboard} />
            <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
