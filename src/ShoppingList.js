import { useContext, useEffect, useRef, useState } from "react";
import NotificationContext from "./context/NotificationContext";



function ShoppingList(props) {
    const {save, load} = props;

    const input = useRef('');
    // const [input, setInput] = useState('');
    const [items, setItems] = useState(JSON.parse(load()) ?? []);
    const ctx = useContext(NotificationContext);

    useEffect(() => {
        save(JSON.stringify(items));
    }, [items]);

    const addItem = (e) => {
        e.preventDefault();

        if (input.current.value === '') {
            ctx.error('Input is empty');
            return;
        }

        const newItems = [...items, {value: input.current.value, isDone: false}];
        setItems(newItems);

        input.current.value = '';
        input.current.blur();
        ctx.success('Item was added!');
    }

    const toggleComplete = (index) => {
        const newItems = [...items];

        newItems[index].isDone = !newItems[index].isDone;
        // newItems[index].isDone = newItems[index].isDone ? false : true;

        setItems(newItems);
    }

    return (
        <div className="container">
            <h1 className="text-center">Shopping List</h1>           
            <div className="lg-6 md-8 sm-10 justify-content-center">
                <form className="input-group" onSubmit={addItem}>
                    <input  ref={input} type="text" className="form-control" />
                    <div className="input-group-append">
                        <button className="input-group-text">Add</button>
                    </div>
                </form>
                <div className="my-3 p-3">
                    <ul className="list-group">
                        {items.map((item, index) => <Item key={index} toggle={() => toggleComplete(index)} value={item.value} isDone={item.isDone} />)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

function Item({value, isDone, toggle }) {
    return (
        <li className="list-group-item">
          <input onChange={toggle} checked={isDone} className="form-check-input me-1" type="checkbox" />
          {value}  
        </li>
    );
}

export default ShoppingList;
