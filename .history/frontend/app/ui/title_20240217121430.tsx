export default function Title({
  title1,
  title2,
}: {
  title1: string;
  title2: string;
}) {
  return (
    <div>
      <h3>
        <span>{title1}</span>
        {title2 && title2}
      </h3>
    </div>
  );
}
