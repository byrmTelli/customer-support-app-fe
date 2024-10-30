import { ReactNode } from "react";

interface DashboardCardComponentProps {
  title: string;
  score: number;
  hint: string;
  icon: ReactNode;
  className: string;
}

export type DashboardCardProps = DashboardCardComponentProps;
