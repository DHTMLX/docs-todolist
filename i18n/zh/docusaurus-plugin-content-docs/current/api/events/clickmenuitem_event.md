---
sidebar_label: click-menu-item
title: click-menu-item 事件
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 click-menu-item 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版本。
---

# click-menu-item

### 描述 {#description}

@short: 用户点击菜单项时触发

### 用法 {#usage}

~~~js
"click-menu-item": ({
    id: string | number,
    type: "task" | "user" | "toolbar",
    action: string,
    params?: any
}) => void;
~~~

### 参数 {#parameters}

`click-menu-item` 事件的回调函数可以接收一个包含以下参数的对象：

- `id` - （必填）任务的 ID
- `type` - （必填）菜单的类型
- `action` - （必填）被点击菜单项的 ID
- `params` - （可选）被点击菜单项的附加数据
