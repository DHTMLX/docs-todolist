---
sidebar_label: drag
title: drag 配置
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 drag 配置。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的 30 天免费评估版。
---

# drag

### 描述 {#description}

@short: 可选。指定拖放操作的相关设置

:::note
在触摸设备上拖放任务时，会有 500 毫秒的延迟。
:::

### 用法 {#usage}

~~~js
drag?: boolean;
//或 
drag?: {
    expand?: boolean
};
~~~

### 参数 {#parameters}

配置拖放功能时，可以使用**简写**或**扩展**两种方式。

**简写**方式：

- `drag` - （可选）启用/禁用任务的拖放功能

**扩展**方式：

- `drag` - （可选）包含拖放设置的对象。该对象可包含以下参数：
    - `expand` - （可选）定义在拖放过程中，将任务悬停于折叠任务上时是否自动展开该任务

### 默认配置 {#default-config}

~~~js
drag: true
// 或
drag: {
    expand: true
}
~~~

### 示例 {#example}

~~~js {9-11}
const { ToDo, Toolbar } = todo;

// 创建 To Do List
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        ...
    ],
    drag: {
        expand: false
    }
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

**更新日志：** 在 v1.1 中新增

**相关文章：** [配置](guides/configuration.md#drag-n-drop)
