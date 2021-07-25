import { useState, useEffect } from 'react';
import { json } from 'd3';
import * as input from './dataChart.json';

export const useData = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
      const row = d => {
        d.measurementOD = +d.measurementOD;
        d.timestamp = new Date(d.timestamp / 10);
        return d;
      };
      json(input, row).then(setData);
    }, []);

    console.log(data);
   
    return data;
};