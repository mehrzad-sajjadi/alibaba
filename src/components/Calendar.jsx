'use client'

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import transition from "react-element-popper/animations/transition";
import { useState } from "react";

export default function Calendar({requestData}){

    // const today = new Date();
    // const formattedToday = today.toISOString().split('T')[0];
    const [value,setValue] = useState();
    // setValue(formattedToday);
    

    function changeHandler(e){
        // روش ساده: به Date میلادی + فرمت لاتین
        const jsDate = e.toDate();
        const formatted = jsDate.toISOString().split('T')[0];
        setValue(formatted);
        console.log(value);
        // requestData(e);
    }

    return(
        <DatePicker
            // value={value}
            // onChange={changeHandler}
            locale={persian_fa} 
            calendar={persian} 
            minDate={new Date()}
            format="YYYY-MM-DD"
            animations={[
                transition({ duration: 800, from: 35 })
            ]}
        />
    );
}