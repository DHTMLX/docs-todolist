---
sidebar_label: uncheckTask()
title: uncheckTask 메서드
description: DHTMLX JavaScript To Do List 라이브러리의 문서에서 uncheckTask 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# uncheckTask()

### 설명 {#description}

@short: 작업을 미완료 상태로 표시합니다

### 사용법 {#usage}

~~~js
uncheckTask({
    id: string | number,
    manual?: boolean // 기본값은 false
}): void;
~~~

### 매개변수 {#parameters}

- `id` - (필수) 작업의 id
- `manual` - (선택) `true`이면 "수동" 모드로 작업을 표시합니다. `false`이면 [taskShape](api/configs/taskshape_config.md) 속성의 `completed` 매개변수에서 `behavior` 속성에 지정된 값에 따라 메서드 적용 결과가 결정됩니다

### 예시 {#example}

~~~js {22-25} title="예시 1. 단일 작업 체크 해제"
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 작업을 완료 상태로 표시
list.checkTask({ 
    id: "1.1.1", 
});

// 지정한 작업을 미완료 상태로 표시
list.uncheckTask({ 
    id: "1.1.1",
    manual: true // 'true' - "taskShape" 속성의 "completed" 매개변수의 "behavior" 속성 값을 무시합니다
});
~~~

~~~js title="예시 2. 여러 작업 체크 해제"
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1", checked: true },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1", checked: true },
        { id: "1.2", text: "Task 1.2", parent: "1" },
        { id: "2", text: "Task 2" },
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1" },
        { id: "2.2", text: "Task 2.2", parent: "2", checked: true },
    ],
    selected: ["1.1", "2.2"],
});

// 선택된 작업 체크 해제
list.eachSelected(id => {
    list.uncheckTask({ id });
}, true);
~~~

**관련 문서**:
- [작업 조작](guides/task_operations.md)
- [다중 선택 및 일괄 작업](guides/multiselection.md)
