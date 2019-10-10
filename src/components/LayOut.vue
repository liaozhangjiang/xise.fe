
<template>
    <div class="layout">
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
                <Submenu name="1">
                    <template slot="title">
                        <router-link tag = "div" to = "/home" class="">
                        <Icon type="ios-keypad" /> &nbsp;首页 </router-link>
                    </template>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-copy" />
                        数据管理
                    </template>
                    <MenuItem name="2-1">
                    <router-link tag = "div" to = "/manage/User" class="list_er"> 用户列表 </router-link>
                    </MenuItem>
                    <MenuItem name="2-2">
                    <router-link tag = "div" to = "/manage/Merchant" class="list_er"> 商家列表 </router-link></MenuItem>
                    <MenuItem name="2-3">
                    <router-link tag = "div" to = "/manage/Food" class="list_er"> 食品列表 </router-link></MenuItem>
                    <MenuItem name="2-4">
                    <router-link tag = "div" to = "/manage/Order_form" class="list_er"> 订单列表 </router-link></MenuItem>
                    <MenuItem name="2-5">
                    <router-link tag = "div" to = "/manage/Administrator" class="list_er"> 管理员列表 </router-link></MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="md-add" />
                        添加数据
                    </template>
                    <MenuItem name="3-1">
                    <router-link tag = "div" to = "/adddata/Store" class="list_er"> 添加商铺 </router-link></MenuItem>
                    <MenuItem name="3-2">
                    <router-link tag = "div" to = "/adddata/Commodity" class="list_er"> 添加商品 </router-link></MenuItem>
                </Submenu>
                <Submenu name="4">
                    <template slot="title">
                        <Icon type="md-star" />
                        图表
                    </template>
                    <MenuItem name="4-1">
                    <router-link tag = "div" to = "/Chart" class="list_er"> 用户分布 </router-link></MenuItem>
                </Submenu>
                <Submenu name="5">
                    <template slot="title">
                        <Icon type="md-create" />
                        编辑
                    </template>
                    <MenuItem name="5-1">
                    <router-link tag = "div" to = "/Compile" class="list_er"> 文本编辑 </router-link></MenuItem>
                </Submenu>
                <Submenu name="6">
                    <template slot="title">
                        <Icon type="md-settings" />
                        设置
                    </template>
                    <MenuItem name="6-1">
                    <router-link tag = "div" to = "/Setting" class="list_er"> 管理员设置 </router-link></MenuItem>
                </Submenu>
                <Submenu name="7">
                    <template slot="title">
                        <Icon type="ios-alert" />
                        说明
                    </template>
                    <MenuItem name="7-1">
                    <router-link tag = "div" to = "/Explain" class="list_er"> 说明 </router-link></MenuItem>
                </Submenu>
            </Menu>
        </Sider>
        <Layout :style="{marginLeft: '200px'}">
            <Header :style="{background: '#eff2f7', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
                <Breadcrumb >
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb>
            </Header>
            <Content >
                <Card>
                    <div>
                        <!-- 路由展示区 -->
                        <router-view></router-view>
                    </div>
                </Card>
            </Content>
        </Layout>
    </div>
</template>
<style lang="stylus" scoped>
    .layout
        background #f5f7f9
        position relative
        overflow hidden

        .layout-header-bar
            background #fff
        
        .ivu-card-bordered
            border 0px
        .ivu-card:hover
            box-shadow: 0 0 0
        .ivu-layout-header
            padding 0 20px
        .ivu-menu-item
            padding 0 !important
        .list_er
            padding 14px 24px 14px 43px
</style>
<script>
    export default {
        
    }
</script>