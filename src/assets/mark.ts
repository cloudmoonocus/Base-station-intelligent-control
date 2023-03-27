export const markMap: Array<Array<number>> = [
    [104.6753930423882, 31.480730779624693],
    [104.67442287243742, 31.474294307459758],
    [104.67072185373631, 31.46339132042777],
    [104.6912391515842, 31.469920946919505],
    [104.69364661035094, 31.481870204193765],
    [104.69393406811413, 31.465454978505953],
    [104.70503712421747, 31.472169249590884],
    [104.70737271854341, 31.48079237050018],
    [104.70482153089506, 31.461050398945922],
];

export function createMark(): Array<Array<number>> {
    const leftTop = [104.23861162757167, 31.691576819809413];
    let count = 2000; // 随机点数
    let step = 0.9; // 范围
    let markList = [];

    while (count--) {
        let x, y;
        x = leftTop[0] + Math.random() * step;
        y = leftTop[1] - Math.random() * step;
        while (x > 105.25050093459994) {
            x = leftTop[0] + Math.random() * step;
        }
        while (y < 31.261875295471285) {
            y = leftTop[1] - Math.random() * step;
        }
        markList.push([x, y]);
    }

    return markList;
}
