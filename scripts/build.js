const fs = require('fs');
const path = require('path');
const issues = require('../data/issues.json')

const dir = path.resolve(__dirname, '../docs')

const username = 'kangyana';

// 根据 Issue 生成 Markdown
const generateIssueMd = () => {
  const fePath = path.resolve(dir, 'fe'); // fe文件夹
  // 清空文件夹
  removeFile(fePath);
  fs.mkdirSync(fePath);
  const indexPath = path.join(fePath, 'index.md'); // index文件夹
  let indexContent = `# 前端常见面试题总结\r\n\r\n`;
  Object.keys(issues).forEach(key => {
    const value = issues[key];
    // 创建标签文件夹
    const dirPath = path.join(fePath, key); // 标签文件夹
    fs.mkdirSync(dirPath)
    // 遍历生成问题md
    value.forEach(item => {
      const { number, title, body, html_url } = item;
      const itemPath = path.join(dirPath, `${number}.md`);
      const content = `# ${title}\r\n\r\n::: tip Issue\r\n欢迎在 Gtihub Issue 中回答此问题: [Issue ${number}](${html_url})\r\n:::\r\n\r\n::: tip Author\r\n回答者: [${username}](https://github.com/${username})\r\n:::\r\n\r\n${body}`;
      fs.writeFileSync(itemPath, content);
      // 写进目录
      indexContent += `- [${title}](${key}/${number}.html)\r\n`
    })
  })
  // 最后生成index.md
  fs.writeFileSync(indexPath, indexContent);
}

// 删除文件
const removeFile = (_path) => {
  const stats = fs.statSync(_path);
  // 是文件夹
  if (stats.isDirectory()) {
    const fileList = fs.readdirSync(_path);
    // 遍历递归删除文件
    if (fileList.length > 0) {
      fileList.forEach(item => {
        removeFile(path.join(_path, item));
      })
    }
    fs.rmdirSync(_path);
    return;
  }
  // 是文件
  if (stats.isFile()) {
    fs.unlinkSync(_path);
    return;
  }
}

generateIssueMd();