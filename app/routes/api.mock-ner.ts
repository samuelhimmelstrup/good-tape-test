export const action = async () => {
  const data = {
    entities: [
      { id: 1, type: 'PER', value: 'Dr. Samantha Reed' },
      { id: 2, type: 'ORG', value: 'MIT' },
      { id: 3, type: 'ORG', value: 'Gates Foundation' },
      { id: 4, type: 'ORG', value: 'Google' },
      { id: 5, type: 'ORG', value: 'Microsoft' },
      { id: 6, type: 'ORG', value: 'Nairobi School Initiative' },
      { id: 7, type: 'LOC', value: 'Nairobi' },
      { id: 8, type: 'LOC', value: 'Kenya' },
      { id: 9, type: 'LOC', value: 'San Francisco' },
      { id: 10, type: 'MISC', value: 'NeuroLink' },
      { id: 11, type: 'MISC', value: 'Global Tech Symposium' },
    ],
  };

  await new Promise(resolve => setTimeout(resolve, 2000));

  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  })
}