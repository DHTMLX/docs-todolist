---
sidebar_label: setConfig()
title: setConfig Method
description: В документации библиотеки DHTMLX JavaScript To Do List вы можете узнать о методе setConfig компонента Toolbar. Изучайте руководства разработчика и справочник API, просматривайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# setConfig()

### Описание {#description}

@short: Устанавливает конфигурацию компонента Toolbar


### Использование {#usage}

~~~js
setConfig(config: object): void;
~~~

### Параметры {#parameters}
 
- `config` - (обязательный) объект с настройками Toolbar. Полный список свойств см. [здесь](category/toolbar-properties.md)

### Пример {#example}

~~~js {13-15}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, tags } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
});
const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

toolbar.setConfig({
    items: ["combo", "menu"]
});
~~~
