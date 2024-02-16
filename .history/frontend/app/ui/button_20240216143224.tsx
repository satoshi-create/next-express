import Link from "next/link";
export default function Button({
  title,
  path,
}: {
  title: string;
  path: string;
}) {
  return (
    <Link href={path}>
      <button className="border border-accent-clr-01 rounded-full text-white bg-accent-clr-01 p-buttonpadding hover:bg-white hover:text-accent-clr-01 transition ">
        {title}
      </button>
    </Link>
  );
}
