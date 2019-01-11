<template>
<div>
  <el-container >
    <el-header>
      <el-row>
        <el-col :span="24">
            <!--<el-menu theme="dark" :default-active="activeIndex"
                     class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1">Home</el-menu-item>
              <el-menu-item index="2">Article</el-menu-item>
              <el-submenu index="3">
                <template slot="title">Projects</template>
                <el-menu-item index="3-1">Shiny</el-menu-item>
                <el-menu-item index="3-2">LearnVue</el-menu-item>
                <el-menu-item index="3-3">OtherProject</el-menu-item>
              </el-submenu>
              <el-menu-item index="4" >
                <router-link id="Login" to="/Login">Login</router-link>
              </el-menu-item>
              <el-menu-item index="5">Resume</el-menu-item>
              <el-menu-item index="6">About</el-menu-item>
            </el-menu>-->
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1">处理中心</el-menu-item>
              <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="2-4-1">选项1</el-menu-item>
                  <el-menu-item index="2-4-2">选项2</el-menu-item>
                  <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="3" disabled>消息中心</el-menu-item>
              <el-menu-item index="4"><router-link id="Login" to="/Login">Login</router-link></el-menu-item>
            </el-menu>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <!--<router-view></router-view>-->
        <div >
          <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">toubu</span>
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </div>
      <el-container>

          <el-header class="variableHeader" style="text-align: left; font-size: 12px;background-color: #E9EEF3">
            <el-row>
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <span >
                    <el-radio-group v-model="isCollapse" style="margin-bottom: 4px" fill="#11DCF2">
                    <el-radio-button :label="true" >展开</el-radio-button>
                    <el-radio-button :label="true">收起</el-radio-button>
                  </el-radio-group>
                  </span>
                </div>
              </el-col>
              <el-col :span="12" >
                  <div class="grid-content bg-purple-light" style="text-align: right">
                    <span >
                      <el-dropdown >
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item>查看</el-dropdown-item>
                          <el-dropdown-item>新增</el-dropdown-item>
                          <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                      </el-dropdown>
                      <span>
                        王小虎
                      </span>
                    </span>
                  </div>
              </el-col>
            </el-row>

          </el-header>

            <el-table :data="tableData">
              <el-table-column prop="date" label="日期" width="120">
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="120">
              </el-table-column>
              <el-table-column prop="address" label="地址" width="">
              </el-table-column>
            </el-table>
        <el-footer>
          <div class="block" hidden>
            <span class="demonstration">页数较少时的效果</span>
            <el-pagination
              layout="prev, pager, next"
              :total="50">
            </el-pagination>
          </div>
          <div class="block" >
            <span class="demonstration">大于 7 页时的效果</span>
            <el-pagination
              layout="prev, pager, next"
              :total="1000">
            </el-pagination>
          </div>
        </el-footer>
      </el-container>

    </el-container>
  </el-container>
</div>
</template>
<style>

  .el-header,.el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }


  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-table {
    text-align: left;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 200px;
  }
</style>




<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(10).fill(item),
        activeIndex: '1',
        activeIndex2: '1',
        isCollapse: true
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>




