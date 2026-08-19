---
sidebar_label: DHTMLX MCP server
title: Интеграция DHTMLX To Do List с MCP для работы с задачами и REST-синхронизации
description: Задачи, подзадачи, проекты, приоритеты и REST-синхронизация в DHTMLX To Do List остаются актуальными для AI-ассистентов благодаря MCP-серверу.
---

# MCP-сервер DHTMLX To Do List: задачи, проекты и REST-синхронизация

На первый взгляд DHTMLX To Do List выглядит как обычный чек-лист, но внутри него — [вложенные подзадачи](guides/task_operations.md#adding-a-new-task), [горячие клавиши для приоритетов](/#prioritizing-a-task), [изменение порядка задач через drag-and-drop](guides/configuration.md#drag-n-drop), [фильтрация по хэштегам](guides/inline_editing.md#hashtags) и REST-бэкенд, который встраивается в [Event Bus](api/internal/setnext_method.md). Чтобы сгенерированный код действительно работал, ему нужны актуальные сигнатуры для [копирования задачи](api/methods/copytask_method.md) или [превращения задачи в подзадачу](api/methods/indenttask_method.md), правильная структура данных события и те [параметры полей задачи](api/configs/taskshape_config.md), которые существуют сегодня, а не устаревшие сведения из обучающих данных.

Здесь и помогает MCP-сервер DHTMLX: он позволяет ассистенту свериться с актуальной документацией To Do List перед тем, как отвечать. Направьте его на [операции с задачами](guides/task_operations.md), [множественный выбор и групповые действия](guides/multiselection.md), [интеграцию с REST-бэкендом](guides/working_with_server.md) или [настройку задач и проектов](guides/configuration.md) — и ассистент получит актуальный набор API вместо догадок.

### Адрес MCP-сервера {#mcp-endpoint}

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

:::note
MCP-сервер DHTMLX охватывает все основные продукты DHTMLX, а не только DHTMLX To Do List. Один и тот же адрес и одни и те же инструкции по настройке работают независимо от того, с каким компонентом DHTMLX вы работаете.
:::

## Поддержка API To Do List в MCP-сервере {#mcp-server-support-across-the-to-do-list-api}

Индекс сервера охватывает всю документацию DHTMLX To Do List, в том числе:

- Поиск актуального API: [методы To Do List](api/overview/methods_overview.md), [события](api/overview/events_overview.md), [свойства](api/overview/configs_overview.md) и соответствующий [Toolbar API](category/toolbar-properties.md).
- Генерацию готового к запуску кода [инициализации](guides/initialization.md) и [конфигурации](guides/configuration.md) под конкретный набор задач, проектов и пользователей.
- Управление иерархией задач и групповые действия: [добавление, перемещение и удаление задач](guides/task_operations.md), изменение [уровня вложенности](guides/task_operations.md#changing-the-indent-level-of-a-task) и операции над [несколькими выбранными задачами](guides/multiselection.md).
- Работу с [проектами](guides/project_operations.md) и [объектом проекта](guides/project_object_operations.md), включая смену активного проекта и перенос задач между проектами.
- Назначение [исполнителей задач](guides/task_users.md), установку сроков выполнения и настройку [приоритетов](api/configs/priorities_config.md).
- Подключение `RestDataProvider` к [REST-бэкенду](guides/working_with_server.md), включая многопользовательский режим и порядок Event Bus, который задаётся через `api.setNext()`.
- Настройку [сортировки и фильтрации](guides/sorting_filtering_tasks.md), [скрытия выполненных задач](guides/hide_completed_tasks.md) и [режима только для чтения](guides/readonly_mode.md).
- Работу со [встроенным редактированием](guides/inline_editing.md) и [горячими клавишами](guides/keyboard_navigation.md) для задач и проектов.
- Изучение [локализации](guides/localization.md), [стилизации](guides/stylization.md) и интеграции с [React](guides/integration_with_react.md), [Vue](guides/integration_with_vue.md), [Angular](guides/integration_with_angular.md) и [Svelte](guides/integration_with_svelte.md).

## Как вопрос о To Do List проходит через MCP-сервер {#how-a-to-do-list-question-moves-through-the-mcp-server}

Задайте MCP-серверу DHTMLX любой вопрос о To Do List — и запрос пройдёт через конвейер Retrieval-Augmented Generation (RAG) поверх Model Context Protocol (MCP). Дальше его подхватывает один из двух рабочих процессов: *Search* возвращает подходящие страницы справочника, по которым ассистент пишет ответ, а *Inference* сам читает те же страницы и отвечает напрямую. Запрос о To Do List часто объединяет две разные задачи: одну, для которой нужна актуальная документация, и другую, с которой ассистент справится сам. Первую он отделяет ещё до того, как что-либо дойдёт до MCP.

Вот как выглядит этот процесс для запроса *«Как убедиться, что операции add-task и move-task доходят до моего сервера в правильном порядке?»*:

1. Ассистент выделяет задачу, для которой нужна документация: как встроить RestDataProvider в Event Bus с помощью api.setNext().
2. Сервер точно определяет, к какой документации по работе с сервером относится вопрос.
3. Для генерации такого обработчика нужен код, поэтому запрос уходит в *Search* (более узкий вопрос — например, какое событие срабатывает в цепочке первым — попал бы в *Inference*).
4. *Search* извлекает подходящие страницы из векторного индекса, построенного на актуальной документации To Do List.
5. Эти страницы возвращаются ассистенту в качестве контекста.
6. По этому контексту ассистент собирает код встраивания в Event Bus, а специфичные для вашего сервера детали запросов дополняет из собственных знаний — вместо того чтобы угадывать API To Do List.

Благодаря такому обращению к документации ассистент подключает RestDataProvider к Event Bus именно так, как это работает сегодня.

## Настройка подключения к MCP {#setting-up-the-mcp-connection}

Начинаете ли вы новый проект To Do List или подключаетесь к уже существующему бэкенду с `RestDataProvider` — первый шаг один и тот же: укажите своему инструменту адрес ниже через команду CLI или запись в JSON-конфигурации, в зависимости от того, что этот инструмент ожидает.

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

В следующих разделах настройка разобрана по инструментам.

### Claude Code {#claude-code}

:::info
Полное описание настройки MCP в Claude Code смотрите в [официальной документации](https://code.claude.com/docs/en/mcp).
:::

Чтобы зарегистрировать сервер из командной строки, выполните:

~~~jsx
claude mcp add --transport http dhtmlx-mcp https://docs.dhtmlx.com/mcp
~~~

Ручная настройка тоже подойдёт — просто добавьте это в файл `.mcp.json`:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "type": "http",
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Cursor {#cursor}

:::info
Пошаговая настройка MCP для Cursor описана в [официальной документации](https://cursor.com/en-US/docs/mcp).
:::

Шаги для добавления сервера:

1. Откройте Settings (`Cmd+Shift+J` на Mac, `Ctrl+Shift+J` на Windows/Linux)
2. Перейдите в раздел **Tools & MCP**
3. Нажмите **Add Custom MCP**
4. Вставьте следующую конфигурацию:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Google Antigravity {#google-antigravity}

#### Antigravity 2.0 {#antigravity-20}

:::info
Интеграция с MCP-серверами описана в [официальной документации](https://antigravity.google/docs/mcp) Antigravity.
:::

Чтобы подключить MCP-сервер DHTMLX к Google Antigravity, выполните следующие шаги:

1. Откройте палитру команд
2. Введите «mcp add»
3. Выберите «HTTP»
4. Укажите следующие значения:
- Name:
~~~jsx
dhtmlx-mcp
~~~
- URL:
~~~jsx
https://docs.dhtmlx.com/mcp
~~~

#### Antigravity CLI {#antigravity-cli}

:::info
Шаги миграции с Gemini CLI на Antigravity CLI описаны в [соответствующем руководстве](https://antigravity.google/docs/gcli-migration#mcp-config-formatting-changes).
:::

Чтобы подключить MCP-сервер DHTMLX к Antigravity CLI, создайте файл `mcp_config.json` в одном из этих расположений:

- Глобально: `~/.gemini/config/mcp_config.json`
- В рабочем пространстве: `.agents/mcp_config.json`

Добавьте следующую конфигурацию:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "serverUrl": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

Затем выполните `agy` в терминале.

### ChatGPT {#chatgpt}

:::info
В документации ChatGPT подробно описан весь [процесс настройки MCP-коннектора](https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt).
:::

Шаги настройки коннектора:

1. Перейдите в **Settings** → **Apps & Connectors**
2. Нажмите **Advanced settings**
3. Включите **Developer mode**
4. Вернитесь в **Apps & Connectors** и нажмите «Create»
5. Заполните данные коннектора:
- Name:
~~~jsx
dhtmlx-mcp
~~~
- URL:
~~~jsx
https://docs.dhtmlx.com/mcp
~~~
- Authentication: `No authentication`
6. Нажмите **Create**

После создания коннектора ChatGPT будет подтягивать документацию с MCP-сервера прямо во время диалога.

:::info
Для интенсивной работы с кодом лучше подойдут другие инструменты с поддержкой MCP.
:::

### Другие инструменты {#other-tools}

Большинство других AI-инструментов для работы с кодом тоже поддерживают MCP — обычно в настройках с названием вроде «Model Context Protocol» или «Context Sources». Добавьте туда `https://docs.dhtmlx.com/mcp` как пользовательский источник.

## Как MCP-сервер обращается с вашими данными {#how-the-mcp-server-treats-your-data}

MCP-сервер — это размещённый сервис: на вашей машине ничего не запускается, файлы из вашего окружения не читаются, персональные данные пользователей не сохраняются.

Запросы, отправленные на сервер, могут логироваться для отладки и улучшения сервиса.

Если вашей организации нужны более строгие гарантии, напишите на `info@dhtmlx.com` и запросите коммерческое развёртывание с отключённым логированием запросов.

## Запросы для To Do List: копируйте и адаптируйте {#to-do-list-prompts-to-copy-and-adapt}

Каждая группа ниже посвящена своему типу операций. Скопируйте пример и подстройте формулировку под свои данные.

**Задачи и иерархия**

~~~
How do I add a subtask under a specific task in DHTMLX To Do List?
~~~
~~~
How do I make a task become a subtask of the task directly above it? Use the docs.
~~~
~~~
How do I copy a task along with its subtasks and paste it into a different project?
~~~

**Проекты**

~~~
How do I switch to a different active project and move a task into it?
~~~
~~~
What happens to a project's tasks when I delete the project in DHTMLX To Do List?
~~~

**Выбор и групповые операции**

~~~
How do I select several tasks and mark them all as complete at once in DHTMLX To Do List?
~~~
~~~
How do I delete all currently selected tasks at once? Use the docs.
~~~

**Интеграция с сервером**

~~~
How do I connect DHTMLX To Do List to my Node.js backend and load tasks on initialization?
~~~
~~~
How do I set up multiuser mode so task changes sync across clients in real time?
~~~

## Как сделать запросы о To Do List точнее {#making-to-do-list-prompts-more-precise}

- **Называйте конкретный метод.** В DHTMLX To Do List есть несколько пар похожих по названию методов (`checkTask()`/`uncheckTask()`, `indentTask()`/`unindentTask()`, `hideCompletedTasks()`/`showCompletedTasks()`). Укажите имя метода, чтобы ассистент нашёл нужную страницу справочника, а не угадывал параметры.
- **Уточняйте, о чём идёт речь — о задаче, проекте или пользователе.** Многие методы принимают похожий объект с идентификатором (например, `getTask()` и `getProject()`). Явное указание объекта сужает поиск до нужной части API.
- **Описывайте структуру данных.** Запросы вроде «задача с подзадачами и сроком выполнения» или «задача, назначенная нескольким пользователям» дают более точную документацию, чем общее «задача». Особенно это важно при подготовке данных для загрузки и при настройке `taskShape`.
- **Добавляйте «Use the docs»** в запрос. Эта фраза даёт ассистенту сигнал обратиться к MCP вместо ответа только по обучающим данным. Больше всего это помогает с данными событий (например, `open-menu` или `edit-item`) и с подключением REST-бэкенда — и то и другое меняется от версии к версии.
