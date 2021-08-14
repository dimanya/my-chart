import { line, curveNatural } from 'd3';
export const Marks = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  yValueS,
  tooltipFormat,
  circleRadius
}) => (
  
  <g>
    <path className="os"
      fill="none"
      stroke="black"
      d={line()
        .x(d => xScale(xValue(d)))
        .y(d => yScale(yValueS(d)))
        .curve(curveNatural)(data)}
    />
    <path className="od"
      fill="none"
      stroke="black"
      d={line()
        .x(d => xScale(xValue(d)))
        .y(d => yScale(yValue(d)))
        .curve(curveNatural)(data)}
    />
    
    {
      //data.map(d => (
      //  <circle cx={xScale(xValue(d))} cy={yScale(yValue(d))} r={circleRadius}>
      //    <title>{tooltipFormat(xValue(d))}</title>
      //  </circle>
      //))
    }
    {data.map((d) => (
        <rect className="rect"
          //key={d.measurementOD}
          x={xScale(d.lite)}
          y={435}
          width={1}
          height={20}
          
        />
      ))}
    {data.map((d) => (
        <rect className="rect"
          //key={d.measurementOD}
          x={xScale(d.lites)}
          y={460}
          width={1}
          height={20}
          
        />
      ))}
  </g>
  
);
