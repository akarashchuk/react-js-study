import { useEffect, useState } from "react";


function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Вы нажали ${count} раз`
    });

    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <p>{ count }</p>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    );
}

export default Counter;
