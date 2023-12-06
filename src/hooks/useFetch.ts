import { useEffect, useState } from "react";

interface UseFetchDataResult<T> {
    data: T[];
    loading: boolean;
}

function useFetchData<T>(url: string): UseFetchDataResult<T> {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading };
}

export default useFetchData;
