---
sidebar_label: DHTMLX MCP server
title: DHTMLX To Do List MCP server keeps AI answers accurate
description: Tasks, subtasks, projects, priorities, and REST sync in DHTMLX To Do List all stay current for AI assistants through the MCP server.
---

# DHTMLX To Do List MCP server: docs that stay current for AI

DHTMLX To Do List looks like a simple checklist on the surface, but it packs in [nested subtasks](guides/task_operations.md#adding-a-new-task), [priority hotkeys](/#prioritizing-a-task), [drag-and-drop reordering](guides/configuration.md#drag-n-drop), [hashtag-based filtering](guides/inline_editing.md#hashtags), and a REST backend that chains through the [event bus](api/internal/setnext_method.md). Skip the MCP server and an assistant falls back on stale training data: it invents method signatures for [`copyTask()`](api/methods/copytask_method.md) or [`indentTask()`](api/methods/indenttask_method.md) that don't match the real API, misplaces event payloads, or reaches for [`taskShape`](api/configs/taskshape_config.md) options that no longer exist.

That's where the DHTMLX MCP server helps: it lets the assistant check the live To Do List documentation before it answers. Point it at [task operations](guides/task_operations.md), [multiselection and bulk actions](guides/multiselection.md), the [REST backend integration](guides/working_with_server.md), or [task and project configuration](guides/configuration.md), and the assistant retrieves the current API surface instead of guessing.

**MCP endpoint**

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

:::note
The DHTMLX MCP server covers all major DHTMLX products, not only DHTMLX To Do List. The same endpoint and configuration instructions work regardless of which DHTMLX component you are building with.
:::

## MCP server support across the To Do List API

The server's index covers the full DHTMLX To Do List documentation, including:

- Looking up the current API for [To Do List methods](api/overview/methods_overview.md), [events](api/overview/events_overview.md), [properties](api/overview/configs_overview.md), and the matching [Toolbar API](category/toolbar-properties.md).
- Generating ready-to-run [initialization](guides/initialization.md) and [configuration](guides/configuration.md) code for a specific set of tasks, projects, and users.
- Managing task hierarchy and bulk actions, such as [adding, moving, and deleting tasks](guides/task_operations.md), changing the [indent level](guides/task_operations.md#changing-the-indent-level-of-a-task), and running operations over [multiple selected tasks](guides/multiselection.md).
- Working with [projects](guides/project_operations.md) and the [project object](guides/project_object_operations.md), including switching the active project and moving tasks between projects.
- Assigning [task performers](guides/task_users.md), setting due dates, and configuring [priorities](api/configs/priorities_config.md).
- Connecting `RestDataProvider` to a [REST backend](guides/working_with_server.md), including the multiuser mode and the event bus order set through `api.setNext()`.
- Configuring [sorting and filtering](guides/sorting_filtering_tasks.md), [hiding completed tasks](guides/hide_completed_tasks.md), and [read-only mode](guides/readonly_mode.md).
- Handling [inline editing](guides/inline_editing.md) and [keyboard shortcuts](guides/keyboard_navigation.md) for tasks and projects.
- Exploring [localization](guides/localization.md), [stylization](guides/stylization.md), and integration with [React](guides/integration_with_react.md), [Vue](guides/integration_with_vue.md), [Angular](guides/integration_with_angular.md), and [Svelte](guides/integration_with_svelte.md).

## Two ways the MCP server can respond

The assistant chooses between two workflows depending on what's being asked. *Search* returns the matching To Do List reference pages so the assistant can compose the answer; *Inference* reads those pages itself and returns the finished answer. Both run on a Retrieval-Augmented Generation (RAG) index built from the documentation, reached through the Model Context Protocol (MCP).

For example, when you ask *"How do I chain RestDataProvider into the event bus with api.setNext() so add-task and move-task operations reach my server?"*, the assistant sends the prompt via the MCP endpoint. *Search* matches it against the working-with-server documentation, retrieves the relevant reference pages, and returns them as context; the assistant then produces code that matches the API's current state instead of an old training snapshot. *Inference* suits a narrower question with one correct answer, such as confirming which event fires first in the chain, and returns that answer directly instead of the source pages.

## Setting up the MCP connection

Setting up a fresh To Do List project or hooking into an existing `RestDataProvider` backend both start the same way: register the MCP endpoint with your tool, via a CLI command or a JSON configuration entry, depending on what that tool expects.

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

Below are setup instructions for commonly used tools.

### Claude Code

:::info
For the complete rundown of Claude Code's MCP setup, check the [official documentation](https://code.claude.com/docs/en/mcp).
:::

To register the server from the command line, run:

~~~jsx
claude mcp add --transport http dhtmlx-mcp https://docs.dhtmlx.com/mcp
~~~

For manual setup, add the following to your `mcp.json`:

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

### Cursor

:::info
Step-by-step MCP configuration for Cursor lives in the [official documentation](https://cursor.com/en-US/docs/mcp).
:::

Steps to add the server:

1. Open Settings (`Cmd+Shift+J` on Mac, `Ctrl+Shift+J` on Windows/Linux)
2. Go to **Tools & MCP**
3. Click **Add Custom MCP**
4. Paste the following config:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Google Antigravity

#### Antigravity 2.0

:::info
Antigravity documents its MCP server integration in the [official documentation](https://antigravity.google/docs/mcp).
:::

These are the steps to complete for connecting DHTMLX MCP server with Google Antigravity:

1. Open the command palette
2. Type "mcp add"
3. Select "HTTP"
4. Provide the following values:
- Name:
~~~jsx
dhtmlx-mcp
~~~
- URL:
~~~jsx
https://docs.dhtmlx.com/mcp
~~~

#### Antigravity CLI

:::info
For Gemini CLI to Antigravity CLI migration steps, check the [related guide](https://antigravity.google/docs/gcli-migration#mcp-config-formatting-changes).
:::

To connect the DHTMLX MCP server to Antigravity CLI, create `mcp_config.json` in one of these locations:

- Global: `~/.gemini/config/mcp_config.json`
- Workspace: `.agents/mcp_config.json`

Add the following configuration:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "serverUrl": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

Then run `agy` in the terminal.

### ChatGPT

:::info
ChatGPT's own documentation lays out the complete [MCP connector setup process](https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt).
:::

Steps to configure the connector:

1. Go to **Settings** → **Apps & Connectors**
2. Click **Advanced settings**
3. Enable **Developer mode**
4. Return to **Apps & Connectors** and click "Create"
5. Fill in the connector details:
- Name:
~~~jsx
dhtmlx-mcp
~~~
- URL:
~~~jsx
https://docs.dhtmlx.com/mcp
~~~
- Authentication: `No authentication`
6. Click **Create**

After you create the connector, ChatGPT pulls documentation from the MCP server during conversations.

:::info
For intensive coding workflows, other MCP-aware tools may be a better fit.
:::

### Other tools

Most other AI coding tools support MCP too, typically under a settings label like "Model Context Protocol" or "Context Sources." Add `https://docs.dhtmlx.com/mcp` there as a custom source.

## How the MCP server treats your data

The MCP server is a hosted service: nothing runs on your machine, no files from your environment are read, and no personal user data is stored.

For debugging and service improvement, queries sent to the server may be logged.

If your organization needs stricter guarantees, ask about a commercial deployment with query logging turned off by writing to `info@dhtmlx.com`.

## To Do List prompts to copy and adapt

These prompts work best when they name a To Do List object directly, a task, a project, a user, rather than describing it in the abstract. Each group below targets one kind of operation; adapt the wording to your own data.

**Tasks and hierarchy**

~~~
How do I add a subtask under a specific task using addTask() in DHTMLX To Do List?
~~~
~~~
How do I make a task become a subtask of the task directly above it? Use the docs.
~~~
~~~
How do I copy a task along with its subtasks and paste it into a different project?
~~~

**Projects**

~~~
How do I switch to a different active project and move a task into it?
~~~
~~~
What happens to a project's tasks when I delete it with deleteProject() in DHTMLX To Do List?
~~~

**Selection and bulk operations**

~~~
How do I select several tasks and mark them all as complete at once in DHTMLX To Do List?
~~~
~~~
How do I use eachSelected() to delete all currently selected tasks? Use the docs.
~~~

**Server integration**

~~~
How do I connect RestDataProvider to my Node.js backend and load tasks on initialization?
~~~
~~~
How do I set up the multiuser mode with RemoteEvents so task changes sync across clients in real time?
~~~

## Making To Do List prompts more precise

- **Name the exact method.** DHTMLX To Do List exposes several similarly named method pairs (`checkTask()`/`uncheckTask()`, `indentTask()`/`unindentTask()`, `hideCompletedTasks()`/`showCompletedTasks()`). State the method name so the assistant retrieves the right reference instead of guessing the parameters.
- **Say whether the target is a task, a project, or a user.** Many methods take a similar id-based object (for example, `getTask()` vs. `getProject()`). Naming the target narrows retrieval to the correct part of the API.
- **Describe the data shape.** Prompts like "a task with subtasks and a due date" or "a task assigned to several users" retrieve more precise documentation than a generic "a task". This matters most when preparing data to load or configuring `taskShape`.
- **Add "Use the docs"** to your prompt. This phrase signals that the assistant should trigger an MCP lookup instead of answering from training data alone. It helps most with event payloads (for example, `open-menu` or `edit-item`) and REST backend wiring, both of which change between versions.
