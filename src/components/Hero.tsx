import { useEffect, useState } from "react";
import useFetchData from "../hooks/useFetch";
import { NewsType } from "../types";
import { useDebounce } from "../hooks/useDebounce";
import TopBar from "./ui/TopBar";
import ImgMediaCard from "./ui/Card";
import { Container } from "@mui/material";

export default function HeroSection() {
    const [searchValue, setSearchValue] = useState("");

    const debouncedSearch = useDebounce(searchValue);

    const { data, loading } = useFetchData<NewsType>(`http://hn.algolia.com/api/v1/search?query=${debouncedSearch}`);

    useEffect(() => {
        document.title = "Hacker News | Unity Internet Private Limited";
    }, []);

    return (
        <div className="font-sans pb-10">
            <TopBar searchValue={searchValue} setSearchValue={setSearchValue} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-20">
            {
                loading ? <>Loading...</> : data?.hits.map((hit) =>
                hit.title ? (
                        <Container maxWidth="xl" sx={{ flexGrow: 1 }} key={hit.created_at_i}>
                            <ImgMediaCard hit={hit} />
                        </Container>
                    ) : null
                )
            }
            </div>
        </div>
    );
}
