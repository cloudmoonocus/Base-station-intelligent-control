<template>
    <h2 class="head h2">给我们留言</h2>
    <el-form class="form" :model="form" label-position="top">
        <el-form-item label="姓名">
            <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="联系方式">
            <el-input v-model="form.contact" />
        </el-form-item>
        <el-form-item label="反馈类型">
            <el-radio-group v-model="form.type">
                <el-radio label="无法使用" />
                <el-radio label="不会使用" />
                <el-radio label="出现问题" />
            </el-radio-group>
        </el-form-item>
        <el-form-item label="反馈标题">
            <el-input v-model="form.title" />
        </el-form-item>
        <el-form-item label="内容描述">
            <el-input type="textarea" v-model="form.des" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="resetForm">清空</el-button>
            <el-button type="success" @click="onSubmit">提交</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

let form = ref({
    name: "",
    contact: "",
    type: "",
    title: "",
    des: ""
})

const onSubmit = () => {
    console.log('submit!')
}

const resetForm = () => {
    form.value = {
        name: "",
        contact: "",
        type: "",
        title: "",
        des: ""
    }
}
</script>

<style lang="scss" scoped>
.h2 {
    margin-top: 10vh;
    margin-bottom: 5vh;
    font-size: 40px;
    text-align: center;
}

.h4 {
    margin-top: 10vh;
    font-size: 20px;
    text-align: center;
}

.head {
    margin-top: calc(70px + 8vh);
}

.form {
    margin: 0 auto;
    width: 50vw;
    padding: 25px;
    border-radius: 10px;
    backdrop-filter: blur(8px);
    background-color: rgba(87, 91, 93, 0.197);
    box-shadow: rgba(126, 126, 126, 0.3) 2px 8px 8px;
    border: 2px rgba(255, 255, 255, 0.4) solid;
}
</style>
