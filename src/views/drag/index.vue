<template>
  <div class="box">
        <div class="wrap">
            <div class="left flex1">
                <draggable
                    class="dragTag"
                    v-model="imgList"
                    :options="{
                      group:{name:'site',pull:'clone'},
                      animation:150,
                      dragClass:'dragClass',
                      chosenClass:'chosenClass',
                      ghostClass:'ghostClass',
                    }"
                      
                >
                    <div class="leftImgCard" v-for="(item,index) in imgList"
                            :key="item.image_id">
                        <!-- <img :src="item.hd_image_url" alt=""> -->
                        <div class="img">
                          {{index}}
                        </div>
                    </div>
                </draggable>
            </div>
            <div class="right flex1">
                <receive></receive>
                <!-- <draggable
                    class="dragTag"
                    :options="{
                        group: 'imgChoose',
                        animation: 150,
                        scroll: true,
                        scrollSensitivity: 200,
                        ghostClass:'ghost'
                    }"
                >
                    <div class="rightImgCard" v-for="item in secList"
                            :key="item.image_id">

                        <div class="img"></div>
                    </div>
                </draggable> -->
            </div>
        </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import receive from "./receiveImg"
import data from "./data.json"
export default {
     components: {
      draggable,
      receive
    },
    data(){
        return {
            imgList:[],
            secList:[]
        }
    },
    created(){
        this.imgList=data.list
    }
}
</script>

<style lang="scss" scoped>

.chosenClass{
  background-color: red !important;
  opacity: 1!important;

}
.ghostResive{
  width:100px !important;
  height:100px !important;
}

.ghostClass{
  background-color:  blue !important;
  // height:100px !important;
}
.dragClass{
  background-color: blueviolet !important;
  opacity: 1 !important;
  box-shadow:none !important;
  outline:none !important;
  background-image:none !important;
}
.box{
    width:100%;
    height: 100%;
    .wrap{
        width:1000px;
        height:500px;
        border:1px solid #cec3ce;
        margin:0 auto;
        display: flex;
        >div{
            border:1px solid #cecece;
        }
        .dragTag{
            width:100%;
            height: 100%;
            display:flex;
            flex-wrap: wrap;
            overflow-y: scroll;
            
            .leftImgCard{
                width:200px;
                height:200px;
                margin:10px;
                >.img{
                   width:100%;
                    height: 100%;
                    min-width: 45%;
                    border:1px solid #cecece;
                    border-radius: 10px;
                }
            }
            .rightImgCard{
                // width:100px;
                >.img{
                    width:100%;
                    height: 100%;
                    min-width: 45%;
                    border:1px solid #cecece;
                    border-radius: 10px;
                }

            }
            .chosenLeft{
                // background:blue
            }
            .ghostLeft{
                background:red;
            }
            // .ghost{
            //     background:red;
            //     width:50px;
            //     height:100px;
            // }
            
        }
    }
}
</style>