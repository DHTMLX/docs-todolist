---
sidebar_label: 데이터 로드 및 저장
title: 데이터 로드 및 저장
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 데이터 로드 및 저장에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX To Do List 30일 무료 평가판도 다운로드할 수 있습니다.
---

# 데이터 로드 및 저장 {#loading-and-storing-data}

## 로드할 데이터 준비 {#prepare-data-to-load}

DHTMLX To Do List는 구성 속성을 통해 다음 유형의 데이터를 허용합니다:

- [`tasks`](api/configs/tasks_config.md) — 작업 목록
- [`projects`](api/configs/projects_config.md) — 프로젝트 목록
- [`users`](api/configs/users_config.md) — 사용자 목록
- [`priorities`](api/configs/priorities_config.md) — 우선순위 목록
- [`tags`](api/configs/tags_config.md) — 태그 목록
- [`activeProject`](api/configs/activeproject_config.md) — 활성 프로젝트의 id

별도의 파일에 데이터를 준비합니다. 아래 예제는 tasks, projects, users, priorities가 포함된 데이터셋을 반환합니다:

~~~js title="data.js"
function getData() {

    // 작업 데이터
    const tasks = [
        // "widgets" 프로젝트의 작업 데이터
        {
            id: "widgets",
            project: "widgets",
            text: "\u{1F389} DHTMLX widgets",
            priority: 1
        },
        {
            id: "gantt",
            project: "widgets",
            parent: "widgets",
            text: "Gantt",
            priority: 1
        },
        {
            id: "scheduler",
            project: "widgets",
            parent: "widgets",
            text: "Scheduler",
            priority: 2
        },
        {
            id: "diagram",
            project: "widgets",
            parent: "widgets",
            text: "Diagram",
            priority: 3
        },
        // "introduction" 프로젝트의 작업 데이터
        {
            id: "temp://1652991560212",
            project: "introduction",
            text: "Greetings, everyone! \u{1F44B} \nI'm DHTMLX To Do List.",
            priority: null
        },
        {
            id: "1652374122964",
            project: "introduction",
            text: "You can assign task performers and due dates using the menu.",
            assigned: [
                "user_2",
                "user_1",
                "user_3",
            ],
            due_date: "2033-03-08T21:00:00.000Z",
            priority: null
        },
        {
            id: "1652097809881",
            project: "introduction",
            text: "You can create tasks with an infinite number of subtasks.",
            assigned: [
                "user_2"
            ],
            collapsed: false,
            priority: null
        },
        {
            id: "1652097809882",
            project: "introduction",
            parent: "1652097809881",
            text: "Use the Tab and Shift + Tab keys for this.",
            checked: false,
            priority: 3
        },
        {
            id: "1652097809887",
            project: "introduction",
            parent: "1652097809881",
            text: "Select and press Ctrl (Cmd) + Arrow up / Arrow down to change the task order.",
            checked: false,
            priority: null
        },
        // 더 많은 작업 객체
    ];

    // 프로젝트 데이터
    const projects = [
        {
            id: "introduction",
            label: "Introduction to DHTMLX To Do List"
        },
        {
            id: "widgets",
            label: "Our widgets"
        },
        // 더 많은 프로젝트 객체
    ];

    // 사용자 데이터
    const users = [
        {
            id: "user_1",
            label: "Don Smith",
            avatar: "../avatar_02.jpg"
        },
        {
            id: "user_2",
            label: "Nadia Chasey",
            avatar: "../avatar_05.jpg"
        },
        {
            id: "user_3",
            label: "Mike Young",
            avatar: "../avatar_21.jpg"
        },
        // 더 많은 사용자 객체
    ];

    // 우선순위 데이터
    const priorities = [
        {
            id: 1,
            label: "Critical",
            color: "#f33",
        },
        {
            id: 2,
            label: "Major",
            color: "rgba(255, 225, 0, 1)",
        },
        {
            id: 3,
            label: "Normal",
            color: "hsla(170, 100%, 40%, 1)",
        },
        {
            id: 4,
            label: "Minor",
            hotkey: "Alt+M",
        },
        // 더 많은 우선순위 객체
    ];

    return { tasks, projects, users, priorities };
}
~~~

프로젝트에서 데이터를 사용할 수 있도록 페이지에 파일을 포함합니다:

~~~html title="index.html"
<script src="../data.js"></script>
~~~

반환된 객체를 구조 분해하여 개별 데이터셋에 접근합니다:

~~~js title="index.js"
const { tasks, users, projects, priorities } = getData();
~~~

## 로컬 소스에서 로드 {#load-from-a-local-source}

### 초기화 시 데이터 로드 {#load-data-on-initialization}

초기화 시 [미리 준비된 데이터](guides/loading_data.md#prepare-data-to-load)를 To Do List에 로드합니다. 아래 예제는 구성 속성을 통해 데이터를 전달합니다:

~~~js {2,5-8} title="index.js"
const { ToDo } = todo;
const { tasks, users, projects, priorities } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    priorities,
});
~~~

### 초기화 후 데이터 로드 {#load-data-after-initialization}

초기화된 To Do List에 데이터를 로드하려면 [`parse()`](api/methods/parse_method.md) 메서드를 사용합니다. 아래 코드 조각은 이미 초기화된 List에 데이터를 파싱합니다:

~~~js {3,5,12-17} title="index.js"
const { ToDo, Toolbar } = todo;

const { users, projects, tasks, priorities } = getData();

const list = new ToDo("#root", {});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 컴포넌트에 데이터 파싱
list.parse({
    tasks,
    users,
    projects,
    priorities
});
~~~

## 상태 저장 및 복원 {#save-and-restore-state}

현재 상태를 저장하려면 [`serialize()`](api/methods/serialize_method.md) 메서드를 사용합니다. 현재 데이터를 JSON 객체로 변환합니다. 아래 코드 조각은 직렬화된 상태를 저장합니다:

~~~js
const state = list.serialize();
// {
//    tasks: [{...}, {...}, ...],
//    users: [{...}, {...}, ...],
//    projects: [{...}, {...}, ...],
//    priorities: [{...}, {...}, ...],
//    tags: [],
//    activeProject: string,
// }
~~~

저장된 상태를 `parse()` 메서드로 다른 To Do List에 전달합니다. 아래 예제는 새 인스턴스에 상태를 복원합니다:

~~~js
// 새 To Do 생성
const list2 =  new ToDo("#root2", {});

// 한 To Do List의 상태를 다른 것에 파싱
list2.parse(state);
~~~
