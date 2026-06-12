---
sidebar_label: setConfig()
title: setConfig 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 setConfig 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# setConfig()

### 描述 {#description}

@short: 为 To Do List 设置新的配置

### 用法 {#usage}

~~~js
setConfig(config: object): void;
~~~

### 参数 {#parameters}

- `config` - （必填）包含 To Do List 新配置的对象。完整属性列表请参见[此处](api/api_overview.md#to-do-list-properties)

:::tip
该方法仅修改您传入的参数。也可以通过该方法向 To Do List 加载数据，但建议使用 [`parse()`](api/methods/parse_method.md) 方法来完成此操作。
:::

:::important
`setConfig()` 方法会销毁当前组件并重新初始化一个新组件。如果您将组件与 **Toolbar** 一起使用，需要调用 **Toolbar** 的 [`setConfig()`](api/toolbar_api/methods/setconfig_method.md) 方法，因为它使用了 To Do List 的内部 API。请参见下方示例！
:::

### 示例 {#example}

~~~js {16-19,21-24}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    projects: [
        { id: "first", label: "First project" },
        { id: "second", label: "Second project" },
        { id: "third", label: "Third project" },
    ],
    activeProject: "first"
});
            
const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 修改 To Do List 的配置
list.setConfig({
    activeProject: "second"
});

// 更新 Toolbar 的配置参数
toolbar.setConfig({
    api: list.api,
});
~~~
