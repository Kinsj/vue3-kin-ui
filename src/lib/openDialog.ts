import Dialog from "./Dialog.vue";
import { createApp, h } from "vue";
const openDialog = (options) => {
  const { title, content, onOk, onCancel } = options;
  const div = document.createElement("div");
  document.body.appendChild(div);
  const close = () => {
    app.unmount(div);
    div.remove();
  };
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          "onUpdate:visible": (newVisible) => {
            if (newVisible === false) {
              close();
            }
          },
          onOk, onCancel
        },
        {
          title,
          content,
        }
      );
    },
  });
  app.mount(div);
};

export default openDialog;