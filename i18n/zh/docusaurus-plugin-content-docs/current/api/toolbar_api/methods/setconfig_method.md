---
sidebar_label: setConfig()
title: setConfig Method
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 Toolbar 的 setConfig 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载免费 30 天评估版本的 DHTMLX To Do List。
---

# setConfig()

### 描述 {#description}

@short: 设置 Toolbar 组件的配置


### 用法 {#usage}

~~~js
setConfig(config: object): void;
~~~

### 参数 {#parameters}
 
- `config` - （必填）包含 Toolbar 配置项的对象。完整属性列表请参见[此处](category/toolbar-properties.md)

### 示例 {#example}

~~~js {13-15}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, tags } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
});
const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

toolbar.setConfig({
    items: ["combo", "menu"]
});
~~~
