export default function Card({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="fcol gap-6 p-10 border border-white rounded-lg flex-1">
      <h3 className="text-brand2 text-4xl xl:text-5xl">{title}</h3>
      <p className="text-xl xl:text-2xl">{description}</p>
    </div>
  );
}
