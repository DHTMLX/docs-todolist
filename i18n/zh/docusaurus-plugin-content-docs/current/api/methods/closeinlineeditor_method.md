---
sidebar_label: closeInlineEditor()
title: closeInlineEditor 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 closeInlineEditor 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# closeInlineEditor()

### 描述 {#description}

@short: 关闭任务/项目的内联编辑器

### 用法 {#usage}

~~~js
closeInlineEditor({
    id: string | number,
    save?: boolean
}): void;
~~~

### 参数 {#parameters}

- `id` - （必填）任务/项目的 id
- `save` - （可选）定义关闭编辑器后是否保存更改；默认为 `true`

### 示例 {#example}

~~~js {17-20}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 关闭任务的内联编辑器且不保存所做的更改
list.closeInlineEditor({ 
    id: "1.1.1",
    save: false
});
~~~

**相关文章：** [内联编辑](guides/inline_editing.md)
