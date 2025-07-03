import { Button } from '@/components/ui/button'
import { ArrowRight, Store } from 'lucide-react'
import Link from 'next/link'

export const CallToAction = () => {
  return (
    <section className="relative bg-gradient-to-b from-cyan-950/20 to-gray-700 py-14 md:pb-[4.5rem] md:pt-[5.5rem]">
      <div className="absolute inset-0 bg-[url('/background-images/background-footer.svg')] bg-cover bg-center bg-no-repeat opacity-90" />
      <span className="absolute left-1/2 top-0 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cyan-300 md:h-16 md:w-16">
        <Store className="h-7 w-7 text-cyan-100 md:h-8 md:w-8" />
      </span>
      <div className="container relative">
        <div className="flex flex-col items-center gap-8 md:gap-10">
          <h2 className="text-balance text-center font-sans text-heading-md text-gray-100 md:text-heading-xl">
            Create an online store and start selling today
          </h2>

          <Button variant="primary" className="w-fit rounded-full" asChild>
            <Link href="/create-store">
              Create free store
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
