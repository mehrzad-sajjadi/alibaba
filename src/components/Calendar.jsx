'use client'

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import transition from "react-element-popper/animations/transition"
import { useState } from "react";

export default function Calendar(){
    const [value,setValue] = useState(new Date());
    function changeHandler(event){
        const date = new Date(event);
        // console.log(date);
    }

    return(
        <DatePicker
            value={value}
            onChange={changeHandler} 
            locale={persian_fa} 
            calendar={persian} 
            minDate={new Date()}
            animations={[
                transition({ duration: 800, from: 35 })
            ]} 
        />
    );
}