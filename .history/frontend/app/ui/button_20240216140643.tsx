import Link from "next/link";

export default function Button() {
  const { btnWidth, title, path } = props;
  return (
    <>
      
      <Link href={path}>
          <button >
            {title}
          </button>
      </Link>
    </>
}
