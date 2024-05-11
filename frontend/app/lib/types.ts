export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Sites {
  title: string;
  src: string;
  url: string;
  tag: string[];
  githubUrl: string;
  cat: string;
}

export interface Designs {
  id: number;
  path: string;
  name: string;
  nameen: string;
  icon: Icon[];
  bgc: string;
  cover: boolean;
}

interface Icon {
  src: string;
  name: string;
}
