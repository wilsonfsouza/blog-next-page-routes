export default function BlogPage() {
  return (
    <div className="flex flex-col px-4 py-5 md:px-0 md:py-20">
      <div className="container flex flex-col items-start justify-between space-y-6 md:flex-row md:items-end">
        <header>
          <div className="flex max-w-[27.5rem] flex-col items-start gap-3">
            <span className="w-fit rounded-sm bg-cyan-300 px-3 py-[0.375rem] text-body-tag uppercase text-cyan-100">
              Blog
            </span>
            <h1 className="text-balance text-heading-lg text-gray-100 md:text-heading-xl">
              Tips and strategies to boost your business
            </h1>
          </div>
        </header>
      </div>
    </div>
  )
}
