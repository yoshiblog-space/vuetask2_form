<template>
  <div class="Stepone">
    <table class="tablesize">
      <!-- Your table content -->
      <thead>
        <tr class="has-background-primary-light">
          <th class="thposition">
            <div class="has-background-info tagposition">
              <p class="is-family-sans-serif has-text-weight-light has-text-white spantext">STEP1</p>
            </div>
            <p class="py-2 has-text-weight-light has-text-grey headtext"><font-awesome-icon :icon="['fas', 'address-card']" />お客様の情報を入力してください</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td  class="contentsize">
            <p class="has-text-link contenttitle">-性別-</p>
            <div class="control contenttitle selectbox" id="gender">
              <label class="radio">
                <input type="radio" name="foobar">
                男性
              </label>
              <label class="radio">
                <input type="radio" name="foobar">
                女性
              </label>
            </div>
            <p class="has-text-link contenttitle">-生年月日-</p>
            <div class="birthcontent">
              <div class="select" >
                <select>
                  <option v-for="year in formYears" v-bind:key="year">{{ year }}</option>
                </select>
              </div>
              <p class="birthdate">年</p>
              <div class="select">
                <select>
                  <option v-for="month in formmonths" v-bind:key="month">{{ month }}</option>  
                </select>
              </div>
              <p class="birthdate">月</p>
              <div class="select">
                <select>
                  <option v-for="day in formdays" v-bind:key="day">{{ day }}</option>
                </select>
              </div>
              <p class="birthdate">日</p>

            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <router-link to="/steptwo">
      <button class="btnposition button is-primary">
        次へ進む<strong>></strong>
      </button>
    </router-link> 

  </div>
</template>
<script>
import formDate from '../definition';

export default {
  data () {
    return {
      formYears : formDate.year,
      formmonths : formDate.month,
      formdays : formDate.date
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
  display:block;
  margin:0 auto;
}
.selectbox{
  text-align:left;
}
</style>

