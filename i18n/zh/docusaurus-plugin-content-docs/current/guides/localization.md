---
sidebar_label: 本地化
title: 本地化
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 To Do List 的本地化内容。浏览开发者指南和 API 参考，体验代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# 本地化 {#localization}

以任意语言显示 DHTMLX To Do List 界面。该库提供了多种预定义的语言区域，并支持创建自定义语言区域。默认情况下，DHTMLX To Do List 使用[英语区域](#default-locale)。

## 默认语言区域 {#default-locale}

以下代码片段展示了默认英语区域的完整结构：

~~~js
const en = {
    calendar:{ // translations and settings of the calendar
        monthFull: [
            "January", "February", "March",
            "April", "May", "June", 
            "July", "August", "September", 
            "October", "November", "December"
        ],
        monthShort: [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun",
            "Jul", "Aug", "Sep",
            "Oct", "Nov", "Dec"
        ],
        dayFull: [
            "Sunday", "Monday", "Tuesday",
            "Wednesday", "Thursday", "Friday", "Saturday"
        ],
        dayShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    
        clear: "Clear",
        done: "Done",
        today: "Today",

        weekStart: 1 // defines the first day of the week (Monday by default)
    },
    // To Do List
    todo: {
        // Toolbar
        "No project": "No project",
        "Search project": "Search project",
        "Add project": "Add project",
        "Rename project": "Rename project",
        "Delete project": "Delete project",

        // added in v1.1 (start)
        "Completed tasks": "Completed tasks",
        "Show": "Show",
        "Hide": "Hide",
        "Sort by": "Sort by",
        "Text (a-z)": "Text (a-z)",
        "Text (z-a)": "Text (z-a)",
        "Due date (new to old)": "Due date (new to old)",
        "Due date (old to new)": "Due date (old to new)",
        "Completion date (new to old)": "Completion date (new to old)",
        "Completion date (old to new)": "Completion date (old to new)",
        "Created (new to old)": "Created (new to old)",
        "Created (old to new)": "Created (old to new)",
        "Edited (new to old)": "Edited (new to old)",
        "Edited (old to new)": "Edited (old to new)",
        // added in v1.1 (end)

        // Task
        "Add task below": "Add task below",
        "Add subtask": "Add subtask",
        "Set due date": "Set due date",
        "Indent": "Indent",
        "Unindent": "Unindent",
        "Assign to": "Assign to",
        "Move to": "Move to",
        "Duplicate": "Duplicate",
        "Copy": "Copy",
        "Paste": "Paste",
        "Delete": "Delete",

        // Priorities (added in v1.2)
        "Priority (high to low)": "Priority (high to low)",
        "Priority (low to high)": "Priority (low to high)",
        "Set priority": "Set priority",
        "Reset priority": "Reset priority",

        // Shortcut
        "Enter": "Enter",
        "Tab": "Tab",
        "Shift+Tab": "Shift+Tab",
        "Ctrl+D": "Ctrl+D",
        "Ctrl+C": "Ctrl+C",
        "Ctrl+V": "Ctrl+V",
        
        // For Mac OS
        "CMD+D": "CMD+D",
        "CMD+C": "CMD+C",
        "CMD+V": "CMD+V",

        // Editor
        "Type what you want": "Type what you want",

        // Other
        "Search": "Search",
        "Add task": "Add task",
        "New project": "New project",

        // Default priority labels
        "High": "High",
        "Medium": "Medium",
        "Low": "Low"
    }
};
~~~

## 自定义语言区域 {#custom-locale}

要以非英语语言初始化 To Do List 组件，需要：

- 定义语言设置——为所有文本标签提供翻译
- 通过 `locale` 配置属性将语言区域应用于 To Do List 组件及其 Toolbar

以下示例声明了一个德语区域对象：

~~~js
const de = {
    calendar: {
        // translations for calendar labels
    },
    todo: {
        // translations for To Do List labels
    }
};
~~~

:::tip
要创建自定义语言区域，请复制[默认英语区域](#default-locale)并翻译其中的文本标签。
:::

:::info
[**此 GitHub 仓库**](https://github.com/web-widgets/wx-todo-locales/tree/master/locales)提供了以下语言的 To Do List 语言区域：

- 中文（`cn`）
- 法语（`fr`）
- 德语（`de`）
- 英语（`en`）
- 意大利语（`it`）
- 日语（`jp`）
- 葡萄牙语（`pt`）
- 俄语（`ru`）
- 西班牙语（`es`）

这些文件不包含日历标签的翻译——请自行添加。
:::

以下代码片段将 `de` 语言区域应用于 To Do List 和 Toolbar：

~~~js {8,13}
const { ToDo, Toolbar} = todo;
const { tasks, users, projects, tags } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    locale: de // sets the "de" locale in the component
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
    locale: de // sets the "de" locale in the Toolbar
});
~~~

:::tip
要动态更改语言区域，请在 To Do List 上调用 [`setLocale()`](api/methods/setlocale_method.md)，并在 Toolbar 上调用[对应的 `setLocale()`](api/toolbar_api/methods/setlocale_method.md)。
:::

## 示例 {#example}

以下代码片段演示了在 EN 和 DE 语言区域之间切换：

<iframe src="https://snippet.dhtmlx.com/kzjwvuq5?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
