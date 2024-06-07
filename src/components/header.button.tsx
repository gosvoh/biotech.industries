export default function HeaderButton(
  props: React.HTMLProps<HTMLAnchorElement>
) {
  return (
    <a
      {...props}
      className={[
        "text-base md:text-lg lg:text-xl xl:text-2xl",
        "text-secondary",
        "hover:text-primary hover:underline",
        "transition-all duration-300 ease-out",
      ].join(" ")}
    />
  );
}
