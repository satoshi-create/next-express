export default function Card({
  props: { title,src,url,tag },
}: {
    props: { title: string; src: string; url: string;tag:[] };
}) {
  console.log(title);

  return <li>card component</li>;
}
