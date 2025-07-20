import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface MarkdownProps {
  content: string
}

export const Markdown = ({ content }: MarkdownProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="mb-4 text-heading-md text-gray-200 md:text-heading-xl">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="mb-4 mt-8 text-heading-sm text-gray-200 md:text-heading-lg">
            {children}
          </h2>
        ),
        a: ({ href, children }) => {
          const isExternalLink = href?.startsWith('http')
          const className = 'text-blue-200 font-inter hover:underline'

          if (isExternalLink) {
            return (
              <a
                href={href}
                className={className}
                target="__blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            )
          } else {
            return (
              <Link href={href ?? ''} className={className}>
                {children}
              </Link>
            )
          }
        },
        p: ({ children }) => (
          <p className="mb-6 font-inter text-body-sm leading-relaxed text-gray-200">
            {children}
          </p>
        ),
        li: ({ children }) => (
          <li className="font-inter text-body-sm leading-relaxed text-gray-200">
            {children}
          </li>
        ),
        ul: ({ children }) => (
          <ul className="mb-6 ml-4 list-disc">{children}</ul>
        ),
        strong: ({ children }) => (
          <strong className="font-inter text-action-sm font-bold text-gray-200">
            {children}
          </strong>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
