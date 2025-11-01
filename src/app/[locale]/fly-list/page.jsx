"use client"

import Child from "@/components/Child";
import { useState } from "react";

export default function FlyList(){
    const [dataFromChild,setDataFromChild] = useState();
    function handleDataFromChild(data){
        setDataFromChild(data);
    }

    return(
        <div>
            <h1>Parent</h1>
            <h1>Data from Child : {dataFromChild}</h1>
            <Child sendDataToParent={handleDataFromChild} />
        </div>
    )
}