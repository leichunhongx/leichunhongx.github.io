module.exports = {
  lang: 'zh-CN',
  title: '雷小鸿',
  description: '鸿鸿coding',
  head:[[<script>
         var _hmt = _hmt || [];
         (function() {
           var hm = document.createElement("script");
           hm.src = "https://hm.baidu.com/hm.js?59033874dd991ce9246775fed052092a";
           var s = document.getElementsByTagName("script")[0];
           s.parentNode.insertBefore(hm, s);
         })();
         </script>
  ]],
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: 'ChatGPT',
        link: '/chatgpt/'
      },
      { 
         text: '知乎|掘金', 
         items: [
                    { text: '知乎', link: 'https://www.zhihu.com/people/lei-xiao-hong-67' },
                    { text: '掘金', link: 'https://juejin.cn/user/2981531267379101' }
                ]       
      }
    ],
    sidebar: {
      '/chatgpt/': [
        {
          title: 'ChatGPT',
          children: ['how-to-update-gpt4']
        }
      ]
    }
  }
}
