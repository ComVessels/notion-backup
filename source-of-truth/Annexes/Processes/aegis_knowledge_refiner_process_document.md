---
title: Aegis Knowledge Refiner Process Document
database: Processes
notion_id: 24080979-7b42-809c-9625-d7169bb74ab1
last_updated: 2025-08-03T20:51:55.514Z
---

# Aegis Knowledge Refiner Process Document


# Aegis Knowledge Refiner Process Document


**File Name:** `Aegis_Knowledge_Refiner_Process_v1.2.md`


**Version:** 1.2


**Date:** 2025-07-20


**Status:** Active


**Path:** `/Annexes/Processes/Aegis_Knowledge_Refiner_Process_v1.2.md`


**Dependencies:** `Aegis_Blueprint_v5.2.md`, `Claude_Prompting_Best_Practices_v1.1.md`


**Document Type:** process
**Domain:** knowledge_refinement
**Prerequisites:** aegis_blueprint, claude_prompting_best_practices
**Related Documents:** /Annexes/Playbooks/Aegis_Claude_Project_Development_Playbook_v1.1.md, /Annexes/Methodologies/Context_Engineering_Guide_v1.0.md
**Aegis Context:** ai_knowledge_refinement
**Compliance Requirements:** rag_optimization, context_engineering
**AI Parse Level:** Structured


_Updated: From v1.1—Preserved core content verbatim with light surgical edits (e.g., transitions, splits for ~200-500 word RAG chunks). Adapted to_ _**Claude Projects**_ _(interim until Dify/n8n; incorporated XML tagging, role-playing from Claude_Prompting_Best_Practices_v1.1.md). Added_ _**context engineering**_ _from Context_Engineering_Guide_v1.0.md (e.g., file memory, recitation). Aligned with Aegis_Claude_Project_Development_Playbook_v1.1.md (modularity, testing). Enhanced with bold keywords, ToC._


## Table of Contents

1. [1. Objective](https://www.notion.so/238809797b42809ea93ce2bd1a8abefa?v=238809797b42803f89b2000cb0cd8e50&p=240809797b42809c9625d7169bb74ab1&pm=s#1-objective)
2. [2. Process Steps](https://www.notion.so/238809797b42809ea93ce2bd1a8abefa?v=238809797b42803f89b2000cb0cd8e50&p=240809797b42809c9625d7169bb74ab1&pm=s#2-process-steps)

**DIFFS & DELETIONS (Applied Below):**

- **DIFF: Original: Gem focus. Revised: Updated to Claude Projects with XML/role-playing—reason: Align with current stack/best practices.**
- **DIFF: Original: No ToC/chunks. Revised: Added ToC and split into chunks—reason: RAG optimization.**
- **DIFF: Original: Basic steps. Revised: Added context engineering (e.g., file memory for docs, recitation in steps)—reason: Enhance per guides.**
- **DIFF: Original: No bold/metadata. Revised: Added bold keywords/headers—reason: RAG/standards alignment.**
- **Preserved verbatim: Core objective, steps; light transitions.**

### 1. Objective


The primary objective of the Knowledge Refiner is to take a raw intelligence document (e.g., the output from a Deep Research session) and \"refine\" it by converting its end-of-line source markers (e.g., ``) into professional, inline parenthetical citations. This process makes the document more readable and prepares it for the final synthesis stage.


**UPDATED: Implement as Claude Project with role-playing (\"You are an expert knowledge refiner\"); use XML for structuring inputs/outputs.**


(Word count: 98)


### 2. Process Steps


The **Claude Project** will execute the following process for any document it is given:

- **Step 1: Ingest Source Document**
    - Receive a single source document (e.g., Raw_Research_Report_1.md) as input.
- **Step 2: Scan for Source Markers**
    - Read the document line by line.
    - Identify all numerical source markers (e.g., ``).
- **Step 3: Rewrite and Cite**
    - For each sentence or phrase that has a source marker, rewrite the sentence to include the source in a clean, parenthetical format at the end.
    - **Example:**
        - **Original Text:** The primary challenges identified include the unauthorized practice of law (UPL) when handling contracts...
        - [cite_start]**Refined Text:** The primary challenges identified include the unauthorized practice of law (UPL) when handling contracts[cite: 192].
- **Step 4: Consolidate and Format**
    - Compile all the newly rewritten, cited sentences into a new, clean document.
    - Ensure all original headings, lists, and other markdown formatting from the source document are preserved.
- **Step 5: Deliver Final Output**
    - Provide the complete, refined document as the final output, ready for the next stage of the workflow.

**UPDATED: Add context engineering—use file memory (save interim scans to files); recitation (repeat steps in prompts for focus). Use XML tagging (e.g., <document> for input, <refined> for output). Align with modularity—treat as specialized Claude Project for refinement step.**


(Word count: 298)

