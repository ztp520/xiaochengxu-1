//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        navData: [
            {
                text: '第一'
            },
            {
                text: '第二'
            },
            {
                text: '第三'
            },
            {
                text: '第四'
            },
            {
                text: '第五'
            },
            {
                text: '第六'
            },
            {
                text: '第七'
            },
            {
                text: '第八'
            },
            {
                text: '第九'
            }
        ],
        listData:[
           {
               text:'第一栏'
           },
            {
                text: '第二栏'
            },
            {
                text: '第三栏'
            },
            {
                text: '第四栏'
            },
            {
                text: '第五栏'
            },
            {
                text: '第六栏'
            },
            {
                text: '第七栏'
            },
            {
                text: '第八栏'
            },
            {
                text: '第九栏'
            },
        ],
        currentTab: 0,
        navScrollLeft: 0
    },
    //事件处理函数
    onLoad: function () {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }


        wx.getSystemInfo({
            success: (res) => {
                this.setData({
                    pixelRatio: res.pixelRatio,
                    windowHeight: res.windowHeight,
                    windowWidth: res.windowWidth
                })
            },
        })
    },
    switchNav(e) {
       
        var cur = e.currentTarget.dataset.current;
        //每个tab选项宽度占1/5
        var singleNavWidth = this.data.windowWidth / 5;
        //tab选项居中                            
        this.setData({
            navScrollLeft: (cur - 2) * singleNavWidth
        })
        if (this.data.currentTab == cur) {
            return false;
        } else {
            this.setData({
                currentTab: cur
            })
        }
    },
    switchTab(e) {
       
        var cur = e.detail.current;
        var singleNavHeight = this.data.windowHeight;
        //每个tab选项宽度占1/5
        var singleNavWidth = this.data.windowWidth / 5;
        this.setData({
            currentTab: cur,
            navScrollLeft: (cur - 2) * singleNavWidth
        });
    }
})