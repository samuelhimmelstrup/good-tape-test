type Story = {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

type Author = {
  about: string;
  created: number;
  delay: number;
  id: string;
  karma: number;
  submitted: number[];
}

type StoryWithAuthor = {
  story: Story;
  author: Author;
}
