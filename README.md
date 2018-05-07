# 喵与猫寻 Meowcat
创建日期：2018年4月26日星期四

宗旨：喵与猫寻致力于解决当前社会中流浪猫狗的生存问题，为具备收养条件且有收养需求的用户提供相关信息，并且提供走失宠物招领的功能和宠物社区的模块。

我们是来自棒棒团的成员，我们想做个可以帮助流浪猫的一个小程序，同时也可以提升我们的能力。


![](https://raw.githubusercontent.com/Tex-wz/meowcat/master/images/intro.jpg)

# 项目结构
```sh
Meowcat
├── api        # 和后端做数据交换
  ├── cat       # 添加猫和提取猫在地图上和显示猫页面的信息
  ├── timeline  # 负责时间轴的赞，分享，评论和提取数据
  └── auth.js   # 存取用户信息
├── components
  ├── bottombar # 导航栏
  ├── card      # 热门时间轴的卡片
  ├── map
    └── popover  # 地图上的气泡卡片（猫和救助所）
  ├── timeline  # 时间轴
    ├── topbar   # 时间轴页面的顶部栏
    └── post     # 时间轴的卡片
├── pages
  ├── cat
    ├── add
    └── view
  ├── community # 社区
  ├── profile   # 个人中心
    ├── notices
    ├── notifications
    └── settings
  └── timeline  # 时间轴页面（用户本身和其他用户公用）
└── utils 
  └── validate.js # 所有验证用户提交信息都在这边
```
# 组件分配
![](https://cdn.rawgit.com/Tex-wz/meowcat/9ee1b640/images/%E7%BB%84%E4%BB%B6%E5%88%86%E9%85%8D.svg)