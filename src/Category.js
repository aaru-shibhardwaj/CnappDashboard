import React from 'react';
import Widget from './Widget';
import AddWidget from './AddWidget';

const Category = ({ name, widgets }) => {
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-vibe">{name}</h2>
            <AddWidget categoryName={name} />
            <div className="grid grid-cols-3 gap-4">
                {widgets.map(widget => (
                    <Widget key={widget.id} {...widget} category={name} />
                ))}
            </div>
        </div>
    );
};

export default Category;
