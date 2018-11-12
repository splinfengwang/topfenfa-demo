<template>
  <div class="applist">
    <div class="applist-header">
    </div>
    <div class="applist-body">
    <el-table
        :data="tableData"
        style="width: 100%;border: 1px solid #ebeef5;border-bottom: 0;font-size: 12px;}">
        <el-table-column
          align="center"
          prop="id"
          label="编号"
          width="160">
        </el-table-column>
        <el-table-column
          align="center"
          prop="name"
          label="商品名称"
          width="160">
        </el-table-column>
        <el-table-column
          align="center"
          prop="order_id"
          label="订单号"
          width="160px">
        </el-table-column>
        <el-table-column
          align="center"
          prop="pay_type"
          label="支付方式">
        </el-table-column>
        <el-table-column
          align="center"
          prop="money"
          label="金额">
        </el-table-column>
        <el-table-column
          align="center"
          prop="time"
          label="时间"
          width="90">
        </el-table-column>
        <el-table-column
          align="center"
          prop="status"
          label="状态">
        </el-table-column>
        <div slot="empty">
          <i class="tff tff-null-data" style="font-size: 80px;display: block;margin: 200px auto;"></i>
        </div>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'applist',
  data () {
    return {
      appType: '0',
      appName: '',
      options: [
        {
          value: '0',
          label: '全部'
        }, {
          value: '1',
          label: 'IOS'
        }, {
          value: '2',
          label: 'Android'
        }
      ],
      tableData: [
        // {
        //   id: '1234',
        //   name: '小包1000次',
        //   order_id: 'sn44937390',
        //   pay_type: '支付宝',
        //   money: '￥13876',
        //   time: '2018-11-07 22:20',
        //   status: '完成'
        // }
      ]
    }
  },
  methods: {
    searchApp () {
      console.log(this.appName)
    },
    toMyapp () {
      this.$router.push({
        name: 'appsetting',
        params: {
          id: 123
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.applist {
  padding: 20px;
  box-sizing: border-box;
  .applist-header {
    display: flex;
    .select-type, .search-app {
      width: 150px;
      margin-right: 10px;
      .search-btn {
        color: #157df1;
      }
    }
  }
}
</style>
