---
sidebar_label: openInlineEditor()
title: openInlineEditor 메서드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 openInlineEditor 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판을 다운로드할 수도 있습니다.
---

# openInlineEditor()

### 설명 {#description}

@short: 태스크/프로젝트의 인라인 에디터를 엽니다

### 사용법 {#usage}

~~~js
openInlineEditor({
    id: string | number,
    type?: "task" | "project"
}): void;
~~~

### 파라미터 {#parameters}

- `id` - (필수) 태스크/프로젝트의 id
- `type` - (선택) 항목의 유형: "task" (기본값) 또는 "project"

### 예제 {#example}

~~~js {17-19}
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

// 태스크의 인라인 에디터를 엽니다
list.openInlineEditor({ 
    id: "1.1.1",
});
~~~

**관련 문서**: [인라인 편집](guides/inline_editing.md)
