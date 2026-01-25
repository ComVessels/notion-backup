---
title: Knowledge Management Standards
database: References
notion_id: 24780979-7b42-8044-aad3-f5211f68b214
last_updated: 2026-01-25T04:09:49.136Z
---

# Knowledge Management Standards


# Knowledge Management Standards


**File Name:** `Knowledge_Management_Standards_v1.6.md`**Version:** 1.6
**Date:** 2025-07-28
**Updated:** From v1.5—Content preserved verbatim with structural reformatting for RAG optimization (200-500 word chunks, XML tagging, bold keywords per Context Engineering Guide v1.1) using Aegis Knowledge Base Universal Reformatter Prompt v3.
**Status:** Active
**Owner:** Michael Bono
**Path:** `/Annexes/References/Knowledge_Management_Standards_v1.6.md`**Dependencies:** `Context_Engineering_Guide_v1.2.md`, `Claude_Prompting_Best_Practices_v1.2.md`**Document Type:** reference
**Domain:** knowledge\_governance
**Prerequisites:** document\_lifecycle\_literacy
**Related Documents:** `/Annexes/Methodologies/Context_Engineering_Guide_v1.2.md`, `/Annexes/References/Claude_Prompting_Best_Practices_v1.2.md`**Aegis Context:** documentation\_standards
**Compliance Requirements:** rag\_optimization, xml\_structuring
**AI Parse Level:** Strategic


## Table of Contents

1. [Document Header Standards](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=247809797b428044aad3f5211f68b214&pm=s#document-header-standards)
2. [File Naming Conventions](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=247809797b428044aad3f5211f68b214&pm=s#file-naming-conventions)
3. [Version Numbering System](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=247809797b428044aad3f5211f68b214&pm=s#version-numbering-system)
4. [AI-First Documentation Principles](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=247809797b428044aad3f5211f68b214&pm=s#ai-first-documentation-principles)
5. [Repository Structure](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=247809797b428044aad3f5211f68b214&pm=s#repository-structure)
6. [Script Management Standards](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=247809797b428044aad3f5211f68b214&pm=s#script-management-standards)
7. [AI Agent Optimization Guidelines](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=247809797b428044aad3f5211f68b214&pm=s#ai-agent-optimization-guidelines)
8. [Progressive Enhancement Strategy](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=247809797b428044aad3f5211f68b214&pm=s#progressive-enhancement-strategy)
9. [Implementation Checklist](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=247809797b428044aad3f5211f68b214&pm=s#implementation-checklist)
10. [Document Lifecycle](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=247809797b428044aad3f5211f68b214&pm=s#document-lifecycle)
11. [Appendix: Quick Reference](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=247809797b428044aad3f5211f68b214&pm=s#appendix-quick-reference)
12. [KB Formatting & Process](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=247809797b428044aad3f5211f68b214&pm=s#kb-formatting--process)

---


## Document Header Standards


**Required fields** include versioning, dates, paths, dependencies, and references to support **traceability and machine parsing**.


<example>


# n8n Docker Setup Guide


**Version:** 1.0


**Date:** 2025-06-19


**Path:** '/Annexes/Guides/setup/guide-n8n-docker-setup-v1.0.md'


**Category:** Guide


**Purpose:** Step-by-step n8n deployment


**Audience:** Technical team, AI deployment agents


**References:** '/Annexes/References/protocol-knowledge-management-standards-v1.3.md'


</example>:contentReference[oaicite:0]{index=0}


---


## File Naming Conventions


**Use kebab-case**, category prefixes, and version suffixes for consistency and system compatibility.


\<code\_example>
[guide-api-anthropic-integration-v1.0.md](http://guide-api-anthropic-integration-v1.0.md/)[context-platform-ams-technology-overview-v4.0.md](http://context-platform-ams-technology-overview-v4.0.md/)[protocol-assistant-n8n-debugging-v1.1.md](http://protocol-assistant-n8n-debugging-v1.1.md/)
\</code\_example>


<thinking>


This improves Git operations, URL accessibility, and cross-system parsing.


</thinking>


---


## Version Numbering System


### Document: `v[MAJOR].[MINOR]`

- v1.0 = First release
- v1.1 = Minor updates
- v2.0 = Major restructure

### Code/Systems: `v[MAJOR].[MINOR].[PATCH]`

- v1.1.1 = Bug fixes
- v1.1.0 = New features
- v2.0.0 = Breaking change

<important>


Track version updates through both metadata and changelogs.


</important>


---


## AI-First Documentation Principles


**Optimize for both humans and AI agents** through dual-format structuring:


### Human Readable


```plain text
## Overview
This guide explains how to set up...
```


### Claude/Dify Parse-Ready


\<code\_example> <instructions>
Role: Research specialist
Objective: Draft due diligence SOP
Prerequisites: AML, vessel logs </instructions>
\</code\_example>


<answer>


This structure ensures compliance with Grok, Dify, and Claude parsing needs.


</answer>:contentReference[oaicite:1]{index=1}


---


## Repository Structure


Organize by function for modular ingest and topic-scoped storage:


```plain text
/Core/                 # Blueprints
/Annexes/Playbooks/    # Operational guides
/Annexes/References/   # Standards and tool briefs
/Annexes/Protocols/    # Standard operating procedures
/Annexes/Processes/    # Step-by-step task guidance
```


<important>


Every document must live in a stable, versioned, and scoped folder.


</important>


---


## Script Management Standards


**All automation scripts** must be documented, versioned, and stored under `/scripts/`.


### Naming


`script-[purpose]-[target]-v[version].extension`


<example>


[script-migration-downloads-to-github-v1.0.sh](http://script-migration-downloads-to-github-v1.0.sh/)


script-archive-session-v2.0.js


</example>


<answer>


Check for existing scripts before creating new ones; reuse patterns.


</answer>


---


## AI Agent Optimization Guidelines


### Required Structural Tags

- `<instructions>`
- `<thinking>`
- `<example>`
- `<context>`
- `<answer>`

### Metadata Blocks


```plain text
agent_capabilities_required: [file_system, api_access]
context_needed: [kyv, maritime_compliance]
```


### Validation Markers


```plain text
Success: Port 5678 open
Failure: Auth token rejected
```


<important>


Use Claude/Mem0-compatible tags for persistence, context reuse, and audit.


</important>


---


## Progressive Enhancement Strategy


### Phase 1: MVP

- Header fields, kebab-case, simple folders

### Phase 2: AI Integration

- Add agent prompts, YAML metadata, error logs

### Phase 3: Full Automation

- Scripts auto-generate docs
- Dify agents ingest + audit
- GitHub triggers Notion sync via n8n

---


## Implementation Checklist

- [ ] All documents use kebab-case
- [ ] Version fields match file name
- [ ] Path and references fields are present
- [ ] RAG chunking (200–500 words) applied
- [ ] Document is stored in appropriate `/Annexes/` folder
- [ ] Audit flag added if references missing

---


## Document Lifecycle


### Stage 1: Workshop

- Created in Notion
- Annotated via `[[[...]]]` feedback

### Stage 2: Human Approval

- Approved in Notion by Michael
- Status changed to “Approved”

### Stage 3: Archival

- Claude Desktop agent creates `.md` file
- Commits to GitHub via n8n/Claude MCP
- Triggers Dify sync, Grok RAG chunking

\<code\_example>
\<document\_lifecycle>
Stage: Final
Approved: true
Path: /Annexes/References/Knowledge\_Management\_Standards\_v1.5.md
\</document\_lifecycle>
\</code\_example>


---


## Appendix: Quick Reference


### Valid Names


✓ [guide-setup-n8n-v1.0.md](http://guide-setup-n8n-v1.0.md/)
✓ [protocol-data-ingestion-v2.2.md](http://protocol-data-ingestion-v2.2.md/)


### Invalid


✗ Aegis Blueprint [Final.md](http://final.md/)
✗ KYV\_Template-latest.docx


---


## KB Formatting & Process


### Key Guidelines

- TOC always at top
- Chunked 200–500 word blocks
- Inline citations when possible
- Markdown only—no embedded HTML
- RAG flags: **bold keywords**, `\\[\\]` for uncertain claims
- Pipeline: Notion → GitHub (via notion-backup) → Dify (via n8n)

---


**End of Reference**

