---
sidebar_label: deleteProject()
title: deleteProject 메서드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 deleteProject 메서드에 대해 알아보실 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 무료 30일 평가판을 다운로드하실 수도 있습니다.
---

# deleteProject()

### 설명 {#description}

@short: 프로젝트를 삭제합니다

:::note
해당 프로젝트에 연결된 태스크는 삭제되지 않습니다. 태스크는 *"프로젝트 없음"* 섹션으로 이동됩니다.
:::

### 사용법 {#usage}

~~~js
deleteProject({
    id: string | number
}): void;
~~~

### 매개변수 {#parameters}

- `id` - (필수) 프로젝트의 ID

### 예제 {#example}

~~~js {16}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    projects: [
        { id: "first", label: "First project" },
        { id: "second", label: "Second project" },
        { id: "third", label: "Third project" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 프로젝트 삭제
list.deleteProject({ id: "first" });
~~~

**관련 문서:** [프로젝트 작업](guides/project_operations.md)
