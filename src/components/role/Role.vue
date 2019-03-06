<template>
  <div class="content">
    <el-row style="margin: 10px">
      <el-col :span="6">
        <el-button type="success">添加</el-button>
      </el-col>
      <el-col :span="12">
        <el-date-picker
          :span="12"
          v-model="value7"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions2">
        </el-date-picker>
      </el-col>
      <el-col :span="6" style="text-align: end" ><el-button type="info">搜索</el-button></el-col>
    </el-row>
    <el-table
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      :data="roleList"
      style="width: 100%"
      :default-sort="{prop: 'createTime', order: 'descending'}"
      border stripe
    >
      <el-table-column
        label="日期"
        sortable
        width="180">
        <template slot-scope="scope">
          {{formatData(scope.row.createTime)}}
        </template>
      </el-table-column>
      <el-table-column
        prop="roleName"
        label="姓名"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="roleStatus"
        label="状态">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.row)">编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>

  export default {
    name: "Role",
    data() {
      return {
        roleList: [],
        currentPage: 1,
        pageSize: 10,
        total: 0,
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value7: '',
        loading:true
      }
    },
    mounted() {
      this.getRoleList()
    },
    methods: {
      getRoleList: function () {
        const _this = this;
        this.getRequest("/api/roleManage/list/" + _this.currentPage + "/" + _this.pageSize)
          .then(function (data) {
            _this.roleList = Array.from(data.data.list);
            _this.total = data.data.total;
            _this.loading=false;
          }).catch(function (error) {
          alert(error);
        })
      },
      handleEdit: function (row) {
        console.log(row.createTime)
      },
      handleDelete: function (row) {
        console.log(row)
      },
      formatData: function (time) {
        let date = new Date(time);
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
      },
      handleSizeChange(val) {
        this.pageSize = val;
        this.getRoleList();
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        this.getRoleList();
      }
    }
  }
</script>

<style scoped>
  .content{
    margin: 5px;
    width: 80%;
  }
</style>
