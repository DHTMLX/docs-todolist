---
sidebar_label: Интеграция с Angular
title: Интеграция с Angular
description: Вы можете узнать об интеграции с Angular в документации библиотеки DHTMLX JavaScript To Do List. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX To Do List.
---

# Интеграция с Angular {#integration-with-angular}

:::tip
Прежде чем читать эту документацию, ознакомьтесь с базовыми концепциями и шаблонами **Angular**. Для обновления знаний обратитесь к [**документации Angular**](https://v17.angular.io/docs).
:::

DHTMLX To Do List совместим с **Angular**. Приведённые ниже примеры показывают, как использовать их вместе. Полный проект доступен в [**примере на GitHub**](https://github.com/DHTMLX/angular-todolist-demo).

## Создание проекта {#create-a-project}

Создайте новый проект Angular и установите зависимости.

:::info
Перед созданием нового проекта установите [**Angular CLI**](https://v17.angular.io/cli) и [**Node.js**](https://nodejs.org/en/).
:::

Создайте новый проект *my-angular-todo-app* с помощью Angular CLI. Выполните следующую команду:

~~~bash
ng new my-angular-todo-app
~~~

:::note
Чтобы следовать этому руководству, отключите Server-Side Rendering (SSR) и Static Site Generation (SSG/Prerendering) при создании нового Angular-приложения.
:::

Команда устанавливает все необходимые инструменты.

### Установка зависимостей {#install-dependencies}

Перейдите в директорию созданного приложения:

~~~bash
cd my-angular-todo-app
~~~

Установите зависимости и запустите сервер разработки с помощью менеджера пакетов [**yarn**](https://yarnpkg.com/):

~~~bash
yarn
yarn start
~~~

Приложение запускается по адресу localhost (например, `http://localhost:3000`).

## Создание To Do List {#create-the-to-do-list}

Остановите приложение и установите пакет To Do List.

### Шаг 1. Установка пакета {#step-1-install-the-package}

Загрузите [**пробный пакет To Do List**](how_to_start.md#installing-to-do-list-via-npm-or-yarn) и следуйте инструкциям в файле README. Пробная версия доступна только 30 дней.

### Шаг 2. Создание компонента {#step-2-create-the-component}

Создайте Angular-компонент для добавления To Do List с Toolbar в приложение. В директории *src/app/* создайте папку *todo* и внутри неё файл *todo.component.ts*.

#### Импорт исходных файлов {#import-source-files}

Откройте *todo.component.ts* и импортируйте исходные файлы To Do List. Выберите один из двух путей импорта:

- PRO-версия, установленная из локальной папки — импорт из `dhx-todolist-package`
- пробная версия — импорт из `@dhx/trial-todolist`

Следующий фрагмент импортирует из PRO-пакета:

~~~jsx title="todo.components.ts"
import { ToDo, Toolbar } from 'dhx-todolist-package';
~~~

Следующий фрагмент импортирует из пробного пакета:

~~~jsx title="todo.components.ts"
import { ToDo, Toolbar } from '@dhx/trial-todolist';
~~~

В этом руководстве используется **пробная** версия.

#### Настройка контейнеров и инициализация To Do List с Toolbar {#set-containers-and-initialize-the-to-do-list-with-toolbar}

Чтобы отобразить To Do List с Toolbar на странице, задайте контейнеры для обоих компонентов и инициализируйте их с помощью конструкторов. Пример ниже определяет шаблон, ссылки на контейнеры и инициализирует компоненты внутри `ngOnInit()`:

~~~jsx {1,8-11,15-18,24-31} title="todo.component.ts"
import { ToDo, Toolbar } from '@dhx/trial-todolist'; 
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "todo", // template name used in "app.component.ts" as <todo />
    styleUrls: ["./todo.component.css"], // include the css file

    template:  `<main class = "component_container">
                    <div #toolbar_container></div>
                    <div #todo_container class = "widget"></div>
                </main>`
})

export class ToDoComponent implements OnInit, OnDestroy {
    // initialize container for Toolbar
    @ViewChild("toolbar_container", { static: true }) toolbar_container!: ElementRef;
    // initialize container for To Do List 
    @ViewChild("todo_container", { static: true }) todo_container!: ElementRef;
    
    private _todo!: ToDo;
    private _toolbar!: Toolbar;

    ngOnInit() {
        // initialize the To Do List component
        this._todo = new ToDo(this.todo_container.nativeElement, {});
        
        // initialize the Toolbar component
        this._toolbar = new Toolbar(this.toolbar_container.nativeElement, {
            api: this._todo.api,
            // other configuration properties 
        });
    }

    ngOnDestroy(): void {
        this._todo.destructor(); // destruct To Do List
        this._toolbar.destructor(); // destruct Toolbar
    }
}
~~~

#### Добавление стилей {#add-styles}

Импортируйте CSS-файл, чтобы To Do List отображался корректно. Создайте файл *todo.component.css* в директории *src/app/todo/* и добавьте стили для To Do List и его контейнера. Фрагмент ниже импортирует стили To Do List и задаёт размеры макета:

~~~css title="todo.component.css"
/* import To Do List styles */
@import "@dhx/trial-todolist/dist/todo.css";

/* styles for the initial page */
html,
body{
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: #f7f7f7;
}

/* styles for the To Do List and Toolbar container */
.component_container {
    height: 100%; 
    max-width: 800px; 
    margin: 0 auto;
}

/* styles for the To Do List container */
.widget {
    height: calc(100% - 56px);
}
~~~

#### Загрузка данных {#load-data}

Создайте файл *data.ts* в директории *src/app/todo/* и добавьте в него данные. Следующий пример экспортирует функцию `getData()`, которая возвращает задачи, пользователей и проекты:

~~~jsx {2,19,28,38} title="data.ts"
export function getData() {
    const tasks = [
        {
            id: "temp://1652991560212",
            project: "introduction",
            text: "Greetings, everyone! \u{1F44B} \nI'm DHTMLX To Do List.",
            priority: 1
        },
        {
            id: "1652374122964",
            project: "introduction",
            text: "You can assign task performers and due dates using the menu.",
            assigned: ["user_4", "user_1", "user_2", "user_3"],
            due_date: "2033-03-08T21:00:00.000Z",
            priority: 2
        },
        // ...
    ];
    const users = [
        {
            id: "user_1",
            label: "Don Smith",
            avatar:
                "https://snippet.dhtmlx.com/codebase/data/common/img/02/avatar_61.jpg"
        },
        // ...
    ];
    const projects = [
        {
            id: "introduction",
            label: "Introduction to DHTMLX To Do List"
        },
        {
            id: "widgets",
            label: "Our widgets"
        }
    ];
    return { tasks, users, projects };
}
~~~

Откройте *todo.component.ts*, импортируйте файл с данными и передайте свойства данных в объект конфигурации To Do List внутри метода `ngOnInit()`. Фрагмент ниже применяет данные пользователей, задач и проектов при инициализации:

~~~jsx {2,23,25-27} title="todo.component.ts"
import { ToDo, Toolbar } from '@dhx/trial-todolist';
import { getData } from "./data"; // import data
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "todo", 
    styleUrls: ["./todo.component.css"], 
    template:  `<main class = "component_container">
                    <div #toolbar_container></div>
                    <div #todo_container class = "widget"></div>
                </main>`
})

export class ToDoComponent implements OnInit, OnDestroy {
    @ViewChild("toolbar_container", { static: true }) toolbar_container!: ElementRef;
    @ViewChild("todo_container", { static: true }) todo_container!: ElementRef;
    
    private _todo!: ToDo;
    private _toolbar!: Toolbar;

    ngOnInit() {
        const { users, tasks, projects } = getData(); // initialize data properties
        this._todo = new ToDo(this.todo_container.nativeElement, {
            users,
            tasks,
            projects,
            // other configuration properties
        });

        this._toolbar = new Toolbar(this.toolbar_container.nativeElement, {
            api: this._todo.api,
            // other configuration properties 
        });
    }

    ngOnDestroy(): void {
        this._todo.destructor();
        this._toolbar.destructor();
    }
}
~~~

Вы также можете использовать метод [`parse()`](api/methods/parse_method.md) внутри `ngOnInit()` для загрузки данных в To Do List. Пример ниже загружает данные с помощью `parse()` после инициализации:

~~~jsx {2,23,31-36} title="todo.component.ts"
import { ToDo, Toolbar } from '@dhx/trial-todolist';
import { getData } from "./data"; // import data
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "todo", 
    styleUrls: ["./todo.component.css"], 
    template:  `<main class = "component_container">
                    <div #toolbar_container></div>
                    <div #todo_container class = "widget"></div>
                </main>`
})

export class ToDoComponent implements OnInit, OnDestroy {
    @ViewChild("toolbar_container", { static: true }) toolbar_container!: ElementRef;
    @ViewChild("todo_container", { static: true }) todo_container!: ElementRef;
    
    private _todo!: ToDo;
    private _toolbar!: Toolbar;

    ngOnInit() {
        const { users, tasks, projects } = getData(); // initialize data properties
        this._todo = new ToDo(this.todo_container.nativeElement, {});

        this._toolbar = new Toolbar(this.toolbar_container.nativeElement, {
            api: this._todo.api,
            // other configuration properties 
        });

        // apply the data via the parse() method
        this._todo.parse({ 
            users, 
            tasks, 
            projects 
        }); 
    }

    ngOnDestroy(): void {
        this._todo.destructor();
        this._toolbar.destructor();
    }
}
~~~

Каждый вызов `parse(data)` заменяет текущий набор данных.

Теперь компонент отображает заполненный To Do List. Другие доступные свойства описаны в [обзоре конфигурации](api/overview/configs_overview.md).

#### Обработка событий {#handle-events}

Подпишитесь на события, чтобы реагировать на действия пользователя. Смотрите [полный список событий](api/overview/events_overview.md).

Откройте *todo.component.ts* и дополните метод `ngOnInit()`. Фрагмент ниже прикрепляет обработчик к событию `add-task`:

~~~jsx {5-7} title="todo.component.ts"
// ...
ngOnInit() {
    this._todo = new ToDo(this.todo_container.nativeElement, {});

    this._todo.events.on("add-task", (obj) => {
        console.log("A new task is added", obj);
    });
}

ngOnDestroy(): void {
    this._todo.destructor();
}
~~~

### Шаг 3. Добавление To Do List в приложение {#step-3-add-the-to-do-list-into-the-app}

Чтобы добавить `ToDoComponent` в приложение, откройте *src/app/app.component.ts* и замените код по умолчанию следующим фрагментом:

~~~jsx {5} title="app.component.ts"
import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `<todo/>` // template created in "todo.component.ts"
})
export class AppComponent {
    name = "";
}
~~~

Создайте файл *app.module.ts* в директории *src/app/* и зарегистрируйте `ToDoComponent`. Пример ниже объявляет компоненты и запускает приложение:

~~~jsx {4-5,8} title="app.module.ts"
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ToDoComponent } from "./todo/todo.component";

@NgModule({
    declarations: [AppComponent, ToDoComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
~~~

Последний шаг — открыть *src/main.ts* и заменить существующий код следующим:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

Запустите приложение — To Do List отобразится с тестовыми данными:

![Инициализация To Do List](../assets/trial_todolist.png)

Полный проект доступен на [**GitHub**](https://github.com/DHTMLX/angular-todolist-demo).
