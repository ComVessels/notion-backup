---
title: RAG Document Processing Guide
database: Guides
notion_id: 24880979-7b42-8066-9671-f886c1e21642
last_updated: 2026-02-05T08:08:06.402Z
---

# RAG Document Processing Guide


# RAG Document Processing Guide


**File Name:** `RAG_document_processing_guide_v1.2.md`**Version:** 1.2
**Date:** 2025-08-05
**Updated:** From v1.1—Content preserved verbatim with structural reformatting for RAG optimization (200-500 word chunks, XML tagging, bold keywords per Context Engineering Guide v1.1) using Aegis Knowledge Base Universal Reformatter Prompt v4.
**Status:** Active
**Owner:** Michael Bono
**Path:** `/Annexes/Guides/RAG_document_processing_guide_v1.2.md`**Dependencies:** `Context_Engineering_Guide_v1.1.md`, `aegis-reformatter-prompt-v2.md`, `Knowledge_Management_Standards_v1.5.md`, `Claude_Prompting_Best_Practices_v1.1.md`**Document Type:** guide
**Domain:** document\_processing
**Prerequisites:** access\_to\_reformatter\_prompt, llm\_access
**Related Documents:** `Dify_Configuration_Guide_v1.1.md`**Aegis Context:** rag\_optimization, xml\_structuring
**Compliance Requirements:** aegis\_standards, github\_markdown, xml\_tagging
**AI Parse Level:** Operational


## Table of Contents

1. [RAG Optimization Overview](https://www.notion.so/240809797b4280d3aa1ef647a567776b?v=240809797b42811e85f0000c39f57e72&p=248809797b4280669671f886c1e21642&pm=s#rag-optimization-overview)
2. [Formatting Requirements](https://www.notion.so/240809797b4280d3aa1ef647a567776b?v=240809797b42811e85f0000c39f57e72&p=248809797b4280669671f886c1e21642&pm=s#formatting-requirements)
3. [XML Tagging Guidelines](https://www.notion.so/240809797b4280d3aa1ef647a567776b?v=240809797b42811e85f0000c39f57e72&p=248809797b4280669671f886c1e21642&pm=s#xml-tagging-guidelines)
4. [Two-Phase Processing Workflow](https://www.notion.so/240809797b4280d3aa1ef647a567776b?v=240809797b42811e85f0000c39f57e72&p=248809797b4280669671f886c1e21642&pm=s#two-phase-processing-workflow)
5. [LLM Model Selection](https://www.notion.so/240809797b4280d3aa1ef647a567776b?v=240809797b42811e85f0000c39f57e72&p=248809797b4280669671f886c1e21642&pm=s#llm-model-selection)
6. [Validation Checklist](https://www.notion.so/240809797b4280d3aa1ef647a567776b?v=240809797b42811e85f0000c39f57e72&p=248809797b4280669671f886c1e21642&pm=s#validation-checklist)
7. [Error Mitigation Patterns](https://www.notion.so/240809797b4280d3aa1ef647a567776b?v=240809797b42811e85f0000c39f57e72&p=248809797b4280669671f886c1e21642&pm=s#error-mitigation-patterns)
8. [Batch Processing Strategy](https://www.notion.so/240809797b4280d3aa1ef647a567776b?v=240809797b42811e85f0000c39f57e72&p=248809797b4280669671f886c1e21642&pm=s#batch-processing-strategy)
9. [Version Control Procedures](https://www.notion.so/240809797b4280d3aa1ef647a567776b?v=240809797b42811e85f0000c39f57e72&p=248809797b4280669671f886c1e21642&pm=s#version-control-procedures)

---


## RAG Optimization Overview (200–500 words)


**Retrieval-Augmented Generation (RAG)** requires precision formatting for effective indexing and query response. Every document processed for the Source of Truth (SoT) must undergo a dual-phase approach—first for content creation, then for structural optimization.


**Primary Objective**: Separate creative authorship from rigid reformatting to meet all Aegis document compliance and XML tagging standards.


<important>


Only documents fully compliant with v1.5 KM standards and v1.1 XML prompting will qualify for RAG ingestion in Dify.


</important>


This guide models correct structure and serves as a reference implementation.


---


## Formatting Requirements (200–500 words)


**All documents must comply** with the following to meet RAG ingestion criteria:

- **Metadata Header**: Complete per KM v1.5, version ≥ v1.2, ISO date, and SoT path
- **Outline**: Exactly 9 lines in TOC
- **Chunking**: 200–500 words per section (no exceptions)
- **Bold First Keywords**: Begin each section accordingly
- **Citation Retention**: Use `[n]` or `[]` format
- **Flags for Uncertainty**: Use `[Additional verification needed]`
- **Term Correction**: Replace "S\&P" with **"SnP"**
- **Markdown Compliance**: No HTML, tables align in GitHub preview
- **Link Validation**: Test all external links, log failures
- **End Marker**: Required for every guide/report

\<code\_example>


# Example Section Title


**First keyword** launches this chunk...


\[Content within 200-500 words follows.]


\</code\_example>


<thinking>


Strict format adherence ensures downstream parsing integrity in GitHub, Notion, and Claude pipelines.


</thinking>


---


## XML Tagging Guidelines (200–500 words)


**XML tags standardize RAG extraction.** Use tags precisely:


| Tag              | Use Case                  |
| ---------------- | ------------------------- |
| `<important>`    | Requirements, warnings    |
| `<code_example>` | Code blocks               |
| `<thinking>`     | Reasoning, interpretation |
| `<answer>`       | Direct solutions          |
| `<example>`      | Illustrative cases        |
| `<context>`      | Background/explanation    |


\<code\_example>


## Configuration Phase


**System setup** starts with validating preconditions...


<important>


Back up before applying any live configurations.


</important>


\<code\_example>
def configure():
validate\_inputs()
commit\_changes()
\</code\_example>


<context>


This approach prevents data loss from unexpected failures.


</context>


\</code\_example>


<answer>


When XML tags are embedded inside properly chunked Markdown, Dify indexing becomes seamless.


</answer>


---


## Two-Phase Processing Workflow (200–500 words)


**Phase 1: Content Creation**

- Focus on full knowledge transfer
- Prioritize clarity and accuracy
- Ignore formatting and length at this stage

**Phase 2: RAG Reformatting**

- Apply `aegis-reformatter-prompt-v2.md`
- Use ChatGPT-4 or Claude 3.5
- Break into valid chunk sizes
- Add XML tags, flags, and metadata

<example>


Workflow:


Raw → Prompted Reformatter → Validated Markdown → GitHub → Dify Index


</example>


---


## LLM Model Selection (200–500 words)


**Primary LLM:** ChatGPT-4

- **Pros**: Stable formatting, chunk-count reliability
- **Settings**: Temperature = 0.2, full prompt injected
- **Format**: Markdown output only

**Alternative:** Claude 3.5 Sonnet

- Good for complex logic
- Requires more precise prompts for chunking

**Avoid:** Gemini

- Fails on chunking, citations, tag consistency

<important>


Never skip XML tagging validation if Claude merges section logic unexpectedly.


</important>


---


## Validation Checklist (200–500 words)


\<code\_example>


# Metadata

- [x] Version ≥ v1.2
- [x] ISO Date
- [x] SoT Path Specified
- [x] All fields populated

# Structure

- [x] 9-point TOC
- [x] 200–500 word chunks
- [x] First keyword bolded
- [x] Citations preserved
- [x] "SnP" consistency
- [x] Verification flags

# XML Tags

- [x] All required tags present
- [x] Properly closed and scoped
- [x] No tag overlap across sections

\</code\_example>


<thinking>


Use the checklist as a gatekeeper before moving any file to `/source-of-truth/`.


</thinking>


---


## Error Mitigation Patterns (200–500 words)


**Common Errors**:


| Issue                | Cause                  | Fix                          |
| -------------------- | ---------------------- | ---------------------------- |
| Long sections        | Author forgot chunking | Apply natural breaks at 250w |
| Missing bold keyword | Formatting oversight   | Insert at section start      |
| HTML Tags            | Misuse of `<b>`, `<i>` | Convert to Markdown/XML      |
| XML Breaks           | Nested tags            | Flatten and close tags       |


<example>


✅ Correct:


<answer>Direct fix to Dify webhook issues.</answer>


❌ Incorrect:


<b>Direct fix</b> embedded in raw HTML


</example>


<important>


If corruption occurs, revert to v1.0 and apply prompt on smaller sections.


</important>


---


## Batch Processing Strategy (200–500 words)


**When handling multiple documents**:

1. Prioritize by project or client need
2. Use a single LLM for uniformity
3. Validate one file fully before batch rollout
4. Log anomalies during early runs
5. Store errors in `/Logs/ReformattingFailures/`

\<code\_example>


# Batch Processing Pseudocode


for doc in queue:
output = reformat(doc, prompt)
if validate(output):
commit(output)
else:
send\_to\_review(doc)
\</code\_example>


---


## Version Control Procedures (200–500 words)


**Naming Conventions**:

- Draft: `filename-v1.0.md`
- Reformatted: `filename-v1.2.md`
- Archive: `/Archives/Pre-RAG/filename-v1.0.md`

**Git Protocol**:


```bash
git add filename-v1.2.md
git commit -m "RAG: Reformat filename to v1.2 per Aegis KM v1.5"
```


<context>


Consistent versioning protects upstream indexing logic and compliance tracking.


</context>


---


**End of Guide**

