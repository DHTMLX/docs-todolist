---
sidebar_label: keypress-on-todo
title: keypress-on-todo 事件
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 keypress-on-todo 事件。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# keypress-on-todo

## 描述 {#description}

@short: 当使用键盘导航时任务处于焦点状态时触发

## 用法 {#usage}

~~~js
"keypress-on-todo": ({
    code: string,
    event: KeyboardEvent
}) => void;
~~~

### 参数 {#parameters}

`keypress-on-todo` 事件的回调函数可接收一个包含以下参数的对象：

- `code` - （必填）被按下的键或组合键的代码（*小写*）。键盘快捷键及其代码的完整列表见[下文](#keyboard-shortcuts)
- `event` - （必填）原生 [event 对象](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)

:::info
如需处理内部事件，可以使用 [**Event Bus 方法**](category/event-bus-methods.md)
:::

### 示例 {#example}

~~~js {15-17}
const { ToDo, Toolbar } = todo;
const {tasks, projects, users} = getData();

const list = new ToDo("#root", {
    tasks,
    projects,
    users
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 订阅 "keypress-on-todo" 事件
list.api.on("keypress-on-todo", ({code, event}) => {
    console.log("The", code, "key is pressed"); 
});
~~~

## 键盘快捷键 {#keyboard-shortcuts}

### 默认模式 {#default-mode}

以下快捷键在内联编辑器**关闭**时生效。

| 键盘快捷键 | 键代码 | 说明 |
| :---------------- | -------- | :------------------------------------------------------------------- |
| <kbd>Escape</kbd> | `escape` | 若任务的菜单已打开，则关闭菜单。再次按下将关闭编辑器、重置过滤，并收起 Toolbar 中的搜索结果 |

:::tip
以下**键代码**在焦点位于 Toolbar 搜索框时不可用。
:::

| 键盘快捷键 | 键代码 | 说明 |
| :---------------- | -------- | :------------------------------------------------------------------- |
| <kbd>Enter</kbd> | `enter` | 在当前所选任务的同一层级新建一个任务，将选中状态移至新任务并打开编辑器 |
| <kbd>ArrowUp</kbd> | `arrowup` | 将选中状态向上移动到前一个任务 |
| <kbd>ArrowDown</kbd> | `arrowdown` | 将选中状态向下移动到下一个任务 |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>Enter</kbd> | `ctrl+enter` | 打开所选任务的编辑器 |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>Click</kbd> /<br> <kbd>Ctrl(Cmd)</kbd>+<kbd>Shift</kbd>+<kbd>Click</kbd> <br> 在 v1.1 中新增 | `ctrl` /<br> `ctrl+shift` | 选择多个任务及其所有子任务。<br> 若任务当前已选中则取消选中，此外：<br> - 若任务的父任务也已选中，则同时取消选中该任务及其父任务。<br> - 若任务的子任务也已选中，则仅取消选中该任务本身。|
| <kbd>Shift</kbd>+<kbd>Click</kbd> <br> 在 v1.1 中新增| `shift` |选择一个范围内的任务|
| <kbd>Shift</kbd>+<kbd>ArrowUp</kbd> <br> 在 v1.1 中新增| `shift+arrowup` |选中当前任务上方的任务。<br> 若上方任务当前已选中则取消选中|
| <kbd>Shift</kbd>+<kbd>ArrowDown</kbd> <br> 在 v1.1 中新增| `shift+arrowdown` |选中当前任务下方的任务（及其所有子任务）。<br> 若下方任务当前已选中则取消选中|
| <kbd>Ctrl</kbd>+<kbd>ArrowUp</kbd> | `ctrl+arrowup` | 在同一层级内将所选任务向上移动 |
| <kbd>Ctrl</kbd>+<kbd>ArrowDown</kbd> | `ctrl+arrowdown` | 在同一层级内将所选任务向下移动 |
| <kbd>Space</kbd> | `space` | 根据任务的初始状态将其标记为完成或未完成 |
| <kbd>Delete</kbd> /<br><kbd>Backspace</kbd> | `delete` /<br>`backspace` | 按以下逻辑删除所选任务：<br> - 删除子任务后，选中状态向下/向上移动，直至到达父任务 <br>- 删除父任务后，若存在下一个父任务则选中状态移至该父任务；否则移至上一个父任务 |
| <kbd>ArrowRight</kbd> | `arrowright` | 展开已折叠的父任务 |
| <kbd>ArrowLeft</kbd> | `arrowleft` | 折叠已展开的父任务。若任务已折叠或没有子任务，则将选中状态移至父任务 |
| <kbd>Tab</kbd> | `tab` | 将任务的嵌套层级降低一级 |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `shift+tab` | 将任务的嵌套层级提升一级|
| <kbd>Ctrl(Cmd)</kbd>+<kbd>D</kbd> | `ctrl+d` | 在同一层级复制所选任务 |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>C</kbd> | `ctrl+c` | 将所选任务（包含所有子任务）复制到剪贴板 |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>V</kbd> | `ctrl+v` | 将复制的任务粘贴到与当前所选任务相同的层级。可将复制的任务粘贴到任意层级，复制任务的结构会被保留 |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>Z</kbd> | `ctrl+z` | 撤销上一次操作 |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>Y</kbd> /<br><kbd>Ctrl(Cmd)</kbd>+<kbd>Shift</kbd>+<kbd>Z</kbd> | `ctrl+y` /<br>`ctrl+shift+z` | 重做已撤销的操作 |
| <kbd>Alt</kbd>+<kbd>1</kbd> /<br><kbd>Alt</kbd>+<kbd>2</kbd> /<br><kbd>Alt</kbd>+<kbd>3</kbd> | `alt+1` /<br>`alt+2` /<br>`alt+3` | 设置所选任务的优先级（对应 [`priorities`](api/configs/priorities_config.md) 相应条目的快捷键） |
| <kbd>Alt</kbd>+<kbd>0</kbd> | `alt+0` | 重置所选任务的优先级 |

### 编辑模式 {#editing-mode}

以下快捷键在内联编辑器**打开**时生效。

| 键盘快捷键 | 键代码 | 说明 |
| :---------------- | -------- | :---------- |
| <kbd>Escape</kbd> | `escape` | 关闭编辑器且不保存任何更改 |
| <kbd>Enter</kbd> | `enter` | 关闭编辑器并保存更改 |
| <kbd>Shift</kbd>+<kbd>Enter</kbd> | `shift+enter` | 创建新段落 |
