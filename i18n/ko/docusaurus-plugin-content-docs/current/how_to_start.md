---
sidebar_label: 시작하기
title: 시작하기
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 DHTMLX To Do List 사용을 시작하는 방법을 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 확인하고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 무료 30일 평가판도 다운로드할 수 있습니다.
---

# 시작하기 {#how-to-start}

이 튜토리얼에서는 완전한 기능을 갖춘 To Do List를 만들고 웹 애플리케이션에 추가하는 방법을 안내합니다.

![웹 페이지에 표시된 완전한 기능의 DHTMLX To Do List](/img/todolist.png)

아래의 모든 단계를 완료하면 바로 사용할 수 있는 To Do List가 완성됩니다. 이를 필요에 맞게 손쉽게 구성하여 실제 환경에서 효율적으로 활용할 수 있습니다.

## 1단계. 소스 파일 포함하기 {#step-1-include-source-files}

:::info
To Do List 패키지를 [**여기**](https://dhtmlx.com/docs/products/dhtmlxTodo/download.shtml)에서 다운로드한 후 향후 프로젝트 폴더에 압축을 해제하세요.
:::

먼저 HTML 파일을 만들고 *index.html*로 이름을 지정합니다. 그런 다음 DHTMLX To Do List의 소스 파일을 이 파일에 포함합니다.

다음 두 파일을 포함해야 합니다:

- To Do List JS 파일
- To Do List CSS 파일

~~~html title="index.html" {5-6}
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with DHTMLX To Do List</title>
        <script type="text/javascript" src="./dist/todo.js"></script>  
        <link rel="stylesheet" href="./dist/todo.css">
    </head>
    <body>
        <script>
        // 코드를 여기에 작성하세요
        </script>
    </body>
</html>
~~~

### npm 또는 yarn으로 To Do List 설치하기 {#installing-to-do-list-via-npm-or-yarn}

`yarn` 또는 `npm` 패키지 매니저를 사용하여 JavaScript To Do List를 프로젝트에 가져올 수 있습니다.

#### npm 또는 yarn으로 체험판 To Do List 설치하기 {#installing-trial-to-do-list-via-npm-or-yarn}

:::info
To Do List 체험판을 사용하려면 [**체험판 To Do List 패키지**](https://dhtmlx.com/docs/products/dhtmlxTodo/download.shtml)를 다운로드하고 *README* 파일에 안내된 단계를 따르세요. 체험판 To Do List는 30일 동안만 사용할 수 있습니다.
:::

#### npm 또는 yarn으로 PRO To Do List 설치하기 {#installing-pro-to-do-list-via-npm-or-yarn}

:::info
[고객 영역](https://dhtmlx.com/clients/)에서 **npm** 로그인 및 비밀번호를 생성하여 DHTMLX 전용 **npm**에 직접 접근할 수 있습니다. 자세한 설치 가이드도 해당 페이지에서 확인할 수 있습니다. 전용 **npm** 접근은 유효한 To Do List 프로프라이어터리 라이선스를 보유한 경우에만 가능합니다.
:::

## 2단계. To Do List 만들기 {#step-2-create-to-do-list}

이제 페이지에 To Do List를 추가할 수 있습니다. 이를 위해 To Do List와 Toolbar를 배치할 두 개의 DIV 컨테이너를 만들어야 합니다. 단계는 다음과 같습니다:

- *index.html* 파일에 두 개의 DIV 컨테이너를 지정합니다
- `new ToDo()`와 `new Toolbar()` 생성자를 사용하여 각각 To Do List와 Toolbar를 초기화합니다

~~~js title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with To Do List</title>
        <script type="text/javascript" src="./dist/todo.js"></script>  
        <link rel="stylesheet" href="./dist/todo.css">
    </head>
    <body>
        <div id="toolbar"></div>
        <div id="root"></div>

        <script>
            const { ToDo, Toolbar } = todo; // 객체 구조 분해를 적용합니다
            
            const list = new ToDo("#root", {
                // 구성 속성 
            });
            const toolbar = new Toolbar("#toolbar", {
                api: list.api,
                // 추가 구성 속성  
            });
        </script>
    </body>
</html>
~~~

:::note
`todo` 전역 객체를 ToDo와 Toolbar 두 변수로 "분리"하기 위해 객체 구조 분해를 적용해야 합니다.

`new todo.ToDo()`와 `new todo.Toolbar()` 생성자를 사용하는 경우에는 이 단계가 필요하지 않습니다.
:::

:::info
Toolbar는 To Do List 인터페이스의 선택적 구성 요소입니다. Toolbar 없이 To Do List를 만들려면 DIV 컨테이너 하나만 지정하고 `new ToDo()` 생성자로 List를 초기화하면 됩니다.
:::

To Do List 초기화에 대한 자세한 내용은 [초기화](guides/initialization.md) 문서를 참조하세요.

## 3단계. To Do List에 데이터 로드하기 {#step-3-load-data-into-to-do-list}

To Do List를 초기화했지만 아직 비어 있습니다. 이 단계에서는 컴포넌트에 데이터를 채우는 방법을 알아봅니다.

:::info
페이지에 빈 컴포넌트를 표시하려면 이 단계를 건너뛰어도 됩니다.
:::

먼저 컴포넌트에 로드할 데이터를 준비해야 합니다. 데이터에는 [`tasks`](api/configs/tasks_config.md), [`projects`](api/configs/projects_config.md), [`users`](api/configs/users_config.md), [`tags`](api/configs/tags_config.md), [`activeProject`](api/configs/activeproject_config.md) 정보 세트가 포함될 수 있습니다.

가장 편리한 방법은 별도 파일에 데이터를 준비하는 것입니다. 예를 들면:

~~~js title="data.js"
function getData() {
    // 작업 데이터
    const tasks = [
        // "widgets" 프로젝트의 작업 데이터
        { "id": "widgets", "project": "widgets", "text": "\u{1F389} DHTMLX widgets" },
        { "id": "gantt", "project": "widgets", "parent": "widgets", "text": "Gantt" },
        { "id": "scheduler", "project": "widgets", "parent": "widgets", "text": "Scheduler" },
        { "id": "diagram", "project": "widgets", "parent": "widgets", "text": "Diagram" },
        
        // "introduction" 프로젝트의 작업 데이터    
        {
            "id": "temp://1652991560212",
            "project": "introduction",
            "text": "Greetings, everyone! \u{1F44B} \nI'm DHTMLX To Do List."
        },
        {
            "id": "1652374122964",
            "project": "introduction",
            "text": "You can assign task performers and due dates using the menu.",
            "assigned": [ "user_2", "user_1", "user_3" ],
            "due_date": "2033-03-08T21:00:00.000Z"
        },
        {
            "id": "1652097809881",
            "project": "introduction",
            "text": "You can create tasks with an infinite number of subtasks.",
            "assigned": [ "user_2" ],
            "collapsed": false
        },
        {
            "id": "1652097809882",
            "project": "introduction",
            "parent": "1652097809881",
            "text": "Use the Tab and Shift + Tab keys for this.",
            "checked": false
        },
        {
            "id": "1652097809887",
            "project": "introduction",
            "parent": "1652097809881",
            "text": "Select and press Ctrl (Cmd) + Arrow up / Arrow down to change the task order.",
            "checked": false
        },
        // 추가 작업 객체
    ];

    // 사용자 데이터
    const users = [
        { "id": "user_1", "label": "Don Smith", "avatar": "../avatar_02.jpg" },
        { "id": "user_2", "label": "Nadia Chasey", "avatar": "../avatar_05.jpg" },
        { "id": "user_3", "label": "Mike Young", "avatar": "../avatar_21.jpg" },
        // 추가 사용자 객체
    ];

    // 프로젝트 데이터
    const projects = [
        { "id": "introduction", "label": "Introduction to DHTMLX To Do List" },
        { "id": "widgets", "label": "Our widgets" },
        // 추가 프로젝트 객체
    ];

    return { projects, users, tasks };
}
~~~

이제 컴포넌트 설정 객체에 관련 속성을 지정하여 To Do List에 데이터를 채울 수 있습니다:

~~~js {8,16,18-22} title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with To Do List</title>
        <script type="text/javascript" src="./dist/todo.js"></script>  
        <link rel="stylesheet" href="./dist/todo.css">

        <script src="../data.js"></script>
    </head>
    <body>
        <div id="toolbar"></div>
        <div id="root"></div>

        <script>
            const { ToDo, Toolbar } = todo;
            const { tasks, users, projects } = getData();

            const list = new ToDo("#root", {
                tasks,
                users,
                projects
            });
            const toolbar = new Toolbar("#toolbar", {
                api: list.api,
            });
        </script>
    </body>
</html>
~~~

To Do List에 데이터를 로드하는 방법에 대한 자세한 내용은 [데이터 로드](guides/loading_data.md) 문서를 참조하세요.

## 4단계. To Do List 구성하기 {#step-4-configure-to-do-list}

이제 원하는 To Do List 구성을 정의할 수 있습니다.

이미 아시다시피, To Do List는 List와 Toolbar라는 두 개의 별도 인터페이스로 구성됩니다. 각각 별도의 구성 옵션 목록을 가지고 있습니다:

- [To Do List 속성](api/overview/configs_overview.md) 목록을 확인하세요
- [Toolbar 속성](category/toolbar-properties.md) 목록을 확인하세요

예를 들어, To Do List에 *읽기 전용* 모드를 활성화하고, 활성 프로젝트를 지정하며, Toolbar에 검색 표시줄만 표시해 보겠습니다:

~~~js {5-6,11}
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    activeProject: "introduction",
    readonly: true
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
    items: ["search"]
});
~~~

## 다음 단계 {#whats-next}

이제 To Do List가 준비되었습니다. 직접 데이터를 로드하고 필요에 맞게 컴포넌트를 구성할 수 있습니다.

To Do List의 세계를 더 깊이 탐구하고 싶다면 다음 내용을 학습해 보세요:

- [To Do List 개요](/)
- [가이드](category/guides.md)
- [API](category/api.md)
- [DHTMLX MCP server](guides/mcp-server.md)
