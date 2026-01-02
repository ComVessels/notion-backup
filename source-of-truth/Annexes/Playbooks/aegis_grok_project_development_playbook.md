---
title: Aegis Grok Project Development Playbook
database: Playbooks
notion_id: 24780979-7b42-8062-9a69-e2fea0d6bca1
last_updated: 2026-01-02T08:53:35.401Z
---

# Aegis Grok Project Development Playbook


# Aegis Grok Project Development Playbook


**File Name:** `Aegis_Grok_Project_Development_Playbook_v1.3.md`**Version:** 1.3
**Date:** 2025-07-20
**Updated:** From v1.3—Content preserved verbatim with structural reformatting for RAG optimization (200-500 word chunks, XML tagging, bold keywords per Context Engineering Guide v1.1) using Aegis Knowledge Base Universal Reformatter Prompt v3.
**Status:** Active
**Owner:** Michael Bono
**Path:** `/Annexes/Playbooks/Aegis_Grok_Project_Development_Playbook_v1.3.md`**Dependencies:** `Aegis_Integrated_Roadmap_v1.0.md`, `Knowledge_Management_Standards_v1.5.md`**Document Type:** playbook
**Domain:** ai\_project\_management
**Prerequisites:** aegis\_blueprint, strategic\_frameworks
**Related Documents:** `/Annexes/Protocols/Aegis_Grok_Collaboration_Protocol_v1.2.md`, `/Annexes/References/Claude_Prompting_Best_Practices_v1.1.md`**Aegis Context:** strategic\_planning, orchestration
**Compliance Requirements:** context\_engineering, rag\_optimization
**AI Parse Level:** Strategic


## Table of Contents

1. [Project Objective & Scope](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=247809797b4280629a69e2fea0d6bca1&pm=s#project-objective--scope)
2. [Strategic Development Tracks](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=247809797b4280629a69e2fea0d6bca1&pm=s#strategic-development-tracks)
3. [Grok Core Responsibilities](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=247809797b4280629a69e2fea0d6bca1&pm=s#grok-core-responsibilities)
4. [System Stack & Platform Choices](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=247809797b4280629a69e2fea0d6bca1&pm=s#system-stack--platform-choices)
5. [Prompt Architecture & AI Personas](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=247809797b4280629a69e2fea0d6bca1&pm=s#prompt-architecture--ai-personas)
6. [Documenting Strategic Knowledge](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=247809797b4280629a69e2fea0d6bca1&pm=s#documenting-strategic-knowledge)
7. [Error Logging & Retrospective Design](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=247809797b4280629a69e2fea0d6bca1&pm=s#error-logging--retrospective-design)
8. [Interfacing with Claude and Dify](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=247809797b4280629a69e2fea0d6bca1&pm=s#interfacing-with-claude-and-dify)
9. [Final Review & Playbook Scope](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=247809797b4280629a69e2fea0d6bca1&pm=s#final-review--playbook-scope)

---


## Project Objective & Scope


**The core objective** of this playbook is to provide a structured, codified, and context-engineered development plan for the Aegis Grok Project. This initiative serves as the orchestration layer between strategy (as defined in the Blueprint and Roadmap) and the AI execution agents (Claude, Dify workflows, n8n automations).


<important>


All strategic knowledge must be documented in version-controlled Markdown files within the GitHub-based Knowledge Base (KB). Session memory or local experimentation must never substitute the SoT.


</important>


The Grok system is designed to answer: “How do we reduce overhead for long-term strategic work, while building a sustainable interface between AI and human planning?” It addresses bottlenecks by offloading repeatable thinking tasks to agents, enabling persistent versioned dialogue, and surfacing epistemic flags in advance.


## Strategic Development Tracks


**Two simultaneous development tracks** guide Aegis Grok operations:

- **Track 1: MVP Orchestration (Client-Facing Operations):** This operational thread focuses on Claude prompt design, generation pipelines, and integrating deliverables such as SnP briefings and white-labeled reports.
- **Track 2: System Architecture (Ecosystem Engineering):** This thread develops the infrastructure for Dify, Claude Projects, Postgres-backed memory routing, and the contextual integrity of each agent type.

<context>


These tracks are mutually reinforcing. Insights from MVP usage inform architectural decisions; architectural primitives inform agent affordances.


</context>


<thinking>


Maintaining balance between “get it done” and “build it right” prevents Grok from becoming a brittle one-off assistant or an unusable theory exercise.


</thinking>


## Grok Core Responsibilities


**Grok serves** as a long-term planning orchestrator and documentation authority. It acts on behalf of the strategic owner (Michael Bono) with six persistent duties:

1. Drafting and maintaining **version-controlled** strategic knowledge.
2. Acting as the **AI Dispatcher**: selecting the correct agent for the task, drafting its prompt, logging the execution route.
3. Proactively maintaining **traceability** between roadmap goals and agent behavior.
4. Recommending architectural upgrades or redlines based on learnings.
5. Surfacing and tagging **epistemic risk** (e.g. hallucination-prone sections).
6. Flagging systems or decisions that violate context-engineering best practices.

<example>


If a deliverable fails due to token length, Grok logs this in `/Annexes/Debriefs/Claude_Context_Failures.md` and proposes a constraint-aware re-architecture.


</example>


## System Stack & Platform Choices


**The current tech stack** relies primarily on Claude (for flexible agent prompting), Dify (for persistent agent configuration), and GitHub (for knowledge state tracking). n8n is used for automation workflows and routing orchestration.

- Claude is the preferred AI engine for strategic tasks.
- Dify hosts persistent AI personas and prompt stores.
- n8n triggers tasks based on GitHub commits or document state changes.

\<code\_example>


# n8n Trigger Sample


{
"type": "github-commit",
"path": "/Annexes/Playbooks/",
"action": "dispatch-agent"
}
\</code\_example>


<thinking>


Using GitHub paths as signal routing anchors enforces version control while minimizing cognitive load.


</thinking>


## Prompt Architecture & AI Personas


**Every prompt must** conform to `Claude_Prompting_Best_Practices` and be explicitly tagged with XML markers for:

- `<context>`: background setup
- `<answer>`: solution output
- `<example>`: illustration
- `<thinking>`: analysis
- `<important>`: high-stakes constraints
- `<code_example>`: code snippets

Each **AI persona** (e.g., Technical Architect, Market Analyst) has a scoped knowledge store and task boundaries. Grok selects the appropriate agent, drafts a full context-rich prompt, and dispatches it.


<answer>


Always ensure each agent is provided a self-contained prompt with document paths, version numbers, and constraints.


</answer>


## Documenting Strategic Knowledge


**Strategic memory** is preserved through Markdown documents, not session history. All high-level insights, constraints, and learnings must be logged into their respective files.


Checklist for finalization:

- [x] Stored in `/Annexes/Playbooks/` or `/Annexes/Protocols/`
- [x] Includes document header
- [x] Has compliance tags (context\_engineering, rag\_optimization)
- [x] Version controlled with changelog comments
- [x] Linked in roadmap via reference or dependency chain

<important>


A Grok session with strategic output that is not committed to GitHub is considered **lost knowledge**.


</important>


## Error Logging & Retrospective Design


**Grok must log** all platform or execution failures. These include:

- Claude token overflows
- Agent dispatch errors
- Dify misrouting
- Markdown rendering issues
- Broken links in KB references

Each log must:

1. Include timestamp and agent path
2. Describe the failure and its scope
3. Propose a design fix or constraint flag

<example>


A debrief titled `Claude_Token_Limit_Memo_v1.0.md` should appear in `/Annexes/Debriefs/`, citing the affected document and solution.


</example>


## Interfacing with Claude and Dify


**Interaction protocol** is as follows:

1. Grok receives a task (user prompt or file edit).
2. It selects a specialist agent via Claude or Dify.
3. A prompt is drafted with XML tags, metadata, and path references.
4. Prompt is reviewed and dispatched.
5. Output is stored in a playbook or log.

\<code\_example>


<context>


Source: /Annexes/References/Claude_Prompting_Best_Practices_v1.1.md


</context>
<answer>


Use `<thinking>` before summarizing multiple code options.


</answer>
</code_example>


<important>


Prompt drafts must be manually verified before dispatch—automated Claude errors must not propagate into the KB.


</important>


## Final Review & Playbook Scope


**This playbook** remains the foundational document for orchestrating all Grok project tasks. It must be reviewed monthly for:

- Stack shifts (e.g. new platform support)
- Prompting changes (e.g. XML tag evolutions)
- Roadmap updates
- Collaboration protocol changes

Any deviation from this standard must be logged in `Aegis_Playbook_Changelog.md`.


<thinking>


Codifying Grok operations ensures that strategic planning remains durable, transparent, and version-safe.


</thinking>


---


**End of playbook**

