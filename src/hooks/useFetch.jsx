import { useEffect, useState } from "react";
import api from "../utils/api";
import { API_KEY } from "../Constants";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading("loading...");
        setData(null);
        setError(null);

        api
      .get(`${url}?api_key=${API_KEY}&language=en-US&page=1`)
      .then((response) => {
                setLoading(false);
                setData(response.data);
            })
            .catch((err) => {
                setLoading(false);
                setError("Something went wrong!");
            });
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
