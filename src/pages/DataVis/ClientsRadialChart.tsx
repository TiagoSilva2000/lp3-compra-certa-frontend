import React from "react";
import { RadialBarChart, Tooltip, RadialBar, Legend} from "recharts";

const data = [
    {
      "name": "cliente A",
      "uv": 3.47,
      "pv": 2400,
      "fill": "#8884d8"
    },
    {
      "name": "Cliente F",
      "uv": 6.6,
      "pv": 4567,
      "fill": "#83a6ed"
    },
    {
      "name": "Cliente R",
      "uv": 12.9,
      "pv": 1398,
      "fill": "#8dd1e1"
    },
    {
      "name": "Cliente X",
      "uv": 23.89,
      "pv": 9800,
      "fill": "#82ca9d"
    },
    {
      "name": "Cliente B",
      "uv": 43.9,
      "pv": 3908,
      "fill": "#a4de6c"
    }
  ]
  

  export default function ClientsRadialChart(): JSX.Element {
    return (
        <RadialBarChart 
        width={330} 
        height={350} 
        innerRadius="10%" 
        outerRadius="80%" 
        data={data} 
        startAngle={180} 
        endAngle={0}
        margin={{ top: 5, right: 5, bottom: 5, left: 0 }}
      >
        <RadialBar label={{ fill: '#666', position: 'insideStart' }} background dataKey='uv' />
        <Legend iconSize={10} width={300} height={100} layout='horizontal'  />
        {/* <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" /> */}
        <Tooltip />
      </RadialBarChart>
    )
  }
                              
  