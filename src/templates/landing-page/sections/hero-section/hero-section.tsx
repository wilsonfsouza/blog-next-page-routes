import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, Store } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const HeroSection = () => {
  return (
    <section className="container relative flex items-center justify-center">
      <div className="grid min-h-[20rem] grid-cols-1 items-center gap-8 md:h-[36rem] md:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-6 md:items-start md:gap-8 lg:items-start lg:gap-8">
          <h1 className="text-center font-sans text-heading-hg text-gray-100 md:text-left lg:text-left">
            Sell your products as an affiliate in only one place
          </h1>

          <div className="flex flex-col items-center justify-center gap-10 md:items-start md:gap-14 lg:items-start lg:gap-14">
            <div className="flex flex-col gap-1 md:gap-2 lg:gap-2">
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-cyan-100 md:h-5 md:w-5 lg:h-5 lg:w-5" />
                <span className="text-body-sm text-gray-200">
                  Create your site in less than 5 minutes
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Store className="h-4 w-4 text-cyan-100 md:h-5 md:w-5 lg:h-5 lg:w-5" />
                <span className="text-body-sm text-gray-200">
                  Follow up and optimize your online store
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 text-white">
              <Button className="w-fit" asChild>
                <Link href="/create-store">
                  Create free store
                  <ArrowRight />
                </Link>
              </Button>

              <p className="text-body-xs text-gray-300">
                No credit card needed
              </p>
            </div>
          </div>
        </div>
        <div className="items center relative order-first hidden h-[20rem] justify-center md:order-last md:flex md:h-full lg:flex">
          <Image
            src="/hero-section.svg"
            alt="Illustration with store, tag, and bag icons"
            width={200}
            height={400}
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}
