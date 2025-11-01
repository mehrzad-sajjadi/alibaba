'use client'

import Calendar from "@/components/Calendar";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });


export default function SearchBox() {
    const t = useTranslations('HomePage');

    const [formData,setFormData] = useState({
        origin:"",
        destination:"",
        date:""
    });
    const [child,setChild] = useState();
    function handleDataFromChild(data){
        setChild(data);
    }

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

        return Object.keys(newError).length == 0;

    }
    

    function submitHandler(e){
        e.preventDefault();
        if(validation()){
            console.log(formData);
        }
    }

    
    const [options, setOptions] = useState([]);
    useEffect(() => {
        fetch("/api/cities")
        .then(res => res.json())
        .then(data => {
            if (data.success) {
            const formatted = data.data.map(city => ({
                value: city.code,
                label: city.fa, 
            }));
            setOptions(formatted);
            }
        });
    }, []);
    //Select Origin
    const [cityOrigin,setCityOrigin] = useState();
    const selectOriginCity=(e)=>{
        setCityOrigin(e);
        console.log(cityOrigin);
    }
    //Select Destination
    const [cityDestination,setCityDestination] = useState();
    const selectDestinationCity=(e)=>{
        setCityDestination(e);
        console.log(cityDestination);
    }

    return (
        <div className="w-[80%] absolute bottom-1 left-1/2 -translate-x-1/2 bg-white border border-black p-4 rounded-lg shadow-lg">
            <form onSubmit={submitHandler}>
                <div className="flex justify-center min-h-min items-start gap-4">

                    <div className="flex flex-col w-64">

                        <Select 
                            options={options}
                            onChange={selectOriginCity}
                            placeholder={t('origin')}
                        />
                        {/* {
                            error.origin && 
                            <p className="text-red-500 text-xs mt-1">
                                {error.origin}
                            </p>
                        } */}
                    </div>

                    <div className="flex flex-col w-64">
                        <Select 
                            name="destination"
                            options={options}
                            onChange={selectDestinationCity}
                            placeholder={t('destination')}
                        />

                        {
                            error.destination &&
                            <p className="text-red-500 text-xs mt-1">
                                {error.destination}
                            </p>
                        }
                    </div>

                    <div className="flex flex-col w-64">
                        <Calendar 
                            requestData={handleDataFromChild}
                            value={formData.date}
                        />
                    </div>
                    {child}

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