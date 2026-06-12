---
sidebar_label: 只读模式
title: 只读模式
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解只读模式的相关内容。浏览开发者指南和 API 参考，体验代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# 只读模式 {#read-only-mode}

要将 To Do List 设置为只读，请将 [`readonly`](api/configs/readonly_config.md) 配置属性设置为 `true`。以下示例以只读模式初始化 To Do List：

~~~js {8}
const { ToDo, Toolbar } = todo;

// create To Do List
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    readonly: true
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

:::info
在此模式下，任务不可编辑。用户只能选择任务并将其标记为已完成或未完成。
:::

## 示例 {#example}

以下在线演示展示了只读模式的效果：

<iframe src="https://snippet.dhtmlx.com/ru1q1p7y?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="520"></iframe>
