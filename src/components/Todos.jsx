import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice'; 

const Todos = () => {
  const todos = useSelector((state) => state.todos.todos); // Adjust according to your state structure
  const dispatch = useDispatch();

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Todo List</h2>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-4 bg-white shadow-sm rounded-lg hover:shadow-md transition-shadow duration-300"
          >
            <span className="text-lg text-gray-700">{todo.text}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-3 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
