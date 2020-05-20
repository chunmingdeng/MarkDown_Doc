# 文件上传
> 该组件主要是支持上传文件实时现实文件的上传进度</br>
> 原理基于XMLHttpRequest的实现</br>
> [XMLHttpRequest](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest)
```js
// <FileUpload :uploadUrl='fileUploadUrl'></FileUpload>
<template>
    <div id='upload-file-component'>
        <Upload
            ref="upload"
            multiple
            :show-upload-list = 'false'
            :before-upload='beforeUpload'
            :on-progress='fileProgress'
            :on-success='fileUploadSuccess'
            :on-error='fileUploadError'
            :format="['doc','docx']"
            :on-format-error="handleFormatError"
            accept='.doc,.docx'
            :max-size='102400'
            :on-exceeded-size="handleMaxSize"
            :action="uploadUrl">
            <Button type='primary'>上传</Button>
        </Upload>
        <div id='progress-list-modal' v-if='fileList.length'>
            <div class='title'>上传进度</div>
            <Icon type="ios-close" @click='closeProModdal'/>
            <ul class='progress-list'>
                <li v-for='item in fileList' :key='item.uid'>
                    <span>{{item.name}}</span>
                    <Progress :percent="item.percentage" :status="item.status || 'active'" :stroke-width="5" /></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'fileUpload',
    data: function() {
        return {
            fileList:[],
            init: false,
        }
    },
    props:{
        uploadUrl: {
            type: String,
            default: '',
        }
    },
    methods: {
        beforeUpload (fileList){
            this.fileList = [];
            this.init = true;
        },
        fileProgress (event, file, fileList){
            if (this.init) {
                this.init = false;
                for(var it of fileList){
                    let {name, size, type, uid, percentage} = it;
                    this.fileList.push({name, size, type, uid, percentage})
                }
            }
            // 更新percentage
            let {name, size, type, uid, percentage} = file;
            this.fileList.forEach(e => {
                if (e.uid == uid)
                    e.percentage = +((percentage+'').split('.')[0]);
            })
        },
        fileUploadSuccess (response, file, fileList){
            let {name, size, type, uid, percentage} = file;
            this.fileList.forEach(e => {
                if (e.uid == uid)
                    e.percentage = percentage;
                    e.status = 'success';
            });
            // 上传成功后会在fileList的每个item中新增一个response对象保存着上传的结果
            this.$emit('getList');
        },
        fileUploadError (error, file, fileList){
            let {name, size, type, uid, percentage} = fileList;
            this.fileList.forEach(e => {
                if (e.uid == uid)
                    e.percentage = 100;
                    e.status = 'wrong';
            })
        },
        handleFormatError (){
            this.$Message.warning('请上传.doc/.docx格式');
        },
        handleMaxSize (){
            this.$Message.warning('文件大小不能超过100M');
        },
        closeProModdal (){
            this.fileList = [];
            this.$refs.upload.clearFiles();
        }
    }
}
</script>
<style lang="scss">
#upload-file-component{
    .ivu-upload-list{
        background: #fff;
        position: fixed;
        bottom: 0;
        right: 0;
    }
    #progress-list-modal{
        padding: 15px;
        background: #fff;
        position: fixed;
        bottom: 10px;
        right: 6px;
        z-index: 1000;
        border-radius: 4px;
        box-shadow: 0 0 2px #9d9d9d;
        &>.title{
            font-size: 14px;
            color: #333;
            border-bottom: 1px solid #9e9e9e;
        }
        &>.ivu-icon-ios-close{
            font-size: 32px;
            position: absolute;
            top: 6px;
            right: 6px;
            cursor: pointer;
        }
    }
    .progress-list{
        li{
            display: flex;
            justify-content: space-between;
            align-items: center;
            &>span{
                display: inline-block;
                width: 300px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .ivu-progress{
                width: 350px;
            }
        }
    }
}
</style>
```