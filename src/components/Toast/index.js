import Vue from 'vue';
import Toast from './Toast.vue';

const ToastConstructor = Vue.extend(Toast);

function toast(tips) {
  let toastInstance = null;

  if (!toastInstance) {
    toastInstance = new ToastConstructor();
  }

  toastInstance.tips = tips;

  if (!toastInstance.isMounted) {
    const dom = document.createElement('div');
    document.querySelector('body').appendChild(dom);
    toastInstance.$mount(dom);
  }

  toastInstance.show();
}

export {
  toast,
}