---
sidebar_label: 更新日志
title: 更新日志
description: 您可以在此了解 DHTMLX JavaScript To Do List 库的最新动态。浏览开发者指南和 API 参考，体验代码示例和在线演示，并下载 DHTMLX To Do List 的 30 天免费评估版本。
---

# 更新日志 {#whats-new}

如果您正在从旧版本升级 To Do List，请查阅[迁移到新版本](migration.md)了解详情。

## 版本 1.3.2 {#version-132}

发布于 2026 年 6 月 10 日

### 修复 {#fixes}

- 自定义菜单图标显示不正确
- 任务 ID 未同步：在任务创建和克隆过程中，临时 ID 未被服务端 ID 替换（UI 层面）
- 删除项目时，任务编辑器和活动菜单未关闭

## 版本 1.3.1 {#version-131}

发布于 2025 年 4 月 3 日

### 修复 {#fixes-131}

- 构建产物中未包含导入库的 *todo.es.d.ts* 和 *todo.d.ts* 文件

## 版本 1.3 {#version-13}

发布于 2025 年 2 月 27 日

[在博客查看本次发布回顾](https://dhtmlx.com/blog/dhtmlx-to-do-list-1-3/)

### 新功能 {#new-functionality}

- 可通过 [`history`](api/configs/history_config.md) 属性及 [`undo()`](api/methods/undo_method.md)/[`redo()`](api/methods/redo_method.md) 方法管理单个项目或整个应用的变更历史
- 可通过 [`menu`](api/configs/menu_config.md) 属性自定义右键菜单（[示例](https://snippet.dhtmlx.com/slpjstbb)）

### 新增 API {#new-api}

- [`history`](api/configs/history_config.md) 属性：用于启用/禁用单个项目或整个应用的变更历史，并限制存储的操作数量
- [`undo()`](api/methods/undo_method.md)/[`redo()`](api/methods/redo_method.md) 方法：用于管理变更历史
- [`menu`](api/configs/menu_config.md) 属性：用于自定义右键菜单（[示例](https://snippet.dhtmlx.com/cmfqmg00)）

### 更新 {#updates}

- [`getState()`](api/internal/getstate_method.md) 和 [`getReactiveState()`](api/internal/getreactivestate_method.md) 方法现返回 `historyState` 对象
- Toolbar 的 [`items`](api/toolbar_api/configs/items_config.md) 属性新增 `"undo"` 和 `"redo"` 参数，用于显示管理变更历史的控件
- `POST` [`/tasks`](api/rest_api/routes/post_routes/post_tasks.md) 和 [`/projects`](api/rest_api/routes/post_routes/post_projects.md) 路由新增 `id` 参数，支持在后端管理历史变更
- `DELETE` [`/tasks`](api/rest_api/routes/delete_routes/delete_tasks.md) 路由新增 `batch` 载荷。与待删除任务相关的 `id` 参数变为可选项，支持一次性删除多个任务

### 修复 {#fixes-13}

- 不慎拖动任务可能在窗口中留下残影
- 切换到其他项目后，新项目的任务不显示
- 单击外部区域时，截止日期的日历弹窗未关闭

## 版本 1.2.12 {#version-1212}

发布于 2024 年 11 月 15 日

### 修复 {#fixes-1212}

- 单击外部区域时菜单未隐藏

## 版本 1.2.10 {#version-1210}

发布于 2024 年 9 月 19 日

### 修复 {#fixes-1210}

- RestDataProvider API：在发送到服务器之前，存储在数组中的临时 ID 处理不正确

## 版本 1.2.9 {#version-129}

发布于 2024 年 8 月 26 日

### 修复 {#fixes-129}

- 对空项目排序时出现脚本错误
- 子菜单在触控设备上无法使用
- `api` 对象的类型定义不正确

## 版本 1.2.8 {#version-128}

发布于 2024 年 2 月 29 日

### 修复 {#fixes-128}

- npm 服务器上的构建损坏

## 版本 1.2.7 {#version-127}

发布于 2024 年 2 月 6 日

### 修复 {#fixes-127}

- 重命名项目时按 Enter 键出现问题
- 搜索项目时按 Enter 键出现问题
- 与复杂组件一起使用时 wx 样式被覆盖。详情请参阅[样式化](guides/stylization.md)指南

## 版本 1.2.5 {#version-125}

发布于 2023 年 12 月 7 日

### 修复 {#fixes-125}

- 调用未使用的菜单项时出现脚本错误

## 版本 1.2.4 {#version-124}

发布于 2023 年 12 月 7 日

### 修复 {#fixes-124}

- 在新项目之间移动条目无效

## 版本 1.2.3 {#version-123}

发布于 2023 年 9 月 13 日

### 更新 {#updates-123}

- 支持将组件作为 ES 模块导入

## 版本 1.2.1 {#version-121}

发布于 2023 年 8 月 28 日

### 修复 {#fixes-121}

- 将日期选择器移至顶层
- 在任务中打开日历时，任务文本显示在日历上方
- 打开右键菜单时定位错误

## 版本 1.2 {#version-12}

发布于 2023 年 5 月 16 日

[在博客查看本次发布回顾](https://dhtmlx.com/blog/dhtmlx-to-do-list-1-2/)

### 新功能 {#new-functionality-12}

- 可通过右键菜单或相应 API 为任务设置优先级（[示例](https://snippet.dhtmlx.com/5cymicwt)）
- 支持按优先级对任务排序
- [多用户后端](guides/working_with_server.md#multiuser-backend)支持实时跟踪其他用户的变更（[示例](https://snippet.dhtmlx.com/82ayq2lk)）
- 以表格视图展示 To Do List 任务，与 [JavaScript DataGrid](https://dhtmlx.com/docs/products/dhtmlxGrid/) 组件集成（[示例](https://snippet.dhtmlx.com/e97idjs8)）

### 新增 API {#new-api-12}

[`priorities`](api/configs/priorities_config.md) 属性：用于为任务设置初始优先级

### 更新 {#updates-12}

- [`tasks`](api/configs/tasks_config.md) 属性新增 `priority` 参数，允许用户指定初始优先级
- [`taskShape`](api/configs/taskshape_config.md) 属性新增 `priority` 参数，允许用户管理卡片的优先级显示样式
- 扩展了[本地化选项](guides/localization.md)列表

### 修复 {#fixes-12}

- 设置不含 `users[n].avatar` 属性的用户时出现错误

## 版本 1.1 {#version-11}

发布于 2022 年 10 月 10 日

[在博客查看本次发布回顾](https://dhtmlx.com/blog/dhtmlx-to-do-list-1-1/)

### 重大变更 {#breaking-changes}

本次发布对 `taskShape` 属性做出了若干变更。请查阅[迁移文章](migration.md#10---11)以跟进最新版本。

### 新功能 {#new-functionality-11}

- 拖放功能：
    - 支持[配置或禁用拖放功能](guides/configuration.md#drag-n-drop)
    - 新增事件：[`start-drag`](api/events/startdrag_event.md)、[`drag`](api/events/drag_event.md)、[`end-drag`](api/events/enddrag_event.md)
- 多选与批量操作：
    - 支持使用键盘快捷键[选择](/#selecting-multiple-tasks)和[管理](/#managing-multiple-tasks)多个任务
    - 支持通过菜单管理多个任务
    - 支持[通过 API 选择和管理多个任务](guides/multiselection.md)：
        - 新增 [`selected`](api/configs/selected_config.md) 属性
        - 为 [`selectTask()`](api/methods/selecttask_method.md)、[`copyTask()`](api/methods/copytask_method.md) 方法新增 `join` 参数
        - 为 [`select-task`](api/events/selecttask_event.md)、[`copy-task`](api/events/copytask_event.md) 事件新增 `join` 参数
        - 新增方法：[`eachSelected()`](api/methods/eachselected_method.md)
        - 更新方法：[`getSelection()`](api/methods/getselection_method.md)
    - 支持通过 [`unselectTask()`](api/methods/unselecttask_method.md) 方法取消选择所有任务
- [初始隐藏已完成任务的 To Do List](guides/hide_completed_tasks.md#initial-mode)
- [显示/隐藏已完成任务](guides/hide_completed_tasks.md#switching-between-modes)：
    - 通过 Toolbar 菜单
    - 通过 API：
        - 新增方法：[`hideCompletedTasks()`](api/methods/hidecompletedtasks_method.md)、[`showCompletedTasks()`](api/methods/showcompletedtasks_method.md)
        - 新增事件：[`hide-completed-tasks`](api/events/hidecompletedtasks_event.md)、[`show-completed-tasks`](api/events/showcompletedtasks_event.md)
        - 为 [`hasChildren()`](api/methods/haschildren_method.md)、[`getChildrenIds()`](api/methods/getchildrenids_method.md) 方法新增 `hideCompleted` 参数
- [任务排序](guides/sorting_filtering_tasks.md#sorting-tasks)：
    - 通过 Toolbar 菜单
    - 通过 API：
        - 新增方法：[`setSort()`](api/methods/setsort_method.md)
        - 新增事件：[`set-sort`](api/events/setsort_event.md)
        - 扩展了 [`tasks`](api/configs/tasks_config.md) 属性的参数列表
- 新增菜单管理事件：[`open-menu`](api/events/openmenu_event.md) 和 [`close-menu`](api/events/closemenu_event.md)

### 更新 {#updates-11}

- [扩展了本地化选项列表](guides/localization.md)

## 版本 1.0.1 {#version-101}

发布于 2022 年 7 月 5 日

### 修复 {#fixes-101}

- 显著改善了 API 的工作性能

## 版本 1.0 {#version-10}

发布于 2022 年 6 月 20 日

[在博客查看本次发布回顾](https://dhtmlx.com/blog/dhtmlx-list-1-0-advanced-task-assignment-inline-editing-handy-keyboard-navigation/)

### 初始功能 {#initial-functionality}

- 支持[加载 `tasks`、`projects`、`users`、`tags`、`activeProject` 的数据](guides/loading_data.md)
- 支持通过以下方式操作 `projects`：
    - [通过 API](guides/project_index.md)：
        - [切换活动项目](api/methods/setproject_method.md)
        - [添加新项目](api/methods/addproject_method.md)
        - [更新项目](api/methods/updateproject_method.md)
        - [删除项目](api/methods/deleteproject_method.md)
    - [通过 UI](/#toolbar)：
        - 切换项目
        - 添加、重命名或删除项目
        - 搜索项目
- 支持通过以下方式操作 `tasks`：
    - [通过 API](guides/task_index.md)：
        - [添加新任务](api/methods/addtask_method.md)
        - [更新任务](api/methods/updatetask_method.md)
        - [删除任务](api/methods/deletetask_method.md)
        - [移动任务](api/methods/movetask_method.md)
        - [复制](api/methods/copytask_method.md)和[粘贴](api/methods/pastetask_method.md)任务
        - [勾选](api/methods/checktask_method.md)和[取消勾选](api/methods/unchecktask_method.md)任务
        - [折叠](api/methods/collapsetask_method.md)和[展开](api/methods/expandtask_method.md)任务
        - [选中](api/methods/selecttask_method.md)和[取消选中](api/methods/unselecttask_method.md)任务
        - 更改任务缩进层级：[indentTask()](api/methods/indenttask_method.md) / [unindentTask()](api/methods/unindenttask_method.md)
        - [分配](api/methods/assignuser_method.md)和[取消分配](api/methods/unassignuser_method.md)用户
        - [筛选任务](api/methods/setfilter_method.md)
    - [通过 UI](/#managing-a-task)：
        - 添加、复制粘贴、选中、移动、缩进/取消缩进、删除任务
        - 搜索任务（按文字或话题标签）
        - 编辑任务：
            - [双击任务编辑其内容](guides/inline_editing.md)：支持输入文本、数字、话题标签、日期
            - 分配/取消分配用户
            - 设置截止日期
- 支持配置**任务外观与行为**：
    - [已完成子任务计数器](guides/configuration.md#counter-of-completed-subtasks)
    - [日期格式](guides/configuration.md#date-format)
    - [截止日期验证](guides/configuration.md#due-date-validation)
    - [标记任务完成的模式](guides/configuration.md#mode-of-marking-tasks-complete)
- 支持[配置](guides/configuration.md#toolbar)和[自定义](guides/customization.md#customize-the-toolbar) **Toolbar**
- [键盘导航](api/events/keypressontodo_event.md#keyboard-shortcuts)
- [只读模式](guides/readonly_mode.md)
- [本地化](guides/localization.md)
- [后端集成](guides/working_with_server.md)（Go 和 Node）
- [与其他 DHTMLX 组件集成](guides/integration.md)
- 跨浏览器兼容
- 触控支持

### API {#api}

- **To Do List API**：
    - [方法](api/overview/methods_overview.md)
    - 内部 API：
        - [Event Bus 方法](category/event-bus-methods.md)
        - [State 方法](category/state-methods.md)
    - [事件](api/overview/events_overview.md)
    - [属性](api/overview/configs_overview.md)
- **Toolbar API**：
    - [方法](category/toolbar-methods.md)
    - [属性](category/toolbar-properties.md)
- **RestDataProvider API**：
    - [REST 方法](category/rest-methods.md)
