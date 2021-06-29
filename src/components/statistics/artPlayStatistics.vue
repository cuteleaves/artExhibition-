<template>
  <div class="homecontent">
    <div class="nav">
      <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size:16px">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>艺术表演类统计</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="home">
      <!-- 搜索区 -->
      <div class="header">
        <div class="inputSearch">
          <el-input placeholder="请输入内容" v-model="search" class="inputSearch">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <div class="inputSelect">
          <el-select v-model="select" placeholder="请选择">
            <el-option label="声乐作品" value="声乐作品"></el-option>
            <el-option label="器乐作品" value="器乐作品"></el-option>
            <el-option label="舞蹈作品" value="舞蹈作品"></el-option>
            <el-option label="戏剧作品" value="戏剧作品"></el-option>
            <el-option label="朗诵作品" value="朗诵作品"></el-option>
          </el-select>
        </div>
        <div class="examine">
          <el-select v-model="selectExamine" placeholder="请选择">
            <el-option label="全部" value="全部"></el-option>
            <el-option label="未审核" value="未审核"></el-option>
             <el-option label="未通过" value="未通过"></el-option>
            <el-option label="省级通过" value="省级通过"></el-option>
             <el-option label="省级提交报送" value="省级提交报送"></el-option>
            <el-option label="省级提交成功" value="省级提交成功"></el-option>
             <el-option label="组委会审核通过" value="组委会审核通过"></el-option>
            <el-option label="组委会确认人选" value="组委会确认人选"></el-option>
          </el-select>  
        </div>
        <div class="button">
          <el-button type="primary">刷新</el-button>
        </div>
      </div>
      <!-- 表格区 -->
      <div class="box-card">
        <!-- 表名 -->
        <div class="tableName">
          <span class="tableName1">报名列表</span>
          <el-divider></el-divider>
        </div>
        <!-- 表格 -->
        <div class="tables">
          <el-table :data="tableData" border style="width: 100%" stripe>
            <el-table-column prop="id" label="序号" width="100" show-overflow-tooltip></el-table-column>
            <el-table-column prop="name" label="名称" width="250" show-overflow-tooltip></el-table-column>
            <el-table-column prop="username" label="联系人" width="200" show-overflow-tooltip></el-table-column>
            <el-table-column prop="phone" label="联系电话" width="180" show-overflow-tooltip></el-table-column>
            <el-table-column prop="address" label="联系地址" width="180" show-overflow-tooltip></el-table-column>
            <el-table-column prop="type" label="类型" width="250" show-overflow-tooltip></el-table-column>
            <el-table-column prop="member" label="成员" width="180" show-overflow-tooltip></el-table-column>
            <el-table-column prop="status" label="状态" width="250" show-overflow-tooltip></el-table-column>
            <el-table-column label="操作" width="300">
              <template slot-scope="scope">
                <el-button type="danger" @click="remove(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!-- 分页 -->
        <div class="page">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-size="2"
            layout="total,prev,pager, next, jumper"
            :total="10"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      selectExamine: "",
      select: "",
      tableData: [
        {
          id: "1",
          name: "甘哥真帅",
          username: "甘相东",
          phone: "13550993955",
          address: "甘哥",
          member:"无",
          type:"无",
          status: 2,
        },
      ],
    };
  },
  methods: {
    handleSizeChange() {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    remove(obj) {
      console.log(obj.id);
    },
  },
};
</script>

<style scoped>
.home {
  width: 97%;
  height: 92%;
  margin: 10px auto;
  background-color: #fff;
  border-radius: 6px;
  padding-top: 10px;
  min-width: 1000px;
}
.header {
  width: 98%;
  height: 60px;
  margin: 0 auto 0;
  box-shadow: 1px 1px 5px 1px #8c939d;
  display: block;
  line-height: 60px;
  display: flex;
  min-width: 1000px;
}
.inputSearch {
  width: 250px;
  margin-left: 10px;
}
.homecontent {
  height: 95%;
  min-width: 1000px;
}

.nav {
  padding: 15px 0 0;
  width: 97%;
  margin: 0 auto;
}

.inputSelect {
  width: 200px;
  margin-left: 50px;
}

.examine {
  width: 250px;
  margin-left: 45px;
}

.button {
  width: 100px;
  margin-left: 15px;
}

.box-card {
  width: 98%;
  margin: 20px auto 0;
  box-shadow: 1px 1px 5px 1px #8c939d;
}

.tableName {
  width: 99%;
  margin: 0 auto;
  padding: 5px 0;
  height: 35px;
  line-height: 35px;
}

.tableName1 {
  height: 25px;
  border-left: 3px solid #409eff;
  padding-left: 20px;
  color: #898989;
}

.el-divider--horizontal {
  margin: 0;
}

.page {
  padding: 10px 0;
}

.tables {
    width: 99%;
    margin: 0 auto;
}
</style>