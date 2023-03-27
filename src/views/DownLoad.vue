<template>
    <!-- download -->
    <h2 class="head h2">下载</h2>
    <div class="main">
        <div class="main_item" v-for="val in downloadList">
            <img class="main_item_img" :src="val.src" :alt="val.text">
            <div class="main_item_text">{{ val.text }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const downloadList = ref([
    {
        src: "/images/windows.png",
        text: "Windows"
    },
    {
        src: "/images/mac.png",
        text: "macOS"
    },
    {
        src: "/images/ios.png",
        text: "iOS"
    },
    {
        src: "/images/android.png",
        text: "Android"
    },
])
</script>

<style lang="scss" scoped>
.h2 {
    margin-top: 10vh;
    font-size: 45px;
    text-align: center;
}

.head {
    margin-top: calc(70px + 8vh);
}

.main {
    margin-top: 20vh;
    display: flex;
    justify-content: space-evenly;
    height: 45vh;

    &_item {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 200px;
        height: 200px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: rgba(255, 255, 255, 0.24) 0px 3px 8px;
        transition: all .3s linear;
        margin-bottom: auto;
        cursor: pointer;

        &:hover {
            transform: scale(1.1);
            box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 0px, rgba(255, 255, 255, 0.1) 0px 8px 24px, rgba(255, 255, 255, 0.1) 0px 16px 48px;
        }

        &_img {
            width: 100px;
            height: 100px;
        }

        &_text {
            color: #000;
        }
    }
}
</style>
