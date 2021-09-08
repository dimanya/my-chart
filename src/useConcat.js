import { useEffect, useState } from 'react';
import { useChunks } from './useChunks';
import { useData } from './useData';


export const useConcat = () => {
    const data = useData();
    const currentChunks = useChunks();

        const [currentConcat, setCurrentConcat] = useState([]);

        useEffect(() => {
            if(data) {

                setCurrentConcat(currentConcat.concat(currentChunks));

                console.log(currentConcat);

        }}, [data, currentChunks]);

    console.log(currentConcat);

    return currentConcat;
};

