import {
  BarChart,
  Bar,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { supportRequests } from "./constants";
import { format, parseISO } from "date-fns";

// Destek taleplerini aylık olarak açılan ve kapanan talep sayısına göre gruplama
const groupByMonth = (requests) => {
  const months = {};

  requests.forEach((request) => {
    const createdMonth = format(parseISO(request.createdAt), "yyyy-MM");
    const closedMonth = request.closedAt
      ? format(parseISO(request.closedAt), "yyyy-MM")
      : null;

    // Açılan talepler için ay gruplaması
    if (!months[createdMonth]) {
      months[createdMonth] = { month: createdMonth, opened: 0, closed: 0 };
    }
    months[createdMonth].opened += 1;

    // Kapanan talepler için ay gruplaması
    if (closedMonth) {
      if (!months[closedMonth]) {
        months[closedMonth] = { month: closedMonth, opened: 0, closed: 0 };
      }
      months[closedMonth].closed += 1;
    }
  });

  return Object.values(months);
};

const monthlyData = groupByMonth(supportRequests);

export default function MonthlySupportRequestsBarChart() {
  return (
    <ResponsiveContainer width={"100%"} height={250}>
      <BarChart data={monthlyData}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="opened" fill="#82ca9d" name="Açılan Talepler" />
        <Bar dataKey="closed" fill="#8884d8" name="Kapanan Talepler" />
      </BarChart>
    </ResponsiveContainer>
  );
}
