---
sidebar_label: Локализация
title: Локализация
description: В документации библиотеки DHTMLX JavaScript To Do List вы можете узнать о локализации компонента. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# Локализация

Отображайте интерфейс DHTMLX To Do List на любом языке. Библиотека предоставляет ряд предустановленных локалей и позволяет создавать собственные. По умолчанию DHTMLX To Do List использует [английскую локаль](#default-locale).

## Локаль по умолчанию {#default-locale}

Фрагмент ниже показывает полную структуру стандартной английской локали:

~~~js
const en = {
    calendar:{ // переводы и настройки календаря
        monthFull: [
            "January", "February", "March",
            "April", "May", "June", 
            "July", "August", "September", 
            "October", "November", "December"
        ],
        monthShort: [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun",
            "Jul", "Aug", "Sep",
            "Oct", "Nov", "Dec"
        ],
        dayFull: [
            "Sunday", "Monday", "Tuesday",
            "Wednesday", "Thursday", "Friday", "Saturday"
        ],
        dayShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    
        clear: "Clear",
        done: "Done",
        today: "Today",

        weekStart: 1 // определяет первый день недели (по умолчанию понедельник)
    },
    // To Do List
    todo: {
        // Панель инструментов
        "No project": "No project",
        "Search project": "Search project",
        "Add project": "Add project",
        "Rename project": "Rename project",
        "Delete project": "Delete project",

        // добавлено в v1.1 (начало)
        "Completed tasks": "Completed tasks",
        "Show": "Show",
        "Hide": "Hide",
        "Sort by": "Sort by",
        "Text (a-z)": "Text (a-z)",
        "Text (z-a)": "Text (z-a)",
        "Due date (new to old)": "Due date (new to old)",
        "Due date (old to new)": "Due date (old to new)",
        "Completion date (new to old)": "Completion date (new to old)",
        "Completion date (old to new)": "Completion date (old to new)",
        "Created (new to old)": "Created (new to old)",
        "Created (old to new)": "Created (old to new)",
        "Edited (new to old)": "Edited (new to old)",
        "Edited (old to new)": "Edited (old to new)",
        // добавлено в v1.1 (конец)

        // Задача
        "Add task below": "Add task below",
        "Add subtask": "Add subtask",
        "Set due date": "Set due date",
        "Indent": "Indent",
        "Unindent": "Unindent",
        "Assign to": "Assign to",
        "Move to": "Move to",
        "Duplicate": "Duplicate",
        "Copy": "Copy",
        "Paste": "Paste",
        "Delete": "Delete",

        // Приоритеты (добавлено в v1.2)
        "Priority (high to low)": "Priority (high to low)",
        "Priority (low to high)": "Priority (low to high)",
        "Set priority": "Set priority",
        "Reset priority": "Reset priority",

        // Горячие клавиши
        "Enter": "Enter",
        "Tab": "Tab",
        "Shift+Tab": "Shift+Tab",
        "Ctrl+D": "Ctrl+D",
        "Ctrl+C": "Ctrl+C",
        "Ctrl+V": "Ctrl+V",
        
        // Для Mac OS
        "CMD+D": "CMD+D",
        "CMD+C": "CMD+C",
        "CMD+V": "CMD+V",

        // Редактор
        "Type what you want": "Type what you want",

        // Прочее
        "Search": "Search",
        "Add task": "Add task",
        "New project": "New project",

        // Метки приоритетов по умолчанию
        "High": "High",
        "Medium": "Medium",
        "Low": "Low"
    }
};
~~~

## Пользовательская локаль {#custom-locale}

Чтобы инициализировать компонент To Do List на языке, отличном от английского:

- определите языковые настройки — предоставьте переводы для всех текстовых меток
- примените локаль к компоненту To Do List и его Toolbar через конфигурационное свойство `locale`

Пример ниже объявляет объект немецкой локали:

~~~js
const de = {
    calendar: {
        // переводы меток календаря
    },
    todo: {
        // переводы меток To Do List
    }
};
~~~

:::tip
Чтобы создать пользовательскую локаль, скопируйте [английскую локаль по умолчанию](#default-locale) и переведите её текстовые метки.
:::

:::info
[**Этот репозиторий GitHub**](https://github.com/web-widgets/wx-todo-locales/tree/master/locales) предоставляет локали To Do List для следующих языков:

- Китайский (`cn`)
- Французский (`fr`)
- Немецкий (`de`)
- Английский (`en`)
- Итальянский (`it`)
- Японский (`jp`)
- Португальский (`pt`)
- Русский (`ru`)
- Испанский (`es`)

Файлы не включают переводы меток Calendar — добавьте их самостоятельно.
:::

Фрагмент ниже применяет локаль `de` к To Do List и Toolbar:

~~~js {8,13}
const { ToDo, Toolbar} = todo;
const { tasks, users, projects, tags } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    locale: de // устанавливает локаль "de" в компоненте
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
    locale: de // устанавливает локаль "de" в Toolbar
});
~~~

:::tip
Чтобы сменить локаль динамически, вызовите [`setLocale()`](api/methods/setlocale_method.md) на компоненте To Do List и [соответствующий `setLocale()`](api/toolbar_api/methods/setlocale_method.md) на Toolbar.
:::

## Пример {#example}

Фрагмент ниже переключается между локалями EN и DE:

<iframe src="https://snippet.dhtmlx.com/kzjwvuq5?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
