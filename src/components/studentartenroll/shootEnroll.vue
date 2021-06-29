<template>
  <div class="home">
    <!-- 面包屑导航 -->
    <div class="nav">
      <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size:16px">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>学生艺术作品类</el-breadcrumb-item>
        <el-breadcrumb-item>摄影作品报名</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 内容主体区 -->
    <div class="homeContent">
      <div class="header">
        <span>摄影作品</span>
        <p>学生艺术作品需提交400字以内的创作说明（包括作品主题简介和创作过程介绍）。<br>
单张照和组照（每组不超过4幅，需标明顺序号）尺寸均为14英寸（30.48cm×35.56cm）；除影调处理外，不得利用电脑和暗房技术改变影像原貌。</p>
      </div>
      <!-- 表单区域 -->
      <div class="fromBady">
        <!-- 第一排 -->
        <el-form
          rel="form"
          class="demo-form-inline"
          :inline="true"
          label-width="80px"
          :rules="rules"
          :model="form"
        >
          <div class="leftForm">
            <el-form-item label="作品名称" label-width="100px" prop="art">
              <el-input v-model="form.art" class="layoutWidth" placeholder="请填写作品名称"></el-input>
            </el-form-item>
          </div>
          <div class="rightForm">
            <el-form-item label="指导教师" label-width="100px" prop="teacher">
              <el-input v-model="form.teacher" class="layoutWidth" placeholder="请填写作品指导老师姓名，仅限一人"></el-input>
            </el-form-item>
          </div>

         
        </el-form>
        <!-- 第二排 -->
        <el-form
          rel="form"
          class="demo-form-inline"
          :inline="true"
          label-width="80px"
          :rules="rules"
          :model="form"
        >
          <div class="leftForm">
            <el-form-item label="联系人姓名" label-width="100px" prop="username">
              <el-input v-model="form.username" class="layoutWidth" placeholder="请填写作品联系人姓名"></el-input>
            </el-form-item>
          </div>

           <div class="rightForm">
            <el-form-item label="联系人电话" label-width="100px" prop="phone">
              <el-input v-model="form.phone" class="layoutWidth" placeholder="请填写作品联系人电话"></el-input>
            </el-form-item>
          </div>


        </el-form>
        <!-- 第三排 -->
        <el-form
          rel="form"
          class="demo-form-inline"
          :inline="true"
          label-width="80px"
          :model="form"
         :rules="rules"
        >
          <div class="leftForm">
            <el-form-item label="联系地址" label-width="100px" prop="address">
              <el-input v-model="form.address" class="layoutWidth" placeholder="请填写作品联系地址"></el-input>
            </el-form-item>
          </div>


          <div class="rightForm">
            <el-form-item label="创作时间" label-width="100px" prop="time">
              <!-- <el-input v-model="form.time" class="layoutWidth" placeholder="请选择创作时间"></el-input>
               -->
              <div class="block">
                <el-date-picker
                v-model="form.value"
                type="datetime"
                placeholder="请选择创作时间">
                </el-date-picker>
            </div>
            </el-form-item>
          </div>

        </el-form>
        <!-- 第四排 -->
       
        <el-form rel="form" class="demo-form-inline" :inline="true" :rules="rules" :model="form">
           <div class="leftForm">
            <el-form-item label="作品形式" label-width="100px" prop="group1" >
              <el-select v-model="form.group1" class="layoutWidth">
                <el-option label="单张照" value="单张照"></el-option>
                <el-option label="组照" value="组照"></el-option>
              </el-select>
            </el-form-item>
          </div>

           <div class="rightForm">
            <el-form-item label="组别" label-width="100px" prop="group">
              <el-select v-model="form.group" class="layoutWidth">
                <el-option label="甲组（非专业组）" value="甲组（非专业组）"></el-option>
                <el-option label="乙组（专业组）" value="乙组（专业组）"></el-option>
              </el-select>
            </el-form-item>
          </div>
        </el-form>
       
        <!-- 第六排 -->
      <el-form rel="form" :inline="true" style="width:100%">
          <div class="leftForm5">
            <el-form-item label="上传作品" label-width="100px">
              <el-upload
                class="upload-demo"
                drag
                multiple
                action
                :show-file-list="false"
                :on-success="videoSuccess"
                :before-upload="videoBefore"
                :on-progress="videoProcess"
              >
                <video v-if="form.video" :src="form.video" controls="controls" class="upVideo">您的浏览器不支持视频播放</video>
                <i v-if="form.vide == ''" class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或
                  <em>点击上传</em>
                </div>
                <div
                  class="el-upload__tip"
                  slot="tip"
                  style="width:800px"
                >单张照尺寸均为14英寸（30.48cm×35.56cm）；除影调处理外，不得利用电脑和暗房技术改变影像原貌。作品的数码照片要求：JPG格式，大小不低于10M，分辨率达到300dpi</div>
              </el-upload>
            </el-form-item>
          </div>
        </el-form>
<!-- 第七排 -->

        <el-form rel="form" class="demo-form-inline" :inline="true"
          :model="form"
          :rules="rules" >
          <div class="leftForm">
            <el-form-item label="作者简介" label-width="100px" >
              <el-input
                type="textarea"
                v-model="form.desc"
                style="width:350px"
                :rows="10"
                maxlength="200"
                placeholder="请输入作者简介"
              ></el-input>
            </el-form-item>
          </div>
          <div class="rightForm">
            <el-form-item label="创作简介(包括作品主题简介和创作过程介绍)" label-width="100px" prop="desc">
              <el-input
                type="textarea"
                v-model="form.desc"
                style="width:350px"
                :rows="10"
                maxlength="200"
                placeholder="请输入创作简介"
              ></el-input>
            </el-form-item>
          </div>
        </el-form>
        <!-- 表格填写 -->
        <!-- 第一张表 -->
        <span class="tabbleName">作者信息</span>
        <ul class="tabbleNav">
          <li>
            <a>批量导入</a>
          </li>
          <li>
            <a>下载模板</a>
          </li>
          <li>
            <a @click="addTable1">添加一行</a>
          </li>
          <li>
            <a @click="clean1">清空</a>
          </li>
        </ul>
        <div class="addTable">
          <el-table :data="tableData1" border style="width: 100%">
            <el-table-column label="序号" width="100" show-overflow-tooltip>
              <template slot-scope="scope">
                <el-input v-model="scope.row.id" />
              </template>
            </el-table-column>
            <el-table-column label="姓名" width="150" show-overflow-tooltip>
              <template slot-scope="scope">
                <el-input v-model="scope.row.name"></el-input>
              </template>
            </el-table-column>
            <el-table-column label="身份证号" width="200" show-overflow-tooltip>
              <template slot-scope="scope">
                <el-input v-model="scope.row.ID"></el-input>
              </template>
            </el-table-column>
            <el-table-column label="名族" width="120" show-overflow-tooltip>
              <template slot-scope="scope">
                <el-input v-model="scope.row.nation"></el-input>
              </template>
            </el-table-column>
            <el-table-column label="年龄" width="120" show-overflow-tooltip>
              <template slot-scope="scope">
                <el-input v-model="scope.row.age"></el-input>
              </template>
            </el-table-column>
            <el-table-column label="性别" width="120" show-overflow-tooltip>
              <template slot-scope="scope">
                <el-input v-model="scope.row.sex"></el-input>
              </template>
            </el-table-column>
            <el-table-column label="所在地区" width="320" show-overflow-tooltip>
              <template slot-scope="scope">
                <el-input v-model="scope.row.erea"></el-input>
              </template>
            </el-table-column>
            <el-table-column label="所在院系/部门" min-width="320" show-overflow-tooltip>
              <template slot-scope="scope">
                <el-input v-model="scope.row.branch"></el-input>
              </template>
            </el-table-column>
          </el-table>
        </div>
       
      <!-- 底部区 -->
      <div class="footer">
        <span class="warning">请仔细阅读报名须知，确认无误后勾选报名须知，即可进行报名。</span>
        <div class="footerMiddle">
          <span>报名须知</span>
          <div class="middleWarning">
            <el-checkbox v-model="checked"></el-checkbox>
            <a @click="drawer = true">我已阅读报名须知</a>
          </div>
        </div>
        <div class="footButton">
          <el-button type="primary" style="margin-right:40px">立即报名</el-button>
          <el-button>暂存</el-button>
        </div>
      </div>
    </div>
    </div>
    <el-drawer :visible.sync="drawer" :with-header="false">
      <span class="ask">
        <p>
          一、艺术表演节目的要求
          <br />艺术表演类包括声乐、器乐、舞蹈、戏剧、朗诵。
          <br />（一）声乐节目
          <br />合唱：合唱队人数不超过40人，钢琴伴奏1人，指挥1人（应为本校教师），每支合唱队可演唱两首作品（其中至少一首中国作品），演出时间不超过8分钟。
          <br />小合唱或表演唱：人数不超过15人（含伴奏），不设指挥，不得伴舞，演出时间不超过5分钟。
          <br />（二）器乐节目
          <br />合奏：乐队人数不超过65人，指挥1人（鼓励本校教师担任），演出时间不超过9分钟，鼓励演奏中国作品。
          <br />小合奏或重奏：人数不超过12人，不设指挥，演出时间不超过6分钟。
          <br />（三）舞蹈节目
          <br />群舞：人数不超过36人，演出时间不超过7分钟。
          <br />（四）戏剧节目
          <br />含戏曲、校园短剧、小品、歌舞剧、音乐剧等。人数不超过12人（含伴奏），演出时间不超过12分钟。
          <br />（五）朗诵节目
          <br />作品文体不限，须使用普通话，人数不超过8人（含伴奏，学生不作道具设置，不得伴舞），演出时间不超过5分钟。
          <br />二、学生艺术作品的要求
          <br />学生艺术作品需提交400字以内的创作说明（包括作品主题简介和创作过程介绍）。
          <br />（一）绘画作品
          <br />国画、水彩/水粉画（丙烯画）、版画、油画，或其他画种。尺寸：国画不超过四尺宣纸（69cm×138cm）对开，其他画种尺寸均不超过对开（54cm×78cm）。
          <br />（二）书法、篆刻作品
          <br />书法、篆刻作品尺寸不超过四尺宣纸（69cm×138cm）。
          <br />（三）摄影作品
          <br />单张照和组照（每组不超过4幅，需标明顺序号）尺寸均为14英寸（30.48cm×35.56cm）；除影调处理外，不得利用电脑和暗房技术改变影像原貌。
          <br />（四）设计
          <br />含平面设计和立体设计。平面设计作品尺寸不超过对开（54cm×78cm）,立体设计作品尺寸不超过50cm（长）×50cm（宽）×50cm（高）。
          <br />（五）微电影
          <br />片长不超过15分钟，视频统一采用MPG2格式，作者须保留MOV或AVI格式视频文件。
          <br />三、报送节目和作品的要求
          <br />（一）同一个节目的参加者和同一件作品的创作者必须是同一学校的学生，甲乙组学生之间不得跨组组队。
          <br />（二）报送数量。根据各省、自治区、直辖市和新疆生产建设兵团（以下简称省份）高校数确定（分配表见附件4）。
          <br />（三）报送比例
          <br />1.总体比例。各省份报送的艺术表演节目和艺术作品，甲组均不少于70％，乙组均不超过30％。
          <br />2.艺术表演作品。节目报送数量在10个以上的省份，每个项目（声乐、器乐、舞蹈、戏剧、朗诵）须分别至少有1个节目、且不超过本地报送节目总数的30%。各省份报送的声乐节目中，合唱不得少于50%。同一学校在同一类项目上只能报送1个节目，不同项目可兼报。
          <br />3.学生艺术作品。每个项目（绘画、书法/篆刻、摄影、设计、微电影）每名作者限报1件。
          <br />（四）报送方式
          <br />1.艺术表演节目报送视频。视频采用MPG2格式（压缩带宽不低于10M，分辨率1920×1080），使用一个固定机位正面全景录制，声音和图像须同期录制，不得后期配音合成。每个节目视频以单独文件制作（文件大小不超过1G，不要多个文件合成）并以“节目名称（组别）”命名，播放的内容中不得出现所在地区、学校名称和指导教师姓名。
          <br />2.艺术作品不需装裱，可按惯例在作品正面或背面署名。须在作品背面注明作品种类、作者姓名、所在地区、学校名称、所在院系、学生专业、指导教师姓名等信息（一律用铅笔写），并附创作说明。作品以数码照片和原件两种方式报送。作品的数码照片要求：JPG格式，大小不低于10M，分辨率达到300dpi。
          <br />（五）艺术作品原则上不退还作者。获奖作品统一由“中华儿女美术馆——全国大中小学生艺术展演作品库”收藏，作者获得收藏证书。教育部对获奖节目和作品有权在中外人文交流以及相关活动和资料中使用（包括印制光盘、编辑画册或用于展览、宣传、对外交流等），不支付作者稿酬，作者享有署名权。
          <br />（六）报送艺术表演节目和艺术作品时，学校要严格把关，避免产生著作权纠纷。如发生著作权问题，取消学校获奖资格，由作者承担相关责任。
          <br />四、高校校长书画摄影作品的要求
          <br />校长绘画、书法、摄影作品的具体规格同上“二、学生艺术作品的要求”中的有关要求，其他要求同上“三、报送节目和作品的要求”中的第（四）—（六）条。作品不需装裱，作品的名称以及创作者的姓名、单位、职务、联系电话等可在作品背面注明，并附400字以内的创作说明。
          <br />校长书画摄影作品由省级教育行政部门集中统一报送，每人报送作品数量不超过2幅（组）。
          <br />
        </p>
      </span>
    </el-drawer>
  
  </div>
</template>

<script>
export default {
  data() {
    //验证手机号
    var checkMobile = (rule, value, cb) => {
      const regMobile =
        /^(0|86|17951)?(13[0-9]|15[0123456789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
      if (regMobile.test(value)) {
        //合法的邮箱
        return cb();
      }
      cb(new Error("请输入合法手机号码"));
    };
    return {
      form: {
        time: {
          min: "",
          second: "0",
        },
        
        art: "",
        teacher:"",
        perform: "",
        artlong:"",
        username: "",
        value:"",
        phone: "",
        xingshi:"书法",
        group: "甲组（非专业组）",
        group1:"单张照",
        works:'true',
        address: "",
        time:"",
        wide:"",
        // numberPeople: "",
        desc: "",
        accompany: "老师",
        video:"",
      },
      tableData1: [
        {
          id: "1",
          name: "王小虎",
          ID: "511623333333333333",
          nation: "汉族",
          age: "18",
          sex: "男",
          erea: "四川成都",
          school: "成都东软学院",
          branch: "信息与软件工程系",
        },
        {
          id: "2",
          name: "甘哥",
          ID: "511623333333333333",
          nation: "汉族",
          age: "18",
          sex: "男",
          erea: "四川成都",
          school: "成都东软学院",
          branch: "信息与软件工程系",
        },
      ],
      tableData2: [
        {
          id: "1",
          name: "王小虎",
          ID: "511623333333333333",
          nation: "汉族",
          age: "18",
          sex: "男",
          erea: "四川成都",
          school: "成都东软学院",
          branch: "信息与软件工程系",
        },
        {
          id: "2",
          name: "甘哥",
          ID: "511623333333333333",
          nation: "汉族",
          age: "18",
          sex: "男",
          erea: "四川成都",
          school: "成都东软学院",
          branch: "信息与软件工程系",
        },
      ],
      tableData3: [
        {
          id: "1",
          name: "王小虎",
          ID: "511623333333333333",
          nation: "汉族",
          age: "18",
          sex: "男",
          erea: "四川成都",
          school: "成都东软学院",
          branch: "信息与软件工程系",
        },
        {
          id: "2",
          name: "甘哥",
          ID: "511623333333333333",
          nation: "汉族",
          age: "18",
          sex: "男",
          erea: "四川成都",
          school: "成都东软学院",
          branch: "信息与软件工程系",
        },
      ],
      addTable: [
        {
          id: "",
          name: "",
          ID: "",
          nation: "",
          age: "",
          sex: "",
          erea: "",
          school: "",
          branch: "",
        },
      ],
      rules: {
        min: [{ required: true, message: "请输入分钟数", trigger: "blur" }],
        art: [{ required: true, message: "请输入作品名称", trigger: "blur" }],
        group: [{ required: true, message: "请选择组别", trigger: "blur" }],
        group1: [{ required: true, message: "请选择作品形式", trigger: "blur" }],
        teacher:[{ required: true, message: "请输入指导教师", trigger: "blur" }],
        time:[{ required: true, message: "请选择创作时间", trigger: "blur" }],
        username: [{ required: true, message: "请输入姓名", trigger: "blur" }],  
        artlong:[{ required: true, message: "请输入作品长度", trigger: "blur" }],
        desc:[{ required: true, message: "请输入创作简介", trigger: "blur" }],
        wide:[{ required: true, message: "请输入作品宽度", trigger: "blur" }],
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { validator: checkMobile, trigger: "blur" },
        ],
        address: [
          { required: true, message: "请输入详细地址", trigger: "blur" },
        ],
        perform: [
          { required: true, message: "请输入表演人数", trigger: "blur" },
        ]
        
      },
      checked: "",
      drawer: false,
    };
  },
  methods: {
    //添加一行
    addTable1() {
      this.tableData1 = this.tableData1.concat(this.addTable);
    },
    //清空
    clean1() {
      this.tableData1 = [];
    },
    addTable2() {
      this.tableData2 = this.tableData2.concat(this.addTable);
    },
    clean2() {
      this.tableData2 = [];
    },
    addTable3() {
      this.tableData3 = this.tableData3.concat(this.addTable);
    },
    clean3() {
      this.tableData3 = [];
    },
    //上传成功的钩子
    videoSuccess(res, file) {
      if (res.status == 200) {
        this.videoForm.videoUploadId = res.data.uploadId;
        this.videoForm.Video = res.data.uploadUrl;
      } else {
        this.$message.error("视频上传失败，请重新上传！");
      }
    },
    //上传前验证视频格式内存
    videoBefore(file) {
      const isLt10M = file.size / 1024 / 1024 < 10;
      if (
        [
          "video/mp4",
          "video/ogg",
          "video/flv",
          "video/avi",
          "video/wmv",
          "video/rmvb",
        ].indexOf(file.type) == -1
      ) {
        this.$message.error("请上传正确的视频格式");
        return false;
      }
      if (!isLt10M) {
        this.$message.error("上传视频大小不能超过10MB哦!");
        return false;
      }
    },
    //上传进度
  videoProcess() {},
  },
};
</script>

<style scoped>
.home {
  min-width: 1000px;
  width: 100%;
  /* height: 92%; */
}
.nav {
  padding: 15px 0;
  width: 97%;
  margin: 0 auto;
}
.homeContent {
  width: 97%;
  margin: 0 auto 20px;      
  background-color: #fff;
  height: 95%;
  border-radius: 10px;
}

.header {
  width: 97%;
  margin: 0 auto;
  padding: 10px 0;
}

.header span {
  display: block;
  margin: 10px 0;
  font-size: 20px;
  color: #784cad;
  font-weight: 600;
  letter-spacing: 1px;
  font-family: SimHei Regular, SimHei Regular-Regular;
}

.header p {
  color: #606266;
  font-size: 17px;
  line-height: 25px;
}

.fromBady {
  width: 97%;
  margin: 0 auto;
  padding: 15px 0;
}

.rightForm {
  display: block;
  width: 50%;
  min-width: 500px;
}

.leftForm {
  display: flex;
  width: 50%;
  min-width: 500px;
}

.demo-form-inline {
  display: flex;
  width: 100%;
}

.layoutWidth {
  width: 250px;
}

.timeWidth {
  width: 120px;
}

.el-header {
  font-size: 16px !important;
}

.mytime span {
  font-size: 18px;
}

.leftForm2 {
  width: 33%;
  min-width: 380px;
}

.centerForm2 {
  width: 33%;
}

.rightForm2 {
  width: 33%;
}

.leftForm3 {
  width: 50%;
  min-width: 500px;
}

.rightForm3 {
  width: 50%;
  min-width: 500px;
}

.leftForm5 {
  width: 100%;
  min-width: 1000px;
}

.userWidth {
  width: 350px;
}

.el-textarea__inner {
  height: 200px !important;
}

.tabbleName {
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 1px;
}

.tabbleNav {
  list-style: none;
  height: 30px;
  padding: 0;
  line-height: 20px;
  margin-bottom: 8px;
}

.tabbleNav li {
  float: left;
  color: #784cad;
  margin-right: 20px;
}

.tabbleNav li a {
  text-decoration: none;
  cursor: pointer;
}

.addTable {
  margin-bottom: 30px;
}

.el-upload-dragger {
  width: 350px !important;
}

.warning {
  font-size: 15px;
  color: red;
}

.footer {
  width: 97%;
  margin: 0 auto;
  padding: 0 0 30px;
}

.footerMiddle {
  display: flex;
  padding: 10px 0;
  font-size: 15px;
  line-height: 20px;
}

.footerMiddle span {
  color: #606266;
}

.middleWarning {
  margin-left: 50px;
}

.middleWarning a {
  color: #409eff;
  margin: 0 6px;
  cursor: pointer;
}

.footButton {
  text-align: center;
}

.ask {
  display: block;
  margin: 20px;
  line-height: 22px;
}

.ask p {
  word-wrap: break-word;
}

.upVideo {
  margin: 0 auto;
  max-width: 360px;
}
</style>