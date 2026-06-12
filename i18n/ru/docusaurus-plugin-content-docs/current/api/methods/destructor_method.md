---
sidebar_label: destructor()
title: Метод destructor
description: Вы можете узнать о методе destructor в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# destructor()

### Описание {#description}

@short: Удаляет все HTML-элементы To Do List и отвязывает все связанные события


### Использование {#usage}

~~~js
destructor(): void;
~~~


### Пример {#example}

~~~js {14,17}
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

// удалить List
list.destructor();

// удалить Toolbar
toolbar.destructor();
~~~
