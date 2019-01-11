<template>
  <div>
    <el-table :data="tableData3" style="text-align: left" @selection-change="handleSelectionChange"  ref="multipleTable">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column prop="date" label="日期" width="120">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="180" >
        <template slot-scope="scope">
          <!--<el-button @click="handleClick(scope.row)"  size="mini">查看</el-button>-->
          <el-button  size="mini">编辑</el-button>
          <el-button  size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
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
      }
    }
  }
</script>
