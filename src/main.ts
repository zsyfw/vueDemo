//引入清除默认样式
import '@/style/reset.scss'
//引入根组件app
import App from '@/App.vue' 

//vue3框架提供的creatAPP方法,可以用来创建实例方法
import { createApp } from 'vue'
import {createPinia} from 'pinia'
//引入持久化储存插件
import piniaPluginPersist from 'pinia-plugin-persistedstate'

//引入全局组件
import top from '@/components/top/index.vue'
import bottom from '@/components/bottom/index.vue'

//引入vue-router核心插件并安装
import router from '@/router';
//利用creatApp方法创建应用实例，且将应用实例挂载到挂载点上（app）
const pinia = createPinia()
const app = createApp(App);

app.component('top',top);
app.component('bottom',bottom);

//使用持久化插件
pinia.use(piniaPluginPersist)

app.use(router);
app.use(pinia)
app.mount('#app');
