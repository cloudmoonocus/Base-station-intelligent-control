interface memberType {
    src: string;
    name: string;
    text: Array<string>;
}

export const member: Array<memberType> = [
    {
        src: "/images/李思睿.png",
        name: "李思睿",
        text: ["熟练掌握51、STM32及TM4C系列单片机", "NEUQ-ACM比赛中获得校级三等奖", "校三等学业奖学金"],
    },
    {
        src: "/images/吴冰.png",
        name: "吴冰",
        text: ["熟练使用office，擅长交际与语言表达", "山东省省级优秀学生", "晨曦杯演讲比赛三等奖", "三创赛校"],
    },
    {
        src: "/images/张浩伟.png",
        name: "张浩伟",
        text: ["擅长传感网络的构建，表达能力强", "挑战杯专项校级三等奖", "校三等学业奖学金"],
    },
    {
        src: "/images/王露.png",
        name: "王露",
        text: ["对硬件设计较熟悉", "参与了全国大学生电子设计大赛等科创比赛", "校二等学业奖学金"],
    },
    {
        src: "/images/张凯飞.png",
        name: "张凯飞",
        text: ["擅长文书整理工作", "参与了全国大学生数学建模竞赛校级三等奖", "校三等学业奖学金"],
    },
    {
        src: "/images/徐甜甜.png",
        name: "徐甜甜",
        text: ["擅长数据统计、处理，信息收集分类能力强", "参与了国际大学生数学建模竞赛校级二等奖", "校三等学业奖学金"],
    },
    {
        src: "/images/尹祯帅.png",
        name: "尹祯帅",
        text: ["擅长桌面端APP制作", "团体程序设计天梯赛省级二等奖", "蓝桥杯省级三等奖", "校三等学业奖学金"],
    },
];

interface componyType {
    src: Array<string>;
    title: string;
    text: string;
}

export const compony: Array<componyType> = [
    {
        src: ["/images/关于我们-公司.jpg"],
        title: "绵阳联通公司",
        text: "团队的合作伙伴，中国联通绵阳分公司成立于1997年7月3日，以绵阳城区为中心，全面负责绵阳以及所辖江油、三台、安县、盐亭、梓潼、北川、平武等地的中国联通综合电信业务的人事、财务、网络规划、建设、运行维护和经营管理。",
    },
    {
        src: ["", "/images/关于我们-协议1.jpg", "/images/关于我们-协议2.jpg"],
        title: "项目合作协议书",
        text: "团队与四川绵阳联通公司达成了合作。联通公司提供了平台，允许团队进入基站装机测试，并协助进行了项目的产品化实验。",
    },
    {
        src: ["/images/关于我们-东大.jpg"],
        title: "东北大学双创空间",
        text: "团队也有来自学校的资源支持。兴东沃科众创空间总面积4000余平方米。立足“厚基础、强专业、重实践、求创新”的人才培养思路，发挥学科、专业、师资、人才优势，打造集“文化引领、双创教育、实训实践、项目孵化”的创新创业实践平台。",
    },
];
