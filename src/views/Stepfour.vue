<template>
  <div class="stepfour">
    <table class="tablesize">
      <!-- Your table content -->
      <thead>
        <tr class="has-background-primary-light">
          <th class="thposition">
            <div class="has-background-info tagposition">
              <p class="is-family-sans-serif has-text-weight-light has-text-white spantext">STEP4</p>
            </div>
            <p class="py-2 has-text-weight-light has-text-grey headtext"><font-awesome-icon :icon="['fas', 'file-alt']"/>以下の内容をご確認ください</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td  class="contentsize">
            <p class="has-text-link contenttitle">-性別-</p>
            <p class="selectbox">{{ geteDataGender }}</p>
            <p class="has-text-link contenttitle">-生年月日-</p>
            <p class="selectbox">{{ getDataBirthYear + " 年 " +getDataBirthMonth + " 月 " + getDataBirthDay + " 日 " }}</p>
            <p class="has-text-link contenttitle">-現在、生命保険に加入されていますか？-</p>
            <p class="selectbox">{{ getFirstQuestionAnswered }}</p>       
            <p class="has-text-link contenttitle">-現在、入院中ですか？または、最近３ヵ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-</p>
            <p class="selectbox">{{ getSecondQuestionAnswered }}</p>                  
            <p class="has-text-link contenttitle">-過去５年以内に、病気やけがで、手術をうけたことまたは継続して７日以上の入院をしたことがありますか？-</p>
            <p class="selectbox">{{ getThirdQuestionAnswered }}</p> 
            <p class="has-text-link contenttitle">-ご相談内容-</p>
            <p class="selectbox">{{ getDetailsOfConsultation }}</p>               
          </td>
        </tr>
      </tbody>
    </table>
    <div class="changepage">
      <div>
        <router-link to="/stepthree">
          <button class="btnposition button is-primary">
            前へ戻る<strong>></strong>
          </button>
        </router-link> 
      </div>
        <!-- <router-link to="/stepthree"> -->
          <button class="btnposition button is-primary">
            送信<strong>></strong>
          </button>
        <!-- </router-link>  -->
    </div>
  </div>
</template>

<script>
export default {
  name:'stepfour',
  computed:{
    geteDataGender(){
      return this.$store.getters.geteDataGender
    },
    getDataBirthYear(){
      return this.$store.getters.getDataBirthYear
    },
    getDataBirthMonth(){
      return this.$store.getters.getDataBirthMonth
    },
    getDataBirthDay(){
      return this.$store.getters.getDataBirthDay
    },
    getFirstQuestionAnswered(){
      return this.$store.getters.getFirstQuestionAnswered
    },
    getSecondQuestionAnswered(){
      return this.$store.getters.getSecondQuestionAnswered
    },
    getThirdQuestionAnswered(){
      return this.$store.getters.getThirdQuestionAnswered
    },
    getDetailsOfConsultation(){
      return this.$store.getters.getDetailsOfConsultation
    }    
  }
}
</script>

<style>
table, td, th { 
  border: 1px hsl(171, 85%, 43%) solid; 
  }
.headtext{
  text-align: center;
}
.tablesize{
  width: 800px;
  margin:40px auto 20px;
}
.contentsize{
  line-height:3em;
  padding:20px;
}
.thposition{
  position:relative;
}
.tagposition{
  position:absolute;
  top:0px;
  left:0px;
  border-radius: 2px;
  font-size:14px;
  font-weight:light;
}
.spantext{
  padding:0 8px;
}
.btnposition{
  margin:0 30px;
}
.changepage{
  display: flex;
  justify-content: center;
}
.selectbox{
  margin-left: 50px;
}
/* transition setting */
.v-enter-active {
  transition: opacity 1s;
}
.v-enter, .v-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
