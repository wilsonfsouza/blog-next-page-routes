import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const FeatureSection = () => {
  return (
    <section className="container grid gap-3 bg-gray-700 py-10 md:grid-cols-2 md:gap-6 md:pb-[7.5rem] md:pt-20 lg:gap-6 lg:pb-[7.5rem] lg:pt-20">
      <div className="flex flex-col gap-4 rounded-xl bg-gray-500 p-6 md:p-12 lg:p-12">
        <span className="w-fit rounded-sm bg-blue-400 px-3 py-[0.375rem] text-body-tag uppercase text-blue-200">
          Easy
        </span>
        <h2 className="font-sans text-heading-lg text-gray-100">
          Create a catalog of products online in a few minutes
        </h2>
      </div>
      <div className="flex flex-col gap-4 rounded-xl bg-gray-500 p-6 md:p-12 lg:p-12">
        <span className="w-fit rounded-sm bg-blue-400 px-3 py-[0.375rem] text-body-tag uppercase text-blue-200">
          Practical
        </span>
        <h2 className="font-sans text-heading-lg text-gray-100">
          Sell to your audience through only one platform
        </h2>
      </div>

      <div className="col-span-full flex flex-col">
        <div className="grid grid-cols-1 gap-12 rounded-xl bg-gray-500 p-6 md:grid-cols-2 md:p-12 lg:p-12">
          <div className="flex flex-col gap-4">
            <span className="w-fit rounded-sm bg-blue-400 px-3 py-[0.375rem] text-body-tag uppercase text-blue-200">
              Customizable
            </span>
            <h2 className="font-sans text-heading-lg text-gray-100">
              Get a customizable online store that looks like your brand
            </h2>

            <Button asChild className="mt-auto hidden w-fit md:flex">
              <Link href="/create-store">
                Create free store
                <ArrowRight />
              </Link>
            </Button>
          </div>

          <div className="flex w-full flex-col items-center justify-center">
            <div className="w-full max-w-md overflow-hidden">
              <Image
                src="/feature-section.svg"
                alt="Features"
                width={440}
                height={330}
                className="w-full object-contain"
              />
            </div>
            <Button asChild className="mt-8 w-full md:hidden">
              <Link href="/create-store">
                Create free store
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
