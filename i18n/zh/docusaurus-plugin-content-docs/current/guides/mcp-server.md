---
sidebar_label: DHTMLX MCP server
title: 面向任务与 REST 同步的 DHTMLX To Do List MCP 集成
description: 借助 MCP 服务器，DHTMLX To Do List 中的任务、子任务、项目、优先级与 REST 同步信息始终保持最新，可供 AI 助手随时查阅。
---

# DHTMLX To Do List MCP 服务器：任务、项目与 REST 同步

DHTMLX To Do List 表面上看只是一份简单的清单，实际上却集成了[嵌套子任务](guides/task_operations.md#adding-a-new-task)、[优先级快捷键](/#prioritizing-a-task)、[拖放排序](guides/configuration.md#drag-n-drop)、[基于话题标签的筛选](guides/inline_editing.md#hashtags)，以及一个通过 [Event Bus](api/internal/setnext_method.md) 串联的 REST 后端。要让生成的代码真正可用，就需要[复制任务](api/methods/copytask_method.md)或[将任务缩进为子任务](api/methods/indenttask_method.md)的当前方法签名、正确的事件载荷结构，以及当下确实存在的[任务字段选项](api/configs/taskshape_config.md)，而不是过时的训练记忆。

DHTMLX MCP 服务器正是为此而生：它让助手在作答之前先查阅最新的 To Do List 文档。将它指向[任务操作](guides/task_operations.md)、[多选与批量操作](guides/multiselection.md)、[REST 后端集成](guides/working_with_server.md)或[任务与项目配置](guides/configuration.md)，助手便会检索当前的 API，而不是凭猜测作答。

### MCP 端点 {#mcp-endpoint}

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

:::note
DHTMLX MCP 服务器覆盖所有主要的 DHTMLX 产品，而不仅仅是 DHTMLX To Do List。无论您使用哪个 DHTMLX 组件进行开发，同一个端点和相同的配置说明都同样适用。
:::

## To Do List API 的 MCP 服务器支持范围 {#mcp-server-support-across-the-to-do-list-api}

服务器的索引覆盖了完整的 DHTMLX To Do List 文档，其中包括：

- 查询 [To Do List 方法](api/overview/methods_overview.md)、[事件](api/overview/events_overview.md)、[属性](api/overview/configs_overview.md)以及对应的 [Toolbar API](category/toolbar-properties.md) 的当前接口。
- 针对特定的任务、项目和用户集合，生成可直接运行的[初始化](guides/initialization.md)与[配置](guides/configuration.md)代码。
- 管理任务层级与批量操作，例如[添加、移动和删除任务](guides/task_operations.md)、更改[缩进级别](guides/task_operations.md#changing-the-indent-level-of-a-task)，以及对[多个选中任务](guides/multiselection.md)执行操作。
- 操作[项目](guides/project_operations.md)与[项目对象](guides/project_object_operations.md)，包括切换活动项目以及在项目之间移动任务。
- 指定[任务负责人](guides/task_users.md)、设置截止日期以及配置[优先级](api/configs/priorities_config.md)。
- 将 `RestDataProvider` 连接到 [REST 后端](guides/working_with_server.md)，包括多用户模式以及通过 `api.setNext()` 设定的 Event Bus 顺序。
- 配置[排序与筛选](guides/sorting_filtering_tasks.md)、[隐藏已完成任务](guides/hide_completed_tasks.md)以及[只读模式](guides/readonly_mode.md)。
- 处理任务和项目的[内联编辑](guides/inline_editing.md)与[键盘快捷键](guides/keyboard_navigation.md)。
- 了解[本地化](guides/localization.md)、[样式定制](guides/stylization.md)，以及与 [React](guides/integration_with_react.md)、[Vue](guides/integration_with_vue.md)、[Angular](guides/integration_with_angular.md) 和 [Svelte](guides/integration_with_svelte.md) 的集成。

## To Do List 问题在 MCP 服务器中的流转过程 {#how-a-to-do-list-question-moves-through-the-mcp-server}

向 DHTMLX MCP 服务器提出任何与 To Do List 相关的问题时，请求都会经由 Model Context Protocol (MCP) 进入一条 Retrieval-Augmented Generation (RAG) 流水线。随后由两种工作流之一接手：*Search* 返回匹配的参考页面，供助手据此撰写答案；而 *Inference* 则直接阅读这些页面并给出回答。一个 To Do List 请求往往包含两项彼此独立的工作：一项需要查阅最新文档，另一项助手自己就能完成。在任何内容进入 MCP 之前，助手会先把前者剥离出来。

以提示词*"如何确保添加任务和移动任务的操作按正确的顺序到达我的服务器？"*为例，整个流程如下：

1. 助手识别出需要查阅文档的部分：如何通过 api.setNext() 将 RestDataProvider 接入 Event Bus。
2. 服务器定位到该问题所属的服务器协作文档。
3. 生成该处理程序需要输出代码，因此请求会交给 *Search*（若是范围更窄的问题，比如链中哪个事件先触发，则会交给 *Inference*）。
4. *Search* 从基于当前 To Do List 文档构建的向量索引中取回匹配的页面。
5. 这些页面作为上下文返回给助手。
6. 助手根据这些上下文组装 Event Bus 的串联代码，再凭自身知识补全与具体服务器相关的请求细节，而无需对 To Do List API 进行猜测。

正因为有了这次查阅，助手才能按照当前实际的工作方式把 RestDataProvider 接入 Event Bus。

## 配置 MCP 连接 {#setting-up-the-mcp-connection}

无论是搭建全新的 To Do List 项目，还是接入现有的 `RestDataProvider` 后端，起步方式都是一样的：把您的工具指向下面这个 URL，具体使用 CLI 命令还是 JSON 配置项，取决于该工具的要求。

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

以下各节将逐一介绍各款工具的配置方法。

### Claude Code {#claude-code}

:::info
有关 Claude Code 中 MCP 配置的完整说明，请查阅[官方文档](https://code.claude.com/docs/en/mcp)。
:::

要从命令行注册该服务器，请运行：

~~~jsx
claude mcp add --transport http dhtmlx-mcp https://docs.dhtmlx.com/mcp
~~~

手动配置同样可行，只需将以下内容添加到您的 `.mcp.json` 中：

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
Cursor 的 MCP 分步配置说明请参阅[官方文档](https://cursor.com/en-US/docs/mcp)。
:::

添加服务器的步骤如下：

1. 打开 Settings（Mac 上为 `Cmd+Shift+J`，Windows/Linux 上为 `Ctrl+Shift+J`）
2. 进入 **Tools & MCP**
3. 点击 **Add Custom MCP**
4. 粘贴以下配置：

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
Antigravity 在其[官方文档](https://antigravity.google/docs/mcp)中介绍了 MCP 服务器的集成方式。
:::

将 DHTMLX MCP 服务器接入 Google Antigravity 需要完成以下步骤：

1. 打开命令面板
2. 输入 "mcp add"
3. 选择 "HTTP"
4. 填写以下值：
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
有关从 Gemini CLI 迁移到 Antigravity CLI 的步骤，请查阅[相关指南](https://antigravity.google/docs/gcli-migration#mcp-config-formatting-changes)。
:::

要将 DHTMLX MCP 服务器连接到 Antigravity CLI，请在以下位置之一创建 `mcp_config.json`：

- 全局：`~/.gemini/config/mcp_config.json`
- 工作区：`.agents/mcp_config.json`

添加以下配置：

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "serverUrl": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

然后在终端中运行 `agy`。

### ChatGPT {#chatgpt}

:::info
ChatGPT 自身的文档完整说明了 [MCP 连接器的配置流程](https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt)。
:::

配置连接器的步骤如下：

1. 进入 **Settings** → **Apps & Connectors**
2. 点击 **Advanced settings**
3. 启用 **Developer mode**
4. 返回 **Apps & Connectors** 并点击 "Create"
5. 填写连接器的详细信息：
- Name:
~~~jsx
dhtmlx-mcp
~~~
- URL:
~~~jsx
https://docs.dhtmlx.com/mcp
~~~
- Authentication: `No authentication`
6. 点击 **Create**

创建连接器之后，ChatGPT 会在对话过程中从 MCP 服务器拉取文档。

:::info
对于高强度的编码工作流，其他支持 MCP 的工具可能更为合适。
:::

### 其他工具 {#other-tools}

大多数其他 AI 编码工具同样支持 MCP，相应设置通常位于 "Model Context Protocol" 或 "Context Sources" 之类的标签下。在那里将 `https://docs.dhtmlx.com/mcp` 添加为自定义来源即可。

## MCP 服务器如何处理您的数据 {#how-the-mcp-server-treats-your-data}

MCP 服务器是一项托管服务：不会在您的机器上运行任何程序，不会读取您环境中的任何文件，也不会存储任何个人用户数据。

出于调试和服务改进的目的，发送到服务器的查询可能会被记录。

如果贵组织需要更严格的保障，请写信至 `info@dhtmlx.com` 咨询关闭查询日志记录的商业部署方案。

## 可直接复制并调整的 To Do List 提示词 {#to-do-list-prompts-to-copy-and-adapt}

下面每一组都针对一类操作。复制其中的示例，并根据您自己的数据调整措辞即可。

**任务与层级**

~~~
How do I add a subtask under a specific task in DHTMLX To Do List?
~~~
~~~
How do I make a task become a subtask of the task directly above it? Use the docs.
~~~
~~~
How do I copy a task along with its subtasks and paste it into a different project?
~~~

**项目**

~~~
How do I switch to a different active project and move a task into it?
~~~
~~~
What happens to a project's tasks when I delete the project in DHTMLX To Do List?
~~~

**选择与批量操作**

~~~
How do I select several tasks and mark them all as complete at once in DHTMLX To Do List?
~~~
~~~
How do I delete all currently selected tasks at once? Use the docs.
~~~

**服务器集成**

~~~
How do I connect DHTMLX To Do List to my Node.js backend and load tasks on initialization?
~~~
~~~
How do I set up multiuser mode so task changes sync across clients in real time?
~~~

## 让 To Do List 提示词更精准 {#making-to-do-list-prompts-more-precise}

- **写明具体的方法名。** DHTMLX To Do List 提供了若干组名称相近的方法（`checkTask()`/`uncheckTask()`、`indentTask()`/`unindentTask()`、`hideCompletedTasks()`/`showCompletedTasks()`）。写明方法名，助手才能检索到正确的参考页面，而不是凭猜测填写参数。
- **说明操作对象是任务、项目还是用户。** 许多方法接收结构相似的、基于 id 的对象（例如 `getTask()` 与 `getProject()`）。指明操作对象可以把检索范围收窄到 API 中正确的部分。
- **描述数据结构。** 相比笼统的"一个任务"，诸如"带子任务和截止日期的任务"或"分配给多名用户的任务"这类提示词能检索到更精确的文档。在准备待加载的数据或配置 `taskShape` 时，这一点尤为重要。
- **在提示词中加上 "Use the docs"。** 这句话会提示助手触发一次 MCP 查询，而不是仅凭训练数据作答。它在处理事件载荷（例如 `open-menu` 或 `edit-item`）和 REST 后端接线时最为有用，因为这两者都会随版本发生变化。
