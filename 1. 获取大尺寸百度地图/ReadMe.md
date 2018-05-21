# 获取大尺寸百度地图

利用PhontomJS写的一个小工具，通过调用百度的地图生成器，获取并导出大尺寸地图的图片

## GPS坐标

baidu.html (line 32): 当前为`121.468638,29.911319`，可修改

## 导出地图尺寸

baidu.html (line 19): 当前为`width:6970px;height:5500px;`  
capture.js (line 3,4)  
以上两处需同时修改

## 放缩尺寸

baidu.html (line 33): 当前为`18`，可修改

## 执行

命令行执行或者双击`开始获取.bat`