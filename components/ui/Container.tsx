import { ElementType, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "7xl" | "8xl";
  padding?: boolean;
  id?: string;
  background?: "white" | "gray" | "transparent";
}

export default function Container({
  children,
  className = "",
  as: Component = "div",
  maxWidth = "xl",
  padding = true,
  id,
  background = "transparent",
}: ContainerProps) {
  const maxWidthClasses = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    "2xl": "max-w-screen-2xl",
    "7xl": "max-w-7xl",
    "8xl": "max-w-8xl",
    full: "max-w-full",
  };

  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    transparent: "bg-transparent",
  };

  const paddingClasses = padding ? "px-4 sm:px-6 lg:px-8" : "";

  return (
    <Component
      id={id}
      className={`mx-auto w-full ${maxWidthClasses[maxWidth]} ${backgroundClasses[background]} ${paddingClasses} ${className}`}
    >
      {children}
    </Component>
  );
}
