<template>
  <div class="stepthree">
    <table class="tablesize">
      <!-- Your table content -->
      <thead >
        <tr class="has-background-primary-light">
          <th class="thposition">
            <div class="has-background-info tagposition">
              <p class="is-family-sans-serif has-text-weight-light has-text-white spantext">STEP3</p>
            </div>
            <p class="py-2 has-text-weight-light has-text-grey headtext"><font-awesome-icon :icon="['fas', 'file-alt']" />ご相談内容を入力してください</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td  class="contentsize">
            <p class="has-text-link contenttitle">-ご相談内容-</p>
            <textarea rows="20" cols="108" v-model="answeredStepThree.inputDetailConsultation"></textarea>
          </td>
        </tr>
      </tbody>
    </table>
   <div class="changepage">
      <div>
        <router-link to="/steptwo">
          <button class="btnposition button is-primary">
            前へ戻る<strong>></strong>
          </button>
        </router-link> 
      </div>
      <div>
        <router-link to="/stepfour">
          <button class="btnposition button is-primary" @click="registerStepThreeAnswer">
            次へ進む<strong>></strong>
          </button>
        </router-link> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'stepthird',
    data () {
    return {
      answeredStepThree:{
        inputDetailConsultation: ''
      }
    }
  },
  methods:{
    registerStepThreeAnswer() {
      this.$store.commit('commitStepThreeAnswer',this.answeredStepThree)
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
  padding:10px;
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
.contenttitle{
  text-align: left;
  padding-left:20px;
}
.birthdate{
  padding-left:5px;
  padding-right:20px;
}
.birthcontent{
  display:flex;
}
.btnposition{
  margin:0 30px;
}
.changepage{
  display: flex;
  text-align: center;
  justify-content: center;
}
</style>