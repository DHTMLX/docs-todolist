---
sidebar_label: addTask()
title: addTask() Method
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 addTask 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 무료 30일 평가판도 다운로드할 수 있습니다.
---

# addTask()

### 설명 {#description}

@short: 목록에 새 태스크를 추가합니다

### 사용법 {#usage}

~~~js
addTask({
    id?: string | number,
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean,
    task: object
}): void;
~~~

### 파라미터 {#parameters}

- `id` - (선택) 새 태스크의 ID
- `parent` - (선택) 부모 태스크의 ID
- `project` - (선택) 프로젝트의 ID. 기본값은 [현재 활성화된 프로젝트](api/configs/activeproject_config.md)의 ID입니다<br>
:::info
활성 프로젝트가 지정된 상태에서 *프로젝트 없음* 섹션에 태스크를 추가해야 하는 경우, 이 파라미터의 값을 `null`로 지정하십시오
:::
- `targetId` - (선택) 새 태스크가 추가될 기준이 되는 대상 태스크의 ID
- `reverse` - (선택) 새 태스크가 추가될 위치를 정의합니다: 대상 태스크 **앞** 또는 **뒤**
- `task` - (필수) 새 태스크의 데이터 객체. 태스크 파라미터의 전체 목록은 [여기](api/configs/tasks_config.md)에서 확인할 수 있습니다

:::info
메서드의 `id`, `parent`, `project` 파라미터를 지정한 경우, 태스크 객체 내에서 별도로 지정할 필요가 없습니다
:::

### 예제 {#example}

~~~js {22-31}
const { ToDo, Toolbar } = todo;

// To do list 생성
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1", project: "first" },
        { id: "1.1", text: "Task 1.1", parent: "1", project: "first" },
        { id: "1.1.2", text: "Task 1.1.2", parent: "1.1", project: "first" },
        { id: "1.2", text: "Task 1.2", parent: "1", project: "first" },
    ],
    projects: [
        { id: "first", label: "First project" },
        { id: "second", label: "Second project" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 새 태스크 추가
list.addTask({
    id: "1.1.1",
    project: "first",
    parent: "1.1",
    targetId: "1.1.2",
    reverse: true,
    task: {
        text: "Task 1.1.1",
    }
});
~~~

**관련 문서:** [태스크 관련 작업](guides/task_operations.md)
