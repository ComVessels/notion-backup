---
title: Aegis Report Generation Playbook
database: Playbooks
notion_id: 24780979-7b42-80ac-a31d-f4d320c637fb
last_updated: 2025-12-10T19:15:26.237Z
---

# Aegis Report Generation Playbook


# Aegis Report Generation Playbook


**File Name:** `Aegis_Report_Generation_Playbook_v1.4.md`**Version:** 1.4
**Date:** 2025-07-20
**Updated:** From v1.3—Content preserved verbatim with structural reformatting for RAG optimization (200-500 word chunks, XML tagging, bold keywords per Context Engineering Guide v1.1) using Aegis Knowledge Base Universal Reformatter Prompt v3.
**Status:** Active
**Owner:** Michael Bono
**Path:** `/Annexes/Playbooks/Aegis_Report_Generation_Playbook_v1.4.md`**Dependencies:** `Aegis_Blueprint_v5.2.md`**Document Type:** playbook
**Domain:** report\_generation
**Prerequisites:** aegis\_blueprint, context\_engineering\_guide
**Related Documents:** `/Annexes/Methodologies/Context_Engineering_Guide_v1.0.md`, `/Annexes/Playbooks/Project_Management_with_Context_Engineering_Playbook_v1.0.md`, `/Annexes/Playbooks/Aegis_Claude_Project_Development_Playbook_v1.1.md`**Aegis Context:** maritime\_report\_generation
**Compliance Requirements:** hallucination\_mitigations, rag\_optimization
**AI Parse Level:** Advanced


## Table of Contents

1. [Introduction](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=247809797b4280aca31df4d320c637fb&pm=s#introduction)
2. [The Report Generation Workflow](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=247809797b4280aca31df4d320c637fb&pm=s#the-report-generation-workflow)
3. [Additional Methodology Notes](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=247809797b4280aca31df4d320c637fb&pm=s#additional-methodology-notes)
4. [Phase 1: Client Discovery & Constraint Identification](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=247809797b4280aca31df4d320c637fb&pm=s#phase-1-client-discovery--constraint-identification)
5. [Phase 2: Preliminary Intelligence Briefing (PIB)](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=247809797b4280aca31df4d320c637fb&pm=s#phase-2-preliminary-intelligence-briefing-pib)
6. [Phase 3: Human-in-the-Loop Strategy Session](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=247809797b4280aca31df4d320c637fb&pm=s#phase-3-human-in-the-loop-strategy-session)
7. [Phase 4: Unconstrained Deep Research](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=247809797b4280aca31df4d320c637fb&pm=s#phase-4-unconstrained-deep-research)
8. [Phase 5: Final Synthesis & Tailored Formatting](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=247809797b4280aca31df4d320c637fb&pm=s#phase-5-final-synthesis--tailored-formatting)
9. [Phase 6: Structured Refinement & Validation](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=247809797b4280aca31df4d320c637fb&pm=s#phase-6-structured-refinement--validation)

---


## Introduction


**Strategic reports** at Aegis follow a six-phase pipeline grounded in Blazing Zebra methods, adapted to maritime and legal advisory workflows. This playbook merges the previous `Aegis_AI_System_Methodology_v1.0.md` and integrates Claude-based XML prompting, Dify-based KB agents, and context engineering principles.


---


## The Report Generation Workflow


All six phases operate sequentially, but allow overlap where automation permits. Each phase includes:

- Modular **Claude Projects** and **Dify agents**
- Explicit hallucination mitigation protocols
- Context persistence via GitHub + Notion
- Visual augmentation (Blazing Zebra mind maps)

---


## Additional Methodology Notes

- Gem development protocols have been deprecated in favor of Claude Projects (see: `Aegis_Claude_Project_Development_Playbook_v1.1.md`).
- The central **Context Engine** is integrated into Dify KB with automated syncs via n8n.
- For any deviation in prompt formats, fallback to `Claude_Prompting_Best_Practices_v1.1.md`.

---


## Phase 1: Client Discovery & Constraint Identification


**Define the problem clearly** using structured inputs: audience, goals, deliverable type, constraints. Use Blazing Zebra discovery models (stakeholder maps) and Claude recitation prompts to avoid goal drift.


\<code\_example>


<instructions>
Define: problem, audience, desired output, constraints.
</instructions>
</code_example>


<important>


Use Dify for discovery agents; apply fallback prompts to mitigate hallucinations in early scoping.


</important>


---


## Phase 2: Preliminary Intelligence Briefing (PIB)


**Meta-prompting technique** is used to generate a second prompt for deep research. Avoid premature constraints—focus on maximal fact discovery.


<thinking>


The PIB is used to surface hidden assumptions, create research scaffolds, and accelerate onboarding of Claude/Dify agents.


</thinking>


\<code\_example>


<meta>
Prompt goal: generate prompt for deep research into [insert topic].
</meta>
</code_example>


<important>


Use Claude Projects with `<instructions>` for meta scaffolding; integrate n8n for sprint automation.


</important>


---


## Phase 3: Human-in-the-Loop Strategy Session


**Review early outputs** with domain experts (e.g., Bono, Hardberger). Mind maps should be used to structure questions and detect theme gaps.


<answer>


This phase defines the problem direction for deep research (Phase 4) and final synthesis (Phase 5).


</answer>

- Claude projects log feedback in `[[]]` notation
- Manus-style role prompts for expert simulation
- Visual cues via AI-generated maps or Notebook LM

---


## Phase 4: Unconstrained Deep Research


**Run unconstrained agents** on long-form research queries. Use Claude, OpenManus, or Gemini as needed. All results must:

- Include inline citations
- Preserve formatting for markdown ingestion
- Be saved to GitHub and Notion for memory augmentation

\<code\_example>


<research>
Initiate: 20k-word open-ended brief on [topic]. Use inline cites. Save versioned output.
</research>
</code_example>


<important>


All intermediate results are memory assets and should be cached for future retrieval.


</important>


---


## Phase 5: Final Synthesis & Tailored Formatting


**Synthesize raw research** into a narrative aligned to client preferences (e.g., owner-operator maritime buyer vs. legal firm). Use layout prompt templates, visual diagrams, and RAG-enhanced formatting.

- Claude handles structure
- Dify handles visuals or microsite
- Output is validated against hallucination checklist

\<code\_example>


<layout>
Generate report draft using section template A. Optimize for scan-read, RAG retrievability.
</layout>
</code_example>


---


## Phase 6: Structured Refinement & Validation


**Edit and finalize** using an annotation-based review loop (`[[[...]]]`). Run outputs through Claude Projects with hallucination detection and structure checks.


<answer>


Final reports must be verifiable, self-contained, and modular for future re-ingestion.


</answer>


<important>


Use Dify validators; GitHub for source of truth; Notion for task tracking.


</important>


---


**End of Playbook**

