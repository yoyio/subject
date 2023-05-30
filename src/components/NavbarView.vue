<template>
  <!--導覽列-->
  <header>
    <RouterLink to="/" class="navbar-brand">腎臟超音波病歷結構化</RouterLink>
    <!--加上導覽列-->
    <input type="checkbox" class="navbar-toggle" id="navbar-toggle" />
    <label class="navbar-toggle-label" for="navbar-toggle">
      <!--增加 span 標籤，並用中文字「三」暫時 demo 效果-->
      <span class="hamburger"></span>
    </label>
    <nav class="nav navbar-light">
      <ul class="nav-list">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link">首頁</RouterLink>
        </li>
        <li class="nav-item"><RouterLink to="/tool" class="nav-link">工具</RouterLink></li>
        <li class="nav-item">
          <RouterLink to="/about" class="nav-link">關於我們</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
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

/*header*/
header {
  width: 100%;
  height: 60px;
  text-align: center;
  background: #ffffff;
  /* 陰影 */
  -webkit-box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
  /*固定置頂*/
  position: fixed;
  z-index: 999;
}

.nav {
  position: absolute;
  top: 100%;
  /*置於父元素正下方*/
  width: 100%;
  background: #fff;
  transition: transform 0.3s ease-out;
  transform-origin: top;
  transform: scale(1, 0);
}

.navbar-brand {
  color: #038686;
  /*5c59c1*/
  font-size: 1.5rem;
  font-weight: 700;
  /*與外層 Header 高度相同達到垂直置中*/
  line-height: 60px;
}

.nav-item {
  margin: 1.4rem 0;
  /*預設透明度 0*/
  opacity: 0;
  text-align: center;
}
.nav-list{
  width: 100%;
}
.nav-link {
  color: #038686;
}

.navbar-toggle:checked~.nav {
  transform: scale(1, 1);
}

.navbar-toggle:checked~.nav .nav-item {
  /*增加轉場效果*/
  transition: opacity 0.2s ease-out 0.15s;
  /*開啟時透明度為1*/
  opacity: 1;
}

.navbar-toggle-label {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 7.5%;
  display: flex;
  align-items: center;
}

.navbar-toggle {
  visibility: hidden;
  position: absolute;
}

.hamburger {
  position: relative;
}

.hamburger,
.hamburger::before,
.hamburger::after {
  width: 30px;
  height: 3px;
  background: #038686;
}

.hamburger::before,
.hamburger::after {
  position: absolute;
  left: 0;
  /*給一個空的內容*/
  content: "";
}

.hamburger::before {
  top: 8px;
}

.hamburger::after {
  bottom: 8px;
}
.nav-link {
  color: #038686;
}
.nav-link:hover{
  color: #000;
}

.navbar-light .navItem.active .nav-link,
.navbar-light .navItem .nav-link:active,
.navbar-light .navItem .nav-link:focus,
.navbar-light .navItem:hover .nav-link {
    color: #000;
}

/* 電腦版樣式 */
@media screen and (min-width: 768px) {

  /*header*/
  /*移除漢堡排*/
  .navbar-toggle-label {
    display: none;
  }

  /*導覽列 CSS 樣式設定復原*/
  .nav {
    all: unset;
  }

  /*導覽項目 CSS 樣式設定復原*/
  .nav-item {
    margin: 0;
    opacity: 1;
  }

  .navbar-brand {
    grid-column: 2 / 3;
  }

  .nav {
    all: unset;
    grid-column: 3 / 4;
  }

  .action {
    font-size: 1.2rem;
    padding: 0.75rem 2rem;
  }

  header {
    display: grid;
    grid-template-columns: 1fr auto minmax(63%, 2fr) 1fr;
  }

  .nav-list {
    height: 100%;
    display: grid;
    grid-auto-flow: column;
    justify-content: end;
    align-items: center;
    grid-gap: 2rem;
  }
}
</style>
