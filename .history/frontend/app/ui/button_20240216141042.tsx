import Link from "next/link";

export default function Button({props}) {
  const { btnWidth, title, path } = props;
  return (
    <Link href="/">
      <button>btn comp</button>
    </Link>
  );
}
