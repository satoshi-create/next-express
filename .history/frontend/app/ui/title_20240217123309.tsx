

export default function Title({
  title1,
  title2,
}: {
  title1: string;
  title2: string;
}) {
  return (
    <h3 className="text-center ">
      <span>{title1}</span>
      {title2 && title2}
    </h3>
  );
}
