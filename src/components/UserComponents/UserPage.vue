<template>
  <div>
    <div>
      <el-table :data="tableData3" style="text-align: left" @selection-change="handleSelectionChange"  ref="multipleTable">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="id" label="id" width="55">
        </el-table-column>
        <el-table-column prop="date" label="日期" width="120">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="120">
        </el-table-column>
        <el-table-column prop="phone" label="电话" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址" width="120">
        </el-table-column>
        <el-table-column prop="roles" label="角色" >
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="180" >
          <template slot-scope="scope">
            <el-button  size="mini" @click="centerDialogVisible  = true;handleClick(scope.row)" >编辑</el-button>
            <el-button  size="mini" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 500]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total=total>
      </el-pagination>
    </div>
    <div>
      <el-dialog title="" :visible.sync="centerDialogVisible" width="50%" center>
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
          <el-form-item prop="name" label="姓名">
            <el-input v-model="ruleForm2.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="年龄" prop="age">
            <el-input v-model.number="ruleForm2.age"></el-input>
          </el-form-item>
          <el-form-item prop="birthday" label="生日">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm2.birthday" style="width: 100%;"></el-date-picker>          </el-form-item>
          <el-form-item prop="department" label="部门">
            <el-select v-model="ruleForm2.roles" placeholder="部门" multiple auto-complete="off" style="width: 100%;">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="phone" label="电话">
            <el-input v-model.number="ruleForm2.phone" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item prop="email" label="邮箱">
            <el-input v-model="ruleForm2.email" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
          </el-form-item>
        </el-form>
        <div slot = "title" class = "dialog-title">
          修改用户信息
        </div>
      </el-dialog>

    </div>
  </div>
</template>

<script>
  export default {
    data() {

      var checkPhone = (rule,value,callback) => {

       setTimeout(() => {
         if (value === ''){
           callback(new Error('电话号码不能为空'));
         }
          if (!Number.isInteger(value)){
            callback(new Error('请输入数字'))
          }else {
            var reg = new RegExp("^1\\d{10}$");
            if (!reg.test(value)){
              callback(new Error("请输入正确的电话号码（11位）"))
            }else {
              callback();
            }
          }
       },1000);
      };
      var checkEmail = (rule,value,callback) => {
        setTimeout(() => {
          if(value === ''){
            callback(new Error('请输入邮箱'))
          }else {
            var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
            if(!reg.test(value)){
              callback(new Error('格式不正确'))
            }else{
              callback();
            }
          }
        },1000);

      };

      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        currentPage: 1,
        total:1000,
        pageSize: 1,
        options:[
          {
            value: '选项一',
            label: '黄金糕'
          }
        ],
        ruleForm2: {
          name:'',
          birthday:'',
          phone:'',
          pass: '',
          checkPass: '',
          age: '',
          email:'',
          department:[]
        },
        rules2: {
          phone:[
            {validator: checkPhone,trigger: 'blur'}
          ],
          email:[
            {validator: checkEmail,trigger: 'blur'}
            ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        },
        //update 弹出框
       centerDialogVisible: false,

        /*dynamicValidateForm: {
         domains: [{
           value: ''
         }],
         email: ''
       },*/

        isCollapse: true,
        tableData3: [{
          id:1,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          phone:'12345678909',
          age:21,
          roles:'教师'
        }, {
          id:2,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          phone:'123',
          age:20,
          roles:'教师'
        }],
        multipleSelection: []

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
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pageSize = val;
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentPage = val;
        console.log(this.currentPage);
      },
      //回显数据
      handleClick(row) {
        this.ruleForm2.name =  row.name;
        console.log( row.name);
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          value: '',
          key: Date.now()
        });
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
