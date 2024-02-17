export default function Card({
  props: { title, src, url, tag, githubUrl, cat },
}: {
  props: {
    title: string;
    src: string;
    url: string;
    tag: [];
    githubUrl: string;
    cat: string;
  };
}) {
  console.log(title);

  return <li>card component</li>;
}
