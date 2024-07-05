import { cn } from "@/lib/utils";

export default function Card({
  smallText,
  text,
  styles,
}: {
  smallText: string;
  text: React.ReactNode;
  styles?: {
    body?: string;
    smallText?: string;
    text?: string;
  };
}) {
  return (
    <div
      className={cn(
        "fcol gap-[120px] rounded-[20px] p-10",
        "bg-secondary hover:bg-brand",
        "text-primary-white hover:text-primary-black",
        "transition-all duration-300",
        "h-full",
        styles?.body
      )}
    >
      <p className={cn("text-3xl", styles?.smallText)}>[{smallText}]</p>
      <p className={cn("text-3xl 2xl:text-4xl font-bold", styles?.text)}>
        {text}
      </p>
    </div>
  );
}
