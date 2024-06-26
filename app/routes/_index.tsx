import { json, redirect, type MetaFunction } from '@remix-run/node';
import { Form, Link, useLoaderData, useNavigation } from '@remix-run/react';
import { LoadingSpinner } from '~/components/LoadingSpinner';
import { Story } from '~/components/Story';
import { fetchRandomStories } from '~/services/hackerNewsApi.server';

export const meta: MetaFunction = () => {
  return [
    { title: 'Good Tape Test' },
    {
      name: 'Good decision making and clean code - will hopefully impress everybody',
      content: 'Random stories from Hacker News',
    },
  ];
};

export async function loader() {
  const storiesWithAuthors = await fetchRandomStories();
  return json(storiesWithAuthors);
}

export const action = async () => {
  return redirect('/');
};

export default function Index() {
  const storiesWithAuthors: StoryWithAuthor[] = useLoaderData<typeof loader>();
  const navigation = useNavigation();

  const isLoading = navigation.state !== 'idle';

  return (
    <div className='flex flex-col items-center h-screen w-screen mt-20 sm:mt-5'>
      <button className='btn-custom absolute top-5 right-5'>
        <Link to='/prototype'>To Prototype</Link>
      </button>
      <div className='w-[min(100vw,500px)] px-4'>
        <div className='flex flex-col items-center w-100% mb-8'>
          <h1 className='mb-5 text-center'>Random popular stories</h1>

          <Form method='post'>
            <button type='submit' className='btn-custom' disabled={isLoading}>
              Show me some other stories
            </button>
          </Form>
        </div>

        {isLoading && <LoadingSpinner />}

        {storiesWithAuthors.map(({ story, author }) => (
          <Story key={story.id} story={story} author={author} />
        ))}
      </div>
    </div>
  );
}
