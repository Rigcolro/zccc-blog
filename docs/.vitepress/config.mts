import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "可乐不打嗝的博客",
    description: "随便写点啥",
    themeConfig: {
        logo: '/logo.png',
        siteTitle: '可乐不打嗝的博客',
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '个人成长',
                items: [
                    {text: '游记', link: '/column/travel'},
                    {text: '所思▪所想', link: '/column/idea'},
                ],
            },
            {
                text: '技术分类',
                items: [
                    {text: '前端知识', items:[{text:'浏览器',link:'/column/frontend/browser'},]},
                    {
                        text: '后端知识', items: [{text: 'java', link: '/column/backend/java'}]
                    },
                ]
            },
            {text: 'Examples', link: '/markdown-examples'}
        ],

        sidebar: [
            {
                text: 'Examples',
                items: [
                    {text: 'Markdown Examples', link: '/markdown-examples'},
                    {text: 'Runtime API Examples', link: '/api-examples'}
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/Rigcolro'}
        ]
    }
})
