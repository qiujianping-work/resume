/** index.js **/
const config = require('../../resume.config.js');
console.log("dfdf---",config);
Page({
  data: {
    blog: 'https://www.cnblogs.com/AnotherLife/',
    phone: '13928412827',
    mail: '13928412827@163.com',
    github: 'https://github.com/qiujianping-work',
    demo: "",
    technologies: config.technologies,
    tools: config.tools,
    experiences: config.experiences,
    introduce: config.introduce,
  },
  //博客按钮
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

  //电话按钮
  actionSheetTap() {
    const phoneNum = this.data.phone;
    wx.showActionSheet({
      itemList: ['呼叫', '复制'],
      success(e) {
        if (e.tapIndex === 0) {
          wx.makePhoneCall({
            phoneNumber: phoneNum,
            success() {
              console.log('成功拨打电话')
            }
          })
        }
        else if (e.tapIndex === 1) {
          wx.setClipboardData({
            data: phoneNum,
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
  //邮件按钮
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
  //github按钮
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