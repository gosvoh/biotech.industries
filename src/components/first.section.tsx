import Image, { StaticImageData } from "next/image";
import Breadcrumbs from "./ui/custom/breadcrumbs";
import Glow1 from "@public/glow 1.png";
import Button from "./ui/custom/button";
import { cn } from "@/lib/utils";

export default function FirstSection({
  image,
  breadcrumbs,
  title,
  subtitle,
}: {
  image: StaticImageData;
  breadcrumbs: React.ComponentProps<typeof Breadcrumbs>["items"];
  title: string;
  subtitle: React.ReactNode;
}) {
  return (
    <section className="fcol gap-16 relative overflow-x-clip md:overflow-y-hidden max-w-none px-0">
      <Breadcrumbs items={breadcrumbs} />
      <div className="fcol gap-8 wrapper">
        <Image
          src={image}
          alt=""
          className={cn(
            "top-1/2 right-[10%] -z-10 max-w-none rotate-[12.17deg] aspect-square w-1/2 max-h-[25vh]",
            "md:absolute md:translate-x-1/2 md:-translate-y-1/2 md:max-h-[75%] md:w-1/3"
          )}
        />
        <div className="xl:max-w-[70%] fcol gap-8">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <Button className="md:hidden mt-8" />
        </div>
      </div>
      <Image
        src={Glow1}
        alt=""
        className="absolute top-0 right-0 -z-10 translate-x-1/2 -translate-y-1/2 max-w-none w-[250%] md:w-full min-w-full"
      />
    </section>
  );
}
