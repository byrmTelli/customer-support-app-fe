import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

// Veriler
const data = [
  { name: "Açılan Talepler", value: 60 },
  { name: "Kapanan Talepler", value: 40 },
];

// İki Seviye Pasta Grafiği Verisi
const innerData = [{ name: "Açılan Talepler", value: 60 }];
const outerData = [{ name: "Kapanan Talepler", value: 40 }];

// Renk paleti
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function MonthlyPieCharts() {
  return (
    <div className="flex">
      {/* TwoLevelPieChart */}
      <div style={{ width: "50%", height: 300 }}>
        <h3>Two Level Pie Chart</h3>
        <ResponsiveContainer>
          <PieChart>
            <Tooltip />
            {/* İç Çember */}
            <Pie
              data={innerData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#82ca9d"
            >
              {innerData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            {/* Dış Çember */}
            <Pie
              data={outerData}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={90}
              outerRadius={120}
              fill="#8884d8"
              label
            >
              {outerData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* PieChartWithPaddingAngle */}
      <div style={{ width: "50%", height: 300 }}>
        <h3>Pie Chart with Padding Angle</h3>
        <ResponsiveContainer>
          <PieChart>
            <Tooltip />
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={120}
              paddingAngle={5}
              fill="#82ca9d"
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
