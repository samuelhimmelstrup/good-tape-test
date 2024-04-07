import { shuffleArray } from "~/utils";

export const fetchRandomStories = async(): Promise<StoryWithAuthor[]> => {
  const topStoriesIds = await fetchTopStories();

  const shuffledIds = shuffleArray(topStoriesIds);
  const selectedIds = shuffledIds.slice(0, 10);

  const storiesWithAuthors = await Promise.all(
    selectedIds.map(async (id) => {
      const story = await fetchStoryById(id);
      const author = await fetchAuthorById(story.by);
      return { story, author };
    })
  );

  storiesWithAuthors.sort((a, b) => a.story.score - b.story.score);

  return storiesWithAuthors
}

const fetchTopStories = async (): Promise<number[]> => {
  const response = await fetch(
    'https://hacker-news.firebaseio.com/v0/topstories.json'
  );
  return response.json();
}

const fetchStoryById = async (id: number): Promise<Story> => {
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );
  return response.json();
}

const fetchAuthorById = async (id: string): Promise<Author> => {
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/user/${id}.json`
  );
  return response.json();
}