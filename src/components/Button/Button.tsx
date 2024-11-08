import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "destructive";
  size?: "sm" | "md" | "lg";
}

const variantClasses = {
  primary:
    "bg-customPalette-sageGreen text-customPalette-ivory font-bold hover:bg-customPalette-sageGreen/90 focus:ring-customPalette-sageGreen",
  secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
  outline:
    "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
  destructive: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
};

const sizeClasses = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
