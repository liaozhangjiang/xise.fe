<template>
    <Table :columns="columns10" :data="data9"></Table>
</template>
<script>
    import expandRow from './merchant_2';
    import API from '../../api'
    export default {
        components: { expandRow },
        data () {
            return {
                columns10: [
                    {
                        type: 'expand',
                        width: 50,
                        render: (h, params) => {
                            return h(expandRow, {
                                props: {
                                    row: params.row
                                }
                            })
                        }
                    },
                    {
                        title: 'Name',
                        key: 'store_name'
                    },
                    {
                        title: 'Age',
                        key: 'store_site'
                    },
                    {
                        title: 'Address',
                        key: 'store_phone'
                    },{
                        title: 'Action',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            let _this = this
                                            $.ajax({
                                                type: "DELETE",
                                                url: "http://localhost:3000/store",
                                                data:{store_name:params.row.store_name},
                                                success: function (result) {
                                                    if(!result.status){
                                                        _this.delshow(params.row.store_name)
                                                        _this.remove(params.index)
                                                    }
                                                }
                                            })
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }                 
                ],
                data9: []
            }
        },methods: {
            show (index) {
                this.$Modal.info({
                    title: '商铺信息',
                    content: `
                        店铺名称：${this.data9[index].store_name}<br>
                        店铺地址：${this.data9[index].store_site}<br>
                        店铺联系电话：${this.data9[index].store_phone}<br>
                        店铺简介：${this.data9[index].store_state}<br>
                        店铺标语：${this.data9[index].store_slogan}<br>
                        店铺分类：${this.data9[index].store_classify}<br>
                        店铺特点：${this.data9[index].store_switch}<br>
                        配送费：${this.data9[index].store_dispatching}<br>
                        起送价：${this.data9[index].store_lowest}<br>
                        开始营业时间：${this.data9[index].store_starttime}<br>
                        结束营业时间：${this.data9[index].store_overtime}<br>
                        `
                })
            },
            remove (index) {
                this.data9.splice(index, 1);
            },
            delshow(data){
                this.$Modal.info({
                    title: '删除成功',
                    content: `
                        店铺 “${data}” 删除成功
                        `
                })
            }
        },created(){
            var _this=this
            $.ajax({
                type: "GET",
                url: "http://localhost:3000/store",
                dataType: "JSON",
                success: function (result) {
                    console.log(result)
                    _this.data9 = result.data
                }
            });

        },
    }
</script>