<template>
    <div>
        <div class="store_box">
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
                <FormItem label="店铺名称" prop="store">
                    <Input v-model="formValidate.store" placeholder="请输入店铺名称"/>
                </FormItem>
                <FormItem label="详细地址" prop="site">
                    <Input v-model="formValidate.site" placeholder="请输入地址"/>
                </FormItem>
                <FormItem label="联系电话" prop="phone">
                    <Input v-model="formValidate.phone" placeholder="请输入电话"/>
                </FormItem>
                <FormItem label="店铺简介" prop="store_state">
                    <Input v-model="formValidate.store_state"/>
                </FormItem>
                <FormItem label="店铺标语" prop="store_slogan">
                    <Input v-model="formValidate.store_slogan"/>
                </FormItem>
                <FormItem label="店铺分类">
                    <Cascader :data="data" v-model="value2"></Cascader>
                </FormItem>
                <FormItem label="店铺特点">
                    <div class="trait_list">
                        <span>品牌保证</span>
                        <i-switch v-model="Switch.switch_brand"  />
                    </div>
                    <div class="trait_list">
                        <span>蜂鸟专送</span>
                        <i-switch v-model="Switch.switch_Courier"   />
                    </div>
                    <div class="trait_list">
                        <span>新开店铺</span>
                        <i-switch v-model="Switch.switch_newop"  />
                    </div>
                    <br>
                    <div class="trait_list">
                        <span>外卖保</span>
                        <i-switch v-model="Switch.switch_insurance"  />
                    </div>
                    <div class="trait_list">
                        <span>准时达</span>
                        <i-switch v-model="Switch.switch_punctuality"  />
                    </div>
                    <div class="trait_list">
                        <span>开发票</span>
                        <i-switch v-model="Switch.switch_invoice"  />
                    </div>
                </FormItem>
                <FormItem label="配送费">
                    <InputNumber :max="10" :min="1" v-model="value0"></InputNumber>
                </FormItem>
                <FormItem label="起送价">
                    <InputNumber :max="30" :min="1" v-model="value1"></InputNumber>
                </FormItem>
                <FormItem label="营业时间">
                    <Row>
                        <Col span="11">
                            <FormItem prop="time">
                                <TimePicker type="time" placeholder="起始时间" v-model="formValidate.time"></TimePicker>
                            </FormItem>
                        </Col>
                        <Col span="11">
                            <FormItem prop="time1">
                                <TimePicker type="time" placeholder="结束时间" v-model="formValidate.time1"></TimePicker>
                            </FormItem>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem label="上传店铺头像">
                    <Upload
                        multiple
                        type="drag"
                        action="//jsonplaceholder.typicode.com/posts/">
                        <div style="padding: 20px 0">
                            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                            <p>请上传店铺头像</p>
                        </div>
                    </Upload>
                </FormItem>
                <FormItem label="上传营业执照">
                    <Upload
                        multiple
                        type="drag"
                        action="//jsonplaceholder.typicode.com/posts/">
                        <div style="padding: 20px 0">
                            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                            <p>请上传营业执照</p>
                        </div>
                    </Upload>
                </FormItem>
                <FormItem label="上传餐饮许可证">
                    <Upload
                        multiple
                        type="drag"
                        action="//jsonplaceholder.typicode.com/posts/">
                        <div style="padding: 20px 0">
                            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                            <p>请上传餐饮许可证</p>
                        </div>
                    </Upload>
                </FormItem>
                <FormItem label= "优惠活动">
                    <Select v-model="model1" style="width:200px">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
                    <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value0: 5,
                value1: 20,
                Switch:{
                    switch_brand:false,
                    switch_Courier:false,
                    switch_newop:false,
                    switch_insurance:false,
                    switch_punctuality:false,
                    switch_invoice:false
                },
                cityList: [
                        {
                            value: 'manjian',
                            label: '满减优惠'
                        },
                        {
                            value: 'dachoubin',
                            label: '优惠大酬宾'
                        },
                        {
                            value: 'xinyonghu',
                            label: '新用户立减'
                        },
                        {
                            value: 'lingquan',
                            label: '进店领券'
                        }
                    ],
                model1: 'manjian',
                formValidate: {
                    store: '',
                    site: '',
                    phone: '',
                    store_state: '',
                    store_slogan: '',
                    time: '',
                    time1: '',
                },
                ruleValidate: {
                    store: [
                        { required: true, message: '请输入店铺名称', trigger: 'blur' }
                    ],
                    site: [
                        { required: true, message: '请输入详细地址', trigger: 'blur' }
                    ],
                    phone:[
                        { required: true, message: '请输入电话', trigger: 'blur' }
                    ],
                    time: [
                        { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
                    ],
                    time1: [
                        { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
                    ]
                },value2: ['yiguoliaoli', 'rihanliaoli'],
                data: [{
                    value: 'yiguoliaoli',
                    label: '异国料理',
                    children: [
                        {
                            value: 'rihanliaoli',
                            label: '日韩料理'
                        },
                        {
                            value: 'xican',
                            label: '西餐'
                        },
                        {
                            value: 'pisayimian',
                            label: '披萨意面'
                        },
                        {
                            value: 'dongnanyacai',
                            label: '东南亚菜'
                        }
                    ]
                }, {
                    value: 'kuaicanbaindan',
                    label: '快餐便当',
                    children: [
                        {
                            value: 'jiancan',
                            label: '简餐'
                        },
                        {
                            value: 'gaijiaofan',
                            label: '盖浇饭'
                        },
                        {
                            value: 'mifenmianguan',
                            label: '米粉面馆'
                        },
                        {
                            value: 'baozizhoudian',
                            label: '包子粥店'
                        },
                        {
                            value: 'xiangguoshaguo',
                            label: '香锅砂锅'
                        },
                        {
                            value: 'malatang',
                            label: '麻辣烫'
                        }
                    ],
                },{
                    value: 'xiaochiyexiao',
                    label: '小吃夜宵',
                    children: [
                        {
                            value: 'xiaolongxia',
                            label: '小龙虾'
                        }
                    ]
                }]
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .ivu-form,.ivu-form-label-right
        width 700px
        margin 0 auto
    .ivu-cascader,.ivu-cascader-show-clear,.ivu-cascader-size-default
        width 200px
    .ivu-col,.ivu-col-span-11
        width 220px
    .trait_list
        display inline-block
        width 110px
        margin-right 10px
        .ivu-switch,.ivu-switch-checked,.ivu-switch-default
            float right
            margin-top 5px
</style>