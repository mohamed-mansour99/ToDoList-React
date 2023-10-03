
import { useState } from 'react'
import './App.css'

function App() {

   const [todos,setTodos] = useState([123]);
   const [inputVal,setInputVal] = useState('');

   function writeTodo(e){
    setInputVal(e.target.value)
  }
 
   function addTodo (){
    setTodos((prevTodos) =>[...prevTodos,inputVal])
    console.log(todos);
   }

   function delTodo(todoIndex){
    setTodos((prevTodos) => prevTodos.filter((_,prevTodoIndex)=> {
      return prevTodoIndex != todoIndex
    }));
  }
  return (
    <main>
      <h1>Todo List React</h1>
      <div className='input-container'>
        <input id='input-todo' type="text" placeholder='Your ToDo' onChange={writeTodo}/>
        <button id='add-todo' onClick={addTodo}>ADD</button>
      </div>
      <div className="container">
        {
          todos.map((todo,index) =>{
            return(
              <div className="todo" key={index}>
              <p>{todo}</p>
              <div className="actions">
                <input type="checkbox" />
                <button onClick={() =>delTodo(index)}>Delete</button>
          </div>
        </div>
            );
          })}
        
      </div>
    </main>
  )
}

export default App
