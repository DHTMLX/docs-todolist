---
sidebar_label: 迁移到新版本
title: 迁移到新版本
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解如何迁移到新版本。浏览开发者指南和 API 参考，体验代码示例和在线演示，并下载 DHTMLX To Do List 的 30 天免费评估版本。
---

# 迁移到新版本 {#migration-to-newer-versions}

## 1.1 -> 1.2 {#11---12}

To Do List 的 [`taskShape`](api/configs/taskshape_config.md) 属性进行了如下更新：

~~~js {} title="v1.2 之前"
taskShape: {
    counter: { ... },
    date: { ... },
    completed: { ... },
}
~~~

~~~js {5-8} title="从 v1.2 起"
taskShape: {
    counter: { ... },
    date: { ... },
    completed: { ... },
    priority: {
        cover: true,
        label: true
    }
}
~~~

To Do List 的 [`tasks`](api/configs/tasks_config.md) 属性进行了如下更新：

~~~js {} title="v1.2 之前"
tasks: [
    {
        id: ...,
        parent: ...,
        project: ...,
        ...,
    }, { ... }
]
~~~

~~~js {6} title="从 v1.2 起"
tasks: [
    {
        id: ...,
        parent: ...,
        project: ...,
        priority: 1,
        ...,
    }, { ... }
]
~~~

## 1.0 -> 1.1 {#10---11}

在 1.1 版本中，[`taskShape`](api/configs/taskshape_config.md) 属性的 `selectable` 参数被重命名为 `completed`。此外，该参数还新增了 `taskHide` 选项。

~~~js {2} title="v1.1 之前"
taskShape: {
    selectable: {
        behavior: "manual"
    }
}
~~~

~~~js {2-5} title="从 v1.1 起"
taskShape: {
    completed: {
        behavior: "manual",
        taskHide: true
    }
}
~~~
