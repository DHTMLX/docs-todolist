---
sidebar_label: setProject()
title: setProject 메서드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 setProject 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판도 다운로드할 수 있습니다.
---

# setProject()

### 설명 {#description}

@short: 지정한 프로젝트를 활성 프로젝트로 설정합니다

### 사용법 {#usage}

~~~js
setProject({
    id: string | number | null
}): void;
~~~

### 매개변수 {#parameters}

- `id` - (필수) 프로젝트의 ID. *프로젝트 없음* 섹션을 표시하려면 ID를 `null`로 설정하세요

### 예제 {#example}

~~~js {17-19}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    projects: [
        { id: "first", label: "First project" },
        { id: "second", label: "Second project" },
        { id: "third", label: "Third project" },
    ],
    activeProject: "second"
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 활성 프로젝트 변경
list.setProject({
    id: "first"
});
~~~

**관련 문서:** [프로젝트 작업](guides/project_operations.md)
