"use client";
import "@/app/[locale]/globals.css";
import SearchBox from "@/components/SearchBox";
import "flag-icons/css/flag-icons.min.css";
import Link from 'next/link'

import { useRouter } from 'next/navigation'

export default function Home(){
    const router = useRouter();
    function changeLang(e){
        console.log(e.target.value);
        router.push(e.target.value)
    }
    return(
        <div>
            <div className="max-w-max flex gap-5 ">                
                {/* <Link href="/fa">
                    <span className="fi fi-ir p-6 icon"></span>فارسی
                </Link>
                <Link href="/en">
                    <span className="fi fi-um p-6"></span>English
                </Link> */}
                <form>
                    <select onChange={changeLang}>
                        <option disabled>
                            Choose Language
                        </option>
                        <option value="fa">
                            Persian
                        </option>
                        <option value="en">
                            Englihs
                        </option>
                    </select>
                </form>

            </div>
           <div className="relative w-full min-h-max p-10">
                <div className="">
                    <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/hero/hero-e1fa22fb.webp" alt="" />
                </div>
                <div>
                    <SearchBox />
                </div>
            </div>
        </div>
    )
}