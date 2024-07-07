import { cn } from "@/lib/utils";

export const Schema = ({
  color,
  items,
  title,
  className,
}: {
  color: "brand" | "brand2";
  title?: string;
  items: string[];
  className?: string;
}) => (
  <div className={cn("fcol gap-8", className)}>
    {title && <h3 className={`border-b-2 border-${color} pb-3`}>{title}</h3>}
    <div role="list">
      {items.map((item, i) => (
        <p className={color} role="listitem" key={`schema-item-${i}`}>
          {item}
        </p>
      ))}
    </div>
  </div>
);
