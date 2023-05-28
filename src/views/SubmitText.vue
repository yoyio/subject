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
        <p class="results">{{ id }}</p>
      </div>
      <!--標籤-->
      <div class="label-area" id="labelArea">
        <label style="margin-right: 0%; padding: 1px 8px">
          <input type="checkbox" class="d-input" />
          <span id="left_kidney_size" class="d-input__left_kidney_size"
            >左腎大小</span
          >
        </label>
        <label style="margin-right: 0%; padding: 1px 8px">
          <input type="checkbox" class="d-input" />
          <span class="d-input__right_kidney_size" id="right_kidney_size"
            >右腎大小</span
          >
        </label>
        <label style="margin-right: 0%; padding: 1px 8px">
          <input type="checkbox" class="d-input" />
          <span id="graft_kidney_size" class="d-input__graft_kidney_size"
            >人工腎臟大小</span
          >
        </label>
        <label style="margin-right: 0%; padding: 1px 8px">
          <input type="checkbox" class="d-input" />
          <span id="renal_cyst_mention" class="d-input__renal_cyst_mention"
            >腎水泡名稱</span
          >
        </label>
        <label style="margin-right: 0%; padding: 1px 8px">
          <input type="checkbox" class="d-input" />
          <span id="renal_cyst_amount" class="d-input__renal_cyst_amount"
            >腎水泡數量</span
          >
        </label>
        <label style="margin-right: 0%; padding: 1px 8px">
          <input type="checkbox" class="d-input" />
          <span id="renal_cyst_size" class="d-input__renal_cyst_size"
            >腎水泡大小</span
          >
        </label>
        <label style="margin-right: 0%; padding: 1px 8px">
          <input type="checkbox" class="d-input" />
          <span id="renal_cyst_location" class="d-input__renal_cyst_location"
            >腎水泡部位</span
          >
        </label>
        <label style="margin-right: 0%; padding: 1px 8px">
          <input type="checkbox" class="d-input" />
          <span id="disease_name" class="d-input__disease_name">疾病名稱</span>
        </label>
        <label style="margin-right: 0%; padding: 1px 8px">
          <input type="checkbox" class="d-input" />
          <span id="disease_location" class="d-input__disease_location"
            >疾病部位</span
          >
        </label>
        <label style="margin-right: 0%; padding: 1px 8px">
          <input type="checkbox" class="d-input" />
          <span
            id="renal_cyst_morph_progression"
            class="d-input__renal_cyst_morph_progression"
            >腎水泡特徵</span
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
        <div class="tablevue" v-if="size.length==`0`">無</div>
        <div class="table-title" v-else>
          <div class="tablevue" v-for="(item, key) in size" :key="key">
            {{ item }},
          </div>
        </div>
      </div>
      <div class="tableA">
        <div class="table-title">右腎大小</div>
        <div class="tablevue" v-if="size.length==`0`">無</div>
        <div class="table-title" v-else>
          <div class="tablevue" v-for="(item, key) in size" :key="key">
            {{ item }},
          </div>
        </div>
      </div>
      <div class="table">
        <div class="table-title">人工腎臟大小</div>
        <div class="tablevue" v-if="size.length==`0`">無</div>
        <div class="table-title" v-else>
          <div class="tablevue" v-for="(item, key) in size" :key="key">
            {{ item }},
          </div>
        </div>
      </div>
      <div class="tableA">
        <div class="table-title">腎水泡名稱</div>
        <div class="tablevue" v-if="renalCystMention.length==`0`">無</div>
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
        <div class="tablevue" v-if="renalCystAmount.length==`0`">無</div>
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
        <div class="tablevue" v-if="renalCystSize.length==`0`">無</div>
        <div class="table-title" v-else>
          <div class="tablevue" v-for="(item, key) in renalCystSize" :key="key">
            {{ item }},
          </div>
        </div>
      </div>
      <div class="table">
        <div class="table-title">腎水泡部位</div>
        <div class="tablevue" v-if="renalCystLocation.length==`0`">無</div>
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
        <div class="tablevue" v-if="renalCystMorphProgression.length==`0`">無</div>
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
        <div class="tablevue" v-if="diseaseName.length==`0`">無</div>
        <div class="table-title" v-else>
          <div class="tablevue" v-for="(item, key) in diseaseName" :key="key">
            {{ item }},
          </div>
        </div>
      </div>
      <div class="tableA">
        <div class="table-title">疾病部位</div>
        <div class="tablevue" v-if="diseaseLocation.length==`0`">無</div>
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

.d-input:checked ~ .d-input__left_kidney_size {
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
      result: {},
      renalCystSize: [],
      renalCystMention: [],
      renalCystAmount: [],
      renalCystLocation: [],
      diseaseName: [],
      diseaseLocation: [],
      renalCystMorphProgression: [],
      size: [],
      isLoading: false,
      color: "#038686",
      backgroundColor: "#D8D8D8",
      loader: "dots",
    };
  },
  mounted() {
    this.isLoading = true;
    const dataUrl = `http://iasl.asia.edu.tw:8082/api?text=${this.id}`;
    this.$http
      .get(`${dataUrl}`)
      .then((res) => {
        console.log("res.data", res.data);
        this.result = res.data.result;
        //取每項資料
        var Total = res.data.result.length;
        for (var i = 0; i < Total; i++) {
          if (res.data.result[i].tag == "renal_cyst_size") {
            //腎水泡大小
            this.renalCystSize.push(
              this.id.substring(
                //取腎水泡大小
                res.data.result[i].start,
                res.data.result[i].end
              )
            );
          }
          if (res.data.result[i].tag == "renal_cyst_mention") {
            //腎水泡名稱
            this.renalCystMention.push(
              this.id.substring(
                //取腎水泡名稱
                res.data.result[i].start,
                res.data.result[i].end
              )
            );
          }
          if (res.data.result[i].tag == "renal_cyst_amount") {
            //腎水泡數量
            this.renalCystAmount.push(
              this.id.substring(
                //取腎水泡數量
                res.data.result[i].start,
                res.data.result[i].end
              )
            );
          }
          if (res.data.result[i].tag == "renal_cyst_location") {
            //腎水泡部位
            this.renalCystLocation.push(
              this.id.substring(
                //取腎水泡部位
                res.data.result[i].start,
                res.data.result[i].end
              )
            );
          }
          if (res.data.result[i].tag == "disease_name") {
            //疾病名稱
            this.diseaseName.push(
              this.id.substring(
                //取疾病名稱
                res.data.result[i].start,
                res.data.result[i].end
              )
            );
          }
          if (res.data.result[i].tag == "disease_location") {
            //疾病部位
            this.diseaseLocation.push(
              this.id.substring(
                //取疾病部位
                res.data.result[i].start,
                res.data.result[i].end
              )
            );
          }
          if (res.data.result[i].tag == "renal_cyst_morph_progression") {
            //腎水泡特徵
            this.renalCystMorphProgression.push(
              this.id.substring(
                //取腎水泡特徵
                res.data.result[i].start,
                res.data.result[i].end
              )
            );
          } else {
            this.size.push(
              this.id.substring(
                //取腎大小
                res.data.result[i].start,
                res.data.result[i].end
              )
            );
          }
        }
        console.log(this.id.substring(95, 112));
        this.isLoading = false;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
