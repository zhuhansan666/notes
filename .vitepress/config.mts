import { defineConfig, DefaultTheme } from 'vitepress'
import { extname } from 'path'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
import footnotePlugin from "markdown-it-footnote";

const nav: DefaultTheme.NavItem[] = [
  { text: '主页', link: '/' },
]

const rootPath = './contents/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    [
      // Microsoft Clarity
      'script', { type: 'text/javascript' }, `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "my2muxb80z");`
    ],
    [
      // Google Analytics
      'script', { async: 'true', src: 'https://www.googletagmanager.com/gtag/js?id=G-V7BNXRCZVT' }, ``
    ],
    [
      // Google Analytics also
      'script', { type: 'text/javascript' }, `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-V7BNXRCZVT');`
    ],
  ],
  lang: "zh-CN",
  title: "牛奶の笔记",
  description: "本项目用于备份和公开牛奶の笔记",
  themeConfig: {
    nav,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhuhansan666/notes' }
    ],
    logo: '/favicons.svg'
  },
  markdown: {  // 支持脚注
    config(md) {
      md.use(footnotePlugin)
    },
  },
  srcDir: rootPath,
  vite: {
    plugins: [
      AutoSidebar({
        // ignoreList: ['node_modules', '.vitepress', '.github', '.git', 'public'],
        ignoreList: ['p', 'docs'],
        path: rootPath,
        titleFromFile: true,
        // sideBarItemsResolved(data) {
        //   const res: DefaultTheme.SidebarItem[] = []

        //   for (let file of data) {
        //     let name = file.link?.toLocaleLowerCase() ?? '.md.html'
        //     let ext = extname(name.endsWith('.html') ? name.slice(0, -5) : name)
        //     if (!['', '.html', '.md', '.markdown'].includes(ext)) {
        //       continue
        //     }

        //     res.push(file)
        //   }

        //   return res
        // }
      }),
    ]
  },
})
