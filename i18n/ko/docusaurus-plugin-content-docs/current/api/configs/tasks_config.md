---
sidebar_label: tasks
title: tasks Config
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 tasks config에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX To Do List 30일 무료 평가판을 다운로드하세요.
---

# tasks

### 설명 {#description}

@short: 선택 사항. 목록에 설정할 작업 객체 배열을 지정합니다

### 사용법 {#usage}

~~~js
tasks?: [
    {
        id?: string | number,
        parent?: string | number,
        project?: string | number,
        text?: string,
        checked?: boolean,
        collapsed?: boolean,
        assigned?: (string | number)[],
        due_date?: Date | string,
        creation_date?: Date | string,
        completion_date?: Date | string,
        edited_date?: Date | string,
        priority?: number | null,
        [key: string]?: any
    },
    {...} // 추가 작업 객체
];
~~~

### 파라미터 {#parameters}

`tasks` 속성은 작업 객체 배열을 나타냅니다. 각 객체는 다음 파라미터 집합을 포함합니다:

- `id` - (선택 사항) 작업의 id
- `parent` - (선택 사항) 부모 작업의 id. 루트 작업의 경우 값은 `null | undefined`입니다
- `project` - (선택 사항) 작업이 렌더링될 프로젝트의 id. 프로젝트를 초기화하려면 [projects](api/configs/projects_config.md) 속성을 사용하세요.

:::info
프로젝트가 초기화되어 있는 경우, 루트 작업이 해당 프로젝트에 표시되도록 필요한 프로젝트의 ID를 지정하세요.

루트 작업에 프로젝트 ID를 지정하지 않거나 *null* 또는 *undefined*로 설정하면, 해당 작업은 *프로젝트 없음* 섹션에 속하게 됩니다.
:::

- `text` - (선택 사항) 작업의 텍스트
- `checked` - (선택 사항) 작업을 완료로 표시합니다
- `collapsed` - (선택 사항) 작업이 초기에 축소 상태인지 여부를 정의합니다 (작업에 하위 작업이 있는 경우)
- `assigned` - (선택 사항) 작업에 배정된 사람의 ID 배열. 배정 가능한 사용자 목록을 초기화하려면 [users](api/configs/users_config.md) 속성을 사용하세요.
- `due_date` - (선택 사항) 작업을 완료해야 하는 날짜
- `creation_date` - (선택 사항) 작업 생성 날짜 (자동 생성)
- `completion_date` - (선택 사항) 작업 완료 날짜 (작업을 완료로 표시할 때 자동 생성되고, 미완료로 표시할 때 자동 삭제됨)
- `edited_date` - (선택 사항) 작업 편집 날짜 (작업 텍스트를 변경할 때 자동 생성됨)
- `priority` - (선택 사항) 작업의 우선순위. 우선순위를 설정하려면 [priorities](api/configs/priorities_config.md) 속성을 사용하세요
- `[key: string]`- (선택 사항) 사용자 정의 속성 집합

### 예제 {#example}

~~~js {3-30,42}
const { ToDo, Toolbar } = todo;

const tasks = [
    {
        id: "1",
        project: "books",
        // parent: null,
        text: "Read books",
        collapsed: false,
        due_date: new Date(),
        priority: 1
    },
    {
        id: "2",
        project: "books",
        parent: "1",
        text: "Don Quixote",
        assigned: [ "user_1" ],
        priority: 2
    },
    {
        id: "3",
        project: "books",
        parent: "1",
        text: "The Great Gatsby",
        assigned: [ "user_2" ],
        checked: true,
        priority: null
    },
];

const users = [
    { id: "user_1", label: "John" },
    { id: "user_2", label: "Kate" },
];

const projects = [
    { id: "books", label: "Books" },
];

const list = new ToDo("#root", {
    tasks,
    users,
    projects
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

**변경 이력:** `priority` 파라미터가 v1.2에서 추가됨

**관련 문서:**
- [데이터 로드 및 저장](guides/loading_data.md)
- [작업 관리](guides/task_index.md)
