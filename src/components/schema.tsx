import { cn } from "@/lib/utils";
import React from "react";

export const Schema = ({
  color,
  items,
  title,
  className,
  listClassName,
  listItemClassName,
}: {
  color: "brand" | "brand2";
  title?: string;
  items: string[] | React.ReactNode[];
  className?: string;
  listClassName?: string;
  listItemClassName?: string;
}) => (
  <div className={cn("fcol gap-8", className)}>
    {title && <h3 className={`border-b-2 border-${color} pb-3`}>{title}</h3>}
    <div role="list" className={listClassName}>
      {items.map((item, i) =>
        typeof item === "string" ? (
          <p className={color} role="listitem" key={`schema-item-${i}`}>
            {item}
          </p>
        ) : (
          <div
            className={cn(color, listItemClassName)}
            role="listitem"
            key={`schema-item-${i}`}
          >
            {item}
          </div>
        )
      )}
    </div>
  </div>
);
