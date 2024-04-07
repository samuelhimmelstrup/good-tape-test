import { Link } from '@remix-run/react';
import { useState } from 'react';
import { mockTranscript } from '~/utils';

type NameEntityType = 'PER' | 'LOC' | 'ORG' | 'MISC';
type NameEntity = { id: number; type: NameEntityType; value: string };
type NameEntityReturn = { entities: NameEntity[] };

export default function Prototype() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [nameEntities, setNameEntities] = useState<NameEntity[] | undefined>(
    undefined
  );

  const fetchMockEndpoint = async () => {
    const response = await fetch('/api/mock-ner', { method: 'POST' });
    const data: NameEntityReturn = await response.json();
    setNameEntities(data.entities);
  };

  const handleAnonymizeClick = async () => {
    setIsModalOpen(true);
    setIsLoading(true);

    await fetchMockEndpoint();

    setIsLoading(false);
  };

  return (
    <div className='inline-flex h-screen w-screen'>
      <button className='btn-custom absolute top-5 right-5'>
        <Link to='/'>Back</Link>
      </button>

      <div id='greySidebar' className='bg-gt_grey w-1/4 pt-5'>
        <div className='mx-2'>
          <h2 className='text-2xl font-bold ml-2 mb-4'>Tapes</h2>

          <div className='card-transcript'>
            <h2 className='font-semibold mb-2 text-gt_purple'>
              Mock transcript
            </h2>
            <div className='flex justify-between w-full'>
              <p className='text-sm text-gt_grey_medium'>6 days ago</p>
              <p className='text-sm text-gt_grey_medium'>4:20</p>
            </div>
          </div>
        </div>
      </div>

      <div id='transcriptView' className='flex flex-col max-w-4xl gap-10'>
        <button
          className='btn-custom max-w-fit mt-5 ml-10'
          onClick={handleAnonymizeClick}>
          Anonymize
        </button>

        <div className='px-10'>
          <div className='text-2xl pl-20'>Mock transcript.mp3</div>
        </div>

        <div className='flex flex-col gap-3 p-10'>
          {mockTranscript.map((line, i) => {
            return (
              <div key={i} className='flex gap-10'>
                <div className='text-gt_grey_medium'>{line.timestamp}</div>
                <div>{line.text}</div>
              </div>
            );
          })}
        </div>
      </div>

      {isModalOpen && (
        <div className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full'>
          <div className='relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white'>
            <div id='modal-content' className='flex flex-col gap-4'>
              <div className='text-2xl'>Name Entities</div>

              {isLoading && !nameEntities && <div className='spinner' />}

              <div id='name-entities' className='flex flex-col gap-2'>
                {nameEntities?.map((entity) => {
                  return (
                    <div key={entity.id} className='flex'>
                      <div className='w-14 text-gt_grey_medium'>
                        {entity.type}:
                      </div>
                      <div>{entity.value}</div>
                    </div>
                  );
                })}
              </div>

              <div className='flex justify-between'>
                <button
                  className='btn-custom'
                  onClick={() => setIsModalOpen(false)}>
                  Close
                </button>
                <button
                  className='btn-custom'
                  onClick={() => setIsModalOpen(false)}>
                  Apply changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
