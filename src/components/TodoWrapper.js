import React, {useState} from 'react'

import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid'
import { Todo } from './Todo'
import { EditTodoForm } from './EditTodoForm';
uuidv4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  }

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

// export const TodoWrapper = () => {
//     const [todos, setTodos] = useState([])

//     const addTodo = (todo) => {
//             setTodos([...todos,{
//                 id: uuidv4(),
//                 task: todo,
//                 comleted: false,
//                 isEditing: false}])
//         }

//     const toggleComplete = (id) => {
//         setTodos(todos.map((todo) => todos.id === id? 
//         {...todo, completed: !todo.completed} : todo))
//     }

//     const editTask = (task, id) => {
//         setTodos(
//           todos.map((todo) =>
//             todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
//           )
//         );
//       };

//     const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

//     const editTodo = (id) => {
//         setTodos(todos.map((todo) => todos.id === id? 
//         {...todo, isEditing:!todo.isEditing} : todo))
//     }

    



  return (
    <div className='TodoWrapper'>
        <h1>Get Things Done!</h1>
        <h2>Hope You Don't Ever Stop Fighting</h2>

        <TodoForm   addTodo={addTodo}/>

        {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  )






};