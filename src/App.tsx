import logo from './assets/todo-logo.svg'

import Input from "./components/Input";
import Button from "./components/Button";
import Empty from "./components/Empty";

import styles from './App.module.css';
import Task from './components/Task';

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
          <div className={styles.tasks}>
            <Task id="task1" content="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."/>
            <Task id="task2" content="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."/>
            <Task id="task3" content="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."/>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
