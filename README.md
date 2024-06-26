# Random stories presented beautifully!

This web app is Samuel Himmelstrups attempt to show potential future colleagues at Good Tape that he knows how to code.
It can fetch ten random top stories from HackerNews.
It can even refetch ten random top stories from HackerNews.

## Try it out

- Clone the repo

```shellscript
git clone https://github.com/samuelhimmelstrup/good-tape-test.git
```

- Install packages

```shellscript
npm install
```

- Run the dev server with

```shellscript
npm run dev
```

## What I have created and how
A simple web app that can fetch and refetch ten random stories from Hacker News' top stories.

I am using Remix's loader function to fetch all the data server-side before rendering.
I am using Promise.all to execute the fetch calls in parallel, thereby enhancing performance.
I have used Tailwind for styling, and framer motion to add that ubiquitous scroll animation.

As an extracurricular I have implemented fetching of ten new random post ("Show me some other stories").
For this I have used Remix's action function pattern.
This could be done client-side, if we for example had to ensure that no duplicate posts were fetched.

## Prototype

I have also included a simple prototype of a Named Entity Recognition (NER) feature, which could help users with anonymization and GDRP compliance.

The genereal idea is that:

- we use a NER model to find all named entities (or perhaps just entities of the types that the user wants to see).
- we present the entities to the user, with the option to provide an alias for each
- we can then apply these changes in the entire transcript
- user can now download an anonymized transcript
- we keep the original so that the user can toggle between them

This is just a quick prototype that makes use of mock data, and does not support making actual changes to the transcript

For the real implementation I would:

- handle the NER processing with spaCy in the Python backend
- think the UX through. Low hanging fruits are:
  - The entities should probably be grouped into the four categories for a better overview
  - The headers should say "People" instead of "PER" and so on
- look into ways of integrating this feature into the existing edit feature. This way the UI won't be cluttered with options.

## Btw (ideas that popped up)

- Good Tapes existing edit feature should be able to find and replace (in case Whisper consequently mis-transcribes a word)
