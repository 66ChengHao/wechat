// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select: 0,
    categories: [
      {
        id: 1,
        name: '推荐商品'
      },
      {
        id: 2,
        name: '热销商品'
      },
      {
        id: 3,
        name: '折扣商品'
      },
      {
        id: 3,
        name: '休闲百货'
      },
      {
        id: 4,
        name: '酒水调料'
      },
      {
        id: 5,
        name: '生鲜水果'
      },
      {
        id: 6,
        name: '生活用品'
      },
      {
        id: 7,
        name: '其他'
      },
    ],
    goodsList: [
      {
        id: 3,
        title: "可口可乐",
        image: "",
        price: 3.00
      },
      {
        id: 5,
        title: "农夫山泉",
        image: "",
        price: 2.00
      },
      {
        id: 5,
        title: "剃须刀",
        image: "",
        price: 1088.00
      },
    ],
    imageWidth: "",
    imageHeight: "",
    imageX: "",
    imageY: "",
    wxAppendData: [],
    imageUrl: '',
    btnId: '',
    showImage: false,
    imageStyle: ''

  },    
  /**
   * 选择商品类型
   */ 
  categoryClick: function(event) {
    this.setData({
      select: event.target.id - 1
    })
    // toast提示
    wx.showToast({
      title: event.target.id,
    })
    // 更新接口
  },
  /**
   * 加入购物车
   */
  addToCart: function (event) {
    // toast提示
    wx.showToast({
      title: '加入成功！',
    })
    // console.log(event.target.id)
    // console.log(event.target.id.split(','))
    // this.setData({
    //   showImage: true,
    //   imageUrl: event.target.id.split(',')[0],
    //   btnId: event.target.id.split(',')[1]
    // })
    // console.log('imageUrl', this.data.imageUrl)
    // var _this=this;
    // /*创建节点选择器*/
    // var query = wx.createSelectorQuery();
    // /*选择id*/
    // query.select('#goods-image-' + this.data.btnId).boundingClientRect()
    // query.exec(function (res) {
    //   /*res就是该元素的信息数组*/
    //   console.log(res);
    //   /*获取节点信息*/
    //   _this.setData({
    //     imageWidth: res[0].width,
    //     imageHeight: res[0].height,
    //     imageX: res[0].left,
    //     imageY: res[0].top,
    //     imageStyle: 'width:'+res[0].width + "px;" +
    //                 'height:' + res[0].height + 'px;' +
    //                 'position: fixed;' +
    //                 'z-index: 100;' +
    //                 'left: ' + res[0].left + 'px;' +
    //                 'top: ' + res[0].top + 'px;' +
    //                 'animation: drop 5s ease .5s;' +
    //       '@-webkit-keyframes drop {\n' +
    //     '  0% {\n' +
    //     '    width: 60px;\n' +
    //     '    height: 60px;\n' +
    //     '  }\n' +
    //     '  100% {\n' +
    //     '    width: 1.15rem;\n' +
    //     '    height: 1.15rem;\n' +
    //     '    left: 200px;\n' +
    //     '    top: 700px;\n' +
    //     '    border-radius: 50%;\n' +
    //     '    -webkit-transform: rotate(180deg);\n' +
    //     '    -moz-transform: rotate(180deg);\n' +
    //     '    -o-transform: rotate(180deg);\n' +
    //     '    -ms-transform: rotate(180deg);\n' +
    //     '  }\n' +
    //     '}'
    //
    //   })
    //   console.log('取坐标X', _this.data.imageX);
    //   console.log('取坐标Y', _this.data.imageY);
    //   /*动态渲染商品图片，用以动画效果*/
    //   setTimeout(function () {
    //     _this.setData({
    //       showImage: false
    //     })
    //   }, 3000)
    // })
  }
})