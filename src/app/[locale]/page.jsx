
import "@/app/[locale]/globals.css";
import SearchBox from "@/components/SearchBox";
import "flag-icons/css/flag-icons.min.css";
import Link from 'next/link'
export default function Home(){
    return(
        
        <div>
            <div className="max-w-max flex gap-5 ">
                <Link href="/fa">
                    <span className="fi fi-ir p-6 icon"></span>فارسی
                </Link>
                <Link href="/en">
                    <span className="fi fi-um p-6"></span>English
                </Link>

                {/* <select name="" id="">
                    <option value="fa">
                        <Link href="/fa">
                            <span className="fi fi-ir p-6 icon"></span>فارسی
                        </Link>

                    </option>
                    <option value="en">
                        <Link href="/en">
                            <span className="fi fi-um p-6"></span>English
                        </Link>                        
                    </option>
                    <option value="ar">
                        <Link href="/ar">
                            <span className="fi fi-sa p-6"></span>العربیه
                        </Link>
                    </option>
                </select> */}
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