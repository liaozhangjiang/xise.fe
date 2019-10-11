<template>
    <div>
        <div class="editor" id="editor" ref="editor"></div>
        <div class="a-btn">
            <a href="javascript:void(0)">提交</a>
        </div>
    </div>
</template>

<style lang="stylus">
.editor{
    width: 100%;
    height: 300px;
    margin-bottom: 40px;
    }
    .a-btn{
    padding-bottom: 80px;
    }
    .a-btn a{
    display: block;
    color: #fff;
    font-size: 16px;
    line-height: 30px;
    width: 100px;
    text-align: center;
    float: right;
    background: dodgerblue;
    }
</style>

<script>
import E from 'wangeditor'
export default {
    data(){
    return {
        editor : ""
    }
},
mounted(){
    this.editor = new E("#editor");//new即可
    //下面的为一些配置参数，默认全部都有，我们需要那些留下那些即可
    this.editor.customConfig.menus = [
            'head',  // 标题
            'bold',  // 粗体
            'fontSize',  // 字号
            'fontName',  // 字体
            'italic',  // 斜体
            'underline',  // 下划线
            'strikeThrough',  // 删除线
            'foreColor',  // 文字颜色
            //'backColor',  // 背景颜色
            //'link',  // 插入链接
            'list',  // 列表
            'justify',  // 对齐方式
            'quote',  // 引用
            //'emoticon',  // 表情
            //'image',  // 插入图片
            'table',  // 表格
            //'video',  // 插入视频
            //'code',  // 插入代码
            //'undo',  // 撤销
            //'redo'  // 重复
        ];
          //聚焦时候函数
        this.editor.customConfig.onfocus = function () {
            //console.log("onfocus")
        };
          //失焦时候函数
        this.editor.customConfig.onblur = function () {
            //console.log("onblur")
        };
          //change事件，当富文本编辑器内容发生变化时便会触发此函数
        this.editor.customConfig.onchange = function (text) {
            console.log(text)
        };
        this.editor.create();//以上配置完成之后调用其create()方法进行创建
        this.editor.txt.html("<p>欢迎使用wangEditor编辑器</p>");//创建完成之后的默认内容
          //点击事件，拿到富文本编辑器里面的值
        $(".a-btn a").on("click", ()=> {
            //富文本编辑器里面的内容我们可以输出为html（布局）格式，也可以输出位text（文本）格式
            console.log(this.editor.txt.text());
            console.log(this.editor.txt.html());
            //this.editor.change && this.editor.change();
        })
}
}
</script>