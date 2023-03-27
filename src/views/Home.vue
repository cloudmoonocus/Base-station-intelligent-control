<template>
    <div class="first">
        <div class="first_left">
            <div class="first_left_subtitle">整体概述</div>
            <div class="first_left_text">
                团队基于TM4C单片机，结合一系列自主设计的新算法，通过多模块组合，控制通信基站中的空调等设备，实现较为节能的温度控制方式，设计出此通信基站智能监测节能系统。以降低基站功耗，降低通信服务使用成本，推动基站的数字化改造进程。
            </div>
            <div class="first_left_text">
                这套系统不仅仅是加装在基站内硬软件的组合，更是一套针对基站现有数字化程度低、无法在线巡检和制冷设施耗电浪费大等问题的综合解决方案。本系统具有设备成本低、安装简单、高适用性等特点，推广后将大量降低人员运维成本和基站用电成本，成效可观。
            </div>
        </div>
        <img class="first_right" src="/images/all.png" alt="系统总体框图">
    </div>
    <HomeIntro>
        <template #text>
            本系统硬件部分分为主控板部分和从控板部分：
            主控板部分分为自行绘制设计的PCB拓展板及主控芯片，拓展板尺寸为15cm*10cm*0.1mm，能够完美的兼容TM4C123G主控芯片的接口，可外接蓝牙、4G通信模块、OLED显示屏、GPRS通信模块、红外调制控制器等，并预留了待后续开发的接口、电源接口、USB调试/供电口等，提高了系统的集成度，并为后期产品封装的美观性、整洁性做出了考虑。拓展板四周设计了螺丝限位孔方便装置的固定。主控芯片采用德州仪器的TM4C系列芯片,其为基于CortexM4内核的微处理器,功耗低,较好的适配了硬件方面的各类外设。
        </template>
        <template #image>
            <img src="/images/design.png" />
        </template>
    </HomeIntro>
    <HomeIntro>
        <template #text>
            从控板采用批量采购的低成本微处理器，价格低廉且鲁棒性高。
            MCU充当主控制器，处理信息并发出命令。通用分组无线业务（GPRS）模块充当相关人员系统的看门狗，连接着系统和工作人员。一旦系统出现基站掉电、系统宕机等重大故障，将立即通过短信服务向相关人员报告错误，以便后续处理。同时，系统会通过该模块与消息队列遥测传输（MQTT）服务器进行通信，以便工作人员了解基站的温度等信息。
            低功耗蓝牙（BLE）模块组成分布式测温网络，通过加权算法，网络将准确反馈通信基站的实时温度，并传输给MCU进一步运行。
            红外信号发射器可以将空调的指令存储到电可擦可编程只读存储器（EEPROM）芯片中，调制成红外信号，在需要时发送给空调（CAC）系统，从而控制空调，实现基站温度调节的效果。
            温度传感器收集当前位置的温度和湿度信息。温度传感器与蓝牙模块组网, 形成分布式传感器网络,精确的测出基站各个位置的温度,方便主控制器发出有关指令。
        </template>
        <template #image>
            <img src="/images/原理.png" />
        </template>
    </HomeIntro>
</template>

<script lang="ts" setup>
import HomeIntro from '@/components/HomeIntro.vue';
</script>

<style lang="scss" scoped>
* {
    overflow-x: hidden;
    overflow-y: hidden;
    box-sizing: border-box;
}

.first {
    display: flex;
    justify-content: space-between;
    padding-top: calc(70px + 8vh);

    &_left {
        width: 35vw;
        display: flex;
        flex-direction: column;

        &_subtitle {
            font-size: 50px;
            font-weight: bold;
        }

        &_text {
            margin-top: 5vh;
            width: 35vw;
            font-size: 18px;
            text-indent: 2em;
            letter-spacing: 0.5px;
            text-align: justify;
            line-height: 6vh;
        }

    }

    &_right {
        width: 35vw;
        padding: 20px;
        border-radius: 15px;
        background-color: rgba($color: #e9e9e9, $alpha: 0.9);
    }
}
</style>
