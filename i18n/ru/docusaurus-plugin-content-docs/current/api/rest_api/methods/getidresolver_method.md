---
sidebar_label: getIDResolver()
title: Метод getIDResolver
description: Вы можете узнать о методе getIDResolver объекта RestDataProvider в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, смотрите примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# getIDResolver()

### Описание {#description}

@short: Возвращает функцию, которая синхронизирует клиентские (временные) идентификаторы с серверными

:::info
Когда клиент создаёт новый объект (задачу или проект), он получает временный идентификатор, тогда как соответствующий серверный идентификатор сохраняется в RestDataProvider. Функция, возвращаемая методом `getIDResolver()`, сопоставляет клиентский идентификатор с его серверным аналогом. Она используется главным образом при обработке серверных событий в многопользовательском бэкенде.
:::

### Использование {#usage}

~~~js
getIDResolver(): (id: string | number, type: number) => string | number;
~~~

### Возвращаемое значение {#returns}

Метод возвращает функцию `idResolver(id, type)`:

- `id` — клиентский (временный) идентификатор для разрешения
- `type` — тип модели:
    - `1` — задача (`TaskID`)
    - `2` — проект (`ProjID`)

Функция возвращает серверный идентификатор, соответствующий переданному клиентскому.

### Пример {#example}

~~~js {4,7}
const { RestDataProvider } = todo;

const restProvider = new RestDataProvider(url);
const idResolver = restProvider.getIDResolver();

const TaskID = 1;
const serverId = idResolver(clientId, TaskID);
~~~

---

**Полезные статьи:** [Работа с сервером](guides/working_with_server.md#customize-server-events)
