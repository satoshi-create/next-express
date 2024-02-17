export default function Card({
  props: { title,src,url },
}: {
  props: { title: string };
}) {
  console.log(title);

  return <li>card component</li>;
}
