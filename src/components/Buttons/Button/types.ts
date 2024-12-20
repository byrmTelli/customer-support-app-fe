import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  icon?: JSX.Element;
  varient?: "light" | "dark" | "success" | "danger" | "info" ;
  isLoading?: boolean;
}
