import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
const data = [
    {
      month: 'JAN', deliveryTime: 24
    },
    {
      month: 'FEV', deliveryTime: 48
    },
    {
      month: 'MAR', deliveryTime: 24
    },
    {
      month: 'ABR', deliveryTime: 72
    },
    {
      month: 'MAI', deliveryTime: 86
    },
    {
      month: 'JUN', deliveryTime: 48
    },
    {
      month: 'JUL', deliveryTime: 52
    },
    {
      month: 'AGO', deliveryTime: 64
    },
    {
      month: 'SET', deliveryTime: 0
    },
    {
      month: 'OUT', deliveryTime: 0
    },
    {
      month: 'NOV', deliveryTime: 0
    },
    {
      month: 'DEZ', deliveryTime: 0
    }
  ]

export default function DeliveryLineChart(): JSX.Element {
  return (
    <LineChart
    //   layout="vertical"
      width={700}
      height={300}
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" type="category" />
      <YAxis type="number" domain={[0, "dataMax + 24"]} />
      <Tooltip />
      <Legend />
      <Line name="Tempo de médio em horas" dataKey="deliveryTime" stroke="#8884d8" />
    </LineChart>
  )
}
