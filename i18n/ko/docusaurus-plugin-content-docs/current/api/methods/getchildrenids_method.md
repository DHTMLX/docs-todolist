---
sidebar_label: getChildrenIds()
title: getChildrenIds 메서드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 getChildrenIds 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 무료 30일 평가판을 다운로드하실 수 있습니다.
---

# getChildrenIds()

### 설명 {#description}

@short: 지정한 부모 작업의 하위 작업 ID를 반환합니다


### 사용법 {#usage}

~~~js
getChildrenIds({
    id: string | number,
    filtered?: boolean, // false by default
    tree?: boolean, // true by default
    hideCompleted?: boolean // false by default
}): (string|number)[];
~~~

### 매개변수 {#parameters}

- `id` - (필수) 부모 작업의 ID
- `filtered` - (선택) `false`이면 필터링된 하위 작업도 결과에 포함됩니다
- `tree` - (선택) `true`이면 모든 하위 작업이 결과에 포함되고, `false`이면 부모 작업의 1단계 하위 항목만 포함됩니다
- `hideCompleted` - (선택) `false`이면 완료된 작업도 결과에 포함되고, 그렇지 않으면 결과에서 제외됩니다

:::tip
`filtered` 매개변수는 필터링이 적용된 경우에 사용할 수 있습니다
:::

### 반환값 {#returns}

이 메서드는 하위 항목 ID 배열을 반환합니다

### 예제 {#example}

~~~js {17-19,22,25-27,29-31}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1 #tag1", parent: "1.1", checked: true },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ],
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 필터링 전 작업의 하위 항목 가져오기
console.log(list.getChildrenIds({ id: "1" })); // ['1.1', '1.1.1', '1.2']
console.log(list.getChildrenIds({ id: "1", tree: false })); // ['1.1', '1.2']
console.log(list.getChildrenIds({ id: "1", hideCompleted: true })); // ['1.1', '1.2']

// 작업 필터링
list.setFilter({ match: "#tag1", highlight: true });

// 필터링 후 작업의 하위 항목 가져오기
console.log(list.getChildrenIds({ id: "1" })); // -> ['1.1', '1.1.1', '1.2']
console.log(list.getChildrenIds({ id: "1", tree: false })); // -> ['1.1', '1.2']
console.log(list.getChildrenIds({ id: "1", hideCompleted: true})); // -> ['1.1', '1.2']

console.log(list.getChildrenIds({ id: "1", filtered: true })); // -> ['1.1', '1.1.1']
console.log(list.getChildrenIds({ id: "1", filtered: true, tree: false })); // -> ['1.1']
console.log(list.getChildrenIds({ id: "1", filtered: true, hideCompleted: true })); // -> ['1.1']
~~~

**변경 로그:** `hideCompleted` 매개변수가 v1.1에서 추가되었습니다

**관련 문서:** [작업 객체/Id](guides/task_object.md)
