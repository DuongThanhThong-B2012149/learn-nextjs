import path from 'path'
import fs from 'fs'

const BLOG_FOLDER = path.join(process.cwd(), 'blog')
export const getPostList = async () => {
  // read all markdown files
  const fileNameLists = fs.readdirSync(BLOG_FOLDER)
  for (const fileName of fileNameLists) {
    const filePath = path.join(BLOG_FOLDER, fileName)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    console.log(fileContents)
  }
}
