import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from './store/widgetSlice';

const Widget = ({ id, name, text, category }) => {
    const dispatch = useDispatch();

    return (
        <div className="border rounded p-4 shadow">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{name}</h3>
                <button onClick={() => dispatch(removeWidget({ category, widgetId: id }))} className="text-red-500">
                    ✖
                </button>
            </div>
            <p>{text}</p>
        </div>
    );
};

export default Widget;
