---
title: 头条
date: 2021-08-17
tags:
 - tag4
categories: 
 - vue
---

## 项目结构

    【父项目下分4个公共子项目】：
     【基础工程】
    - heima-leadnews-common : 是整个工程的配置核心，包括所有集成三方框架的配置定义，比如redis、kafka等。除此之外还包括项目每个模块及整个项目的常量定义;
    - heima-leadnews-model ：项目中用到的Dto、Pojo、Mapper、Enums定义工程;
        article     //文章模块 实体信息

        admin       模块名称
        pojos       实体类包
        mappers     所有的mapper文件    定义mapper接口类
        resources   mapper.xml 文件     mapper映射文件的定义 sql 语句
    - heima-leadnews-utils : 工程公用工具类项目，包含加密/解密、Date、JSON等工具类;
    - heima-leadnew-apis : 整个项目微服务暴露的接口的定义项目，按每个模块进行子包拆分;

    【多个微服务】：
    - heima-leadnews-login：    用于实现APP+自媒体端用户的登录与注册功能；
    - heima-leadnews-user：     用于实现APP端用户中心的功能，比如我的收藏、我的粉丝等功能；
    - heima-leadnews-article：  用于实现APP端文章的获取与搜索等功能；还包括频道、标签等功能；
    - heima-leadnews-behavior： 用于实现APP端各类行为数据的上传服务；
    - heima-leadnews-webmagic： 用于实现文章数据的自动化爬取功能；
    - heima-leadnews-quartz：   用于封装项目中所有的调度计算任务；
    - heima-leadnews-wemedia：  用于实现自媒体管理端的功能；
    - heima-leadnews-admin：    用于实现后台管理系统的功能；
    - service-gateway：spring cloud 网关
    - service-eureka：spring cloud 注册中心


## 项目开发规范
    开发原则：
    - 自顶向下的设计原则：功能应该从表现层分析再到控制层、服务层、持久层逐层设计
    - 自底向上的开发原则：上层需调用下层，因此开发应从底层向上层逐层开发
    - 项目中开发的层次次序参考DB->中间件->持久层->服务层->控制层
    - 单一职责的开发原则：类或者方法提供的功能应该单一明确，特别越底层越应单一职责，以便维护
    - 项目中Mapper方法必须功能单一，参数明确，拒绝两种以上的持久逻辑使用同一个Mapper方法
    - 依赖倒置的开发原则：上层依赖下层，是依赖下层接口，并不是依赖下层的实现
    - 项目中每层都是通过接口调用Controller->Service->Mapper

    开发步骤：
    - 明确类定义：明确哪些是重用类，哪些是需要新增的类
    - 明确主键规则：确认操作表的ID生成规则，是Mycat主键，还是Zk主键
    - Mapper实现：查、改、删时注意是否使用mycat注解确认DN，插入时是否要插入主键id
    - Service实现：可用通过时序图帮助我们梳理实现逻辑
    - ControllerApi定义
    - Controller实现：简单的Service层调用
    - 单元测试

    接口通用规范
    | ID混淆     | 请求和响应的连续增长的ID需要经过混淆加密                    |
    | ---------- | ----------------------------------------------------------- |
    | Date数化   | 请求和响应的的时间字段，统一转换成13位时间戳                |
    | 字符编码   | 请求和响应的内容字符集为UTF-8                               |
    | 支持多格式 | 响应结果支持JSON和XML，可通过Header Accept设置              |
    | URL格式    | Url为全小写字符，多个单词用下划线分隔                       |
    | token      | 请求头中存放当前用户的请求token（JWT格式）                  |
    | t          | 请求头中存放当前请求的时间，用于基本的请求时效判断          |
    | md         | 请求头中存放当前请求的参数验签字符串（查询串排序MD5加密）   |
    | 响应格式   | 响应格式只接受ResponseResult，code码需定义在AppHttpCodeEnum |

    工具类使用说明
    - IdsUtils工具类        把数字类型的id做aes加密混淆，比如：在url传递的过程中，自增的id会做混淆处理

    - UrlSignUtils工具类    url签名工具类

    - AppJwtUtil            jwt字符串生成验证工具类

    - AppThreadLocalUtils   当前请求用户信息操作类



##  接口开发
    1.文章列表需求开发
        表信息
            ap_article  文章信息表

            ap_user_article_list  APP用户文章列表

            ap_show_behaviorAPP文章展现行为表

            ap_behavior_entry app行为实体表
        接口名称
            load()  
            load接口，分两种情况，一个是登录，一个是未登录，加载多条数据（有条数的限制，size）,用户可以选择频道进行数据的切换
                - 登录，从后台获取用户信息，作为条件查询
                - 未登录，直接加载默认数据即可。


