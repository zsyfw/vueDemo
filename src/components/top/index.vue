<template>
  <div class="top">
    <div class="content">
        <div class="left">
            <img src="../../../src/assets/images/top.jpg" alt="">
            <p>moonlight线上兼职平台</p>
        </div>
        <div class="right">
            <p class="help">帮助</p>
            <p class="login">登录/注册</p>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.top {
    position: fixed;//固定位置
    z-index: 999;//层级最高
    width: 100%;
    height: 70px;
    background:#fff;
    display: flex;
    justify-content: center;/* 居中排列 */
    .content {
        width: 1200px;
        height: 70px;
        background: #fff;
        display: flex;   //自由排列，元素不在默认垂直排列
        justify-content: space-between;   /* 均匀排列每个元素，首个元素放置于起点，末尾元素放置于终点 */
        .left {
            display: flex;
            justify-content: center;/* 居中排列 */
            align-items: center; /* 设置子元素垂直居中对齐 */
            img{
                width: 50px;
                height: 50px;
                margin-right: 10px; 
            }
            p{
                font-size: 20px;
                color: #55a6fe;
            }
        }
        .right{
            display: flex;
            align-items: center;
            font-size: 14px;
            .help{
                margin-right: 10px;
            } 
        }
    }
}
</style>