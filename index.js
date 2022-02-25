const fs = require('fs')

const content = Date.now()

fs.writeFile('test.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //文件写入成功。
})
