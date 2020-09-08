<template>
    <div>
        <div class="store_box">
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100"  enctype="multipart/form-data"  id="uploadForm">
                <FormItem label="店铺名称" prop="store_name">
                    <Input v-model="formValidate.store_name" placeholder="请输入店铺名称" name="store_name" id="store_name"/>
                </FormItem>
                <FormItem label="详细地址" prop="store_site">
                    <Input v-model="formValidate.store_site" placeholder="请输入地址" name="store_site"/>
                </FormItem>
                <FormItem label="联系电话" prop="store_phone">
                    <Input v-model="formValidate.store_phone" placeholder="请输入电话" name="store_phone"/>
                </FormItem>
                <FormItem label="店铺简介" prop="store_state">
                    <Input v-model="formValidate.store_state" name="store_state"/>
                </FormItem>
                <FormItem label="店铺标语" prop="store_slogan">
                    <Input v-model="formValidate.store_slogan" name="store_slogan"/>
                </FormItem>
                <FormItem label="店铺分类">
                    <Cascader :data="data" v-model="store_classify" class="store_classify" name="store_classify"></Cascader>
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
                    <InputNumber :max="10" :min="1" v-model="store_dispatching" name="store_dispatching"></InputNumber>
                </FormItem>
                <FormItem label="起送价">
                    <InputNumber :max="30" :min="1" v-model="store_lowest" name="store_lowest"></InputNumber>
                </FormItem>
                <FormItem label="营业时间">
                    <Row>
                        <Col span="11">
                            <FormItem prop="store_starttime">
                                <TimePicker type="time" placeholder="起始时间" v-model="formValidate.store_starttime" name="store_starttime"></TimePicker>
                            </FormItem>
                        </Col>
                        <Col span="11">
                            <FormItem prop="store_overtime">
                                <TimePicker type="time" placeholder="结束时间" v-model="formValidate.store_overtime" name="store_overtime"></TimePicker>
                            </FormItem>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem label="上传店铺头像">
                    <input type = "file" name = "store_logo"/> 
                </FormItem>
                <FormItem label="上传营业执照">
                    <input type = "file" name = "store_license"/>
                </FormItem>
                <FormItem label="上传餐饮许可证">
                    <input type = "file" name = "store_licence"/>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit()">Submit</Button>
                </FormItem>
            </Form>
        </div>
        <Button @click="instance('error')" mask-closable='true' v-show="false">失败</Button>
        <Button @click="instance('success')" mask-closable='true' v-show="false">成功</Button>
    </div>
</template>
<script>
    import API from '../../api'
    export default {
        data () {
            const verify = (rule, value, callback) => {
                if (value === '') {
                    console.log(value)
                    callback(new Error('内容不能为空'));
                }else {
                    console.log(value)
                    callback();
                }
            }
            return {
                store_dispatching: 5,
                store_lowest: 20,
                Switch:{
                    switch_brand:false,
                    switch_Courier:false,
                    switch_newop:false,
                    switch_insurance:false,
                    switch_punctuality:false,
                    switch_invoice:false
                },
                formValidate: {
                    store_name: '',
                    store_site: '',
                    store_phone: '',
                    store_state: '',
                    store_slogan: '',
                    store_classify:'',
                    store_switch:'',
                    store_dispatching:'',
                    store_lowest:'',
                    store_starttime: '',
                    store_overtime: '',
                },
                ruleValidate: {
                    store_name: [
                        { required: true, validator:verify ,message: '请输入店铺名称', trigger: 'blur' }
                    ],
                    store_site: [
                        { required: true, validator:verify ,message: '请输入详细地址', trigger: 'blur' }
                    ],
                    store_phone:[
                        { required: true, validator:verify ,message: '请输入电话', trigger: 'blur' }
                    ],
                    store_starttime: [
                        { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
                    ],
                    store_overtime: [
                        { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
                    ]
                },
                store_classify: ['yiguoliaoli', 'rihanliaoli'],
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
            handleSubmit () {
                if(!this.formValidate.store_name){
                    this.instance('name')
                    console.log('name')
                    return
                }
                if(!this.formValidate.store_site){
                    this.instance('site')
                    return
                }
                if(!this.formValidate.store_phone){
                    this.instance('phone')
                    return
                }
                var form = new FormData($('#uploadForm')[0])
                let oSwitch =  this.Switch
                let store_switch=[]
                let _this=this
                for( let key in oSwitch ){
                    if(oSwitch[key]){
                        store_switch.push(key)
                    }
                }
                form.append('store_switch',store_switch.join(','))
                $.ajax({
                    url: API.store,
                    type: 'POST',
                    cache: false, //不必须
                    data: form,
                    processData: false,//必须
                    contentType: false,//必须
                    dataType:"JSON",
                    success: function(data) {
                        console.log('data',data)
                        switch(data.status){
                            case 0 : 
                                _this.instance('failed') ; 
                            break;
                            case 1 : 
                                _this.instance('success') ; 
                            break;
                            default:;
                        }
                    }
                })
            },
            instance (type) {
                const success_title = '注册商铺成功';
                const success_content = '<p>恭喜，注册成功</p>';
                const failed_title = '注册商铺失败';
                const failed_content = '<p>很遗憾注册失败</p><p>该商铺已被注册</p>';
                const name = '店铺名称不能为空'
                const site = '店铺地址不能为空'
                const phone = '店铺电话不能为空'
                switch (type) {
                    case 'success':
                        this.$Modal.success({
                            title: success_title,
                            content: success_content
                        });
                        break;
                    case 'name':
                        this.$Modal.error({
                            title: failed_title,
                            content: name
                        });
                        break;
                    case 'site':
                        this.$Modal.error({
                            title: failed_title,
                            content: site
                        });
                        break;
                    case 'phone':
                        this.$Modal.error({
                            title: failed_title,
                            content: phone
                        });
                        break;
                    case 'failed':
                        this.$Modal.error({
                            title: failed_title,
                            content: failed_content
                        });
                        break;
                }
            },
        },
        mounted() {
        },
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