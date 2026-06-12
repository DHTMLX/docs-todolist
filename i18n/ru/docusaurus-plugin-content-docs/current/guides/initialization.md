---
sidebar_label: Инициализация
title: Инициализация
description: You can learn about initialization of the DHTMLX JavaScript To Do List in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Инициализация {#initialization}

Чтобы отобразить To Do List на странице, выполните следующие шаги:

1. [Подключите исходные файлы To Do List на странице](#include-source-files)
2. [Создайте два контейнера](#create-containers): один для List и другой для Toolbar
3. [Инициализируйте List и Toolbar](#initialize-to-do-list)

## Подключение исходных файлов {#include-source-files}

Скачайте пакет To Do List и распакуйте его в папку вашего проекта. Получите пакет на [странице загрузки](https://dhtmlx.com/docs/products/dhtmlxTodo/download.shtml).

Подключите следующие исходные файлы на своей странице:

- *todo.js*
- *todo.css*

Скорректируйте относительные пути в соответствии со структурой вашего проекта. Пример ниже загружает оба файла из папки *dist*:

~~~html title="index.html"
<script type="text/javascript" src="./dist/todo.js"></script>
<link rel="stylesheet" href="./dist/todo.css">
~~~

## Создание контейнеров {#create-containers}

Виджет To Do List состоит из двух компонентов: List и Toolbar.

Создайте **два контейнера** для List и Toolbar и назначьте им идентификаторы (например, `"root"` и `"toolbar"`). Следующий фрагмент объявляет оба контейнера:

~~~html title="index.html"
<div id="toolbar"></div> <!-- контейнер для Toolbar (необязательный) -->
<div id="root"></div> <!-- контейнер для List -->
~~~

## Инициализация To Do List {#initialize-to-do-list}

### Инициализация List {#initialize-list}

Инициализируйте List с помощью конструктора `new ToDo()`. Конструктор принимает два параметра:

- контейнер для размещения List (контейнер, созданный выше)
- объект со свойствами конфигурации (полный список см. в [обзоре конфигурационных параметров](api/overview/configs_overview.md))

Следующий фрагмент кода создаёт List внутри контейнера `#root`:

~~~js title="index.js"
const { ToDo, Toolbar } = todo; // деструктурируем глобальный объект todo

// создаём List
const list = new ToDo("#root", {
    // свойства конфигурации
});
~~~

### Инициализация Toolbar {#initialize-toolbar}

Инициализируйте Toolbar с помощью конструктора `new Toolbar()`. Конструктор принимает два параметра:

- контейнер для Toolbar (созданный на предыдущем шаге)
- объект со свойствами конфигурации (полный список см. в [свойствах Toolbar](category/toolbar-properties.md))

:::info
Инициализация Toolbar необязательна. Пропустите этот шаг, если Toolbar не нужен в вашем приложении.
:::

Фрагмент кода ниже создаёт Toolbar и связывает его с List через свойство `api`:

~~~js {9-11} title="index.js"
const { ToDo, Toolbar } = todo; // деструктурируем глобальный объект todo

// создаём List
const list = new ToDo("#root", {
    // свойства конфигурации
});

// создаём Toolbar
const toolbar = new Toolbar("#toolbar", {
    api: list.api
});
~~~

:::note
Деструктурируйте глобальный объект `todo` на `ToDo` и `Toolbar`, чтобы использовать их напрямую.

Пропустите этот шаг, если вы вызываете конструкторы `new todo.ToDo()` и `new todo.Toolbar()` напрямую.
:::

## Загрузка данных в To Do List {#load-data-into-to-do-list}

В статье [Загрузка данных](guides/loading_data.md) описано, как загрузить данные в DHTMLX To Do List.

## Пример {#example}

<iframe src="https://snippet.dhtmlx.com/3vwlbwee?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>
