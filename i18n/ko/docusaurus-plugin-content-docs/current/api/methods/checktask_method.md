---
sidebar_label: checkTask()
title: checkTask Method
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 checkTask 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 무료 30일 평가판도 다운로드할 수 있습니다.
---

# checkTask()

### 설명 {#description}

@short: 태스크를 완료로 표시합니다

### 사용법 {#usage}

~~~js
checkTask({
    id: string | number,
    manual?: boolean // false by default
}): void;
~~~

### 매개변수 {#parameters}

- `id` - (필수) 태스크의 id
- `manual` - (선택) `true`이면 태스크를 "수동" 모드로 표시합니다. `false`이면 메서드 적용 결과는 [taskShape](api/configs/taskshape_config.md) 속성의 `completed` 파라미터에 있는 `behavior` 속성값에 따라 결정됩니다

### 예제 {#example}

~~~js {17-20} title="예제 1. 태스크 하나 체크하기"
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 지정된 태스크를 완료로 표시
list.checkTask({ 
    id: "1.1.1",
    manual: true  // 'true' - "taskShape" 속성의 "completed" 파라미터에 있는 "behavior" 속성값을 무시합니다
});
~~~

~~~js title="예제 2. 여러 태스크 체크하기"
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
        { id: "2", text: "Task 2" },
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1" },
        { id: "2.2", text: "Task 2.2", parent: "2" },
    ],
    selected: ["1.1", "2.2"],
});

// 선택된 태스크 체크
list.eachSelected(id => {
    list.checkTask({ id });
}, true);
~~~

**관련 문서:**
- [태스크 관련 작업](guides/task_operations.md)
- [다중 선택 및 일괄 작업](guides/multiselection.md)
