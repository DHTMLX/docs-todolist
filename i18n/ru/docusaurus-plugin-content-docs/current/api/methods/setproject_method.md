---
sidebar_label: setProject()
title: Метод setProject
description: Вы можете узнать о методе setProject в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, смотрите примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# setProject()

### Описание {#description}

@short: Устанавливает указанный проект как активный

### Использование {#usage}

~~~js
setProject({
    id: string | number | null
}): void;
~~~

### Параметры {#parameters}

- `id` - (обязательный) ID проекта. Чтобы отобразить раздел *No project*, установите ID в `null`

### Пример {#example}

~~~js {17-19}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    projects: [
        { id: "first", label: "First project" },
        { id: "second", label: "Second project" },
        { id: "third", label: "Third project" },
    ],
    activeProject: "second"
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// смена активного проекта
list.setProject({
    id: "first"
});
~~~

**Полезная статья:** [Операции с проектами](guides/project_operations.md)
