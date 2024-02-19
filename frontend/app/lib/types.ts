export interface sites {
  title: string;
  src: string;
  url: string;
  tag: string[];
  githubUrl: string;
  cat: string;
}

export interface designs {
  id: number;
  path: string;
  name: string;
  nameen: string;
  icon: icon[];
  bgc: string;
  cover: boolean;
}

interface icon {
  src: string;
  name: string;
}
