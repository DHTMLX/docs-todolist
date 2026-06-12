---
sidebar_label: 样式定制
title: 样式定制
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 To Do List 的样式定制功能。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# 样式定制

可以对 DHTMLX To Do List 界面的任意部分进行样式定制。该库提供**两类** CSS 变量：

- 与 To Do List 样式相关的变量
- 与 WX 库样式相关的变量（字体、图标、复选框及其他通用元素）

## 默认样式 {#default-style}

以下代码片段展示了影响 To Do List 和 WX 库的所有 CSS 变量的默认值。

:::tip 注意
变量名称可能在版本之间发生变化，每次更新后请重新确认。
:::

~~~html
<style>
    .wx-material-theme .wx-todo,
    .wx-material-theme .wx-todo_toolbar,
    .wx-material-theme .wx-todo_menu,
    .wx-material-theme.wx-portal {

    /* WX library CSS variables */

        /* base colors */
        --wx-color-primary: #2f77e3;
        --wx-color-success: #0ab169;
        --wx-color-danger: #ff5252;

        --wx-color-font: #4d4d4d;
        --wx-color-font-disabled: #b3b3b3;

        --wx-color-secondary: #808080;
        --wx-color-secondary-hover: #4d4d4d;
        --wx-color-secondary-font: #fff;
        --wx-color-secondary-light: #b3b3b3;

        --wx-background: #fff;
        --wx-background-selected: #ededed;
        /* end base colors */

        /* font */
        --wx-font-family: Roboto, Arial, Helvetica, sans-serif;
        --wx-font-size: 14px;
        --wx-font-size-s: 12px;
        --wx-font-weight: 400;
        --wx-font-weight-medium: 500;
        --wx-line-height: 20px;
        /* end font */

        /* icons */
        --wx-icon-color: var(--wx-color-secondary);
        --wx-icon-background-hover: #d4d4d4;
        /* end icons */

        /* animation */
        --wx-all-transition: all 0.2s ease-out;
        /* end animation */

        /* border */
        --wx-border-color: #dfdfdf;
        --wx-border-width: 1px;
        --wx-border-radius: 2px;
        --wx-border: var(--wx-border-width) solid var(--wx-border-color);
        /* end border */
        

        /* checkbox */
        --wx-checkbox-size: var(--wx-base-size);
        --wx-checkbox-border-size: 2px;
        --wx-checkbox-color-unchecked: var(--wx-color-secondary);
        --wx-checkbox-color-checked: var(--wx-color-success);
        /* end checkbox */
    
    /* end of WX library CSS variables */

    
    /* To Do List CSS variables */

        /* Main component */
        --wx-todo-toolbar-background: var(--wx-background);
        --wx-todo-toolbar-height: 56px;
        --wx-todo-toolbar-align: center;
        --wx-todo-toolbar-justify: flex-start;

        --wx-todo-mark-background: #ffff88;
        --wx-todo-mark-background-strict: #d4c5f9;

        --wx-todo-date-color-current: var(--wx-color-success);
        --wx-todo-date-color-expired: var(--wx-color-danger);
        --wx-todo-date-color-regular: var(--wx-color-secondary);
        /* End main component */

    /* end of To Do List CSS variables */


    /* other */
        --wx-base-size: 20px;
        --wx-box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
    /* end other */
    }
</style>
~~~

## 自定义样式 {#custom-style}

要自定义 To Do List 的样式，覆盖相应的 CSS 变量即可。

以下代码片段为 To Do List 应用了自定义样式：

<iframe src="https://snippet.dhtmlx.com/thmx9921?mode=html" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 相关文章 {#related-articles}

- [自定义](guides/customization.md) — 可用自定义选项概览
