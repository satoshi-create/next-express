export default function Card({
  props: { title,src,url,tag,githuburl },
}: {
    props: { title: string; src: string; url: string; tag: []; };
}) {
  console.log(title);

  return <li>card component</li>;
}
