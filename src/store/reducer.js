import store from "./store";
import * as actions from "./actionTypes";

const initial = {
    items: [],
};

const reducer = (state = initial, action) => {
    switch (action.type) {
        case actions.ADD_ITEM:
            return {
                ...state,
                items: [
                    ...state.items,
                    {title: action.payload, isDone: false}
                ],
            };
        case actions.TOGGLE_ITEM:
            const newItems = [...state.items];
            newItems[action.payload].isDone = !newItems[action.payload].isDone; 

            return {...state, items: newItems}; 
        case actions.DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter((_, i) => i !== action.payload),
            };
        default:
            return state;
    }
};

export default reducer;
