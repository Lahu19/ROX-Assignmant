import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";
import "./index.css";

export function StatsChart({ itemPriceRange, monthName }) {
  let list = Object.keys(itemPriceRange);
  list = list.map((each) => ({
    name: each,
    items: itemPriceRange[each],
  }));

  return (
    <div className="chart_container">
      <h2>
        Bar Charts Stats - {monthName}
      </h2>
      <ResponsiveContainer width="70%">
        <BarChart
          width="700"
          height="700"
          data={list}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" />
          <YAxis interval={19} tickCount={81} allowDecimals={false} />
          <Tooltip contentStyle={{color:'#378CE7'}} />
          <Legend />
          <Bar dataKey="items" fill="#378CE7" barSize={40}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
