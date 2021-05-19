<template>
  <div class="box">
        <div class="wrap">
            <div class="left flex1">
                <draggable
                    class="dragTag"
                    :options="{
                        group: 'imgChoose',
                        animation: 150,
                        scroll: true,
                        scrollSensitivity: 200,
                        dragClass:'dragClass',
                        chosenClass:'chosenLeft',
                        ghostClass:'ghostLeft',
                        
                        
                    }"
                >
                    <div class="leftImgCard" v-for="item in imgList"
                            :key="item.image_id">
                        <!-- <img :src="item.hd_image_url" alt=""> -->
                        <div class="img"></div>
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
                height:auto;
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
        .dragClass{
            opacity: 1;
        }
    }
}
</style>