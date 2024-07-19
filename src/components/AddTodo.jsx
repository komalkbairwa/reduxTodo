import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) { // Only dispatch if input is not empty
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-gray-100 shadow-lg rounded-lg">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Add a New Todo</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label
            className="text-gray-700 text-sm font-medium mb-2"
            htmlFor="todo-input"
          >
            Todo Title
          </label>
          <input
            id="todo-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a new todo"
            className="shadow-md border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
