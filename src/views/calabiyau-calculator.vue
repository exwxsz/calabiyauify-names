<template>
  <div class="container">
    <div class="title-row">
      <img src="@/assets/5.png" class="title-img" />
      <div class="title">卡拉彼丘程度计算器喵~</div>
    </div>

    <div class="subtitle">
      输入昵称，检测你的猫娘同步率！
    </div>

    <input v-model="name" placeholder="请输入你的昵称喵~" />

    <button @click="calculate">
      开始计算卡拉彼丘程度喵！
    </button>

    <div class="result" v-if="score!==null">
      <div class="score">{{score}}%</div>
      <div class="comment">{{comment}}</div>
      <div class="cat">{{emoji}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name:"",
      score:null,
      comment:"",
      emoji:""
    }
  },
  methods:{
    calculate(){
      // 直接把你原本的 calculate 代码粘进来
    }
  }
}
</script>

<style scoped>
/* 把你的 CSS 粘进来 */
</style>