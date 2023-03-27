<template>
    <div id="container"></div>
    <el-drawer v-model="drawer" title="基站数据" direction="rtl" size="25%">
        <Drawer />
    </el-drawer>
    <div class="fixFun">
        <div class="fixFun_title">NEUQ 基站智控团队</div>
        <div>
            <el-button type="primary" @click="showAll = true">查看所有基站</el-button>
            <el-popover placement="top-start" title="添加基站" :width="200" trigger="click" content="点击地图上添加的基站位置">
                <template #reference>
                    <el-button type="primary" @click="addStationClick">添加新基站</el-button>
                </template>
            </el-popover>
            <el-button type="warning" @click="showLog = true">查看报警日志</el-button>
        </div>
    </div>
    <el-dialog v-model="showAll" title="基站列表" width="600px" style="height: 70vh;overflow: auto;">
        <StationList />
    </el-dialog>
    <el-dialog v-model="showLog" title="报警日志" width="900px">
        <Log />
    </el-dialog>
</template>

<script lang="ts" setup>
// @ts-nocheck
import { onMounted, ref, watch } from 'vue'
import { markMap, createMark } from '@/assets/mark'
import Drawer from '@/components/Drawer.vue'
import StationList from '@/components/StationList.vue'
import { useStationData } from '@/stores/data'
import { geocoder } from '@/assets/geocoder'

const stationData = useStationData()
let map: any, myIcon: any, watchIf = false

function createIcon() {
    // 生成图标
    myIcon = new BMapGL.Icon("/images/mark.png", new BMapGL.Size(30, 30));
    const markList = createMark()
    for (let index = 0; index < markList.length; index++) {
        stationData.stationList.push(new BMapGL.Point(markList[index][0], markList[index][1]))
        stationData.stationIconList.push(new BMapGL.Marker(stationData.stationList[index], {
            icon: myIcon
        }))
        map.addOverlay(stationData.stationIconList[index]);
    }
    for (let index = markList.length; index < markMap.length + markList.length; index++) {
        stationData.stationList.push(new BMapGL.Point(markMap[index - markList.length][0], markMap[index - markList.length][1]))
        stationData.stationIconList.push(new BMapGL.Marker(stationData.stationList[index], {
            icon: myIcon
        }))
        map.addOverlay(stationData.stationIconList[index]);
    }

    // 图标添加事件
    for (let index = 0; index < stationData.stationIconList.length; index++) {
        stationData.stationIconList[index].addEventListener('click', function (e: any) {
            geocoder(stationData.stationList[index])
            drawer.value = true
            stationData.stationData.index = index
            stationData.stationData.name = `通信基站@${index}号`
            stationData.stationData.temperatureIn = `${(Math.random() * 2 + 16).toFixed(1)} ℃`
            stationData.stationData.temperatureStation = `${(Math.random() * 2 + 10).toFixed(1)} ℃`
            stationData.stationData.temperatureAir = `${(Math.random() * 1.1 + 10).toFixed(1)} ℃`
        });
    }
    Promise.resolve(true).then(() => {
        watchIf = true
    })
}

onMounted(() => {
    map = new BMapGL.Map('container')
    // 中心位置和层级
    map.centerAndZoom('绵阳市', 16)
    // 鼠标缩放
    map.enableScrollWheelZoom(true)
    // 添加比例尺控件
    const scaleCtrl = new BMapGL.ScaleControl();
    map.addControl(scaleCtrl);
    // 添加缩放控件
    const zoomCtrl = new BMapGL.ZoomControl();
    map.addControl(zoomCtrl);
    createIcon()
})

const drawer = ref(false)
const showLog = ref(false)
const showAll = ref(false)

function addStation(e: any) {
    myIcon = new BMapGL.Icon("/images/mark.png", new BMapGL.Size(30, 30));
    stationData.stationList.push(new BMapGL.Point(e.latlng.lng, e.latlng.lat))
    stationData.stationIconList.push(new BMapGL.Marker(stationData.stationList[stationData.stationList.length - 1], {
        icon: myIcon
    }))
    map.addOverlay(stationData.stationIconList[stationData.stationIconList.length - 1]);
    stationData.stationIconList[stationData.stationIconList.length - 1].addEventListener('click', function (e: any) {
        drawer.value = true
        geocoder(stationData.stationList[stationData.stationList.length - 1])
        stationData.stationData.index = stationData.stationList.length - 1
        stationData.stationData.name = `通信基站@${stationData.stationList.length - 1}号`
        stationData.stationData.temperatureIn = `${(Math.random() * 2 + 16).toFixed(1)} ℃`
        stationData.stationData.temperatureStation = `${(Math.random() * 2 + 10).toFixed(1)} ℃`
        stationData.stationData.temperatureAir = `${(Math.random() * 1.1 + 10).toFixed(1)} ℃`
    });
    map.removeEventListener('click', addStation)
}

const addStationClick = () => {
    map.addEventListener('click', addStation);
}
</script>

<style lang="scss">
* {
    color: #646464;
}

#app {
    padding: 0 0;
}

#container {
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    margin: 0;
}

.fixFun {
    position: fixed;
    z-index: 2000;
    left: 20px;
    top: 20px;
    padding: 5px 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 600px;
    height: 50px;
    border-radius: 15px;
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    &_left {
        padding: 5px 20px;
        border-radius: 15px;
        border: 1px #646464 solid;
        text-align: center;
        cursor: pointer;

        &:hover {
            color: #000000;
            background-color: #e6e6e6;
        }
    }

    &_title {
        font-weight: bold;
    }
}

.el-button>span {
    color: #ffffff !important;
}
</style>
