<template>
  <div class="box">
    <draggable
        class="dragTag"
        :options="{
            group: 'imgChoose',
            animation: 150,
            scroll: true,
            scrollSensitivity: 200,
            ghostClass:'ghostright',
            chosenClass:'chosenRight'
        }"
    >
        <div class="rightImgCard" v-for="item in secList"
                :key="item.image_id">

            <div class="img">
                123
            </div>
        </div>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
     components: {
      draggable,
    },
    data(){
        return {
            secList:[]
        }
    }
}
</script>

<style lang="scss" scoped>
.dragTag{
    width:100%;
    height: 100%;
    display:flex;
    flex-wrap: wrap;
    overflow-y: scroll;
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
    .ghostright{
        background:red;
        width:50px;
        height:100px;
    }
    .chosenRight{
        background:blue;
        width:50px;
        height:100px;
    }
}
</style>