<template>
  <div id="loginPage">
    <div id="form">
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple-dark">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="username:">
                <el-input v-model="form.username" name="username"></el-input>
              </el-form-item>
              <el-form-item label="password:">
                <el-input v-model="form.password" name="password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit(form)">立即创建</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>

      </el-row>
    </div>
  </div>
</template>
<style>
  #loginPage{
    height: 100%;
    width: 100%;
    background-size: 100% 100%;

    margin-bottom: 20px;
    border: 1px red solid;
    text-align: right;

    vertical-align: bottom;
  }

  #form{
    text-align: center;
    border: 1px red solid;
    vertical-align: bottom;
  }
</style>
<script>
  export default {
    name: 'loginPage',
    data() {
      return {
        form: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit(form) {
        this.$axios({
          method: 'post',
          url: 'http://localhost:1008/login',
          data: {
            username: form.username,
            password: form.password
          }
        }).then((datas)=>{

          this.$store.commit('increment',datas.data);
          console.log(datas.data.id);

          this.$router.push({path: '/HelloWorld'})
        })
      }
    }
  }
</script>




