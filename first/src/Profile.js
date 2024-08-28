import React, { useState } from "react";
import Data from "./List";

function Kashish() {

    const handleClick = () => {
        setCount(count + 1);
    }

    const handelContent = (e) => {
        setContent(e.target.value)
    }

    const [count, setCount] = useState(0)
    const [content, setContent] = useState("");

    return (
        <div>
            <h1>Name: Kashish Patel</h1>
            <h2>Usn: 21btrcs045</h2>

            <p>Count:{count}</p>
            <button onClick={handleClick}>Click Me!</button>

            <div>
                <textarea value={content} onChange={handelContent}/>
                <p>Entered text is: {content}</p>
            </div>

            <Data />
        </div>
    )
}

export default Kashish;