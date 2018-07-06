import React from "react";
import { AreaChart, Line, Area, YAxis } from "recharts";

export default props => {
  return (
    <div>
      <AreaChart width={300} height={100} data={props.data}>
        <Line
          type="monotone"
          dot={false}
          dataKey={props.dataKey}
          stroke={props.color}
        />
        <Area
          type="monotone"
          dataKey={props.dataKey}
          stroke={props.color}
          fillOpacity={0.2}
          fill={props.color}
        />
        <YAxis
          type="number"
          interval="preserveStartEnd"
          domain={["dataMin", "auto"]}
        />
      </AreaChart>
    </div>
  );
};
