<template>
    <el-descriptions :column="1" border size="large">
        <el-descriptions-item align="center" label="基站地址" v-for="val in stationShowList">
            <el-button type="primary">{{ val.address }}</el-button>
        </el-descriptions-item>
    </el-descriptions>
</template>

<script lang="ts" setup>
// @ts-nocheck
import { useStationData } from '@/stores/data';
import { ref } from 'vue';
const stationData = useStationData()

const stationShowList: any = ref([])

const geoc = new BMapGL.Geocoder();
for (let index = 0; index < stationData.stationList.length; index++) {
    geoc.getLocation(stationData.stationList[index], function (rs: any) {
        let addComp = rs.addressComponents;
        stationShowList.value.push(
            {
                index: index,
                address: `${addComp.city} ${addComp.district} ${addComp.street} ${addComp.streetNumber} 第${index + 1}号`,
            }
        )
    });
}
</script>

<style lang="scss" scoped>
</style>
