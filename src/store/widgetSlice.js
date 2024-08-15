import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: {
        'CSPM Executive Dashboard': [],
       
    }
};

const widgetSlice = createSlice({
    name: 'widgets',
    initialState,
    reducers: {
        addWidget: (state, action) => {
            const { category, widget } = action.payload;
            state.categories[category].push(widget);
        },
        removeWidget: (state, action) => {
            const { category, widgetId } = action.payload;
            state.categories[category] = state.categories[category].filter(w => w.id !== widgetId);
        },
        addCategory: (state, action) => {
            const { category } = action.payload;
            if (!state.categories[category]) {
                state.categories[category] = [];
            }
        },
        removeCategory: (state, action) => {
            const { category } = action.payload;
            delete state.categories[category];
        }
    }
});

export const { addWidget, removeWidget, addCategory, removeCategory } = widgetSlice.actions;
export default widgetSlice.reducer;
