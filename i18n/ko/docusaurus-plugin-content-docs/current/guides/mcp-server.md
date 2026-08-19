---
sidebar_label: DHTMLX MCP server
title: 작업 관리와 REST 동기화를 위한 DHTMLX To Do List MCP 통합
description: DHTMLX To Do List의 작업, 하위 작업, 프로젝트, 우선순위, REST 동기화 정보가 MCP 서버를 통해 AI 어시스턴트에게 항상 최신 상태로 제공됩니다.
---

# DHTMLX To Do List MCP 서버: 작업, 프로젝트, REST 동기화

DHTMLX To Do List는 겉보기에는 단순한 체크리스트처럼 보이지만, [중첩된 하위 작업](guides/task_operations.md#adding-a-new-task), [우선순위 단축키](/#prioritizing-a-task), [드래그 앤 드롭 순서 변경](guides/configuration.md#drag-n-drop), [해시태그 기반 필터링](guides/inline_editing.md#hashtags), 그리고 [Event Bus](api/internal/setnext_method.md)를 통해 연결되는 REST 백엔드까지 담고 있습니다. 생성된 코드가 실제로 동작하려면 [작업 복사](api/methods/copytask_method.md)나 [작업을 하위 작업으로 들여쓰기](api/methods/indenttask_method.md)에 대한 현재 시그니처, 올바른 이벤트 페이로드 구조, 그리고 오래된 학습 기억이 아니라 현시점에 실제로 존재하는 [작업 필드 옵션](api/configs/taskshape_config.md)이 필요합니다.

바로 이 지점에서 DHTMLX MCP 서버가 도움이 됩니다. MCP 서버는 어시스턴트가 답변하기 전에 최신 To Do List 문서를 확인하도록 해 줍니다. [작업 조작](guides/task_operations.md), [다중 선택 및 일괄 작업](guides/multiselection.md), [REST 백엔드 연동](guides/working_with_server.md), [작업 및 프로젝트 구성](guides/configuration.md)을 가리키도록 지정하면, 어시스턴트는 추측하는 대신 현재 제공되는 API를 조회합니다.

### MCP 엔드포인트 {#mcp-endpoint}

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

:::note
DHTMLX MCP 서버는 DHTMLX To Do List뿐만 아니라 모든 주요 DHTMLX 제품을 다룹니다. 어떤 DHTMLX 컴포넌트로 개발하든 동일한 엔드포인트와 구성 방법을 그대로 사용할 수 있습니다.
:::

## To Do List API 전반에 대한 MCP 서버 지원 {#mcp-server-support-across-the-to-do-list-api}

서버의 인덱스는 DHTMLX To Do List 문서 전체를 다루며, 다음 내용을 포함합니다:

- [To Do List 메서드](api/overview/methods_overview.md), [이벤트](api/overview/events_overview.md), [속성](api/overview/configs_overview.md), 그리고 이에 대응하는 [Toolbar API](category/toolbar-properties.md)의 현재 API를 조회합니다.
- 특정 작업, 프로젝트, 사용자 집합에 맞춰 바로 실행할 수 있는 [초기화](guides/initialization.md) 및 [구성](guides/configuration.md) 코드를 생성합니다.
- [작업 추가, 이동, 삭제](guides/task_operations.md), [들여쓰기 수준](guides/task_operations.md#changing-the-indent-level-of-a-task) 변경, [여러 선택된 작업](guides/multiselection.md)에 대한 일괄 실행 등 작업 계층 구조와 일괄 작업을 관리합니다.
- 활성 프로젝트 전환과 프로젝트 간 작업 이동을 포함하여 [프로젝트](guides/project_operations.md) 및 [프로젝트 객체](guides/project_object_operations.md)를 다룹니다.
- [작업 담당자](guides/task_users.md)를 지정하고, 마감일을 설정하며, [우선순위](api/configs/priorities_config.md)를 구성합니다.
- 멀티유저 모드와 `api.setNext()`로 설정하는 Event Bus 순서를 포함하여 `RestDataProvider`를 [REST 백엔드](guides/working_with_server.md)에 연결합니다.
- [정렬 및 필터링](guides/sorting_filtering_tasks.md), [완료된 작업 숨기기](guides/hide_completed_tasks.md), [읽기 전용 모드](guides/readonly_mode.md)를 구성합니다.
- 작업과 프로젝트의 [인라인 편집](guides/inline_editing.md)과 [키보드 단축키](guides/keyboard_navigation.md)를 처리합니다.
- [로컬라이제이션](guides/localization.md), [스타일 지정](guides/stylization.md), 그리고 [React](guides/integration_with_react.md), [Vue](guides/integration_with_vue.md), [Angular](guides/integration_with_angular.md), [Svelte](guides/integration_with_svelte.md)와의 통합을 살펴봅니다.

## To Do List 질문이 MCP 서버를 거치는 과정 {#how-a-to-do-list-question-moves-through-the-mcp-server}

DHTMLX MCP 서버에 To Do List에 관해 무엇이든 질문하면, 그 요청은 Model Context Protocol (MCP) 위에서 동작하는 Retrieval-Augmented Generation (RAG) 파이프라인을 거칩니다. 그다음부터는 두 가지 워크플로 중 하나가 요청을 처리합니다. *Search*는 어시스턴트가 답변을 작성할 수 있도록 일치하는 레퍼런스 페이지를 돌려주고, *Inference*는 동일한 페이지를 읽고 직접 답변합니다. To Do List 요청에는 서로 다른 두 가지 작업이 함께 묶여 있는 경우가 많습니다. 하나는 최신 문서가 필요한 작업이고, 다른 하나는 어시스턴트가 이미 스스로 처리할 수 있는 작업입니다. 어시스턴트는 무엇이든 MCP에 도달하기 전에 첫 번째 작업을 먼저 분리해 냅니다.

다음은 *"add-task와 move-task 작업이 올바른 순서로 서버에 전달되도록 하려면 어떻게 해야 하나요?"* 라는 프롬프트가 처리되는 과정입니다:

1. 어시스턴트가 문서가 필요한 작업을 식별합니다. api.setNext()로 RestDataProvider를 Event Bus에 연결하는 방법입니다.
2. 서버가 그 내용이 속한 서버 연동 문서를 정확히 찾아냅니다.
3. 이 핸들러를 생성하려면 코드가 필요하므로 요청은 *Search*로 전달됩니다 (체인에서 어떤 이벤트가 먼저 발생하는지와 같이 더 좁은 질문이라면 대신 *Inference*로 전달됩니다).
4. *Search*는 최신 To Do List 문서로 구축된 벡터 인덱스에서 일치하는 페이지를 가져옵니다.
5. 가져온 페이지는 컨텍스트로서 어시스턴트에게 전달됩니다.
6. 어시스턴트는 그 컨텍스트를 바탕으로 Event Bus 체이닝 코드를 구성한 다음, To Do List API를 추측하는 대신 서버에 특화된 요청 세부 사항을 자체 지식으로 채웁니다.

이러한 조회 덕분에 어시스턴트는 현재 실제로 동작하는 방식 그대로 RestDataProvider를 Event Bus에 연결합니다.

## MCP 연결 설정하기 {#setting-up-the-mcp-connection}

새 To Do List 프로젝트를 설정하는 경우와 기존 `RestDataProvider` 백엔드에 연결하는 경우 모두 시작 방법은 동일합니다. 도구가 요구하는 방식에 따라 CLI 명령이나 JSON 구성 항목을 사용하여 아래 URL을 도구에 지정하면 됩니다.

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

다음 섹션에서는 도구별 설정 방법을 하나씩 설명합니다.

### Claude Code {#claude-code}

:::info
Claude Code의 MCP 설정에 대한 전체 설명은 [공식 문서](https://code.claude.com/docs/en/mcp)를 참조하세요.
:::

명령줄에서 서버를 등록하려면 다음을 실행하세요:

~~~jsx
claude mcp add --transport http dhtmlx-mcp https://docs.dhtmlx.com/mcp
~~~

수동 설정도 가능합니다. `.mcp.json` 파일에 다음을 추가하기만 하면 됩니다:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "type": "http",
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Cursor {#cursor}

:::info
Cursor의 단계별 MCP 구성 방법은 [공식 문서](https://cursor.com/en-US/docs/mcp)에 나와 있습니다.
:::

서버를 추가하는 단계는 다음과 같습니다:

1. Settings를 엽니다 (Mac에서는 `Cmd+Shift+J`, Windows/Linux에서는 `Ctrl+Shift+J`)
2. **Tools & MCP**로 이동합니다
3. **Add Custom MCP**를 클릭합니다
4. 다음 구성을 붙여넣습니다:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Google Antigravity {#google-antigravity}

#### Antigravity 2.0 {#antigravity-20}

:::info
Antigravity는 MCP 서버 통합 방법을 [공식 문서](https://antigravity.google/docs/mcp)에 정리해 두었습니다.
:::

DHTMLX MCP 서버를 Google Antigravity에 연결하려면 다음 단계를 수행합니다:

1. 명령 팔레트를 엽니다
2. "mcp add"를 입력합니다
3. "HTTP"를 선택합니다
4. 다음 값을 입력합니다:
- Name:
~~~jsx
dhtmlx-mcp
~~~
- URL:
~~~jsx
https://docs.dhtmlx.com/mcp
~~~

#### Antigravity CLI {#antigravity-cli}

:::info
Gemini CLI에서 Antigravity CLI로 마이그레이션하는 단계는 [관련 가이드](https://antigravity.google/docs/gcli-migration#mcp-config-formatting-changes)를 참조하세요.
:::

DHTMLX MCP 서버를 Antigravity CLI에 연결하려면 다음 위치 중 하나에 `mcp_config.json` 파일을 만드세요:

- 전역: `~/.gemini/config/mcp_config.json`
- 워크스페이스: `.agents/mcp_config.json`

다음 구성을 추가합니다:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "serverUrl": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

그런 다음 터미널에서 `agy`를 실행하세요.

### ChatGPT {#chatgpt}

:::info
ChatGPT 공식 문서에 전체 [MCP 커넥터 설정 과정](https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt)이 설명되어 있습니다.
:::

커넥터를 구성하는 단계는 다음과 같습니다:

1. **Settings** → **Apps & Connectors**로 이동합니다
2. **Advanced settings**를 클릭합니다
3. **Developer mode**를 활성화합니다
4. **Apps & Connectors**로 돌아가 "Create"를 클릭합니다
5. 커넥터 세부 정보를 입력합니다:
- Name:
~~~jsx
dhtmlx-mcp
~~~
- URL:
~~~jsx
https://docs.dhtmlx.com/mcp
~~~
- Authentication: `No authentication`
6. **Create**를 클릭합니다

커넥터를 만들고 나면 ChatGPT는 대화 중에 MCP 서버에서 문서를 가져옵니다.

:::info
집중적인 코딩 작업에는 MCP를 지원하는 다른 도구가 더 적합할 수 있습니다.
:::

### 기타 도구 {#other-tools}

대부분의 다른 AI 코딩 도구도 MCP를 지원하며, 보통 "Model Context Protocol"이나 "Context Sources" 같은 설정 항목에서 찾을 수 있습니다. 그곳에 `https://docs.dhtmlx.com/mcp`를 커스텀 소스로 추가하세요.

## MCP 서버가 데이터를 처리하는 방식 {#how-the-mcp-server-treats-your-data}

MCP 서버는 호스팅형 서비스입니다. 사용자의 컴퓨터에서는 아무것도 실행되지 않으며, 사용자 환경의 파일을 읽지 않고, 개인 사용자 데이터도 저장하지 않습니다.

디버깅과 서비스 개선을 위해 서버로 전송된 쿼리는 기록될 수 있습니다.

조직에 더 엄격한 보장이 필요하다면 `info@dhtmlx.com`으로 문의하여 쿼리 로깅이 비활성화된 상용 배포 방식을 확인하세요.

## 복사해서 응용할 수 있는 To Do List 프롬프트 {#to-do-list-prompts-to-copy-and-adapt}

아래 각 그룹은 한 가지 유형의 작업을 대상으로 합니다. 예제를 복사한 후 자신의 데이터에 맞게 문구를 수정하세요.

**작업 및 계층 구조**

~~~
How do I add a subtask under a specific task in DHTMLX To Do List?
~~~
~~~
How do I make a task become a subtask of the task directly above it? Use the docs.
~~~
~~~
How do I copy a task along with its subtasks and paste it into a different project?
~~~

**프로젝트**

~~~
How do I switch to a different active project and move a task into it?
~~~
~~~
What happens to a project's tasks when I delete the project in DHTMLX To Do List?
~~~

**선택 및 일괄 작업**

~~~
How do I select several tasks and mark them all as complete at once in DHTMLX To Do List?
~~~
~~~
How do I delete all currently selected tasks at once? Use the docs.
~~~

**서버 통합**

~~~
How do I connect DHTMLX To Do List to my Node.js backend and load tasks on initialization?
~~~
~~~
How do I set up multiuser mode so task changes sync across clients in real time?
~~~

## To Do List 프롬프트를 더 정확하게 작성하기 {#making-to-do-list-prompts-more-precise}

- **정확한 메서드 이름을 명시하세요.** DHTMLX To Do List에는 이름이 비슷한 메서드 쌍이 여러 개 있습니다 (`checkTask()`/`uncheckTask()`, `indentTask()`/`unindentTask()`, `hideCompletedTasks()`/`showCompletedTasks()`). 메서드 이름을 밝히면 어시스턴트가 매개변수를 추측하지 않고 올바른 레퍼런스를 찾아옵니다.
- **대상이 작업인지, 프로젝트인지, 사용자인지 밝히세요.** 많은 메서드가 비슷한 id 기반 객체를 인자로 받습니다 (예: `getTask()`와 `getProject()`). 대상을 명시하면 검색 범위가 API의 올바른 영역으로 좁혀집니다.
- **데이터 구조를 설명하세요.** "하위 작업과 마감일이 있는 작업"이나 "여러 사용자에게 할당된 작업"과 같은 프롬프트는 막연한 "작업"보다 더 정확한 문서를 가져옵니다. 이는 로드할 데이터를 준비하거나 `taskShape`를 구성할 때 특히 중요합니다.
- **프롬프트에 "Use the docs"를 추가하세요.** 이 문구는 어시스턴트가 학습 데이터만으로 답변하지 않고 MCP 조회를 수행해야 한다는 신호가 됩니다. 버전에 따라 달라지는 이벤트 페이로드(예: `open-menu` 또는 `edit-item`)와 REST 백엔드 연동에서 특히 큰 도움이 됩니다.
