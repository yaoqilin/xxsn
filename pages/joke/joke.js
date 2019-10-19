// pages/joke/joke.js
var util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let data = {
      pagenum: '1',
      pagesize: '1',
      sort: 'addtime',
      appkey: '755a617e607a789e'
    }
    this.getQuery(data);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

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