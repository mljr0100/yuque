declare module "*.vue" {
    import { DefineComponent } from "vue"
    const component: DefineComponent<{}, {}, any>
    export default component
 }
 interface ImportMetaEnv {
    readonly VITE_APP_VERSION: string;
    // 添加其他需要的环境变量
  }
   
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }