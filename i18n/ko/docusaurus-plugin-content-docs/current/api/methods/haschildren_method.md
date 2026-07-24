---
sidebar_label: hasChildren()
title: hasChildren 메서드
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 hasChildren 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 무료 30일 평가판을 다운로드하실 수 있습니다.
---

# hasChildren()

### 설명 {#description}

@short: 지정한 작업에 하위 작업이 있는지 확인합니다


### 사용법 {#usage}

~~~js
hasChildren({
    id: string | number,
    filtered?: boolean, // false by default
    hideCompleted?: boolean // false by default
}): boolean;
~~~

### 매개변수 {#parameters}

- `id` - (필수) 작업의 ID
- `filtered` - (선택) `false`이면 필터링된 하위 작업도 결과에 포함되고, 그렇지 않으면 결과에서 제외됩니다
- `hideCompleted` - (선택) `false`이면 완료된 작업도 결과에 포함되고, 그렇지 않으면 결과에서 제외됩니다

:::tip
`filtered` 매개변수는 필터링이 적용된 경우에 사용됩니다
:::

### 반환값 {#returns}

이 메서드는 작업에 하위 항목이 있으면 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다

### 예제 {#example}

~~~js {17,19,22,25-26,28}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1 #tag3" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1 #tag1", parent: "1.1", checked: true },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 작업에 하위 항목이 있는지 확인 (필터링 전)
console.log(list.hasChildren({ id: "1.1" })); // -> true

console.log(list.hasChildren({ id: "1.1", hideCompleted: true})); // -> false

// 작업 필터링
list.setFilter({ match: "#tag3", highlight: true });

// 작업에 하위 항목이 있는지 확인 (필터링 후)
console.log(list.hasChildren({ id: "1.1" })); // -> true
console.log(list.hasChildren({ id: "1.1", hideCompleted: true })); // -> false

console.log(list.hasChildren({ id: "1.1", filtered: true })); // -> false
~~~

**변경 로그:** `hideCompleted` 매개변수가 v1.1에서 추가되었습니다

**관련 문서:** [작업 객체/Id](guides/task_object.md)
