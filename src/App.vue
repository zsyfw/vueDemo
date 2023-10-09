<template>
  <div class="index">
    <!--顶部区域-->
    <top></top>
    <!--路由区域-->
    <div class="content">
      <button @click="counterStore.add">{{counterStore.count}}</button>{{ counterStore.doubleCount }}
      <ul>
    <li v-for="item in counterStore.list" :key="item.id">
      {{item.name}}
    </li> 
  </ul>
      <router-view></router-view>
    </div>
    <!--底部区域-->
    <bottom></bottom>
  </div>
 
</template>

<script setup lang="ts">
//导入use打头的pinia方法
import {uesCounterStore} from '@/stores/counter'
import { onMounted } from 'vue';
//执行方法得到store实例对象
const counterStore = uesCounterStore()


onMounted(()=>{
  counterStore.getList()
})
</script>

<style scoped lang="scss">
.index{
  display: flex;
  flex-direction: column;  //竖向浮动
  align-items: center; //垂直居中
  .content{
  margin-top:70px ;
  width: 1200px;
  height: 700px;
  background: #fff;
  }
  
}

</style>