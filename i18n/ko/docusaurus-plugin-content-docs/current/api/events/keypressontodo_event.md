---
sidebar_label: keypress-on-todo
title: keypress-on-todo 이벤트
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 keypress-on-todo 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX To Do List 30일 무료 평가판을 다운로드하세요.
---

# keypress-on-todo

## 설명 {#description}

@short: 키보드 탐색 사용 중 태스크에 포커스가 있을 때 발생합니다

## 사용법 {#usage}

~~~js
"keypress-on-todo": ({
    code: string,
    event: KeyboardEvent
}) => void;
~~~

### 매개변수 {#parameters}

`keypress-on-todo` 이벤트의 callback은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `code` - (필수) 누른 키 또는 키 조합의 코드(*소문자*). 키보드 단축키와 해당 코드의 전체 목록은 [아래](#keyboard-shortcuts)를 참조하십시오
- `event` - (필수) 네이티브 [이벤트 객체](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)

:::info
내부 이벤트를 처리하려면 [**Event Bus 메서드**](category/event-bus-methods.md)를 사용할 수 있습니다
:::

### 예제 {#example}

~~~js {15-17}
const { ToDo, Toolbar } = todo;
const {tasks, projects, users} = getData();

const list = new ToDo("#root", {
    tasks,
    projects,
    users
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// "keypress-on-todo" 이벤트 구독
list.api.on("keypress-on-todo", ({code, event}) => {
    console.log("The", code, "key is pressed"); 
});
~~~

## 키보드 단축키 {#keyboard-shortcuts}

### 기본 모드 {#default-mode}

다음 단축키는 인라인 편집기가 **닫혀 있을 때** 작동합니다.

| 키보드 단축키 | 키 코드 | 설명                                                          |
| :---------------- | -------- | :------------------------------------------------------------------- |
| <kbd>Escape</kbd> | `escape` | 키 입력 시 태스크에 메뉴가 열려 있으면 닫습니다. 다시 누르면 편집기를 닫고, 필터링을 초기화하며, Toolbar의 검색 결과를 접습니다 |

:::tip
아래에서 설명하는 **키 코드**는 Toolbar의 검색창에 포커스가 있을 때는 사용할 수 없습니다.
:::

| 키보드 단축키 | 키 코드 | 설명                                                          |
| :---------------- | -------- | :------------------------------------------------------------------- |
| <kbd>Enter</kbd> | `enter` | 선택된 태스크와 같은 레벨에 새 태스크를 생성하고, 생성된 태스크로 선택을 이동하며 편집기를 엽니다 |
| <kbd>ArrowUp</kbd> | `arrowup` | 이전 태스크로 선택을 위로 이동합니다 |
| <kbd>ArrowDown</kbd> | `arrowdown` | 다음 태스크로 선택을 아래로 이동합니다 |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>Enter</kbd> | `ctrl+enter` | 선택된 태스크의 편집기를 엽니다 |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>Click</kbd> /<br> <kbd>Ctrl(Cmd)</kbd>+<kbd>Shift</kbd>+<kbd>Click</kbd> <br> v1.1에서 추가됨 | `ctrl` /<br> `ctrl+shift` | 자식 태스크를 포함하여 여러 태스크를 선택합니다.<br> 태스크가 현재 선택 상태이면 선택을 해제하며:<br> - 부모 태스크도 선택된 경우 — 해당 태스크와 부모를 함께 선택 해제합니다.<br> - 자식 태스크도 선택된 경우 — 해당 태스크만 선택 해제합니다.|
| <kbd>Shift</kbd>+<kbd>Click</kbd> <br> v1.1에서 추가됨| `shift` |태스크 범위를 선택합니다|
| <kbd>Shift</kbd>+<kbd>ArrowUp</kbd> <br> v1.1에서 추가됨| `shift+arrowup` |현재 태스크 위의 태스크를 선택합니다.<br> 위의 태스크가 현재 선택 상태이면 선택을 해제합니다|
| <kbd>Shift</kbd>+<kbd>ArrowDown</kbd> <br> v1.1에서 추가됨| `shift+arrowdown` |현재 태스크 아래의 태스크(및 모든 자식 태스크)를 선택합니다.<br> 아래의 태스크가 현재 선택 상태이면 선택을 해제합니다|
| <kbd>Ctrl</kbd>+<kbd>ArrowUp</kbd> | `ctrl+arrowup` | 선택된 태스크를 같은 레벨 내에서 위로 이동합니다 |
| <kbd>Ctrl</kbd>+<kbd>ArrowDown</kbd> | `ctrl+arrowdown` | 선택된 태스크를 같은 레벨 내에서 아래로 이동합니다 |
| <kbd>Space</kbd> | `space` | 초기 상태에 따라 태스크를 완료 또는 미완료로 표시합니다 |
| <kbd>Delete</kbd> /<br><kbd>Backspace</kbd> | `delete` /<br>`backspace` | 다음 로직에 따라 선택된 태스크를 삭제합니다:<br> - 자식 태스크 삭제 후, 부모 태스크에 도달할 때까지 선택이 아래/위로 이동합니다 <br>- 부모 태스크 삭제 후, 다음 부모 태스크가 있으면 그 태스크로 선택이 이동하고, 없으면 이전 부모 태스크로 이동합니다 |
| <kbd>ArrowRight</kbd> | `arrowright` | 접힌 부모 태스크를 펼칩니다 |
| <kbd>ArrowLeft</kbd> | `arrowleft` | 펼쳐진 부모 태스크를 접습니다. 이미 접혀 있거나 자식 태스크가 없으면 부모 태스크로 선택이 이동합니다 |
| <kbd>Tab</kbd> | `tab` | 태스크의 중첩 레벨을 한 단계 낮춥니다 |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `shift+tab` | 태스크의 중첩 레벨을 한 단계 높입니다|
| <kbd>Ctrl(Cmd)</kbd>+<kbd>D</kbd> | `ctrl+d` | 선택된 태스크를 같은 레벨에 복제합니다 |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>C</kbd> | `ctrl+c` | 모든 자식 태스크를 포함하여 선택된 태스크를 클립보드에 복사합니다 |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>V</kbd> | `ctrl+v` | 복사된 태스크를 현재 선택된 태스크와 같은 레벨에 붙여넣기 합니다. 어느 레벨에든 붙여넣기가 가능하며, 복사된 태스크의 구조가 유지됩니다 |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>Z</kbd> | `ctrl+z` | 마지막 작업을 되돌립니다 (실행 취소) |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>Y</kbd> /<br><kbd>Ctrl(Cmd)</kbd>+<kbd>Shift</kbd>+<kbd>Z</kbd> | `ctrl+y` /<br>`ctrl+shift+z` | 취소된 작업을 다시 실행합니다 (다시 실행) |
| <kbd>Alt</kbd>+<kbd>1</kbd> /<br><kbd>Alt</kbd>+<kbd>2</kbd> /<br><kbd>Alt</kbd>+<kbd>3</kbd> | `alt+1` /<br>`alt+2` /<br>`alt+3` | 선택된 태스크의 우선순위를 설정합니다 (해당 [`priorities`](api/configs/priorities_config.md) 항목의 단축키에 대응) |
| <kbd>Alt</kbd>+<kbd>0</kbd> | `alt+0` | 선택된 태스크의 우선순위를 초기화합니다 |

### 편집 모드 {#editing-mode}

다음 단축키는 인라인 편집기가 **열려 있을 때** 작동합니다.

| 키보드 단축키 | 키 코드 | 설명 |
| :---------------- | -------- | :---------- |
| <kbd>Escape</kbd> | `escape` | 변경 사항을 저장하지 않고 편집기를 닫습니다 |
| <kbd>Enter</kbd> | `enter` | 편집기를 닫고 변경 사항을 저장합니다 |
| <kbd>Shift</kbd>+<kbd>Enter</kbd> | `shift+enter` | 새 문단을 생성합니다 |
