---
sidebar_label: Что нового
title: Что нового
description: You can learn a new information about DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Что нового {#whats-new}

Если вы обновляете To Do List с более старой версии, ознакомьтесь с [Миграцией на новую версию](migration.md) для получения подробной информации.

## Версия 1.3.2 {#version-132}

Выпущена 10 июня 2026 года

### Исправления {#fixes}

- Пользовательские иконки меню отображаются некорректно
- Идентификаторы задач не синхронизируются: временные ID не заменяются серверными ID в интерфейсе при создании и клонировании задач
- Редактор задач и активные меню не закрываются при удалении проекта

## Версия 1.3.1 {#version-131}

Выпущена 3 апреля 2025 года

### Исправления {#fixes-131}

- Сборка не включает файлы *todo.es.d.ts* и *todo.d.ts* импортированных библиотек

## Версия 1.3 {#version-13}

Выпущена 27 февраля 2025 года

[Обзор релиза в блоге](https://dhtmlx.com/blog/dhtmlx-to-do-list-1-3/)

### Новая функциональность {#new-functionality}

- Возможность управлять историей изменений в отдельном проекте или во всём приложении через свойство [`history`](api/configs/history_config.md) и методы [`undo()`](api/methods/undo_method.md)/[`redo()`](api/methods/redo_method.md)
- Возможность кастомизировать контекстное меню через свойство [`menu`](api/configs/menu_config.md) ([Пример](https://snippet.dhtmlx.com/slpjstbb))

### Новый API {#new-api}

- Свойство [`history`](api/configs/history_config.md) позволяет включать/отключать историю изменений в отдельном проекте или во всём приложении, а также ограничивать количество хранимых действий
- Методы [`undo()`](api/methods/undo_method.md)/[`redo()`](api/methods/redo_method.md) позволяют управлять историей изменений
- Свойство [`menu`](api/configs/menu_config.md) позволяет кастомизировать контекстное меню ([Пример](https://snippet.dhtmlx.com/cmfqmg00))

### Обновления {#updates}

- Методы [`getState()`](api/internal/getstate_method.md) и [`getReactiveState()`](api/internal/getreactivestate_method.md) возвращают объект `historyState`
- Свойство [`items`](api/toolbar_api/configs/items_config.md) Toolbar расширено параметрами `"undo"` и `"redo"`, которые позволяют отображать элементы управления историей изменений
- Маршруты `POST` [`/tasks`](api/rest_api/routes/post_routes/post_tasks.md) и [`/projects`](api/rest_api/routes/post_routes/post_projects.md) расширены параметром `id`, позволяющим управлять историей изменений на бэкенде
- Маршрут `DELETE` [`/tasks`](api/rest_api/routes/delete_routes/delete_tasks.md) расширен payload `batch`. Параметр `id`, связанный с удаляемой задачей, стал необязательным. Теперь можно удалять несколько задач за один раз

### Исправления {#fixes-13}

- Неаккуратное перетаскивание задач может оставлять клоны по всему окну
- Задачи нового проекта не отображаются после переключения на другой проект
- Всплывающий календарь для срока выполнения не закрывается при клике за его пределами

## Версия 1.2.12 {#version-1212}

Выпущена 15 ноября 2024 года

### Исправления {#fixes-1212}

- Меню не скрываются при клике за их пределами

## Версия 1.2.10 {#version-1210}

Выпущена 19 сентября 2024 года

### Исправления {#fixes-1210}

- API RestDataProvider. Некорректная обработка временных ID, хранящихся в массивах, перед отправкой на сервер

## Версия 1.2.9 {#version-129}

Выпущена 26 августа 2024 года

### Исправления {#fixes-129}

- Ошибка скрипта при сортировке пустого проекта
- Подменю не работают на сенсорных устройствах
- Некорректные типы для объекта `api`

## Версия 1.2.8 {#version-128}

Выпущена 29 февраля 2024 года

### Исправления {#fixes-128}

- Сломанная сборка на npm-сервере

## Версия 1.2.7 {#version-127}

Выпущена 6 февраля 2024 года

### Исправления {#fixes-127}

- Проблема с нажатием Enter при переименовании проекта
- Проблема с нажатием Enter при поиске проектов
- Переопределение wx-стилей при использовании совместно со сложными виджетами. Подробнее читайте в руководстве по [Стилизации](guides/stylization.md)

## Версия 1.2.5 {#version-125}

Выпущена 7 декабря 2023 года

### Исправления {#fixes-125}

- Ошибка скрипта при вызове неиспользуемого пункта меню

## Версия 1.2.4 {#version-124}

Выпущена 7 декабря 2023 года

### Исправления {#fixes-124}

- Перемещение элементов между новыми проектами не работает

## Версия 1.2.3 {#version-123}

Выпущена 13 сентября 2023 года

### Обновления {#updates-123}

- Возможность импортировать компонент как ES-модуль

## Версия 1.2.1 {#version-121}

Выпущена 28 августа 2023 года

### Исправления {#fixes-121}

- Перемещение datepicker на верхний уровень
- При открытии календаря в задаче текст задачи отображается поверх календаря
- При открытии контекстного меню оно позиционируется неверно

## Версия 1.2 {#version-12}

Выпущена 16 мая 2023 года

[Обзор релиза в блоге](https://dhtmlx.com/blog/dhtmlx-to-do-list-1-2/)

### Новая функциональность {#new-functionality-12}

- Возможность расставлять приоритеты задачам через контекстное меню или соответствующий API ([Пример](https://snippet.dhtmlx.com/5cymicwt))
- Возможность сортировки задач по приоритетам
- [Многопользовательский бэкенд](guides/working_with_server.md#multiuser-backend) позволяет отслеживать изменения других пользователей в реальном времени ([Пример](https://snippet.dhtmlx.com/82ayq2lk))
- Отображение задач To Do List в табличном представлении. Интеграция с компонентом [JavaScript DataGrid](https://dhtmlx.com/docs/products/dhtmlxGrid/) ([Пример](https://snippet.dhtmlx.com/e97idjs8))

### Новый API {#new-api-12}

Свойство [`priorities`](api/configs/priorities_config.md) позволяет задать начальный приоритет для задач

### Обновления {#updates-12}

- Свойство [`tasks`](api/configs/tasks_config.md) расширено параметром `priority`, который позволяет указать начальный приоритет
- Свойство [`taskShape`](api/configs/taskshape_config.md) расширено параметром `priority`, который позволяет управлять отображением приоритета карточки
- Расширенный список [локализованных опций](guides/localization.md)

### Исправления {#fixes-12}

- При указании пользователей без свойства `users[n].avatar` возникает ошибка

## Версия 1.1 {#version-11}

Выпущена 10 октября 2022 года

[Обзор релиза в блоге](https://dhtmlx.com/blog/dhtmlx-to-do-list-1-1/)

### Критические изменения {#breaking-changes}

В новом релизе внесены изменения в свойство `taskShape`. Ознакомьтесь со [статьёй о миграции](migration.md#10---11), чтобы оставаться в актуальной версии.

### Новая функциональность {#new-functionality-11}

- Drag-and-drop:
    - возможность [настройки или отключения функциональности](guides/configuration.md#drag-n-drop)
    - новые события: [`start-drag`](api/events/startdrag_event.md), [`drag`](api/events/drag_event.md), [`end-drag`](api/events/enddrag_event.md)
- Множественный выбор и групповые операции:
    - возможность [выбирать](/#selecting-multiple-tasks) и [управлять](/#managing-multiple-tasks) несколькими задачами с помощью горячих клавиш
    - возможность управлять несколькими задачами через меню
    - возможность [выбора и управления несколькими задачами через API](guides/multiselection.md):
        - новое свойство [`selected`](api/configs/selected_config.md)
        - новый параметр `join` для методов: [`selectTask()`](api/methods/selecttask_method.md), [`copyTask()`](api/methods/copytask_method.md)
        - новый параметр `join` для событий: [`select-task`](api/events/selecttask_event.md), [`copy-task`](api/events/copytask_event.md)
        - новый метод: [`eachSelected()`](api/methods/eachselected_method.md)
        - обновлённый метод: [`getSelection()`](api/methods/getselection_method.md)
    - возможность снять выделение со всех задач через метод [`unselectTask()`](api/methods/unselecttask_method.md)
- [To Do List со скрытыми выполненными задачами](guides/hide_completed_tasks.md#initial-mode)
- [Показ/скрытие выполненных задач](guides/hide_completed_tasks.md#switching-between-modes):
    - через меню Toolbar
    - через API:
        - новые методы: [`hideCompletedTasks()`](api/methods/hidecompletedtasks_method.md), [`showCompletedTasks()`](api/methods/showcompletedtasks_method.md)
        - новые события: [`hide-completed-tasks`](api/events/hidecompletedtasks_event.md), [`show-completed-tasks`](api/events/showcompletedtasks_event.md)
        - новый параметр `hideCompleted` для методов: [`hasChildren()`](api/methods/haschildren_method.md), [`getChildrenIds()`](api/methods/getchildrenids_method.md)
- [Сортировка задач](guides/sorting_filtering_tasks.md#sorting-tasks):
    - через меню Toolbar
    - через API:
        - новый метод: [`setSort()`](api/methods/setsort_method.md)
        - новое событие: [`set-sort`](api/events/setsort_event.md)
        - расширенный список параметров свойства [`tasks`](api/configs/tasks_config.md)
- Новые события для управления меню: [`open-menu`](api/events/openmenu_event.md) и [`close-menu`](api/events/closemenu_event.md)

### Обновления {#updates-11}

- [Расширенный список локальных опций](guides/localization.md)

## Версия 1.0.1 {#version-101}

Выпущена 5 июля 2022 года

### Исправления {#fixes-101}

- Значительно улучшена работа API

## Версия 1.0 {#version-10}

Выпущена 20 июня 2022 года

[Обзор релиза в блоге](https://dhtmlx.com/blog/dhtmlx-list-1-0-advanced-task-assignment-inline-editing-handy-keyboard-navigation/)

### Начальная функциональность {#initial-functionality}

- Возможность [загружать данные для `tasks`, `projects`, `users`, `tags`, `activeProject`](guides/loading_data.md)
- Возможность работы с `projects` следующими способами:
    - [через API](guides/project_index.md):
        - [изменить активный проект](api/methods/setproject_method.md)
        - [добавить новые проекты](api/methods/addproject_method.md)
        - [обновить проекты](api/methods/updateproject_method.md)
        - [удалить проекты](api/methods/deleteproject_method.md)
    - [через интерфейс](/#toolbar):
        - переключаться между проектами
        - добавлять, переименовывать и удалять проекты
        - искать нужные проекты
- Возможность работы с `tasks` следующими способами:
    - [через API](guides/task_index.md):
        - [добавлять новые задачи](api/methods/addtask_method.md)
        - [обновлять задачи](api/methods/updatetask_method.md)
        - [удалять задачи](api/methods/deletetask_method.md)
        - [перемещать задачи](api/methods/movetask_method.md)
        - [копировать](api/methods/copytask_method.md) и [вставлять](api/methods/pastetask_method.md) задачи
        - [отмечать](api/methods/checktask_method.md) и [снимать отметку](api/methods/unchecktask_method.md) задач
        - [сворачивать](api/methods/collapsetask_method.md) и [разворачивать](api/methods/expandtask_method.md) задачи
        - [выбирать](api/methods/selecttask_method.md) и [снимать выбор](api/methods/unselecttask_method.md) задач
        - изменять уровень отступа задач: [indentTask()](api/methods/indenttask_method.md) / [unindentTask()](api/methods/unindenttask_method.md)
        - [назначать](api/methods/assignuser_method.md) и [снимать назначение](api/methods/unassignuser_method.md) пользователей
        - [фильтровать задачи](api/methods/setfilter_method.md)
    - [через интерфейс](/#managing-a-task):
        - добавлять, копировать и вставлять, выбирать, перемещать, изменять отступ и удалять задачи
        - искать задачи (по символам или хэштегам)
        - редактировать задачи:
            - [редактировать содержимое задачи двойным кликом](guides/inline_editing.md): вводить текст, числа, хэштеги, даты
            - назначать/снимать назначение пользователей
            - устанавливать срок выполнения
- Возможность настраивать **внешний вид и поведение задач**:
    - [счётчик выполненных подзадач](guides/configuration.md#counter-of-completed-subtasks)
    - [формат даты](guides/configuration.md#date-format)
    - [валидация срока выполнения](guides/configuration.md#due-date-validation)
    - [режим отметки задач как выполненных](guides/configuration.md#mode-of-marking-tasks-complete)
- Возможность [настраивать](guides/configuration.md#toolbar) и [кастомизировать](guides/customization.md#customize-the-toolbar) **Toolbar**
- [Клавиатурная навигация](api/events/keypressontodo_event.md#keyboard-shortcuts)
- [Режим только для чтения](guides/readonly_mode.md)
- [Локализация](guides/localization.md)
- [Интеграция с бэкендом](guides/working_with_server.md) (Go и Node)
- [Интеграция с другими виджетами DHTMLX](guides/integration.md)
- Совместимость с различными браузерами
- Поддержка сенсорных устройств

### API {#api}

- **API To Do List**:
    - [методы](api/overview/methods_overview.md)
    - внутренний API:
        - [методы Event Bus](category/event-bus-methods.md)
        - [методы состояния](category/state-methods.md)
    - [события](api/overview/events_overview.md)
    - [свойства](api/overview/configs_overview.md)
- **API Toolbar**:
    - [методы](category/toolbar-methods.md)
    - [свойства](category/toolbar-properties.md)
- **API RestDataProvider**:
    - [REST-методы](category/rest-methods.md)
