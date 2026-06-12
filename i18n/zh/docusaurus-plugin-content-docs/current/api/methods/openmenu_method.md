---
sidebar_label: openMenu()
title: openMenu 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 openMenu 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费 30 天评估版本的 DHTMLX To Do List。
---

# openMenu()

### 描述 {#description}

@short: 在指定坐标处打开任务/项目的菜单

### 用法 {#usage}

~~~js
openMenu({
    id: string | number,
    type?: "task" | "user" | "project",
    coords: { x: number, y: number }
}): void;
~~~

### 参数 {#parameters}

- `id` - （必填）任务/项目的 ID
- `type` - （可选）菜单的类型，共有三种菜单类型：
  - `task`（默认）- 任务菜单
  - `user` - 用户菜单
  - `project` - 项目菜单
- `coords` - （必填）包含菜单 x 和 y 坐标的对象：
    - `x` - （必填）x 坐标的值
    - `y` - （必填）y 坐标的值
