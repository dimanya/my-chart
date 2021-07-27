//import { useState, useEffect } from 'react';
//import { csv } from 'd3';

//const csvUrl =
  //'https://gist.githubusercontent.com/curran/90240a6d88bdb1411467b21ea0769029/raw/7d4c3914cc6a29a7f5165f7d5d82b735d97bcfe4/week_temperature_sf.csv';

//export const useData = () => {
  //const [data, setData] = useState(null);

  //useEffect(() => {
    //const row = d => {
      //d.temperature = +d.temperature;
      //d.timestamp = new Date(d.timestamp);
      //return d;
    //};
    //csv(csvUrl, row).then(setData);
  //}, []);
  //console.log(data);
  //return data;
//};


import { useState, useEffect } from 'react';
import { json } from 'd3';

const jsonUrl =
  'https://gist.githubusercontent.com/dimanya/abd990644f41f906a3676bf1bebefa5e/raw/5e5bb4746d214a83fc8e5c2784a2c349ea808b67/data.json';

export const useData = () => {

    const [data, setData] = useState(null);

     useEffect(() => {
   const row = d => {
      d.measurementOD = +d.measurementOD;
      d.timestamp = new Date(d.timestamp/1e4);
      
      return d;
    };
    json(jsonUrl, row).then(setData);
  }, []);
  console.log(data);
    return data;
};