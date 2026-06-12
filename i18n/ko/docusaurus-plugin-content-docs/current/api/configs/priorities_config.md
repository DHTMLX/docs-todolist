---
sidebar_label: priorities
title: priorities Config
description: DHTMLX JavaScript To Do List 라이브러리 문서에서 priorities config에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 참고하고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX To Do List의 무료 30일 평가판도 다운로드할 수 있습니다.
---

# priorities

### 설명 {#description}

@short: 선택 사항. 우선순위 데이터를 포함하는 객체 배열을 지정합니다

### 사용법 {#usage}

~~~js
priorities?: [
    {
        id: number,
        label: string,
        hotkey?: string,
        color?: string,
    },
    { ... } // more priorities items
];
~~~

### 파라미터 {#parameters}

`priorities` 속성은 우선순위 객체 배열을 나타냅니다. 각 객체는 다음 파라미터를 포함합니다:

- `id` - (필수) 우선순위 ID
- `label` - (필수) 우선순위 레이블
- `hotkey` - (선택 사항) 우선순위를 적용하기 위한 사용자 정의 키보드 단축키 이름. 사용자 정의 단축키 조합을 정의하려면 아래 예제와 같이 사용자 정의 이벤트를 처리해야 합니다
- `color` - (선택 사항) 우선순위 색상

:::info
`color` 파라미터가 지정되지 않으면 위젯은 다음 기본 색상 중 하나를 적용합니다:

`"#ff5252" "#ffc975" "#0ab169" "#607D8B" "#00C7B5"`

`"#03A9F4" "#9575CD" "#F06292" "#FF9800"`
:::

### 기본 config {#default-config}

~~~jsx {}
const priorities: [
    {
        id: 1,
        label: "High",
        color: "#ff5252",
        hotkey: "Alt+1"
    },
    {
        id: 2,
        label: "Medium",
        color: "#ffc975",
        hotkey: "Alt+2"
    },
    {
        id: 3,
        label: "Low",
        color: "#0ab169",
        hotkey: "Alt+3"
    },
];
~~~

### 예제 {#example}

~~~js {7-28,34,37-47}
const { ToDo } = todo;

const tasks = [ ... ];
const users = [ ... ];
const projects = [ ... ];

const priorities = [
    {
        id: 1,
        label: "Critical",
        color: "#f33",
    },
    {
        id: 2,
        label: "Major",
        color: "rgba(255, 225, 0, 1)",
    },
    {
        id: 3,
        label: "Normal",
        color: "hsla(170, 100%, 40%, 1)",
    },
    {
        id: 4,
        label: "Minor",
        hotkey: "Alt+M", // "Alt+M" 조합을 정의하기 위해 "keydown" 이벤트를 처리합니다
    },
];

const list = new ToDo ("#root", {
    tasks,
    users,
    projects,
    priorities
});

// 단축키 "Alt+M"에 대한 사용자 정의 이벤트 핸들러
document.addEventListener("keydown", event => {
    if (event.altKey && event.key.toLocaleLowerCase() === "m") {
        list.eachSelected(id => {
            list.updateTask({
                id,
                task: { priority: 4 }
            });
        });
    }
});
~~~

**관련 문서**:
- [데이터 로드 및 저장](guides/loading_data.md)

**관련 예제**: [To do list. 우선순위 설정을 위한 사용자 정의 단축키](https://snippet.dhtmlx.com/5cymicwt?tag=todolist)
