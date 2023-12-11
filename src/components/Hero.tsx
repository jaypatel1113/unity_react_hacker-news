import { useEffect, useState } from "react";

import { useDebounce } from "../hooks/useDebounce";
import { useFetchData } from "../hooks/useFetch";
import type { NewsType } from "../types";

import Loader from "./loaders/Loader";
import ImgMediaCard from "./ui/Card";
import TopBar from "./ui/TopBar";

const HeroSection = () => {
    const [searchValue, setSearchValue] = useState("");

    const debouncedSearch = useDebounce(searchValue);

    const { data, loading } = useFetchData<NewsType>(`https://hn.algolia.com/api/v1/search?query=${debouncedSearch}`);

    useEffect(() => {
        document.title = "Hacker News | Unity Internet Private Limited";
    }, []);

    return (
        <div className="font-sans pb-10">
            <TopBar searchValue={searchValue} setSearchValue={setSearchValue} />
            <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-20 gap-x-5 gap-y-5 md:gap-y-10 min-h-[calc(100vh-40px)]">
            {
                loading ? <Loader message="Fetching API" /> : data?.hits.map((hit) =>
                    hit.title ? <ImgMediaCard hit={hit} key={hit.objectID} /> : null
                )
            }
            </div>
        </div>
    );
}


export default HeroSection;