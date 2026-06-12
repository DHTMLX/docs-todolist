---
sidebar_label: 内联编辑
title: 内联编辑
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解内联编辑。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# 内联编辑

双击任务或项目即可进行内联编辑。内联编辑默认开启。

:::tip
启用 To Do List 的 [`readonly`](api/configs/readonly_config.md) 模式后，内联编辑将不可用。
:::

## 支持的数据格式 {#supported-formats-of-data}

内联编辑器接受三种数据类型：文本与数字、话题标签（hashtag）和日期。

### 文本与数字 {#text-and-numbers}

直接在内联编辑器中输入任意文本或数字。

### 话题标签 {#hashtags}

使用话题标签对任务进行分类，使其更易于搜索。请遵循以下规则：

- 话题标签由 `#` 符号加字母和数字组成（例如 `#sport`）
- 创建话题标签时，输入 `#` 后跟至少一个字符（例如 `#t`），然后按 Enter
- To Do List 支持无限数量的话题标签——用空格分隔（例如 `#tag #tag1`）
- 所有话题标签在所有项目中均可访问
- 若要查看话题标签列表，输入 `#` 符号
- 若要将话题标签添加到任务，在列表中点击它
- 若要激活严格过滤，点击话题标签或在工具栏的搜索栏中输入它

:::info
通过 [`tags`](api/configs/tags_config.md) 属性创建默认标签列表。
:::

### 日期 {#dates}

若要通过内联编辑器输入日期，键入 `!` 符号——页面上会出现内置的日期选择器。

您也可以将文本用特殊符号 `!()` 包裹。例如，输入 `!(Enter Booking date)` 并按 Enter 关闭编辑器。之后点击此文本可重新打开日期选择器。

:::info
日期外观取决于 [`locale`](api/configs/locale_config.md) 和[日期格式](api/configs/taskshape_config.md)。
:::

## 使用编辑器 {#working-with-editor}

若要为特定任务或项目打开编辑器，请使用 [`openInlineEditor()`](api/methods/openinlineeditor_method.md) 方法。以下代码片段为特定任务打开编辑器：

~~~js
list.openInlineEditor({ id: "1.1.1" });
~~~

若要关闭编辑器并保存更改，请将项目 id 传递给 [`closeInlineEditor()`](api/methods/closeinlineeditor_method.md) 方法：

~~~js
list.closeInlineEditor({
    id: "1.1.1"
});
~~~

若要关闭编辑器而不保存更改，请将 `save` 参数设置为 `false`。以下示例在关闭时丢弃更改：

~~~js
list.closeInlineEditor({
    id: "1.1.1",
    save: false
});
~~~

## 追踪编辑器更改 {#track-editor-changes}

订阅 [`edit-item`](api/events/edititem_event.md) 事件以追踪内联编辑器中输入的值。该事件在用户输入时触发，在值保存之前执行。

以下代码片段记录任务或项目的当前编辑器值：

~~~js
list.api.on("edit-item", ({ id, currentValue }) => {
    console.log("Current value of", id, "is", currentValue);
});
~~~

## 键盘快捷键 {#keyboard-shortcuts}

:::info
请参阅[**键盘导航**](guides/keyboard_navigation.md)指南以获取更多信息。
:::
