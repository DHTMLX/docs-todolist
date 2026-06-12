---
sidebar_label: setConfig()
title: Метод setConfig
description: Вы можете узнать о методе setConfig в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, смотрите примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# setConfig()

### Описание {#description}

@short: Устанавливает новую конфигурацию для To Do List

### Использование {#usage}

~~~js
setConfig(config: object): void;
~~~

### Параметры {#parameters}

- `config` - (обязательный) объект с новой конфигурацией To Do List. Полный список свойств смотрите [здесь](api/api_overview.md#to-do-list-properties)

:::tip
Метод изменяет только переданные вами параметры. Через метод также можно загружать данные в To Do List, однако для этой цели рекомендуется использовать метод [`parse()`](api/methods/parse_method.md).
:::

:::important
Метод `setConfig()` уничтожает текущий компонент и инициализирует новый. Если вы используете компонент совместно с **Toolbar**, необходимо вызвать метод [`setConfig()`](api/toolbar_api/methods/setconfig_method.md) компонента **Toolbar**, поскольку он использует внутренний API To Do List. Смотрите пример ниже!
:::

### Пример {#example}

~~~js {16-19,21-24}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    projects: [
        { id: "first", label: "First project" },
        { id: "second", label: "Second project" },
        { id: "third", label: "Third project" },
    ],
    activeProject: "first"
});
            
const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// change configuration of To Do List
list.setConfig({
    activeProject: "second"
});

// update configuration parameters of Toolbar
toolbar.setConfig({
    api: list.api,
});
~~~
