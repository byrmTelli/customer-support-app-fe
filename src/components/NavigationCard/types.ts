import { ReactNode } from "react";

interface NavigationCardComponentProps {
  title: string;
  icon: ReactNode;
  content: string;
}

export type NavigationCardProps = NavigationCardComponentProps;
