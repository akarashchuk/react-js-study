import { useState } from "react";



function ShoppingList() {
    const [input, setInput] = useState('');
    const [items, setItems] = useState([]);

    const onInputChange = (e) => {
        setInput(e.target.value);
    }

    const addItem = (e) => {
        e.preventDefault();

        if (input === '') {
            return;
        }

        const newItems = [...items, {value: input, isDone: false}];
        setItems(newItems);

        setInput('');
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
                    <input onChange={onInputChange} value={input} type="text" className="form-control" />
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
