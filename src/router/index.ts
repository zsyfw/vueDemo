import {createRouter,createWebHistory} from 'vue-router';
//createRouter创建路由器实例，管理多个路由

export default createRouter ({
    //路由模式设置
    history:createWebHistory(),
    //管理路由
    routes:[
        {
            path:'/home',
            component:()=>import('@/pages/home/index.vue')
        },
        {
            path:'/moonlight',
            component:()=>import('@/pages/moonlight/index.vue')
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]
})



