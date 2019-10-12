// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [{
      color: '#2b4490',
      text: '学识字'
    }, {
      color: '#f15b6c',
      text: '学古诗'
    }, {
      color: '#8f4b2e',
      text: '学儿歌'
    }, {
      color: '#f58f98',
      text: '学拼音'
    }, {
      color: '#b2d235',
      text: '三字经'
    }, {
      color: '#bed742',
      text: '学数学'
    }, {
      color: '#a3cf62',
      text: '学英语'
    }, {
      color: '#6d8346',
      text: '乘法表'
    }, {
      color: '#444693',
      text: '做练习'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const colorList = ['green', 'red', 'yellow'];
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
   * 点击小卡片跳转对应页面
   */
  bindViewClick: function() {
    console.log("待开发")
    wx.navigateTo({
      url: '../font/font'
    })
  }
})