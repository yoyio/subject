<template>
  <!--A-->
  <div class="container">
    <div class="A">
      <div class="A-tltie">
        <h1 class="banner-title" style="font-weight: 800;">整理您的工作﹑整頓您的生活</h1>
        <p style="color: #000;margin-top: 20px;">自動標記﹑分類詞彙、清楚的視覺化分析，輕鬆處理任何專案。</p>
        <RouterLink to="/tool" class="action" style="margin-top: 20px;">開始使用</RouterLink>
      </div>
      <div class="A-text">
        <div class="A-img"></div>
        <div class="A-z"></div>
        <div class="A-y"></div>
      </div>
    </div>
  </div>

  <!--B-->
    <div class="B">
      <div class="B-tltie">
        <h1 style="font-weight: 800;font-size: 50px;">關於</h1>
      </div>
      <div class="B-text">
        <p style="color: #000; padding:10px 30px;">與許聞廉教授合作，應用獨有的統計式準則模型暨語意簡化法(Statistical Principle-based Approach & Reduction algorithm,SPBAR)於電子病歷，建構電子病歷之個人資料去識別化和擷取電子病歷內容實體辨識以及關聯。</p>
        <p style="color: #000; padding:10px 30px;">SPBAR依靠直觀自然語言知識以及可解釋性的推理過程擷取非結構化知識。我們應用SPBAR方法已開發腎臟超音波報告結構化擷取工具，提供醫師或研究人員可透過非結構化數據轉語意結構化工具，擷取相關語意結構化的數據，便於進行數據科學、機器學習以及其他醫療分析應用。</p>
        <p style="color: #000; padding:10px 30px;">開發非結構化數據轉語意結構化工具已No-Code方式開發，使用者可以輕鬆應用，將非結構化資料自動轉成據語意結構化資料，也可供醫院使用API方式使用衍生更多智慧輔助醫療決策的系統開發。此工具大幅縮滅醫師學習歷程和研究人員學習成本，協助產生更多醫療臨床研究成果，進而促進臨床決策。</p>
      </div>
    </div>

  <!--C-->
  <div class="container">
    <div class="C">
      <div class="C-tltie">
        <h1 style="font-weight: 800;font-size: 50px;">優勢</h1>
      </div>
      <div class="C-text">
        <div class="C-p" style="background-color: #038686">
          <h2>1 <font-awesome-icon icon="pen" style="margin:0px 10px;"/></h2>
          <p class="ctx">自動標記﹑分類詞彙</p>
        </div>
        <div class="C-p" style="background-color: #bc9d85">
          <h2>2 <font-awesome-icon icon="palette" style="margin:0px 10px;"/></h2>
          <p class="ctx">清楚的視覺化分析</p>
        </div>
        <div class="C-p" style="background-color: #5c59c1">
          <h2>3 <font-awesome-icon icon="thumbs-up" style="margin:0px 10px;"/></h2>
          <p class="ctx">處理任何專案都游刃有餘</p>
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
  background-image: url("../assets/1.png");
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
.B {
  margin: 80px 0px 0px 0px;
  padding-bottom: 50px;
  width: 100%;
  background-color: #5c59c1;
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
  padding: 0px 10px;
  align-items: center;
}

/*footer*/
.footer {
  text-align: center;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #000;
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
    width: 30%;
    height: 100px;
    padding: 10px 0px;
  }
  .ctx{
    margin-top: 10px;
  }
}
</style>
