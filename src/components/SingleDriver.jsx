import { Fragment } from 'react'
import { StarIcon } from '@heroicons/react/solid'
import { Tab } from '@headlessui/react'

const product = {
  name: 'Arjun Kumaar',
  price: '$220',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet illo facere consectetur sit labore odio quisquam maxime distinctio itaque dolore!',
  highlights: [
    'Lorem ipsum dolor sit amet.',
    'Lorem ipsum dolor sit amet.dolor sit',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quidem tempore cum.',
  ],
  imageSrc:
    'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
  imageAlt: "Arjun's card",
}
const reviews = {
  average: 4,
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>Very Nice Driver</p>
      `,
      date: 'July 16, 2021',
      datetime: '2021-07-16',
      author: 'Emily Selman',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    {
      id: 2,
      rating: 5,
      content: `
        <p>My Ride with him was so good</p>
      `,
      date: 'July 12, 2021',
      datetime: '2021-07-12',
      author: 'Hector Gibbons',
      avatarSrc:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    // More reviews...
  ],
}

const faqs = [
  {
    question: 'How Long I have been Driving',
    answer: 'I have been driving this for about one and half year',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    answer:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo nemo quos nesciunt rerum ipsam magnam doloremque autem obcaecati ad soluta.',
  },
  // More FAQs...
]

const license = {
  href: '#',
  summary:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ex?',
  content: `
    <h4>Overview</h4>
    
    <p>For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.</p>
    
    <ul role="list">
    <li>You\'re allowed to use the icons in unlimited projects.</li>
    <li>Attribution is not required to use the icons.</li>
    </ul>
    
    <h4>What you can do with it</h4>
    
    <ul role="list">
    <li>Use them freely in your personal and professional work.</li>
    <li>Make them your own. Change the colors to suit your project or brand.</li>
    </ul>
    
    <h4>What you can\'t do with it</h4>
    
    <ul role="list">
    <li>Don\'t be greedy. Selling or distributing these icons in their original or modified state is prohibited.</li>
    <li>Don\'t be evil. These icons cannot be used on websites or applications that promote illegal or immoral beliefs or activities.</li>
    </ul>
  `,
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className='bg-white'>
      <div className='mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        {/* Product */}
        <div className='lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16'>
          {/* Product image */}
          <div className='lg:row-end-1 lg:col-span-4'>
            <div className='aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden'>
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className='object-center object-cover'
              />
            </div>
          </div>

          {/* Product details */}
          <div className='max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3'>
            <div className='flex flex-col-reverse'>
              <div className='mt-4'>
                <h1 className='text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl'>
                  {product.name}
                </h1>

                <h2 id='information-heading' className='sr-only'>
                  Product information
                </h2>
              </div>

              <div>
                <h3 className='sr-only'>Reviews</h3>
                <div className='flex items-center'>
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating
                          ? 'text-yellow-400'
                          : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden='true'
                    />
                  ))}
                </div>
                <p className='sr-only'>{reviews.average} out of 5 stars</p>
              </div>
            </div>

            <p className='text-gray-500 mt-6'>{product.description}</p>

            <div className='border-t border-gray-200 mt-10 pt-10'>
              <h3 className='text-sm font-medium text-gray-900'>Highlights</h3>
              <div className='mt-4 prose prose-sm text-gray-500'>
                <ul role='list'>
                  {product.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='border-t border-gray-200 mt-10 pt-10'>
              <h3 className='text-sm font-medium text-gray-900'>License</h3>
              <p className='mt-4 text-sm text-gray-500'>
                {license.summary}{' '}
                <a
                  href={license.href}
                  className='font-medium text-indigo-600 hover:text-indigo-500'
                >
                  Read full license
                </a>
              </p>
            </div>
          </div>

          <div className='w-full max-w-2xl mx-auto mt-16 lg:max-w-none lg:mt-0 lg:col-span-4'>
            <Tab.Group as='div'>
              <div className='border-b border-gray-200'>
                <Tab.List className='-mb-px flex space-x-8'>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        selected
                          ? 'border-indigo-600 text-indigo-600'
                          : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                        'whitespace-nowrap py-6 border-b-2 font-medium text-sm'
                      )
                    }
                  >
                    Customer Reviews
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        selected
                          ? 'border-indigo-600 text-indigo-600'
                          : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                        'whitespace-nowrap py-6 border-b-2 font-medium text-sm'
                      )
                    }
                  >
                    FAQ
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        selected
                          ? 'border-indigo-600 text-indigo-600'
                          : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                        'whitespace-nowrap py-6 border-b-2 font-medium text-sm'
                      )
                    }
                  >
                    License
                  </Tab>
                </Tab.List>
              </div>
              <Tab.Panels as={Fragment}>
                <Tab.Panel className='-mb-10'>
                  <h3 className='sr-only'>Customer Reviews</h3>

                  {reviews.featured.map((review, reviewIdx) => (
                    <div
                      key={review.id}
                      className='flex text-sm text-gray-500 space-x-4'
                    >
                      <div className='flex-none py-10'>
                        <img
                          src={review.avatarSrc}
                          alt=''
                          className='w-10 h-10 bg-gray-100 rounded-full'
                        />
                      </div>
                      <div
                        className={classNames(
                          reviewIdx === 0 ? '' : 'border-t border-gray-200',
                          'py-10'
                        )}
                      >
                        <h3 className='font-medium text-gray-900'>
                          {review.author}
                        </h3>
                        <p>
                          <time dateTime={review.datetime}>{review.date}</time>
                        </p>

                        <div className='flex items-center mt-4'>
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              className={classNames(
                                review.rating > rating
                                  ? 'text-yellow-400'
                                  : 'text-gray-300',
                                'h-5 w-5 flex-shrink-0'
                              )}
                              aria-hidden='true'
                            />
                          ))}
                        </div>
                        <p className='sr-only'>
                          {review.rating} out of 5 stars
                        </p>

                        <div
                          className='mt-4 prose prose-sm max-w-none text-gray-500'
                          dangerouslySetInnerHTML={{ __html: review.content }}
                        />
                      </div>
                    </div>
                  ))}
                </Tab.Panel>

                <Tab.Panel as='dl' className='text-sm text-gray-500'>
                  <h3 className='sr-only'>Frequently Asked Questions</h3>

                  {faqs.map((faq) => (
                    <Fragment key={faq.question}>
                      <dt className='mt-10 font-medium text-gray-900'>
                        {faq.question}
                      </dt>
                      <dd className='mt-2 prose prose-sm max-w-none text-gray-500'>
                        <p>{faq.answer}</p>
                      </dd>
                    </Fragment>
                  ))}
                </Tab.Panel>

                <Tab.Panel className='pt-10'>
                  <h3 className='sr-only'>License</h3>

                  <div
                    className='prose prose-sm max-w-none text-gray-500'
                    dangerouslySetInnerHTML={{ __html: license.content }}
                  />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  )
}
