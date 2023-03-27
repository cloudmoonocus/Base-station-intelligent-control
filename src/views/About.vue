<template>
    <h2 class="head h2">成员介绍</h2>
    <div class="main">
        <div class="main_item" v-for="val in member">
            <img class="main_item_img" :src="val.src" :alt="val.name">
            <div class="main_item_name">{{ val.name }}</div>
            <ul class="main_item_list">
                <li v-for="des in val.text">{{ des }}</li>
            </ul>
        </div>
    </div>
    <h2 class="h2">公司荣誉</h2>
    <div class="main2">
        <div class="main2_item" v-for="val in compony">
            <div class="main2_item_imgs">
                <img v-for="_img in val.src" class="main2_item_imgs_img" :src="_img" :alt="val.title">
            </div>
            <div class="main2_item_title">{{ val.title }}</div>
            <div class="main2_item_text">{{ val.text }}</div>
        </div>
    </div>
    <h2 class="h2">组织机构</h2>
    <div class="organization">
        <img class="organization_img" src="/images/组织架构.png" alt="组织机构">
    </div>
</template>

<script lang="ts" setup>
import { member, compony } from '../assets/member.js'
</script>

<style lang="scss" scoped>
.h2 {
    margin-top: 10vh;
    font-size: 40px;
    text-align: center;
}

.head {
    margin-top: calc(70px + 8vh);
}

.main {
    margin-top: 10vh;
    display: flex;
    justify-content: space-between;

    &_item {
        display: flex;
        flex-direction: column;
        width: 140px;

        &_img {
            width: 140px;
            height: 200px;
        }

        &_name {
            margin-top: 15px;
            text-align: center;
            font-size: 20px;
            font-weight: bold;
            color: #fff;
        }

        &_list {
            margin-top: 15px;
            font-size: 16px;

            >li {
                margin-top: 10px;
            }
        }
    }

}

.main2 {
    margin-top: 10vh;
    display: flex;
    justify-content: space-between;

    &_item {
        display: flex;
        flex-direction: column;
        width: 320px;
        text-align: justify;

        &_imgs {
            position: relative;
            width: 300px;
            height: 350px;

            & img:nth-child(1) {
                position: absolute;
                left: 0;
                width: 300px;
                height: 350px;
                z-index: 10;
            }

            & img:nth-child(2) {
                position: absolute;
                left: -40px;
                width: 300px;
                height: 350px;
                z-index: 10;
            }

            & img:nth-child(3) {
                position: absolute;
                left: 40px;
                width: 300px;
                height: 350px;
                z-index: 9;
            }
        }

        &_title {
            margin-top: 15px;
            text-align: center;
            font-size: 20px;
            font-weight: bold;
            color: #fff;
        }

        &_text {
            margin-top: 15px;
            font-size: 16px;
        }
    }
}

.organization {
    margin-top: 5vh;
    display: flex;
    justify-content: center;

    &_img {
        padding: 15px;
        background-color: #fff;
        border-radius: 10px;
        backdrop-filter: blur(8px);
        background-color: rgba(230, 227, 227, 0.7);
        box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
        border: 2px rgba(255, 255, 255, 0.4) solid;
        border-bottom: 2px rgba(40, 40, 40, 0.35) solid;
        border-right: 2px rgba(40, 40, 40, 0.35) solid;
    }

}
</style>
