<template>
  <!--tool-->
  <div class="container">
    <!-- TEXT -->
    <div class="tool" data-aos="zoom-in">
      <div
        class="text-title"
        style="
          font-size: 32px;
          margin-bottom: 20px;
          color: #038686;
          font-weight: bold;
        "
      >
        上傳病歷-
      </div>
      <form action="" id="" method="post" target="id_iframe">
        <div class="form-control-a">
          <textarea
            class="form-control"
            id="text-input"
            name="text-input"
            rows="15"
            cols="50"
            required="true"
            placeholder="Right kidney :
Length : 9.57 cm
Cortical echogenicity : Gr 1
Parenchymal thickness : normal
Renal sinus : no separation
Left kidney :
Length : 9.55 cm
Cortical echogenicity : Gr 1
Parenchymal thickness : normal
Renal sinus : no separation
Bladder : not fully distended
<Impression>
Parenchymal renal disease , bilateral
incomplete bladder study"
            v-model="text"
          ></textarea>
          <!-- <input class="action" type="button" id="button1" value="驗證" onclick="verify()"></input> -->
          <div class="bottom" style="margin-top: 20px">
            <RouterLink
              :to="`/submitText/${text}`"
              class="action"
              style="width: 20%; text-align: center"
              >送出</RouterLink
            >
            <div
              class="action"
              style="width: 20%; text-align: center"
              @click="deltext"
            >
              刪除
            </div>
          </div>
        </div>
      </form>
    </div>
    <hr style="margin: 80px 0px; color: #000" />
    <!-- file -->
    <div class="file" id="file" style="margin: 80px 0px" data-aos="zoom-in">
      <div
        class="file-title"
        style="
          font-size: 32px;
          margin-bottom: 20px;
          color: #038686;
          font-weight: bold;
        "
      >
        上傳檔案-
      </div>
      <div class="form-control-a">
        <form action="/upload" method="post" enctype="multipart/form-data">
          <input
            type="file"
            class="form-control-file"
            name="files"
            rows="20"
            cols="50"
            required="true"
            multiple="multiple"
            ref="files"
            aria-describedby="inputGroupFileAddon04"
            aria-label="Upload"
            @change="fileChange"
          />
          <div class="bottom" style="margin-top: 10px">
            <RouterLink
              :to="`/fileTable?id=${resdata}`"
              class="action"
              style="width: 20%; text-align: center"
              @click.prevent="postfile()"
              >送出</RouterLink
            >
            <div
              class="action"
              style="width: 20%; text-align: center"
              @click="delfile(e)"
            >
              刪除
            </div>
          </div>
        </form>
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

<script>
export default {
  data() {
    return {
      text: "",
      fileName: [],
      formData: new FormData(),
      resdata: {},
      datatext:{}
    };
  },
  methods: {
    deltext() {
      this.text = "";
    },
    delfile(e) {
      e.value = "";
    },
    fileChange(e) {
      for (var i = 0; i < e.target.files.length; i++) {
        const uploadedFile = this.$refs.files.files[i];
        this.fileName.push(uploadedFile.name)
        this.formData.append("files", e.target.files[i]); //用迴圈抓出多少筆再append回來
      }
      console.log(this.fileName);
      this.resdata=JSON.stringify(this.fileName)
    },
    postfile() {
      this.$http
        .post(`http://iasl.asia.edu.tw:8082/upload/`, this.formData)
        .then((res) => {
          console.log("up", res.data.result);
          this.datatext = { ...res.data.result };
          console.log("datatext", res.data.result[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
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

/*tool*/
.tool {
  padding-top: 100px;
  width: 100%;
}
.form-control-a {
  max-width: 100%;
  margin: 10px auto;
}

.form-control {
  width: 100%;
  margin: 0px auto;
  border-style: solid;
  border-color: #000;
  border-width: 1px;
}
.bottom {
  width: 100%;
  margin: 0px auto;
  display: inline-flex;
  justify-content: space-around;
}

.form-control-file {
  width: 100%;
  margin: 0px auto 10px auto;
  padding: 10px;
  height: 150px;
  background-color: #ffffff;
  border-style: solid;
  border-color: #000;
  border-width: 1px;
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
