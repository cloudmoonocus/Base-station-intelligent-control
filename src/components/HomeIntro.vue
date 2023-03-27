<template>
    <el-divider style="margin-top: 5vh;" />
    <div class="container">
        <div class="text">
            <slot name="text"></slot>
        </div>
        <div class="image">
            <slot name="image"></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
// @ts-nocheck

</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: space-between;

    .text {
        margin-top: 5vh;
        width: 35vw;
        font-size: 18px;
        text-indent: 2em;
        letter-spacing: 0.5px;
        text-align: justify;
        line-height: 6vh;
    }

    .image {
        width: 35vw;
        padding: 20px;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
