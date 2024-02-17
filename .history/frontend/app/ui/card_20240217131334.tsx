export default function Card({
  props: { title,src,url },
}: {
    props: { title: string;src };
}) {
  console.log(title);

  return <li>card component</li>;
}
