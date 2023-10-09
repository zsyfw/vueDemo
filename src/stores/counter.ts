//导入一个方法 defineStore
import {defineStore} from 'pinia'
import  {computed, ref} from 'vue'
import axios from 'axios'

const api_url = 'http://geek.itheima.net/v1_0/channels'

export const uesCounterStore= defineStore('counter',()=>{
    //定义数据(state)
    const count = ref(0);

    //定义修改数据的方法(action 同步+异步)
    const add = () =>{
            count.value++;
    }

    //getter定义
    const doubleCount = computed(()=>count.value*2)
    
    //定义异步action
    const list = ref([]as any[])
    const getList = async()=>{
        const res = await axios.get(api_url)
        list.value = res.data.data.channels
    }
    
    return {
        count,
        doubleCount,
        add,
        getList,
        list
    } 

},{persist:true})


