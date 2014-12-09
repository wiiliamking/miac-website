miac-website
=======================

[中山大学现代互联网应用俱乐部（MIAC）网站](http://sysumiac.com)

## 功能设想
* 主页：
	* 显示俱乐部网站最新的动态：文章、分享、讨论、相册等
* 发布文章: 
	* 俱乐部成员可以发布技术文章
	* 其他成员可以评论、分享
	* 文章分类：目录、标签
	* 搜索文章
* 分享：
	* 类似于微博发布，仅仅俱乐部成员可以发布
	* 带分类标签（技术、心情、吐槽等），可以用来过滤
	* 可带附件5M（资料分享）
 	 	* 附件为图品（.jpg、.png、gif）会直接显示在页面上
 	 	* 附件为其他类型可以点击下载
 	* 搜索分享
* 讨论墙
	* （中大版Stackoverflow）
	* 发布一个话题
	* 可以在下面进行评论、讨论
	* 赞同、反对
	* 搜索讨论
* 相册
	* 俱乐部成员可以上传俱乐部图片
* 作品展示
	* 俱乐部作品展示
* 关于我们：
	* 俱乐部介绍
	* 捐赠感谢
	* 捐赠我们
* 后台管理（TODO）：
	* 文章、分享、讨论的管理（删改）
	* 相册（删改）
		* 相册页面中的幻灯片设置
	* 成员管理
	* ...

* * *
**成员策略**: 所有人都可以注册成为网站用户，但是只有俱乐部成员才会有某些特殊权限（发表文章、分享、相册等）。

**成员分类**:

1. 游客：（读权限）
	* 文章查看
	* 分享下载、查看
	* 讨论墙查看
	* 相册查看
2. 用户：（读权限、部分写权限）
	* 文章查看、评论，不可以新建文章
	* 分享下载、评论，不可以新建分享
	* 讨论墙查看、评论、创建
	* 相册查看
3. 俱乐部成员（头像加V）
	* 文章查看、评论、创建
	* 分享查看、评论、创建
	* 讨论墙查看、评论、创建
	* 相册查看、上传
4. 管理员：
	* 具有所有权限
	* 后台管理功能

（详情请见 [原型设计](https://github.com/laiy/miac-website/tree/develop/prototype)）


## 团队构建
* 分享和讨论：
	* github wiki
* 协同工作：
	* github
* 任务管理：
	* github issues
* 文档管理：
	* github wiki
	* Markdown README

## 技术架构
* 版本管理（git & github）
* 后端
	* 语言：Node.js
	* MVC框架：[Express](http://expressjs.com/)
	* 数据库：Mongoose
    * 项目构建工具： Grunt, Npm, Mocha
* 前端
	* [jQuery](http://www.jquery.com)
	* [Jade](http://jade-lang.com/)
    * [Sass](http://sass-lang.com/)
    * [CoffeeScript](http://coffeescript.org/)

## License
[MIT](http://mutedsolutions.mit-license.org/)

## Powered by
[laiy](https://github.com/laiy)
