<template>
    <div class="box">
        <el-button
            plain
            @click="open">
            可自动关闭
        </el-button>
        <el-input v-show="showInput" ref="input" v-model="value"></el-input>
    </div>
</template>

<script>
export default {
    data(){
        return {
            dom:null,
data:456,
value:"",
showInput:false
        }
    },
    methods:{
        open(data) {
            this.showInput=true
            this.$nextTick(()=>{
                this.$refs.input.$refs.input.focus()
            })
            let datas=123
            return
            const h = this.$createElement; // 创建文本节点
            this.notifyInstance = this.$notify({
              title:'123', // 标题
              duration: 0,
              offset: 65,
              // type: 'warning', // 带有成功性的通知
              dangerouslyUseHTMLString: true, // 允许自定义HTML片段
              customClass: 'notifyClass',
              message: h(
                "div", {
                  style: "padding-top: 10px;height: 90px;",
                },
                [
                  h(
                    "div", {
                      class: 'del_notify', // 自定义class
                      on: {
    //                     click: this.del_notify(123), // 确定按钮的点击事件
                      }
                    },
                    "处理"
                  ),
                  h(
                    "div", {
                      class: 'lose_notify', // 自定义class
                      on: {
                         click:this.lose_notify.bind(this,this.data), // 确定按钮的点击事件
                      },
                    },
                    "忽略"
                  ),
                ]
              ),
            });
      },
        lose_notify(datas){
            console.log(datas)
        }

    },
}
</script>