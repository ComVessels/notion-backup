---
title: Aegis Auditor Process
database: Processes
notion_id: 24780979-7b42-80fb-bbd8-c958d9fb00f0
last_updated: 2025-12-19T20:52:22.620Z
---

# Aegis Auditor Process


# Aegis Auditor Process


**File Name:** `Aegis_Auditor_Process_v1.2.md`**Version:** 1.2
**Date:** 2025-07-20
**Updated:** From v1.1—Content preserved verbatim with structural reformatting for RAG optimization (200-500 word chunks, XML tagging, bold keywords per Context Engineering Guide v1.1) using Aegis Knowledge Base Universal Reformatter Prompt v3.
**Status:** Active
**Owner:** Michael Bono
**Path:** `/Annexes/Processes/Aegis_Auditor_Process_v1.2.md`**Dependencies:** `Aegis_Blueprint_v5.2.md`, `Claude_Prompting_Best_Practices_v1.1.md`**Document Type:** process
**Domain:** technical\_audit
**Prerequisites:** aegis\_blueprint, claude\_prompting\_best\_practices
**Related Documents:** `/Annexes/Playbooks/Aegis_Claude_Project_Development_Playbook_v1.1.md`, `/Annexes/Methodologies/Context_Engineering_Guide_v1.0.md`**Aegis Context:** ai\_technical\_audit
**Compliance Requirements:** rag\_optimization, context\_engineering
**AI Parse Level:** Structured


## Table of Contents

1. [Objective](https://www.notion.so/238809797b42809ea93ce2bd1a8abefa?v=238809797b42803f89b2000cb0cd8e50&p=247809797b4280fbbbd8c958d9fb00f0&pm=s#objective)
2. [Process Steps](https://www.notion.so/238809797b42809ea93ce2bd1a8abefa?v=238809797b42803f89b2000cb0cd8e50&p=247809797b4280fbbbd8c958d9fb00f0&pm=s#process-steps)
3. [XML & Context Engineering Enhancements](https://www.notion.so/238809797b42809ea93ce2bd1a8abefa?v=238809797b42803f89b2000cb0cd8e50&p=247809797b4280fbbbd8c958d9fb00f0&pm=s#xml--context-engineering-enhancements)
4. [Example Application](https://www.notion.so/238809797b42809ea93ce2bd1a8abefa?v=238809797b42803f89b2000cb0cd8e50&p=247809797b4280fbbbd8c958d9fb00f0&pm=s#example-application)
5. [Audit Delivery Expectations](https://www.notion.so/238809797b42809ea93ce2bd1a8abefa?v=238809797b42803f89b2000cb0cd8e50&p=247809797b4280fbbbd8c958d9fb00f0&pm=s#audit-delivery-expectations)
6. [Tagging Guidelines](https://www.notion.so/238809797b42809ea93ce2bd1a8abefa?v=238809797b42803f89b2000cb0cd8e50&p=247809797b4280fbbbd8c958d9fb00f0&pm=s#tagging-guidelines)
7. [RAG Optimization Reminders](https://www.notion.so/238809797b42809ea93ce2bd1a8abefa?v=238809797b42803f89b2000cb0cd8e50&p=247809797b4280fbbbd8c958d9fb00f0&pm=s#rag-optimization-reminders)
8. [Common Pitfalls & Mitigations](https://www.notion.so/238809797b42809ea93ce2bd1a8abefa?v=238809797b42803f89b2000cb0cd8e50&p=247809797b4280fbbbd8c958d9fb00f0&pm=s#common-pitfalls--mitigations)
9. [Annex & Version History](https://www.notion.so/238809797b42809ea93ce2bd1a8abefa?v=238809797b42803f89b2000cb0cd8e50&p=247809797b4280fbbbd8c958d9fb00f0&pm=s#annex--version-history)

---


## Objective


**The primary goal** of the Aegis Auditor process is to evaluate the **technical validity** of implementation plans by auditing claims against verified external sources. These source documents may include technical plans, Claude Projects, or workflows involving tools like **Dify**, **n8n**, or **OpenManus**.


<important>


All claims must be verified using official documentation or trusted references.


</important>


The final audit output should retain the structure of the input plan, but replace each relevant technical claim with an **audited and cited version**, following the pattern outlined in this document.


---


## Process Steps


**Auditor execution** is based on a Claude Project or equivalent structured prompt chain:

1. **Ingest Source Document**
Receive a `.md` or `.txt` document for audit.
2. **Scan for Technical Claims**
Identify any declarative statements about software capabilities, agent behavior, pipeline logic, or tooling claims.
3. **Verify and Annotate**
Validate each claim using external documentation. Add citations in `(verified: source)` format.
4. **Consolidate**
Reproduce the source document's structure but replace each claim with its verified version.
5. **Deliver Audited Output**
Return final audit with `<audit>` tag wrapping all claim segments, formatted for revision or approval.

\<code\_example>


# Input


Dify supports real-time workflows.


# Output


<audit>Dify supports real-time workflows (verified: Dify Docs, Webhooks Section).</audit>
\</code\_example>


---


## XML & Context Engineering Enhancements


**Context engineering integration** improves audit consistency:

- Use `<plan>` for source inputs and `<audit>` for outputs.
- Use **recitation** within prompts: repeat key steps to maintain task alignment.
- Store intermediate audit results in file-based memory or versioned checkpoints.
- Include a checklist at each transition to ensure output validity.

<thinking>


This modular design supports both local Claude runs and multi-agent setups. Use plan memory for tool alignment and minimize drift across claims.


</thinking>


---


## Example Application


**Scenario:** A plan document claims: “n8n can trigger workflows based on incoming WhatsApp messages.”


<example>


Original:


“n8n can trigger workflows based on incoming WhatsApp messages.”


Audited: <audit>n8n can trigger workflows based on incoming WhatsApp messages (verified: n8n Docs – WhatsApp API Webhook Integration).</audit> </example>


<important>


Every audit must use verified, traceable references—no assumptions or undocumented capabilities.


</important>


---


## Audit Delivery Expectations


**Auditor outputs** should include the following:

- Inline `<audit>` tags for every claim segment.
- Block-level recitations for clarity if ambiguity is detected.
- Markdown integrity (all headers/lists/tables from input preserved).
- Citations in (verified: ...) format.
- Use of Claude-safe prompt structures if implemented programmatically.

---


## Tagging Guidelines


| Tag              | Use Case                              |
| ---------------- | ------------------------------------- |
| `<plan>`         | Wrap original source input            |
| `<audit>`        | Wrap validated claims with citation   |
| `<thinking>`     | For describing logic or reasoning     |
| `<code_example>` | Illustrate sample input/output        |
| `<example>`      | For real-world validation instances   |
| `<important>`    | Highlight audit-critical requirements |


---


## RAG Optimization Reminders

- Limit chunk size to **200–500 words**.
- Each chunk must stand alone with all required metadata.
- Favor **bullet formats** when identifying multiple claims.
- Avoid overlapping XML tags across chunk boundaries.
- Use bold formatting to highlight keywords in audit results.

---


## Common Pitfalls & Mitigations


| Pitfall                        | Mitigation Strategy                            |
| ------------------------------ | ---------------------------------------------- |
| Missing citation               | Pause audit, validate source, add (verified: ) |
| Invalid tool claim             | Flag with `[Additional verification needed]`   |
| Markdown corruption            | Use Claude XML tags to preserve structure      |
| Repetitive phrasing in outputs | Inject variation via prompt suffixes           |


---


## Annex & Version History

- **Sources:**
    - `Aegis_Claude_Project_Development_Playbook_v1.1.md`
    - `Context_Engineering_Guide_v1.0.md`
    - `Claude_Prompting_Best_Practices_v1.1.md`
- **Updated from v1.1:**
    - Added chunking, tags, examples, mitigation table, XML integration
    - Refactored “Steps” to align with modular Claude Project design
    - Updated file metadata and compliance references

---


**End of Auditor Process**

