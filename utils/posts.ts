import { Post } from '@/models/post'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
const BLOG_FOLDER = path.join(process.cwd(), 'blog')
export const getPostList = async () => {
  const fileNameLists = fs.readdirSync(BLOG_FOLDER)
  const postList: Post[] = []
  for (const fileName of fileNameLists) {
    const filePaths = path.join(BLOG_FOLDER, fileName)
    const fileContents = fs.readFileSync(filePaths, 'utf8')
    const { data, excerpt, content } = matter(fileContents, {
      excerpt_separator: '<!-- truncate-->',
    })

    postList.push({
      id: fileName,
      slug: data.slug,
      title: data.title,
      author: {
        name: data.author,
        title: data.author_title,
        profileUrl: data.author_url,
        avatarUrl: data.author_image_url,
      },
      tagList: data.tags,
      publishedDate: new Date().getTime().toString(),
      description: excerpt || '',
      mdContent: content,
    })
  }
  return postList
}
