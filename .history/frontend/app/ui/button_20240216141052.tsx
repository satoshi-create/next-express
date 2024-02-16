import Link from "next/link";

export default function Button({props}) {
  const {  title, path } = props;
  return (
    <Link href={path}>
      <button>btn comp</button>
    </Link>
  );
}
