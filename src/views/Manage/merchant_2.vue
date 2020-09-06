<style scoped>
    .expand-row{
        margin-bottom: 16px;
    }
</style>
<template>
    <div>
        <Row class="expand-row">
            <Col span="8">
                <span class="expand-key">店铺名称: </span>
                <span class="expand-value">{{ row.store_name }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">店铺地址: </span>
                <span class="expand-value">{{ row.store_site }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">店铺联系电话: </span>
                <span class="expand-value">{{ row.store_phone }}</span>
            </Col>
        </Row>
        <Row class="expand-row">
            <Col span="8">
                <span class="expand-key">店铺简介: </span>
                <span class="expand-value">{{ row.store_state }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">店铺标语: </span>
                <span class="expand-value">{{ row.store_slogan }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">店铺分类: </span>
                <span class="expand-value">{{ row.store_classify | yg | rh }}</span>
            </Col>
        </Row>
        <Row class="expand-row">
            <Col span="8">
                <span class="expand-key">店铺特点: </span>
                <span class="expand-value">{{ row.store_switch | switch_brand | switch_Courier | switch_newop | switch_insurance | switch_punctuality | switch_invoice }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">配送费: </span>
                <span class="expand-value">{{ row.store_dispatching }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">起送价: </span>
                <span class="expand-value">{{ row.store_lowest }}</span>
            </Col>
        </Row>
        <Row class="expand-row">
            <Col span="8">
                <span class="expand-key">开始营业时间: </span>
                <span class="expand-value">{{ row.store_starttime }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">结束营业时间: </span>
                <span class="expand-value">{{ row.store_overtime }}</span>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        props: {
            row: Object
        }
    };
</script>