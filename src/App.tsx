import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import logo from './assets/todo-logo.svg'
import Input from "./components/Input";
import Button from "./components/Button";
import Empty from "./components/Empty";
import styles from './App.module.css';
import Task from './components/Task';

import { ITask } from './components/Task';
import { PlusCircle } from '@phosphor-icons/react';

export default function App() {

  const [task, setTask] = useState('');
  const [tasksList, setTasksList] = useState(Array<ITask>);
  const [completedTasks, setCompletedTasks] = useState(0);

  useEffect(() => {
    setCompletedTasks(tasksList.filter(task => task.checked).length);
  }, [tasksList]);

  function handleAddNewTask(event: FormEvent){
    event.preventDefault();
    
    const currentId = tasksList.reduce((prev, current) => (prev.id > current.id) ? prev : current, {id: 0, content: ""});
    const newTaskId = currentId.id + 1;

    const newTask: ITask = {
      id: newTaskId,
      content: task,
      checked: false,
    }

    setTasksList([...tasksList, newTask]);
    setTask('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
    setTask(event.target.value);
  }

  function onDeleteTask(taskToDelete: ITask){
    const tasksListWithoutDeletedItem = tasksList.filter(task => task.id != taskToDelete.id);
    setTasksList(tasksListWithoutDeletedItem);
  }

  function onCheckboxChange(){
    setCompletedTasks(tasksList.filter(task => task.checked).length);
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <img src={logo} />
      </header>
      <main>
        <form 
          className={styles.formNewTask}
          onSubmit={handleAddNewTask}
        >
          <Input 
            onChange={handleNewTaskChange}
            placeholder='Adicione uma nova tarefa'
            value={task}
          />
          <Button 
            text='Criar' 
            icon={<PlusCircle size={16} />}/>
        </form>
        <div>
          <div className={styles.infoWrapper}>
            <div>
              <span className={styles.created}>
                Tarefas criadas
              </span>
              <span className={styles.counter}>
                {tasksList.length}
              </span>
            </div>
            <div>
              <span className={styles.completed}>
                Concluídas
              </span>
              <span className={styles.counter}>
                {tasksList.length > 0 ? `${completedTasks} de ${tasksList.length}` : 0}
              </span>
            </div>
          </div>
          
          {tasksList.length == 0 ? <Empty /> : 
            <ul className={styles.tasks}>
              {tasksList.map(task => 
              <Task 
                key={task.id}
                task={task}
                onDeleteTask={onDeleteTask}
                onCheckboxChange={onCheckboxChange}
              />)}
            </ul>
          }
        </div>
      </main>
    </div>
  )
}