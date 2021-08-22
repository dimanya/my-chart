import { useEffect, useState } from 'react';
import { bufferCount, from, concatMap, of, delay} from 'rxjs';
import { useData } from './useData';


export const useChunks = () => {
    const data = useData();

        const [currentChunks, setCurrentChunks] = useState([]);

        useEffect(() => {
            if(data) {
                from(data)
            .pipe(bufferCount(1000), concatMap(m => of(m).pipe(delay(1000))))
            .subscribe(chunk => 
                { // 100
                // здесь принимать по 100 сообщений и обрабатывать 
                //console.log(chunk);
    
                   setCurrentChunks(chunk);
                 })
            }
        }, [data]);

    console.log(currentChunks);

    return currentChunks;
};

