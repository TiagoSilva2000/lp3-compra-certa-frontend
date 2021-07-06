import React from "react";
import { FunnelChart,Tooltip, LabelList, Funnel} from "recharts";

const data = [
    {
        "value": 100,
        "name": "Cabula",
        "fill": "#8884d8"
    },
    {
        "value": 80,
        "name": "Nazaré",
        "fill": "#83a6ed"
    },
    {
      "value": 50,
      "name": "Limoeiro",
      "fill": "#8dd1e1"
    },
    {
      "value": 40,
      "name": "BLABLA",
      "fill": "#82ca9d"
    },
    {
      "value": 26,
      "name": "BAIRRO X",
      "fill": "#a4de6c"
    }
  ]

export default function NeighboorhoodFunnelChart(): JSX.Element {
  return (
    <FunnelChart width={730} height={250}>
    <Tooltip />
    <Funnel
      dataKey="value"
      data={data}
      isAnimationActive
    >
      <LabelList position="center" fill="#000" stroke="none" dataKey="name" />
    </Funnel>
  </FunnelChart>
  )
}
                              
 