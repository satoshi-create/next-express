export default function Title({
  title1,
  title2,
}: {
  title1: string;
  title2: string;
}) {
  return (
    <h3 className="text-center font-bold text-title mb-16">
      <span className="text-primary-blue-01">{title1}</span>
      {title2 && title2}
      <div className="w-[70px] h-[6px] bg-primary-blue-01 m-auto"></div>
    </h3>
  );
}
