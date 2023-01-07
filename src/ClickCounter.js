import React, { useState } from "react";

export default function ClickCounter() {
    const [counter, setCounter] = useState(0);
        return <div>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(prev => prev + 1)}>Increment</button>
        </div>
    }