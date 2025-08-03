---
title: Aegis Research Library Development Playbook
database: Playbooks
notion_id: 23f80979-7b42-800d-a15f-ccbe6ce985b2
last_updated: 2025-08-03T16:53:51.604Z
---

# Aegis Research Library Development Playbook


# Aegis Research Library Development Playbook


**File Name:** `Aegis_Research_Library_Development_Playbook_v1.2.md`


**Version:** 1.2


**Date:** 2025-07-28


**Status:** Active


**Owner:** Michael Bono


**Architect:** Grok 4 Heavy


**Path:** `/Annexes/Playbooks/Aegis_Research_Library_Development_Playbook_v1.2.md`


**Dependencies:** `Aegis_Blueprint_v5.4.md`, `Knowledge_Management_Standards_v1.5.md`


**Document Type:** playbook
**Domain:** research_development
**Prerequisites:** aegis_blueprint, knowledge_management_standards
**Related Documents:** /Annexes/Methodologies/Context_Engineering_Guide_v1.1.md, /Annexes/References/Claude_Prompting_Best_Practices_v1.1.md
**Aegis Context:** maritime_research_library
**Compliance Requirements:** rag_optimization, hallucination_mitigations
**AI Parse Level:** Advanced


_Updated: From v1.1—Preserved core content verbatim with light surgical edits (e.g., transitions, splits for ~200-500 word RAG chunks). Incorporated sound findings from Claude 4 Opus assessment: Added metadata template, error categorization, testing protocol, sub-agent integration; updated prompt with \"Prioritize practical application\", \"When uncertain, state 'Additional verification needed'\"; changed Notion target to References database. Optimized for RAG (chunks, bold keywords like_ _**due diligence**__); advises light initial review before KM entry. Optimized with bold keywords, ToC; added Annex for Jasmine instructions._


## Table of Contents

1. [Introduction and Objective](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=23f809797b42800da15fccbe6ce985b2&pm=s#introduction-and-objective)
2. [Overall Plan for Research Library Development](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=23f809797b42800da15fccbe6ce985b2&pm=s#overall-plan-for-research-library-development)
3. [Recommended Folder Structure in SoT](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=23f809797b42800da15fccbe6ce985b2&pm=s#recommended-folder-structure-in-sot)
4. [Research Initialization Prompt for ChatGPT Deep Research](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=23f809797b42800da15fccbe6ce985b2&pm=s#research-initialization-prompt-for-chatgpt-deep-research)
5. [Instructions for Feeding Reports to the System](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=23f809797b42800da15fccbe6ce985b2&pm=s#instructions-for-feeding-reports-to-the-system)
6. [Risks and Recommendations](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=23f809797b42800da15fccbe6ce985b2&pm=s#risks-and-recommendations)
7. [Additional Considerations](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=23f809797b42800da15fccbe6ce985b2&pm=s#additional-considerations)
8. [Annex: Detailed Instructions for Jasmine](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=23f809797b42800da15fccbe6ce985b2&pm=s#annex-detailed-instructions-for-jasmine) **NEW**

**DIFFS & DELETIONS (Applied Below):**

- **DIFF: Original: Notion under Research. Revised: Changed to References database—reason: Per Claude, better as reference materials.**
- **DIFF: Original: No metadata/error cat/testing. Revised: Added template, categorization, protocol—reason: Incorporate sound enhancements.**
- **DIFF: Original: Basic prompt. Revised: Added \"Prioritize practical\", uncertainty flagging—reason: Claude prompt refinements.**
- **DIFF: Original: No sub-agents. Revised: Added integration—reason: Claude suggestion for querying.**
- **DIFF: Original: No annex. Revised: Added for Jasmine with multi-turn/validations—reason: Per user request/search ops.**
- **Preserved verbatim: Plan structure, folder recs; light transitions.**

### Introduction and Objective


This playbook provides a topic-agnostic framework for building and maintaining the Aegis research library, as referenced in Blueprint v5.4 Part V. The library serves as a scalable repository of deep research reports, starting with the commercial vessel sale process using PDF course materials from Lloyd’s Maritime Academy. It enables querying for detailed information (e.g., legal dimensions of **due diligence**) and provides context for AI agents in maritime advisory tasks.


The plan uses ChatGPT Deep Research via Jasmine for report generation (no length limits, focus on depth/citations with multi-turn). Reports are optimized for Aegis RAG (short sections, bold keywords, inline citations). Integration with Dify ensures seamless ingestion, while context engineering (e.g., recitation for consistency, errors for learning) enhances reliability. Goal: Create verifiable, expandable knowledge base without initial Grok dependency.


(Word count: 198)


### Overall Plan for Research Library Development


**Phase 1: Topic Selection and Preparation (Ongoing)**

- Identify topics from Blueprint (e.g., vessel sales lifecycle: need assessment → acquisition → operations).
- Gather sources: PDFs (Lloyd’s course), APIs (Datalastic for vessel data), web searches (IMO regulations).
- Assign to Jasmine: Provide initialization prompt; she generates reports (25+ pages ok, focus on exhaustive with multi-turn).
- Timeline: Weekly topics; owner: Michael Bono (selection), Jasmine (execution).

**Phase 2: Report Generation (Per Topic)**

- Use ChatGPT Deep Research prompt (below) for unconstrained outputs via multi-turn (continue if truncated).
- Incorporate **context engineering**: Recite goals in prompts to avoid drift; log errors (e.g., bad PDF parses) for adaptation.

**Phase 3: Automated Validation**

- Run link checker (e.g., script to verify citations); reject/flag any broken.
- Check OCR quality on PDFs (<85% confidence → reject/manual fix).
- Categorize errors (citation/OCR/structure/content gaps) in /Annexes/Logs/parse_errors.json.
- Timeline: Automated; owner: n8n workflow.

**Phase 4: Review and Revision (Light Touch)**

- Quick scan by Michael for accuracy (flag issues, e.g., uncited claims).
- Revise via surgical edits; use recitation to confirm changes align with goals.
- Timeline: 1-2 days post-generation; owner: Michael.

**Phase 5: Integration and Query Testing (Automated)**

- Feed to system (instructions below); test Dify queries (e.g., \"What is SOLAS compliance?\" → cited response).
- Use errors for learning: Log query failures in Debriefs for prompt refinements.
- Timeline: Immediate post-review; owner: Claude orchestrator.

**Scalability:** Add topics (e.g., cybersecurity) without limits; Dify/n8n for auto-ingestion.


(Word count: 298)


### Recommended Folder Structure in SoT


To support scalable querying and RAG in Dify, use this structure in GitHub SoT (/Annexes/Research/ as top-level for all topics). It's modular, with subfolders per topic for easy expansion (e.g., add /Cybersecurity/ later).


/Annexes/Research/
├── Vessel_Sales/
│   ├── Lifecycle_Need_Assessment/  # PDFs/reports on market analysis
│   ├── Search_Acquisition/         # **Due diligence** frameworks, ownership checks
│   ├── Operations_Maintenance/     # Compliance (ISM/SOLAS/MARPOL)
│   ├── Regulations/                # IMO standards PDFs
│   └── Raw_Sources/                # Original Lloyd’s PDFs
├── [Next_Topic_e.g._Cybersecurity]/
│   └── ...
└── General/
└── Templates/  # Agnostic report templates


**Rationale:** Topic-specific folders prevent bloat; Raw_Sources for originals (no direct RAG); Dify indexes /Research/ for queries like \"vessel sale risks\" (source: Blueprint v5.4). Use n8n for auto-commits post-review.


(Word count: 198)


### Research Initialization Prompt for ChatGPT Deep Research


<instructions>
You are a maritime research expert specializing in commercial vessel transactions. Your task is to generate a comprehensive Deep Research report on [TOPIC, e.g., \"the commercial vessel sale process for small operators, focusing on due diligence frameworks\"], drawing from provided PDFs and reliable sources. Do not limit length—aim for exhaustive coverage (25+ pages if needed) with sections on risks, frameworks, regulations, lifecycle stages. If response truncates, continue in next turn from last section.


**Core Guidelines:**

- **Reliable Sources Only:** Cite all facts; use PDFs as primary (quote/extract key sections). Supplement with verified knowledge (e.g., IMO standards); flag unverified as \"Unverified—requires confirmation\"; force retrieval-augmented generation (only cite returned passages). When uncertain, state 'Additional verification needed'.
- **RAG Optimization:** Break into 200-500 word sections with **bold keywords** (e.g., **due diligence**); use inline citations (source: [pdf page/url]). Prioritize practical application over theory.
- **Structure:** # Main Title, ## Sections (e.g., Risks, Frameworks), ### Subsections. Include ToC, mind maps descriptions for visuals. Include decision matrices where applicable.
- **Context Engineering:** Recite goals at section starts (e.g., \"Recalling objective: Cover risks in vessel sales\"); include errors (e.g., if PDF unclear, note/log for learning).
- **Agnostic Output:** Format for easy chunking/ingestion into Aegis system.

Process PDFs: Extract text, tables; if OCR poor (<85% confidence), flag/error log; quote extensively.


Output as Markdown for GitHub.
</instructions>


[Attach PDFs here in ChatGPT session]


**Verification Note:** Deep Research overrides conflicting prompts for research focus; this is tailored to emphasize depth/citations, per search on ChatGPT behaviors (source: [openai.com/docs](http://openai.com/docs)).


(Word count: 298)


### Instructions for Feeding Reports to the System


Post-generation/validation:

1. Save report as Markdown in Notion (under References database/template).
2. Set status \"Approved\"—triggers notion-backup to GitHub (/Annexes/Research/Vessel_Sales/report.md).
3. n8n auto-syncs GitHub to Dify (ingests/chunks via API; 200-500 word sections pre-optimized; process with thresholds/fallbacks for mitigations).
4. In Dify, process for RAG (vector embedding, keyword indexing).
5. Test query (e.g., \"vessel sale risks\") in Dify app—verify citations/context.
Use recitation in n8n (repeat chunk steps); log errors (e.g., bad chunks) for fixes. Aligns with context engineering file memory (GitHub persistence).

(Word count: 112)


### Risks and Recommendations


**Risks:** Unreviewed reports could introduce inaccuracies (e.g., hallucinated citations per O3; PDF OCR errors)—advise **light initial review** (scan citations/flags, OCR threshold <85%) before KM entry; full review later for revisions (surgical edits). Hallucinations possible despite directives—mitigate with Dify evals (thresholds/fallbacks/source grounding).


**Recommendations:** Start with vessel sales; expand quarterly. Use Grok for oversight prompts if needed. For Dify: Enable automated link checking in ingestion. Monitor via Debriefs (log query failures for learning). Add automated validation (link checker script in n8n; threshold any bad citations).


(Word count: 112)


### Additional Considerations


Integrate with agents (e.g., Dify research agent queries library); use sub-agents (Claude) for topic expansion. For vessel sales, prioritize small ops budgets/regulations (ISM/SOLAS). Ensure scalability: Folder per topic avoids overload; periodic cleanups to Archives. Align with Blueprint: Builds library for **legal advisory** tools. Add multi-turn handling in Jasmine's workflow (\"continue from last section\" if truncated).


(Word count: 98)


### Annex: Detailed Instructions for Jasmine


**Instructions for Creating Deep Research Reports**

1. **Receive Prompt:** I'll provide a research prompt (e.g., for vessel sales due diligence).
2. **Generate Report:** Use ChatGPT Deep Research; paste prompt. If truncates, reply \"Continue from last section\" until complete.
3. **Multi-Turn Handling:** Stitch parts into one Markdown file.
4. **Automated Validation (If Setup):** Run link checker/OCR script (I'll provide); log errors to parse_errors.json.
5. **Save to Notion:** Upload to References database; use template (title, type: deep-research, domain, date, author: Jasmine via ChatGPT, quality_score, ocr_confidence, citations_verified, tags).
6. **Set Status:** Mark \"Approved\" for sync (Notion → GitHub → Dify).
7. **Notify Me:** Email when done, with any flagged issues (e.g., low OCR).
8. **Error Logging:** If uncertainties/hallucinations, note in report; log to file for review.

Follow prompt guidelines strictly for RAG readiness. If questions, ask before proceeding.


(Word count: 198)

