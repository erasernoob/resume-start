import type { ResumeConfig } from '@/components/types';

/** 初始化常量 */
export const RESUME_INFO: ResumeConfig = {
  avatar: {
    src:
      'https://img.88icon.com/download/jpg/201912/9ae20a3b5f869ac2e33c019ace85b196.jpg!ys',
    hidden: false,
  },
  profile: {
    name: '邢国富',
    positionTitle: '后端开发实习生',
    email: 'erasernoobx@outlook.com',
    mobile: '133-5049-1143',
    github: 'https://github.com/erasernoob',
    // zhihu: 'https://zhihu.com/people/visiky',
    // workExpYear: '',
    // workPlace: '浙江杭州',
  },
  educationList: [
    {
      edu_time: ['2023.09', '2027.06'],
      school: '西南石油大学 (双一流)',
      school_level: '双一流',
      major: '软件工程 本科 计算机与科学学院',
      // academic_degree: '本科',
      major_lesson:
        '数据结构与算法 计算机网络 操作系统 计算机组成原理 软件工程',
    },
  ],
  // awardList: [
  //   {
  //     award_info: '英语 CET6',
  //     award_time: '2015',
  //   },
  // ],
  workExpList: [
    {
      company_name: '中国海洋石油集团',
      department_name: '某分公司-后端开发实习生',
      work_time: ['2024.08', '2024.12'],
      work_desc: `实习期间在大位移钻井决策系统项目组中，作为大位移井钻井风险分析识别**数据可视化管理平台模块**后端开发小组主要负责人。全程参与整个项目的**需求迭代**，参与需求分析和**数据库设计**、**RESTful API 设计**、**接口文档撰写**，协调**前后端开发**，确保开发过程规范，以及整个系统架构设计的**合理性**和**可扩展性**。\n`,
      // 工作要点
      work_list: [
        '负责系统初期**数据库表结构设计**，采用 **InnoDB** 存储引擎存储各井的工程参数，在设计初期结合**主键索引**、**覆盖索引**，对 **SELECT** 查询进行优化。同时结合 **Redis** 对**热点井场数据**进行缓存，将热点井场数据查询响应时间从**340ms**缩短至**10ms**，显著减小数据库查询压力。',
        '基于 **Spring Task** 及 **cron** 表达式优化**定时任务调度**，定时向公司总部数据湖钻完井数据化接口发送请求，实现**自动更新访问认证 Token**，确保系统对接的**稳定性**。有效减少了因 **Token** 过期导致的数据对接失败情况，提升了系统的**高可用性**和**健壮性**。',
        '负责优化原有系统 **Docker 容器化部署**，借助主流 AI 工具编写 **Dockerfile**，进一步降低镜像体积**30%**，提升系统稳定性。使用 **Docker Compose** 一键部署 **Spring Boot、 MySQL、Redis、Minio、Nginx**，提升**开发和运维效率**。',
        '负责优化将特定的井场数据**导入导出为 Word 文档功能**，使用 **Minio 对象存储技术**实现相应附件的保存，同时实现附件的预览功能。',
      ],
    },
  ],
  skillList: [
    {
      skill_name: 'Java基础',
      skill_desc:
        '熟悉Java语法、**集合框架**、**反射**、**异常处理**、及**泛型**等相关知识。了解 Golang、Python 等编程语言。',
      skill_level: 0,
    },
    {
      skill_name: '计算机基础',
      skill_desc:
        '熟悉**TCP/IP协议**、理解 **HTTP/HTTPS**、**WebSocket** 等通信协议原理，了解**负载均衡**、**CDN**等相关技术。',
      skill_level: 80,
    },
    {
      skill_name: '操作系统和数据结构',
      skill_desc:
        '熟悉**进程与线程**管理，理解进程调度算法，多级缓存机制等关键概念。',
      skill_level: 80,
    },
    {
      skill_name: '框架',
      skill_desc:
        '熟练掌握 **SSM SpringBoot** 等主流开源框架以及 **Spring 生态** 具体应用, 理解 **Spring IOC AOP** 原理。',
      skill_level: 80,
    },

    {
      skill_name: '框架',
      skill_desc:
        '熟悉 **Spring Cloud 微服务架构**中常见组件，了解 **Nacos**、 **Feign**、**GateWay**的基本使用。',
      skill_level: 80,
    },
    {
      skill_name: '框架',
      skill_desc:
        '了解 **RabbitMQ** 消息队列的具体场景应用， 掌握**生产者-消费者模型**等基本概念。',
      skill_level: 80,
    },
    {
      skill_name: 'orm',
      skill_desc:
        '熟悉 **MySQL** 数据库，理解**事务 ACID 原则**、**索引优化**、锁机制，具备基本的 SQL 调优能力。',
    },
    {
      skill_name: 'orm',
      skill_desc:
        '熟悉 **Redis** 及其常见数据结构，理解缓存**穿透**、**击穿**、**雪崩**问题。',
      skill_level: 80,
    },
    {
      skill_name: '前端',
      skill_desc:
        '了解 **HTML、CSS、JavaScript** 基础，能够使用 Vue 或 React 构建简单的页面，掌握组件化开发思维。',
      skill_level: 80,
    },
    {
      skill_name: 'git',
      skill_desc:
        '熟悉 **Maven** 构建管理工具，熟悉 **Docker** 容器化部署，熟练使用 **Vim** 等工具, 具备基本的 **Linux** 运维能力。',
      skill_level: 80,
    },
    {
      skill_name: 'git',
      skill_desc:
        '熟练使用 **Git** 进行代码版本控制，掌握 **GitHub** 协作开发流程并具备开源项目贡献经验，能流畅阅读英文技术文档。',
      skill_level: 80,
    },
  ],

  projectList: [
    {
      project_name: '西柚云（实验室大创项目）',
      project_role: '后端负责人',
      project_time: '2024.10 - 2024.12',
      project_desc:
        '西柚云是一个采用B2C模式的电子商务平台，该平台由后台管理系统和前台用户系统两大核心组成，采用**SpringCloud**微服务架构，通过精细化的业务模块划分，实现了服务的独立部署和管理。',
      project_technology_stack:
        'SpringCloud + SpringBoot + SpringMVC + RabbitMQ + MyBatis + Redis + MySQL + Docker',
      project_content_list: [
        '使用 **JWT** 令牌配合自定义拦截器完成用户认证，并使用**双重拦截器**解决token刷新问题',
        '使用 **Nacos** 作为服务注册中心和配置中心，**Gateway** 构建API网关通过自定义**全局过滤器**实现用户登录验证和信息传递',
        '使用 **Redis** 对高频访问的信息进行缓存，解决缓存**穿透、雪崩、击穿**问题，热点数据响应 < 5ms',
        '通过 **Lua** 脚本实现库存扣减的原子性操作，配合乐观锁（**CAS**）实现 100% 零超卖率，确保库存扣减的准确性和一致性',
        '使用 **Redisson** 分布式锁处理集群模式下一人一单线程安全问题，保证促销活动公平性和系统可靠性',
        '采用 **RabbitMQ** 实现订单超时自动关闭，通过延迟队列+死信队列机制实现30分钟未支付订单触发库存回滚',
      ],
    },
  ],
  workList: [
    // {
    //   work_name: '个人简历生成器',
    //   visit_link: 'https://visiky.github.io/resume',
    // },
    // {
    //   work_name: 'AntV 主题生成器',
    //   visit_link: 'https://theme-set.antv.vision',
    // },
    // {
    //   work_name: 'AntV 可视化精选',
    //   visit_link: 'https://vis-dashboard.antv.vision',
    // },
  ],
  aboutme: {
    aboutme_desc: `🌱 Focus on data visualization and analysis 😈 能力项：沟通协调能力、执行力
    自驱型前端工程师，三年多大型复杂产品开发经验，负责蚂蚁集团 BI 产品 DeepInsight 的可视化建设，参与了从图表库到 BI 产品力的一体化建设，对商业智能领域的数据可视化建设有较为丰富的经验。
    参与 AntV 团队开源项目 G2、G2Plot 的研发，目前是 G2Plot 的主要负责人。
    `,
  },
  // add the theme config
  theme: {
    color: '#131314',
    tagColor: '#747497',
  },
  // 国际化
  locales: {
    'en-US': {
      profile: {
        name: 'Xiaojuan Liao',
        email: '736****86@qq.com',
        mobile: '156********',
        github: 'https://github.com/visiky',
        zhihu: 'https://zhihu.com/people/visiky',
        workExpYear: '',
      },
      skillList: [
        { skill_name: 'HTML 和 CSS', skill_desc: '', skill_level: 89 },
        { skill_name: 'TypeScript / JavaScript', skill_level: 90 },
        {
          skill_name: 'Data Visualization',
          skill_desc: '丰富的可视化工程实践以及开源经验',
          skill_level: 90,
        },
        {
          skill_name: 'React / 前端工程化',
          skill_desc: '大型前端项目经验以及组件库开发经验',
          skill_level: 80,
        },
      ],
      avatar: { hidden: false },
      educationList: [
        {
          edu_time: ['2014.09.01', '2018.06.30'],
          school: 'SCUT',
          major: 'Compute Science',
          academic_degree: '本科',
        },
      ],
      awardList: [
        { award_info: '英语 CET6', award_time: '2015' },
        { award_info: '蚂蚁近卫军 卓越个人奖', award_time: '2018.09' },
        { award_info: '前端练习生 可视化讲师', award_time: '2020.10' },
        {
          award_info:
            '前端早早聊 分享 “如何构思和开发开箱即用的可视化图表库 G2Plot”',
          award_time: '2021.07',
        },
      ],
      workExpList: [
        {
          company_name: 'Ant Group',
          department_name: 'AFX',
          work_time: ['2018.06', null],
          work_desc:
            '1. 担任蚂蚁高管决策和管理协同产品 “数据作战室” 的前端负责人\r\n2. 负责蚂蚁敏捷 BI 产品 “DeepInsight” 的可视分析模块产品能力建设\n3. 数据可视化 AntV 团队核心成员，负责 G2、G2Plot 开源技术的建设',
        },
        {
          company_name: 'Ant Group',
          department_name: '大数据部',
          work_time: ['2017.06', '2017.12'],
          work_desc:
            '前端实习生。使用 React 参与开发多类产品：数据研发平台、数据决策平台、数据分析平台的研发工作，同时也参与大型 BI 产品的重构工作，有良好的编码习惯。',
        },
      ],
      projectList: [
        {
          project_name: '数据作战室',
          project_role: '前端负责人',
          project_time: '2019.04 - 2020.06',
          project_desc:
            '面向总裁和高管以及决策 BI 的数字化经营决策和管理协同产品。提供一站式的数据化经营决策和管理协同功能，让高管高效获取决策信息，并提升管理效率。',
          project_content:
            '1. 项目从0到1的框架设计和开发 2. 产品体验精雕细琢的打磨 3. 建立稳定性保障机制。目前仍在迭代中，帮助提升高管业务决策效率',
        },
        {
          project_name: 'DeepInsight',
          project_role: '可视分析负责人',
          project_time: '2018.07 - 2019.04 / 2020.07 - 至今',
          project_desc:
            'DeepInsight 是蚂蚁集团自主研发的自助式 BI 数据洞察分析平台，面向企业分析人员、业务人员和开发人员，帮助蚂蚁集团实现精细化运营。',
          project_content:
            'BI 平台工具核心部分是报表制作，也就是通过数据连接、可视化配置形成图表物料之后，通过拖拽方式进行页面编排，最终形成报表页面进行发布的过程。\n1. 主导开放能力建设，拉通产品、设计建设和扩展可视化图形，提升丰富度\n2. 产品体验优化，尤其是对 ECharts 的体验顽疾进行攻克\n3. 主导可视化能力建设：业务标准化图表库建设(通用组件设计和开发经验丰富)、促进数据分析能力增强等可视化一体化建设',
        },
        {
          project_name: 'G2、G2Plot',
          project_role: '核心开发者',
          project_time: '2019 - 至今',
          project_desc:
            'G2 是基于图形语法理论的可视化渲染引擎，G2Plot 是在 G2 基础上封装的开箱即用的统计可视化图表库',
          project_content:
            'AntV 可视化建设，赋能整个蚂蚁和阿里集团统计可视化分析相关业务。负责 AntV 系列: AntV 官网、G 渲染引擎、 G2、G2Plot、ThemeSet 主题构建器等开源项目的研发工作。',
        },
      ],
      workList: [],
      aboutme: {
        aboutme_desc:
          '🌱 Focus on data visualization and analysis 😈 能力项：沟通协调能力、执行力\n    自驱型前端工程师，三年多大型复杂产品开发经验，负责蚂蚁集团 BI 产品 DeepInsight 的可视化建设，参与了从图表库到 BI 产品力的一体化建设，对商业智能领域的数据可视化建设有较为丰富的经验。\n    参与 AntV 团队开源项目 G2、G2Plot 的研发，目前是 G2Plot 的主要负责人。\n    ',
      },
    },
  },
};
