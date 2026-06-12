---
sidebar_label: 작업 객체/Id
title: 작업 객체/ID
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 작업 객체와 작업 id에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 무료 30일 평가판을 다운로드하실 수도 있습니다.
---

# 작업 객체/Id

## 작업 객체 가져오기 {#get-a-task-object}

작업 객체를 가져오려면 [`getTask()`](api/methods/gettask_method.md) 메서드를 사용합니다. 아래 예제는 id로 작업을 검색합니다.

~~~js
const tasks = [
    { id: "1", text: "Task 1" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

const list = new ToDo("#root", { tasks });

list.getTask({ id: "1.2" }); // -> {id: '1.2', text: 'Task 1.2', parent: '1'}
~~~

## 작업 존재 여부 확인 {#check-if-a-task-exists}

작업이 존재하는지 확인하려면 [`existsTask()`](api/methods/existstask_method.md) 메서드를 사용합니다. 아래 코드는 두 가지 id를 확인합니다.

~~~js
const tasks = [
    { id: "1", text: "Task 1" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

const list = new ToDo("#root", { tasks });

list.existsTask({ id: "2" }); // -> false
list.existsTask({ id: "1.2" }); // -> true
~~~

## 자식 id 가져오기 {#get-child-ids}

작업의 자식 항목을 가져오려면 [`getChildrenIds()`](api/methods/getchildrenids_method.md) 메서드를 사용합니다. 아래 예제는 작업의 모든 하위 항목을 반환합니다.

~~~js
const tasks = [
    { id: "1", text: "Task 1 #tag1" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.1.1", text: "Task 1.1.1 #tag1", parent: "1.1" },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

console.log(list.getChildrenIds({ id: "1" })); // ['1.1', '1.1.1', '1.2']
console.log(list.getChildrenIds({ id: "1", tree: false })); // ['1.1', '1.2']
~~~

필터링으로 인해 일부 작업이 페이지에서 보이지 않을 수 있습니다. `filtered` 매개변수는 숨겨진 작업을 결과에 포함할지 여부를 정의합니다. `true`로 설정하면 숨겨진 작업을 제외합니다(기본값은 `false`). 아래 코드는 두 가지 옵션을 모두 보여줍니다.

~~~js
// filter the tasks
list.setFilter({ match: "#tag1", highlight: true });

// get children of the task after filtering
console.log(list.getChildrenIds({ id: "1", filtered: false })); // -> ['1.1', '1.1.1', '1.2']

// enable the "filtered" parameter
console.log(list.getChildrenIds({ id: "1", filtered: true })); // -> ['1.1', '1.1.1']
~~~

`tree`를 `false`로 설정하면 1단계 자식만 반환합니다.

~~~js
console.log(list.getChildrenIds({ id: "1", filtered: true, tree: false })); // -> ['1.1']
console.log(list.getChildrenIds({ id: "1", filtered: false, tree: false })); // -> ['1.1', '1.2']
~~~

`hideCompleted`를 `true`로 설정하면 완료된 자식을 제외합니다. 아래 예제는 `filtered`, `tree`, `hideCompleted`를 여러 방식으로 조합하여 사용합니다.

~~~js {4,11,18,21}
const tasks = [
    { id: "1", text: "Task 1 #tag1" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.1.1", text: "Task 1.1.1 #tag1", parent: "1.1", checked: true },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

// before filtering
console.log(list.getChildrenIds({ id: "1", tree: true, hideCompleted: false })); // -> ['1.1', '1.1.1', '1.2']

console.log(list.getChildrenIds({ id: "1", tree: true, hideCompleted: true })); // ['1.1', '1.2']

// filter the tasks
list.setFilter({ match: "#tag1", highlight: true });

// after filtering
console.log(list.getChildrenIds({ id: "1", filtered: true, tree: true, hideCompleted: false})); // -> ['1.1', '1.1.1']
console.log(list.getChildrenIds({ id: "1", filtered: true, tree: true, hideCompleted: true })); // -> ['1.1']

console.log(list.getChildrenIds({ id: "1", filtered: false, tree: true, hideCompleted: false})); // -> ['1.1', '1.1.1', '1.2']
console.log(list.getChildrenIds({ id: "1", filtered: false, tree: true, hideCompleted: true})); // -> ['1.1', '1.2']
~~~

## 작업에 자식이 있는지 확인 {#check-if-a-task-has-children}

작업에 자식 작업이 있는지 확인하려면 [`hasChildren()`](api/methods/haschildren_method.md) 메서드를 사용합니다. 아래 코드는 작업에 자식이 있는지 검증합니다.

~~~js
const tasks = [
    { id: "1", text: "Task 1 #tag1 #tag3" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.1.1", text: "Task 1.1.1 #tag1", parent: "1.1" },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

// check whether the task has children (before filtering)
console.log(list.hasChildren({ id: "1.1" })); // -> true
~~~

필터링으로 인해 일부 작업이 페이지에서 보이지 않을 수 있습니다. `filtered` 매개변수는 필터링된(숨겨진) 작업을 결과에 포함할지(`filtered: false`, 기본값) 여부를 정의합니다(`filtered: true`).

~~~js
// filter the tasks
list.setFilter({ match: "#tag3", highlight: true });

// check whether the task has children (after filtering)
console.log(list.hasChildren({ id: "1.1" })); // -> true
console.log(list.hasChildren({ id: "1.1", filtered: true })); // -> false
~~~

`hideCompleted`를 `true`로 설정하면 결과에서 완료된 작업을 제외합니다.

~~~js {4,9}
const tasks = [
    { id: "1", text: "Task 1 #tag1 #tag3" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.1.1", text: "Task 1.1.1 #tag1", parent: "1.1", checked: true },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

console.log(list.hasChildren({ id: "1.1" })); // -> true
console.log(list.hasChildren({ id: "1.1", hideCompleted: true })); // -> false
~~~

## 부모 id 가져오기 {#get-parent-ids}

작업의 부모 항목을 가져오려면 [`getParentIds()`](api/methods/getparentids_method.md) 메서드를 사용합니다. 아래 예제는 작업의 전체 부모 체인을 반환합니다.

~~~js
const tasks = [
    { id: "1", text: "Task 1 #tag1" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

const list = new ToDo("#root", { tasks });

console.log(list.getParentIds({ id: "1.1.1" })); //  ['1.1', '1']
~~~

## 선택된 작업의 id 가져오기 {#get-ids-of-selected-tasks}

현재 선택된 모든 작업의 id를 가져오려면 [`getSelection()`](api/methods/getselection_method.md) 메서드를 사용합니다. 아래 코드는 미리 선택된 작업으로 To Do List를 초기화하고 선택 항목을 하나 더 추가합니다.

~~~js
const tasks = [
    { id: "1", text: "Task 1 #tag1" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

const list = new ToDo("#root", { 
    tasks,
    selected: ["1.1", "1.2"]
});

list.selectTask({
    id: "1.1.1",
    join: true
});

console.log(list.getSelection({ sorted: false })); // -> ["1.1", "1.2", "1.1.1"]
~~~
