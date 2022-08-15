# bilibili-block-plus

b 站黑名单 plus 油猴脚本，可屏蔽指定用户作品、评论等

## Feature

- [x] 屏蔽作品
- [x] 屏蔽评论

已适配页面

- [x] 首页
- [x] 热门推荐/排行榜
- [x] 视频播放
- [ ] 动态
- [ ] 专栏页

## Useage

使用油猴脚本需要首先安装 TamperMonkey 拓展，也就是俗称的[油猴拓展](https://www.tampermonkey.net/index.php)

然后点击 [下载](https://greasyfork.org/zh-CN/scripts/448724-b-%E7%AB%99%E9%BB%91%E5%90%8D%E5%8D%95%E5%8A%A0%E5%BC%BA) 脚本

点一下这个图标

![](https://cansiny.oss-cn-shanghai.aliyuncs.com/images/1660536198914.png)

然后填写你要屏蔽的用户名/用户名正则 每行一个

![](https://cansiny.oss-cn-shanghai.aliyuncs.com/images/1660536218553.png)

最后再点一下图标保存（这步要做 不点图标不会保存）

最后刷新页面就有效果了

## development

修改后 npm run build 打包，npm run release 发布

## License

[MIT](./LICENSE) License © 2022 [Cansiny0320](https://github.com/Cansiny0320)
