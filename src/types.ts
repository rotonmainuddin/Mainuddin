export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  behanceUrl: string;
  description: string;
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
}
