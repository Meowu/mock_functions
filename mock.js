export default {
  randomNumber(length = 1, start) {
    // 随机生成一个指定长度（默认1位）的数，如果提供start则从start算起。
    const len = length - 1; // The ** operator is part of ES6, equals to Math.pow()
    if (Number(start)) {
      return start + Math.floor(Math.random() * (10 ** length - start))
    }
    return 10 ** len + Math.floor(Math.random() * (10 ** length - 10 ** len))
  },
  randomNumberArray(length = 4, byteLength = 6) {
      return Array.from(new Array(length), _ => this.randomNumber(byteLength))
  },
  randomLetters(length = 1) {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return Array.from(Array(length), _ => letters[this.randomIndex(letters)]).join('')
  },
  randomLetterArray(length = 4, byteLength = 6) {
    return Array.from(new Array(length), n => this.randomLetters(byteLength))
  },
  randomEmail() {
    const host = '@qq.com,@163.com,@gmail.com,@outlook,@sina.com,@yahoo.com'
    const index = this.randomIndex(host.split(','))
    return this.randomLetters(4) + this.randomNumber(4) + host.split(',')[index]
  },
  randomPhone(length) {
    // 随机生成一个手机号码，如果length > 1则生成一个length个号码组成的数组
    const prefix = [
      138,
      136,
      159,
      151,
      137,
      187
    ]
    const randomPrefix = prefix[this.randomIndex(prefix)]
    if (length > 1) {
      return Array.from(Array(length), _ => '' + prefix[this.randomIndex(prefix)] + this.randomNumber(8))
    }
    return '' + randomPrefix + this.randomNumber(8)
  },
  randomValue(valueArray) {
    if (!nameArray) {
      nameArray = Array.from(Array(10), _ => this.randomLetters(5))
    }
    return nameArray[this.randomIndex(nameArray)]
  },
  randomValueArray(len = 1, nameArray) {
    if (!nameArray) {
      nameArray = Array.from(Array(10), _ => this.randomLetters(5))
    }
    if (!len > 1) {
      return nameArray[this.randomIndex(nameArray)]
    }
    return Array.from(new Array(len), _ => nameArray[this.randomIndex(nameArray)])
  },
  randomName(len = 1, nameArray) {
    // 生成一个随机名字。如果长度大于一则生成名字数组，并且如果提供名字数组则在该数组取名字，否则取默认数组。
    if (!nameArray) {
      nameArray = [
        "王怡",
        "李慧",
        "叶嘉仪",
        "宋子文",
        "景桓",
        "赵武",
        "李达",
        "马旭"
      ]
    }
    if (!len > 1) {
      return nameArray[this.randomIndex(nameArray)]
    }
    return Array.from(new Array(len), _ => nameArray[this.randomIndex(nameArray)])
  },
  randomIndex(len) {
    // 生成一个随机索引，如果len是数字则索引位于0~len-1之间，如果len是数组或者字符串则生成该数组或字符串长度以内的随机索引。
    if (typeof len !== 'number') {
      len = len.length
    }
    return Math.floor(Math.random() * len);
  },
  randomObject() {
    const self = this
    return {
      name: this.randomName(),
      phone: this.randomPhone(),
      anotherName: this.randomValue(),
      order_trail_number: this.randomNumber(8),
      serviceNumber: this.randomNumber(8),
      amount: this.randomNumber(4, 50),
      seller_name: this.randomValue(1, ['洛可可时尚女装', '亲亲宝贝母婴店', '索尼官方信仰店', '诺基亚官方旗舰店', 'BOSE拔草店']),
      transfer_type: this.randomValue(1, ['个人转账', '现金支付', '公司转账']),
      buy_type: this.randomValue(1, ['商城下单', '线下下单', '外卖点餐']),
      time: Date.now(),
      buy_time: Date.now(),
      relate_store: this.randomValue(1, ['客家庄饭店', '董传辉', '新好景大酒店', '蒋冰冰']),
      position: this.randomValue(1, ['一级', '二级', '三级']),
      discount: this.randomValue(1, [0.1, 0.08, 0.2, 0.3, 0.05]),
      settle_status: this.randomValue(1, ['已结算', '结算失败', '待结算']),
      withdraw: {
        sum: self.randomValue(6, 1000),
        real: this.sum * 0.9,
        status: self.randomValue(1, ['提现成功', '提现失败'])
      },
      status: 1,
      real_withdraw_sum: this.randomNumber(4),
      refund: this.randomNumber(),
      packet_sum: this.randomNumber(3),
      packet_num: this.randomNumber(2),
      bank_account: this.randomValue(1, ['交通银行', '工商银行', '建设银行', '平安银行']),
      accept_account: this.randomValue(1, ['创业账户', '收益账户']),
      pay_type: this.randomValue(1, ['创业账户', '支付宝', '银联支付', '微信支付', '线下充值']),
      sold_type: this.randomValue(1, ['商城销售', '线下销售']),
      sold_status: this.randomValue(1, ['已完成', '新订单', '未支付']),
      donate_shares: this.randomNumber(2),
      donate_points: this.randomNumber(4, 100),
      donate_status: this.randomValue(1, ['赠送失败', '已赠送']),
      email: this.randomEmail(),
      sex: this.randomValue(1, ['男', '女']),
      recharge_sum: this.randomNumber(4, 100),
      total: this.randomArray('number', 5, 3),
      total_cash: this.randomArray('number', 5, 3)
    }
  }
};
