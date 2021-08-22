import React from 'react';
import { scaleLinear, scaleTime, timeFormat, extent } from 'd3';
import { useData } from './useData';
import { useChunks } from './useChunks';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';

const width = 960;
const height = 500;
const margin = { top: 20, right: 30, bottom: 65, left: 90 };
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 45;

const App = () => {

    const data = useData();
    const currentChunks = useChunks();

    if (!data) {
        return <pre>Loading...</pre>;
    }

    const innerHeight = height - margin.top - margin.bottom;
    const innerWidth = width - margin.left - margin.right;

    const xValue = d => d.timestamp;
    //const xAxisLabel = 'Time';

    const yValue = d => d.measurementOD;
    //const yAxisLabel = 'Measurement OD';

    const yValueS = d => d.measurementOS;

    const xAxisTickFormat = timeFormat('%S s');

    const xScale = scaleTime().domain(extent(data, xValue)).range([0, innerWidth]).nice();

    const yScale = scaleLinear().domain(extent(data, yValueS)).range([innerHeight, 0]).nice();

    return (
            
        <svg width={width} height={height}>
            <g transform={`translate(${margin.left},${margin.top})`}>
                <AxisBottom xScale={xScale} innerHeight={innerHeight} tickFormat={xAxisTickFormat} tickOffset={7} />
                <text className="axis-label" textAnchor="middle" transform={`translate(${-yAxisLabelOffset},${innerHeight / 2}) rotate(-90)`}>
                    {/* {yAxisLabel} */}
                </text>
                <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset={7} />
                <text className="axis-label" x={innerWidth / 2} y={innerHeight + xAxisLabelOffset} textAnchor="middle">
                    {/* {xAxisLabel} */}
                </text>
                <Marks data={currentChunks} xScale={xScale} yScale={yScale} xValue={xValue} yValue={yValue} yValueS={yValueS} tooltipFormat={xAxisTickFormat} circleRadius={3} />
            </g>
        </svg>
    );

        }
        export default App;