<template>
  <loading
    v-model:active="isLoading"
    :can-cancel="false"
    :color="color"
    :background-color="backgroundColor"
    :loader="loader"
    :is-full-page="true"
  />
  <!--A-->
  <div class="container">
    <div class="A">
      <div class="results-text" id="show" style="overflow-y: auto">
        <!-- <p class="results">{{ text }}</p> -->
        <p class="results" v-html="text"></p>
      </div>
      <!--標籤-->
      <div class="label-area" id="labelArea">
        <label style="margin-right: 0%; padding: 1px 8px">
          <input
            type="checkbox"
            class="d-input"
            :checked="leftKidneySizeCheck"
            @click="left_kidney_size()"
          />
          <span id="left_kidney_size" :class="leftKidneySizeClass"
            >左腎大小</span
          >
        </label>
        <label style="margin-right: 0%; padding: 1px 8px">
          <input
            type="checkbox"
            class="d-input"
            :checked="rightKidneySizCheck"
            @click="right_kidney_size()"
          />
          <span id="right_kidney_size" :class="rightKidneySizeClass"
            >右腎大小</span
          >
        </label>
        <label style="margin-right: 0%; padding: 1px 8px">
          <input
            type="checkbox"
            class="d-input"
            :checked="graftKidneySizeCheck"
            @click="graft_kidney_size()"
          />
          <span id="graft_kidney_size" :class="graftKidneySizeClass"
            >人工腎臟大小</span
          >
        </label>
        <label style="margin-right: 0%; padding: 1px 8px">
          <input
            type="checkbox"
            class="d-input"
            :checked="renalCystMentionCheck"
            @click="renal_cyst_mention()"
          />
          <span id="renal_cyst_mention" :class="renalCystMentionClass"
            >腎水泡名稱</span
          >
        </label>
        <label style="margin-right: 0%; padding: 1px 8px">
          <input
            type="checkbox"
            class="d-input"
            :checked="renalCystAmountCheck"
            @click="renal_cyst_amount()"
          />
          <span id="renal_cyst_amount" :class="renalCystAmountClass"
            >腎水泡數量</span
          >
        </label>
        <label style="margin-right: 0%; padding: 1px 8px">
          <input
            type="checkbox"
            class="d-input"
            :checked="renalCystSizeCheck"
            @click="renal_cyst_size()"
          />
          <span id="renal_cyst_size" :class="renalCystSizeClass"
            >腎水泡大小</span
          >
        </label>
        <label style="margin-right: 0%; padding: 1px 8px">
          <input
            type="checkbox"
            class="d-input"
            :checked="renalCystLocationCheck"
            @click="renal_cyst_location()"
          />
          <span id="renal_cyst_location" :class="renalCystLocationClass"
            >腎水泡部位</span
          >
        </label>
        <label style="margin-right: 0%; padding: 1px 8px">
          <input
            type="checkbox"
            class="d-input"
            :checked="renalCystMorphProgressionCheck"
            @click="renal_cyst_morph_progression()"
          />
          <span
            id="renal_cyst_morph_progression"
            :class="renalCystMorphProgressionClass"
            >腎水泡特徵</span
          >
        </label>
        <label style="margin-right: 0%; padding: 1px 8px">
          <input
            type="checkbox"
            class="d-input"
            :checked="diseaseNameCheck"
            @click="disease_name()"
          />
          <span id="disease_name" :class="diseaseNameClass">疾病名稱</span>
        </label>
        <label style="margin-right: 0%; padding: 1px 8px">
          <input
            type="checkbox"
            class="d-input"
            :checked="diseaseLocationCheck"
            @click="disease_location()"
          />
          <span id="disease_location" :class="diseaseLocationClass"
            >疾病部位</span
          >
        </label>
      </div>
    </div>
  </div>
  <!--B-->
  <div class="container" style="margin-top: 80px">
    <div class="alltable">
      <div class="table0">
        <div class="table-title">TAG</div>
        <div class="table-title">VALUE</div>
      </div>
      <div class="table">
        <div class="table-title">左腎大小</div>
        <div class="tablevue" v-if="leftKidneySize.length == `0`">無</div>
        <div class="table-title" v-else>
          <div
            class="tablevue"
            v-for="(item, key) in leftKidneySize"
            :key="key"
          >
            {{ item }},
          </div>
        </div>
      </div>
      <div class="tableA">
        <div class="table-title">右腎大小</div>
        <div class="tablevue" v-if="rightKidneySize.length == `0`">無</div>
        <div class="table-title" v-else>
          <div
            class="tablevue"
            v-for="(item, key) in rightKidneySize"
            :key="key"
          >
            {{ item }},
          </div>
        </div>
      </div>
      <div class="table">
        <div class="table-title">人工腎臟大小</div>
        <div class="tablevue" v-if="graftKidneySize.length == `0`">無</div>
        <div class="table-title" v-else>
          <div
            class="tablevue"
            v-for="(item, key) in graftKidneySize"
            :key="key"
          >
            {{ item }},
          </div>
        </div>
      </div>
      <div class="tableA">
        <div class="table-title">腎水泡名稱</div>
        <div class="tablevue" v-if="renalCystMention.length == `0`">無</div>
        <div class="table-title" v-else>
          <div
            class="tablevue"
            v-for="(item, key) in renalCystMention"
            :key="key"
          >
            {{ item }},
          </div>
        </div>
      </div>
      <div class="table">
        <div class="table-title">腎水泡數量</div>
        <div class="tablevue" v-if="renalCystAmount.length == `0`">無</div>
        <div class="table-title" v-else>
          <div
            class="tablevue"
            v-for="(item, key) in renalCystAmount"
            :key="key"
          >
            {{ item }},
          </div>
        </div>
      </div>
      <div class="tableA">
        <div class="table-title">腎水泡大小</div>
        <div class="tablevue" v-if="renalCystSize.length == `0`">無</div>
        <div class="table-title" v-else>
          <div class="tablevue" v-for="(item, key) in renalCystSize" :key="key">
            {{ item }},
          </div>
        </div>
      </div>
      <div class="table">
        <div class="table-title">腎水泡部位</div>
        <div class="tablevue" v-if="renalCystLocation.length == `0`">無</div>
        <div class="table-title" v-else>
          <div
            class="tablevue"
            v-for="(item, key) in renalCystLocation"
            :key="key"
          >
            {{ item }},
          </div>
        </div>
      </div>
      <div class="tableA">
        <div class="table-title">腎水泡特徵</div>
        <div class="tablevue" v-if="renalCystMorphProgression.length == `0`">
          無
        </div>
        <div class="table-title" v-else>
          <div
            class="tablevue"
            v-for="(item, key) in renalCystMorphProgression"
            :key="key"
          >
            {{ item }},
          </div>
        </div>
      </div>
      <div class="table">
        <div class="table-title">疾病名稱</div>
        <div class="tablevue" v-if="diseaseName.length == `0`">無</div>
        <div class="table-title" v-else>
          <div class="tablevue" v-for="(item, key) in diseaseName" :key="key">
            {{ item }},
          </div>
        </div>
      </div>
      <div class="tableA">
        <div class="table-title">疾病部位</div>
        <div class="tablevue" v-if="diseaseLocation.length == `0`">無</div>
        <div class="table-title" v-else>
          <div
            class="tablevue"
            v-for="(item, key) in diseaseLocation"
            :key="key"
          >
            {{ item }},
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- contact -->
  <div class="contact">
    <RouterLink to="/tool" class="about-button">
      <font-awesome-icon icon="arrow-left" style="color: #fff" />
    </RouterLink>
  </div>

  <!-- footer -->
  <div class="footer" id="footer">
    <div class="footer-logo">
      <p>精準健康研究中心-亞洲大學</p>
    </div>
  </div>
</template>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
}

body {
  background-color: #fcfdfe;
  font-family: "Noto Sans TC", sans-serif;
  /* 設定字型 */
  font-size: 16px;
  line-height: 32px;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  line-height: 1.5;
}

p {
  margin: 0;
}

ul,
li {
  list-style-type: none;
  /* 拿掉前方圈圈 */
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  /* 拿掉底線 */
}

html {
  scroll-behavior: smooth;
}

/* 上一頁按鈕 */
.contact {
  position: fixed;
  bottom: 60px;
  right: 50px;
  margin-left: -25px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  background: #038686;
  color: #fff;
  text-align: center;
  border-radius: 50%;
  box-shadow: 1px 1px 5px 0px #666;
  cursor: pointer;
  z-index: 5;
}
.contact:hover {
  transform: translateY(-5px);
  transition-duration: 0.3s;
}

/* 設定區塊寬度一致並置中 */
.container {
  width: 80%;
  margin: 0 auto 3rem auto;
}

/* 共用按鈕樣式 */
.action {
  color: white;
  background: #5c59c1;
  border-radius: 0.25rem;
  display: inline-block;
  font-size: 1rem;
  padding: 0.25rem 1rem;
  transition: all 0.1s linear;
}

/*滑過按鈕的時候，做一些陰影和背景顏色的變化*/
.action:hover {
  background: #267c99;
  /* 陰影 */
  -webkit-box-shadow: 0px 1px 5px 0px rgba(87, 87, 87, 1);
  -moz-box-shadow: 0px 1px 5px 0px rgba(87, 87, 87, 1);
  box-shadow: 0px 1px 5px 0px rgba(87, 87, 87, 1);
}

/*A*/
.A {
  padding-top: 100px;
  width: 100%;
}

.results-text {
  width: 100%;
  height: 500px;
  background-color: #ffffff;
  border-style: solid;
  border-color: #000;
  border-width: 1px;
}

.results {
  padding: 20px;
  line-height: 35px;
}

.label-area {
  width: 100%;
  margin-top: 30px;
  display: grid;
  grid-template-columns: 50% 50%;
}

/*標籤變色*/
/* .d-input {
  visibility: hidden;
} */

#left_kidney_size:hover {
  background-color: #fad190;
  border-radius: 1rem;
}

.d-input__left_kidney_size {
  background-color: #fad190;
  border-radius: 1rem;
}

#right_kidney_size:hover {
  background-color: #ffbfbf;
  border-radius: 1rem;
}

.d-input:checked ~ .d-input__right_kidney_size {
  background-color: #ffbfbf;
  border-radius: 1rem;
}

#graft_kidney_size:hover {
  background-color: #ffff96;
  border-radius: 1rem;
}

.d-input:checked ~ .d-input__graft_kidney_size {
  background-color: #ffff96;
  border-radius: 1rem;
}

#renal_cyst_mention:hover {
  background-color: #abffab;
  border-radius: 1rem;
}

.d-input:checked ~ .d-input__renal_cyst_mention {
  background-color: #abffab;
  border-radius: 1rem;
}

#renal_cyst_amount:hover {
  background-color: #8cffff;
  border-radius: 1rem;
}

.d-input:checked ~ .d-input__renal_cyst_amount {
  background-color: #8cffff;
  border-radius: 1rem;
}

#renal_cyst_size:hover {
  background-color: #b8b8ff;
  border-radius: 1rem;
}

.d-input:checked ~ .d-input__renal_cyst_size {
  background-color: #b8b8ff;
  border-radius: 1rem;
}

#renal_cyst_morph_progression:hover {
  background-color: #ca82ff;
  border-radius: 1rem;
}

.d-input:checked ~ .d-input__renal_cyst_morph_progression {
  background-color: #ca82ff;
  border-radius: 1rem;
}

#renal_cyst_location:hover {
  background-color: #ff96ff;
  border-radius: 1rem;
}

.d-input:checked ~ .d-input__renal_cyst_location {
  background-color: #ff96ff;
  border-radius: 1rem;
}

#disease_name:hover {
  background-color: #9c9c9c;
  border-radius: 1rem;
  color: #fff;
}

.d-input:checked ~ .d-input__disease_name {
  background-color: #9c9c9c;
  border-radius: 1rem;
  color: #fff;
}

#disease_location:hover {
  background-color: #9e0000;
  border-radius: 1rem;
  color: #fff;
}

.d-input:checked ~ .d-input__disease_location {
  background-color: #9e0000;
  border-radius: 1rem;
  color: #fff;
}

/*B*/
.alltable {
  margin: 0px auto;
}
.tablevue {
  display: inline-flex;
  margin-right: 10px;
}
.table0 {
  background-color: #038686;
  color: #fff;
  border-radius: 0.2rem;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0px;
}
.table {
  background-color: #eef9f9;
  color: #000;
  padding: 0px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0px;
}
.tableA {
  background-color: #eef9f9;
  padding: 0px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-style: solid;
  border-color: #000;
  border-width: 2px 0px;
}
.table:hover,
.tableA:hover {
  background-color: #038686;
  color: #fff;
  border-radius: 1rem;
}

/*footer*/
.footer {
  text-align: center;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #038686;
  color: #ffffff;
  margin-top: 80px;
}

/* 電腦版樣式 */

@media screen and (min-width: 900px) {
  /*A*/
  .A {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .results-text {
    width: 71%;
  }

  .label-area {
    width: 27%;
    grid-template-columns: 100%;
  }
}
</style>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

export default {
  props: {
    id: {
      type: String,
    },
  },
  components: {
    Loading,
  },
  data() {
    return {
      //Loading
      isLoading: false,
      color: "#038686",
      backgroundColor: "#D8D8D8",
      loader: "dots",
      //API
      result: {},
      text: {},
      renalCystSize: [],
      renalCystSizeClass: "",
      renalCystSizeCheck: false,
      renalCystMention: [],
      renalCystMentionClass: "",
      renalCystMentionCheck: false,
      renalCystAmount: [],
      renalCystAmountClass: "",
      renalCystAmountCheck: false,
      renalCystLocation: [],
      renalCystLocationClass: "",
      renalCystLocationCheck: false,
      diseaseName: [],
      diseaseNameClass: "",
      diseaseNameCheck: false,
      diseaseLocation: [],
      diseaseLocationClass: "",
      diseaseLocationCheck: false,
      renalCystMorphProgression: [],
      renalCystMorphProgressionClass: "",
      renalCystMorphProgressionCheck: false,
      leftKidneySize: [],
      leftKidneySizeClass: "",
      leftKidneySizeCheck: false,
      rightKidneySize: [],
      rightKidneySizeClass: "",
      rightKidneySizCheck: false,
      graftKidneySize: [],
      graftKidneySizeClass: "",
      graftKidneySizeCheck: false,
    };
  },
  mounted() {
    this.isLoading = true;
    const dataUrl = `https://iasl.asia.edu.tw:8082/api?text=${this.id}`;//https://iasl.asia.edu.tw:8082/api?text=${this.id} //https://iasl.asia.edu.tw:8082/api?text=12345678
    this.$http
      .get(`${dataUrl}`)
      .then((res) => {
        this.text = res.data.text.text;
        console.log("res.data", res.data);
        this.result = res.data.result;
        //取每項資料
        var Total = res.data.result.length;
        for (var j = 0; j < Total; j++) {
          if (res.data.result[j].tag == "renal_cyst_size") {
            //標籤顏色
            this.renalCystSizeCheck = true;
            this.renalCystSizeClass = "d-input__renal_cyst_size";
            //腎水泡大小
            this.renalCystSize.push(res.data.result[j].word);
            //上色
            const e = res.data.result[j].end - res.data.result[j].start;
            this.text =
              this.text.slice(0, this.text.search(res.data.result[j].word)) +
              `<mark style="background:#b8b8ff;">` +
              this.text.slice(
                this.text.search(res.data.result[j].word),
                this.text.search(res.data.result[j].word) + e
              ) +
              `</mark>` +
              this.text.slice(this.text.search(res.data.result[j].word) + e);
          }
          if (res.data.result[j].tag == "renal_cyst_mention") {
            //標籤顏色
            this.renalCystMentionCheck = true;
            this.renalCystMentionClass = "d-input__renal_cyst_mention";
            //腎水泡名稱
            this.renalCystMention.push(res.data.result[j].word);
            //上色
            const d = res.data.result[j].end - res.data.result[j].start;
            this.text =
              this.text.slice(0, this.text.search(res.data.result[j].word)) +
              `<mark style="background:#abffab;">` +
              this.text.slice(
                this.text.search(res.data.result[j].word),
                this.text.search(res.data.result[j].word) + d
              ) +
              `</mark>` +
              this.text.slice(this.text.search(res.data.result[j].word) + d);
          }
          if (res.data.result[j].tag == "renal_cyst_amount") {
            //標籤顏色
            this.renalCystAmountCheck = true;
            this.renalCystAmountClass = "d-input__renal_cyst_amount";
            //腎水泡數量
            this.renalCystAmount.push(res.data.result[j].word);
            //上色
            // const l= res.data.result[j].end-res.data.result[j].start
            // this.text=this.text.slice(0,this.text.search(res.data.result[j].word))+`<mark style="background:#8cffff;">`+this.text.slice(this.text.search(res.data.result[j].word),this.text.search(res.data.result[j].word)+l)+`</mark>`+this.text.slice(this.text.search(res.data.result[j].word)+l)
          }
          if (res.data.result[j].tag == "renal_cyst_location") {
            //標籤顏色
            this.renalCystLocationCheck = true;
            this.renalCystLocationClass = "d-input__renal_cyst_location";
            //腎水泡部位
            this.renalCystLocation.push(res.data.result[j].word);
            //上色
            const f = res.data.result[j].end - res.data.result[j].start;
            this.text =
              this.text.slice(0, this.text.search(res.data.result[j].word)) +
              `<mark style="background:#ff96ff;">` +
              this.text.slice(
                this.text.search(res.data.result[j].word),
                this.text.search(res.data.result[j].word) + f
              ) +
              `</mark>` +
              this.text.slice(this.text.search(res.data.result[j].word) + f);
          }
          if (res.data.result[j].tag == "disease_name") {
            //標籤顏色
            this.diseaseNameCheck = true;
            this.diseaseNameClass = "d-input__disease_name";
            //疾病名稱
            this.diseaseName.push(res.data.result[j].word);
            //上色
            // const k= res.data.result[j].end-res.data.result[j].start
            // this.text=this.text.slice(0,this.text.search(res.data.result[j].word))+`<mark style="background:#9c9c9c;">`+this.text.slice(this.text.search(res.data.result[j].word),this.text.search(res.data.result[j].word)+k)+`</mark>`+this.text.slice(this.text.search(res.data.result[j].word)+k)
          }
          if (res.data.result[j].tag == "disease_location") {
            //標籤顏色
            this.diseaseLocationCheck = true;
            this.diseaseLocationClass = "d-input__disease_location";
            //疾病部位
            this.diseaseLocation.push(res.data.result[j].word);
            //上色
            const h = res.data.result[j].end - res.data.result[j].start;
            this.text =
              this.text.slice(0, this.text.search(res.data.result[j].word)) +
              `<mark style="background:#9e0000;">` +
              this.text.slice(
                this.text.search(res.data.result[j].word),
                this.text.search(res.data.result[j].word) + h
              ) +
              `</mark>` +
              this.text.slice(this.text.search(res.data.result[j].word) + h);
          }
          if (res.data.result[j].tag == "renal_cyst_morph_progression") {
            //標籤顏色
            this.renalCystMorphProgressionCheck = true;
            this.renalCystMorphProgressionClass ="d-input__renal_cyst_morph_progression";
            //腎水泡特徵
            this.renalCystMorphProgression.push(res.data.result[j].word);
            //上色
            const g = res.data.result[j].end - res.data.result[j].start;
            this.text =
              this.text.slice(0, this.text.search(res.data.result[j].word)) +
              `<mark style="background:#ca82ff;">` +
              this.text.slice(
                this.text.search(res.data.result[j].word),
                this.text.search(res.data.result[j].word) + g
              ) +
              `</mark>` +
              this.text.slice(this.text.search(res.data.result[j].word) + g);
          }
          if (res.data.result[j].tag == "left_kidney_size") {
            //標籤顏色
            this.leftKidneySizeCheck = true;
            this.leftKidneySizeClass = "d-input__left_kidney_size";
            //左腎大小
            this.leftKidneySize.push(res.data.result[j].word);
            //上色
            const a = res.data.result[j].end - res.data.result[j].start;
            this.text =
              this.text.slice(0, this.text.search(res.data.result[j].word)) +
              `<mark style="background:#fad190;">` +res.data.result[j].word+`</mark>` +
              this.text.slice(this.text.search(res.data.result[j].word) + a);
          }
          if (res.data.result[j].tag == "right_kidney_size") {
            //標籤顏色
            this.rightKidneySizCheck = true;
            this.rightKidneySizeClass = "d-input__right_kidney_size";
            //右腎大小
            this.rightKidneySize.push(res.data.result[j].word);
            //上色
            const b = res.data.result[j].end - res.data.result[j].start;
            this.text =
              this.text.slice(0, this.text.search(res.data.result[j].word)) +`<mark style="background:#ffbfbf;">` +res.data.result[j].word+`</mark>` +
              this.text.slice(this.text.search(res.data.result[j].word) + b);
          }
          if (res.data.result[j].tag == "graft_kidney_size") {
            //標籤顏色
            this.graftKidneySizeCheck = true;
            this.graftKidneySizeClass = "d-input__graft_kidney_size";
            //人工腎臟大小
            this.graftKidneySize.push(res.data.result[j].word);
            //上色
            const c = res.data.result[j].end - res.data.result[j].start;
            this.text =
              this.text.slice(0, this.text.search(res.data.result[j].word)) +
              `<mark style="background:#ffff96;">` +
              this.text.slice(
                this.text.search(res.data.result[j].word),
                this.text.search(res.data.result[j].word) + c
              ) +
              `</mark>` +
              this.text.slice(this.text.search(res.data.result[j].word) + c);
          }
        }
        this.isLoading = false;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    left_kidney_size() {
      //左腎大小
      var Total = this.result.length;
      for (var j = 0; j < Total; j++) {
        if (this.result[j].tag == "left_kidney_size") {
          if (this.leftKidneySizeClass === "d-input__left_kidney_size") {
            const aa = this.text.search(`<mark style="background:#fad190;">`);
            const bb = this.text.search(this.result[j].word);
            this.text = this.text.slice(0, aa) + this.text.slice(bb);
          } else {
            const bb = this.text.search(this.result[j].word);
            this.text =
              this.text.slice(0, bb) +
              `<mark style="background:#fad190;">` +
              this.text.slice(bb);
          }
        }
      }
      if (this.leftKidneySizeClass === "d-input__left_kidney_size") {
        this.leftKidneySizeClass = "";
      } else {
        this.leftKidneySizeClass = "d-input__left_kidney_size";
      }
    },
    right_kidney_size() {
      //右腎大小
      var Total = this.result.length;
      for (var j = 0; j < Total; j++) {
        if (this.result[j].tag == "right_kidney_size") {
          if (this.rightKidneySizeClass == "d-input__right_kidney_size") {
            const rks = this.text.search(`<mark style="background:#ffbfbf;">`);
            const rksz = this.text.search(this.result[j].word);
            this.text = this.text.slice(0, rks) + this.text.slice(rksz);
          } else {
            const rksz = this.text.search(this.result[j].word);
            this.text =
              this.text.slice(0, rksz) +
              `<mark style="background:#ffbfbf;">` +
              this.text.slice(rksz);
          }
        }
      }
      if (this.rightKidneySizeClass === "d-input__right_kidney_size") {
        this.rightKidneySizeClass = "";
      } else {
        this.rightKidneySizeClass = "d-input__right_kidney_size";
      }
    },
    graft_kidney_size() {
      //人工腎臟大小
      var Total = this.result.length;
      for (var j = 0; j < Total; j++) {
        if (this.result[j].tag == "graft_kidney_size") {
          if (this.graftKidneySizeClass == "d-input__graft_kidney_size") {
            const rks = this.text.search(`<mark style="background:#ffff96;">`);
            const rksz = this.text.search(this.result[j].word);
            this.text = this.text.slice(0, rks) + this.text.slice(rksz);
          } else {
            const rksz = this.text.search(this.result[j].word);
            this.text =
              this.text.slice(0, rksz) +
              `<mark style="background:#ffff96;">` +
              this.text.slice(rksz);
          }
        }
      }
      if (this.graftKidneySizeClass === "d-input__graft_kidney_size") {
        this.graftKidneySizeClass = "";
      } else {
        this.graftKidneySizeClass = "d-input__graft_kidney_size";
      }
    },
    renal_cyst_mention() {
      //腎水泡名稱
      var Total = this.result.length;
      for (var j = 0; j < Total; j++) {
        if (this.result[j].tag == "renal_cyst_mention") {
          if (this.renalCystMentionClass === "d-input__renal_cyst_mention") {
            const rks = this.text.search(`<mark style="background:#abffab;">`);
            const rksz = this.text.search(this.result[j].word);
            this.text = this.text.slice(0, rks) + this.text.slice(rksz);
          } else {
            const rksz = this.text.search(this.result[j].word);
            this.text =
              this.text.slice(0, rksz) +
              `<mark style="background:#abffab;">` +
              this.text.slice(rksz);
          }
        }
      }
      if (this.renalCystMentionClass === "d-input__renal_cyst_mention") {
        this.renalCystMentionClass = "";
      } else {
        this.renalCystMentionClass = "d-input__renal_cyst_mention";
      }
    },
    renal_cyst_amount() {
      //腎水泡數量
      var Total = this.result.length;
      for (var j = 0; j < Total; j++) {
        if (this.result[j].tag == "renal_cyst_amount") {
          if (this.renalCystAmountClass === "d-input__renal_cyst_amount") {
            const rks = this.text.search(`<mark style="background:#8cffff;">`);
            const rksz = this.text.search(this.result[j].word);
            this.text = this.text.slice(0, rks) + this.text.slice(rksz);
          } else {
            const rksz = this.text.search(this.result[j].word);
            this.text =
              this.text.slice(0, rksz) +
              `<mark style="background:#8cffff;">` +
              this.text.slice(rksz);
          }
        }
      }
      if (this.renalCystAmountClass === "d-input__renal_cyst_amount") {
        this.renalCystAmountClass = "";
      } else {
        this.renalCystAmountClass = "d-input__renal_cyst_amount";
      }
    },
    renal_cyst_size() {
      //腎水泡大小
      var Total = this.result.length;
      for (var j = 0; j < Total; j++) {
        if (this.result[j].tag == "renal_cyst_size") {
          if (this.renalCystSizeClass === "d-input__renal_cyst_size") {
            const rks = this.text.search(`<mark style="background:#b8b8ff;">`);
            const rksz = this.text.search(this.result[j].word);
            this.text = this.text.slice(0, rks) + this.text.slice(rksz);
          } else {
            const rksz = this.text.search(this.result[j].word);
            this.text =
              this.text.slice(0, rksz) +
              `<mark style="background:#b8b8ff;">` +
              this.text.slice(rksz);
          }
        }
      }
      if (this.renalCystSizeClass === "d-input__renal_cyst_size") {
        this.renalCystSizeClass = "";
      } else {
        this.renalCystSizeClass = "d-input__renal_cyst_size";
      }
    },
    renal_cyst_location() {
      //腎水泡部位
      var Total = this.result.length;
      for (var j = 0; j < Total; j++) {
        if (this.result[j].tag == "renal_cyst_location") {
          if (this.renalCystLocationClass === "d-input__renal_cyst_location") {
            const rks = this.text.search(`<mark style="background:#ff96ff;">`);
            const rksz = this.text.search(this.result[j].word);
            this.text = this.text.slice(0, rks) + this.text.slice(rksz);
          } else {
            const rksz = this.text.search(this.result[j].word);
            this.text =
              this.text.slice(0, rksz) +
              `<mark style="background:#ff96ff;">` +
              this.text.slice(rksz);
          }
        }
      }
      if (this.renalCystLocationClass === "d-input__renal_cyst_location") {
        this.renalCystLocationClass = "";
      } else {
        this.renalCystLocationClass = "d-input__renal_cyst_location";
      }
    },
    renal_cyst_morph_progression() {
      //腎水泡特徵
      var Total = this.result.length;
      for (var j = 0; j < Total; j++) {
        if (this.result[j].tag == "renal_cyst_morph_progression") {
          if (
            this.renalCystMorphProgressionClass ===
            "d-input__renal_cyst_morph_progression"
          ) {
            const rks = this.text.search(`<mark style="background:#ca82ff;">`);
            const rksz = this.text.search(this.result[j].word);
            this.text = this.text.slice(0, rks) + this.text.slice(rksz);
          } else {
            const rksz = this.text.search(this.result[j].word);
            this.text =
              this.text.slice(0, rksz) +
              `<mark style="background:#ca82ff;">` +
              this.text.slice(rksz);
          }
        }
      }
      if (
        this.renalCystMorphProgressionClass ===
        "d-input__renal_cyst_morph_progression"
      ) {
        this.renalCystMorphProgressionClass = "";
      } else {
        this.renalCystMorphProgressionClass =
          "d-input__renal_cyst_morph_progression";
      }
    },
    disease_name() {
      //疾病名稱
      var Total = this.result.length;
      for (var j = 0; j < Total; j++) {
        if (this.result[j].tag == "disease_name") {
          if (this.diseaseNameClass === "d-input__disease_name") {
            const rks = this.text.search(`<mark style="background:#9c9c9c;">`);
            const rksz = this.text.search(this.result[j].word);
            this.text = this.text.slice(0, rks) + this.text.slice(rksz);
          } else {
            const rksz = this.text.search(this.result[j].word);
            this.text =
              this.text.slice(0, rksz) +
              `<mark style="background:#9c9c9c;">` +
              this.text.slice(rksz);
          }
        }
      }
      if (this.diseaseNameClass === "d-input__disease_name") {
        this.diseaseNameClass = "";
      } else {
        this.diseaseNameClass = "d-input__disease_name";
      }
    },
    disease_location() {
      //疾病部位
      var Total = this.result.length;
      for (var j = 0; j < Total; j++) {
        if (this.result[j].tag == "disease_location") {
          if (this.diseaseLocationClass === "d-input__disease_location") {
            const rks = this.text.search(`<mark style="background:#9e0000;">`);
            const rksz = this.text.search(this.result[j].word);
            this.text = this.text.slice(0, rks) + this.text.slice(rksz);
          } else {
            const rksz = this.text.search(this.result[j].word);
            this.text =
              this.text.slice(0, rksz) +
              `<mark style="background:#9e0000;">` +
              this.text.slice(rksz);
          }
        }
      }
      if (this.diseaseLocationClass === "d-input__disease_location") {
        this.diseaseLocationClass = "";
      } else {
        this.diseaseLocationClass = "d-input__disease_location";
      }
    },
  },
};
</script>
