<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-container>
            <el-header style="background-color: #70ADED;font-family: 'Adobe 宋体 Std L';font-size: 30px">
             <div><img src="">学生成绩管理系统</div>
            </el-header>
            <el-container>
                  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                    <el-submenu index="1">
                      <template slot="title">
                        <i class="el-icon-message"></i>
                        <span slot="title">用户管理</span>
                      </template>
                        <el-submenu index="1-1">
                          <span slot="title">职工信息</span>
                          <el-menu-item index="1-1-1">学校领导</el-menu-item>
                          <el-menu-item index="1-1-2">科室人员</el-menu-item>
                        </el-submenu>

                        <el-submenu index="1-2" >
                          <span slot="title">学生年级信息</span>
                          <el-menu-item index="1-2-1">七年级</el-menu-item>
                          <el-menu-item index="1-2-2">八年级</el-menu-item>
                          <el-menu-item index="1-2-3">九年级</el-menu-item>
                        </el-submenu>

                    </el-submenu>
                    <el-submenu index="2">
                      <template slot="title">
                        <i class="el-icon-document"></i>
                        <span slot="title">成绩管理</span>
                      </template>
                        <el-menu-item index="2-1">七年级</el-menu-item>
                        <el-menu-item index="2-2">八年级</el-menu-item>
                        <el-menu-item index="2-3">九年级</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="3" disabled>
                      <i class="el-icon-document"></i>
                      <span slot="title">导航三</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                      <i class="el-icon-setting"></i>
                      <span slot="title">导航四</span>
                    </el-menu-item>
                  </el-menu>
              <el-container>
                    <el-header  class="el-min-footer">
                      <el-row >
                        <el-col :span="12">
                          <el-row>
                            <el-col :span="12">
                              <div class="grid-content bg-purple" style="text-align: left">
                                <el-radio-group v-model="isCollapse"  size="mini">
                                  <el-radio-button :label="false" >展开</el-radio-button>
                                  <el-radio-button :label="true">收起</el-radio-button>
                                </el-radio-group>
                              </div>
                              <el-dialog title="添加人员信息" :visible.sync="dialogFormVisible">
                                <el-form :model="form">
                                  <el-form-item label="姓名" :label-width="formLabelWidth">
                                    <el-input v-model="form.username" auto-complete="off"></el-input>
                                  </el-form-item>
                                  <el-form-item label="年龄" :label-width="formLabelWidth">
                                    <el-input v-model="form.age" auto-complete="off"></el-input>
                                  </el-form-item>
                                  <el-form-item label="性别" :label-width="formLabelWidth">
                                    <el-radio v-model="form.sex" label="1">男</el-radio>
                                    <el-radio v-model="form.sex" label="2">女</el-radio>
                                  </el-form-item>
                                  <el-form-item label="邮箱" :label-width="formLabelWidth">
                                    <el-input v-model="form.email" auto-complete="off"></el-input>
                                  </el-form-item>
                                  <el-form-item label="电话" :label-width="formLabelWidth">
                                    <el-input v-model="form.phone" auto-complete="off"></el-input>
                                  </el-form-item>
                                  <el-form-item label="角色" :label-width="formLabelWidth">
                                    <el-select v-model="form.roles" placeholder="角色" multiple v-modle="roles" style="width: 100%;">
                                      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                                    </el-select>
                                  </el-form-item>
                                </el-form>
                                <div slot="footer" class="dialog-footer">
                                  <el-button @click="dialogFormVisible = false">取 消</el-button>
                                  <el-button type="primary" @click="dialogFormVisible = false;addUserMessage(form)">确 定</el-button>
                                </div>
                                <div slot = "title" class = "dialog-title">
                                  添加用户信息
                                </div>
                              </el-dialog>
                            </el-col>
                            <el-col :span="12">
                              <div class="grid-content bg-purple-light" >
                                <el-button type="primary" plain size="mini" @click="dialogFormVisible = true">添加</el-button>
                                <el-button type="danger" plain size="mini">删除</el-button>
                              </div>
                            </el-col>
                          </el-row>
                        </el-col>
                        <el-col :span="12">
                          <div class="grid-content bg-purple-light" style="text-align: right">
                            <el-dropdown>
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
                          </div>
                        </el-col>
                      </el-row>
                    </el-header>
                    <router-view></router-view>
                <el-footer>@小小{{$store.state.dialog.roles}}{{form.roles}}</el-footer>
              </el-container>
            </el-container>
          </el-container>

        </div>
      </el-col>
    </el-row>
  </div>

</template>
<style>
  .el-header, .el-footer {
    background-color: #EBEFF4;
    color: #333;
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

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-min-footer{
    background-color: #E9EEF3;
  }
  .bg-purple-light{
    text-align: left;
  }
  /*编辑框格式*/
  .dialog-title{
    color: #409EFF;
    font-family: "Adobe 宋体 Std L";
    font-size: larger;
  }

</style>




<script>
  export default {
    mounted(){
      this.getRoles()
    },
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        options: [/*{
          value: '选项一',
          label: '黄金糕'
        }, */],
        tableData: Array(20).fill(item),
        isCollapse: true,
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: [],
        dialogFormVisible: false,
        form: {
          username: '',
          age: '',
          sex: 1,
          email:'',
          phone:'',
          roles:[]

        },

      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelectionChange(val) { //将选中项赋值
        /*this.multipleSelection = val;*/
        this.multipleSelection.length=0;
        for(var i = 0; i<val.length; i++){
          this.multipleSelection.push(val[i].name);
        }

        console.log(this.multipleSelection);
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
            console.log(this.$refs.multipleTable.toggleRowSelection(row))
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      //钩子函数进入页面时加载数据
      getRoles(){
        this.$axios({
          method: 'post',
          url: 'http://localhost:1008/loginRoles/roles',
          data: {
           id:"1111",
            name:"222"
          }
        }).then((datas)=>{
          var roles = datas.data.role.split(",");
          roles.forEach((item,index,arr) => {
            var data = {
              "value":item,
              "label":item
          };
            this.options.push(data);
          });
          this.$store.commit("selectRoles",roles);
        })
      },
      //添加人员信息
      addUserMessage(form){
        this.$axios({
          method: 'post',
          url: 'http://localhost:1008/userMessage/addUserMessage',
          data: form
        }).then((datas) => {
          /*
          * datas: return userMessage
          * */

        })
        console.log(form);
      }
    }
  }
</script>




