const markdownpdf = require('markdown-pdf')
const path = require('path')
const fs = require('fs')

const bookPath = path.join(__dirname, 'output/book.pdf')
const markdownPath = path.join(__dirname, 'zh-cn')

// 递归遍历文件夹，返回所有 .md 文件的绝对路径数组
function getAllMarkdownFiles(dir) {
  let results = []
  const list = fs.readdirSync(dir)
  list.forEach(file => {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
      results = results.concat(getAllMarkdownFiles(fullPath))
    } else if (stat.isFile() && path.extname(file) === '.md') {
      results.push(fullPath)
    }
  })
  return results
}

const mdDocs = getAllMarkdownFiles(markdownPath)
console.log(mdDocs)

const paperFormat = 'A6'
markdownpdf({
  paperFormat,
}).concat.from(mdDocs).to(bookPath, function () {
  console.log('Created', paperFormat, bookPath)
})
