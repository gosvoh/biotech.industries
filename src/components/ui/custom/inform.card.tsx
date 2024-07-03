import { cn } from "@/lib/utils";

export default function InformCard({
  bigText,
  text,
  styles,
}: {
  bigText: string;
  text: string;
  styles?: {
    body?: string;
    bigText?: string;
    text?: string;
  };
}) {
  return (
    <div
      className={cn(
        "fcol items-center justify-center flex-1",
        "bg-secondary border border-brand2 rounded-[20px]",
        "px-10 py-5",
        "hover:shadow-[2px_10px_90px_-20px_hsl(var(--brand2))]",
        "transition-all duration-300",
        styles?.body
      )}
    >
      <p
        className={cn(
          "text-brand2 font-bold text-5xl md:text-6xl",
          styles?.bigText
        )}
      >
        {bigText}
      </p>
      <p
        className={cn(
          "text-primary-white text-2xl md:text-3xl text-center",
          "min-h-[3.6rem] md:min-h-[4.8rem]",
          styles?.text
        )}
      >
        {text}
      </p>
    </div>
  );
}
