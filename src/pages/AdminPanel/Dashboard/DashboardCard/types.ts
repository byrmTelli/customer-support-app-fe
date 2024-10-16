import { ReactNode } from "react";

interface DashboardCardComponentProps {
  title: string;
  score: string;
  hint: string;
  icon: ReactNode;
  className: string;
}

export type DashboardCardProps = DashboardCardComponentProps;
