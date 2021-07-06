import React from "react";
import { RadialBarChart, Tooltip, RadialBar, Legend} from "recharts";

const data = [
    {
      "name": "cliente A",
      "%": 3.47,
      "fill": "#8884d8"
    },
    {
      "name": "Cliente F",
      "%": 6.6,
      "fill": "#83a6ed"
    },
    {
      "name": "Cliente R",
      "%": 12.9,
      "fill": "#8dd1e1"
    },
    {
      "name": "Cliente X",
      "%": 23.89,
      "fill": "#82ca9d"
    },
    {
      "name": "Cliente B",
      "%": 43.9,
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
        <RadialBar label={{ fill: '#666', position: 'insideStart' }} background dataKey='%' />
        <Legend iconSize={10} width={300} height={100} layout='horizontal'  />
        {/* <Tooltip /> */}
      </RadialBarChart>
    )
  }
                              
  