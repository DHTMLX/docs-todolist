---
sidebar_label: getChildrenIds()
title: getChildrenIds 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 getChildrenIds 方法。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# getChildrenIds()

### 描述 {#description}

@short: 返回指定父任务的子任务 ID 数组


### 用法 {#usage}

~~~js
getChildrenIds({
    id: string | number,
    filtered?: boolean, // false by default
    tree?: boolean, // true by default
    hideCompleted?: boolean // false by default
}): (string|number)[];
~~~

### 参数 {#parameters}

- `id` - （必填）父任务的 ID
- `filtered` - （可选）若为 `false`，被过滤的子任务也会包含在结果中
- `tree` - （可选）若为 `true`，所有子任务都会包含在结果中；若为 `false`，则只包含父任务的第一层子任务
- `hideCompleted` - （可选）若为 `false`，已完成的任务会包含在结果中；否则，将从结果中排除

:::tip
如果已应用过滤，可以使用 `filtered` 参数
:::

### 返回值 {#returns}

该方法返回一个包含子任务 ID 的数组

### 示例 {#example}

~~~js {17-19,22,25-27,29-31}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1 #tag1", parent: "1.1", checked: true },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ],
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 过滤前获取任务的子任务
console.log(list.getChildrenIds({ id: "1" })); // ['1.1', '1.1.1', '1.2']
console.log(list.getChildrenIds({ id: "1", tree: false })); // ['1.1', '1.2']
console.log(list.getChildrenIds({ id: "1", hideCompleted: true })); // ['1.1', '1.2']

// 过滤任务
list.setFilter({ match: "#tag1", highlight: true });

// 过滤后获取任务的子任务
console.log(list.getChildrenIds({ id: "1" })); // -> ['1.1', '1.1.1', '1.2']
console.log(list.getChildrenIds({ id: "1", tree: false })); // -> ['1.1', '1.2']
console.log(list.getChildrenIds({ id: "1", hideCompleted: true})); // -> ['1.1', '1.2']

console.log(list.getChildrenIds({ id: "1", filtered: true })); // -> ['1.1', '1.1.1']
console.log(list.getChildrenIds({ id: "1", filtered: true, tree: false })); // -> ['1.1']
console.log(list.getChildrenIds({ id: "1", filtered: true, hideCompleted: true })); // -> ['1.1']
~~~

**更新日志：** `hideCompleted` 参数在 v1.1 中新增

**相关文章：** [任务对象/ID](guides/task_object.md)
