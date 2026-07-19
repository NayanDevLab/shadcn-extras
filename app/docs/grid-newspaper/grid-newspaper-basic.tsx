import {
  GridNewspaper,
  GridNewspaperHeader,
  GridNewspaperArticle,
} from '@/components/core/grid-newspaper';

export function GridNewspaperBasic() {
  return (
    <GridNewspaper>
      <GridNewspaperHeader title='The Daily Prophet'>
        <div className='text-left text-sm md:text-base'>Issue #1</div>
        <div className='text-center text-sm md:text-base'>
          Tuesday, 01 June, 2021
        </div>
        <div className='text-right text-sm md:text-base'>5 Kunts</div>
      </GridNewspaperHeader>

      <GridNewspaperArticle className='lg:col-span-4 lg:col-start-1' hoverBg>
        <h2 className='title--large mb-4 font-serif text-4xl italic lg:text-5xl'>
          More than 500 million copies of the Harry Potter books sold
        </h2>
        <div className='gn-multi-column-2 text-justify'>
          <p className='mb-3'>
            Twenty years ago, readers around the world first discovered the
            magical story of Harry Potter, created by J.K. Rowling. We can now
            reveal that, since that moment, half a billion Harry Potter books
            have now been sold. On average, this means one in fifteen people in
            the world owns a Harry Potter book. The 500 million sales are across
            the seven books in the series and the three companion volumes, in
            print and eBook versions.
          </p>
          <p className='mb-3'>
            First published by Bloomsbury in 1997, the books have now been
            translated into over 80 different languages across the world, with
            more to come. From Albanian to Azerbaijani to Hebrew to Hawaiian,
            the stories are becoming accessible to more people all the time.
          </p>
        </div>
      </GridNewspaperArticle>

      <GridNewspaperArticle
        className='hover:opacity-90 lg:col-span-2 lg:col-start-3'
        hoverImage
      >
        <a href='#' className='mt-6 block h-full lg:mt-0'>
          <figure className='h-full'>
            <img
              src='https://ebookfriendly.com/wp-content/uploads/2015/12/New-covers-for-Harry-Potter-ebooks-animated.gif'
              alt='Harry Potter books'
              className='h-96 w-full object-cover object-right'
            />
            <figcaption>Harry Potter Book set by J.K Rowling</figcaption>
          </figure>
        </a>
      </GridNewspaperArticle>

      <GridNewspaperArticle
        className='mb-6 border-b pb-6 lg:col-span-4 lg:col-start-1 lg:row-span-2 lg:mb-0 lg:border-none lg:pb-0'
        hoverImage
        hoverBg
      >
        <a href='#'>
          <img
            src='https://i.gifer.com/MGXa.gif'
            alt='Wizard'
            className='h-auto max-h-[300px] w-full object-cover'
          />
          <h4 className='mt-4 mb-2'>
            WIZARD MAGICIAN BREAKS STATUTE OF SECRECY ON CHRISTMAS EVE
          </h4>
          <div className='gn-multi-column-2 text-justify'>
            <p className='mb-3'>
              Christmas Eve is a big day for the western world – for both
              Wizard, Witch and Muggle alike.
            </p>
            <p className='mb-3'>
              This Christmas Eve a performer of the magical arts, also known as
              a “magician” to muggles, by the name of Ryland Silverthorne has
              caught the attention of The Department of Magical Accidents and
              Catastrophes for revealing how….. (Click To read the whole
              article)
            </p>
          </div>
        </a>
      </GridNewspaperArticle>

      <GridNewspaperArticle className='border-4 border-black bg-transparent p-4 text-center transition-colors duration-300 hover:bg-black hover:text-white lg:col-start-3 lg:row-span-2'>
        <a
          href='#'
          className='relative flex h-full flex-col items-center justify-center'
        >
          <div className='mb-4 font-sans text-xl font-bold uppercase'>
            50% Off Hogwarts Express tickets
          </div>
          <div className='relative flex w-full items-center justify-center overflow-hidden'>
            <span className='absolute z-10 rotate-[-5deg] bg-white/80 p-1 font-serif text-lg italic'>
              Limited time offer
            </span>
            <img
              src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/showcase-hogwarts.svg'
              alt='Hogwarts Express'
              className='h-48 w-48 rotate-12 transform border-none object-contain filter-none'
            />
          </div>
        </a>
      </GridNewspaperArticle>

      <GridNewspaperArticle
        className='lg:col-span-2 lg:col-start-1'
        withBorder
        hoverBg
      >
        <a href='#'>
          <h4 className='mb-2'>How To Make Chocolate Frogs</h4>
          <p>
            Everybody loves chocolate frogs. It&apos;s impossible to not love them,
            so The Daily Prophet offers its reader with its recipe. So hold you
            frorgs tight as you read this
          </p>
        </a>
      </GridNewspaperArticle>

      <GridNewspaperArticle
        className='border-t border-b border-black py-4 lg:col-span-2 lg:col-start-1'
        hoverBg
      >
        <a href='#'>
          <h4 className='mb-2'>Quidditch world cup nearing!</h4>
          <p>
            Quidditch fans around the world are exited as the world cup is
            nearing. So we, decided to fill those who don&apos;t know about Qudditch
            in with information.
          </p>
        </a>
      </GridNewspaperArticle>

      <div className='lg:col-start-5 lg:col-end-6 lg:row-start-3 lg:row-end-9 lg:ml-2 lg:border-l lg:border-black lg:pl-6'>
        <h3 className='mb-6 text-center font-serif text-2xl italic'>
          Hot News!
        </h3>

        <GridNewspaperArticle className='mb-8' hoverImage>
          <a href='#'>
            <img
              src='https://i.pinimg.com/originals/55/0a/c9/550ac9839fc15a1b99b4ef3bed3bb5e4.gif'
              alt='Gryffindor'
              className='m-0 h-48 w-full border-none object-cover'
            />
            <div className='bg-gray-400 p-2 text-xs text-white uppercase'>
              Hogwarts House Cup Winner:
            </div>
            <div className='bg-gray-600 p-4 text-white'>
              <h4 className='mb-2'>Gryffindor!</h4>
              <p className='text-sm'>
                As usual Griffindor scraped a win at the inter-house
                championship at Hogwarts, leving Slytherin in second place once
                more.
              </p>
            </div>
          </a>
        </GridNewspaperArticle>

        <GridNewspaperArticle className='mb-8' hoverBg>
          <a href='#'>
            <h5 className='mb-2 p-2 text-center'>
              Godric Gryffindors Wand Resurfaces At Hogwarts
            </h5>
            <p className='text-sm'>
              Earlier today Kaitlyn Byers, a 4th year from Ravenclaw, discovered
              what is now thought to be Godric Gryffindors Wand. While the
              magical item is currently being housed by The Ministry of Magic
              and undergoing tests to confirm its origin, how the wand made it
              into the hands of a student is quite astonishing.
            </p>
          </a>
        </GridNewspaperArticle>
      </div>
    </GridNewspaper>
  );
}
