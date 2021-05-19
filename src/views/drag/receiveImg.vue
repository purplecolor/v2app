<template>
  <div class="box">
    <draggable
        class=" dragReceive"
        v-model="secList"
        :options="{
          group:{name:'site'},
          ghostClass:'ghostResive',
          chosenClass:'chosenResive',
          dragClass:'dragClassResive'
        }"
    >
    <!-- <transition-group tag="div"> -->
        <div class="rightImgCard"
          v-for="item in secList"
          :key="item.image_id"
        >
          <div class="img">
              123
          </div>
        </div>
    <!-- </transition-group> -->
    </draggable>
  </div>
</template>

<script>

export default {
    data(){
        return {
            secList:[]
        }
    }
}
</script>

<style lang="scss" scoped>
.chosenResive{
  background-color:green !important;
}
.ghostResive{
  width:100px !important;
  background-color:  yellow !important;
  height:100px !important;
}
.dragClassResive{
  background-color:pink !important;
}


// .chosenClass{
//   background-color: red !important;
//   opacity: 1!important;
//   height:100px !important;
// }
// .dragClass{
//   background-color: blueviolet !important;
//   opacity: 1 !important;
//   box-shadow:none !important;
//   outline:none !important;
//   background-image:none !important;
// }
.dragReceive{
  .leftImgCard{
    width:100px !important;
    height:100px !important;
  }
}
.dragReceive{
    width:100%;
    // height: 200px;
    height:100%;
    display:flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    .rightImgCard{
        width:100px;
        height:100px;
        margin:10px;
        >.img{
            width:100%;
            height: 100%;
            min-width: 45%;
            border:1px solid #cecece;
            border-radius: 10px;
            cursor:move;
        }

    }
    .leftImgCard{
      width:200px;
      height: 200px !important;
      margin:30px;
    }
    .ghostright{
        background:red;
        width:50px;
        height:100px !important;
    }
    .chosenRight{
        background:blue;
        width:50px;
        height:100px;
    }
}
</style>