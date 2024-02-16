import Link from "next/link";

export default function Button() {
  // const { btnWidth, title, path } = props;
  return (
    <>
      <Link>
        <button>{title}</button>
      </Link>
    </>
  );
}
