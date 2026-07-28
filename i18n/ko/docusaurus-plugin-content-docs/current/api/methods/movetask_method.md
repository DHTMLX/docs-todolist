---
sidebar_label: moveTask()
title: moveTask 메서드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 moveTask 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판을 다운로드할 수도 있습니다.
---

# moveTask()

### 설명 {#description}

@short: 태스크를 지정한 위치로 이동합니다

부모 태스크는 자식 태스크와 함께 이동됩니다.

### 사용법 {#usage}

~~~js
moveTask({
    id?: string | number,
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean
}): void;
~~~

### 매개변수 {#parameters}

- `id` - (선택) 이동할 태스크의 ID
- `project` - (선택) 프로젝트의 ID<br>
:::info
태스크를 *프로젝트 없음* 섹션으로 이동하려면 파라미터 값을 `null`로 지정하십시오
:::
- `parent` - (선택) 부모 태스크의 ID
- `targetId` - (선택) 이동한 태스크가 붙여질 대상 태스크의 ID
- `reverse` - (선택) 이동한 태스크가 붙여질 위치를 정의합니다: 대상 태스크 **앞** (*true*) 또는 **뒤** (기본값 *false*)

### 예제 {#example}

~~~js {22-28} title="예제 1. 태스크 하나 이동하기"
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1", project: "p_1"},
        { id: "1.1", text: "Task 1.1", parent: "1", project: "p_1" },
        { id: "2", text: "Task 2", project: "p_2" },
        { id: "2.1", text: "Task 2.1", parent: "2", project: "p_2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1", project: "p_2" },
    ],
    projects: [
        { "id": "p_1", "label": "Project 1" },
        { "id": "p_2", "label": "Project 2" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// "Task 1.1"을 "Project 2"로 이동하여 "Task 2.1"의 자식으로 "Task 2.1.1" 앞에 배치합니다
list.moveTask({ 
    id: "1.1",
    project:"p_2",
    parent: "2.1",
    targetId: "2.1.1",
    reverse: true
});
~~~

아래 예제는 `parent`와 선택적으로 `reverse` 파라미터만 지정했을 때 태스크가 이동되는 위치를 보여줍니다:

~~~js {5,12-13}
// "Task 1.1"을 "Project 2"로 이동하여 "Task 2"의 자식으로 "Task 2.1" 뒤에 배치합니다
list.moveTask({ 
    id: "1.1",
    project:"p_2",
    parent: "2",
});

// "Task 1.1"을 "Project 2"로 이동하여 "Task 2"의 자식으로 "Task 2.1" 앞에 배치합니다
list.moveTask({ 
    id: "1.1",
    project:"p_2",
    parent: "2",
    reverse: true
});
~~~

아래 예제는 `targetId`와 선택적으로 `reverse` 파라미터만 지정했을 때 태스크가 이동되는 위치를 보여줍니다:

~~~js {5,12-13}
// "Task 1.1"을 "Project 2"로 이동하여 루트 태스크로 "Task 2" 뒤에 배치합니다
list.moveTask({ 
    id: "1.1",
    project:"p_2",
    targetId: "2",
});

// "Task 1.1"을 "Project 2"로 이동하여 루트 태스크로 "Task 2" 앞에 배치합니다
list.moveTask({ 
    id: "1.1",
    project:"p_2",
    targetId: "2",
    reverse: true
});
~~~

~~~js title="예제 2. 여러 태스크 이동하기"
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
        { id: "2", text: "Task 2" },
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1" },
        { id: "2.2", text: "Task 2.2" },
    ],
    selected: ["1.1", "2.2"],
});

// 선택된 태스크들을 이동합니다
list.eachSelected(id => {
    list.moveTask({ 
        id,
        parent: "2.1.1"
    });
}, true);
~~~

**관련 문서:**
- [태스크 작업](guides/task_operations.md)
- [다중 선택 및 일괄 작업](guides/multiselection.md)
