import { cn } from "@/lib/utils";

export default function Card({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "fcol gap-6 p-10 border border-white rounded-lg flex-1",
        className
      )}
    >
      <h3 className="text-brand2 text-4xl xl:text-5xl">{title}</h3>
      <p className="text-xl xl:text-2xl">{description}</p>
    </div>
  );
}
