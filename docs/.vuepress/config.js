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
          title: 'DataBase',
          collapsable: true,
          children: ['/DataBase/mongodb',]
        },     
        {
          title: 'electron',
          collapsable: true,
          children: ['/electron/']
        },         
        {
          title: 'js系列',
          collapsable: true,
          children: [
            '/jsSeries/jsbase', 
            '/jsSeries/professionalWords', 
            '/jsSeries/ts', 
            '/jsSeries/jsDesignMode', 
            '/jsSeries/usualFunction',
            '/jsSeries/js&browser',
            '/jsSeries/p&s',
          ]
        },  
        {
          title: 'operating system（操作系统）',
          collapsable: true,
          children: [
            '/operatingSysten/base',
            '/operatingSysten/linux',
            '/operatingSysten/mac',
          ]
        },
        {
          title: 'tools',
          collapsable: true,
          children: ['/tools/nginx',]
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
          title: 'jsUtils',
          collapsable: true,
          children: [
            '/jsUtils/jsPlumb',
            '/jsUtils/pixijs',
          ]
        },    
        {
          title: 'terminal',
          collapsable: true,
          children: ['/terminal/macos',]
        },                                
        {
          title: 'd3',
          collapsable: true,
          children: ['/d3/base',]
        },                     
        {
          title: 'webpack',
          collapsable: true,
          children: ['/webpack/package',]
        },    
        {
          title: '函数式编程',
          collapsable: true,
          children: ['/functionProgram/base',]
        },                
        {
          title: '代码规范',
          collapsable: true,
          children: ['/programStyle/eslint', '/programStyle/rules', '/programStyle/mock', '/programStyle/common']
        },                
        {
          title: '工具函数',
          collapsable: true,
          children: ['/utilsFunction/base',]
        },                            
        {
          title: '数学',
          collapsable: true,
          children: ['/math/base',]
        },                   
        {
          title: '正则',
          collapsable: true,
          children: ['/reg/base',]
        },                   
      ]
    }
}
  