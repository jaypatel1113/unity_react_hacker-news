import { useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetch";
import { NewsType } from "../../types";
import { useDebounce } from "../../hooks/useDebounce";
import TopBar from "../TopBar";
import ImgMediaCard from "./Card";
import { Box, Container } from "@mui/material";

export default function SearchAppBar() {
    const [searchValue, setSearchValue] = useState("");

    const debouncedSearch = useDebounce(searchValue);

    const { data, loading } = useFetchData<NewsType>(`http://hn.algolia.com/api/v1/search?query=${debouncedSearch}`);
    
    useEffect(() => {
        console.log(data);
    }, [debouncedSearch]);

    return (
        <div>
            <TopBar searchValue={searchValue} setSearchValue={setSearchValue} />
            {
                loading ? <>Loading...</> : data?.hits.map(hit => (
                    <Container  maxWidth="xl" sx={{ flexGrow: 1 }}>
                        <ImgMediaCard />
                    </Container>
                ))
            }
        </div>
    );
}
