import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export function Card({ className = "", hoverEffect = false, children, ...props }: CardProps) {
  const hoverClass = hoverEffect
    ? "hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1"
    : "";

  return (
    <div
      className={`bg-card-bg border border-card-border rounded-2xl shadow-sm overflow-hidden transition-all duration-300 ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-6 pb-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ className = "", children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={`text-xl font-serif font-bold text-foreground tracking-tight leading-snug ${className}`} {...props}>
      {children}
    </h3>
  );
}

export function CardDescription({ className = "", children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={`text-sm text-foreground/70 mt-1.5 leading-relaxed ${className}`} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-6 pt-0 border-t border-card-border/50 flex items-center justify-between ${className}`} {...props}>
      {children}
    </div>
  );
}
