---
sidebar_label: locale
title: locale Config
description: You can learn about the locale config in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# locale

### Описание {#description}

@short: Необязательный. Применяет необходимую локаль к компоненту

### Использование {#usage}

~~~js
locale?: object;
~~~

### Конфигурация по умолчанию {#default-config}

По умолчанию DHTMLX To Do List использует [английскую локаль](guides/localization.md#default-locale).

~~~js
locale: en
~~~

### Пример {#example}

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
    locale: de // устанавливает локаль "de" в Toolbar (см. информацию ниже)
});
~~~


:::info
Toolbar является отдельным компонентом To Do List. Поэтому необходимую локаль нужно также применять к **Toolbar** через соответствующее свойство [`locale`](api/toolbar_api/configs/locale_config.md)
:::

:::tip
Для динамической смены локали используйте метод [`setLocale()`](api/methods/setlocale_method.md)
:::

**Связанная статья**: [Локализация](guides/localization.md)

**Связанный пример**: [To do list. Локализация](https://snippet.dhtmlx.com/kzjwvuq5)
