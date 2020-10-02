import { createApp, h } from 'vue';
import Dialog from './Dialog.vue'

const openDialog = (options) => {
  const { title, content, onOk, onCancel } = options;

  // 创建挂载节点
  const div = document.createElement('div')
  document.body.appendChild(div)

  // 创建Dialog实例
  const app = createApp({
    render() {
      return h( // h 可以理解为 React.createElement();
        Dialog,  // h 的第一个参数是组件类型，或者标签类型如 'div'
        { // h 的第二个参数是组件props
          visible: true,
          "onUpdate:visible": newVisible => !newVisible && close(), // visible产生变化，且为false则调用销毁方法
          onOk,
          onCancel
        },
        { // h 的第三个参数就是 slot， 可以理解为children
          title,
          content
        }
      )
    }
  })
  // 挂载实例
  app.mount(div)

  // 销毁方法
  const close = () => {
    app.unmount(div);
    div.remove();
  }

}

export default openDialog;