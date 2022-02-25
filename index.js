const fs = require('fs')

const content = Date.now().toString()+'\n'

fs.appendFile('test.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //文件写入成功。
})
