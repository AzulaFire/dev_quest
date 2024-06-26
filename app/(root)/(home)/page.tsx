import QuestionCard from '@/components/cards/QuestionCard';
import Filter from '@/components/shared/Filter';
import LocalSearchbar from '@/components/shared/LocalSearchbar';
import NoResults from '@/components/shared/NoResults';
import { Button } from '@/components/ui/button';
import { HomePageFilters } from '@/constants/filters';
import { getQuestions } from '@/lib/actions/question.action';
import Link from 'next/link';

// const questions = [
//   {
//     _id: 1,
//     title: 'Redux Toolkit Not Updating State as Expected',
//     tags: [
//       {
//         _id: 1,
//         name: 'redux',
//       },
//       { _id: 2, name: 'react' },
//     ],
//     author: {
//       _id: 1,
//       name: 'John Horn',
//       picture: 'john-horn.jpg',
//     },
//     upvotes: 10,
//     views: 500000,
//     answers: [],
//     createdAt: new Date('2021-09-01T12:00:00.000Z'),
//   },
//   {
//     _id: 2,
//     title: 'Async/Await Function Not Handling Errors Properly',
//     tags: [
//       {
//         _id: 1,
//         name: 'javascript',
//       },
//       { _id: 2, name: 'reactjs' },
//     ],
//     author: {
//       _id: 1,
//       name: 'John Horn',
//       picture: 'john-horn.jpg',
//     },
//     upvotes: 1000000,
//     views: 100,
//     answers: [],
//     createdAt: new Date('2021-09-01T12:00:00.000Z'),
//   },
//   {
//     _id: 3,
//     title:
//       'How do ES6 module exports and imports work in JavaScript, and what are the key differences from CommonJS?',
//     tags: [
//       {
//         _id: 1,
//         name: 'javascript',
//       },
//     ],
//     author: {
//       _id: 1,
//       name: 'John Horn',
//       picture: 'john-horn.jpg',
//     },
//     upvotes: 10,
//     views: 100,
//     answers: [],
//     createdAt: new Date('2021-09-01T12:00:00.000Z'),
//   },
//   {
//     _id: 4,
//     title: 'How do I use express as a custom server in NextJS?',
//     tags: [
//       {
//         _id: 1,
//         name: 'nextjs',
//       },
//       { _id: 2, name: 'sql' },
//     ],
//     author: {
//       _id: 1,
//       name: 'John Horn',
//       picture: 'john-horn.jpg',
//     },
//     upvotes: 10,
//     views: 100,
//     answers: [],
//     createdAt: new Date('2021-09-01T12:00:00.000Z'),
//   },
// ];

const Home = async () => {
  const result = await getQuestions({});

  console.log(result.questions);

  return (
    <>
      <div className='flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center'>
        <h1 className='h1-bold text-dark100_light900'>All Questions</h1>

        <Link href='/ask-question' className='flex justify-end max-sm:w-full'>
          <Button className='primary-gradient min-h-[46px] px-4 py-3 !text-light-900'>
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className='mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center'>
        <LocalSearchbar
          route='/'
          iconPosition='left'
          imgSrc='/assets/icons/search.svg'
          placeholder='Search for questions'
          otherClasses='flex-1'
        />
        <Filter
          filters={HomePageFilters}
          otherClasses='min-h-[56px] sm:min-w-[170px]'
          containerClasses='hidden max-md:flex'
        />
      </div>
      <div className='mt-10 flex w-full flex-col gap-6'>
        {result.questions.length > 0 ? (
          result.questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResults
            title="There's no questions to show"
            description='Be the first to break the silence! 🚀 Ask a Question and kickstart the
        discussion. our query could be the next big thing others learn from. Get
        involved! 💡'
            link='/ask-question'
            linkTitle='Ask a Question'
          />
        )}
      </div>
    </>
  );
};
export default Home;
