---
sidebar_label: openInlineEditor()
title: openInlineEditor 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 openInlineEditor 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费 30 天评估版本的 DHTMLX To Do List。
---

# openInlineEditor()

### 描述 {#description}

@short: 打开任务/项目的内联编辑器

### 用法 {#usage}

~~~js
openInlineEditor({
    id: string | number,
    type?: "task" | "project"
}): void;
~~~

### 参数 {#parameters}

- `id` - （必填）任务/项目的 id
- `type` - （可选）条目的类型："task"（默认）或 "project"

### 示例 {#example}

~~~js {17-19}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 打开任务的内联编辑器
list.openInlineEditor({ 
    id: "1.1.1",
});
~~~

**相关文章：** [内联编辑](guides/inline_editing.md)
