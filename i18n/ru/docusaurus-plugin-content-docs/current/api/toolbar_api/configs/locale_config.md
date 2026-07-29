---
sidebar_label: locale
title: locale Config
description: В документации библиотеки DHTMLX JavaScript To Do List вы можете узнать о конфигурации locale компонента Toolbar. Изучайте руководства разработчика и справочник API, просматривайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# locale

### Описание {#description}

@short: Необязательный. Применяет нужную локаль к компоненту Toolbar

### Использование {#usage}

~~~js
locale?: object;
~~~

### Конфигурация по умолчанию {#default-config}

По умолчанию Toolbar компонента DHTMLX To Do List использует [английскую локаль](guides/localization.md#default-locale).

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
    locale: de // устанавливает локаль "de" в компоненте To Do List (см. информацию ниже)
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
    locale: de // устанавливает локаль "de" в Toolbar
});
~~~


:::info
Toolbar является отдельным компонентом To Do List. Поэтому перед применением нужной локали к Toolbar убедитесь, что вы уже применили её к компоненту **To Do List**
:::

:::tip
Для динамического изменения локали используйте метод [`setLocale()`](api/toolbar_api/methods/setlocale_method.md)
:::

**Полезная статья:** [Локализация](guides/localization.md)
