---
sidebar_label: 구성
title: 구성
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 To Do List 구성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 직접 확인하며, DHTMLX To Do List의 무료 30일 평가판을 다운로드하세요.
---

# 구성 {#configuration}

DHTMLX To Do List의 설정을 필요에 맞게 조정하세요. 사용 가능한 구성 옵션을 통해 다음 작업을 수행할 수 있습니다:

- [작업 완료 진행 상태를 표시하는 배지 외관 구성](#counter-of-completed-subtasks)
- [날짜 형식 구성](#date-format)
- [작업의 드래그 앤 드롭 구성 또는 비활성화](#drag-n-drop)
- [작업 마감일 유효성 검사 비활성화](#due-date-validation)
- [작업 완료 표시 모드 변경](#mode-of-marking-tasks-complete)
- [도구 모음 외관 구성](#toolbar)
- [변경 내역 관리](#history-of-changes)
- [완료된 작업 숨김 방식 구성](#hiding-mode-for-completed-tasks)
- [읽기 전용 모드로 To Do List 초기화](#read-only-mode)

:::tip
초기화 이후 동적으로 구성 매개변수를 변경하려면 [`setConfig()`](api/methods/setconfig_method.md) 메서드를 사용하세요. 이 메서드는 현재 컴포넌트를 소멸시키고 병합된 설정으로 다시 생성합니다. 이후 [Toolbar `setConfig()`](api/toolbar_api/methods/setconfig_method.md)를 호출하여 도구 모음을 새 API에 다시 연결하세요.
:::

## 작업 {#tasks}

### 완료된 하위 작업 카운터 {#counter-of-completed-subtasks}

완료된 하위 작업 수를 표시하는 카운터 유형을 변경합니다.

![DHTMLX To Do List의 완료된 하위 작업 카운터](/img/counter.png)

기본적으로 각 상위 작업은 완료된 하위 작업 수와 전체 하위 작업 수의 비율을 카운터로 표시합니다.

카운터 값을 백분율로 표시하려면 `taskShape.counter.type`을 `"percentage"`로 설정하세요. 자세한 내용은 [`taskShape`](api/configs/taskshape_config.md) 레퍼런스를 참고하세요. 아래 예제는 카운터를 백분율 모드로 전환합니다:

~~~js {5-9}
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    taskShape: {
        counter: {
            type: "percentage" // 기본값: "number"
        }
    }
});
~~~

**관련 샘플:** [To do list. 하위 작업 카운터 및 날짜 형식](https://snippet.dhtmlx.com/magidhw8)

### 날짜 형식 {#date-format}

기본적으로 To Do List는 날짜를 `"%d %M %Y"` 형식(예: *09 Mar 2033*)으로 표시합니다. 다른 형식을 지정하려면 [`taskShape`](api/configs/taskshape_config.md) 속성의 `date` 매개변수를 사용하세요. 다음 코드는 슬래시로 구분된 날짜 형식을 설정합니다:

~~~js {5-10}
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    taskShape: {
        date: {
            format: "%d/%m/%Y", // 기본값: "%d %M %Y"
            validate: true
        }
    }
});
~~~

**관련 샘플:** [To do list. 하위 작업 카운터 및 날짜 형식](https://snippet.dhtmlx.com/magidhw8)

[사용 가능한 문자 목록](api/configs/taskshape_config.md#list-of-characters)을 확인하세요.

### 드래그 앤 드롭 {#drag-n-drop}

드래그 앤 드롭은 기본적으로 활성화되어 있습니다. [하나 또는 여러 작업을 선택](/#selecting-tasks)하고 전체 선택 항목을 한 번에 드래그하세요. 선택한 작업의 복사본을 만들려면 드래그 앤 드롭 중에 *Alt* 키를 누르고 있으면 됩니다.

[`drag`](api/configs/drag_config.md) 속성을 사용하면 다음 작업을 수행할 수 있습니다:

- 드래그 앤 드롭 중 접힌 작업이 마우스 오버 시 펼쳐지지 않도록 방지
- 드래그 앤 드롭 전체 비활성화

아래 예제는 사용자가 항목을 드래그할 때 접힌 작업을 닫힌 상태로 유지합니다:

~~~js {7}
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        ...
    ],
    drag: {
        expand: false // 기본값: true
    }
});
~~~

다음 코드는 드래그 앤 드롭을 완전히 비활성화합니다:

~~~js {6}
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        ...
    ],
    drag: false // 기본값: true
});
~~~

드래그 이벤트를 구독하여 드래그 앤 드롭 생명 주기를 추적하세요:

- [`start-drag`](api/events/startdrag_event.md) — 사용자가 작업 드래그를 시작할 때 발생하며, 소스 작업 id와 모드(`"move"` 또는 `"copy"`)를 제공합니다
- [`drag`](api/events/drag_event.md) — 사용자가 작업을 드래그하는 동안 발생합니다
- [`end-drag`](api/events/enddrag_event.md) — 드래그가 완료될 때 발생하며, 대상 id, 드롭 위치(`"top"`, `"bottom"`, `"in"` 또는 `null`), 모드를 제공합니다

아래 코드는 드래그 작업의 시작과 종료를 로그에 기록합니다:

~~~js
list.api.on("start-drag", ({ start, mode }) => {
    console.log("drag started from", start, "in", mode, "mode");
});

list.api.on("end-drag", ({ target, dropPosition, mode }) => {
    console.log("dropped on", target, "at", dropPosition, "in", mode, "mode");
});
~~~

*변경 로그:* `start-drag` 및 `end-drag` 이벤트는 v1.1에서 추가되었습니다.

### 마감일 유효성 검사 {#due-date-validation}

작업에 [마감일](api/configs/tasks_config.md)을 지정하면 마감일 유효성 검사가 작업 완료를 추적합니다. 마감일은 작업이 기한을 초과하기 전까지 녹색으로 표시됩니다.

![DHTMLX To Do List에서 마감일이 녹색으로 표시된 작업](/img/due_date.png)

기한이 지난 작업의 날짜는 빨간색으로 표시됩니다.

![DHTMLX To Do List에서 마감일이 빨간색으로 표시된 기한이 지난 작업](/img/overdue_task.png)

유효성 검사는 기본적으로 활성화되어 있습니다. 비활성화하려면 `taskShape.date.validate`를 `false`로 설정하세요. 자세한 내용은 [`taskShape`](api/configs/taskshape_config.md) 레퍼런스를 참고하세요. 아래 코드는 마감일 유효성 검사를 끕니다:

~~~js {5-10}
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    taskShape: {
        date: {
            format: "%d %M %Y",
            validate: false // 기본값: true
        }
    }
});
~~~

이 구성에서는 마감일이 회색으로 표시됩니다.

### 작업 완료 표시 모드 {#mode-of-marking-tasks-complete}

기본적으로 To Do List는 `"auto"` 모드에서 작업을 완료 또는 미완료로 표시합니다:

- 작업의 모든 하위 항목을 완료로 표시 → 상위 작업이 자동으로 완료됩니다
- 상위 작업을 완료로 표시 → 모든 하위 작업이 자동으로 완료됩니다
- 완료된 작업의 하위 항목 중 하나라도 미완료로 표시 → 상위 작업이 자동으로 미완료가 됩니다
- 상위 작업을 미완료로 표시 → 모든 하위 작업이 자동으로 미완료가 됩니다

이 동작을 비활성화하고 `"manual"` 모드를 활성화하려면 `taskShape.completed.behavior`를 `"manual"`로 설정하세요. 자세한 내용은 [`taskShape`](api/configs/taskshape_config.md) 레퍼런스를 참고하세요. 아래 예제는 수동 모드를 활성화합니다:

~~~js {5-9}
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    taskShape: {
        completed: {
            behavior: "manual" // 기본값: "auto"
        }
    }
});
~~~

**관련 샘플:** [To do list. 상위 작업 완료 표시의 두 가지 방법](https://snippet.dhtmlx.com/5892fcr2)

## 변경 내역 {#history-of-changes}

To Do List는 기본적으로 변경 내역을 추적합니다. 사용자는 [`undo()`](api/methods/undo_method.md) 및 [`redo()`](api/methods/redo_method.md) 메서드를 통해 작업을 되돌리거나 다시 실행할 수 있습니다.

[`history`](api/configs/history_config.md) 속성을 사용하여 이 동작을 구성하세요. 이 속성은 불리언(단축 형식) 또는 확장 설정이 담긴 객체를 허용합니다:

- `projects` — 프로젝트별로 내역을 분기하여 각 프로젝트가 별도의 내역을 유지하도록 합니다. `false`로 설정하면 앱 전체가 하나의 내역을 공유합니다
- `limit` — 유지할 내역 작업의 최대 수

아래 예제는 내역을 20개 작업으로 제한하고 프로젝트별 분기를 비활성화합니다:

~~~js {9}
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    history: { projects: false, limit: 20 }
});

list.addTask({ task: { text: "New task" } });
list.undo(); // 마지막 작업 되돌리기
list.redo(); // 다시 실행
~~~

내역 관리를 완전히 비활성화하려면 속성을 `false`로 설정하세요. `undo()` 및 `redo()` 메서드를 사용할 수 없게 되며, 해당 Toolbar 컨트롤도 사라집니다.

*변경 로그:* `history` 구성, `undo()`, `redo()` 메서드는 v1.3에서 추가되었습니다.

## 도구 모음 {#toolbar}

도구 모음은 컴포넌트 상단에 표시되며, [초기화](guides/initialization.md#initialize-toolbar)와 [구성](category/toolbar-properties.md)은 별도로 수행합니다.

도구 모음의 기본 구조를 변경하려면 Toolbar 컴포넌트의 [`items`](api/toolbar_api/configs/items_config.md) 구성 속성을 사용하세요. 아래 코드는 검색과 콤보 컨트롤만 유지합니다:

~~~js
const toolbar = new Toolbar("#toolbar", {
    api: list.api,
    items: ["search", "combo"]
});
~~~

`items` 속성은 도구 모음이 렌더링할 컨트롤을 정의합니다. 원하는 순서대로 나열하세요.

## 완료된 작업 숨김 모드 {#hiding-mode-for-completed-tasks}

자세한 내용은 [완료된 작업 숨기기](guides/hide_completed_tasks.md)를 참고하세요.

## 읽기 전용 모드 {#read-only-mode}

[읽기 전용 모드](guides/readonly_mode.md) 섹션에서 To Do List를 읽기 전용으로 만드는 방법을 설명합니다.
