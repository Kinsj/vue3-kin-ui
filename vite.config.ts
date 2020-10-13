// @ts-nocheck
import fs from "fs"
import {baseParse} from '@vue/compiler-core'
import { md } from "./plugins/md";

export default {
  vueCustomBlockTransforms: {
    demo: (options) => {
      const { code, path } = options
      const file = fs.readFileSync(path).toString()
      const parsed = baseParse(file).children.find(n => n.tag === 'demo')
      const title = parsed.children[0].content // 取出 title，从 demo 标签中
      const main = file.split(parsed.loc.source).join('').trim() // 取出 内容并清除首位空白符
      return `export default function (Component) {
        Component.__sourceCode = ${
            JSON.stringify(main)
          }
        Component.__sourceCodeTitle = ${JSON.stringify(title)}
        }`.trim()  // 导出成js对象
    }
  },
  plugins: [md()],
  base: './',
  assetsDir: 'assets',
};