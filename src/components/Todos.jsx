import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice.js';

const Todos = () => {
    const [input, setInput] = useState('');
    const [edit, setEdit] = useState(false);
    const [editId, setEditId] = useState(null);

    const todos = useSelector(
        (state) => state.todos
    );
    const dispatch = useDispatch();

    const handleEdit = (id, text) => {
        setEdit(!edit);
        setEditId(id);
        setInput(text);
    }

    const handleSave = (id) => {
        dispatch(updateTodo({ id, text: input }));
        setEdit(false);
        setEditId(null);
        setInput('');
    }


    return (
        <>
            <div className="text-lg font-bold text-center mt-4 text-gray-800">My Todo List</div>
            <ul className="list-none max-w-2xl mx-auto p-4">
                {
                    todos.map((todo) => (
                        <li
                            className="mt-4 flex justify-between items-center bg-blue-700 px-6 py-2 rounded-lg shadow-lg transform hover:scale-102 transition-all duration-300"
                            key={todo.id}
                        >
                            {edit && editId === todo.id ? (
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    className='text-white text-base font-semibold bg-transparent border-b border-white outline-none'
                                />
                            ) : (
                                <div className='text-white text-base font-semibold'>{todo.text}</div>
                            )}
                            <div className='flex gap-4'>
                                <button
                                    className="text-white bg-red-500 border-0 py-1 text-xs px-4 focus:outline-none hover:bg-red-600 rounded-full transition-colors duration-300 flex items-center gap-2"
                                    onClick={() => dispatch(removeTodo(todo.id))}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        />
                                    </svg>
                                    Delete
                                </button>
                                <button
                                    className="text-blue-700 bg-white border-0 py-1 text-xs px-4 focus:outline-none  rounded-full transition-colors duration-300 flex items-center gap-2"
                                    onClick={() => edit && editId === todo.id ? handleSave(todo.id) : handleEdit(todo.id, todo.text)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                        />
                                    </svg>
                                    {
                                        edit && editId === todo.id ? 'Save' : 'Edit'
                                    }
                                </button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Todos