
<template>
    <div>
        <Header></Header>  
        <div class="container" id="main">
            <div class="row">
                <div class="col-md-5 col-md-offset-1 visible-lg-block visible-md-block " id="notice-left">
                    <div class="jumbotron">
                        <h2>Hello, world!</h2>
                        <p>...</p>
                        <p>
                            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                        </p>
                    </div>
                </div>
                <div class="col-md-4 col-md-offset-1 col-xs-10 col-xs-offset-1" id="login-btn">
                    <h1>Hi,你好!</h1>
                    <ul>
                        <li>
                            <button class="btn btn-success btn-block" data-toggle="modal" data-target="#login">登录</button>
                        </li>
                        <li>
                            <button class="btn btn-warning btn-block" data-toggle="modal" data-target="#sign-in">注册</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- model login-->
        <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title" id="myModalLabel">欢迎登录使用</h4>
                    </div>
                    <div class="modal-body">
                        <h3>用户名:</h3>
                        <input type="text" name="login-uname" placeholder="请输入用户名" class="form-control">
                        <h3>密码:</h3>
                        <input type="password" name="login-upwd" placeholder="请输入密码" class="form-control">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">关闭窗口</button>
                        <button type="button" class="btn btn-success">登录</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- model sign-in-->
        <div class="modal fade" id="sign-in" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>

                        <h4 class="modal-title" id="myModalLabel">欢迎新用户注册</h4>
                    </div>
                    <div class="modal-body">
                        <h3>用户名:</h3>
                        <input type="text" name="sign-uname" placeholder="请输入用户名" class="form-control">
                        <h3>密码:</h3>
                        <input type="password" name="sign-upwd" placeholder="请输入密码" class="form-control">
                        <h3>请再次输入密码:</h3>
                        <input type="password" name="sign-upwd-valid" placeholder="请输入密码" class="form-control">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">关闭窗口</button>
                        <button type="button" class="btn btn-warning">提交注册</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
        
    </div>
</template>

<script>
import Header from '../header/index'
import Footer from '../footer/index'
export default {
    components:{Header,Footer}
}


</script>

<style lang="less">
ol,
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.bg-img {
    background: url('./img/login-bg-img.jpg');
    background-size: cover;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.9;
    z-index: -100;
}

header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 200;
    .navbar {
        background: transparent;
        border: transparent;
    }
    .dropdown-menu {
        li {
            margin: 10px 0;
            padding: 0 5px;
            a {
                color: white;
            }
        }
    }
}

#main {
    padding-top: 115px;
    #notice-left {
        .jumbotron {
            height: 500px;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 17px;
        }
    }
    #login-btn {
        height: 300px;
        margin-top: 100px;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 17px;
        li {
            margin-top: 50px;
            padding: 0 50px;
        }
    }
}

footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0; // height:50px;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 200;
}

// 模态框
.modal-content {
    margin-top: 100px;
}
</style>