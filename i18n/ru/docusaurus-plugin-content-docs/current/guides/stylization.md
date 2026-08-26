---
sidebar_label: Стилизация
title: Стилизация
description: Вы можете узнать о стилизации To Do List в документации библиотеки DHTMLX JavaScript To Do List. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# Стилизация

Стилизуйте любую часть интерфейса DHTMLX To Do List. Библиотека предоставляет **два** типа CSS-переменных:

- переменные, связанные со стилем To Do List
- переменные, связанные со стилем библиотеки WX (шрифт, иконки, флажки и другие общие элементы)

## Стиль по умолчанию {#default-style}

Фрагмент ниже показывает значения по умолчанию всех CSS-переменных, влияющих на To Do List и библиотеку WX.

:::tip Примечание
Имена переменных могут меняться между версиями. Проверяйте их после каждого обновления.
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

## Пользовательский стиль {#custom-style}

Чтобы кастомизировать To Do List, переопределите соответствующие CSS-переменные.

Фрагмент ниже применяет пользовательский стиль к To Do List:

<iframe src="https://snippet.dhtmlx.com/thmx9921?mode=html" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Связанные статьи {#related-articles}

- [Кастомизация](guides/customization.md) - обзор доступных вариантов кастомизации
