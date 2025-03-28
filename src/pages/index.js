// pages/index.js
export default function Home() {
    return (
        <div>
            <h1>Hello, Next.js!</h1>
            <h2>在尝试搭建中踩了很多坑，在此记录一下</h2>
            <h2>1.使用Trae和Cursor搭建环境，本地启动都正常</h2>
            <h2>2.代码上传github，频频报错，从上课的时候就卡在这步了，一直到晚上十一点过xlab熄灯，耗时3小时，心理防线受到了很大的冲击，差点放弃，这个过程中查了很多教程，尝试了很多方法，如卸载重安装、重新授权、小改动上传都失败了，无奈只得回家睡觉，半夜想到了绕过问题的解决办法，第二天一早来到xlab办公室，下载了github desktop，通过其直接上传，ai ide直接打开文件夹，成功上传</h2>
            <h2>3.了解next.js项目结构，了解各文件夹的功能，自行搜索，注意网上存在两种版本的介绍，一种是src/app文件夹下的,另一种是pages文件夹下的index页面，只能保留一个</h2>
            <pre>
                <code>
my-app/
├── public/          # 用于存放静态资源
├── pages/           # 存放页面组件
│   ├── index.js    # 应用的入口页面
│   ├── about.js    # 示例页面
│   └── ...
├── components/      # 存放复用的组件
│   ├── Header.js    # 示例组件
│   └── ...
├── styles/          # 存放样式文件
│   ├── global.css   # 全局样式
│   └── ...
├── .next/           # 存放编译后的文件
├── package.json     # 项目依赖和配置
└── ...
                </code>
            </pre>
            <h2>4.拉取到vercel，还算正常，网页可以正常访问了（访问需要梯子，手机一开始没开梯子，就无法打开），开始编辑本文档。</h2>

        </div>
    );
}