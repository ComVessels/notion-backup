---
title: Aegis Auditor Process Document
database: Processes
notion_id: 24080979-7b42-80f0-82ca-eb09a3701608
last_updated: 2025-08-02T14:58:14.421Z
---

# Aegis Auditor Process Document


# Aegis Auditor Process Document


**File Name:** `Aegis_Auditor_Process_v1.1.md`


**Version:** 1.1


**Date:** 2025-07-20


**Status:** Active


**Path:** `/Annexes/Processes/Aegis_Auditor_Process_v1.1.md`


**Dependencies:** `Aegis_Blueprint_v5.2.md`, `Claude_Prompting_Best_Practices_v1.1.md`


**Document Type:** process
**Domain:** technical_audit
**Prerequisites:** aegis_blueprint, claude_prompting_best_practices
**Related Documents:** /Annexes/Playbooks/Aegis_Claude_Project_Development_Playbook_v1.1.md, /Annexes/Methodologies/Context_Engineering_Guide_v1.0.md
**Aegis Context:** ai_technical_audit
**Compliance Requirements:** rag_optimization, context_engineering
**AI Parse Level:** Structured


_Updated: From v1.0—Preserved core content verbatim with light surgical edits (e.g., transitions, splits for ~200-500 word RAG chunks). Adapted to_ _**Claude Projects**_ _(interim until Dify/n8n; incorporated XML tagging, role-playing from Claude_Prompting_Best_Practices_v1.1.md). Added_ _**context engineering**_ _from Context_Engineering_Guide_v1.0.md (e.g., file memory, recitation). Aligned with Aegis_Claude_Project_Development_Playbook_v1.1.md (modularity, testing). Enhanced with bold keywords, ToC._


## Table of Contents

1. [1. Objective](https://www.notion.so/238809797b42809ea93ce2bd1a8abefa?v=238809797b42803f89b2000cb0cd8e50&p=240809797b4280f082caeb09a3701608&pm=s#1-objective)
2. [2. Process Steps](https://www.notion.so/238809797b42809ea93ce2bd1a8abefa?v=238809797b42803f89b2000cb0cd8e50&p=240809797b4280f082caeb09a3701608&pm=s#2-process-steps)

**DIFFS & DELETIONS (Applied Below):**

- **DIFF: Original: Refiner-specific (mislabeled; adapted to Auditor). Revised: Changed to audit focus (ingest plan, verify claims)—reason: Correct to Auditor process.**
- **DIFF: Original: No ToC/chunks. Revised: Added ToC and split into chunks—reason: RAG optimization.**
- **DIFF: Original: Basic steps. Revised: Added context engineering (e.g., file memory for plans, recitation in steps)—reason: Enhance per guides.**
- **DIFF: Original: No bold/metadata. Revised: Added bold keywords/headers—reason: RAG/standards alignment.**
- **Preserved verbatim: Structure, example style; light transitions/adaptations for audit.**

### 1. Objective


The primary objective of the Auditor is to take a technical implementation plan (e.g., a proposed workflow or system design) and \"audit\" it by verifying its technical claims against official documentation (e.g., for tools like Dify, n8n). This process ensures the plan is accurate, feasible, and prepares it for implementation.


**UPDATED: Implement as Claude Project with role-playing (\"You are an expert technical auditor\"); use XML for structuring inputs/outputs.**


(Word count: 98)


### 2. Process Steps


The **Claude Project** will execute the following process for any plan it is given:

- **Step 1: Ingest Source Document**
    - Receive a single source document (e.g., Technical_Plan_v1.0.md) as input.
- **Step 2: Scan for Technical Claims**
    - Read the document line by line.
    - Identify all technical claims or statements about tool capabilities (e.g., \"Dify can handle X\").
- **Step 3: Verify and Cite**
    - For each claim, verify against official documentation and note accuracy.
    - **Example:**
        - **Original Claim:** Dify supports real-time workflows...
        - [audit_start]**Audited Claim:** Dify supports real-time workflows (verified: official docs section Y).
- **Step 4: Consolidate and Format**
    - Compile all verified claims into a new, clean audit report.
    - Ensure all original headings, lists, and other markdown formatting from the source document are preserved.
- **Step 5: Deliver Final Output**
    - Provide the complete, audited report as the final output, ready for revisions or approval.

**UPDATED: Add context engineering—use file memory (save interim scans to files); recitation (repeat steps in prompts for focus). Use XML tagging (e.g., <plan> for input, <audit> for output). Align with modularity—treat as specialized Claude Project for audit step.**


(Word count: 298)

