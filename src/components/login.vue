<template>
  <div class="tt">
    <!-- 主体 -->
    <div class="main">
      <!-- 图标 -->
      <div class="img">
        <img src="../assets/logo.ed9aba4f.png" />
      </div>
      <!-- 登录注册 -->
      <div class="zhuti">
        <div class="myZhuti">
          <p class="font">全国第六届大学生艺术展演活动</p>
          <p class="fonts">SI CHUAN 2021</p>
        </div>
        <div class="myzhutis">
          <el-form
            ref="form"
            :model="loginFrom"
            label-width="80px"
            :rules="loginRules"
          >
            <el-form-item prop="username">
              <el-input
                v-model="loginFrom.username"
                prefix-icon="el-icon-user"
                placeholder="请输入账号"
              ></el-input>
            </el-form-item>
          </el-form>
          <el-form
            ref="form"
            :model="loginFrom"
            label-width="80px"
            :rules="loginRules"
          >
            <el-form-item prop="password">
              <el-input
                v-model="loginFrom.password"
                prefix-icon="el-icon-lock"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary" round @click="login()">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginFrom: {
        username: "",
        password: "",
      },
      loginRules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 4, max: 20, message: "长度在 8 到 20个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    login() {
      this.$router.replace('/home')
    }
  },
};
</script>
<!-- scped表示的这个样式不会与其他的发生冲突 -->
<style>
.font {
  font-size: 29px;
  background-image: linear-gradient(to right, #8741ff, #84a8f7);
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.fonts{
margin-top: 20px;
color:#6513f3 ;

}
.zhuti {
  width: 70%;
  height: 100%;
  position: relative;
}
.el-form-item__content {
  margin-left: 0 !important;
}

.myZhuti {
  width: 80%;
  height: 20%;
  position: absolute;
  top: 10%;
  left: 3%;
  text-align: center;
}

.myzhutis {
  width: 50%;
  height: 40%;
  position: absolute;
  top: 40%;
  left: 19%;
  text-align: center;
}
.tt {
  background-image: url("../assets/yi.png");
  background-size: 100% 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main {
  height: 400px;
  width: 750px;
  background-color: white;
  border-radius: 25px;
  display: flex;
  justify-content: space-between;
  box-shadow:3px 3px #8741ff;
  margin-left: 6px;
  margin-right: 6px;
}
.img {
  width: 30%;
  height: 100%;
position: relative;
}
.img img {
position: absolute;
top: 25%;
left: 30%;
  height: auto;
  width: auto\9;
  width: 80%;
}
</style>