---
title: Aegis Research Library Development Playbook
database: Playbooks
notion_id: 24780979-7b42-80da-a279-ce96b837e033
last_updated: 2025-12-20T07:44:52.970Z
---

# Aegis Research Library Development Playbook


# Aegis Research Library Development Playbook


**File Name:** `Aegis_Research_Library_Development_Playbook_v1.3.md`**Version:** 1.3
**Date:** 2025-07-28
**Updated:** From v1.2—Content preserved verbatim with structural reformatting for RAG optimization (200-500 word chunks, XML tagging, bold keywords per Context Engineering Guide v1.1) using Aegis Knowledge Base Universal Reformatter Prompt v3.
**Status:** Active
**Owner:** Michael Bono
**Path:** `/Annexes/Playbooks/Aegis_Research_Library_Development_Playbook_v1.3.md`**Dependencies:** `Aegis_Blueprint_v5.4.md`, `Knowledge_Management_Standards_v1.5.md`**Document Type:** playbook
**Domain:** research\_development
**Prerequisites:** aegis\_blueprint, knowledge\_management\_standards
**Related Documents:** `/Annexes/Methodologies/Context_Engineering_Guide_v1.1.md`, `/Annexes/References/Claude_Prompting_Best_Practices_v1.1.md`**Aegis Context:** maritime\_research\_library
**Compliance Requirements:** rag\_optimization, hallucination\_mitigations
**AI Parse Level:** Advanced


## Table of Contents

1. [Introduction and Objective](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=247809797b4280daa279ce96b837e033&pm=s#introduction-and-objective)
2. [Overall Plan for Research Library Development](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=247809797b4280daa279ce96b837e033&pm=s#overall-plan-for-research-library-development)
3. [Recommended Folder Structure in SoT](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=247809797b4280daa279ce96b837e033&pm=s#recommended-folder-structure-in-sot)
4. [Research Initialization Prompt for ChatGPT Deep Research](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=247809797b4280daa279ce96b837e033&pm=s#research-initialization-prompt-for-chatgpt-deep-research)
5. [Instructions for Feeding Reports to the System](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=247809797b4280daa279ce96b837e033&pm=s#instructions-for-feeding-reports-to-the-system)
6. [Risks and Recommendations](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=247809797b4280daa279ce96b837e033&pm=s#risks-and-recommendations)
7. [Additional Considerations](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=247809797b4280daa279ce96b837e033&pm=s#additional-considerations)
8. [Annex: Detailed Instructions for Jasmine](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=247809797b4280daa279ce96b837e033&pm=s#annex-detailed-instructions-for-jasmine)
9. [End of Playbook](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=247809797b4280daa279ce96b837e033&pm=s#end-of-playbook)

---


## Introduction and Objective


**Topic-agnostic framework** is the foundation of this playbook, which outlines the process of building and maintaining the Aegis research library. Referenced in Blueprint v5.4 Part V, the library starts with commercial vessel sale content, leveraging PDF materials from Lloyd’s Maritime Academy. It supports deep querying (e.g., legal aspects of **due diligence**) and provides reliable context for AI agents supporting maritime advisory services.


The research pipeline utilizes ChatGPT Deep Research through Jasmine, focusing on multi-turn engagement, exhaustive coverage, and verified sources. Outputs are chunked into short, citation-rich sections optimized for RAG ingestion. The system integrates with Dify and applies **context engineering** principles such as recitation and structured error logging to reinforce reliability.


<important>


All reports must emphasize verifiability, with multi-turn logic and citation enforcement built-in from the prompt phase. Avoid Grok dependence during initial iterations.


</important>


## Overall Plan for Research Library Development


**Five-phase pipeline** underpins the development of the research library, structured for repeatability and scalability across domains.


**Phase 1: Topic Selection and Preparation**

- Pull topics from Blueprint (e.g., vessel sale lifecycle).
- Collect PDFs, use APIs (e.g., Datalastic), and targeted web sources.
- Assign report generation to Jasmine with a custom prompt.
- Weekly cadence; responsibilities split between Michael Bono and Jasmine.

**Phase 2: Report Generation**

- Use Deep Research prompt supporting length-unconstrained, multi-turn dialogue.
- Embed **context engineering** (goal recitation, structured error notes).
- Prioritize cited facts and deep structural completeness.

**Phase 3: Automated Validation**

- Use link checkers and OCR confidence scanners.
- Any OCR <85% confidence triggers a flag or manual fix.
- Errors categorized into citation, structure, or content gaps.

**Phase 4: Light-Touch Review**

- Michael Bono performs an accuracy scan post-validation.
- Surgical edits apply where necessary, always aligning with original goal recitation.

**Phase 5: Integration and Testing**

- Feed approved reports into Dify via n8n automation.
- Query evaluation follows (e.g., “What is SOLAS compliance?”).
- Logs and errors are recycled into prompt improvements.

<thinking>


This plan ensures scalability while maintaining high-quality, verifiable knowledge creation. Multi-agent orchestration (Claude, Dify, n8n) ensures minimal human bottlenecks.


</thinking>


## Recommended Folder Structure in SoT


**GitHub-based modular architecture** allows scalable, topic-specific ingestion into Dify while avoiding repo bloat. Use the following format:


```plain text
/Annexes/Research/
├── Vessel_Sales/
│   ├── Lifecycle_Need_Assessment/
│   ├── Search_Acquisition/
│   ├── Operations_Maintenance/
│   ├── Regulations/
│   └── Raw_Sources/
├── Cybersecurity/
│   └── ...
└── General/
    └── Templates/
```


<important>


Store raw PDFs under `Raw_Sources`—not indexed for RAG. Dify will index `Research/` for relevant keyword queries.


</important>


<example>


A query like “vessel sale risks” will be resolved from `/Research/Vessel_Sales/Lifecycle_Need_Assessment/` and other subdirectories.


</example>


## Research Initialization Prompt for ChatGPT Deep Research


\<code\_example>


You are a maritime research expert specializing in commercial vessel transactions. Your task is to generate a comprehensive Deep Research report on \[TOPIC]. Use provided PDFs and verified sources. Do not limit length—aim for 25+ pages with detailed sections.


**Guidelines:**

- Cite facts explicitly.
- Flag unverified statements with: “Unverified—requires confirmation.”
- Chunk content into 200-500 words with **bold keywords**.
- Format: # Main Title, ## Sections, ### Subsections, ToC, decision matrices, visual aids.
- Recite goals at section starts.
- Note PDF or source issues (e.g., low OCR) explicitly.

Output: Markdown-formatted, structured for ingestion.


\</code\_example>


<answer>


This prompt enforces depth, structural consistency, and readiness for RAG without manual rework.


</answer>


## Instructions for Feeding Reports to the System


**System ingestion** is automated post-validation via the following steps:

1. Save Markdown report in Notion under "References".
2. Set status to **Approved** to trigger GitHub sync.
3. n8n syncs GitHub to Dify; Dify performs chunking and embedding.
4. Conduct post-ingestion query tests.
5. Use recitation and logging to monitor ingestion quality.

<context>


These steps are aligned with the Aegis Blueprint and context engineering best practices.


</context>


## Risks and Recommendations


**Risks** center around hallucinated citations and poor OCR inputs. These risks are most acute when unreviewed reports are ingested into the system.


**Recommendations:**

- Always perform a **light initial review** to flag issues.
- Use automated validation scripts to check citations and OCR scores.
- Enable fallback and threshold handling in Dify ingestion pipelines.
- Document all ingestion failures in Debriefs for corrective refinement.

<important>


Avoid ingesting hallucinated or poorly parsed reports directly into production—flag anything that fails the 85% OCR confidence threshold.


</important>


## Additional Considerations


**Integration with sub-agents** such as Claude or Jasmine is critical for scalability and topic diversification. Prioritize small-operator maritime use cases (e.g., ISM/SOLAS compliance).


<thinking>


Ensure modular topic expansion and archive pruning as needed. Long-term alignment with the Aegis Blueprint enables legal advisory integrations.


</thinking>


## Annex: Detailed Instructions for Jasmine


**Step-by-step generation flow** for Deep Research:

1. Receive custom prompt from Michael Bono.
2. Use Deep Research mode in ChatGPT (multi-turn).
3. Stitch multi-part replies into a single file.
4. Run validations (link checker, OCR).
5. Upload to Notion; use "References" database template.
6. Set status to **Approved** to trigger sync to GitHub/Dify.
7. Email flag report (if errors found).

\<code\_example>


Template fields:

- Title
- Type: deep-research
- Domain
- Date
- Author: Jasmine via ChatGPT
- OCR Confidence
- Citations Verified
- Tags

\</code\_example>


<important>


Flag any hallucinations or ambiguities immediately and log to `parse_errors.json`.


</important>


---


**End of Playbook**

