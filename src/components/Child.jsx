"use client";
import { useState } from "react";

export default function Child({ sendDataToParent }){
    const [data, setData] = useState(5);

    function handleClick() {
        sendDataToParent(data);
    }
    handleClick()
    sendDataToParent(data);

    return(
        <div className="m-10 border">
            <h1 className="bg-blue-400 max-w-max p-5 rounded-md">
                Child Component
            </h1>
            
        </div>
    )
}