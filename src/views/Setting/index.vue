<template>
    <div id="setting_box">
        <h3>管理员信息</h3>
        <br>
        <div class="setting_box">
            <ul>
                <li>
                    <p>
                        <span>姓名：</span>
                        <span>夕色琉璃</span>
                    </p>
                </li>
                <li>
                    <p>
                        <span>注册时间：</span>
                        <span>date</span>
                    </p>
                </li>
                <li>
                    <p>
                        <span>管理员权限：</span>
                        <span>管理员</span>
                    </p>
                </li>
                <li>
                    <p>
                        <span>管理员 ID：</span>
                        <span>001</span>
                    </p>
                </li>
                <li>
                    <p>
                        <span>更换头像：</span>
                    </p>
                        <Upload
                            multiple
                            type="drag"
                            action="//jsonplaceholder.typicode.com/posts/">
                            <div style="padding: 20px 0">
                                <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                                <p>可拖拽上传</p>
                            </div>
                        </Upload>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="stylus" scoped>
    .demo-upload-list{
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }

    #setting_box
        display flex
        flex-direction column
        justify-content center
        align-items center
        .setting_box
            width 300px
            height 300px
            p
                text-align center
                padding-bottom 15px
            .ivu-upload
                display block !important
                margin 0 auto 
        li 
            list-style none
</style>

<script>
    export default {
        data () {
            return {
            }
        }
    }
</script>