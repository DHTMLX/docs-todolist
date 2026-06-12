---
sidebar_label: priorities
title: priorities 配置
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 priorities 配置。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的 30 天免费评估版。
---

# priorities

### 描述 {#description}

@short: 可选。指定包含优先级数据的对象数组

### 用法 {#usage}

~~~js
priorities?: [
    {
        id: number,
        label: string,
        hotkey?: string,
        color?: string,
    },
    { ... } // 更多优先级项
];
~~~

### 参数 {#parameters}

`priorities` 属性为优先级对象数组。每个对象包含以下参数：

- `id` - （必填）优先级 ID
- `label` - （必填）优先级标签
- `hotkey` - （可选）用于应用该优先级的自定义键盘快捷键名称。如需定义自定义快捷键组合，需要按照以下示例处理自定义事件
- `color` - （可选）优先级颜色

:::info
如果未指定 `color` 参数，组件将自动应用以下默认颜色之一：

`"#ff5252" "#ffc975" "#0ab169" "#607D8B" "#00C7B5"`

`"#03A9F4" "#9575CD" "#F06292" "#FF9800"`
:::

### 默认配置 {#default-config}

~~~jsx {}
const priorities: [
    {
        id: 1,
        label: "High",
        color: "#ff5252",
        hotkey: "Alt+1"
    },
    {
        id: 2,
        label: "Medium",
        color: "#ffc975",
        hotkey: "Alt+2"
    },
    {
        id: 3,
        label: "Low",
        color: "#0ab169",
        hotkey: "Alt+3"
    },
];
~~~

### 示例 {#example}

~~~js {7-28,34,37-47}
const { ToDo } = todo;

const tasks = [ ... ];
const users = [ ... ];
const projects = [ ... ];

const priorities = [
    {
        id: 1,
        label: "Critical",
        color: "#f33",
    },
    {
        id: 2,
        label: "Major",
        color: "rgba(255, 225, 0, 1)",
    },
    {
        id: 3,
        label: "Normal",
        color: "hsla(170, 100%, 40%, 1)",
    },
    {
        id: 4,
        label: "Minor",
        hotkey: "Alt+M", // 处理 "keydown" 事件以定义 "Alt+M" 组合键
    },
];

const list = new ToDo ("#root", {
    tasks,
    users,
    projects,
    priorities
});

// "Alt+M" 快捷键的自定义事件处理程序
document.addEventListener("keydown", event => {
    if (event.altKey && event.key.toLocaleLowerCase() === "m") {
        list.eachSelected(id => {
            list.updateTask({
                id,
                task: { priority: 4 }
            });
        });
    }
});
~~~

**相关文章：**
- [加载和存储数据](guides/loading_data.md)

**相关示例：** [To do list. 设置优先级的自定义快捷键](https://snippet.dhtmlx.com/5cymicwt?tag=todolist)
