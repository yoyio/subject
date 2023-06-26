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
          隨著智慧醫療的普及，病歷結構化技術的應用日益受到關注。病歷結構化旨在將非結構化的醫療文本轉換為結構化數據，以實現有效的存儲、檢索和分析醫學資訊的目的。為了實現系統的核心功能，本團隊採用以知識為本體的架構，結合深度學習中的雙向長短期記憶(BiLSTM)和條件隨機場演算法(CRF)作為系統核心設計概念，並以此辨識醫療報告中常見的命名實體。

在病歷結構化的過程中，首先運用預定義的規則來識別和標記病歷中的特定元素，例如症狀、診斷、疾病等。這些規則基於醫學知識和醫學文本的特徵，可以有效地捕捉到常見的醫學實體。接著，針對未被規則標記的文本內容，我們運用深度學習模型中的BiLSTM和CRF進行系統學習訓練和預測。該模型能夠捕捉醫學實體之間的關聯性和內在語意，並利用上下文資訊來推斷其正確的類別和屬性，進一步提高結構化的準確性和廣度。

除此之外，我們從UMLS (Unified Medical Language System)資料庫中擷取相關的醫學詞彙，包括疾病名稱，並整合為系統後端支援的知識圖譜。知識圖譜的建立是基於許聞廉教授團隊開發的InformapJ知識庫(Knowledge Base)管理平台。該平台為系統提供了堅實的開發基礎，讓生醫語意分析師能夠透過簡易的編輯介面有效地管理和組織醫學相關的知識和資訊，從而增強系統在醫學知識管理和分析方面的能力。

深度學習模型在識別實體方面雖然具有優越性能，但難免會出現例外情況。因此，我們導入基於語言學特徵的審查模組，對識別後的實體進行驗證。這些特徵包含詞彙上下文關係、語法結構、專有名詞規則等。透過將這些特徵應用於識別結果，我們能夠排除潛在的例外情況，提高識別結果的準確性和一致性。以腎臟病歷報告的辨識為例，系統當前可針對病徵、病程以及基本進行有效辨識達90% F1-score。

本團隊開發的病歷結構化工具充分整合了規則蘊含的準確性以及統計模型的彈性優勢，進而提高病歷結構化的精度和召回率，為醫療機構提供更準確、全面且易於管理的醫學資訊，包括醫療病史、診斷結果和治療計畫，從而促進臨床決策的準確性和效率。
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
