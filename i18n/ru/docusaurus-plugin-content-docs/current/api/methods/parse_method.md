---
sidebar_label: parse()
title: Метод parse
description: Вы можете узнать о методе parse в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, загружайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# parse()

### Описание {#description}

@short: Загружает данные в To Do List

### Использование {#usage}

~~~js
parse({
    tasks?: [],
    users?: [],
    projects?: [],
    tags?: [],
    priorities?: [],
    activeProject?: string
}): void;
~~~

### Параметры {#parameters}

- [`tasks`](api/configs/tasks_config.md) - (необязательный) массив объектов с данными задач
- [`users`](api/configs/users_config.md) - (необязательный) массив объектов с данными пользователей
- [`projects`](api/configs/projects_config.md) - (необязательный) массив объектов с данными проектов
- [`tags`](api/configs/tags_config.md) - (необязательный) массив со списком тегов
- [`priorities`](api/configs/priorities_config.md) - (необязательный) массив объектов с данными приоритетов
- [`activeProject`](api/configs/activeproject_config.md) - (необязательный) идентификатор активного проекта

### Пример {#example}

~~~js {3,10-14}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// загрузить подготовленные данные в компонент
list.parse({
    tasks,
    users,
    projects,
});
~~~

**Связанная статья**: [Загрузка и хранение данных](guides/loading_data.md)
