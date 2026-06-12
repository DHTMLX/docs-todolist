---
sidebar_label: taskShape
title: taskShape Config
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 taskShape config에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해 보세요. DHTMLX To Do List 30일 무료 평가판을 다운로드하세요.
---

# taskShape

### 설명 {#description}

@short: 선택 사항. 작업 외관 설정을 담은 객체

### 사용법 {#usage}

~~~js
taskShape?: {
    counter?: {
        type: "percentage" | "number", 
    },
    date?: {
        format: string,
        validate: boolean
    },
    completed?: {
        behavior: "manual" | "auto",
        taskHide: boolean
    },
    priority?: {
        cover: boolean,
        label: boolean
    }
};
~~~

### 기본 설정 {#default-config}

~~~js
taskShape: {
    counter: {
        type: "number", 
    },
    date: {
        format: "%d %M %Y",
        validate: true 
    },
    completed: {
        behavior: "auto",
        taskHide: false
    },
    priority: {
        cover: true,
        label: true
    }
}
~~~

### 파라미터 {#parameters}

작업 외관을 구성하려면 `taskShape` 객체에 다음 파라미터를 지정할 수 있습니다:

- `counter` - (선택 사항) 완료된 1단계 하위 작업 카운터 설정 객체:
    - `type` - (필수) 카운터 표시 유형. 두 가지 유형이 있습니다:
        - *"number"* - 카운터 값이 완료된 하위 작업 수와 전체 하위 작업 수의 비율로 표시됩니다
        - *"percentage"* - 카운터 값이 백분율로 표시됩니다
- `date` - (선택 사항) 날짜 설정 객체:
    - `format` - (필수) 날짜 표시 형식을 정의합니다. 기본값은 "%d %M %Y"입니다. 사용 가능한 전체 문자 목록은 [아래](#list-of-characters)를 참조하세요
    - `validate` - (필수) [작업 객체](api/configs/tasks_config.md)의 `due_date` 속성 유효성 검사 여부를 정의합니다
- `completed` - (선택 사항) 완료된 작업의 표시 및 관리 설정 객체. 하나의 파라미터를 가집니다:
    - `behavior` - (필수) 부모 및 자식 작업을 완료/미완료로 표시할 때의 동작을 설정합니다. 두 가지 옵션이 있습니다:
        - *"auto"* - `"auto"` 모드를 활성화합니다:
            - 모든 자식 작업을 완료로 표시하면 부모 작업이 자동으로 완료로 표시됩니다
            - 부모 작업을 완료로 표시하면 모든 자식 작업이 자동으로 완료로 표시됩니다
            - 완료된 작업의 자식 중 하나를 미완료로 표시하면 해당 작업이 자동으로 미완료로 표시됩니다
            - 부모 작업을 미완료로 표시하면 모든 자식 작업이 자동으로 미완료가 됩니다
        - *"manual"* - `"manual"` 모드를 활성화합니다. 각 작업(자식 작업 또는 부모 작업)을 수동으로 완료 표시해야 합니다
    - `taskHide` - (필수) 목록에서 완료된 작업을 숨기는 모드를 활성화/비활성화합니다
- `priority` - (선택 사항) - 우선순위 외관을 정의하는 설정 객체. 다음 파라미터를 지정할 수 있습니다:
    - `cover` - (필수) - 우선순위 커버 표시 여부를 지정합니다
    - `label` - (필수) - 우선순위 레이블 표시 여부를 지정합니다

### 예제 {#example}

~~~js {10-26}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, priorities } = getData();

// To Do List 생성
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    priorities,
    taskShape: {
        counter: {
            type: "percentage",
        },
        date: {
            format: "%d %m %Y",
            validate: false,
        },
        completed: {
            behavior: "manual",
            taskHide: true,
        },
        priority: {
            cover: true,
            label: false,
        }
    }
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

### 문자 목록 {#list-of-characters}

DHTMLX To Do List는 날짜 형식 설정에 다음 문자를 사용합니다:

| 문자 | 설명                                        |
|-----------|---------------------------------------------------|
| `%d`    | 앞에 0이 붙는 숫자로 표시된 일, 01..31         |
| `%j`    | 숫자로 표시된 일, 1..31                            |
| `%D`    | 요일 약식 이름, Su Mo Tu...                |
| `%l`    | 요일 전체 이름, Sunday Monday Tuesday...    |
| `%m`    | 앞에 0이 붙는 숫자로 표시된 월, 01..12       |
| `%n`    | 숫자로 표시된 월, 1..12                          |
| `%M`    | 월 약식 이름, Jan Feb Mar...           |
| `%F`    | 월 전체 이름, January February March... |
| `%y`    | 2자리 숫자로 표시된 연도                        |
| `%Y`    | 4자리 숫자로 표시된 연도                        |

:::tip
날짜 레이블을 원하는 언어로 표시하는 방법은 [**현지화**](guides/localization.md) 문서를 참조하세요
:::

**변경 이력:**

- `priority` 파라미터가 v1.2에서 추가됨

**관련 문서:**

- [구성](guides/configuration.md#tasks)
- [완료된 작업 표시/숨기기](guides/hide_completed_tasks.md)

**관련 샘플:**
- [To do list. 하위 작업 카운터 및 날짜 형식](https://snippet.dhtmlx.com/magidhw8?tag=todolist)
- [To do list. 부모 작업 완료 표시 두 가지 방식](https://snippet.dhtmlx.com/5892fcr2?tag=todolist)
- [To do list. 우선순위 설정을 위한 사용자 정의 단축키](https://snippet.dhtmlx.com/5cymicwt?tag=todolist)
