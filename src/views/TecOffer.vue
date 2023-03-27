<template>
    <!-- 1 -->
    <!-- <h2 class="head h2">常见 QA</h2>
    <div class="first">
        <el-collapse>
            <el-collapse-item title="如何联系我们" name="1">
                <div>
                    发送邮件至：sss
                </div>
                <div>
                    Consistent within interface: all elements should be consistent, such
                    as: design style, icons and texts, position of elements, etc.
                </div>
            </el-collapse-item>
            <el-collapse-item title="Consistency" name="2">
                <div>
                    Consistent with real life: in line with the process and logic of real
                    life, and comply with languages and habits that the users are used to;
                </div>
                <div>
                    Consistent within interface: all elements should be consistent, such
                    as: design style, icons and texts, position of elements, etc.
                </div>
            </el-collapse-item>
            <el-collapse-item title="Consistency" name="3">
                <div>
                    Consistent with real life: in line with the process and logic of real
                    life, and comply with languages and habits that the users are used to;
                </div>
                <div>
                    Consistent within interface: all elements should be consistent, such
                    as: design style, icons and texts, position of elements, etc.
                </div>
            </el-collapse-item>
            <el-collapse-item title="Consistency" name="4">
                <div>
                    Consistent with real life: in line with the process and logic of real
                    life, and comply with languages and habits that the users are used to;
                </div>
                <div>
                    Consistent within interface: all elements should be consistent, such
                    as: design style, icons and texts, position of elements, etc.
                </div>
            </el-collapse-item>
            <el-collapse-item title="Consistency" name="5">
                <div>
                    Consistent with real life: in line with the process and logic of real
                    life, and comply with languages and habits that the users are used to;
                </div>
                <div>
                    Consistent within interface: all elements should be consistent, such
                    as: design style, icons and texts, position of elements, etc.
                </div>
            </el-collapse-item>
        </el-collapse>
    </div> -->
    <!-- 2 -->
    <h2 class="head h2">安装和运行</h2>
    <h3 class="h3">系统间采用无线组网，省去大量布线，拆装简便</h3>
    <div class="second">
        <div class="second_left">
            <img src="/images/安装Left.jpg" alt="">
            <div class="second_text">在室内外各点布置温湿度传感器</div>
        </div>
        <div class="second_middle">
            <img src="/images/安装Middle.png" alt="">
            <div class="second_text">通过蓝牙将数据发送给控制端</div>
        </div>
        <div class="second_right">
            <img src="/images/安装Right.jpg" alt="">
            <div class="second_text">控制端安装在墙面负责数据处理和遥控功能</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.h2 {
    margin-top: 10vh;
    font-size: 40px;
    text-align: center;
}

.h3 {
    margin-top: 5vh;
    font-size: 25px;
    text-align: center;
}

.head {
    margin-top: calc(70px + 8vh);
}

.first {
    width: 60vw;
    margin: 0 auto;
    margin-top: 5vh;
    padding: 0 25px;
    border-radius: 15px;
    background-color: #fff;
}

.second {
    margin-top: 5vh;
    display: flex;
    justify-content: space-evenly;
    text-align: center;

    &_left {
        width: 25vw;

        >img {
            width: 25vw;
        }
    }

    &_middle {
        text-align: center;

        >img {
            margin-top: 10vh;
            width: 10vw;
        }
    }

    &_right {
        width: 25vw;

        >img {
            width: 25vw;
        }
    }

    &_text {
        margin-top: 20px;
        padding: 10px 15px;
        color: #fff;
        font-size: 18px;
        background-color: #000;
        border-radius: 15px;
        box-shadow: rgba(255, 255, 255, 0.4) 0px 2px 4px, rgba(255, 255, 255, 0.3) 0px 7px 13px -3px, rgba(255, 255, 255, 0.2) 0px -3px 0px inset;
    }
}
</style>
