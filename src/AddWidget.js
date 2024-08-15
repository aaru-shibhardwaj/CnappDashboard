import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from './store/widgetSlice';

const AddWidget = ({ categoryName }) => {
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAdd = () => {
        const id = Date.now();
        dispatch(addWidget({ category: categoryName, widget: { id, name, text } }));
        setName('');
        setText('');
    };

    return (
        <div className="mb-4">
            <input
                type="text"
                placeholder="Widget Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border rounded p-2 mr-2 border-gray-500 font-vibe"
            />
            <input
                type="text"
                placeholder="Widget Text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="border rounded p-2 mr-2 border-gray-500 font-vibe "
            />
            <button onClick={handleAdd} className="bg-blue-500 hover:bg-blue-400 transition duration-200 ease-in-out  text-white font-normal font-vibe py-2 px-7 rounded-md mr-2 border-2 border-blue-600 outline">
                Add Widget
            </button>
        </div>
    );
};

export default AddWidget;
