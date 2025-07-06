import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files'

const Image = defineNestedType(() => ({
  name: 'Image',
  fields: {
    src: { type: 'string', required: true },
    alt: { type: 'string', required: true },
  },
}))

const Author = defineNestedType(() => ({
  name: 'Author',
  fields: {
    name: { type: 'string', required: true },
    avatar: { type: 'nested', required: true, of: Image },
  },
}))

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    image: { type: 'nested', of: Image, required: true },
    date: { type: 'date', required: true },
    author: { type: 'nested', of: Author, required: true },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace('.md', ''),
    },
  },
}))

export default makeSource({ contentDirPath: 'posts', documentTypes: [Post] })
