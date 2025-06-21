// const markdownpdf = require('markdown-pdf')
const path = require('path')
const fs = require('fs')
const { mdToPdf } = require('md-to-pdf')

const args = process.argv;
const sourceDir = args[2] || 'zh-cn'
// const bookPath = path.join(__dirname, 'output/book.pdf')
const markdownPath = path.join(__dirname, sourceDir)

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
function fixHtmlImagePaths(markdownContent, baseDir) {
  return markdownContent.replace(
    /<img\s+[^>]*src=["']([^"']+)["'][^>]*>/gi,
    (match, src) => {
      // 跳过远程 URL
      if (/^https?:\/\//i.test(src)) return match
      const absPath = path.resolve(baseDir, src)
      const fileSrc = encodeURI(`${absPath}`)
      console.log(fileSrc, src)
      return match.replace(src, fileSrc)
    }
  )
}

async function mergeMarkdownToPdf(mdFiles, outputPath) {
  const mergedContent = mdFiles
    .map(file => fs.readFileSync(file, 'utf-8'))
    .join('\n\n---\n\n') // 分隔线（也可换成分页符）

  await mdToPdf(
    { content: mergedContent },
    {
      dest: outputPath,
      pdf_options: {
        format: 'A4',
      },
      basedir: markdownPath,
      launch_options: {
        args: ['--no-sandbox'],
      },
    }
  )

  console.log('✅ PDF 已生成:', outputPath)
}

const mdDocs = getAllMarkdownFiles(markdownPath)
// console.log(mdDocs)

// const paperFormat = 'A6'
// markdownpdf({
//   paperFormat,
// }).concat.from(mdDocs).to(bookPath, function () {
//   console.log('Created', paperFormat, bookPath)
// })
mergeMarkdownToPdf(mdDocs, path.join(__dirname, 'output/book.pdf'))
