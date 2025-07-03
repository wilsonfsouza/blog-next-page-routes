import { HeartHandshake, Paintbrush, Store } from 'lucide-react'

export const SupportSection = () => {
  return (
    <section className="relative py-12 md:py-[7.5rem]">
      <div className="absolute inset-0 hidden bg-[url('/background-images/background-features.svg')] bg-cover bg-center bg-no-repeat opacity-90 md:block" />
      <div className="container relative flex flex-col items-center gap-8 md:gap-12">
        <h2 className="text-balance font-sans text-heading-md text-gray-100 md:text-heading-xl">
          Your affiliates store, simple, as it should be
        </h2>
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          <div className="flex flex-col gap-4 rounded-xl bg-blue-400 p-6">
            <span className="flex w-fit items-center justify-center rounded-lg bg-blue-300 p-2">
              <Paintbrush className="h-5 w-5 text-white" />
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="text-heading-sm text-gray-100">
                Customize your site
              </h3>
              <p className="text-body-sm text-gray-200">
                Add your logo, favicon, and branding colors in your catalog.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-xl bg-cyan-300 p-6">
            <span className="flex w-fit items-center justify-center rounded-lg bg-cyan-200 p-2">
              <Store className="h-5 w-5 text-white" />
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="text-heading-sm text-gray-100">
                Sell from any store
              </h3>
              <p className="text-body-sm text-gray-200">
                It doesn't matter what store your have, we allow you to add a
                link from any affiliate store.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-xl bg-blue-400 p-6">
            <span className="flex w-fit items-center justify-center rounded-lg bg-blue-300 p-2">
              <HeartHandshake className="h-5 w-5 text-white" />
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="text-heading-sm text-gray-100">
                Get friendly customer support
              </h3>
              <p className="text-body-sm text-gray-200">
                Our team will be ready to support you with whatever you need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
