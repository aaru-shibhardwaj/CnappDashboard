import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from './store/widgetSlice';

const AddCategory = () => {
    const [category, setCategory] = useState('');
    const dispatch = useDispatch();

    const handleAddCategory = () => {
        dispatch(addCategory({ category }));
        setCategory('');
    };

    return (
        <div className="mb-8">
            <input
                type="text"
                placeholder="Category Name"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border rounded p-2 mr-2 border-gray-500 font-vibe"
            />
            <button onClick={handleAddCategory} className=" bg-green-400 text-black rounded p-2 border-2 border-gray-500 hover:bg-green-500 transition duration-200 ease-in-out font-vibe">
                Add Category
            </button>
        </div>
    );
};

export default AddCategory;
