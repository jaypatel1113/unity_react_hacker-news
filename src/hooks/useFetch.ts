import { useEffect, useState } from "react";
import { ErrorType } from "../types";

interface UseFetchDataResult<T> {
    data: T | undefined;
    loading: boolean;
    error: ErrorType | null; // Add an error property to the result
}

export const useFetchData = <T>(url: string): UseFetchDataResult<T> => {
    const [data, setData] = useState<T | undefined>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<ErrorType | null>(null); // Initialize error state

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);

                // Check if the response status is in the range 200-299 (successful)
                if (response.ok) {
                    const contentType = response.headers.get("content-type");
                    if (contentType && contentType.includes("application/json")) {
                        const jsonData = await response.json();
                        setData(jsonData);
                    } else {
                        // Handle non-JSON response, if needed
                        setData(undefined);
                    }
                } else {
                    const errorData = await response.json().catch(() => ({}));
                    setError({message: errorData.error, status: errorData.status});
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
}
