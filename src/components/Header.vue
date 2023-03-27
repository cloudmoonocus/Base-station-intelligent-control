<template>
    <el-menu :default-active="activeIndex" class="menu" mode="horizontal" router background-color="#303133"
        active-text-color="#a0cfff" @select="handleSelect">
        <el-menu-item class="menu_item" index="/home">产品介绍</el-menu-item>
        <el-menu-item class="menu_item" index="/tecOffer">技术支持</el-menu-item>
        <el-menu-item class="menu_item" index="/download">下载中心</el-menu-item>
        <el-menu-item class="menu_item" index="/about">关于我们</el-menu-item>
        <el-menu-item class="menu_item" index="/contact">联系我们</el-menu-item>
        <el-menu-item class="menu_item" index="/main">基站操作</el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
import router from '@/router';
import { ref, watch, nextTick } from 'vue';

// 动态修改菜单路径
const activeIndex = ref()
watch(() => router.currentRoute.value.path, () => {
    nextTick(() => {
        activeIndex.value = router.currentRoute.value.path
    })
})

const handleSelect = () => {
    window.scrollTo(0, 0)
}
</script>

<style lang="scss" scoped>
.menu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    opacity: 0.95;
    display: flex;
    justify-content: center;
    z-index: 999;

    &_item {
        color: #fff;
        font-size: 18px;
        font-weight: bold;
        margin: 0 35px;
    }
}
</style>
