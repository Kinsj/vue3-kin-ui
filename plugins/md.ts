// @ts-nocheck
import path from 'path'
import fs from 'fs'
import marked from 'marked'

const mdToJs = str => {
  const content = JSON.stringify(marked(str))
  return `export default ${content}`  // 导出的是js内容，所以要加上 export default
}

export function md() {
  return {
    configureServer: [ // 用于开发
      async ({ app }) => {
        app.use(async (ctx, next) => { // koa
          if (ctx.path.endsWith('.md')) {  // 判断请求的文件是否是md文件
            ctx.type = 'js' // 将md文件作为js文件请求返回（用于让浏览器执行js）
            const filePath = path.join(process.cwd(), ctx.path)
            ctx.body = mdToJs(fs.readFileSync(filePath).toString()) // fs.readFileSync() 用于读取文件内容 nodejs
          } else {
            await next()  // 跳过中间件
          }
        })
      },
    ],
    transforms: [{  // 用于 rollup // 插件
      test: context => context.path.endsWith('.md'),
      transform: ({ code }) => mdToJs(code) 
    }]
  }
}