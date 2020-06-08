module.exports = {
  themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
        {
          text: 'Languages',
          items: [
            { text: 'Chinese', link: '/language/chinese' },
            { text: 'English', link: '/language/english' }
          ]
        },
        { text: 'External', link: 'https://www.baidu.com' },
      ],
      sidebarDepth: 2,
      sidebar: [                      
        {
          title: 'CSS',
          collapsable: true,
          children: ['/css/base',]
        },            
        {
          title: 'js系列',
          collapsable: true,
          children: ['/jsSeries/jsbase', '/jsSeries/professionalWords', '/jsSeries/ts']
        },  
        {
          title: 'tools',
          collapsable: true,
          children: ['/tools/nginx',]
        },       
        {
          title: 'electron',
          collapsable: true,
          children: ['/electron/']
        },
        {
          title: 'vuepress',
          collapsable: true,
          children: ['/vuepress/']
        },         
        {
          title: 'nodejs',
          collapsable: true,
          children: ['/nodejs/express', '/nodejs/koa', '/nodejs/http', '/nodejs/base']
        },      
        {
          title: 'git',
          collapsable: true,
          children: ['/git/']
        },      
        {
          title: 'vue',
          collapsable: true,
          children: ['/vue/vue.md', '/vue/plugins.md', '/vue/fileUpload.md', '/vue/VFD.md', '/vue/vue-router.md']
        },         
        {
          title: 'trash',
          collapsable: true,
          children: ['/trash/',]
        },         
        {
          title: 'echarts',
          collapsable: true,
          children: ['/echarts/options','/echarts/base',]
        },        
        {
          title: '函数式编程',
          collapsable: true,
          children: ['/functionProgram/base',]
        },                
        {
          title: '代码规范',
          collapsable: true,
          children: ['/programStyle/eslint', '/programStyle/rules', '/programStyle/mock',]
        },                
        {
          title: '工具函数',
          collapsable: true,
          children: ['/utilsFunction/base',]
        },     
        {
          title: 'jsUtils',
          collapsable: true,
          children: ['/jsUtils/jsPlumb',]
        },    
        {
          title: 'terminal',
          collapsable: true,
          children: ['/terminal/macos',]
        },                        
        {
          title: 'DataBase',
          collapsable: true,
          children: ['/DataBase/mongodb',]
        },                        
      ]
    }
}
  