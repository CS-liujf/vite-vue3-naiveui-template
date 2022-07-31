/// <reference types="vite/client" />

declare module '*.vue' {
  import type { MessageProviderInst, DialogProviderInst, NotificationProviderInst, LoadingBarProviderInst } from 'naive-ui'
  global {
    interface Window {
      $message: MessageProviderInst,
      $dialog: DialogProviderInst,
      $notification: NotificationProviderInst,
      $loadingBar: LoadingBarProviderInst
    }
    interface ImportMetaEnv {
      VITE_APP_TITLE: string,
      VITE_APP_BASEURL: string,
      [propName: string]: number | string | boolean | Array<string>
    }
  }
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
