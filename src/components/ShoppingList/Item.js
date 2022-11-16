import { useDispatch } from "react-redux";
import * as actions from "../../store/actionTypes";

function Item({ id, value, isDone }) {
    const dispatch = useDispatch();

    const toggle = () => {
        const action = {
            type: actions.TOGGLE_ITEM,
            payload: id,
        };

        dispatch(action);
    }

    const deleteItem = () => {
        const action = {
            type: actions.DELETE_ITEM,
            payload: id,
        };

        dispatch(action);
    };

    return (
        <li className="list-group-item">
          <input onChange={toggle} checked={isDone} className="form-check-input me-1" type="checkbox" />
          {value}
          <button onClick={deleteItem} className="btn btn-danger">Delete</button>  
        </li>
    );
}

export default Item;
