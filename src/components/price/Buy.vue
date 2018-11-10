<template>
  <div class="buy-warp">
    <div class="container buy-content">
      <div class="buy-header">
        <div class="route">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ name: 'priceinfo' }">价格</el-breadcrumb-item>
            <el-breadcrumb-item>套餐购买</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <div class="buy-package">
        <div class="step">
          <div class="tit">
            选择套餐内容
          </div>
          <div class="list">
            <div class="item" :class="{'active' : active_package === item.id}" v-for="(item, index) in packages" :key="index" @click="selectPackage(item)">
              <div class="desc" >
                <div class="text">内测分发下载</div>
                <div class="num">{{item.num}}<span>次</span></div>
              </div>
              <div class="price">{{item.price}}<span>元</span></div>
              <i class="tff tff-checkout" v-if="active_package === item.id"></i>
            </div>
          </div>
        </div>
        <div class="step">
          <div class="tit">
            选择数量
          </div>
          <div class="list">
            <el-radio v-model="buy_num" :label="1">1个</el-radio>
            <el-radio v-model="buy_num" :label="2">2个</el-radio>
            <el-radio v-model="buy_num" :label="3">3个</el-radio>
          </div>
        </div>
        <div class="step">
          <div class="tit">
            选择支付方式
          </div>
          <div class="list">
            <div class="pay_type" :class="{ 'active' : active_pay === 'alipay'}" @click="active_pay = 'alipay'">
              <img src="/static/images/pay-1.jpg" alt="">
              <i class="tff tff-checkout" v-if="active_pay === 'alipay'"></i>
            </div>
            <div class="pay_type" :class="{ 'active' : active_pay === 'wxpay'}" @click="active_pay = 'wxpay'">
              <img src="/static/images/pay-2.jpg" alt="">
              <i class="tff tff-checkout" v-if="active_pay === 'wxpay'"></i>
            </div>
          </div>
        </div>
        <div class="pay-money">
          <div class="money">
            应支付
            <span>￥{{price}}</span>
          </div>
          <el-button type="primary" style="width: 160px;" :disabled="isDisablePay" @click="toPay">去支付</el-button>
        </div>
      </div>
    </div>
    <el-dialog
      title="购买"
      :visible.sync="dialogVisible"
      width="600" center>
      <div class="dialog-tit">是否完成了购买？</div>
      <div class="dialog-tips">请在新打开的页面中完成购买，购买完成后，请根据购买结果点击下面的按钮</div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">支付成功</el-button>
        <el-button @click="dialogVisible = false; isDisablePay = false">支付遇到问题</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Buy',
  data () {
    return {
      active_package: '1004',
      active_pay: 'alipay',
      buy_num: 1,
      packages: [
        {
          num: '1,000',
          price: '20',
          id: '1003'
        },
        {
          num: '10,000',
          price: '180',
          id: '1004'
        },
        {
          num: '100,000',
          price: '1600',
          id: '1005'
        }
      ],
      price: 180,
      isDisablePay: false,
      dialogVisible: false
    }
  },
  methods: {
    selectPackage (packageItem) {
      this.active_package = packageItem.id
    },
    toPay () {
      this.isDisablePay = true
      this.dialogVisible = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .buy-warp {
    background: #f5f7f9;
    .buy-content {
      padding: 20px 0 50px;
      .buy-header {
        display: flex;
        justify-content: space-between;
        .route {
          margin-top: 16px;
        }
        .how-many {
          display: flex;
          justify-content: flex-end;
          .text {
            display: inline-block;
            padding: 5px 20px;
            border-right: 1px solid #ddd;
            font-size: 10px;
            color: #999999;
            .num {
              font-size: 24px;
              color: #333;
              margin: 0 10px;
            }
            .tff-prompt {
              color: #feac21;
            }
          }
        }
        margin-bottom: 20px;
      }
      .buy-package {
        background: #fff;
        min-height: 600px;
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        .step {
          .tit {
            padding: 25px 30px 20px;
            border-bottom: 1px solid #e5e5e5;
            color: #333;
            font-size: 14px;
          }
          .list {
            padding: 20px 25px;
            display: flex;
            .item, .pay_type {
              cursor: pointer;
              position: relative;
              border: 1px solid #e5e5e5;
              border-radius: 3px;
              padding: 12px 20px 11px;
              margin-right: 40px;
              box-sizing: border-box;
              display: flex;
              .desc {
                padding-right: 40px;
                .text {
                  font-size: 14px;
                  color: #666;
                }
                .num {
                  color: #333;
                  margin-top: 5px;
                  font-weight: 600;
                  font-size: 14px;
                }
              }
              .price {
                color: #157df1;
                font-size: 30px;
                padding-left: 50px;
                border-left: 1px solid #e5e5e5;
                span {
                  font-size: 14px;
                  color: 14px;
                }
              }
              i {
                position: absolute;
                right: 0;
                bottom: -1px;
                color: #537ff2;
                font-size: 24px;
              }
            }
            .pay_type {
              padding: 10px 30px;
              margin-right: 20px;
            }
            .active {
              border-color: #157df1;
            }
          }
        }
        .pay-money {
            padding-left: 25px;
            border-top: 1px solid #e5e5e5;
            margin-top: 20px;
            padding-bottom: 40px;
            .money {
                color: #333;
                padding: 20px 0;
                font-size: 14px;
                span {
                    color: #fd641d;
                    font-size: 24px;
                }
            }
        }
      }
    }
  }
  .dialog-tit {
    font-size: 18px;
    color: #333;
  }
  .dialog-tips {
    color: #999;
    font-size: 14px;
    margin-top: 15px;
  }
</style>
