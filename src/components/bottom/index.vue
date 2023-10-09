<template>
  <div class="bottom">
    <div class="content">
        <div class="left">
            <span>左文本</span>
        </div>
        <div class="right">
            <span>右文本</span>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.bottom{
    width: 100%;
    height: 50px;
    background: #f0f2f5;
    display: flex;
    justify-content: center;
    .content{
        width: 1200px;
        height: 100%;
        background: #f0f2f5;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
  }
</style>