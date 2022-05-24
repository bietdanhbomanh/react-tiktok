import { useState, useEffect } from 'react';

function useDebounce(debouce, delay) {
    const [result, setResult] = useState(debouce);

    useEffect(() => {
        const id = setTimeout(() => {
            setResult(debouce);
        }, delay);
        return () => clearTimeout(id);
    }, [debouce, delay]);
    return result;
}

export default useDebounce;
