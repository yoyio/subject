<template>
  <!--A-->
  <div class="container">
    <div class="A">
      <div class="A-tltie">
        <h1 class="banner-title" style="font-weight: 800" data-aos="fade-right">
          整理您的工作﹑整頓您的生活
        </h1>
        <p style="color: #000; margin-top: 20px" data-aos="fade-right" data-aos-duration="600" data-aos-delay="100">
          自動標記﹑分類詞彙、清楚的視覺化分析，輕鬆處理任何專案。
        </p>
        <RouterLink to="/tool" class="action" style="margin-top: 20px" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200"
          >開始使用</RouterLink
        >
      </div>
      <div class="A-text">
        <div class="A-img" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="false"></div>
        <div class="A-z" data-aos="fade-right" data-aos-duration="1500" data-aos-once="false"></div>
        <div class="A-y" data-aos="fade-left" data-aos-duration="1300" data-aos-once="false"></div>
      </div>
    </div>
  </div>

  <!--B-->
  <div class="bb">
    <div class="B">
      <div class="B-tltie" data-aos="fade-right" data-aos-duration="1000">
        <h1 style="font-weight: 800; font-size: 50px">技術</h1>
      </div>
      <div class="B-text" data-aos="zoom-in" data-aos-duration="1000">
        <p style="color: #000; padding: 10px 30px">
          實驗室與許聞廉教授合作，應用獨有的統計式準則模型暨語意簡化法(Statistical
          Principle-based Approach & Reduction
          algorithm,SPBAR)於電子病歷，建構電子病歷之個人資料去識別化和擷取電子病歷內容實體辨識以及關聯。SPBAR依靠直觀自然語言知識以及可解釋性的推理過程擷取非結構化知識。我們應用SPBAR方法已開發腎臟超音波報告結構化擷取工具，提供醫師或研究人員可透過非結構化數據轉語意結構化工具，擷取相關語意結構化的數據，便於進行數據科學、機器學習以及其他醫療分析應用。開發非結構化數據轉語意結構化工具已No-Code方式開發，使用者可以輕鬆應用，將非結構化資料自動轉成據語意結構化資料，也可供醫院使用API方式使用衍生更多智慧輔助醫療決策的系統開發。此工具大幅縮滅醫師學習歷程和研究人員學習成本，協助產生更多醫療臨床研究成果，進而促進臨床決策。通過對資料進行分類和結構化，醫療專業人員可以更清楚地瞭解
          報告中包含的資訊，並能更容易地識別可能被忽視的模式和關聯。這
          使他們更容易對病人的治療和護理做出正確的決定，為病人帶來更為
          準確的治療。
        </p>
      </div>
    </div>
  </div>

  <!--C-->
  <div class="container">
    <div class="C">
      <div class="C-tltie" data-aos="zoom-in" data-aos-duration="600">
        <h1 style="font-weight: 800; font-size: 50px">優勢</h1>
        <p style="font-size: 18px">
          -快速有效地分析資料，並對病人的診斷和治療做出明智的決定
        </p>
      </div>
      <div class="C-text">
        <div class="C-p" style="background-color: #038686" data-aos="fade-right" data-aos-duration="1000">
          <h2> <font-awesome-icon icon="circle-check" style="margin: 0px 10px" /></h2>
          <p class="ctx">提高報告的準確性</p>
        </div>
        <div class="C-p" style="background-color: #bc9d85" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          <h2>
            <font-awesome-icon icon="chart-pie" style="margin: 0px 10px" />
          </h2>
          <p class="ctx">清楚的視覺化分析</p>
        </div>
        <div class="C-p" style="background-color: #5c59c1" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
          <h2>
            <font-awesome-icon icon="arrow-up-right-dots" style="margin: 0px 10px" />
          </h2>
          <p class="ctx">提高效率</p>
        </div>
        <div class="C-p" style="background-color: #ff8080" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
          <h2>
            <font-awesome-icon icon="thumbs-up" style="margin: 0px 10px" />
          </h2>
          <p class="ctx">改善診斷和治療</p>
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
  font-size: 1.3rem;
  padding: 0.25rem 1rem;
  transition: all 0.1s linear;
  width: 30%;
  height: 50px;
  line-height: 40px;
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

.A-tltie {
  text-align: center;
}

.A-text {
  background-color: #038686;
  width: 380px;
  height: 380px;
  margin: 50px auto;
  border-radius: 50%;
}

.A-img {
  background-image: url("../assets/3.png");
  width: 100%;
  height: 300px;
  position: relative;
  top: 20px;
}

.A-z {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: relative;
  background-color: #5c59c1;
}

.A-y {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: relative;
  top: -350px;
  right: -350px;
  background-color: #5c59c1;
}

/*B*/
.bb {
  width: 100%;
  background-color: #5c59c1;
}
.B {
  margin: 80px auto;
  padding-bottom: 50px;
  width: 85%;
  color: #fff;
}

.B-tltie {
  padding: 30px 10%;
}

.B-text {
  background-color: #fff;
  border-radius: 0.3rem;
  width: 80%;
  margin: 0px auto;
  line-height: 30px;
}

/*C*/
.C {
  margin: 80px auto;
  width: 100%;
}

.C-p {
  margin: 20px 0px;
  border-radius: 0.3rem;
  color: #fff;
  display: flex;
  align-items: center;
}

/*footer*/
.footer {
  text-align: center;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #038686;
  color: #ffffff;
}

/* 電腦版樣式 */
@media screen and (min-width: 768px) {
  /*A*/
  .A {
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .A-tltie {
    width: 45%;
  }

  .B-tltie {
    font-size: 24px;
  }

  /*C*/
  .C-tltie {
    font-size: 24px;
  }

  .C-text {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
  }

  .C-p {
    flex-direction: column;
    justify-content: flex-start;
    width: 23%;
    height: 100px;
    padding: 10px 0px;
  }
  .ctx {
    margin-top: 10px;
  }
}
</style>
