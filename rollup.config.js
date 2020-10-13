import esbuild from 'rollup-plugin-esbuild'
import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import dartSass from 'sass';
import { terser } from "rollup-plugin-terser"  // 混乱js代码

export default {
  input: 'src/lib/index.ts', // 入口文件
  output: {
    globals: { // 配置全局依赖，不打包（默认使用我这个库的人都会引入vue）
      vue: 'Vue'
    },
    name: 'Kin-ui', // 包名
    file: 'dist/lib/kin.js', // 输出文件
    format: 'umd',  // umd 模块规范
    plugins: [terser()]  // 使用terser插件，是代码变乱
  },
  plugins: [
    scss({ include: /\.scss$/, sass: dartSass }),  // scss 转js
    esbuild({
      include: /\.[jt]s$/,  // js/ts 语法转码插件
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015'   // 目标为 es6
    }),
    vue({
      include: /\.vue$/, // vue转js
    })
  ],
}