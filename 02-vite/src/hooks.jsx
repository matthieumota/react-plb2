import axios from 'axios';
import { useEffect, useState } from 'react';

function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [ending, setEnding] = useState(false);

    const fetchData = () => {
        setLoading(true);

        axios.get(url).then(response => {
            setEnding(response.data.length === 0);
            setData([...data, ...response.data]);
        }).finally(() =>
            setTimeout(() => setLoading(false), 500)
        );
    }

    useEffect(() => {
        fetchData();
    }, [url]);

    return { data, loading, fetchData, ending }
}

export { useFetch }
