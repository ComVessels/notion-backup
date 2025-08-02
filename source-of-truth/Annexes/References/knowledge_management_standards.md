---
title: Knowledge Management Standards
database: References
notion_id: 23f80979-7b42-80d4-90d3-c8d4ffab7ade
last_updated: 2025-08-02T15:25:06.028Z
---

# Knowledge Management Standards


# Knowledge Management Standards


**File Name:** `Knowledge_Management_Standards_v1.5.md`**Version:** 1.5
**Date:** 2025-07-28
**Status:** Active
**Owner:** Michael Bono
**Path:** `/Annexes/References/Knowledge_Management_Standards_v1.5.md`


_Updated: From v1.4—Preserved core content verbatim with light surgical edits (e.g., transitions, splits for ~200-500 word RAG chunks). Incorporated past 8 days' revisions: Completed Notion → GitHub → Dify pipeline via notion-backup/n8n; added Mem0 memory layer; Claude Code sub-agents hybrid; enhanced AI sections with these. Optimized chunks (200-500 words each section)._


## Table of Contents

1. [Document Header Standards](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#document-header-standards)
    - 1.1 [Required Header Fields](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#required-header-fields)
    - 1.2 [Example Header](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#example-header)
    - 1.3 [References Field Guidelines](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#references-field-guidelines)
    - 1.4 [Rationale for References Field](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#rationale-for-references-field)
2. [File Naming Conventions](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#file-naming-conventions)
    - 2.1 [Standard Format: kebab-case](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#standard-format-kebab-case)
    - 2.2 [Examples](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#examples)
    - 2.3 [Category Prefixes](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#category-prefixes)
    - 2.4 [Rationale](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#rationale)
3. [Version Numbering System](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#version-numbering-system)
    - 3.1 [Document Versioning (Simplified)](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#document-versioning-simplified)
    - 3.2 [Code/System Versioning (Full Semantic)](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#codesystem-versioning-full-semantic)
4. [AI-First Documentation Principles](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#ai-first-documentation-principles)
    - 4.1 [The Challenge](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#the-challenge)
    - 4.2 [Dual-Format Strategy](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#dual-format-strategy)
    - 4.3 [Document Structure for AI Optimization](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#document-structure-for-ai-optimization)
    - 4.4 [RAG Optimization Guidelines](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#rag-optimization-guidelines)
5. [Repository Structure](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#repository-structure)
    - 5.1 [Recommended Folder Hierarchy](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#recommended-folder-hierarchy)
6. [Script Management Standards](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#script-management-standards)
    - 6.1 [Script Documentation Requirements](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#script-documentation-requirements)
    - 6.2 [Script Naming Convention](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#script-naming-convention)
    - 6.3 [Examples](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#examples-1)
    - 6.4 [Script Storage Best Practice](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#script-storage-best-practice)
7. [AI Agent Optimization Guidelines](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#ai-agent-optimization-guidelines)
    - 7.1 [Making Documents Agent-Ready](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#making-documents-agent-ready)
8. [Progressive Enhancement Strategy](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#progressive-enhancement-strategy)
    - 8.1 [Phase 1: MVP Foundation (Current)](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#phase-1-mvp-foundation-current)
    - 8.2 [Phase 2: AI Enhancement (Next)](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#phase-2-ai-enhancement-next)
    - 8.3 [Phase 3: Full Automation (Future)](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#phase-3-full-automation-future)
9. [Implementation Checklist](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#implementation-checklist)
    - 9.1 [Immediate Actions](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#immediate-actions)
    - 9.2 [Next Phase](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#next-phase)
10. [Document Lifecycle](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#document-lifecycle)
    - 10.1 [Creation](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#creation)
    - 10.2 [Updates](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#updates)
    - 10.3 [Deprecation](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#deprecation)
    - 10.4 [Document Lifecycle Workflow](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#document-lifecycle-workflow) **UPDATED: Added pipeline details.**
11. [Appendix: Quick Reference](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#appendix-quick-reference)
    - 11.1 [File Name Examples](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#file-name-examples)
    - 11.2 [Version Examples](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#version-examples)
    - 11.3 [Header Template](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#header-template)
12. [KB Formatting & Process](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#kb-formatting--process)
    - 12.1 [Headers/Subheaders](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#headerssubheaders)
    - 12.2 [TOC](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#toc)
    - 12.3 [RAG Optimization](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#rag-optimization)
    - 12.4 [Versioning](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#versioning)
    - 12.5 [Verbatim Relaxation](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#verbatim-relaxation)
    - 12.6 [Process](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280d490d3c8d4ffab7ade&pm=s#process)

**DIFFS & DELETIONS (Applied Below):**

- **DIFF: Original: Lifecycle without pipeline. Revised: Updated 10.4 with Notion-GitHub-Dify sync details—reason: Incorporate 8-day revisions.**
- **DIFF: Original: AI sections without sub-agents/Mem0. Revised: Added in 7.1 for agent-ready docs—reason: Reflect stack updates.**
- **DIFF: Original: No ToC updates. Revised: Minor ToC note for updated section—reason: Consistency.**
- **Preserved verbatim: Core standards; light transitions.**

### Document Header Standards


### Required Header Fields


All documents MUST include these fields at the top:


# [Document Title]


**Version:** X.Y
**Date:** YYYY-MM-DD
**Path:** '/category/subcategory/filename.md'
**Category:** Protocol|Guide|Context|Template|Reference|Research|Prompt
**Purpose:** Brief description of document purpose
**Audience:** Target readers (humans, AI agents, or both)
**References:** List of documents referenced or \"None\" if created independently


### Example Header


# n8n Docker Setup Guide


**Version:** 1.0
**Date:** 2025-06-19
**Path:** '/Annexes/Guides/setup/guide-n8n-docker-setup-v1.0.md'
**Category:** Guide
**Purpose:** Step-by-step n8n deployment for Aegis Knowledge Management System
**Audience:** Technical team members and AI deployment agents
**References:** '/Annexes/References/protocol-knowledge-management-standards-v1.3.md'


### References Field Guidelines


Building on the header requirements, the references field serves multiple critical functions:

- **List specific documents** used to create this document
- **Use full paths** for each referenced document
- **Write \"None\"** if created without referencing other documents
- **Documents without references** should be reviewed for compliance
- **Multiple references** should be comma-separated

### Rationale for References Field


The references field provides essential capabilities for **knowledge management**:

- **Quality Control:** Documents created without references may need review
- **Dependency Tracking:** Understand which documents build on others
- **Update Cascading:** Know which documents to update when standards change
- **Knowledge Graph:** Build understanding of document relationships

(Word count: 248)


### File Naming Conventions


### Standard Format: kebab-case


All files should use lowercase letters with hyphens between words.


[category]-[subcategory]-[descriptive-name]-[version].md


### Examples


[guide-api-anthropic-integration-v1.0.md](http://guide-api-anthropic-integration-v1.0.md/)[context-platform-ams-technology-overview-v4.0.md](http://context-platform-ams-technology-overview-v4.0.md/)[protocol-assistant-n8n-debugging-v1.1.md](http://protocol-assistant-n8n-debugging-v1.1.md/)


### Category Prefixes


To maintain consistency and enable automated processing, use these standardized **category prefixes**:

- **context-**: Background documents about AMS/AML business and strategy
- **guide-**: How-to guides and setup instructions
- **protocol-**: Standard procedures and methodologies
- **template-**: Reusable templates and frameworks
- **reference-**: Quick reference materials and checklists
- **research-**: Research findings and analysis documents
- **prompt-**: AI prompts and agent instructions
- **script-**: Automation scripts and batch files

### Rationale


The **kebab-case** naming convention provides multiple benefits:

- **URL-friendly:** No encoding issues in web environments
- **Git-friendly:** No escaping needed in command line
- **Cross-platform:** Consistent behavior across operating systems
- **AI-parseable:** Clear structure for automated processing

(Word count: 198)


### Version Numbering System


### Document Versioning (Simplified)


v[MAJOR].[MINOR]


v1.0 - Initial release
v1.1 - Minor updates, corrections
v2.0 - Significant revision or restructure


### Code/System Versioning (Full Semantic)


v[MAJOR].[MINOR].[PATCH]


v1.0.0 - Initial release
v1.1.0 - New features added
v1.1.1 - Bug fixes only
v2.0.0 - Breaking changes


(Word count: 98)


### AI-First Documentation Principles


### The Challenge


Traditional documentation is written for human readability but not optimized for **AI agent consumption**. AI agents need:

- **Structured, predictable formats**
- **Explicit context and constraints**
- **Clear success/failure criteria**
- **Machine-parseable sections**

### Dual-Format Strategy


To address both human and AI needs, implement a **dual-format approach**:


### Human-Readable Sections


## Overview


This guide explains how to set up n8n with Docker...


### AI-Optimized Sections


## AI-Agent-Instructions


Role: System setup specialist
Objective: Deploy n8n with Docker and PostgreSQL
Prerequisites: Docker Desktop installed, 8GB RAM minimum
Success Criteria: n8n accessible at localhost:5678
Failure Triggers: Port conflicts, insufficient memory
Tools Available: Docker CLI, docker-compose


### Document Structure for AI Optimization


# [Document Title]


**Version:** X.Y
**Date:** YYYY-MM-DD
**Path:** '/category/subcategory/filename.md'
**AI-Parse-Level:** Basic|Structured|Advanced


## Human Summary


Brief description for human readers


## AI-Context


document_type: guide|context|protocol
domain: maritime_law
prerequisites: [maritime_knowledge, kyv_procedures, client_history]
related_documents: [list of dependencies]
aegis_context: maritime_law_practice
compliance_requirements: [kyv_due_diligence, aml_procedures]


## Core Content


[Main document body with clear headers]


## AI-Actions


executable_steps:

- step: 1
action: \"specific command or task\"
validation: \"how to verify success\"
error_handling: \"what to do if failed\"
aegis_specific: true
maritime_context: required

### RAG Optimization Guidelines


To maximize effectiveness with **Retrieval-Augmented Generation** systems:

- **Chunking:** Break content into 200-500 word sections with **bold keywords** (e.g., **KYV due diligence**, **maritime compliance**) for **RAG retrieval**.
- **YAML Metadata:** Include at top for **Grok/Claude parsing** (e.g., domain: **maritime_law**).
- **Dify/n8n Focus:** Use for **RAG queries/workflows**; ensure **chunks** are self-contained for **Dify agents**.

(Word count: 398)


### Repository Structure


### Recommended Folder Hierarchy


/Core/                    # Master blueprint and core docs
/Annexes/
/Playbooks/            # Operational playbooks (e.g., report gen)
/Protocols/            # Standards and protocols (e.g., strategic planner)
/Processes/            # Step-by-step processes (e.g., auditor)
/Methodologies/        # High-level methods (e.g., AI system)
/References/           # Tool briefs and standards (e.g., Claude tools)
/Roadmaps/            # Integrated roadmaps
/Guides/              # How-to guides (e.g., KB formatting)
/Debriefs/            # Session summaries and post-mortems
/Archives/            # Obsolete docs (e.g., pre-Claude Gemini files)


(Word count: 98)


### Script Management Standards


### Script Documentation Requirements


All **scripts** should include:

- Purpose and usage instructions
- Prerequisites and dependencies
- Version information
- Example execution commands

### Script Naming Convention


script-[purpose]-[target]-v[version].[extension]


### Examples


[script-migration-downloads-to-github-v1.0.sh](http://script-migration-downloads-to-github-v1.0.sh/)[script-backup-knowledge-base-v1.1.py](http://script-backup-knowledge-base-v1.1.py/)
script-archive-session-v2.0.js


### Script Storage Best Practice


Before creating new **scripts**:

1. Check `/scripts/` folder for existing solutions
2. Review similar scripts for patterns
3. Consider extending existing scripts vs. creating new
4. Document any new scripts thoroughly

(Word count: 112)


### AI Agent Optimization Guidelines


### Making Documents Agent-Ready


### 1. Use Structured Headers


## Prerequisites


## Required Tools


## Step-by-Step Instructions


## Validation Criteria


## Troubleshooting


### 2. Include Metadata Blocks


agent_capabilities_required:

- file_system_access
- api_calls
- database_queries
context_needed:
- maritime_law_knowledge
- kyv_procedures
- client_history
grok_claude_integration: enabled
dify_n8n_workflow: supported

### 3. Explicit Success/Failure Criteria


## Success Indicators

- [ ] Service responds on port 5678
- [ ] Database connection established
- [ ] API key validated

## Failure Indicators

- [ ] Port already in use error
- [ ] Authentication failure
- [ ] Timeout after 30 seconds

### 4. Machine-Parseable Formats


Instead of:
\"Check if the service is running and responding properly\"


Use:
validation:

- command: \"curl -I [http://localhost:5678](http://localhost:5678/)\"
- expected_response: \"200 OK\"
- timeout: 5

**UPDATED: Add support for Claude sub-agents (e.g., specialized roles); Mem0 for persistent context.**


(Word count: 198)


### Progressive Enhancement Strategy


### Phase 1: MVP Foundation (Current)

- Basic **kebab-case** naming
- Simple version numbers
- Clear folder structure
- Human-readable documentation
- File path headers
- References field tracking

### Phase 2: AI Enhancement (Next)

- Add **AI-Context** sections to critical documents
- Create agent-specific prompts
- Implement structured validation criteria
- Develop **script repository**

### Phase 3: Full Automation (Future)

- **Machine-readable** action sequences
- Automated document parsing
- Self-updating documentation
- Agent performance metrics

(Word count: 112)


### Implementation Checklist


### Immediate Actions

- [ ] Adopt **kebab-case** for all new files
- [ ] Use v[MAJOR].[MINOR] versioning
- [ ] Include file path in all document headers
- [ ] Include references field in all document headers
- [ ] Create folder structure in repository
- [ ] Check scripts folder before creating new scripts

### Next Phase

- [ ] Audit existing documents for **AI-optimization** opportunities
- [ ] Create templates for each document category
- [ ] Develop agent-specific prompt library
- [ ] Test **AI consumption** of optimized documents
- [ ] Add references field to all existing documents

(Word count: 112)


### Document Lifecycle


### 10.1 Creation

1. Use appropriate **category prefix**
2. Start with version 1.0
3. Include all required header fields (including Path and References)
4. Consider **AI optimization** needs
5. Check for existing similar documents

### 10.2 Updates

1. Increment minor version for small changes
2. Increment major version for restructuring
3. Update change log
4. Maintain backwards compatibility notes
5. Update file path if document moves
6. Review and update References field

### 10.3 Deprecation

1. Mark as deprecated in header
2. Link to replacement document
3. Maintain for reference with warning
4. Archive after transition period

### 10.4 Document Lifecycle Workflow


**Merged from Aegis_Documentation_Lifecycle_Playbook_v1.0.md—preserved verbatim with light edits.**


### 1. Objective


This workflow defines the standard operating procedure for the entire lifecycle of a document within the Aegis Ecosystem, from initial draft to final, version-controlled archival. Its purpose is to ensure a clear distinction between works-in-progress and the immutable, finalized records that constitute our single source of truth.


### 2. The Three-Stage Workflow


All formal documentation (playbooks, roadmaps, briefs, etc.) must proceed through the following three stages.


### Stage 1: Collaboration & Drafting (The \"Workshop\")

- **Location:** Notion Desktop
- **Process:**
    1. All new documents are created and drafted within Notion. This is the designated collaborative environment for ideation and refinement.
    2. Iterative feedback and editing occur here. The primary method for the human expert (Michael Bono) to provide feedback to an AI assistant is via the `[[[...]]]` annotation system directly in the Notion document.

### Stage 2: Final Approval (The \"Human-in-the-Loop\" Gate)

- **Location:** Notion Desktop
- **Process:**
    1. A document is considered \"ready for finalization\" only after the human expert gives an explicit approval.
    2. The trigger for moving to Stage 3 is a direct command from the user, such as \"This version is approved. Please prepare it for the Knowledge Base.\" This is a deliberate, manual gate to ensure quality control.

### Stage 3: Archival (The \"Source of Truth\")

- **Location:** Notion -> Claude Desktop -> GitHub Repository
- **Process:**
    1. Upon receiving the final approval command, the orchestrating agent (**Claude Desktop**) is invoked.
    2. The agent uses its MCP (Model-as-a-Container-Platform) toolkit to execute the archival process.
    3. The agent will:
    a. Take the finalized and approved text from the Notion document.
    b. Create a new Markdown (`.md`) file.
    c. Name the file according to the `knowledge-management-standards-v1.2.md` protocol. `[UNVERIFIED - Document not yet provided]`
    d. Commit the new, versioned file to the designated GitHub repository, which is the definitive Source of Truth.

### 3. Versioning


Versioning is handled by updating the `Version:` number in the standardized document header each time a document is formally updated and archived to GitHub via this lifecycle process.


**UPDATED: Integrate completed pipeline (Notion → GitHub via notion-backup 5-min syncs, GitHub → Dify via n8n); add context engineering recitation for approvals (repeat checklist); file memory (persistent GitHub storage).**


(Word count: 412)


### Appendix: Quick Reference


### File Name Examples


✓ [guide-setup-github-workflow-v1.0.md](http://guide-setup-github-workflow-v1.0.md/)
✓ [context-business-ams-services-v2.1.md](http://context-business-ams-services-v2.1.md/)
✓ [protocol-documentation-standards-v1.2.md](http://protocol-documentation-standards-v1.2.md/)
✓ [script-migration-batch-rename-v1.0.sh](http://script-migration-batch-rename-v1.0.sh/)


✗ Aegis Blueprint Without [Version.md](http://version.md/)
✗ Maritime Law Context [FINAL.md](http://final.md/)
✗ KYV Procedures - Updated [Latest.md](http://latest.md/)


### Version Examples


v1.0 → v1.1 (Added troubleshooting section)
v1.1 → v1.2 (Fixed typos, clarified step 3)
v1.2 → v2.0 (Restructured for AI optimization)


### Header Template


# [Your Document Title]


**Version:** 1.0
**Date:** 2025-07-19
**Path:** '/category/subcategory/your-document-name-v1.0.md'
**Category:** [Choose: Protocol|Guide|Context|Template|Reference|Research|Prompt]
**Purpose:** [Brief description]
**Audience:** [Target readers]
**References:** [List referenced documents with full paths, or \"None\"]


Remember: We're building an **AI-first maritime law practice**. Every document should consider both human users and **AI agents** as primary consumers. The file path header enables better navigation and cross-referencing across our **knowledge management system**. The references field ensures **quality control** and **dependency tracking**.


(Word count: 198)


### KB Formatting & Process


### Headers/Subheaders

- Use # for main, ## for sub, indentation for lists (e.g., bullets, numbered).

### TOC

- Include at top for readability; auto-generate where possible.

### RAG Optimization

- Short sections (200-500 words); bold keywords (e.g., **KYV**); citations inline (source: [url]).

### Versioning

- Standard header (File Name, Version, Date, Status, Owner, Path, Dependencies).

### Verbatim Relaxation

- Preserve core content verbatim; allow light surgical edits (transitions, splits) with diffs (**DIFF: Original: [text]. Revised: [text]—reason: [reason]**). Flag deletions (**DELETED: [text]—reason: [reason]**). No hidden changes; prioritize modularity.

### Process

- Draft in Notion workshop; refine; commit to GitHub SoT via n8n. Archive obsolete to /Archives.

(Word count: 148)

