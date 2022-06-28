import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
import Todolist from './components/Todolist';
import { Todo } from './model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo) {
      setTodos([...todos, {id: Date.now(), todo, isDone: false}]);
      setTodo("")
    }
  }

  console.log(todo);

  return (
    <div className="App">
     <span className='heading'>ToDoList</span>
     <InputFeild todo={todo} setTodo={setTodo} handleAdd = {handleAdd}/>
     <Todolist todos={todos} setTodos={setTodos}/>
    
    </div>
  );
}

export default App;
