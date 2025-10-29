import "@/app/[locale]/globals.css";
import { useTranslations } from "next-intl";
import SearchBox from "@/components/SearchBox";

export default function Home(){
    const t = useTranslations('HomePage');
    return(
        <div>
            <h1 className="text-5xl">{t('title')}</h1>
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