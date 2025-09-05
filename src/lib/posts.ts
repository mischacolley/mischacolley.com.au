import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'

const postsDirectory = path.join(process.cwd(), 'src/posts')

export interface PostData {
  slug: string
  title: string
  date: string
  featuredImage?: string
  content: string
  excerpt?: string
}

export function getAllPostSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => fileName)
}

export function getPostData(slug: string): PostData {
  const fullPath = path.join(postsDirectory, slug, 'index.md')
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const processedContent = remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .processSync(content)
    .toString()

  return {
    slug,
    title: data.title,
    date: data.date,
    featuredImage: data.featuredImage,
    content: processedContent,
    excerpt: content.substring(0, 200) + '...',
  }
}

export function getAllPostsData(): PostData[] {
  const slugs = getAllPostSlugs()
  const allPostsData = slugs.map((slug) => getPostData(slug))
  
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}
