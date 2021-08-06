// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isBlank: true,
    guessList: [
      {
        id: 1,
        img: "",
        title: "可口可乐",
        price: "3.00",
        sold: "1"
      },
      {
        id: 2,
        img: "",
        title: "康师傅老坛酸菜牛肉面",
        price: "4.00",
        sold: "1"
      },
      {
        id: 3,
        img: "",
        title: "农夫山泉",
        price: "2.00",
        sold: "1"
      },
      {
        id: 4,
        img: "",
        title: "剃须刀",
        price: "1088.00",
        sold: "1"
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
  clear_cart: function (event) {
    console.log(event)
    wx.navigateTo({
      url: './clear_cart/clear_cart'
    })
  },
  return_last: function (event) {
    console.log(event)
    wx.switchTab({
      url: '../member/member'
    })
  }
})