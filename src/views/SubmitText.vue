<template>
  <!--A-->
  <div class="container">
    <div class="A">
      <div class="results-text" id="show" style="overflow-y: auto">
        <p class="results">{{ result }}</p>
      </div>
      <!--標籤-->
      <div class="label-area" id="labelArea">
        <label style="margin-right: 0%; padding: 1px 8px">
          <input type="checkbox" class="d-input" />
          <span id="left_kidney_size" class="d-input__left_kidney_size"
            >left_kidney_size</span
          >
        </label>
        <label style="margin-right: 0%; padding: 1px 8px">
          <input type="checkbox" class="d-input" />
          <span class="d-input__right_kidney_size" id="right_kidney_size"
            >right_kidney_size</span
          >
        </label>
        <label style="margin-right: 0%; padding: 1px 8px">
          <input type="checkbox" class="d-input" />
          <span id="graft_kidney_size" class="d-input__graft_kidney_size"
            >graft_kidney_size</span
          >
        </label>
        <label style="margin-right: 0%; padding: 1px 8px">
          <input type="checkbox" class="d-input" />
          <span id="renal_cyst_mention" class="d-input__renal_cyst_mention"
            >renal_cyst_mention</span
          >
        </label>
        <label style="margin-right: 0%; padding: 1px 8px">
          <input type="checkbox" class="d-input" />
          <span id="renal_cyst_amount" class="d-input__renal_cyst_amount"
            >renal_cyst_amount</span
          >
        </label>
        <label style="margin-right: 0%; padding: 1px 8px">
          <input type="checkbox" class="d-input" />
          <span id="renal_cyst_size" class="d-input__renal_cyst_size"
            >renal_cyst_size</span
          >
        </label>
        <label style="margin-right: 0%; padding: 1px 8px">
          <input type="checkbox" class="d-input" />
          <span id="renal_cyst_location" class="d-input__renal_cyst_location"
            >renal_cyst_location</span
          >
        </label>
        <label style="margin-right: 0%; padding: 1px 8px">
          <input type="checkbox" class="d-input" />
          <span id="disease_name" class="d-input__disease_name"
            >disease_name</span
          >
        </label>
        <label style="margin-right: 0%; padding: 1px 8px">
          <input type="checkbox" class="d-input" />
          <span id="disease_location" class="d-input__disease_location"
            >disease_location</span
          >
        </label>
        <label style="margin-right: 0%; padding: 1px 8px">
          <input type="checkbox" class="d-input" />
          <span
            id="renal_cyst_morph_progression"
            class="d-input__renal_cyst_morph_progression"
            >renal_cyst_morph_progression</span
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
        <div class="table-title">eft_kidney_size</div>
        <div class="table-title">123456</div>
      </div>
      <div class="tableA">
        <div class="table-title">right_kidney_size</div>
        <div class="table-title">123456</div>
      </div>
      <div class="table">
        <div class="table-title">graft_kidney_size</div>
        <div class="table-title">123456</div>
      </div>
      <div class="tableA">
        <div class="table-title">renal_cyst_mention</div>
        <div class="table-title">123456</div>
      </div>
      <div class="table">
        <div class="table-title">renal_cyst_amount</div>
        <div class="table-title">123456</div>
      </div>
      <div class="tableA">
        <div class="table-title">renal_cyst_size</div>
        <div class="table-title">123456</div>
      </div>
      <div class="table">
        <div class="table-title">renal_cyst_location</div>
        <div class="table-title">123456</div>
      </div>
      <div class="tableA">
        <div class="table-title">disease_name</div>
        <div class="table-title">123456</div>
      </div>
      <div class="table">
        <div class="table-title">disease_location</div>
        <div class="table-title">123456</div>
      </div>
      <div class="tableA">
        <div class="table-title">renal_cyst_morph_progression</div>
        <div class="table-title">123456</div>
      </div>
    </div>
    <!-- <div class="table">
      <div class="table-title">eft_kidney_size</div>
      <div class="table-title">123456</div>
      <div class="table-title">right_kidney_size</div>
      <div class="table-title">123456</div>
      <div class="table-title">graft_kidney_size</div>
      <div class="table-title">123456</div>
      <div class="table-title">renal_cyst_mention</div>
      <div class="table-title">123456</div>
      <div class="table-title">renal_cyst_amount</div>
      <div class="table-title">123456</div>
    </div>

    <div class="table">
      <div class="table-title">renal_cyst_size</div>
      <div class="table-title">123456</div>
      <div class="table-title">renal_cyst_location</div>
      <div class="table-title">123456</div>
      <div class="table-title">disease_name</div>
      <div class="table-title">123456</div>
      <div class="table-title">disease_location</div>
      <div class="table-title">123456</div>
      <div class="table-title">renal_cyst_morph_progression</div>
      <div class="table-title">123456</div>
    </div> -->
  </div>

  <!-- contact -->
  <div class="contact">
    <RouterLink to="/tool" class="about-button">
      <font-awesome-icon icon="arrow-left" style="color: #fff;"/>
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
  max-width: 900px;
  margin: 0px auto;
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
  margin-bottom: 0px;
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
  background-color: #000;
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
export default {
  data () {
    return {
      resultsOB: {},
      results: {},
      result: {}
    }
  },
  mounted () {
    const dataUrl = 'http://iasl.asia.edu.tw:8082/api?text=欲查詢內容'

    this.$http
      .get(`${dataUrl}`)
      .then((res) => {
        this.resultsOB = res.data
        this.results = { ...this.resultsOB }
        this.result = this.results.data.text
        console.log(this.result)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>
