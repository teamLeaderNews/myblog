---
title: javascript
date: 2021-09-02
tags:
 - tag1
categories: 
 - javascript
---


## JavaScript 编程语言
    bit < byte < KB < MB < GB < TB 
    位(bit) 1bit可已保存一个0或者1(最小的存储单位)
    字节(byte)：1B = 8b
    千字节(KB)：1KB = 1024B
    兆字节(MB)：1MB = 1025KB
    吉字节(GB)：1GB = 1024MB
    太子节(TB)：1TB = 1025GB

## JavaScript历史
    布兰登.艾奇(Brendan 1961年~)
    运行在客户端的 脚本语言
    渲染引擎：用来解析HTML和CSS ，俗称内核，
    JS引擎：


## JavaScript组成
    ECMAScript: JavaScript语法
    DOM：页面文档对象模型   
    BOM：浏览器对象模型


## js 变量
    1.变量的概述
        变量就是 一个装东西的盒子。
        变量是用于存放数据的容器，通过变量名获取数据，甚至修改数据
    2.变量的使用
        var age // 声明变量
    3.数据类型
        js 是动态语言，变量的数据类型是可以变化的
        简单数据类型：Number  Boolean  String Undefined  Null
        复杂数据类型：Object
        typeof num  检测数据类型
        数据类型转换：
            num.toString()  转换为字符串类型
            String(num)     转换为字符串
            "字符串"+num    转换为字符串

            parseInt(String)    转换为整数数值型
            parseFloat('3.14')  转换为浮点类型
            Number('String')    强制转换为数值型
    4.运算符
        递增(++)    
        递减(--)    放在变量后：先返回原值 在加 1       放在变量前:        
        ===   要求 数据类型，值完全相等
        ==    要求，值相等
        && 逻辑与，简称‘and’        两侧都为 true 结果为 true，有一侧为false，结果为false
        || 逻辑或，简称‘or’         两测只要有一个 true，结果为 true，两侧都为false，结果为false
        ！ 逻辑非，简称‘not’   
        逻辑与(&&)中断  （123 && 456） 表达式 1 为真，则返回表达式 2 ，表达式 1 为假，返回表达式 1
        逻辑或(||)中断  （123 || 456） 表达式 1 为真，则返回表达式 1 ，表达式 1 为假，返回表达式 2

        8 > 5 ? '真'：'假'   条件表达式 ？ 表达式1 ： 表达式2    如果表达式为真，则返回表达式1， 反之为假


## 循环
    for循环的执行过程。for(let i=1; i<=100;i++){confirm.log('要执行的语句')}
        1.先执行 i=1；
        2.在执行 i <= 100;
        3.在执行 {} 里面的表达式
        4.在执行 i++;
        5.在执行 i<= 100;
        6.在执行 {} 里面的表达式
     
    while(表达式){ '执行语句' } 循环  当条件表达式为true时，执行循环体，否则退出。

    do{ '执行语句' }while(表达式) 先执行语句，在验证表达式

    continue 跳出本次循环，执行下次循环
    break   跳出整个循环

## 数组
    1.通过new 创建数组
        let arr = new Array()
    2.通过数组字面量创建数组
        let arr = []
    
    3.数组的内置对象
        instanceof           检测是否是数组
        Array.isArray()      检测是否是数组

        join()  join(separator): 将数组的元素组起一个字符串，以separator为分隔符，省略的话则用默认用逗号为分隔符，该方法只接收一个参数：即分隔符。 
        push(): 可以接收任意数量的参数，把它们逐个添加到数组末尾，并返回修改后数组的长度。 
        pop()：数组末尾移除最后一项，减少数组的 length 值，然后返回移除的项。
        shift()：删除原数组第一项，并返回删除元素的值；如果数组为空则返回undefined 。 
        unshift():将参数添加到原数组开头，并返回数组的长度 。
        sort()：按升序排列数组项——即最小的值位于最前面，最大的值排在最后面。
        reverse()：反转数组项的顺序。
        
        concat():将参数添加到原数组中。这个方法会先创建当前数组一个副本，然后将接收到的参数添加到这个副本的末尾，最后返回新构建的数组。在没有给 concat()方法传递参数的情况下，它只是复制当前数组并返回副本。
        
        slice():返回从原数组中指定开始下标到结束下标之间的项组成的新数组。slice()方法可以接受一或两个参数，即要返回项的起始和结束位置。在只有一个参数的情况下， slice()方法返回从该参数指定位置开始到当前数组末尾的所有项。如果有两个参数，该方法返回起始和结束位置之间的项——但不包括结束位置的项。
        
        splice()：很强大的数组方法，它有很多种用法，可以实现删除、插入和替换。
        删除：可以删除任意数量的项，只需指定 2 个参数：要删除的第一项的位置和要删除的项数。例如， splice(0,2)会删除数组中的前两项。
        插入：可以向指定位置插入任意数量的项，只需提供 3 个参数：起始位置、 0（要删除的项数）和要插入的项。例如，
        
        splice(2,0,4,6)会从当前数组的位置 2 开始插入4和6。
        替换：可以向指定位置插入任意数量的项，且同时删除任意数量的项，只需指定 3 个参数：起始位置、要删除的项数和要插入的任意数量的项。插入的项数不必与删除的项数相等。例如，splice (2,1,4,6)会删除当前数组位置 2 的项，然后再从位置 2 开始插入4和6。
        splice()方法始终都会返回一个数组，该数组中包含从原始数组中删除的项，如果没有删除任何项，则返回一个空数组
        
        indexOf()和 lastIndexOf() （ES5新增）
        forEach() （ES5新增）
        map() （ES5新增）
        filter() （ES5新增）
        every() （ES5新增）
        some() （ES5新增）
        reduce()和 reduceRight() （ES5新增）
   

## 函数
    1.函数的概念：封装一个可以被重复调用的代码块 function get(num1,num2){}
    2.函数的使用：
        1）声明函数 function 函数名(参数1，参数2){}   函数名一般是小写
        2）调用函数 函数名(参数1，参数2)
    3.函数的参数
        形参：在声明函数的小括号里面是形参(形式上的参数)
        实参：在函数调用的小括号里是实参(实际的参数)
    4.arguments的使用
        arguments对象中存储了传递的所有实参
        伪数组: 并不是真正的数组
            1）具有数组的length属性，
            2）按照索引的方式进行存储
            3）他没有真正数组的一些方法 如pop() push()
    5.函数的声明方式
        1)命名函数：function fn(){}
        2）let 变量名 = function fu(){}

## 作用域
    预解析	
    1. js 引擎运行js分为两步， 预解析 代码执行
        1）预解析 js引擎会把js 里面所有的var 还有function 提升到当前作用域的最前面，
        2）代码执行 按照代码书写的顺序从上往下执行
    2. 预解析分为  变量预解析(变量提升) 和 函数预解析 （函数提升）
        1）变量提升，就是把所有的变量声明提升到当前作用域最前面，不提升复制操作
        2）函数提升，就是把所有的函数声明提升到当前作用域的最前面，不调用函数
    

## 创建对象的三种方式
 
    1.创建对象
        对象是一个具体的事物，看得见摸得着的实物
        对象是一组无序的相关属性和方法的集合，所有的事物都是对象，例如字符串，数值，数组，函数
        对象是由 属性和方法组成
            属性：事物的特征，对象中用属性来表示
            方法：事物的行为，对象中用方法来表示
    2.创建对象的方法
        1).通过字面量创建对象
            let data = {name:'name'}
        2).通过new Object() 创建对象
            let data = new Object()  data.name = 'name'
        3).通过构造函数创建对象
            new people(name){ this.name = name }

 	3. 变量，属性，方法，函数的区别
      	1. 变量：单独声明并赋值，使用的时候直接写变量名，单独存在。
      	2. 属性，在对象里面的不需要声明的，使用的时候必须是 对象.属性
      	3. 函数是单独声明的，并且调用的 函数名() 单独存在的
      	4. 方法 在对象里面调用的时候，对象.方法()

    构造函数，泛指某一大类，
    对象，实实在在存在的指某一个具体的事物
    new 在执行的时候四件事情
        1.在内存中创建一个新的空对象。
        2.让this指向这个新的对象
        3.执行构造函数里面的代码，给这个新对象添加属性和方法
        4.返回这个新对象
    
    4.遍历对象
        for in 遍历对象，for(变量 in 对象) {console.log(k，对象[k]) k: 得到属性名 对象[k]：得到属性值 }


## 内置对象
    javascript 中对象分为3中，自定义对象，内置对象，浏览器对象。前面两种是js基础，属于ECMAScript;
    Math对象
        Math.PI  圆周率
        Math.floot()    向下取整
        Math.ceil()     向上取整
        Math.round()    四舍五入 
        Math.abs()      绝对值
        Math.max        最大值
        Math.ramdom()   随机返回一个小数  

    Date对象
        let date = new Date()
    ​	 date .getFullYear()	 // 获取年	
    ​	 date.getMonth()		// 获取月(0-11)
    ​	 date.getDate()			// 获取当天日期
    ​	 date.getDay()			// 获取星期几 （周0-周六）
    ​	 date.getHourse()	// 获取当前小时
    ​	 date.getMinutes()	// 获取当前分钟
    ​	 date.getSeconds()	//获取当前秒
        // 获取当前时间距离1970年1月1号 多少毫秒
        date.valueOf()
        date.getTime()	
        +new Date() 
        Date.noe()



## 简单数据类型，复杂数据类型
    栈
        简单数据类型：Number  Boolean  String Undefined  Null
        存放的是值
    堆
        复杂数据类型：Object
        在栈里面存放地址，十六进制，在指向堆里面的数据


# 第二阶段 WebApis
    webapis是w3c 组织的标准
    web apis 主要分为 DOM和BOM

    api 应用程式编程接口    给程序员提供一种工具，
    webapi 浏览器提供的一套 浏览器功能和页面元素的API(BOM & DOM)

## DOM
    什么是DOM   documentObjectModel 简称DOM,文档对象模型 处理可标记语言的标准编程接口
    文档：一个页面就是一个文档，DOM中使用 document 表示
    元素：页面中的所有标签都是元素，Dom 中使用 element 表示
    节点：网页中所有内容都是节点(标签，属性，文本，注释)，DOM中使用 node 表示

    id选择器：document.getElementById('id') 返回的是 元素对象
    标签选择器：document.getElementByTagName('标签名') 返回的是，元素集合，伪数组存粹的
    class选择器：document.getElementByClassName('类名') 返回的是 元素集合，伪数组存粹的
    全部选择器：document.querySelector('.类名')  返回 指定选择器的第一个对象
        document.querySelectorAll('.类型')    返回指定选择器的所有元素
    
    body选择器：document.body
    html选择器：document.documentElement

    element.innerText = 'text' //改变元素内容 不识别html标签   获取内容去除 空格和换行
    element.innerHtml = 'html' //改变元素内容 识别html标签 w3c 推荐  获取内容，保留空格和换行

    


## 事件基础
    触发响应的一种机制，
    btn.onclick = function (){}：点击事件












