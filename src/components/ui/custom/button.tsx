import { cn } from "@/lib/utils";
import React from "react";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  return (
    <button
      className={cn(
        "rounded-full",
        "px-10 py-5",
        "text-2xl md:text-3xl font-bold",
        "bg-primary-white text-primary-black",
        "transition-all duration-300",
        "hover:bg-brand2 hover:shadow-[2px_10px_20px_-5px_hsl(var(--brand2))]",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export default Button;
