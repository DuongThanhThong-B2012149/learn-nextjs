import path from 'path'
import fs from 'fs'
const BLOG_FOLDER = path.join(process.cwd(), 'blog')
export const getPostList = async () => {
  const fileNameLists = fs.readdirSync(BLOG_FOLDER)
  for (const fileName of fileNameLists) {
    const filePaths = path.join(BLOG_FOLDER, fileName)
    const fileContents = fs.readFileSync(filePaths, 'utf8')
    console.log(fileContents)
  }
}
