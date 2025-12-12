---
title: Claude Prompting Best Practices
database: References
notion_id: 24780979-7b42-8030-8834-e934112cce8b
last_updated: 2025-12-12T14:16:33.840Z
---

# Claude Prompting Best Practices


# Claude Prompting Best Practices


**File Name:** `Claude_Prompting_Best_Practices_v1.2.md`**Version:** 1.2
**Date:** 2025-07-19
**Updated:** From v1.1—Content preserved verbatim with structural reformatting for RAG optimization (200-500 word chunks, XML tagging, bold keywords per Context Engineering Guide v1.1) using Aegis Knowledge Base Universal Reformatter Prompt v3.
**Status:** Active
**Owner:** Michael Bono
**Path:** `/Annexes/References/Claude_Prompting_Best_Practices_v1.2.md`**Dependencies:** `Claude_OpenMemory_System_Brief_v1.1.md`**Document Type:** reference
**Domain:** prompting\_methodology
**Prerequisites:** access\_to\_claude\_api
**Related Documents:** `/Annexes/References/Claude_Available_Tools_v1.2.md`, `/Annexes/Playbooks/Aegis_Report_Generation_Playbook_v1.3.md`**Aegis Context:** prompt\_engineering
**Compliance Requirements:** xml\_tagging, cot\_output\_structuring
**AI Parse Level:** Strategic


## Table of Contents

1. [Core Prompting Principles](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=247809797b4280308834e934112cce8b&pm=s#core-prompting-principles)
2. [Effective Prompting Techniques](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=247809797b4280308834e934112cce8b&pm=s#effective-prompting-techniques)
3. [Prompt Structure Guidance](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=247809797b4280308834e934112cce8b&pm=s#prompt-structure-guidance)
4. [Common Pitfalls and Anti-patterns](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=247809797b4280308834e934112cce8b&pm=s#common-pitfalls-and-anti-patterns)
5. [Prompting by Task Type](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=247809797b4280308834e934112cce8b&pm=s#prompting-by-task-type)
6. [End of Reference](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=247809797b4280308834e934112cce8b&pm=s#end-of-reference)

---


## Core Prompting Principles


**Effective prompts** for Claude require explicitness, clarity, and structure. Claude behaves like a **brilliant but amnesiac assistant**, relying entirely on the user’s instruction.


### Golden Rule


<important>


If a colleague with no context wouldn’t understand your prompt, Claude won’t either.


</important>


### Key Philosophical Points

- **Clarity beats brevity** – be unambiguous
- **Context is essential** – include all necessary background
- **Structure influences output** – formatting affects results
- **Iterate to improve** – refine based on output
- **Don’t solve non-prompt problems with prompt engineering** – e.g., latency, cost

---


## Effective Prompting Techniques


### Role Prompting


Set Claude’s behavior using the `system` parameter to simulate domain experts. Use cases include legal, financial, creative, or instructional roles.


\<code\_example>
System: You are a senior maritime legal advisor...


User: <instructions>
Summarize vessel compliance risks from <document> in <answer> tags. </instructions>
\</code\_example>


### Few-Shot / Multishot Prompting


Use 3–5 diverse examples, wrapped in `<example>` tags (inside `<examples>`) to reinforce formatting, tone, and intent.


<example>


Good examples are **clear**, **varied**, and **relevant**.


</example>


### XML Tagging


<important>


Tags like `<context>`, `<instructions>`, `<example>`, `<thinking>`, `<answer>` dramatically improve Claude’s structure adherence.


</important>

- Keep tags consistent
- Use nested structure for clarity
- Enable easy parsing in downstream tools

### Chain-of-Thought (CoT)


Ask Claude to “think step-by-step” and structure its logic in `<thinking>` followed by `<answer>`.


\<code\_example>


<thinking>
Step 1: Identify the clause...
Step 2: Interpret the implication...
</thinking>


<answer>
The contract exposes the seller to UPL liability due to clause X.
</answer>
</code_example>:contentReference[oaicite:1]{index=1}


---


## Prompt Structure Guidance


### Six-Step Structure

1. **Set the Role** (`system` prompt)
2. **Provide Context** (`<context>`, `<document>` blocks)
3. **Give Examples** (`<examples>`, `<example>`)
4. **Provide Instructions** (`<instructions>`, step-by-step if needed)
5. **Enable Thinking** (`<thinking>` if complex)
6. **Specify Output Format** (`<formatting>` or JSON prefill)

\<code\_example>


<system>
You are a technical writer trained in maritime regulatory documentation.
</system>


<context>
Background on KYV protocols and due diligence.
</context>


<documents>
<document><source>KYV Whitepaper</source><document_content>...</document_content></document>
</documents>


<examples>
<example>...</example>
</examples>


<instructions>

1. Extract compliance patterns.
2. Output structured summary using <answer>.
</instructions>

<formatting>
JSON with keys: "summary", "quotes", "citations"
</formatting>
</code_example>:contentReference[oaicite:2]{index=2}


---


## Common Pitfalls and Anti-patterns


### Structural

- Mixing instructions/examples → **Use tags**
- Query at top → **Move to bottom**
- Trailing whitespace in prefills → **Will break**

### Content

- Implicit asks → Claude won’t infer
- Assumed knowledge → Always re-explain
- Overstuffed prompts → Chain them instead

### Technical

- Prefill + CoT = ⚠️ (incompatible modes)
- Don’t over-optimize prompts for latency issues

<thinking>


Use prompt chains and XML-structured memory across multi-turn tasks instead of single monolith prompts.


</thinking>:contentReference[oaicite:3]{index=3}


---


## Prompting by Task Type


| Task Type        | Best Practices                                                                |
| ---------------- | ----------------------------------------------------------------------------- |
| Text Generation  | Role + style examples + format tag                                            |
| Classification   | 3–5 labeled examples + explicit criteria                                      |
| Data Extraction  | XML-wrapped source + grounded quotes + prefilled JSON                         |
| Analysis         | Role + CoT structure + `<thinking>` + `<answer>` separation                   |
| Long Docs        | Source at top + chain-of-thought below + quotes first                         |
| Multi-Step Flows | Prompt chaining + clear subtasks with tag separation                          |
| Decision Making  | CoT + criteria list + nested `<options>` structure                            |
| Creative Writing | Role + inspirational examples + progressive refinement across chained prompts |


<answer>


Always separate reasoning (`<thinking>`) from decisions or deliverables (`<answer>`) to simplify post-processing.


</answer>


---


## End of Reference


This reference compiles Anthropic’s guidance and Aegis modifications for structured, Claude-optimized prompting. Use it for building memory-resilient, hallucination-mitigated, XML-compliant tasks across legal, maritime, and strategic domains.


---


**End of Reference**

