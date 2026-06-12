---
sidebar_label: React와의 통합
title: React와의 통합
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 React와의 통합에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX To Do List 30일 무료 평가판도 다운로드할 수 있습니다.
---

# React와의 통합 {#integration-with-react}

:::tip
이 문서를 읽기 전에 [**React**](https://react.dev)의 기본 개념과 패턴을 먼저 숙지하시기 바랍니다. 내용을 복습하려면 [**React 문서**](https://react.dev/learn)를 참조하세요.
:::

DHTMLX To Do List는 **React**와 호환됩니다. 아래 예제에서 두 기술을 함께 사용하는 방법을 보여줍니다. 완성된 프로젝트 예제는 [**GitHub의 예제**](https://github.com/DHTMLX/react-todolist-demo)를 참조하세요.

## 프로젝트 생성 {#create-a-project}

새 React 프로젝트를 스캐폴딩하고 의존성을 설치합니다.

:::info
새 프로젝트를 생성하기 전에 [**Vite**](https://vite.dev/) (선택사항)와 [**Node.js**](https://nodejs.org/en/)를 설치하세요.
:::

기본 **React** 프로젝트를 생성하거나 **React with Vite**를 사용하세요. 아래 예제는 프로젝트 이름을 *my-react-todo-app*으로 지정합니다:

~~~bash
npx create-react-app my-react-todo-app
~~~

### 의존성 설치 {#install-dependencies}

새로 생성된 앱 디렉터리로 이동합니다:

~~~bash
cd my-react-todo-app
~~~

패키지 매니저로 의존성을 설치하고 개발 서버를 시작합니다.

[**yarn**](https://yarnpkg.com/)으로 다음 명령어를 실행합니다:

~~~bash
yarn
yarn start
~~~

[**npm**](https://www.npmjs.com/)으로 다음 명령어를 실행합니다:

~~~bash
npm install
npm start
~~~

앱이 로컬호스트 주소(예: `http://localhost:3000`)에서 실행됩니다.

## To Do List 생성 {#create-the-to-do-list}

앱을 중단하고 To Do List 패키지를 설치합니다.

### 1단계. 패키지 설치 {#step-1-install-the-package}

[**평가판 To Do List 패키지**](how_to_start.md#installing-to-do-list-via-npm-or-yarn)를 다운로드하고 README 파일의 단계를 따르세요. 평가판은 30일 동안만 사용할 수 있습니다.

### 2단계. 컴포넌트 생성 {#step-2-create-the-component}

Toolbar가 포함된 To Do List를 애플리케이션에 추가할 React 컴포넌트를 생성합니다. *src/* 디렉터리에 *ToDo.jsx*라는 새 파일을 추가합니다.

#### 소스 파일 가져오기 {#import-source-files}

*ToDo.jsx*를 열고 To Do List 소스 파일을 가져옵니다. 두 가지 가져오기 경로 중 하나를 선택하세요:

- 로컬 폴더에서 설치한 PRO 버전 — `dhx-todolist-package`에서 가져오기
- 평가판 버전 — `@dhx/trial-todolist`에서 가져오기

아래 예제는 PRO 패키지에서 가져옵니다:

~~~jsx title="ToDo.jsx"
import { ToDo, Toolbar } from 'dhx-todolist-package';
import 'dhx-todolist-package/dist/todo.css';
~~~

패키지에 따라 소스 파일이 압축될 수 있습니다. 그 경우 CSS 파일을 *todo.min.css*로 가져오세요.

아래 코드 조각은 평가판 패키지에서 가져옵니다:

~~~jsx title="ToDo.jsx"
import { ToDo, Toolbar } from '@dhx/trial-todolist';
import "@dhx/trial-todolist/dist/todo.css";
~~~

이 튜토리얼에서는 **평가판** 버전을 사용합니다.

#### 컨테이너 설정 및 Toolbar가 포함된 To Do List 추가 {#set-containers-and-add-the-to-do-list-with-toolbar}

페이지에 Toolbar가 포함된 To Do List를 표시하려면 두 컴포넌트의 컨테이너를 생성하고 생성자로 초기화합니다. 아래 예제는 두 컨테이너를 렌더링하고 `useEffect` 내부에서 컴포넌트를 초기화합니다:

~~~jsx {2,6-7,10-11,13-17} title="ToDo.jsx"
import { useEffect, useRef } from "react";
import { ToDo, Toolbar } from "@dhx/trial-todolist";
import "@dhx/trial-todolist/dist/todo.css"; // To Do List 스타일 포함

export default function ToDoComponent(props) {
    let toolbar_container = useRef(); // Toolbar 컨테이너 초기화
    let todo_container = useRef(); // To Do List 컨테이너 초기화

    useEffect(() => {
        // To Do List 컴포넌트 초기화
        const todo = new ToDo(todo_container.current, {});

        // Toolbar 컴포넌트 초기화
        const toolbar = new Toolbar(toolbar_container.current, {
            api: todo.api, // To Do List 내부 API 제공
            // 기타 구성 속성
        });

        return () => {
            todo.destructor(); // To Do List 소멸
            toolbar.destructor(); // Toolbar 소멸
        };
    }, []);

    return  <div className="component_container">
                <div ref={toolbar_container}></div>
                <div ref={todo_container} className="widget"></div>
            </div>
}
~~~

#### 스타일 추가 {#add-styles}

To Do List가 올바르게 렌더링되도록 스타일을 설정합니다. *index.css* 파일을 사용하여 To Do List와 해당 컨테이너의 스타일을 설정합니다. 아래 예제는 페이지의 레이아웃 크기를 정의합니다:

~~~css title="index.css"
/* 초기 페이지 스타일 */
html,
body,
#root {
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

*src/* 디렉터리에 *data.js* 파일을 생성하고 데이터를 추가합니다. 아래 예제는 tasks, users, projects를 반환하는 `getData()` 함수를 내보냅니다:

~~~jsx {2,19,28,38} title="data.js"
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

*App.js*를 열고 데이터를 가져옵니다. 아래와 같이 데이터를 **props**로 `<ToDo/>` 컴포넌트에 전달합니다:

~~~jsx {2,5-6} title="App.js"
import ToDo from "./ToDo";
import { getData } from "./data";

function App() {
    const { tasks, users, projects } = getData(); 
    return <ToDo tasks={tasks} users={users} projects={projects} />;
}

export default App;
~~~

*ToDo.jsx*로 이동하여 전달받은 **props**를 To Do List 구성 객체에 적용합니다. 아래 코드 조각은 구성을 통해 사용자, 작업, 프로젝트 데이터를 전달합니다:

~~~jsx {5,11-13} title="ToDo.jsx"
import { useEffect, useRef } from "react";
import { ToDo, Toolbar } from "@dhx/trial-todolist";
import "@dhx/trial-todolist/dist/todo.css";

export default function ToDoComponent(props) {
    let todo_container = useRef();
    let toolbar_container = useRef();

    useEffect(() => {
        const todo = new ToDo(todo_container.current, {
            users: props.users,
            tasks: props.tasks,
            projects: props.projects,
            // 기타 구성 속성
        });

        const toolbar = new Toolbar(toolbar_container.current, {
            api: todo.api,
            // 기타 구성 속성
        });

        return () => {
            todo.destructor();
            toolbar.destructor();
        };
    }, []);

    return  <div className="component_container">
                <div ref={toolbar_container}></div>
                <div ref={todo_container} className="widget"></div>
            </div>
}
~~~

`useEffect()` 내부에서 [`parse()`](api/methods/parse_method.md) 메서드를 사용하여 To Do List에 데이터를 로드할 수도 있습니다. 아래 예제는 초기화 후 `parse()`로 데이터를 로드합니다:

~~~jsx {9-11,21} title="ToDo.jsx"
import { useEffect, useRef } from "react";
import { ToDo, Toolbar } from "@dhx/trial-todolist";
import "@dhx/trial-todolist/dist/todo.css";

export default function ToDoComponent(props) {
    let todo_container = useRef();
    let toolbar_container = useRef();

    let tasks = props.tasks;
    let users = props.users;
    let projects = props.projects;

    useEffect(() => {
        const todo = new ToDo(todo_container.current, {});

        const toolbar = new Toolbar(toolbar_container.current, {
            api: todo.api,
            // 기타 구성 속성
        });
    
        todo.parse({ tasks, users, projects });

        return () => {
            todo.destructor();
            toolbar.destructor();
        };
    }, []);

    return  <div className="component_container">
                <div ref={toolbar_container}></div>
                <div ref={todo_container} className="widget"></div>
            </div>
}
~~~

`parse(data)`를 호출할 때마다 현재 데이터셋이 교체됩니다.

이제 컴포넌트가 데이터가 채워진 To Do List를 렌더링합니다. 사용 가능한 다른 속성은 [구성 개요](api/overview/configs_overview.md)를 참조하세요.

#### 이벤트 처리 {#handle-events}

사용자 동작에 반응하려면 이벤트를 구독하세요. [이벤트 전체 목록](api/overview/events_overview.md)을 참조하세요.

*ToDo.jsx*를 열고 `useEffect()` 메서드를 완성합니다. 아래 코드 조각은 `add-task` 이벤트에 핸들러를 연결합니다:

~~~jsx {5-7} title="ToDo.jsx"
// ...
useEffect(() => {
    const todo = new ToDo(todo_container.current, {});

    todo.api.on("add-task", (obj) => {
        console.log("A new task is added", obj);
    });
    
    return () => {
        todo.destructor();
    };
}, []);
// ...
~~~

### 3단계. 앱에 To Do List 추가 {#step-3-add-the-to-do-list-into-the-app}

컴포넌트를 앱에 추가하려면 *App.js*를 열고 기본 코드를 아래 코드 조각으로 교체합니다:

~~~jsx title="App.js"
import ToDo from "./ToDo";
import { getData } from "./data";

function App() {
    const { tasks, users, projects } = getData();
    return <ToDo tasks={tasks} users={users} projects={projects} />;
}

export default App;
~~~

앱을 시작하면 To Do List가 샘플 데이터와 함께 렌더링됩니다:

![To Do List 초기화](../assets/trial_todolist.png)

완성된 프로젝트는 [**GitHub**](https://github.com/DHTMLX/react-todolist-demo)에서 확인할 수 있습니다.
