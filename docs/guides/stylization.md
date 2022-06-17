---
sidebar_label: Stylization
title: Stylization
description: You can learn about the To Do List Stylization in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Stylization

You can stylize any part of the interface of DHTMLX To Do List to meet your project requirements. For this, the library provides a wide range of CSS variables. Note, that To Do List includes **two** types of CSS variables:

- variables related to To Do List style
- variables related to the WX library style (font, icons, checkboxes, etc)

## Default style

:::tip Note
New versions of the To Do List can bring some changes for the variables and their names. So, please, do not forget to check the names after updating to the newest version and promptly modify them in your code to avoid problems with display of the component
:::

~~~css
<style>
    .wx-material-theme,
    .wx-portal {

    /* WX library CSS variables */

        /* base colors */
        --wx-color-primary: #0a76bf;
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
    }
</style>
~~~

## Custom style

To customize the appearance of To Do List, just change the values of the necessary CSS variables. 

In this snippet you can see how to apply a custom style to To Do List:

<iframe src="https://snippet.dhtmlx.com/thmx9921?mode=html" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**Related articles:** [Customization](../customization)

