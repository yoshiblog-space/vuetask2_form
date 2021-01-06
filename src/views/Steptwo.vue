<template>
  <div class="steptwo">
    <table class="tablesize">
      <!-- Your table content -->
      <thead>
        <tr class="has-background-primary-light">
          <th class="thposition">
            <div class="has-background-info tagposition">
              <p class="is-family-sans-serif has-text-weight-light has-text-white spantext">STEP2</p>
            </div>
            <p class="py-2 has-text-weight-light has-text-grey headtext"><font-awesome-icon :icon="['fas', 'chalkboard-teacher']"/>お客様の情報を入力してください</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="contentsize">
            <div>
              <p class="has-text-link contenttitle">現在、生命保険に加入されていますか？</p>
              <div class="control contenttitle selectbox" id="gender">
                <label class="radio">
                  <input type="radio" name="firstq" value="はい" v-model="answeredStepTwo.inputFirstQuestion">
                  はい
                </label>
                <label class="radio">
                  <input type="radio" name="firstq" value="いいえ" v-model="answeredStepTwo.inputFirstQuestion">
                  いいえ
                </label>
              </div>
            </div>
            <transition>
              <div v-if="answeredStepTwo.inputFirstQuestion!=''" key="check1">
                <p class="has-text-link contenttitle">現在、入院中ですか？または、最近３ヵ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
                <div class="control contenttitle selectbox" id="gender">
                  <label class="radio">
                    <input type="radio" name="secondq" value="はい" v-model="answeredStepTwo.inputSecondQuestion">はい
                  </label>
                  <label class="radio">
                    <input type="radio" name="secondq" value="いいえ" v-model="answeredStepTwo.inputSecondQuestion">
                    いいえ
                  </label>
                </div>
              </div>
            </transition>
            <transition>
              <div v-if="answeredStepTwo.inputSecondQuestion!=''" key="check2">
                <p class="has-text-link contenttitle">過去５年以内に、病気やけがで、手術をうけたことまたは継続して７日以上の入院をしたことがありますか？</p>
                <div class="control contenttitle selectbox" id="gender">
                  <label class="radio">
                    <input type="radio" name="thridq" value="はい" v-model="answeredStepTwo.inputThirdQuestion">
                    はい
                  </label>
                  <label class="radio">
                    <input type="radio" name="thridq" value="いいえ" v-model="answeredStepTwo.inputThirdQuestion">
                    いいえ
                  </label>
                </div>
              </div>
            </transition>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="changepage">
      <div>
        <router-link to="/">
          <button class="btnposition button is-primary">
            前へ戻る<strong>></strong>
          </button>
        </router-link> 
      </div>
      <div v-if="answeredStepTwo.inputThirdQuestion!=''" key="check3">
        <router-link to="/stepthree">
          <button class="btnposition button is-primary" @click="registerStepTwoAnswer">
            次へ進む<strong>></strong>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'stepsecond',
    data () {
    return {
      answeredStepTwo:{
        inputFirstQuestion: '',
        inputSecondQuestion: '',
        inputThirdQuestion: ''
      }
    }
  },
  methods:{
    registerStepTwoAnswer() {
      this.$store.commit('commitStepTwoAnswer', this.answeredStepTwo)
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
  line-height: 3em;
  padding: 20px;
}
.thposition{
  position:relative;
}
.tagposition{
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 2px;
  font-size: 14px;
  font-weight: light;
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
  text-align: left;
}
/* transition setting */
.v-enter-active {
  transition: opacity 1s;
}
.v-enter, .v-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
