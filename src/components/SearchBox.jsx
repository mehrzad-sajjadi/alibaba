'use client'

import Calendar from "@/components/Calendar";
import { useTranslations } from "next-intl";
import { useState } from "react";


export default function SearchBox() {
    const t = useTranslations('HomePage');

    const [formData,setFormData] = useState({
        origin:"",
        destination:"",
        date:""
    });
    
    const [error, setError] = useState({
        origin: "",
        destination: "",
        date: ""
    });

    function validation(){
        const newError={};
        if(formData.origin.trim().length==0){
            // setError({...error,origin:t("enterOrigin")})
            newError.origin = t("enterOrigin");
        }
        if(formData.destination.trim().length==0){
            newError.destination = t("enterDestination");
        }
        setError(newError);
        console.log(error);
    }
    

    function submitHandler(e){
        e.preventDefault();
        validation()
    }
    function changeHandler(e){
        setFormData({...formData, [e.target.name]: e.target.value });
    }

    return (
        <div className="w-[80%] absolute bottom-1 left-1/2 -translate-x-1/2 bg-white border border-black p-4 rounded-lg shadow-lg">
            <form onSubmit={submitHandler}>
                <div className="flex justify-center min-h-min items-start gap-4">

                    <div className="flex flex-col w-64">
                        <input
                            name="origin"
                            value={formData.origin}
                            onChange={changeHandler}
                            placeholder={t('origin')}
                        >
                        </input>
                        {
                            error.origin && 
                            <p className="text-red-500 text-xs mt-1">
                                {error.origin}
                            </p>
                        }
                    </div>

                    <div className="flex flex-col w-64">
                        <input
                            name="destination"
                            value={formData.destination}
                            onChange={changeHandler}
                            placeholder={t('destination')}
                        >
                        </input>
                        {
                            error.destination &&
                            <p className="text-red-500 text-xs mt-1">
                                {error.destination}
                            </p>
                        }
                    </div>

                    <div className="flex flex-col w-64">
                        <Calendar 
                            value={formData.date}
                        />
                    </div>


                    <button 
                        type="submit" 
                        className="cursor-pointer h-full bg-amber-400 px-4 py-2 rounded"
                    >
                        {t('search')}
                    </button>
                </div>
            </form>
        </div>
    );
}