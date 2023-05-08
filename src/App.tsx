import logo from './assets/todo-logo.svg'

import Input from "./components/Input";
import Button from "./components/Button";
import Empty from "./components/Empty";

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
          <Empty />
        </div>
      </main>
    </div>
  )
}

export default App
