import { useState, useEffect } from 'react';

export const useData = () => {

    const [dataChart, setDataChart] = useState(null);

     useEffect(() => {
   fetch('https://gist.githubusercontent.com/dimanya/abd990644f41f906a3676bf1bebefa5e/raw/5e5bb4746d214a83fc8e5c2784a2c349ea808b67/data.json')
      .then(response => response.json())
      .then(data => {
        let measurementOD = data.filter(event => {
          
          return event.measurementOD && event.measurementOS
        });

        let res = [];

        // eslint-disable-next-line array-callback-return
        measurementOD.map((item) => {
          let measurementO = item.measurementOD;
          let measurementS = item.measurementOS;
          let timestampO = new Date(item.timestamp/1e4);
          let backgroundColorO = item.backgroundColorOD;
          let backgroundColorS = item.backgroundColorOS;

          let lite = 0;
            if (backgroundColorO === 1) {
              lite = new Date(item.timestamp/1e4);
              backgroundColorO = 255;
            }
            if (backgroundColorO > 1) {
              lite = new Date(item.timestamp/1e4);
            }

          let lites = 0;
            if (backgroundColorS === 1) {
              lites = new Date(item.timestamp/1e4);
              backgroundColorS = 255;
            }
            if (backgroundColorS > 1) {
              lites = new Date(item.timestamp/1e4);
            }
          
          const result = {
            measurementOD:measurementO, 
            measurementOS:measurementS, 
            timestamp:timestampO, 
            backgroundColorOD:backgroundColorO, 
            backgroundColorOS:backgroundColorS,
            lite:lite,
            lites:lites
          };
          res.push(result);
        });

        return res;
      })
      .then(setDataChart)
  }, []);

    return dataChart;
};