---
sidebar_label: copyTask()
title: copyTask 메서드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 copyTask 메서드에 대해 알아보실 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 무료 30일 평가판을 다운로드하실 수도 있습니다.
---

# copyTask()

### 설명 {#description}

@short: 태스크를 클립보드에 복사하고 지정된 위치에 붙여넣습니다

:::info
이 메서드를 사용하면 태스크를 복사하여 붙여넣거나, 클립보드에만 복사할 수 있습니다
 
이 메서드는 태스크를 모든 하위 태스크와 함께 복사합니다
:::

### 사용법 {#usage}

~~~js
copyTask({
    id: string | number,
    join?: boolean, // 기본값: false
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean
}): void;
~~~

### 매개변수 {#parameters}

- `id` - (필수) 태스크의 ID
- `join` - (선택) `true`이면 지정한 태스크를 복사할 태스크 목록에 추가합니다. 하위 태스크는 자동으로 추가됩니다. `false`이면 이전 복사 항목을 모두 초기화합니다(즉, 마지막으로 지정한 태스크만 복사됩니다).

:::info
태스크를 복사하고 붙여넣으려면 메서드에 다음 매개변수를 전달하여 태스크의 새 위치를 정의하세요:
:::

- `parent` - (선택) 상위 태스크의 ID
- `project` - (선택) 태스크를 붙여넣을 프로젝트의 ID
- `targetId` - (선택) 복사된 태스크를 붙여넣을 대상 태스크의 ID
- `reverse` - (선택) 복사된 태스크를 붙여넣을 위치를 정의합니다. 대상 태스크 **앞**(*true*) 또는 **뒤**(*false*, 기본값)

:::tip
한 번의 작업 중에 태스크는 한 번만 복사할 수 있습니다
:::

### 예제 {#example}

~~~js {23-29} title="예제 1. 태스크 하나 복사하기"
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1", project: "p_1"},
        { id: "1.1", text: "Task 1.1", parent: "1", project: "p_1" },
        { id: "2", text: "Task 2", project: "p_2" },
        { id: "2.1", text: "Task 2.1", parent: "2", project: "p_2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1", project: "p_2" },
        { id: "2.1.2", text: "Task 2.1.2", parent: "2.1", project: "p_2" },
    ],
    projects: [
        { "id": "p_1", "label": "Project 1" },
        { "id": "p_2", "label": "Project 2" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// "Task 1.1"을 "Project 2"에 복사하고 "Task 2.1.2" 앞에 붙여넣기
list.copyTask({ 
    id: "1.1",
    project: "p_2",
    parent: "2.1",
    targetId: "2.1.2",
    reverse: true
});
~~~

~~~js title="예제 2. 여러 태스크 복사하기"
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1"},
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "2", text: "Task 2"},
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1" },
        { id: "2.1.2", text: "Task 2.1.2", parent: "2.1" },
        { id: "3", text: "Task 3" },
    ],
    selected: ["2", "3"]
});

// 선택된 태스크 복사
list.eachSelected(id => {
    list.copyTask({
        id,
        join: true,
    });
}, true);

// 복사된 태스크 붙여넣기
list.pasteTask({
    targetId: "2", 
});

// 태스크 선택 해제
list.unselectTask({ id: null });
~~~

**변경 이력**: `join` 매개변수는 v1.1에서 추가되었습니다

**관련 문서**: [태스크 작업](guides/task_operations.md)
