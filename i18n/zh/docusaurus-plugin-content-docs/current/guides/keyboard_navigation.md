---
sidebar_label: 键盘导航
title: 键盘导航
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解键盘导航的相关内容。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的 30 天免费试用版。
---

# 键盘导航 {#keyboard-navigation}

DHTMLX To Do List 支持完整的键盘导航。无需鼠标即可创建、管理和整理任务。

键盘快捷键仅在任务获得焦点时有效。要聚焦某个任务，可点击它，或使用 <kbd>ArrowUp</kbd> / <kbd>ArrowDown</kbd> 在列表中导航。

:::tip
当 Toolbar 中的搜索栏获得焦点时，键盘快捷键**不**生效。
:::

:::info
键盘导航在 [`readonly`](api/configs/readonly_config.md) 模式下不可用。
:::

## 默认模式 {#default-mode}

以下快捷键在内联编辑器**关闭**时有效。

### 导航与选择 {#navigation-and-selection}

| 键盘快捷键 | 说明 |
| :---------------- | :---------- |
| <kbd>ArrowUp</kbd> | 将选中项移至上一个任务 |
| <kbd>ArrowDown</kbd> | 将选中项移至下一个任务 |
| <kbd>ArrowRight</kbd> | 展开已折叠的父任务 |
| <kbd>ArrowLeft</kbd> | 折叠已展开的父任务。若已折叠或无子任务，则将选中项移至父任务 |
| <kbd>Shift</kbd>+<kbd>ArrowUp</kbd> | 将选中范围向上扩展至上方任务。若该任务已被选中，则取消选中 |
| <kbd>Shift</kbd>+<kbd>ArrowDown</kbd> | 将选中范围向下扩展至下方任务（包括其子任务）。若该任务已被选中，则取消选中 |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>Click</kbd> / <kbd>Ctrl(Cmd)</kbd>+<kbd>Shift</kbd>+<kbd>Click</kbd> | 选中或取消选中多个任务及其子任务：<br/>• 若该任务有已选中的父任务，取消选中该任务及其父任务<br/>• 若该任务有已选中的子任务，仅取消选中该任务本身 |
| <kbd>Shift</kbd>+<kbd>Click</kbd> | 选中当前已选任务与被点击任务之间的一段任务 |

:::info
如需了解多选任务的更多操作，请参阅[多选](guides/multiselection.md)指南。
:::

### 任务管理 {#task-management}

| 键盘快捷键 | 说明 |
| :---------------- | :---------- |
| <kbd>Enter</kbd> | 在与选中任务同级的位置创建新任务，将焦点移至新任务并打开编辑器 |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>Enter</kbd> | 为选中任务打开内联编辑器 |
| <kbd>Space</kbd> | 将选中任务标记为已完成。若已完成，则标记为未完成 |
| <kbd>Delete</kbd> / <kbd>Backspace</kbd> | 删除选中任务。删除后，焦点移至下一个任务；若无下一个任务，则移至父任务 |
| <kbd>Tab</kbd> | 降级任务，将其下移一个嵌套层级 |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | 升级任务，将其上移一个嵌套层级 |
| <kbd>Ctrl</kbd>+<kbd>ArrowUp</kbd> | 在同级中将选中任务上移 |
| <kbd>Ctrl</kbd>+<kbd>ArrowDown</kbd> | 在同级中将选中任务下移 |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>D</kbd> | 在同级复制选中任务 |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>C</kbd> | 将选中任务（包括所有子任务）复制到剪贴板 |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>V</kbd> | 在与当前选中任务同级的位置粘贴已复制的任务，并保留原始结构 |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>Z</kbd> | 撤销上一步操作 |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>Y</kbd> / <kbd>Ctrl(Cmd)</kbd>+<kbd>Shift</kbd>+<kbd>Z</kbd> | 恢复已撤销的操作（重做） |
| <kbd>Alt</kbd>+<kbd>1</kbd> / <kbd>Alt</kbd>+<kbd>2</kbd> / <kbd>Alt</kbd>+<kbd>3</kbd> | 设置选中任务的优先级（与对应 [`priorities`](api/configs/priorities_config.md) 项的快捷键一致） |
| <kbd>Alt</kbd>+<kbd>0</kbd> | 重置选中任务的优先级 |
| <kbd>Escape</kbd> | 若上下文菜单已打开则将其关闭。再次按下可关闭编辑器、重置活动过滤器，并收起 Toolbar 中的搜索结果 |

## 编辑模式 {#editing-mode}

以下快捷键在内联编辑器**打开**时有效。

| 键盘快捷键 | 说明 |
| :---------------- | :---------- |
| <kbd>Enter</kbd> | 保存更改并关闭编辑器 |
| <kbd>Shift</kbd>+<kbd>Enter</kbd> | 在编辑器中插入新段落 |
| <kbd>Escape</kbd> | 关闭编辑器且不保存任何更改 |

## 相关文章 {#related-articles}

- [`keypress-on-todo`](api/events/keypressontodo_event.md) 事件 - 拦截按键操作并实现自定义行为
- [内联编辑](guides/inline_editing.md) - 了解如何以编程方式管理编辑器
- [多选](guides/multiselection.md) - 处理多个已选任务
