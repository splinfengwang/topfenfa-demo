<template>
  <div class="applist">
    <div class="applist-header">
      <div class="select-type">
        <el-select v-model="appType" placeholder="请选择" size="small">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="search-app">
        <el-input v-model="appName" placeholder="输入应用名称" size="small">
          <i slot="suffix" class="el-input__icon el-icon-search search-btn" @click="searchApp"></i>
        </el-input>
      </div>
    </div>
    <div class="applist-body">
    <el-table
        :data="tableData"
        style="width: 100%;border: 1px solid #ebeef5;border-bottom: 0;margin-top: 20px;font-size: 12px;}">
        <el-table-column
         align="center"
          label="名称"
          width="160">
          <template slot-scope="scope">
            <div style="display:flex;">
              <img :src="scope.row.icon" style="width: 45px;height: 45px;border-radius: 5px;: 1px solid #eee;margin-right:5px;">
              <div>
                <p style="font-size: 14px;">{{scope.row.name}}</p>
                <p style="color: #999;text-align: left;">{{scope.row.form}}</p>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="size"
          label="大小"
          width="100">
          <template slot-scope="scope">
            <div style="font-size: 12px;">{{scope.row.size}}</div>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="下载链接/二维码">
          <template slot-scope="scope">
            <div style="font-size: 12px;">
              {{scope.row.url}}
              <el-tooltip placement="bottom" effect="light">
                <div slot="content">
                  <div style="padding: 5px; border-bottom: 1px solid #ddd;margin-bottom: 5px;font-size: 14px;color: #999">
                    扫描二维码
                  </div>
                  <img src="/static/images/qrcode.png" alt="">
                </div>
                <i class="tff tff-qrcode" style="font-size: 14px;margin-left: 5px;"></i>
              </el-tooltip>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="版本"
          width="90">
          <template slot-scope="scope">
            <div style="font-size: 12px;">{{scope.row.version}}</div>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="操作"
          width="220px">
          <template slot-scope="scope">
            <el-button size="mini" plain style="font-size: 12px;border-color: #157df1;color: #157df1;">预览</el-button>
            <el-button size="mini" plain style="font-size: 12px;border-color: #157df1;color: #157df1;" @click="toMyapp">管理</el-button>
            <el-button size="mini" plain style="font-size: 12px;border-color: #ee635d;color: #ee635d;">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
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
        //   type: 'Android',
        //   name: {
        //     text: 'Brevent',
        //     img: 'static/images/default-icon.png'
        //   },
        //   size: '0.95M',
        //   link_qrcode: {
        //     link: 'https://dibaqu.com/NFvy',
        //     qrcode: 'dddd'
        //   },
        //   update_time: '2018-11-07 22:20'
        // }
        {
          'id': 2,
          'name': '小新应2',
          'form': 'Android',
          'size': '11.6 MB',
          'type': '内测版',
          'version': '1.0.0.1',
          'bundle_id': 'com.kingControl.merchantId1579.xiaoxinyingji',
          'team': '*',
          'description': 'Android 9.0 或者高版本',
          'icon': 'http://package-hermann-test.oss-cn-beijing.aliyuncs.com/20181105112107856364.png',
          'url': 'http://127.0.0.1:8000/asdf',
          'sub_app': {
            'id': 3,
            'name': '小新应急',
            'form': 'iOS',
            'icon': 'http://package-hermann-test.oss-cn-beijing.aliyuncs.com/20181105112107856322.png'
          }
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['apps'])
  },
  methods: {
    ...mapActions(['getApps']),
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
  },
  mounted () {
    this.getApps({
      page: 1,
      form: 'iOS',
      word: ''
    })
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
