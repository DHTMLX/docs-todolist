---
sidebar_label: Angular와의 통합
title: Angular와의 통합
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 Angular와의 통합에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX To Do List 30일 무료 평가판도 다운로드할 수 있습니다.
---

# Angular와의 통합 {#integration-with-angular}

:::tip
이 문서를 읽기 전에 **Angular**의 기본 개념과 패턴을 먼저 숙지하시기 바랍니다. 내용을 복습하려면 [**Angular 문서**](https://v17.angular.io/docs)를 참조하세요.
:::

DHTMLX To Do List는 **Angular**와 호환됩니다. 아래 예제에서 두 기술을 함께 사용하는 방법을 보여줍니다. 완성된 프로젝트 예제는 [**GitHub 예제**](https://github.com/DHTMLX/angular-todolist-demo)를 참조하세요.

## 프로젝트 생성 {#create-a-project}

새 Angular 프로젝트를 스캐폴딩하고 의존성을 설치합니다.

:::info
새 프로젝트를 생성하기 전에 [**Angular CLI**](https://v17.angular.io/cli)와 [**Node.js**](https://nodejs.org/en/)를 설치하세요.
:::

Angular CLI로 새로운 *my-angular-todo-app* 프로젝트를 생성합니다. 다음 명령어를 실행하세요:

~~~bash
ng new my-angular-todo-app
~~~

:::note
이 가이드를 따라 진행하려면 새 Angular 앱 생성 시 Server-Side Rendering (SSR) 및 Static Site Generation (SSG/Prerendering)을 비활성화하세요.
:::

명령어 실행 시 필요한 모든 도구가 설치됩니다.

### 의존성 설치 {#install-dependencies}

새로 생성된 앱 디렉터리로 이동합니다:

~~~bash
cd my-angular-todo-app
~~~

[**yarn**](https://yarnpkg.com/) 패키지 매니저로 의존성을 설치하고 개발 서버를 시작합니다:

~~~bash
yarn
yarn start
~~~

앱이 로컬호스트 주소(예: `http://localhost:3000`)에서 실행됩니다.

## To Do List 생성 {#create-the-to-do-list}

앱을 중단하고 To Do List 패키지를 설치합니다.

### 1단계. 패키지 설치 {#step-1-install-the-package}

[**평가판 To Do List 패키지**](how_to_start.md#installing-to-do-list-via-npm-or-yarn)를 다운로드하고 README 파일의 단계를 따르세요. 평가판은 30일 동안만 사용할 수 있습니다.

### 2단계. 컴포넌트 생성 {#step-2-create-the-component}

Toolbar가 포함된 To Do List를 애플리케이션에 추가할 Angular 컴포넌트를 생성합니다. *src/app/* 디렉터리에 *todo* 폴더를 추가하고 그 안에 *todo.component.ts* 파일을 생성합니다.

#### 소스 파일 가져오기 {#import-source-files}

*todo.component.ts*를 열고 To Do List 소스 파일을 가져옵니다. 두 가지 가져오기 경로 중 하나를 선택하세요:

- 로컬 폴더에서 설치한 PRO 버전 — `dhx-todolist-package`에서 가져오기
- 평가판 버전 — `@dhx/trial-todolist`에서 가져오기

아래 코드 조각은 PRO 패키지에서 가져오는 예입니다:

~~~jsx title="todo.components.ts"
import { ToDo, Toolbar } from 'dhx-todolist-package';
~~~

아래 코드 조각은 평가판 패키지에서 가져오는 예입니다:

~~~jsx title="todo.components.ts"
import { ToDo, Toolbar } from '@dhx/trial-todolist';
~~~

이 튜토리얼에서는 **평가판** 버전을 사용합니다.

#### 컨테이너 설정 및 Toolbar가 포함된 To Do List 초기화 {#set-containers-and-initialize-the-to-do-list-with-toolbar}

페이지에 Toolbar가 포함된 To Do List를 표시하려면 두 컴포넌트의 컨테이너를 설정하고 생성자로 초기화합니다. 아래 예제는 템플릿을 정의하고, 컨테이너를 참조하며, `ngOnInit()` 내부에서 컴포넌트를 초기화합니다:

~~~jsx {1,8-11,15-18,24-31} title="todo.component.ts"
import { ToDo, Toolbar } from '@dhx/trial-todolist'; 
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "todo", // "app.component.ts"에서 <todo />로 사용되는 템플릿 이름
    styleUrls: ["./todo.component.css"], // css 파일 포함

    template:  `<main class = "component_container">
                    <div #toolbar_container></div>
                    <div #todo_container class = "widget"></div>
                </main>`
})

export class ToDoComponent implements OnInit, OnDestroy {
    // Toolbar 컨테이너 초기화
    @ViewChild("toolbar_container", { static: true }) toolbar_container!: ElementRef;
    // To Do List 컨테이너 초기화
    @ViewChild("todo_container", { static: true }) todo_container!: ElementRef;
    
    private _todo!: ToDo;
    private _toolbar!: Toolbar;

    ngOnInit() {
        // To Do List 컴포넌트 초기화
        this._todo = new ToDo(this.todo_container.nativeElement, {});
        
        // Toolbar 컴포넌트 초기화
        this._toolbar = new Toolbar(this.toolbar_container.nativeElement, {
            api: this._todo.api,
            // 기타 구성 속성
        });
    }

    ngOnDestroy(): void {
        this._todo.destructor(); // To Do List 소멸
        this._toolbar.destructor(); // Toolbar 소멸
    }
}
~~~

#### 스타일 추가 {#add-styles}

To Do List가 올바르게 렌더링되도록 CSS 파일을 가져옵니다. *src/app/todo/* 디렉터리에 *todo.component.css* 파일을 생성하고 To Do List와 해당 컨테이너의 스타일을 추가합니다. 아래 코드 조각은 To Do List 스타일을 가져오고 레이아웃 크기를 설정합니다:

~~~css title="todo.component.css"
/* To Do List 스타일 가져오기 */
@import "@dhx/trial-todolist/dist/todo.css";

/* 초기 페이지 스타일 */
html,
body{
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: #f7f7f7;
}

/* To Do List와 Toolbar 컨테이너 스타일 */
.component_container {
    height: 100%; 
    max-width: 800px; 
    margin: 0 auto;
}

/* To Do List 컨테이너 스타일 */
.widget {
    height: calc(100% - 56px);
}
~~~

#### 데이터 로드 {#load-data}

*src/app/todo/* 디렉터리에 *data.ts* 파일을 생성하고 데이터를 추가합니다. 아래 예제는 tasks, users, projects를 반환하는 `getData()` 함수를 내보냅니다:

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

*todo.component.ts*를 열고 데이터 파일을 가져온 다음, `ngOnInit()` 메서드 내의 To Do List 구성 객체에 데이터 속성을 전달합니다. 아래 코드 조각은 초기화 시 사용자, 작업, 프로젝트 데이터를 적용합니다:

~~~jsx {2,23,25-27} title="todo.component.ts"
import { ToDo, Toolbar } from '@dhx/trial-todolist';
import { getData } from "./data"; // 데이터 가져오기
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
        const { users, tasks, projects } = getData(); // 데이터 속성 초기화
        this._todo = new ToDo(this.todo_container.nativeElement, {
            users,
            tasks,
            projects,
            // 기타 구성 속성
        });

        this._toolbar = new Toolbar(this.toolbar_container.nativeElement, {
            api: this._todo.api,
            // 기타 구성 속성
        });
    }

    ngOnDestroy(): void {
        this._todo.destructor();
        this._toolbar.destructor();
    }
}
~~~

`ngOnInit()` 내부에서 [`parse()`](api/methods/parse_method.md) 메서드를 사용하여 To Do List에 데이터를 로드할 수도 있습니다. 아래 예제는 초기화 후 `parse()`로 데이터를 로드합니다:

~~~jsx {2,23,31-36} title="todo.component.ts"
import { ToDo, Toolbar } from '@dhx/trial-todolist';
import { getData } from "./data"; // 데이터 가져오기
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
        const { users, tasks, projects } = getData(); // 데이터 속성 초기화
        this._todo = new ToDo(this.todo_container.nativeElement, {});

        this._toolbar = new Toolbar(this.toolbar_container.nativeElement, {
            api: this._todo.api,
            // 기타 구성 속성
        });

        // parse() 메서드로 데이터 적용
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

`parse(data)`를 호출할 때마다 현재 데이터셋이 교체됩니다.

이제 컴포넌트가 데이터가 채워진 To Do List를 렌더링합니다. 사용 가능한 다른 속성은 [구성 개요](api/overview/configs_overview.md)를 참조하세요.

#### 이벤트 처리 {#handle-events}

사용자 동작에 반응하려면 이벤트를 구독하세요. [이벤트 전체 목록](api/overview/events_overview.md)을 참조하세요.

*todo.component.ts*를 열고 `ngOnInit()` 메서드를 완성합니다. 아래 코드 조각은 `add-task` 이벤트에 핸들러를 연결합니다:

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

### 3단계. 앱에 To Do List 추가 {#step-3-add-the-to-do-list-into-the-app}

`ToDoComponent`를 앱에 추가하려면 *src/app/app.component.ts*를 열고 기본 코드를 아래 코드 조각으로 교체합니다:

~~~jsx {5} title="app.component.ts"
import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `<todo/>` // "todo.component.ts"에서 생성된 템플릿
})
export class AppComponent {
    name = "";
}
~~~

*src/app/* 디렉터리에 *app.module.ts* 파일을 생성하고 `ToDoComponent`를 등록합니다. 아래 예제는 컴포넌트를 선언하고 앱을 부트스트랩합니다:

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

마지막으로 *src/main.ts*를 열고 기존 코드를 다음으로 교체합니다:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

앱을 시작하면 To Do List가 샘플 데이터와 함께 렌더링됩니다:

![샘플 데이터와 함께 Angular 애플리케이션에 렌더링된 DHTMLX To Do List](/img/trial_todolist.png)

완성된 프로젝트는 [**GitHub**](https://github.com/DHTMLX/angular-todolist-demo)에서 확인할 수 있습니다.
