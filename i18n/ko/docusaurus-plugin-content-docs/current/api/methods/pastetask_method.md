---
sidebar_label: pasteTask()
title: pasteTask 메서드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 pasteTask 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판을 다운로드할 수도 있습니다.
---

# pasteTask()

### 설명 {#description}

@short: 클립보드에 복사된 태스크를 지정한 위치에 붙여넣습니다

### 사용법 {#usage}

~~~js
pasteTask({
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean
}): void;
~~~

### 파라미터 {#parameters}

- `parent` - (선택) 미래 부모 태스크의 ID
- `project` - (선택) 태스크가 붙여넣어질 프로젝트의 ID
- `targetId` - (선택) 복사된 태스크가 붙여넣어질 대상 태스크의 ID
- `reverse` - (선택) 복사된 태스크가 붙여넣어질 위치를 정의합니다: 대상 태스크 **앞** (*true*) 또는 **뒤** (기본값 *false*)

### 예제 {#example}

~~~js {17-19,22-25}
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

// "Task 1.1"을 클립보드에 복사합니다
list.copyTask({ 
    id: "1.1",
});

// 복사된 태스크를 "Task 1.2" 뒤에 붙여넣습니다
list.pasteTask({ 
    parent: "1",
    targetId: "1.2",
});
~~~

**관련 API**: [copyTask()](api/methods/copytask_method.md)

**관련 문서**: [태스크 작업](guides/task_operations.md)
