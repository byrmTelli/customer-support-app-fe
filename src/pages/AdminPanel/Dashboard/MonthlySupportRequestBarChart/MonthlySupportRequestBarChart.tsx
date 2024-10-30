import {
  BarChart,
  Bar,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { MonthlySupportRequestBarChartProps } from "./types";

export default function MonthlySupportRequestsBarChart({
  data,
}: MonthlySupportRequestBarChartProps) {
  // States

  return (
    <div className="w-full h-full px-2 py-8">
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="openedCount" fill="#82ca9d" name="Açılan Talepler" />
          <Bar dataKey="closedCount" fill="#8884d8" name="Kapanan Talepler" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
