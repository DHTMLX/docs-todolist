---
sidebar_label: destructor()
title: destructor Method
description: В документации библиотеки DHTMLX JavaScript To Do List вы можете узнать о методе destructor компонента Toolbar. Изучайте руководства разработчика и справочник API, просматривайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# destructor()

### Описание {#description}

@short: Удаляет все HTML-элементы компонента Toolbar и отвязывает все связанные события


### Использование {#usage}

~~~js
destructor(): void;
~~~


### Пример {#example}

~~~js {13}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
});
const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

toolbar.destructor();
~~~
