<template>
    <el-table :data="tableData" border style="width: 100%" :row-class-name="tableRowClassName">
        <el-table-column prop="time" label="异常时间" />
        <el-table-column prop="name" label="名称" width="150" />
        <el-table-column prop="address" label="所在地" />
        <el-table-column prop="temperature" label="温度" width="80" />
        <el-table-column prop="humidity" label="湿度" width="80" />
        <el-table-column prop="level" label="异常等级" width="80" />
        <el-table-column prop="type" label="类型" width="100" />
    </el-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const tableData = ref([
    {
        time: '2023年3月4日16:27:47',
        name: "通信基站@121",
        address: "绵阳市 涪城区 普明北路东段 ",
        temperature: "67℃",
        humidity: "80%",
        level: "低",
        type: "温度过高"
    },
    {
        time: '2023年3月4日16:27:47',
        name: "通信基站@4",
        address: "绵阳市 涪城区 莲花寺路 ",
        temperature: "20℃",
        humidity: "70%",
        level: "低",
        type: "正常"
    },
    {
        time: '2023年3月4日16:27:47',
        name: "通信基站@212",
        address: "绵阳市 涪城区 虹苑南路 ",
        temperature: "45℃",
        humidity: "78%",
        level: "低",
        type: "温度过高"
    },
    {
        time: '2023年3月4日16:27:47',
        name: "通信基站@288",
        address: "绵阳市 游仙区 胜黎路 ",
        temperature: "25℃",
        humidity: "75%",
        level: "低",
        type: "正常"
    }
])

const tableRowClassName = ({ row }) => {
    console.log(row.type);
    if (row.type === '温度过高') {
        console.log('red-row');
        return 'red-row'
    }
    return 'normal-row'
}
</script>

<style lang="scss">
.red-row {
    height: 60px;
    background-color: #fcd3d3 !important;
}

.normal-row {
    height: 60px;
    background-color: #e1f3d8 !important;
}
</style>
