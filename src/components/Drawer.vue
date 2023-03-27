<template>
    <el-descriptions :column="1" border size="large">
        <el-descriptions-item align="center" label-class-name="keyboard" label="基站名称">
            <el-input v-model="stationData.stationData.name" disabled />
        </el-descriptions-item>
        <el-descriptions-item align="center" label-class-name="keyboard" label="基站地址">
            <el-input v-model="stationData.stationData.address" disabled />
        </el-descriptions-item>
        <el-descriptions-item align="center" label-class-name="keyboard" label="室内温度">
            <el-input v-model="stationData.stationData.temperatureIn" disabled />
        </el-descriptions-item>
        <el-descriptions-item align="center" label-class-name="keyboard" label="基站温度">
            <el-input v-model="stationData.stationData.temperatureStation" disabled />
        </el-descriptions-item>
        <el-descriptions-item align="center" label-class-name="keyboard" label="空调温度">
            <el-input v-model="stationData.stationData.temperatureAir" disabled />
        </el-descriptions-item>
    </el-descriptions>
    <div class="buttonList">
        <el-button round class="buttonList_button" type="success" @click="showDetail = true">查看详情</el-button>
        <el-button round class="buttonList_button" type="danger" @click="showDelete = true">删除该基站</el-button>
        <el-button round class="buttonList_button" type="info" @click="refresh">刷新</el-button>
    </div>
    <el-dialog v-model="showDetail" title="基站信息" width="900px">
        <Detail />
    </el-dialog>
    <el-dialog v-model="showDelete" title="删除基站" width="600px">
        <div>确定删除该基站？</div>
        <template #footer>
            <el-button type="primary" @click="showDelete = false">取消</el-button>
            <el-button type="danger" @click="deleteStation">
                删除
            </el-button>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { useStationData } from '@/stores/data';
import { ref } from 'vue';
import Detail from '@/components/Detail.vue'
const stationData = useStationData()

const showDetail = ref(false)
const showDelete = ref(false)

const deleteStation = () => {
    showDelete.value = false
    location.reload()
}

const refresh = () => {
    stationData.stationData.temperatureIn = `${(Math.random() * 2 + 16).toFixed(1)} ℃`
    stationData.stationData.temperatureStation = `${(Math.random() * 2 + 10).toFixed(1)} ℃`
    stationData.stationData.temperatureAir = `${(Math.random() * 1.1 + 10).toFixed(1)} ℃`
}
</script>

<style lang="scss" scoped>
.buttonList {
    display: flex;
    height: 20vh;
    flex-direction: column;
    justify-content: space-evenly;

    &_button {
        margin: 0 auto;
        width: 80%;
        transition: all .3s linear;

        &:hover {
            transform: scale(1.05);
        }
    }
}
</style>
