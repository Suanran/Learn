// pages/index.js
import '../styles/prompt.css';
export default function Home() {
    return (
        <div className="container">
            <h1>Hello, Next.js!</h1>

            <h2>前言</h2>
            <p>在尝试搭建中踩了很多坑，在此记录一下，难免会有遗漏或者情况不同，自己动手搜索，换个心情鼓鼓劲重新开始才是正途，coding是场修行（怎么加表情😂）。</p>
            
            <h2>1.使用Trae和Cursor搭建环境</h2>
            <p>ai生成，本地启动服务都正常</p>
            
            <h2>2.代码上传github</h2>
            <p>频频报错，从上课的时候就卡在这步了，一直到晚上十一点过xlab熄灯，耗时3小时，心理防线受到了很大的冲击，差点放弃，这个过程中查了很多教程，尝试了很多方法，如卸载重安装、重新授权、小改动上传都失败了，无奈只得回家睡觉，半夜想到了绕过问题的解决办法，第二天一早来到xlab办公室，下载了github desktop，通过其直接上传，ai ide直接打开文件夹，成功上传</p>
            
            <h2>3.了解next.js项目结构</h2>
            <p>自行搜索了解各文件夹的功能，注意网上存在两种版本的介绍，一种是src/app文件夹下的,另一种是pages文件夹下的index页面，只能保留一个</p>
            <pre>
                <code>
                    {`
                    my-app/
                    ├── .next/           # 存放编译后的文件
                    ├── node_modules/    # 存放环境依赖文件
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
                    ├── .gitignore       # 用于指定哪些文件或文件夹应该被忽略,不上传
                    ├── package.json     # 项目依赖和配置
                    └── ...`}
                </code>
            </pre>
            
            <h2>4.拉取到vercel</h2>
            <p>还算正常，网页可以正常访问了（访问需要梯子，手机一开始没开梯子，就无法打开），开始编辑本文档。</p>
            
            <h2>5.页面样式设计</h2>
            <p>用AI生成了另外一个带样式的页面，然后模仿学习修改了本文的样式</p>
            
        </div>
    );
}