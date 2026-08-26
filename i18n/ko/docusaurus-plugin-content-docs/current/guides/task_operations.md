---
sidebar_label: 작업 조작
title: 작업 조작
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 작업 조작에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 무료 30일 평가판을 다운로드하실 수도 있습니다.
---

# 작업 조작

## 새 작업 추가 {#adding-a-new-task}

목록에 새 작업을 추가하려면 [`addTask()`](api/methods/addtask_method.md) 메서드를 사용합니다. 아래 예제는 지정된 부모 아래에 작업을 추가합니다.

~~~js
list.addTask({
    id: "1.1.1",
    project: "first",
    parent: "1.1",
    targetId: "1.1.2",
    reverse: true,
    task: {
        text: "Task 1.1.1",
    }
});
~~~

## 작업 복사 및 붙여넣기 {#copyingpasting-a-task}

### 복사 및 붙여넣기 {#copy-and-paste}

작업을 복사하고 붙여넣는 가장 빠른 방법은 [`copyTask()`](api/methods/copytask_method.md) 메서드입니다. 다음 매개변수를 전달합니다.

- `id` - 복사하여 붙여넣을 작업의 id
- `project` - 대상 프로젝트가 존재하는 경우 그 id
- `targetId` - 복사된 작업을 붙여넣을 대상 작업의 id
- 기타 매개변수는 선택 사항

아래 코드는 작업을 새 프로젝트로 복사합니다.

~~~js
list.copyTask({ 
    id: "1.1", // ID of the task to copy
    join: false, // resets copies of other tasks and copies only this task
    project: "p_2", // ID of the future project (if exists)
    parent: "2.1", // ID of the future parent
    targetId: "2.1.2", // ID of the target task
    reverse: true // paste the task before the target one
});
~~~

### 클립보드에 복사 {#copy-to-the-clipboard}

붙여넣지 않고 작업을 클립보드에 복사하려면 [`copyTask()`](api/methods/copytask_method.md) 메서드에 작업 id를 전달합니다.

~~~js
list.copyTask({ 
    id: "1.1"
});
~~~

### 다른 복사본의 id 유지 {#save-ids-of-other-copies}

:::info
작업을 복사하면서 이전에 복사한 작업을 유지하려면 [`copyTask()`](api/methods/copytask_method.md) 메서드에 `join: true`를 전달합니다. 그렇지 않으면 지정된 작업만 복사되고 이전 복사본은 모두 초기화됩니다.
:::

### 클립보드에서 붙여넣기 {#paste-from-the-clipboard}

[`pasteTask()`](api/methods/pastetask_method.md) 메서드를 사용하여 클립보드에서 복사된 작업을 원하는 위치에 붙여넣습니다. 아래 코드는 복사된 작업을 대상 작업 옆에 붙여넣습니다.

~~~js
list.pasteTask({ 
    parent: "1",
    targetId: "1.2",
});
~~~

:::info
[`clone-task`](api/events/clonetask_event.md) 이벤트는 클립보드 내용이 대상 위치에 삽입될 때 [`paste-task`](api/events/pastetask_event.md) 이후에 발생합니다. 콜백은 부모 id, 프로젝트 id, 대상 id, 그리고 복제된 작업 객체가 담긴 `batch` 배열을 받습니다.
:::

## 작업 업데이트 {#updating-a-task}

작업의 매개변수를 동적으로 업데이트하려면 [`updateTask()`](api/methods/updatetask_method.md) 메서드를 사용합니다. 아래 예제는 작업의 텍스트를 변경합니다.

~~~js
list.updateTask({ 
    id: "1.1.1",
    task: {
        text: "Completed task"
    }
});
~~~

## 작업 이동 {#moving-a-task}

작업을 다른 위치로 이동하려면 [`moveTask()`](api/methods/movetask_method.md) 메서드를 사용합니다. 아래 코드는 작업을 다른 프로젝트로 이동합니다.

~~~js
list.moveTask({ 
    id: "1.1", // ID of the task to move
    project:"p_2", // ID of the future project (if exists)
    parent: "2", // ID of the future parent
    targetId: "2.1", // ID of the target task
    reverse: true // place the task before the target one
});
~~~

:::note
부모 작업은 하위 작업과 함께 이동됩니다.
:::

## 작업 삭제 {#deleting-a-task}

작업을 삭제하려면 [`deleteTask()`](api/methods/deletetask_method.md) 메서드를 사용합니다.

~~~js
list.deleteTask({ id: "1.2" });
~~~

:::note
이 메서드는 작업과 모든 자식 작업을 함께 삭제합니다.
:::

## 작업 펼치기 및 접기 {#expandingcollapsing-a-task}

작업을 접으려면 [`collapseTask()`](api/methods/collapsetask_method.md) 메서드를 사용합니다. 이 메서드는 작업 id를 매개변수로 받습니다.

~~~js
list.collapseTask({ id: "1.1" });

~~~

접힌 작업을 id로 펼치려면 [`expandTask()`](api/methods/expandtask_method.md) 메서드를 사용합니다.

~~~js
list.expandTask({ id: "1.1" });
~~~

## 컨텍스트 메뉴 {#context-menu}

각 작업과 사용자에는 컨텍스트 메뉴가 있습니다. 다음 두 이벤트로 메뉴 활동을 추적할 수 있습니다.

- [`open-menu`](api/events/openmenu_event.md) - 메뉴가 열릴 때 발생합니다. 항목 id, 메뉴 유형, 그리고 배치 작업을 위한 작업 id 배열(`source`)을 제공합니다.
- [`close-menu`](api/events/closemenu_event.md) - 메뉴가 닫힐 때 발생합니다. 항목 id와 메뉴 유형을 제공합니다.

아래 예제는 메뉴 생명주기 이벤트를 로깅합니다.

~~~js
list.api.on("open-menu", ({ id, type, source }) => {
    console.log("menu opened for", id, "type", type, "source", source);
});

list.api.on("close-menu", ({ id, type }) => {
    console.log("menu closed for", id, "type", type);
});
~~~

*변경 이력:* `open-menu` 및 `close-menu` 이벤트는 v1.1에서 추가되었습니다.

## 작업 완료/미완료 표시 {#marking-a-task-completeincomplete}

[`checkTask()`](api/methods/checktask_method.md) 및 [`uncheckTask()`](api/methods/unchecktask_method.md) 메서드를 통해 작업을 완료 또는 미완료로 표시합니다. 아래 예제는 두 호출을 모두 보여줍니다.

~~~js
list.checkTask({ 
    id: "1.1.1",
    manual: false
});

list.uncheckTask({ 
    id: "1.1.1",
    manual: false
});
~~~

`manual: false`일 때 결과는 `taskShape.completed.behavior`에 따라 달라집니다(자세한 내용은 [`taskShape`](api/configs/taskshape_config.md) 참조).

`taskShape.completed.behavior`가 `"auto"`이지만 일회성 수동 체크가 필요한 경우 `manual: true`를 설정합니다.

~~~js
list.checkTask({ 
    id: "1.1.1",
    manual: true
});

list.uncheckTask({ 
    id: "1.1.1",
    manual: true
});
~~~

## 작업 들여쓰기 수준 변경 {#changing-the-indent-level-of-a-task}

다음 메서드를 사용하여 작업의 중첩 수준을 동적으로 변경합니다.

- [`indentTask()`](api/methods/indenttask_method.md) - 작업의 중첩 수준을 한 단계 낮춥니다.
- [`unindentTask()`](api/methods/unindenttask_method.md) - 작업의 중첩 수준을 한 단계 높입니다.

아래 코드는 작업을 한 단계 더 깊이 내립니다.

~~~js
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

list.indentTask({ id: "1.2" });

console.log(list.getParentIds({ id: "1.2" })); //  ['1.1', '1']
~~~

아래 예제는 작업을 한 단계 위로 올립니다.

~~~js
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

list.unindentTask({ id: "1.2" });

console.log(list.getParentIds({ id: "1.2" })); //  []
~~~

:::info
작업이 이미 최상위 수준에 있으면 `unindentTask()`는 아무 동작도 하지 않습니다.
:::

## 작업 필터링 {#filter-tasks}

[`setFilter()`](api/methods/setfilter_method.md) 메서드로 지정된 조건에 맞는 작업을 찾습니다. 이 메서드는 정확히 일치하는 항목만 찾는 *strict* 모드를 지원합니다. 아래 코드는 해시태그로 작업을 필터링합니다.

~~~js
// filter data by the specified rules
list.setFilter({
    match: "#tag1",
    highlight: true,
    strict: true
});
~~~

필터링을 초기화하려면 `match: null`을 전달합니다.

~~~js
// reset filtering
list.setFilter({ match: null });
~~~

## 실행 취소 및 다시 실행 {#undo-and-redo}

To Do List는 기본적으로 변경 이력을 추적합니다. 마지막 작업을 되돌리려면 [`undo()`](api/methods/undo_method.md) 메서드를 호출합니다. `undo()`로 되돌린 작업을 복원하려면 [`redo()`](api/methods/redo_method.md) 메서드를 호출합니다.

~~~js
list.addTask({ task: { text: "New task" } });

list.undo(); // revert the addition
list.redo(); // restore it
~~~

이력의 범위와 깊이는 [`history`](api/configs/history_config.md) 구성 속성에 따라 달라집니다. 자세한 내용은 [구성 → 변경 이력](guides/configuration.md#history-of-changes)을 참조하세요.

*변경 이력:* `undo()` 및 `redo()` 메서드는 v1.3에서 추가되었습니다.
