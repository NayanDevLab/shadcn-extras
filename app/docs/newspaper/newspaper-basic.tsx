import {
  Newspaper,
  NewspaperHeader,
  NewspaperContent,
  NewspaperArticle,
} from '@/components/core/newspaper';

export function NewspaperBasic() {
  return (
    <div className='mx-auto w-full max-w-5xl rounded-lg bg-[#f8f9fa] p-4 text-black shadow-inner md:p-8'>
      <Newspaper>
        <NewspaperHeader>The Fortean World Times</NewspaperHeader>

        <NewspaperContent>
          <NewspaperArticle isBreaking>
            <img
              src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/earth-vs-the-flying-saucers.jpg'
              alt='Photograph of a flying saucer over the US Capitol building'
              className='mb-4 h-auto w-full'
            />
            <h1 className='mb-2 text-3xl md:text-4xl'>
              Washington D.C. Attacked By Flying Saucers
            </h1>
            <h2 className='text-xl text-gray-700'>Dateline Washington D.C.</h2>
            <h3 className='mb-4 text-lg text-gray-600'>
              Frank Bragg reporting
            </h3>
            <p className='text-base text-gray-800'>
              The country was brought to a standstill today when flying saucers
              – presumably from Mars, although Venusians have also been
              suspected – appeared over the nation’s capital, intent on
              destruction. Curiously, they only attacked Pennsylvania Avenue,
              and have not appeared elsewhere in the country.
            </p>
          </NewspaperArticle>

          <NewspaperArticle>
            <img
              src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/bigfoot_1.jpg'
              alt='Photograph of a Bigfoot'
              className='mb-4 h-auto w-full'
            />
            <h1 className='mb-2 text-2xl'>Bigfoot Found, Shot, Killed</h1>
            <h2 className='text-lg text-gray-700'>Dateline Washington State</h2>
            <h3 className='mb-4 text-base text-gray-600'>
              Jessica Walsh reporting
            </h3>
            <p className='mb-2 text-sm text-gray-800'>
              The first conclusive proof of the elusive Sasquatch was found
              today, when one of the ape-men was found and killed by a hunter in
              the north-eastern corner of the state.
            </p>
            <p className='text-sm text-gray-800'>
              The hunter plans to tour the pelt in the fall.
            </p>
          </NewspaperArticle>

          <NewspaperArticle>
            <img
              src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/alligator-sewer_1.jpg'
              alt='Photograph of an alligator emerging from an open manhole cover'
              className='mb-4 h-auto w-full'
            />
            <h1 className='mb-2 text-2xl'>
              Nest of Alligators Found in New York Sewers
            </h1>
            <h2 className='text-lg text-gray-700'>Dateline New York City</h2>
            <h3 className='mb-4 text-base text-gray-600'>
              Ted Sturgis reporting
            </h3>
            <p className='text-sm text-gray-800'>
              Years of rumours were confirmed yesterday when a nest of
              alligators were found in the sewers of New York City, just south
              of Times Square. The largest, which locals have dubbed “Mugsy”,
              measures over 21 feet long.
            </p>
          </NewspaperArticle>
        </NewspaperContent>
      </Newspaper>
    </div>
  );
}
