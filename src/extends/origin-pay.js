export default {
  /**
 * 调用支付宝支付
 * @param {Number} tradeNo 交易订单号
 */
  callAlipay(tradeNo) {
    return new Promise((resolve, reject) => {
      if (typeof AlipayJSBridge === 'undefined') {
        this.$Toast.fail('支付环境未就绪');
        return reject();
      }
      AlipayJSBridge.call(
        'tradePay', {
        tradeNO: tradeNo,
        displayPayResult: false
      },
        result => {
          var resultCode = result.resultCode;
          //支付结果回调
          if (resultCode == 8000 || resultCode == 9000) {
            resolve(result['order_id']);
          } else {
            this.$Toast.fail('支付失败');
            reject();
            //  主动上报失败详情
            if (resultCode !== '6001' && typeof fundebug === 'object') {
              fundebug.notify(`纯支付-支付宝 支付失败`, null, {
                metaData: {
                  order: this.orderInfo,
                  err: result
                }
              });
            }
          }
        }
      );
    })

  },

  /**
   * 调用微信支付
   * @param {Object} result 支付参数
   */
  callWepay(result) {
    return new Promise((resolve, reject) => {
      if (typeof WeixinJSBridge === 'undefined') {
        this.$Toast.fail('支付环境未就绪');
        return reject();
      }
      WeixinJSBridge.invoke(
        'getBrandWCPayRequest', {
        appId: result['bank_wx_app_id'], //公众号名称，由商户传入
        timeStamp: result['timestamp'], //时间戳，自1970年以来的秒数
        nonceStr: result['nonce_str'], //随机串
        package: 'prepay_id=' + result['prepay_id'],
        signType: result['sign_type'], //微信签名方式：
        paySign: result['pay_sign'] //微信签名
      },
        res => {
          // 微信团队郑重提示：res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
          if (res.err_msg == 'get_brand_wcpay_request:ok') {
            resolve();
          } else {
            reject();
          }
        }
      );
    })

  }
}