import { useRef, useContext } from "react";
import { useDispatch } from "react-redux";
import NotificationContext from "../../context/NotificationContext";
import { ADD_ITEM } from "../../store/actionTypes";

const AddNewItem = () => {
    const input = useRef('');
    const ctx = useContext(NotificationContext);
    const dispatch = useDispatch(); 
    
    const addItem = (e) => {
        e.preventDefault();

        if (input.current.value === '') {
            ctx.error('Input is empty');
            return;
        }

        const action = {
            type: ADD_ITEM,
            payload: input.current.value,
        };

        dispatch(action);
        // TODO add to store
        input.current.value = '';
        input.current.blur();
        ctx.success('Item was added!');
    }

    return (
        <form className="input-group" onSubmit={addItem}>
            <input ref={input} type="text" className="form-control" />
            <div className="input-group-append">
                <button className="input-group-text">Add</button>
            </div>
        </form>
    );
};

export default AddNewItem;
