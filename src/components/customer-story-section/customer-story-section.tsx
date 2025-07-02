import { PT_Sans_Caption } from 'next/font/google'
import Image from 'next/image'

const ptSansCaption = PT_Sans_Caption({
  subsets: ['latin'],
  weight: '700',
})

const customerStories = [
  {
    id: '5e15362b-db63-4635-858a-a75785136f17',
    review:
      'Creating my store with this vendor was the best decision for my business. The platform is easy to use, and I was able to set up my shop in a few minutes.',
    author: {
      name: 'Annette Virelon',
      role: 'CEO at Virelon Technologies Inc.',
      avatar: '/reviews/customer-01.png',
    },
  },
  {
    id: '6806b4fa-8d48-4b0e-9de9-74b1a209b5df',
    review:
      'Transforming my idea into an online store was easy and quick. I loved the options to customize the expence and how easy was to manage orders. I can see my products reaching out even more people now.',
    author: {
      name: 'Jacob Crest',
      role: 'CEO at Hawthorne & Crest Capital Partners',
      avatar: '/reviews/customer-02.png',
    },
  },
]

export const CustomerStorySection = () => {
  return (
    <section className="container py-20 md:pb-[10.5rem] md:pt-32">
      <div className="flex flex-col items-center gap-8 md:gap-12">
        <h2
          className={`${ptSansCaption.className} text-balance text-heading-md text-gray-100 md:text-heading-xl`}
        >
          Those who uses it, approves it
        </h2>

        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {customerStories.map((customerStory) => (
            <div
              key={customerStory.id}
              className="flex flex-col gap-8 rounded-xl bg-gray-500 p-6 md:gap-10 md:p-10"
            >
              <p className="text-balance text-body-md italic text-gray-200">
                {customerStory.review}
              </p>
              <div className="flex items-center gap-3">
                <div className="relative h-9 w-9 overflow-hidden rounded-full">
                  <Image
                    src={customerStory.author.avatar}
                    alt={`Photo of ${customerStory.author.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <strong className="text-sm text-gray-200">
                    {customerStory.author.name}
                  </strong>
                  <span className="text-xs text-gray-300">
                    {customerStory.author.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
