---
sidebar_label: locale
title: locale Config
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 Toolbar 的 locale 配置项。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载免费 30 天评估版本的 DHTMLX To Do List。
---

# locale

### 描述 {#description}

@short: 可选。为 Toolbar 应用所需的语言环境

### 用法 {#usage}

~~~js
locale?: object;
~~~

### 默认配置 {#default-config}

默认情况下，DHTMLX To Do List 的 Toolbar 使用[英语语言环境](guides/localization.md#default-locale)。

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
    locale: de // 为 To Do List 组件设置 "de" 语言环境（请阅读以下说明）
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
    locale: de // 为 Toolbar 设置 "de" 语言环境
});
~~~


:::info
Toolbar 是 To Do List 的独立组件。因此，在为 Toolbar 应用所需语言环境之前，请确保已将其应用于 **To Do List**
:::

:::tip
如需动态切换语言环境，请使用 [`setLocale()`](api/toolbar_api/methods/setlocale_method.md) 方法
:::

**相关文章：** [本地化](guides/localization.md)
