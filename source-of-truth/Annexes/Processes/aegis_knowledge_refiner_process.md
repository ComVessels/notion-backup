---
title: Aegis Knowledge Refiner Process
database: Processes
notion_id: 24780979-7b42-803e-9bfd-c83ec2078c10
last_updated: 2025-12-24T13:18:37.785Z
---

# Aegis Knowledge Refiner Process


# Aegis Knowledge Refiner Process


**File Name:** `Aegis_Knowledge_Refiner_Process_v1.3.md`**Version:** 1.3
**Date:** 2025-07-20
**Updated:** From v1.2—Content preserved verbatim with structural reformatting for RAG optimization (200-500 word chunks, XML tagging, bold keywords per Context Engineering Guide v1.1) using Aegis Knowledge Base Universal Reformatter Prompt v3.
**Status:** Active
**Owner:** Michael Bono
**Path:** `/Annexes/Processes/Aegis_Knowledge_Refiner_Process_v1.3.md`**Dependencies:** `Aegis_Blueprint_v5.2.md`, `Claude_Prompting_Best_Practices_v1.1.md`**Document Type:** process
**Domain:** knowledge\_refinement
**Prerequisites:** aegis\_blueprint, claude\_prompting\_best\_practices
**Related Documents:** `/Annexes/Playbooks/Aegis_Claude_Project_Development_Playbook_v1.1.md`, `/Annexes/Methodologies/Context_Engineering_Guide_v1.0.md`**Aegis Context:** ai\_knowledge\_refinement
**Compliance Requirements:** rag\_optimization, context\_engineering
**AI Parse Level:** Structured


## Table of Contents

1. [Objective](https://www.notion.so/238809797b42809ea93ce2bd1a8abefa?v=238809797b42803f89b2000cb0cd8e50&p=247809797b42803e9bfdc83ec2078c10&pm=s#objective)
2. [Process Steps](https://www.notion.so/238809797b42809ea93ce2bd1a8abefa?v=238809797b42803f89b2000cb0cd8e50&p=247809797b42803e9bfdc83ec2078c10&pm=s#process-steps)
3. [Context Engineering Requirements](https://www.notion.so/238809797b42809ea93ce2bd1a8abefa?v=238809797b42803f89b2000cb0cd8e50&p=247809797b42803e9bfdc83ec2078c10&pm=s#context-engineering-requirements)
4. [Tagging & Formatting Standards](https://www.notion.so/238809797b42809ea93ce2bd1a8abefa?v=238809797b42803f89b2000cb0cd8e50&p=247809797b42803e9bfdc83ec2078c10&pm=s#tagging--formatting-standards)
5. [Example Citation Rewrite](https://www.notion.so/238809797b42809ea93ce2bd1a8abefa?v=238809797b42803f89b2000cb0cd8e50&p=247809797b42803e9bfdc83ec2078c10&pm=s#example-citation-rewrite)
6. [Common Issues & Mitigations](https://www.notion.so/238809797b42809ea93ce2bd1a8abefa?v=238809797b42803f89b2000cb0cd8e50&p=247809797b42803e9bfdc83ec2078c10&pm=s#common-issues--mitigations)
7. [Workflow Integration Notes](https://www.notion.so/238809797b42809ea93ce2bd1a8abefa?v=238809797b42803f89b2000cb0cd8e50&p=247809797b42803e9bfdc83ec2078c10&pm=s#workflow-integration-notes)
8. [XML Tag Guide](https://www.notion.so/238809797b42809ea93ce2bd1a8abefa?v=238809797b42803f89b2000cb0cd8e50&p=247809797b42803e9bfdc83ec2078c10&pm=s#xml-tag-guide)
9. [Annex & Version History](https://www.notion.so/238809797b42809ea93ce2bd1a8abefa?v=238809797b42803f89b2000cb0cd8e50&p=247809797b42803e9bfdc83ec2078c10&pm=s#annex--version-history)

---


## Objective


**Knowledge refinement** transforms raw intelligence documents (often outputs from research agents) into structured, human-readable Markdown by rewriting source markers into clean, inline citations.


<important>


The goal is to elevate readability while preserving accuracy and source traceability.


</important>


The Knowledge Refiner operates as a Claude Project with role-based instructions (e.g., “You are a professional editor”) and is framed for output handoff to the Report Drafter persona.


---


## Process Steps


**Refinement steps** follow a consistent five-phase workflow:

1. **Ingest Source Document**
    - Accept `.md` input containing research notes or raw output.
    - Wrap input in `<document>` tag for Claude.
2. **Scan for Source Markers**
    - Identify and extract raw citations (e.g., `[192]`, backtick format, or numeric endnotes).
3. **Rewrite and Embed Citations**
    - Rewrite sentence to include `(cite: ###)` after the relevant phrase or at sentence end.
4. **Consolidate into Refined Output**
    - Reassemble into clean document.
    - Maintain original Markdown structure (headings, lists, etc.).
5. **Deliver Output**
    - Wrap final output in `<refined>` XML tag for downstream use.
    - Output should be free from original markers.

\<code\_example>


# Before


The broker may face UPL risks. \[192]


# After


The broker may face UPL risks (cite: 192).
\</code\_example>


---


## Context Engineering Requirements


**Memory and prompt structure** are engineered to optimize for KV caching and Claude chain resilience.

- Save scans or outputs to file memory (e.g., Mem0)
- Use repeat-recitation method: repeat all 5 steps in Claude prompt preamble
- Build fallback: If citation cannot be placed cleanly, flag with `[ref_check_needed]`
- Append metadata tags to Claude output for post-handoff validation

---


## Tagging & Formatting Standards


| Tag              | Purpose                         |
| ---------------- | ------------------------------- |
| `<document>`     | Input container (raw notes)     |
| `<refined>`      | Output container (final doc)    |
| `<cite>`         | Embedded citations, inline only |
| `<thinking>`     | Reasoning during audit/debug    |
| `<code_example>` | Before/after transformations    |


All tags must remain unbroken across sections and be Claude-safe (XML compliant).


---


## Example Citation Rewrite


<example>


**Raw Input:**


This technique helps mitigate risk. [198]


**Refined Output:**
This technique helps mitigate risk (cite: 198). </example>


<thinking>


Citation should follow the last full sentence of any paragraph containing a source number unless otherwise specified.


</thinking>


---


## Common Issues & Mitigations


| Issue                     | Mitigation                                    |
| ------------------------- | --------------------------------------------- |
| Multiple citations inline | Place them at sentence end as comma-separated |
| Ambiguous numbers         | Use `[ref_check_needed]` flag                 |
| Loss of formatting        | Preserve all Markdown structures manually     |
| Skipped headings          | Ensure heading-level structure retained       |
| Claude hallucination      | Include directive: “Do not invent content”    |


<important>


The final document must retain full contextual alignment with the source while improving clarity.


</important>


---


## Workflow Integration Notes

- **Downstream:** Refined output is consumed by the **Report Drafter** agent.
- **Upstream:** Input typically comes from Claude Projects (Deep Research), Grok 4 scans, or Gemini notes.
- **Storage:** Use GitHub for persistent records; Mem0 for intermediate memory in Claude flows.
- **Versioning:** Final outputs should be logged with version headers and paths before SoT commit.

---


## XML Tag Guide


\<code\_example>


<document>
The broker may face UPL risks. [192]
</document>


<refined>
The broker may face UPL risks (cite: 192).
</refined>
</code_example>


<answer>


Always wrap your final output in `<refined>` and retain complete structure and inline citations.


</answer>


---


## Annex & Version History

- **Source Protocols:**
    - `Aegis_Claude_Project_Development_Playbook_v1.1.md`
    - `Context_Engineering_Guide_v1.0.md`
    - `Claude_Prompting_Best_Practices_v1.1.md`
- **v1.2 Updates:**
    - Refactored structure for chunking
    - Added XML scaffolding and tagging rules
    - Incorporated context engineering patterns
    - Cleaned SOPs for use in Claude Projects

---


**End of Refiner Process**

