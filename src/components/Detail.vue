<template>
    <div ref="myChart" id="myChart" style="width: 900px;height:400px;"></div>
</template>

<script lang="ts" setup>
// @ts-nocheck
// Echarts
import * as echarts from "echarts";
import { onMounted, ref } from 'vue';

let myChart = ref()
onMounted(() => {
    let myEchart = echarts.init(myChart.value)
    myEchart.setOption({
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['室内温度', '基站温度', '空调温度', '室内湿度']
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00', '2:00', '4:00']
        },
        yAxis: [{//第一个y轴位置在左侧
            position: 'left',
            type: 'value',
            name: '温度',
            axisLabel: {
                formatter: '{value} ℃'
            }
        },
        {//第二个y轴在右侧
            position: 'right',
            type: 'value',
            name: '湿度',
            axisLabel: {
                formatter: '{value} %'
            }
        }],
        series: [
            {
                name: '室内温度',
                type: 'line',
                stack: 'Total',
                yAxisIndex: '0',
                data: [11, 12, 14, 17, 18, 18, 18, 15, 15, 14, 14, 12]
            },
            {
                name: '基站温度',
                type: 'line',
                stack: 'Total',
                yAxisIndex: '0',
                data: [3, 4, 6, 9, 10, 10, 10, 7, 7, 6, 6, 4]
            },
            {
                name: '空调温度',
                type: 'line',
                stack: 'Total',
                yAxisIndex: '0',
                data: [2, 3, 6, 8, 11, 9, 10, 6, 8, 6, 4, 3]
            },
            {
                name: '室内湿度',
                type: 'line',
                stack: 'Total',
                yAxisIndex: '1',
                data: [70, 65, 68, 70, 73, 71, 74, 73, 75, 72, 73, 74]
            }
        ]
    }
    )
    window.addEventListener('resize', function () {
        myEchart.resize();
    });
})
</script>

<style lang="scss" scoped>
#myChart {
    margin: 0 auto;
}
</style>
