---
sidebar_label: drag
title: drag Config
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 drag config에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 참고하고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판도 다운로드할 수 있습니다.
---

# drag

### 설명 {#description}

@short: 선택 사항. 드래그 앤 드롭 설정을 지정합니다

:::note
터치 기기에서 작업을 드래그 앤 드롭할 때 500ms의 지연이 발생합니다.
:::

### 사용법 {#usage}

~~~js
drag?: boolean;
//or 
drag?: {
    expand?: boolean
};
~~~

### 매개변수 {#parameters}

드래그 앤 드롭을 구성하려면 **간단한** 옵션 또는 **확장** 옵션을 사용할 수 있습니다.

**간단한** 옵션:

- `drag` - (선택 사항) 작업의 드래그 앤 드롭을 활성화/비활성화합니다

**확장** 옵션:

- `drag` - (선택 사항) 드래그 앤 드롭 설정이 담긴 객체. 다음 파라미터를 포함할 수 있습니다:
    - `expand` - (선택 사항) 드래그 앤 드롭 중 작업 위에 마우스를 올렸을 때 접혀 있는 작업을 자동으로 펼칠지 여부를 정의합니다

### 기본 설정 {#default-config}

~~~js
drag: true
// or
drag: {
    expand: true
}
~~~

### 예제 {#example}

~~~js {9-11}
const { ToDo, Toolbar } = todo;

// To do list 생성
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        ...
    ],
    drag: {
        expand: false
    }
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

**변경 로그:** v1.1에서 추가

**관련 문서:** [구성](guides/configuration.md#drag-n-drop)
