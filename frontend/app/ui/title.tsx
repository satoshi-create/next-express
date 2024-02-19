export default function Title({
  title1,
  title2,
  underline,
}: {
  title1: string;
  title2: string;
  underline: string;
}) {
  return (
    <h3 className="text-center font-bold text-title mb-8">
      <span className="text-primary-blue-01">{title1}</span>
      {title2 && title2}
      {underline && (
        <div className={`w-[70px] h-[6px] ${underline} m-auto`}></div>
      )}
    </h3>
  );
}
