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
      className={`border col-span-1 row-span-1 border-gray-400 rounded-lg text-gray-700 select-none hover:bg-gray-200 ${className}`}
    >
      <div className="text-xl 2xl:text-2xl hidden 2xl:block">{icon}</div>
      <h1 className=" lg:text-lg xl:text-3xl 2xl:text-xl font-bold">{title}</h1>
      <h4 className="lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-gray-800">
        {score}
      </h4>
      <p className="text-sm">{hint}</p>
    </div>
  );
}
