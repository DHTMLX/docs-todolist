---
sidebar_label: serialize()
title: Метод serialize
description: Вы можете узнать о методе serialize в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, смотрите примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# serialize()

### Описание {#description}

@short: Сериализует данные To Do List в объект JSON

### Использование {#usage}

~~~js
serialize(): object;
~~~

### Возвращаемое значение {#returns}

Метод возвращает сериализованные данные To Do List

~~~js
{
    tasks: [],
    users: [],
    projects: [],
    tags: [],
    priorities: [],
    activeProject: string,
}
~~~

### Пример {#example}

~~~js {12}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, tags } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    tags,
});

// получение объекта с данными To Do List
list.serialize();
~~~

**Полезная статья:** [Загрузка и сохранение данных](guides/loading_data.md)
