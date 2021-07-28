import { useState, useEffect } from 'react';

export const useData = () => {

    const [dataChart, setDataChart] = useState(null);

     useEffect(() => {
   fetch('https://gist.githubusercontent.com/dimanya/abd990644f41f906a3676bf1bebefa5e/raw/5e5bb4746d214a83fc8e5c2784a2c349ea808b67/data.json')
      .then(response => response.json())
      .then(data => {
        let measurementOD = data.filter(event => {
          
          return event.measurementOD
        });

        console.log(measurementOD);

        let res = [];

        // eslint-disable-next-line array-callback-return
        measurementOD.map((item) => {
          let measurementO = item.measurementOD;
          let timestampO = new Date(item.timestamp/1e4);
          let backgroundColorO = item.backgroundColorOD;
          let lite = 0;
            if (item.backgroundColorOD === 1) {
              lite = new Date(item.timestamp/1e4);
            } else {
              lite = 0;
            }
          
          const result = {measurementOD:measurementO, timestamp:timestampO, backgroundColorOD:backgroundColorO, lite:lite};
          res.push(result);
        });

        console.log(res);

        return res;
      })
      .then(setDataChart)
  }, []);
  console.log(dataChart);
    return dataChart;
};