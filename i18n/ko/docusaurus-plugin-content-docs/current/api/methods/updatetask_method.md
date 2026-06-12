---
sidebar_label: updateTask()
title: updateTask 메서드
description: DHTMLX JavaScript To Do List 라이브러리의 문서에서 updateTask 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# updateTask()

### 설명 {#description}

@short: 작업의 구성 매개변수를 업데이트합니다

### 사용법 {#usage}

~~~js
updateTask({
    id: string | number,
    task: object
}): void;
~~~

### 매개변수 {#parameters}

- `id` - (필수) 업데이트할 작업의 id
- `task` - (필수) 업데이트할 작업 속성의 해시를 포함하는 객체. 작업 매개변수의 전체 목록은 [여기](api/configs/tasks_config.md)에서 확인할 수 있습니다

### 예시 {#example}

~~~js {17-24}
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

// 작업의 일부 구성 업데이트
list.updateTask({ 
    id: "1.1",
    task: {
        text: "Completed task"
    }
});
~~~

**관련 문서:** [작업 조작](guides/task_operations.md)
