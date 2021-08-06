//index.js

Page({
  data: {
    slides: [
      "https://img1.360buyimg.com/da/s750x366_jfs/t24163/29/833026140/92109/1a7ce0b9/5b444e17Na4a33488.jpg!cr_1125x549_0_72.dpg",
      "http://img.dmall.com/mIndex/201612/f8d1c169-1229-4121-8b39-b997d4cef239_750H",
      "http://img.dmall.com/mIndex/201611/8412c37b-754b-4e1e-8e2c-cb8653cd4d0b_750H"
    ],
    bargainList: [
      {
        title: "康师傅老坛酸菜牛肉面",
        img: "",
        desc: "休闲百货",
        originalPrice: "4.00",
        limit: "206"
      },
      {
        title: "农夫山泉",
        img: "",
        desc: "休闲百货",
        originalPrice: "2.00",
        limit: "158"
      },
      {
        title: "红富士苹果",
        img: "",
        desc: "酒水调料",
        originalPrice: "6.99",
        limit: "18"
      }
    ],
    topicList: [
      {
        img: "//img20.360buyimg.com/mobilecms/s700x256_jfs/t7393/171/765889073/61915/936cc270/5996e7eaNa22d72b4.jpg!q90!cc_350x128.webp",
        title: "生活用品",
        subTitle: "带给你不一样的体验",
      },
      {
        img: "//img11.360buyimg.com/mobilecms/s700x256_jfs/t20539/229/82605291/66559/df347eb5/5af96a18N9451b1a1.jpg!q90!cc_350x128.webp",
        title: "休闲百货",
        subTitle: "舌尖上的非凡感觉",
      }
    ]

  },
  goDetail: function (event) {
    console.log(event)
    wx.navigateTo({
      url: './goodsDetail/goodsDetail'
    })
  }
})