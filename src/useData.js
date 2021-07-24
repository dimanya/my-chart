import { useState, useEffect } from 'react';
import { csv } from 'd3';

const dataUrl = 'https://gist.githubusercontent.com/dimanya/b8fecef0216831feac0c1715cf79e2a4/raw/26face2c66bd5e5aa6c52efaf05496c423cd1767/OD.csv';

export const useData = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
      const row = d => {
        d.measurementOD = +d.measurementOD;
        d.timestamp = new Date(d.timestamp / 10);
        return d;
      };
      csv(dataUrl, row).then(setData);
    }, []);

    console.log(data);
    return data;
};