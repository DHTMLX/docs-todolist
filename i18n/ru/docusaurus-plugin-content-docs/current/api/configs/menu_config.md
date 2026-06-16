---
sidebar_label: menu
title: menu Config
description: You can learn about the menu config in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# menu

### Описание {#description}

@short: Необязательный. Управляет видимостью контекстного меню (если boolean) или параметрами его настройки (если функция)

### Использование {#usage}

~~~js
menu?: boolean; 
// или
menu?: function(config: object);
~~~

#### Показать или скрыть контекстное меню {#show-or-hide-context-menu}

Чтобы *скрыть* контекстное меню, задайте конфигу `menu` значение `false`. Чтобы отобразить контекстное меню по умолчанию, задайте конфигу `menu` значение `true`.

~~~js
menu: true // отображает контекстное меню по умолчанию

// или

menu: false // скрывает контекстное меню
~~~

#### Изменить контекстное меню {#modify-context-menu}

Чтобы *изменить* контекстное меню, задайте конфигу `menu` функцию обратного вызова, принимающую объект `config` в качестве параметра. Объект `config` может иметь следующую структуру:

~~~js
config: {
    type: "user" | "toolbar" | "task",
    id?: string | number,
    source?: (string | number)[],
    store: object
};
~~~

**Параметры**

Объект `config` может содержать следующие параметры:

- `type` - (обязательный) тип контекстного меню. Можно указать одно из следующих значений:
    - `"user"` - контекстное меню, связанное с пользователями
    - `"toolbar"` - контекстное меню, связанное с toolbar
    - `"task"` - контекстное меню, связанное с задачами
- `id` - (необязательный | обязательный) идентификатор проекта. Параметр обязателен, если `type: "toolbar"`
- `source` - (необязательный | обязательный) массив идентификаторов задач. Параметр обязателен, если `type: "task"`
- `store` - (обязательный) доступный только для чтения *DataStore*, который должен быть передан в метод `getMenuOptions()`

**Возвращает**

Функция обратного вызова должна возвращать одно из следующих значений:

- `boolean` - `true` для отображения контекстного меню по умолчанию; `false` для скрытия контекстного меню
- `object[]` - массив объектов, хранящих данные для элементов контекстного меню. Каждый объект может иметь следующую структуру:

    ~~~js
    {
        id: string | number,
        icon?: string,
        label?: string,
        hotkey?: string,
        value?: Date,
        data?: object[],
        handler?: function,
        css?: string,
        type?: string
    }
    ~~~

    - `id` - (обязательный) идентификатор элемента меню
    - `icon` - (необязательный) иконка для элемента меню (по умолчанию берётся из шрифта `wxi`)
    - `label` - (необязательный) текст элемента меню
    - `hotkey` - (необязательный) горячая клавиша для действия из данного элемента меню
    - `value` - (необязательный) срок выполнения, актуален для "datepicker"
    - `data` - (необязательный) массив объектов, хранящих дочерние элементы данного элемента меню
    - `handler` - (необязательный) обработчик, позволяющий выполнить действие для пользовательского элемента меню
    - `css` - (необязательный) css-класс
    - `type` - (необязательный) тип элемента меню. Можно указать следующие типы:
        - `"item"` - базовый элемент меню

        <details>
        <summary>Структура типа `"item"` по умолчанию</summary>
            ~~~js {2}
            {
                type: "item",
                id: string,
                icon: string,
                label: string,
                hotkey: string,
                data: [ // при необходимости
                    // ... same objects for sub-items
                ]
            }
            ~~~
            ![Стандартный пункт контекстного меню с подменю в DHTMLX To Do List](/img/menu_item.png)
        </details>

        - `"separator"` - линия для разделения элементов меню

        <details>
        <summary>Структура типа `"separator"` по умолчанию</summary>
            ~~~js
            { type: "separator" }
            ~~~
        </details>

        - `"priority"` - элемент меню для установки приоритетов

        <details>
        <summary>Структура типа `"priority"` по умолчанию</summary>

        По умолчанию в подменю элемента `"setPriority"` отображаются элементы **Высокий**, **Средний** и **Низкий**.

        ~~~js {2,10,18}
        {   // высокий приоритет
            type: "priority",
            label: "High",
            color: "#ff5252",
            hotkey: "Alt+1",
            icon: "empty",
            id: "priority:1"
        },
        {   // средний приоритет
            type: "priority",
            label: "Medium",
            color: "#ffc975",
            hotkey: "Alt+2",
            icon: "empty",
            id: "priority:2"
        },
        {   // низкий приоритет
            type: "priority",
            label: "Low",
            color: "#0ab169",
            hotkey: "Alt+3",
            icon: "empty",
            id: "priority:3"
        }
        ~~~

        ![Подменю приоритетов с вариантами High, Medium и Low в DHTMLX To Do List](/img/menu_priorities.png)
        </details>

        - `"datepicker"` - элемент меню для установки дат

        <details>
        <summary>Структура типа `"datepicker"` по умолчанию</summary>

        По умолчанию элемент `"datepicker"` отображается в подменю элемента `"setDate"`.

        ~~~js {2}
        {
            type: "datepicker",
            id: "dueDate", // ID по умолчанию
            value: new Date(), // выбранная дата
            store: object // только для чтения
        }
        ~~~

        ![Пункт меню с датапикером для установки срока выполнения в DHTMLX To Do List](/img/menu_datepicker.png)
        </details>

        - `"user"` - элемент меню для назначения пользователей на задачи

        <details>
        <summary>Структура типа `"user"` по умолчанию</summary>

        ~~~js {2}
        {
            type: "user",
            id: string, 
            label: string,
            avatar: string, // путь к аватару пользователя
            color: string, // цвет для автоматического аватара, если ссылка на изображение не указана; цвет по умолчанию — "#0AB169"
            icon: string, // иконка, отображаемая слева от аватара и обозначающая назначенного пользователя
            clickable: boolean, // значение, обозначающее элемент как кликабельный
            checked: boolean // значение, обозначающее пользователя, которого представляет этот элемент, как назначенного
        }
        ~~~

        ![Пункт меню для назначения пользователей на задачу в DHTMLX To Do List](/img/menu_users.png)
        </details>

### Пример {#example}

~~~js {3-66,72}
const { ToDo, Toolbar, getMenuOptions } = todo;

const menu = function (config) {
    let options = getMenuOptions(config);

    const { source, store, type } = config;
    if (type === "task") {
        // оставляем только некоторые пункты меню по умолчанию
        options = options.filter(o => {
            return (
                o.id == "addSubtask" ||
                o.id == "setDate" ||
                o.id == "setPriority" || 
                o.id == "assign"
            );
        });
        // добавление новых пунктов меню
        options.push({ type: "separator" });
        options.push({
            type: "item",
            icon: "calendar",
            label: "Add current date",
            id: "addDate",
            handler: () => {
                source.forEach(id => {
                    list.updateTask({
                        id,
                        task: {
                            due_date: new Date()
                        }
                    });
                });
            }
        });
        const task = store.getTask(source[0]);
        if (task.checked) {
            options.push({
                type: "item",
                icon: "undo",
                label: "Mark incomplete",
                id: "uncheck",
                handler: () => {
                    list.uncheckTask({
                        id
                    });
                }
            });
        } else {
            options.push({
                type: "item",
                icon: "check",
                label: "Complete",
                id: "check",
                handler: () => {
                    source.forEach(id => {
                        list.checkTask({
                            id
                        });
                    });
                }
            });
        }
    }

    return options;
};

new ToDo("#root", {
    tasks,
    users,
    projects,
    menu
});
~~~

**История изменений**: Конфиг `menu` добавлен в v1.3

**Связанные примеры**:
    - [To do list. Настройка меню. Добавление и удаление пунктов](https://snippet.dhtmlx.com/slpjstbb)
    - [To do list. Настройка меню. Пользовательские иконки](https://snippet.dhtmlx.com/cmfqmg00)
    - [To do list. Удаление меню для определённой части интерфейса](https://snippet.dhtmlx.com/5pnk7y0d)
