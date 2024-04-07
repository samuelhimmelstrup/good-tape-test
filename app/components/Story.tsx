import { format } from 'date-fns';
import { useAnimate, useInView } from 'framer-motion';
import { useEffect } from 'react';

type Props = { story: Story; author: Author };

export const Story = ({ story, author }: Props) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1, duration: 1000 });
    }
    if (!isInView) {
      animate(scope.current, { opacity: 0, duration: 1000 });
    }
  }, [animate, isInView, scope]);

  const openAuthorUrl = (authorId: string) => {
    window.open(
      `https://news.ycombinator.com/user?id=${authorId}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <a href={story.url} target='_blank' rel='noopener noreferrer'>
      <div key={story.id} ref={scope} className='card-story relative w-100'>
        <h2 className='text-xl font-semibold text-gray-800 hover:text-gray-600 transition-colors :hover-underline'>
          {story.title}
        </h2>
        <div className='absolute bottom-3 right-3 badge-custom'>
          Score: {story.score}
        </div>
        <p className='text-gray-500'>
          Posted: {format(new Date(story.time * 1000), 'MM/dd/yyyy')}
        </p>

        <p className='text-gray-500 mt-2'>
          Author:{' '}
          <button
            className='text-gt_purple hover:text-gt_purple_darker transition-colors'
            onClick={(e) => {
              e.stopPropagation();
              openAuthorUrl(author.id);
            }}>
            {author.id}
          </button>{' '}
          (Karma: {author.karma})
        </p>
      </div>
    </a>
  );
};
