---
sidebar_label: setHeaders()
title: setHeaders 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 RestDataProvider 的 setHeaders 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# setHeaders()

### 描述 {#description}

@short: 设置自定义请求头，这些请求头将添加到 RestDataProvider 的每个请求中

:::info
传入 `setHeaders()` 的请求头会与默认的 `Content-Type: application/json` 请求头合并，并随每个请求一起发送。此方法通常用于在多用户后端中传递授权令牌（例如 `Remote-Token` 请求头）。
:::

### 用法 {#usage}

~~~js
setHeaders(headers: object): void;
~~~

### 参数 {#parameters}

| 名称       | 类型        | 描述 |
| ----------- | ----------- | ----------- |
| `headers`   |  object     | *必填*。包含自定义请求头的对象，这些请求头将添加到每个请求中 |

### 示例 {#example}

~~~js {7-9}
const { RestDataProvider } = todo;

const url = "https://some_backend_url";

login(url).then(token => {
    const restProvider = new RestDataProvider(url);
    restProvider.setHeaders({
        "Remote-Token": token,
    });
    // ... 初始化 To Do List 并连接数据提供者
});
~~~

---

**相关文章：**[与服务器协作](guides/working_with_server.md#multiuser-backend)
