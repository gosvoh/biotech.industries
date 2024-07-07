import Image, { StaticImageData } from "next/image";

export const HumanCard = ({
  image,
  name,
  position,
  desc,
}: {
  image: StaticImageData;
  name: string;
  position?: string;
  desc: React.ReactNode;
}) => (
  <div className="fcol xl:flex-row gap-4 md:gap-32 3xl:gap-[230px] xl:items-center">
    <Image
      src={image}
      alt={name}
      className="w-1/2 h-fit aspect-square max-w-[405px]"
    />
    <div className="fcol gap-[inherit] md:gap-8">
      <h3 className="text-brand2">{name}</h3>
      {position && <p className="font-bold">{position}</p>}
      <p>{desc}</p>
    </div>
  </div>
);
