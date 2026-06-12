---
sidebar_label: locale
title: locale 配置
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 locale 配置。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的 30 天免费评估版。
---

# locale

### 描述 {#description}

@short: 可选。为组件应用指定的语言环境

### 用法 {#usage}

~~~js
locale?: object;
~~~

### 默认配置 {#default-config}

默认情况下，DHTMLX To Do List 使用[英语语言环境](guides/localization.md#default-locale)。

~~~js
locale: en
~~~

### 示例 {#example}

~~~js {8,13}
const { ToDo, Toolbar} = todo;
const { tasks, users, projects, tags } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    locale: de // 在组件中设置 "de" 语言环境
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
    locale: de // 在 Toolbar 中设置 "de" 语言环境（参见下方说明）
});
~~~


:::info
Toolbar 是 To Do List 的独立组件，因此您还需要通过相关的 [`locale`](api/toolbar_api/configs/locale_config.md) 属性为 **Toolbar** 单独应用所需的语言环境。
:::

:::tip
若要动态切换语言环境，请使用 [`setLocale()`](api/methods/setlocale_method.md) 方法。
:::

**相关文章：** [本地化](guides/localization.md)

**相关示例：** [To do list. 本地化](https://snippet.dhtmlx.com/kzjwvuq5)
