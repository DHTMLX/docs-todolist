---
sidebar_label: closeInlineEditor()
title: closeInlineEditor Method
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 closeInlineEditor 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 무료 30일 평가판도 다운로드할 수 있습니다.
---

# closeInlineEditor()

### 설명 {#description}

@short: 태스크/프로젝트의 인라인 에디터를 닫습니다

### 사용법 {#usage}

~~~js
closeInlineEditor({
    id: string | number,
    save?: boolean
}): void;
~~~

### 파라미터 {#parameters}

- `id` - (필수) 태스크/프로젝트의 id
- `save` - (선택) 에디터를 닫을 때 변경 사항을 저장할지 여부를 정의합니다. 기본값은 `true`입니다

### 예제 {#example}

~~~js {17-20}
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

// 변경 사항을 저장하지 않고 태스크의 인라인 에디터 닫기
list.closeInlineEditor({ 
    id: "1.1.1",
    save: false
});
~~~

**관련 문서:** [인라인 편집](guides/inline_editing.md)
