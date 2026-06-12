---
sidebar_label: send()
title: Метод send
description: Вы можете узнать о методе send объекта RestDataProvider в документации библиотеки DHTMLX JavaScript To Do List. Изучайте руководства разработчика и справочник API, смотрите примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# send()

### Описание {#description}

@short: Отправляет необходимый HTTP-запрос на сервер и возвращает промис с данными или без них в зависимости от запроса

Все запросы к серверу выполняются с помощью метода `send()`, который является частью сервиса [`RestDataProvider`](guides/working_with_server.md#restdataprovider).


### Использование {#usage}

~~~js
send(
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE" | string,
    data?: object,
    headers?: object,
): Promise<obj[]>
~~~

### Параметры {#parameters}


| Имя        | Тип     | Описание |
| ----------- | ------- | -------- |
| `url`       | string  | *Обязательный*. Путь к серверу, на который отправляется запрос. |
| `method`    | string  | *Обязательный*. Тип HTTP-метода (Get, Post, Put, Delete). |
| `data`      | object  | *Необязательный*. Параметры, отправляемые на сервер. По умолчанию передаются параметры сработавшего события, однако вы можете добавить дополнительные параметры через пользовательский объект. См. [Пример](#examples) ниже. |
| `headers`   | object  | *Необязательный*. По умолчанию используется заголовок `Content-Type` со значением *application/json*. Дополнительные заголовки можно добавить через параметр `customHeaders`. См. [Пример](#examples) ниже. |

### Ответ {#response}

Метод возвращает объект промиса с данными или без них в зависимости от запроса.

Промис возвращается при успешном статусе запроса. В случае неудачного запроса (response.status == 500) выбрасывается исключение с текстом ошибки.

Вы можете настроить, что именно возвращать. Для обработки ответа на неудачный запрос используйте метод `catch` возвращаемого промиса.

~~~js

restDataProvider.send(url, method, data)
.then(data => {
   ... // успех: делаем что-то с данными
})
.catch(err => {
    ... // обработчик ошибки
});

~~~

### Примеры {#examples}

Пример ниже показывает, как отправить запрос с дополнительными параметрами помимо стандартных:

~~~js {20-25}
const { ToDo, Toolbar, RestDataProvider } = todo;

const activeProject = null;
const url = "http://localhost:3000";
const restProvider = new RestDataProvider(url);

Promise.all([
    restProvider.getProjectTasks(activeProject),
    restProvider.getProjects(),
]).then(([tasks, projects]) => {
    const list = new ToDo("#root", {
        tasks,
        projects,
        activeProject,
    });
    const toolbar = new Toolbar("#toolbar", {
        api: list.api,
    });

    list.api.on("set-project", obj => {
    obj.custom = "custom event";
    restDataProvider.send(`tasks/projects/0`, "GET", obj).then(data => {
        list.api.parse({ tasks: data });
        return Promise.resolve();
    });
});

    list.api.setNext(restProvider);
    restProvider.setAPI(list.api);
});

~~~

Следующие примеры показывают, как добавить дополнительные заголовки в метод `send`.

~~~js
const customHeaders = {
     "Authorization": "Bearer",
    "Custom header": "some value",
};

list.api.on("add-task", obj => {
    restDataProvider.send("tasks", "POST", obj, customHeaders);
});
~~~

Или вы можете добавить заголовки следующим способом — переопределив RestDataProvider, что даёт больше контроля над отправляемыми данными:

~~~js {6-11}
const { ToDo, Toolbar, RestDataProvider } = todo;
...
// Инициализация ToDo
...

class MyDataProvider extends RestDataProvider {
  send(url, method, data, headers) {
      headers = { ...headers, "SomeToken": "abc" };
      return super.send(url, method, data, headers);
  }
}

const myProvider = new MyDataProvider(url);
list.api.setNext(myProvider);
myProvider.setAPI(list.api);
~~~ 
---

**Связанные статьи**: [Работа с сервером](guides/working_with_server.md)
