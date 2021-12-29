import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import {chartParam} from '@/models/model'


const data:Array<chartParam> = [
  {time:'00:00', amount:0},       
  {time:'03:00', amount:300},
  {time:'06:00', amount:600},
  {time:'09:00', amount:800},
  {time:'12:00', amount:1500},
  {time:'15:00', amount:2000},
  {time:'18:00', amount:2400},
  {time:'21:00', amount:2400},
  {time:'24:00', amount:undefined},
]


// Generate Sales Data
function createData(data:Array<chartParam>) {
  return data.map((x)=>{
    return {x.time,x.amount};
  })
}


export default function Chart() {
  const theme = useTheme();

  return (
    <>
      <Title>Today</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}