import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addTodo} from '../features/todo/todoSlice.js';

const AddTodo = () => {
    const [input, setInput] = useState('');
    const [error, setError] = useState(false);
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (!input) {
            setError(true);
            return;
        }
        dispatch(addTodo(input));
        setInput('');
        setError(false);
    }

    return (
        <form onSubmit={addTodoHandler} className="max-w-xl mx-auto p-6 bg-gray-50 rounded-lg shadow border mt-12">
            <div className="flex flex-col md:flex-row gap-4">
                <input
                    type="text"
                    className={`flex-1 bg-gray-800 rounded-lg border-2  focus:border-blue-500 focus:ring-2 focus:ring-blue-900 outline-none text-gray-100 py-1 px-4 leading-8 transition-colors duration-200 ease-in-out placeholder-white text-sm ${error ? 'bg-red-700' : 'border-gray-700'}`}
                    placeholder="✍️ Enter your todo..."
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value)
                        setError(false)
                    }}
                />                
                <button
                    type="submit"
                    className="text-white bg-blue-600 border-0 py-1 px-8 focus:outline-none hover:bg-blue-700 rounded-lg text-sm font-semibold transition-colors duration-200 ease-in-out shadow-lg hover:shadow-indigo-500/50"
                >
                    Add Todo ➕
                </button>
            </div>
        </form>
    )
}

export default AddTodo