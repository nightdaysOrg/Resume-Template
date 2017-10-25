<template>
    <div class="container-fluid">
        <!-- 锚点 -->
        <div class="clickto">

            <ul>
                <li @click="goAnchor('#header')">
                    Header
                </li>
                <li @click="goAnchor('#section1')">
                    About
                </li>
                <li @click="goAnchor('#section2')">
                    Project
                </li>
            </ul>
        </div>
        <div id="header">
            <div class="header-info">
                <transition enter-active-class="zoomInLeft" leave-active-class="zoomOutRight">
                    <h1 v-show="headerShow" class="title animated">Cat's WebSite</h1>
                </transition>
                <transition enter-active-class="zoomInRight" leave-active-class="zoomOutLeft">
                    <h3 v-show="headerShow" class="content animated">个人介绍及作品展示</h3>
                </transition>
            </div>
        </div>
        <div id="section2">
            <div class="section2-info">
                <el-carousel :interval="4000" type="card" height="200px">
                    <el-carousel-item v-for="item in myProjectList" :key="item.index">
                        <!-- 跳转a标签 -->
                        <el-row>
                            <a :href="item.path">
                                <el-col :xs="24" :md="12">
                                    <img src="../../assets/img/myproject.png" alt="">
                                </el-col>
                                <el-col :xs="24" :md="12">
                                    <div class="listInfo">
                                        <h1>{{item.name}}</h1>
                                        <p>{{item.info}}</p>
                                    </div>
                                </el-col>
                            </a>
                        </el-row>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        <div id="section1">
            <div class="section1-info">
                <transition enter-active-class="zoomIn" leave-active-class="zoomOut">
                    <h1 v-show="section1Show" class="animated">关于我</h1>
                </transition>
                <transition enter-active-class="zoomIn" leave-active-class="zoomOut">
                    <div v-show="section1Show" class="animated">
                        <p>纠结</p>
                        <p>呆萌</p>
                        <p>常不知所措</p>
                        <p>找不到前进方向</p>
                        <p>运气不好</p>
                        <a href="#">
                            <i>点击查看更多</i>
                        </a>
                    </div>
                </transition>
            </div>
        </div>

    </div>
</template>


<script>
import './style.css'
export default {
    data() {
        return {
            headerShow: false,
            scrolled: false,
            section1Show: false,
            myProjectList: [
                { "name": "简历模板", "imgPath": "../../assets", "path": "#/login", "info": "1234567123456712345671234567" },
                { "name": "极简Todo(微信)", "imgPath": "../../assets", "/path1": "path", "info": "1234567123456712345671234567" },
                { "name": "选择困难症(微信)", "imgPath": "../../assets", "/path1": "path", "info": "1234567123456712345671234567" },
                { "name": "在线聊天室", "imgPath": "../../assets", "path": "/path1", "info": "1234567123456712345671234567" }
            ]
        }
    },
    mounted() {
        this.headerShow = true;
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.scrolled = window.scrollY;
            if (this.scrolled > window.screen.availHeight * 0.45) {
                this.headerShow = false;
            } else {
                this.headerShow = true;
            };
            if (this.scrolled > window.screen.availHeight * 2.35) {
                this.section1Show = false;
            } else if (this.scrolled > window.screen.availHeight * 1.45) {
                this.section1Show = true;
            } else {
                this.section1Show = false;
            }
        },
        goAnchor(selector) {

            var anchor = this.$el.querySelector(selector);
            console.log(anchor);
            console.log(anchor.offsetTop);
            console.log(document.body.scrollTop);
            var y = anchor.offsetTop;
            document.body.scrollTop = y
        }
    }
}
</script>