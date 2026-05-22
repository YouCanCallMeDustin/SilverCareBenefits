import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isLoading?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  isLoading,
  className = "",
  disabled,
  children,
  ...props
}: ButtonProps) {
  const baseStyle =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const variants = {
    primary: "bg-primary text-background hover:bg-primary-hover shadow-sm shadow-primary/10 hover:shadow-md hover:shadow-primary/20",
    secondary: "bg-primary-light text-primary hover:bg-primary/10",
    outline: "border border-silver/50 text-foreground hover:bg-black/5 dark:hover:bg-white/5 hover:border-foreground/50",
    ghost: "text-foreground hover:bg-black/5 dark:hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-xs md:text-sm",
    md: "px-6 py-2.5 text-sm md:text-base",
    lg: "px-8 py-3.5 text-base md:text-lg",
  };

  const loadingSpinner = (
    <svg
      className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
      <path
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        className="opacity-75"
      />
    </svg>
  );

  const combinedClassName = `${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {isLoading && loadingSpinner}
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} disabled={disabled || isLoading} {...props}>
      {isLoading && loadingSpinner}
      {children}
    </button>
  );
}
