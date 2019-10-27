// pages/english/english.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [{
      font: '大',
      words: '大树，大楼'
    },
    {
      font: '小',
      words: '小草，小鱼'
    }, {
      font: '高',
      words: '高山,高兴'
    }, {
      font: '低',
      words: '高低，低温'
    }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 获取界面数据
   */
  getQuery: function(data) {
    var that = this;
    console.log(that)
    wx.request({
      url: 'https://api.jisuapi.com/xiaohua/text',
      data: data,
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res);
        that.setData({
          array: res.data.result
        });
        console.log(res.data.result);
      },
      fail: function () {
        // fail
      },
      complete: function () {
        console.log("d");
      }
    })
  }
})