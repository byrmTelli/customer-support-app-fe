import { DashboardCardProps } from "./types";

export default function DashboardCard({
  title,
  hint,
  score,
  icon,
  className,
}: DashboardCardProps) {
  return (
    <div
      className={`border border-gray-400 rounded-lg text-gray-700 select-none hover:bg-gray-200 ${className}`}
    >
      <div className="text-4xl">{icon}</div>
      <h1 className="text-xl font-bold">{title}</h1>
      <h4 className="text-5xl font-semibold text-gray-800">{score}</h4>
      <p className="text-xs mt-2">{hint}</p>
    </div>
  );
}
