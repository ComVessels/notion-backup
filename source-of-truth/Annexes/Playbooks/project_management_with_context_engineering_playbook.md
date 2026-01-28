---
title: Project Management with Context Engineering Playbook
database: Playbooks
notion_id: 24780979-7b42-80a8-91d4-dbc14f868f2b
last_updated: 2026-01-28T11:40:54.536Z
---

# Project Management with Context Engineering Playbook


# Project Management with Context Engineering Playbook


**File Name:** `Project_Management_with_Context_Engineering_Playbook_v1.1.md`**Version:** 1.1
**Date:** 2025-07-20
**Updated:** From v1.0—Content preserved verbatim with structural reformatting for RAG optimization (200-500 word chunks, XML tagging, bold keywords per Context Engineering Guide v1.1) using Aegis Knowledge Base Universal Reformatter Prompt v3.
**Status:** Active
**Owner:** Michael Bono
**Path:** `/Annexes/Playbooks/Project_Management_with_Context_Engineering_Playbook_v1.1.md`**Dependencies:** `Context_Engineering_Guide_v1.1.md`**Document Type:** playbook
**Domain:** project\_operations
**Prerequisites:** context\_engineering\_literacy, claude\_memory\_access
**Related Documents:** `/Annexes/Methodologies/Context_Engineering_Guide_v1.2.md`, `/Annexes/References/Claude_Prompting_Best_Practices_v1.2.md`**Aegis Context:** execution\_alignment
**Compliance Requirements:** memory\_persistence, structured\_logging
**AI Parse Level:** Operational


## Table of Contents

1. [Core Principle](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=247809797b4280a891d4dbc14f868f2b&pm=s#core-principle)
2. [Context-First Project Management](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=247809797b4280a891d4dbc14f868f2b&pm=s#context-first-project-management)
3. [Task Logging Structure](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=247809797b4280a891d4dbc14f868f2b&pm=s#task-logging-structure)
4. [Prompt Lifecycle](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=247809797b4280a891d4dbc14f868f2b&pm=s#prompt-lifecycle)
5. [Agent Collaboration](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=247809797b4280a891d4dbc14f868f2b&pm=s#agent-collaboration)
6. [Memory Handoff Formats](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=247809797b4280a891d4dbc14f868f2b&pm=s#memory-handoff-formats)
7. [Project Traceability](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=247809797b4280a891d4dbc14f868f2b&pm=s#project-traceability)
8. [Failover and Resilience](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=247809797b4280a891d4dbc14f868f2b&pm=s#failover-and-resilience)
9. [End of Playbook](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=247809797b4280a891d4dbc14f868f2b&pm=s#end-of-playbook)

---


## Core Principle


**Context is infrastructure.** In Claude-based workflows, managing memory is equivalent to managing state. This playbook applies context engineering principles to project workflows, ensuring continuity, accountability, and agent-friendly task delivery.


<important>


All tasks must be **designed, assigned, and logged** with context-aware formats.


</important>


<thinking>


Poor prompt quality → memory loss → execution drift → agent failure. This playbook prevents that.


</thinking>


---


## Context-First Project Management


### Structure Tasks for AI Execution


Break complex projects into **standalone memory-anchored tasks**, each with:

- Unique ID
- XML-tagged prompt
- Explicit dependencies
- Status updates in-memory
- Traceable audit history

\<code\_example>


<task>
ID: task-kyv-001


Agent: Playbook Drafter


Goal: Create KYV checklist


Context: Vessel class = SYNERGY


</task>
</code_example>


<answer>


Tasks designed this way can be resumed, handed off, and audited by any Claude-compatible agent.


</answer>


---


## Task Logging Structure


### Memory Templates for Claude Agents


| Field       | Format                           |
| ----------- | -------------------------------- |
| Task ID     | `task-[name]-[number]`           |
| Created     | ISO 8601 (UTC)                   |
| Agent       | `playbook`, `drafter`, `auditor` |
| Context     | XML `<context>` block            |
| Goal        | 1-sentence                       |
| Status      | `planned`, `started`, `complete` |
| Output Path | `/Annexes/...`                   |


\<code\_example>


<task>
ID: task-vessel-002


Status: planned


Created: 2025-08-01T11:42Z


Goal: Create SOP for vessel reporting


Agent: content-creator


Output: /Annexes/Protocols/Vessel_Reporting_SOP_v1.0.md


</task>
</code_example>


---


## Prompt Lifecycle


**Prompt integrity is essential.** Each task prompt passes through a structured lifecycle:

1. `plan`: create structured task with `<goal>`, `<context>`
2. `prompt`: draft prompt using XML tag shell
3. `store`: save in Claude memory (`Mem0`) and optionally GitHub
4. `submit`: execute task in Claude
5. `log`: Claude logs reasoning (`<thinking>`) and output (`<answer>`)
6. `review`: audit against goal
7. `hand_off`: mark `complete`; route to next agent/task

<example>


Prompt shells are stored in Claude with inline citations and version tags.


</example>


---


## Agent Collaboration


### Claude Agents as Roles


| Role           | Capabilities                               |
| -------------- | ------------------------------------------ |
| Drafter        | Create first-pass content with formatting  |
| Playbook       | Structure best practices, checklist format |
| Auditor        | Evaluate task quality, consistency         |
| Researcher     | Find supporting documents or context       |
| Memory Manager | Rewrite or prune memory entries            |


<context>


Each agent operates on prompt/task ID; status flow enables collaboration.


</context>


---


## Memory Handoff Formats


Claude requires memory states to be cleanly wrapped and XML-structured.


\<code\_example>


<handoff>
From: drafter


To: auditor


Task: task-vessel-002


State: complete


Output: /Annexes/Protocols/Vessel_Reporting_SOP_v1.0.md


Feedback: Validate checklist vs. DNV protocol


</handoff>
</code_example>


<important>


Handoff logs enable memory routing across Claude or sub-agent networks.


</important>


---


## Project Traceability


### Audit Chain for Every Task


Each task must have:

- Input prompt (`prompt.md`)
- Output (`draft.md`)
- Feedback (`audit.md`)
- Final (`clean.md`)
- Log (`log.md`)

Store in `/Projects/[task-name]/` or `/Annexes/Logs/`.


<thinking>


Traceability ensures full Claude-Dify audit compliance.


</thinking>


---


## Failover and Resilience

- Claude memory syncs to GitHub daily
- Tasks have fallback shell prompts
- Sub-agents can resume using `task-id` + Claude state
- GitHub triggers Dify ingest (via n8n webhook)
- Mem0 used for error logs and recovery actions

\<code\_example>


<error>
Task: task-vessel-003


Issue: hallucinated content


Action: reset context + retry with chunked prompt


</error>
</code_example>


---


## End of Playbook


\<document\_metadata>
Chunk Count: 9
XML Tags: ✓
Compliance: Context Persistence, Audit Trace
Prompt Model: Claude Opus
Date: 2025-08-06
\</document\_metadata>


---


**End of Playbook**

