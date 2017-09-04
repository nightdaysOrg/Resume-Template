<template>
    <div id="container">
        <!-- head -->
        <div class="head">
            <div class="transform">
                <div class="head-left">
                    <p>自我评价 自我评价 自我评价 自我评价 自我评价 自我评价 自我评价 自我评价 自我评价 自我评价 自我评价 自我评价 </p>
                </div>
                <div class="line">
                </div>
                <div class="head-right">
                    <div class="left-name">
                        <h1>hzCat</h1>
                    </div>
                    <div class="right-img">
                        <img src="../../../assets/img/user_photo.jpg" width="200" height="280">
                    </div>
                </div>
            </div>
        </div>
        <!-- head 结束 -->

        <!-- section2     -->
        <section id="section2">
            <h2>基本信息</h2>
            <h3 class="title">
                姓名:
            </h3>
            <div class="section">
                hzCat
            </div>

            <h3 class="title">
                性别:
            </h3>
            <div class="section">
                男
            </div>

            <h3 class="title">
                年龄:
            </h3>
            <div class="section">
                26
            </div>

            <h3 class="title">
                籍贯:
            </h3>
            <div class="section">
                成都
            </div>

            <h3 class="title">
                现居住地:
            </h3>
            <div class="section">
                成都
            </div>

            <h3 class="title">
                电话:
            </h3>
            <div class="section">
                12345678901
            </div>

            <h3 class="title">
                邮箱:
            </h3>
            <div class="section">
                12345678901@qq.com
            </div>
        </section>
        <!-- section2结束 -->

        <!-- section -->
        <section id="section1">
            <h3 class="title">
                教育背景
            </h3>
            <div class="section">
                <h3>2009-09~2013-07</h3>
                <p>四川师范大学</p>
                <p>学习了什么 学习了什么 学习了什么 学习了什么 学习了什么 学习了什么 学习了什么 学习了什么 学习了什么 学习了什么 学习了什么 </p>
            </div>
            <h3 class="title">
                专业技能
            </h3>
            <div class="section">
                <p>在校期间通过CET-4英语考试,对代码的理解有很多帮助 ;<br/> 能够熟练运用HTML , CSS 以及原生Javascript 对网页内容进行静态页面还原和增添各种页面交互功能 , 熟练使用jQuery的各种常用api ; <br/> 熟悉Bootstrap , AngularJS , ionic 等常用框架 , 能使用这类框架进行网页以及手机端应用的开发 ;<br/> 了解并能使用PHP和Node.JS通过AJAX进行网页页面与MYSQL数据库的交互 ; <br/> 了解React和Vue.JS等常用框架 , 以及百度Echarts工具的使用 ; <br/> 了解Git和SVN的使用 ;<br/> 了解WebApp和微信端的开发 ;<br/> 了解Photoshop的基本操作.
                </p>
            </div>
            <h3 class="title">
                工作经验
            </h3>
            <div class="section">
                <h3>经验标题 1</h3>
                <p>使用软件 : webstorm和vscode<br/> 项目技术 : HTML CSS Javascript jQuery AJAX PHP Node.JS MYSQL等<br/> 项目描述 : 通过HTML CSS Javascript jQuery等语言和框架完成京东的静态页面,<br/> 再分别编写PHP和Node.JS两套程序与MYSQL进行数据的交互,
                    <br/> 最后通过AJAX技术将数据在页面呈现.
                </p>
                <h3>经验标题 2</h3>
                <p>使用软件 : webstorm和vscode<br/> 项目技术 : HTML CSS Javascript jQuery AJAX PHP Node.JS MYSQL等<br/> 项目描述 : 通过HTML CSS Javascript jQuery等语言和框架完成京东的静态页面,<br/> 再分别编写PHP和Node.JS两套程序与MYSQL进行数据的交互,
                    <br/> 最后通过AJAX技术将数据在页面呈现.
                </p>
            </div>
            <h3 class="title">
                兴趣爱好
            </h3>
            <div class="section">
                <p>游戏 : 魔兽世界,LOL,王者荣耀等团队合作型游戏 , 增强自己在团队中的合作能力<br/> 编程 : 作为一个强迫症患者,来学习编程的一个主要原因也是因为使用某些软件的缺陷让我无法忍受 , 我只能自己来完成自己的小功能了 .<br/> 数码产品 : 本能的对数码产品的热爱.

                </p>
            </div>
            <h3 class="title">
                其他描述
            </h3>
            <div class="section">
                <p>
                    游戏 : 魔兽世界,LOL,王者荣耀等团队合作型游戏 , 增强自己在团队中的合作能力<br/> 编程 : 作为一个强迫症患者,来学习编程的一个主要原因也是因为使用某些软件的缺陷让我无法忍受 , 我只能自己来完成自己的小功能了 .<br/> 数码产品 : 本能的对数码产品的热爱.
                </p>
            </div>
        </section>
        <!-- section结束 -->
        <!-- footer -->
        <!-- 用canvas绘图 -->
        <canvas id="footer-canvas" width="1200" height="200"></canvas>

    </div>
</template>

<script>
import './style.css'
export default {
    //canvas绘图
    mounted: function() {
        var canvas_footer_elem = document.getElementById("footer-canvas");
        var canvas_foot = canvas_footer_elem.getContext("2d");
        canvas_foot.beginPath();
        canvas_foot.moveTo(0, 0);
        canvas_foot.lineTo(1200, 200);
        canvas_foot.lineTo(0, 200);
        canvas_foot.closePath();
        canvas_foot.fillStyle = "#5694c3";
        canvas_foot.shadowBlur = "10";
        canvas_foot.shadowColor = "#5694c3";
        canvas_foot.fill();
    }
}
</script>

