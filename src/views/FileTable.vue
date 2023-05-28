<template>
  <!--B-->
  <div class="container" >
    <div class="B">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col" width="220">#</th>
            <th scope="col" width="650">名稱</th>
            <th scope="col" width="0"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, key) in products"
            :key="key"
            style="height: 30px; line-height: 30px"
          >
            <th scope="row">{{ item.id }}</th>
            <td>第{{ item.id }}篇名稱</td>
            <td>
              <RouterLink :to="`/submitFile/${item.id}`" class="sel"
                >查看</RouterLink
              >
            </td>
          </tr>
        </tbody>
      </table>
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

/**/
.sel {
  color: white;
  text-align: center;
  background: #5c59c1;
  border-radius: 0.25rem;
  display: inline-block;
  font-size: 1rem;
  padding: 0.25rem 1rem;
  transition: all 0.1s linear;
  margin-left: 20px;
  /* 陰影 */
  -webkit-box-shadow: 0px 1px 5px 0px rgba(87, 87, 87, 1);
  -moz-box-shadow: 0px 1px 5px 0px rgba(87, 87, 87, 1);
  box-shadow: 0px 1px 5px 0px rgba(87, 87, 87, 1);
}
.sel:hover {
  transform: translateY(-5px);
  transition-duration: 0.3s;
  background: #267c99;
}

.num {
  margin-top: 50px;
  padding-left: 20px;
  font-size: 24px;
  color: #038686;
}
/*B*/
.B{
  padding-top: 100px;
  min-height: 90vh;
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
</style>

<script>
export default {
  data() {
    return {
      resultsOB: {},
      results: {},
      result: {},
      products: [
        {
          id: "1",
          text: "111",
        },
        {
          id: "2",
          text: "222",
        },
        {
          id: "3",
          text: "333",
        },
        {
          id: "4",
          text: "444",
        },
        {
          id: "5",
          text: "555",
        },
        {
          id: "6",
          text: "666",
        },
        {
          id: "7",
          text: "777",
        },
        {
          id: "8",
          text: "888",
        },
        {
          id: "9",
          text: "999",
        },
        {
          id: "10",
          text: "101010",
        },
      ],
      ulid: "",
    };
  }
};
</script>
