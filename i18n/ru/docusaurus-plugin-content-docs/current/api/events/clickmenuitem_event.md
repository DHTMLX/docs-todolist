---
sidebar_label: click-menu-item
title: click-menu-item Event
description: You can learn about the click-menu-item event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# click-menu-item

### Описание {#description}

@short: Срабатывает при клике пользователя на элемент меню

### Использование {#usage}

~~~js
"click-menu-item": ({
    id: string | number,
    type: "task" | "user" | "toolbar",
    action: string,
    params?: any
}) => void;
~~~

### Параметры {#parameters}

Колбэк события `click-menu-item` может принимать объект со следующими параметрами:

- `id` - (обязательный) идентификатор задачи
- `type` - (обязательный) тип меню
- `action` - (обязательный) идентификатор нажатого элемента меню
- `params` - (необязательный) дополнительные данные нажатого элемента меню
