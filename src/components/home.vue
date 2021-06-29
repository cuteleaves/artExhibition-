<template>
  <el-container class="home-container">
    <el-header>
      <div>
        <img src="https://z3.ax1x.com/2021/06/21/REnCng.png" />
        <p>全国第六届大学生艺术展演活动</p>
      </div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-col :span="24">
          <el-menu
            default-active="0"
            class="el-menu-vertical-demo"
            background-color="#5a3ac2"
            text-color="#fff"
            active-text-color="#ffd04b"
            :unique-opened="true"
          >
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <!-- 网上报名 -->
            <div class="line">
              <p>—— 网上报名 ——</p>
            </div>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>艺术表演类</span>
              </template>
              <el-menu-item index="2-1" @click="vocalistEnroll()">声乐作品报名</el-menu-item>
              <el-menu-item index="2-2" @click="instrumentalEnroll()">器乐作品报名</el-menu-item>
              <el-menu-item index="2-3" @click="danceEnroll()">舞蹈作品报名</el-menu-item>
              <el-menu-item index="2-4" @click="playEnroll()">戏剧作品报名</el-menu-item>
              <el-menu-item index="2-5" @click="recitationEnroll()">朗诵作品报名</el-menu-item>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>学生艺术作品类</span>
              </template>
              <el-menu-item index="3-1" @click="drawingEnroll()">绘画作品报名</el-menu-item>
              <el-menu-item index="3-2" @click="handwritingEnroll()">书法、篆刻作品报名</el-menu-item>
              <el-menu-item index="3-3" @click="shootEnroll()">摄影作品报名</el-menu-item>
              <el-menu-item index="3-4" @click="deviseEnroll()">设计作品报名</el-menu-item>
              <el-menu-item index="3-5" @click="movieEnroll()">微电影作品报名</el-menu-item>
            </el-submenu>

            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>高校校长作品类</span>
              </template>
              <el-menu-item index="4-1" @click="collegeDrawingEnroll()">绘画作品报名</el-menu-item>
              <el-menu-item index="4-2" @click="collegeHandweitingEnrol()">书法、篆刻作品报名</el-menu-item>
              <el-menu-item index="4-3" @click="collegeShootEnrol()">摄影作品报名</el-menu-item>
            </el-submenu>

            <el-menu-item index="5">
              <i class="el-icon-menu"></i>
              <span slot="title" @click="artWorkEnroll()">艺术实践工作坊</span>
            </el-menu-item>

            <el-menu-item index="6">
              <i class="el-icon-menu"></i>
              <span slot="title" @click="excellentEnroll()">优秀案例报名</span>
            </el-menu-item>

            <div class="line">
              <p>—— 报名信息 ——</p>
            </div>

            <el-menu-item index="7" @click="artPlaystatistics()">
              <i class="el-icon-menu"></i>
              <span slot="title">艺术表演类统计</span>
            </el-menu-item>

            <el-menu-item index="8" @click="studentStatistics()">
              <i class="el-icon-menu"></i>
              <span slot="title">学生艺术作品统计</span>
            </el-menu-item>

            <el-menu-item index="9" @click="collegeStatistics()">
              <i class="el-icon-menu"></i>
              <span slot="title">高校校长作品统计</span>
            </el-menu-item>

            <el-menu-item index="10" @click="artWorkStatistics()">
              <i class="el-icon-menu"></i>
              <span slot="title">艺术实践工作坊统计</span>
            </el-menu-item>

            <el-menu-item index="11" @click=" excellentStatistics()">
              <i class="el-icon-menu"></i>
              <span slot="title">优秀案例统计</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>
      <el-main>
        <!-- 顶部窗口区 -->
        <div class="windows" :style="{'height':(data != ''?'40px':'0')}">
          <el-row v-for="item in data" :key="item.name">
            <el-button type="primary" class="el-btn" size="mini" @click="windowRouter(item.routerName)">
              {{item.name}}
              <i class="el-icon-close" @click="konk(item.name)"></i>
            </el-button>
          </el-row>
        </div>
        <router-view class="main-height"></router-view>
        <div class="copyright">@copyright 第六届全国大学生艺术展演</div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  methods: {
    vocalistEnroll() {
      const routerName = {
        routerName: "/vocalistenroll",
        name: "声乐作品报名",
      };
      this.addName(routerName);
      this.$router.push("/vocalistenroll");
    },
    collegeDrawingEnroll(){
       const routerName = {
        routerName: "/collegeDrawingEnroll",
        name: "高校校长绘画作品报名",
      };
      this.addName(routerName);
      this.$router.push("/collegeDrawingEnroll");
    },
    collegeShootEnrol(){
       const routerName = {
        routerName: "/collegeShootEnrol",
        name: "高校校长摄影作品",
      };
      this.addName(routerName);
       this.$router.push("/collegeShootEnrol");
    },
    collegeHandweitingEnrol(){
       const routerName = {
        routerName: "/collegeHandweitingEnrol",
        name: "高校校长书法，篆刻作品报名",
      };
      this.addName(routerName);
      this.$router.push("/collegeHandweitingEnrol");
    },
    artWorkEnroll(){
       const routerName = {
        routerName: "/artWorkEnrol",
        name: "艺术实践工作坊",
      };
      this.addName(routerName);
  this.$router.push("/artWorkEnrol");
    },
    excellentEnroll(){
       const routerName = {
        routerName: "/excellentEnrol",
        name: "优秀案例报名",
      };
      this.addName(routerName);
      this.$router.push("/excellentEnrol");
    },
    instrumentalEnroll() {
      const routerName = {
        routerName: "/instrumentalEnroll",
        name: "器乐作品报名",
      };
      this.addName(routerName);
      this.$router.push("/instrumentalEnroll");
    },
    danceEnroll() {
      const routerName = {
        routerName: "/danceEnroll",
        name: "舞蹈作品报名",
      };
      this.addName(routerName);
      this.$router.push("/danceEnroll");
    },
    playEnroll() {
          const routerName = {
        routerName: "/playEnroll",
        name: "戏剧作品报名",
      };
      this.addName(routerName);
      this.$router.push("/playEnroll");
    },
    recitationEnroll() {
         const routerName = {
        routerName: "/recitationEnroll",
        name: "朗诵作品报名",
      };
      this.addName(routerName);
      this.$router.push("/recitationEnroll");
    },
    drawingEnroll() {
          const routerName = {
        routerName: "/drawingEnroll",
        name: "绘画作品报名",
      };
      this.addName(routerName);
      this.$router.push("/drawingEnroll");
    },   
    handwritingEnroll() {
          const routerName = {
        routerName: "/handwritingEnroll",
        name: "书法，篆刻作品报名",
      };
      this.addName(routerName);
      this.$router.push("/handwritingEnroll");
    },
    shootEnroll() {
          const routerName = {
        routerName: "/shootEnroll",
        name: "摄影作品报名",
      };
      this.addName(routerName);
      this.$router.push("/shootEnroll");
    },
    deviseEnroll() {
          const routerName = {
        routerName: "/deviseEnroll",
        name: "设计作品报名",
      };
      this.addName(routerName);
      this.$router.push("/deviseEnroll");
    },
    movieEnroll() {
          const routerName = {
        routerName: "/movieEnroll",
        name: "微电影作品报名",
      };
      this.addName(routerName);
      this.$router.push("/movieEnroll");
    },
    artPlaystatistics() {
          const routerName = {
        routerName: "/artPlaystatistics",
        name: "艺术表演统计作品报名",
      };
      this.addName(routerName);
      this.$router.push("/artPlaystatistics");
    },
    studentStatistics() {
          const routerName = {
        routerName: "/studentStatistics",
        name: "学生艺术作品作品报名",
      };
      this.addName(routerName);
      this.$router.push("/studentStatistics");
    },
    collegeStatistics() {
          const routerName = {
        routerName: "/collegeStatistics",
        name: "高校校长作品报名",
      };
      this.addName(routerName);
      this.$router.push("/collegeStatistics");
    },
    excellentStatistics() {
          const routerName = {
        routerName: "/excellentStatistics",
        name: "优秀案例统计",
      };
      this.addName(routerName);
      this.$router.push("/excellentStatistics");
    },
    artWorkStatistics() {
          const routerName = {
        routerName: "/artWorkStatistics",
        name: "艺术实践工作坊统计",
      };
      this.addName(routerName);
      this.$router.push("/artWorkStatistics");
    },
    //添加
    addName(obj) {
      if (this.data.length === 0) {
        this.data.push(obj);
      } else {
        for (let i = 0; i < this.data.length; i++) {
          if (this.data[i].name == obj.name) {
            return;
          }
        }
        this.data.push(obj);
      }
    },
    //删除
    konk(obj) {
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].name == obj) {
          this.data.splice(i,1)
          return;
        }
      }
    },
    windowRouter(id) {
      this.$router.push(id)
    }
  },
};
</script>

<style scoped>
.home-container {
  height: 100%;
}
ul li {
  list-style: none;
}
.el-header {
  background-color: #8b6fe9;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.el-header div {
  width: 400px;
  height: 100%;
}

.el-header img {
  margin-right: 10px;
  width: 50px;
  height: 50px;
}
.el-header p {
  color: white;
  font-size: 20px;
}
.el-header div {
  display: flex;
  justify-content: left;
  align-items: center;
}
.el-aside {
  background-color: #5a3ac2;
}

.el-main {
  background-color: #e5e7ec;
  padding: 0px;
}

.el-menu {
  border-right: 0px;
}

.line {
  width: 90%;
  margin: 0 auto;
  height: 35px;
  line-height: 35px;
  cursor: pointer;
  background-color: #d1c7f3;
  border-radius: 6px;
  transition: all 0.3s;
}

.line p {
  text-align: center;
  font-size: 17px;
  font-weight: 700;
  opacity: 0.5;
  color: #4219c7;
  font-family: SimHei Regular, SimHei Regular-Regular;
}

.windows {
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0px 5px #898989;
  min-width: 1000px;
  display: flex;
  line-height: 35px;
}

.copyright {
  width: 100%;
  background-color: #fff;
  min-width: 1000px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 15px;
  color: #c9c4c4;
  /* position: absolute; */
  /* bottom: 0; */
}

header {
  height: 70px !important;
}

.el-btn {
  margin-left: 10px;
  padding: 7px 8px;
}
</style>