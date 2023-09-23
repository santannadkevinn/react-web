import React from "react";
import { useState } from "react";

export default function Square() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Counters that update separately</h1>
            <Button count ={count} onClick ={handleClick} />

            <Button count={count} onClick={handleClick} />
        </div>
    )

    
    function Button({count, onclick}){
        return(
        <button>
        Clicked {count} times
        </button>
        )
    }
}