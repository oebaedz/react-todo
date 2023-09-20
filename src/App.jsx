import { useState } from 'react'

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  
  const handleForm = (e) => {
    e.preventDefault();
    setTodoList([...todoList, { todoName: todo }]);
    setTodo("");
  };

  const deleteTodo = (deleteValue) => {
    const restTodoList = [...todoList.filter((val) => {
      return val.todoName !== deleteValue;
    })];
    setTodoList(restTodoList);
  }

  return (
    <>
      <div className='bg-gray-200 w-full h-screen flex items-center'>
        <div className="w-[500px] bg-white p-5 mx-auto text-center rounded-lg shadow-lg">
          <h1 className='text-5xl font-bold mb-8'>Todo List</h1>
          <form onSubmit={handleForm}>
            <input 
            className='border-2 w-full placeholder:text-gray-500 p-5 rounded-lg mb-5 border-black text-black' 
            type="text" 
            placeholder='Add Todo' 
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            />
            <button type='submit' className='bg-red-600 text-white py-3 px-8 rounded-xl mb-5'>Add Todo</button>
          </form>
          <div className="todo-list">
            <ul>
              {todoList.map((singleTodo, index) => {
                return (
                <li key={index} className='bg-black flex justify-between text-white p-3 px-5 rounded-lg mb-2'>{singleTodo.todoName}{""} <span onClick={() => deleteTodo(singleTodo.todoName)} className='text-red-500 cursor-pointer'>x</span></li>
              )})}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
