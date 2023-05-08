import { PlusCircle } from "@phosphor-icons/react";
import logo from './assets/todo-logo.svg'
import clipboard from './assets/clipboard.png'
import Input from "./components/Input";
import Button from "./components/Button";

function App() {

  return (
    <>
      <header>
        <img src={logo} />
      </header>
      <main>
        <div>
          <Input />
          <Button />
        </div>
        <div>
          <div>
            <div>
              <span>Tarefas criadas</span><span>0</span>
            </div>
            <div>
              <span>Concluídas</span><span>0</span>
            </div>
          </div>
          <div>
            <img src={clipboard} />
            <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
