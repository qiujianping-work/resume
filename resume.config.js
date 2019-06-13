module.exports = {
  //个人介绍配置项
  introduce: "本人从事前端开发工作4年，主要技术栈为jQuery、react全家桶、微信小程序等，有过大型React项目开发经验，熟悉webpack、gulp等前端自动化构建工具。曾主导过项目开发，有带领团队开发产品经验，热爱前端开发，注重团队协作。",
  //技能配置项
  technologies:[
    "4年HTML、CSS、JavaScript经验，熟悉W3C标准规范",
    "4年JQuery、2年React框架经验, 理解MVC、MVVM模式",
    "1年node.js、express、mysql经验，具有服务端开发经验",
    "1年echarts.js, highcharts.js经验，善于数据可视化开发",
    "熟悉promise对象、set和map数据结构、async函数、class类 等ECMAScript新语法",
    "熟悉ajax，axios等http请求技术，灵活运用于浏览器及node端",
    "熟悉ant design、layUI等UI库，能熟练应用到项目中实现快速开发",
    "熟练进行微信小程序开发",
    "熟练使用前端CSS集成工具SASS、LESS，减少重复性操作，提高开发效率",
    "熟练掌握前端性能优化，有效的对代码进行精简提升前端性能",
    "熟练使用Linux常用命令，对nginx有一定了解"
  ],
  //技术工具配置项
  tools:[
    "3年xshell、winscp等服务端工具使用经验",
    "熟练使用webpack、gulp前端自动化构建工具及Git版本管理工具",
    "熟练使用VSCode, Sublime等主流IDE进行开发工作"
  ],
  //工作经历配置项
  experiences: [
    {
      companyName: "深圳云天励飞技术有限公司",
      position: "前端开发高级工程师",
      dateRanges: "2016.09-2019.05",
      explain: "任职于深圳云天励飞技术有限公司软件部，担任前端开发高级工程师一职，负责web前端开发工作。该公司是一家人工智能技术创新型企业，公司产品主要以智能安防领域为主，其中本人参与的项目“云天深目”系统，曾协助公安机关破获多起重要案件。另外参与项目“行人闯红灯”系统现已在深圳多处试点使用，并获得相关新闻报道。在该公司任职期间，牵头重构“云天深目”系统，推动前端组件化、业务模块化。"
    },
    {
      companyName: "深圳市英趣科技有限公司",
      position: "web前端开发工程师",
      dateRanges: "2015.03-2016.08 ",
      explain: "深圳英趣科技有限公司是一家互联网解决方案供应商，在该公司本人任职于研发部，负责web前端开发工作，具体工作内容包含产品需求评审、web页面构建、UI交互实现、后端数据呈现等。"
    },
    {
      companyName: "深圳亚太卫视文化传播有限公司",
      position: "运维技术员",
      dateRanges: "2014.06-2015.03 ",
      explain: "负责公司网络、服务器等运维工作"
    }
  ],
  //项目经验配置项
  project: [
    {
      projectNum: "项目一",
      projectName: "云天深目系统",
      projectType: "PC项目",
      projectDesc: "云天深目是一个大型的人像AI智能应用平台，主要合作方为深圳市龙岗公安分局，产品主要提供人像检索、人像布控、数据分析、高级管理等功能，其中人像检索和人像布控是产品的核心功能。",
      skillDesc: "此项目前端基于React框架进行开发，从结构上可分为表现层、业务层、数据层。表现层采用了reat-router-dom路由实现页面间的跳转，再配合ant Design的使用，可实现快速创建UI组件，提高页面搭建效率。业务层上则使用redux来对项目进行状态控制，有效解决了项目中多组件状态共享、视图层多数据来源、多用户类型等问题。数据层则采用axios.js进行http请求实现前后端数据通信，对axios.js进行二次封装，统一处理http错误。另外项目使用webpack作为前端自动化构建工具，实现了开发热加载，自动化打包等功能",
      responsibilityDesc: "1.	作为云天深目系统的主要开发人员，参与系统的版本迭代开发工作2.	牵头项目重构，推动前端组件化，业务模块化3.	参与系统的版本发布，确保系统的成功升级并及时响应运维人员修复系统漏洞",
    },
    {
      projectNum: "项目二",
      projectName: "个人简历小程序",
      projectType: "微信小程序项目",
      projectDesc: "这是一个用来展示个人简历的微信小程序项目。",
      skillDesc: "采用了微信小程序开发工具进行项目开发，添加了tab",
      responsibilityDesc: "独立完成小程序开发",
    },
  ]
}