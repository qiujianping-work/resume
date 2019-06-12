/** index.js **/

Page({
  data: {
    blog: 'https://www.cnblogs.com/AnotherLife/',
    phone: '13928412827',
    mail: '13928412827@163.com',
    github: 'https://github.com/qiujianping-work',
    demo:""
  },

  copyBlog() {
    wx.setClipboardData({
      data: this.data.blog,
      success() {
        wx.showToast({
          title: '内容已复制',
          icon: "none",
          duration: 1000
        })
      }
    })
  },

  copyDemo() {
    wx.setClipboardData({
      data: this.data.demo,
      success() {
        wx.showToast({
          title: '内容已复制',
          icon: "none",
          duration: 1000
        })
      }
    })
  },

  actionSheetTap() {
    wx.showActionSheet({
      itemList: ['呼叫', '复制'],
      success(e) {
        console.log(e.tapIndex)
        if (e.tapIndex===0){
            wx.makePhoneCall({
              phoneNumber: '13824339381',
              success() {
                console.log('成功拨打电话')
              }
            })
        }
        else if (e.tapIndex === 1){
          wx.setClipboardData({
            data: '13824339381',
            success() {
              wx.showToast({
                title: '内容已复制',
                icon: 'none',
                duration: 1000,
              })
            }
          })
        }
      }
    })
  },

  copyMail() {
    wx.setClipboardData({
      data: this.data.mail,
      success() {
        wx.showToast({
          title: '内容已复制',
          icon: 'none',
          duration: 1000
        })
      }
    })
  },

  copyGithub() {
    wx.setClipboardData({
      data: this.data.github,
      success() {
        wx.showToast({
          title: '内容已复制',
          icon: 'none',
          duration: 1000
        })
      }
    })
  },

})