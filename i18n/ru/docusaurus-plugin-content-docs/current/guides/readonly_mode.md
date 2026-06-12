---
sidebar_label: Режим только для чтения
title: Режим только для чтения
description: В документации библиотеки DHTMLX JavaScript To Do List вы можете узнать о режиме только для чтения. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# Режим только для чтения

Чтобы перевести To Do List в режим только для чтения, установите конфигурационное свойство [`readonly`](api/configs/readonly_config.md) в `true`. Пример ниже инициализирует To Do List в режиме только для чтения:

~~~js {8}
const { ToDo, Toolbar } = todo;

// создание To Do List
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    readonly: true
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

:::info
В этом режиме задачи недоступны для редактирования. Пользователи могут только выбрать задачу и отметить её как выполненную или невыполненную.
:::

## Пример {#example}

Живой фрагмент ниже демонстрирует режим только для чтения:

<iframe src="https://snippet.dhtmlx.com/ru1q1p7y?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="520"></iframe>
