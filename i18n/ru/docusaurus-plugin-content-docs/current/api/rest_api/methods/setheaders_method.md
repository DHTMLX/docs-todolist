---
sidebar_label: setHeaders()
title: Метод setHeaders
description: Вы можете узнать о методе setHeaders объекта RestDataProvider в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, смотрите примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# setHeaders()

### Описание {#description}

@short: Устанавливает пользовательские заголовки, добавляемые к каждому запросу RestDataProvider

:::info
Заголовки, переданные в `setHeaders()`, объединяются со стандартным заголовком `Content-Type: application/json` и отправляются с каждым запросом. Это обычно используется для передачи токена авторизации (например, заголовка `Remote-Token`) в многопользовательском бэкенде.
:::

### Использование {#usage}

~~~js
setHeaders(headers: object): void;
~~~

### Параметры {#parameters}

| Имя        | Тип    | Описание |
| ----------- | ------ | -------- |
| `headers`   | object | *Обязательный*. Объект с пользовательскими заголовками, добавляемыми к каждому запросу |

### Пример {#example}

~~~js {7-9}
const { RestDataProvider } = todo;

const url = "https://some_backend_url";

login(url).then(token => {
    const restProvider = new RestDataProvider(url);
    restProvider.setHeaders({
        "Remote-Token": token,
    });
    // ... инициализируем To Do List и подключаем провайдер
});
~~~

---

**Связанные статьи**: [Работа с сервером](guides/working_with_server.md#multiuser-backend)
