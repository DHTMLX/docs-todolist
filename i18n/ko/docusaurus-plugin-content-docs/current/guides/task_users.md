---
sidebar_label: 작업 담당자
title: 작업 담당자
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 작업 담당자에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List 무료 30일 평가판을 다운로드하실 수도 있습니다.
---

# 작업 담당자

한 명 또는 여러 명에게 작업을 위임합니다.

## 작업 담당자 구성 {#configure-task-assignees}

[`users`](api/configs/users_config.md) 구성 속성을 통해 담당자 목록을 지정합니다. 아래 예제는 네 명의 사용자를 정의합니다.

~~~js
const users = [
    { id: "user_1", label: "Don Smith", avatar: "../avatar_61.jpg"},
    { id: "user_2", label: "Nadia Chasey", avatar: "../avatar_63.jpg" },
    { id: "user_3", label: "Mike Young", avatar: "../avatar_03.jpg" },
    { id: "user_4", label: "Elvira Webb", avatar: "../avatar_33.jpg" }
];

const list = new ToDo("#root", { users });
~~~

## 초기화 시 담당자 설정 {#set-assignees-on-initialization}

초기화 시 작업에 담당자를 지정하려면 관련 [`task`](api/configs/tasks_config.md) 객체의 `assigned` 매개변수에 담당자 id를 전달합니다. 아래 코드는 네 명의 사용자를 작업에 할당합니다.

~~~js {11}
const users = [
    { id: "user_1", label: "Don Smith", avatar: "../avatar_61.jpg"},
    ...
];

const tasks = [
    {
        id: "2",
        project: "introduction",
        text: "You can assign task performers using the menu.",
        assigned: [ "user_1", "user_2", "user_3", "user_4" ],
    }
];

const list = new ToDo("#root", {
    tasks,
    users
});
~~~

할당된 사람들은 작업 오른쪽에 표시됩니다.

![users](../assets/users.png)

작업에 할당된 사람 목록을 보려면 아바타를 클릭합니다. 목록을 닫으려면 목록 외부를 클릭합니다.

## 작업 담당자 변경 {#change-task-assignees}

초기화 후 다음 두 가지 방법 중 하나로 작업 담당자를 재지정하거나 제거할 수 있습니다.

- 작업 메뉴의 **Assign to** 옵션 사용
- [`assignUser()`](api/methods/assignuser_method.md) 및 [`unassignUser()`](api/methods/unassignuser_method.md) 메서드 사용

아래 예제는 한 작업에 사용자를 할당하고 다른 작업에서 사용자를 제거합니다.

~~~js
// assign a person to the task
list.assignUser({
    id: "3",
    userId: "user_1"
});

// unassign a person from the task
list.unassignUser({
    id: "2",
    userId: "user_1"
});
~~~
