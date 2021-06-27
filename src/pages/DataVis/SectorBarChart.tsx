import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts'

const data = [
  {
    month: 'JAN', preparation: 72, checking: 56, delivery: 124
  },
  {
    month: 'FEV', preparation: 56, checking: 72, delivery: 200
  },
  {
    month: 'MAR', preparation: 72, checking: 56, delivery: 124
  },
  {
    month: 'ABR', preparation: 56, checking: 72, delivery: 200
  },
  {
    month: 'MAI', preparation: 72, checking: 56, delivery: 124
  },
  {
    month: 'JUN', preparation: 56, checking: 72, delivery: 200
  },
  {
    month: 'JUL', preparation: 72, checking: 56, delivery: 124
  },
  {
    month: 'AGO', preparation: 56, checking: 72, delivery: 200
  },
  {
    month: 'SET', preparation: 72, checking: 56, delivery: 124
  },
  {
    month: 'OUT', preparation: 0, checking: 0,delivery: 0
  },
  {
    month: 'NOV', preparation: 0, checking: 0,delivery: 0
  },
  {
    month: 'DEZ', preparation: 0, checking: 0,delivery: 0
  }
]

interface DataProps {
    month: string
    preparation: number
    checking: number
    delivery: number
  }

export default function SectorBarChart(props: DataProps[] ): JSX.Element {

    return (
      <BarChart
        width={700}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="category" dataKey="month"/>
        <YAxis name="Horas" type="number" domain={[0, "dataMax + 24"]}/>
        <Tooltip />
        <Legend />
        <Bar name="PREPARAÇÃO" dataKey="checking" fill="#8884d8" />
        <Bar name="CHECAGEM" dataKey="preparation" fill="#dac405" />
        <Bar name="A ENTREGAR" dataKey="delivery" fill="#691770" />
      </BarChart>
    );
  
}