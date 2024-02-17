export default function Card({
  props: {
    title: { title: string },
  },
}) {
  console.log(title);

  return <li>card component</li>;
}
