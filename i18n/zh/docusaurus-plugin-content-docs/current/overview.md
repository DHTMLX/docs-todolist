---
sidebar_label: To Do List 概览
title: DHTMLX To Do List 概览
slug: /
description: 您可以在 DHTMLX 文档中查阅 DHTMLX JavaScript To Do List 库的概览。浏览开发者指南和 API 参考，体验代码示例和在线演示，并下载 DHTMLX To Do List 的 30 天免费评估版本。
---

# DHTMLX To Do List 概览 {#dhtmlx-to-do-list-overview}

DHTMLX To Do List 是一款易于使用的任务管理组件。To Do List 组件是出色的规划工具，有助于实现目标、节省时间。该组件支持创建无限数量的项目，在项目中添加无限数量的任务和子任务，通过拖放方式调整任务顺序或优先级等。

## To Do List 结构 {#to-do-list-structure}

To Do List 组件的界面由两部分组成：[工具栏（Toolbar）](#toolbar) 和 [列表（List）](#list)。

### 工具栏 {#toolbar}

**工具栏**位于 To Do List 顶部，包含以下元素：

- 用于切换项目和搜索项目的**下拉组合框（combo）**控件

![带有项目选择组合框的 DHTMLX To Do List 工具栏](/img/toolbar.png)

- 用于搜索任务的**搜索框**

![DHTMLX To Do List 工具栏中的搜索栏](/img/search_field.png)

- 包含一组控件的**菜单**，支持以下操作：
    - 按以下条件对任务进行升序/降序排列：
        - 按文本
        - 按优先级
        - 按截止日期
        - 按完成日期
        - 按创建日期
        - 按编辑日期
    - 隐藏/显示已完成的任务
    - 添加新项目、重命名或删除当前活动项目

![带有任务排序和项目选项的 DHTMLX To Do List 工具栏菜单](/img/project_menu.png)

:::info
您可以通过添加自定义元素或调整内置控件顺序来修改工具栏结构。详情请参阅[**配置**](guides/configuration.md#toolbar)和[**自定义**](guides/customization.md#customize-the-toolbar)章节。
:::

### 列表 {#list}

**任务列表**是 To Do List 界面的核心部分，用于添加新任务、编辑或删除现有任务。您可以轻松配置任务的外观样式。详情请参阅[配置](guides/configuration.md)章节。

![DHTMLX To Do List 小部件中的任务列表](/img/list.png)

## 选择任务 {#selecting-tasks}

### 选择单个任务 {#selecting-one-task}

- 单击任务即可选中它
- 按 `Arrow Up` 键可将选择移至上一个任务
- 按 `Arrow Down` 键可将选择移至下一个任务

### 选择多个任务 {#selecting-multiple-tasks}

- 可通过以下组合键选择多个任务：
    - 按住 `Ctrl (Cmd)` 键并单击每个要选择的任务
    - 单击第一个任务，按住 `Shift` 键，再单击最后一个任务后松开 `Shift`
- 按 `Shift` + `Arrow Up`/`Arrow Down` 可向上/向下扩展选择范围

:::info
只有页面上可见的任务才能被选中，即经过筛选后或在隐藏已完成任务模式下仍可见的任务。
:::

:::tip
查看[可对选中任务执行的操作列表](#managing-multiple-tasks)
:::

## 管理任务 {#managing-a-task}

您可以通过右键菜单或键盘导航来管理选中的任务。

### 右键菜单 {#context-menu}

任务的**右键菜单**包含一系列菜单项和子菜单项，如下所示：

![DHTMLX To Do List 中单个任务的右键菜单](/img/task_context_menu.png)

### 添加新任务 {#adding-a-new-task}

- 单击顶部导航栏中的 **+ 添加任务** 按钮，可在列表开头添加新任务
- 选中某个任务后按 `Enter` 键，可在其下方添加新任务
- 在选中任务下方添加新任务后按 `Tab` 键可将其转为子任务。使用 `Shift + Tab` 可提升任务的嵌套层级
- 单击任务并按 `Ctrl (Cmd) + C` 可复制任务，按 `Ctrl (Cmd) + V` 可粘贴任务
- 单击任务并按 `Ctrl (Cmd) + D` 可向下复制任务
- 在拖放过程中按住 `Alt` 键可复制任务

### 编辑任务 {#editing-a-task}

- 双击列表中的任务记录，或按 `Ctrl (Cmd) + Enter` 可编辑任务，完成修改后按 `Enter` 确认
> 支持输入文本、数字、话题标签和日期。详情请参阅[支持的数据格式](guides/inline_editing.md#supported-formats-of-data)。

- 单击任务左侧的复选框或按 `Space` 键可将任务标记为完成/未完成
- 单击任务左侧的箭头图标或按 `Arrow Left`/`Arrow Right` 键可折叠/展开包含子任务的任务
- 打开任务菜单，选择**设置截止日期**，通过日期选择器选择日期，可为任务设置截止日期
- 单击任务中显示的截止日期并选择新日期，可更改截止日期
- 打开任务菜单，悬停**分配给**，在下拉列表中选择相应人员，可为任务指定负责人；在下拉列表中取消选择可取消分配

### 移动任务 {#moving-a-task}

- 选中任务后按 `Ctrl (Cmd)` + `Arrow Up`/`Arrow Down` 键，或使用拖放方式，可在项目内移动任务
- 选中任务后按 `Tab`/`Shift + Tab` 可降低/提升任务的嵌套层级
- 打开任务菜单，悬停**移动到**，在下拉列表中选择目标项目，可将任务移动到其他项目

### 删除任务 {#deleting-a-task}

- 选中任务后按 `Backspace`/`Delete` 键可删除任务

### 设置任务优先级 {#prioritizing-a-task}

- 选中任务后按 `Alt + 1` 可设置**高**优先级
- 选中任务后按 `Alt + 2` 可设置**中**优先级
- 选中任务后按 `Alt + 3` 可设置**低**优先级
- 选中任务后按 `Alt + 0` 可**重置**优先级

## 管理多个任务 {#managing-multiple-tasks}

[选择多个任务](#selecting-multiple-tasks)后，您可以对其执行以下操作：

- 打开选中任务的**右键菜单**

![DHTMLX To Do List 中多个选定任务的右键菜单](/img/tasks_context_menu.png)

- 按 `Backspace`/`Delete` 键删除任务
- 通过 `Ctrl (Cmd) + C` 复制任务，通过 `Ctrl (Cmd) + V` 粘贴任务。无序选择的任务在粘贴后将根据数据结构重新排列
- 通过 `Ctrl (Cmd) + D` 向下复制任务
- 拖放任务
- 在拖放过程中按住 `Alt` 键复制任务
- 通过 `Ctrl (Cmd)` + `Arrow Up`/`Arrow Down` 在项目内移动任务
- 通过 `Tab`/`Shift + Tab` 降低/提升任务的嵌套层级。注意，与父任务一起选中的子任务的嵌套层级不会改变
- 按 `Space` 键将任务标记为完成/未完成

:::info
详情请参阅[**键盘快捷键**](api/events/keypressontodo_event.md#keyboard-shortcuts)章节
:::

## 后续步骤 {#whats-next}

简要了解 To Do List 之后，您可以开始学习如何在页面上展示该组件。请按照[快速入门](how_to_start.md)文章中的指引进行操作。
