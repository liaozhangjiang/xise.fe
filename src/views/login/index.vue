<template>
<div class="register">
    <h1>用户登录</h1>
    <div class="register_box">
        <br><br>
        <Input v-model="username" placeholder="请输入用户名" style="width: 300px" />
        <br><br>
        <Input v-model="password" placeholder="请输入密码" style="width: 300px" type="password"/>
        <br><br>
        <Button type="primary">登录</Button>
    </div>
</div>
</template>
<script> 
export default {
        data () {
            return {
                username: '',
                password: ''
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .register
        width 100% 
        height 100% 
        position fixed 
        left 0
        top 0
        background #324057
        text-align center
        .register_box
            width 30vw
            height 200px
            margin-left 35vw
            margin-top 10vh
            background #fff
            border-radius 4px
        h1
            margin-top 20vh
            font-size 50px
            color #fff
</style>