import { useEffect, useState } from "react";

import type { NewsType } from "../types";
import { useDebounce } from "../hooks/useDebounce";
import { useFetchData } from "../hooks/useFetch";
import TopBar from "./ui/TopBar";
import ImgMediaCard from "./ui/Card";

const HeroSection = () => {
    const [searchValue, setSearchValue] = useState("");

    const debouncedSearch = useDebounce(searchValue);

    const { data, loading } = useFetchData<NewsType>(`http://hn.algolia.com/api/v1/search?query=${debouncedSearch}`);

    useEffect(() => {
        document.title = "Hacker News | Unity Internet Private Limited";
    }, []);

    return (
        <div className="font-sans pb-10">
            <TopBar searchValue={searchValue} setSearchValue={setSearchValue} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-20 gap-x-5 gap-y-5 md:gap-y-10">
            {
                loading ? <>Loading...</> : data?.hits.map((hit) =>
                    hit.title ? <ImgMediaCard hit={hit} key={hit.objectID} /> : null
                )
            }
            </div>
        </div>
    );
}


export default HeroSection;