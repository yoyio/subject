<template>
  <div class="container">
    <!-- A -->
    <h3
      class="banner-title"
      style="font-weight: 800; text-align: center; padding: 150px 0px 50px 0px"
    >
      亞洲大學-精準健康研究中心
    </h3>
    <div class="A" data-aos="zoom-in-up" data-aos-duration="1000">
      <div class="A-tltie">
        <div class="A-img"></div>
      </div>
      <div class="A-text">
        <div class="A-z">
          本中心以精準營養健康為主要產業發展核心，透過智慧健康產業技術研發與人才培育及軟體
          平台開發為導向；應用人工智慧、生物資訊、自然語言處理和霎端運算於健康營養產業；整合與分析精準營養大數據、建立混合式雲端健康平台、協助資訊安全等，引領台灣智薏精準營養健康產業及永續城市1社區之發展。
        </div>
        <div class="A-y">
          整合醫療大數據與人工智慧，達成精準醫療之目的。精準醫療是未來新的醫療模式，透過醫療大數據之整合基因檢測、疾病治療、日常活動、癒後追蹤等數據，結合人工智慧能協助臨床醫生準確地選擇出適合病人的標靶藥物及相關治療方案，如此一來，不但能降低罹病風險，更可達到預防疾病發生的機會，更有機會提高病人存活率。
          本研究中心研究主題包括：應用人工智慧與大數據於•
          大數據於基因體分析、表觀基因體分析、微生物體體群分析及抗癌藥物的開發，以及開發精準醫療智慧報告系統。
        </div>
      </div>
    </div>
    <hr/>
    
    <!-- B -->
    <h3
      class="banner-title"
      style="font-weight: 800; text-align: center; padding: 50px 0px 50px 0px"
    >
      專案負責人
    </h3>
    <div class="B">
      <div class="B-tltie" data-aos="flip-left" data-aos-duration="1000">
        <div class="card" style="width: 20rem">
          <div class="BB-img"></div>
          <div class="card-body">
            <p class="card-text">王昭能教授</p>
            <p class="card-text">cnwang@asia.edu.tw</p>
          </div>
        </div>
      </div>
      <div class="B-text"  data-aos="flip-right" data-aos-duration="1000">
        <div class="card" style="width: 20rem">
          <div class="bb-img"></div>
          <div class="card-body">
            <p class="card-text">許聞廉教授</p>
            <p class="card-text">hsu@iis.sinica.edu.tw / wenhsu@asia.edu.tw</p>
          </div>
        </div>
      </div>
    </div>
    <hr/>
    <!-- C -->
    <h3
      class="banner-title"
      style="font-weight: 800; text-align: center; padding: 50px 0px 50px 0px"
    >
      開發人員
    </h3>
    <div class="C" style="margin-bottom: 20px">
      <div class="card" style="width: 10rem" data-aos="zoom-in" data-aos-duration="1000">
        <div class="card-body" style="text-align: center">
          <h5 class="card-title">王善政</h5>
        </div>
      </div>
      <div class="card" style="width: 10rem" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
        <div class="card-body" style="text-align: center">
          <h5 class="card-title">張逢恩</h5>
        </div>
      </div>
      <div class="card" style="width: 10rem" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
        <div class="card-body" style="text-align: center">
          <h5 class="card-title">張致瑋</h5>
        </div>
      </div>
      <div class="card" style="width: 10rem" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
        <div class="card-body" style="text-align: center">
          <h5 class="card-title">楊逸凡</h5>
        </div>
      </div>
    </div>
  </div>
  <!-- footer -->
    <div class="footer" id="footer">
      <div class="footer-logo">
        <p>精準健康研究中心-亞洲大學</p>
      </div>
    </div>
</template>

<style scoped>
.A {
  width: 95%;
  margin: 0px auto;
}
.A-img {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 40vh;
  margin-bottom: 20px;
  background-image: url(https://www.asia.edu.tw/uploads/asset/data/61c1e6878199fbf80ea9e204/yard0.jpg);
}
.A-text {
  padding: 0px 0px 0px 20px;
}

.B {
  width: 95%;
  margin: 0px auto;
}
.card {
  margin: 0px auto;
  margin-bottom: 20px;
}
.BB-img {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 50vh;
  background-image: url(https://bime.asia.edu.tw/uploads/member_profile/avatar/605051d5063ca240390000a3/%E7%8E%8B%E6%98%AD%E8%83%BD___Charles_C.N._Wang.jpg);
}
.bb-img {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 50vh;
  background-image: url(https://pairlabs.ai/wp-content/uploads/2020/06/photo-20.jpg);
}

.C {
  width: 95%;
  margin: 0px auto;
  display: inline-flex;
  flex-wrap: wrap;
}

/*footer*/
.footer {
  margin-top: 50px;
  text-align: center;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #038686;
  color: #ffffff;
}
hr{
  transform:rotate(0deg);
  margin-top: 100px;
  color: #038686;
}

@media screen and (min-width: 768px) {
  /*A*/
  .A {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .A-tltie {
    width: 100%;
  }
  .A-text {
    padding: 0px 0px 0px 20px;
    width: 100%;
  }
  .B {
    display: grid;
    grid-template-columns: 20rem 20rem;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
