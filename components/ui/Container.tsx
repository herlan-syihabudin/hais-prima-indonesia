import { ElementType, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  padding?: boolean;
}

export default function Container({
  children,
  className = "",
  as: Component = "div",
  maxWidth = "xl",
  padding = true,
}: ContainerProps) {
  const maxWidthClasses = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    "2xl": "max-w-screen-2xl",
    full: "max-w-full",
  };

  const paddingClasses = padding ? "px-4 sm:px-6 lg:px-8" : "";

  return (
    <Component
      className={`mx-auto w-full ${maxWidthClasses[maxWidth]} ${paddingClasses} ${className}`}
    >
      {children}
    </Component>
  );
}
