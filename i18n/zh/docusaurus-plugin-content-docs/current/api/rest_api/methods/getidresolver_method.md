---
sidebar_label: getIDResolver()
title: getIDResolver 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 RestDataProvider 的 getIDResolver 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# getIDResolver()

### 描述 {#description}

@short: 返回一个将客户端（临时）id 与服务器 id 同步的函数

:::info
当客户端创建新对象（任务或项目）时，它会获得一个临时 id，而对应的服务器 id 存储在 RestDataProvider 中。`getIDResolver()` 返回的函数可将客户端 id 映射到其服务器 id。该函数主要用于在多用户后端中处理服务器事件。
:::

### 用法 {#usage}

~~~js
getIDResolver(): (id: string | number, type: number) => string | number;
~~~

### 返回值 {#returns}

该方法返回 `idResolver(id, type)` 函数：

- `id` - 需要解析的客户端（临时）id
- `type` - 模型的类型：
    - `1` - 任务（`TaskID`）
    - `2` - 项目（`ProjID`）

该函数返回与传入客户端 id 对应的服务器 id。

### 示例 {#example}

~~~js {4,7}
const { RestDataProvider } = todo;

const restProvider = new RestDataProvider(url);
const idResolver = restProvider.getIDResolver();

const TaskID = 1;
const serverId = idResolver(clientId, TaskID);
~~~

---

**相关文章**：[与服务器协作](guides/working_with_server.md#customize-server-events)
