---
title: css
date: 2021-08-30
tags:
 - tag1
categories: 
 - css
---

## css引入
    1.行内样式表
        将css 样式抽出来，放入 <style></style> 样式中
    2.外部样式表
        新建.CSS文件，<link rel="stylesheet" href="路径">
    3.内部样式表
        在标签内部直接写，智能控制改行样式

## css 选择器
### 基础选择器

    1.标签选择器
        html标签名作为选择器，
    2.类选择器
        . 类名 可以单独选择一个或者多个，样式点(.)定义 结构类(class)调用
    3.id选择器
        # id名 只能调用一次，别人不允许使用
    4.通配符选择器
        * 更改所有标签的样式


### 复合选择器
    1.后代选择器
        ol li   选择某元素下的所有元素
    2.子选择器
        ul > li 只能选择某元素最近一级的子元素。
    3.并集选择器
        ul,div,span  逗号分隔,可以选择多组标签
    4.伪类选择器
        a:link  选择未被访问的链接
        a:visited  选择所有已被访问的链接
        a:hover 选择鼠标指针位于其上的链接
        a:active   选择活动链接(鼠标按下未弹起的链接)
        input:focus 把获得的光标选取出来


## 元素显示模式
    1.什么是显示模式
        元素以什么方式进行显示。
        块元素   display: block;
            包括：<div> <ul> <ol> <li> <h1>~<h6> <p> 等
            特点:   1.自己独占一行
                    2.高度，宽度，外边距，内边距都可以控制
                    3.宽度默认是容器(父级容器)的100%
                    4.是一个容器及盒子，里面可以放行内或者块级元素
            说明：<p>,<h1>~<h6>标签里面，不能放块级元素
        行内元素
            包括：<a> <span> <strong> <em> <> <>
            特点：  1.相邻行内元素在一行上，一行可以显示多个
                    2.高，宽，直接设置是无效的
                    3.默认宽度就是它本身内容的宽度
                    4.行内元素只能容纳文本或其他行内元素
            说明： 链接里面不能放链接， <a>里面可以放块级元素，最好给<a>转换成块级元素
        行内块元素  display:inline-block;
            包括：<img/> <input/><td>
            特点：  1.和相邻行内元素(行内块)在一行上，他们之间会有空白缝隙，一行显示多个(行内元素)
                    2.默认宽度就是它本身内容的宽度(行内元素特点)
                    3.高度，行高，外边距，内边距都可以控制(块级元素特点)
            说明：

## 字体样式
    font-famly: '微软雅黑'  设置字体
    font-size: '20px'       设置字体大小
    font-weight: 'bold'     设置字体粗细
    font-style: 'normal'    设置字体风格
    font: font-style font-weight font-size/line-height font-family  设置字体的复合属性,顺序不能乱


## 文本属性
    color: 'red'  文本颜色
    text-align: 'center'    文本对齐方式
    text-indent: '2em'      文本缩进
    text-decoration: 'none' 文本修饰    取消下划线
    line-height: '10px'     行高 

## CSS 三大特性
    1.层叠性    层叠性，就近原则，样式不冲突，不层叠
    2.继承性    子元素会继承父元素的样式，font: 12/1.5; 子元素行高 * 1.5
    3.优先级    权重  行内Style > id选择器 > 类 伪类选择器 > 元素选择器 > 继承或者 * 


## 盒子模型
    盒子模型的组成
        border,padding,margin,content
        margin: 1. 块级元素居中 （盒子本身必须指定宽度，可以使用 margin: 0 auto; 来水平居中）
                2. 行内块元素或者行内元素(给父类添加 test-align:center; 实现水平居中)
                3. 外边距合并 只会出现垂直情况，左右不会，如果两个 距离出现，取较大值作为距离
                4. 嵌套块元素垂直外边距塌陷。只要给 父盒子 添加 overflow：hidden ，就可以解决
                5. 行内元素为了照顾兼容性，尽量只设置左右内外边距，不要设置上下内外边距，转换为块级和行内块元素就可以了。

##  盒子阴影
    box-shadow：10px 10px 10px 10px block;
                h-shadow 水平阴影的位置，
                v-shadow 垂直阴影的位置
                blur 模糊距离
                spread 阴影的尺寸
                color 阴影的颜色 
                inset 外部阴影(outset)改为内部阴影
    
    


## 实用小工具
    snipaste 截图工具
        F1 截图，
        F3 在桌面置顶
        点击图片，Alt可以取色
        ESC 推出