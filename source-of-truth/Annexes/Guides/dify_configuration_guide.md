---
title: Dify Configuration Guide
database: Guides
notion_id: 24880979-7b42-80e4-bcbc-c3fa20ad2d72
last_updated: 2026-02-27T10:07:04.609Z
---

# Dify Configuration Guide


# Dify Configuration Guide


**File Name:** `dify-config-guide-v1.0.md`**Version:** 1.0
**Date:** 2025-08-05
**Status:** Active
**Owner:** Michael Bono
**Path:** `/Annexes/Guides/dify-config-guide-v1.0.md`**Dependencies:** `Aegis_Blueprint_v5.4.md`, `Knowledge_Management_Standards_v1.5.md`**Document Type:** guide
**Domain:** dify\_platform\_configuration
**Prerequisites:** dify\_account, api\_keys, knowledge\_base
**Related Documents:** `Notion_GitHub_Dify_Pipeline_Debrief_v1.0.md`**Aegis Context:** rag\_system\_configuration
**Compliance Requirements:** data\_security, api\_management
**AI Parse Level:** Strategic


## Table of Contents

1. [Executive Summary](https://www.notion.so/240809797b4280d3aa1ef647a567776b?v=240809797b42811e85f0000c39f57e72&p=248809797b4280e4bcbcc3fa20ad2d72&pm=s#executive-summary)
2. [Workspace Configuration](https://www.notion.so/240809797b4280d3aa1ef647a567776b?v=240809797b42811e85f0000c39f57e72&p=248809797b4280e4bcbcc3fa20ad2d72&pm=s#workspace-configuration)
3. [Model Provider Settings](https://www.notion.so/240809797b4280d3aa1ef647a567776b?v=240809797b42811e85f0000c39f57e72&p=248809797b4280e4bcbcc3fa20ad2d72&pm=s#model-provider-settings)
4. [Knowledge Base Configuration](https://www.notion.so/240809797b4280d3aa1ef647a567776b?v=240809797b42811e85f0000c39f57e72&p=248809797b4280e4bcbcc3fa20ad2d72&pm=s#knowledge-base-configuration)
5. [Chatbot Application Structure](https://www.notion.so/240809797b4280d3aa1ef647a567776b?v=240809797b42811e85f0000c39f57e72&p=248809797b4280e4bcbcc3fa20ad2d72&pm=s#chatbot-application-structure)
6. [API Extensions and Integrations](https://www.notion.so/240809797b4280d3aa1ef647a567776b?v=240809797b42811e85f0000c39f57e72&p=248809797b4280e4bcbcc3fa20ad2d72&pm=s#api-extensions-and-integrations)
7. [Current Issues and Troubleshooting](https://www.notion.so/240809797b4280d3aa1ef647a567776b?v=240809797b42811e85f0000c39f57e72&p=248809797b4280e4bcbcc3fa20ad2d72&pm=s#current-issues-and-troubleshooting)
8. [Next Steps](https://www.notion.so/240809797b4280d3aa1ef647a567776b?v=240809797b42811e85f0000c39f57e72&p=248809797b4280e4bcbcc3fa20ad2d72&pm=s#next-steps)
9. [End of Guide](https://www.notion.so/240809797b4280d3aa1ef647a567776b?v=240809797b42811e85f0000c39f57e72&p=248809797b4280e4bcbcc3fa20ad2d72&pm=s#end-of-guide)

---


## Executive Summary


**This configuration guide** outlines the Dify platform setup used by the Aegis Knowledge Management System, which integrates a RAG-based knowledge base with a multi-model chatbot deployment. The application leverages providers including OpenAI, Anthropic, xAI, Gemini, and Cohere. A key configuration issue was identified: the system inaccurately labeled Gemini 2.5 Flash outputs as "Grok", stemming from fallback behavior in the provider priority system.


<important>


Ensure the correct model is prioritized in the provider list to avoid fallback misidentification.


</important>


The chatbot supports advanced contextual responses using indexed Notion documents synced via GitHub and enables user-level API management, document citation, and custom workflow integration.


## Workspace Configuration


**Workspace ownership and data source setup** define the foundation of Dify configuration. Currently, only one user—[**mbono@aegismaritime.law**](mailto:mbono@aegismaritime.law)—has Owner access with full administrative privileges.


### Key Workspace Details

- Member Count: 1/3 (2 remaining invites)
- Real-time session updates
- Permissions: Full control

### Data Sources


**Three data ingestion options** are available:

1. Notion (inactive but indirectly synced via GitHub)
2. Website with Jina Reader
3. Website with Firecrawl

<context>


The Notion pipeline uses n8n webhooks routed through GitHub, enhancing version control and auditability.


</context>


<important>


Notion is not connected directly—webhooks are critical for integration success.


</important>


## Model Provider Settings


**Multi-provider configuration** enables failover handling. Five model providers are configured with varying priority.


### Provider Summary


### **OpenAI**

- API Key: Configured
- Quota: 5,000 messages
- Models: Not yet added
- Priority: 1st (currently dysfunctional)

### **Anthropic**

- API Key: Configured (priority mode)
- Model: Claude 4 Opus
- Quota: Active
- Priority: 2nd
- Fix: Resolved quota depletion via key regeneration

### **xAI**

- Model: Grok
- Status: Fallback default when others fail
- Priority: 3rd

### **Gemini**

- Models: 2.5 Flash, 2.5 Pro
- Quota: Active
- Target Priority: 2nd
- Features: LLM and embedding support

### **Cohere**

- Capabilities: Rerank, LLM, embeddings
- Status: Backup model, not prioritized

### Priority System


<example>


OpenAI → Anthropic → xAI


</example>


<thinking>


This linear fallback system can lead to unintentional misidentification when models are depleted or misconfigured.


</thinking>


<important>


Unprioritized models are only used when manually invoked or when prioritized providers fail.


</important>


## Knowledge Base Configuration


**The knowledge base (Aegis\_KMS)** is optimized for hybrid search and includes 23 indexed documents. Two documents—related to Grok project development—show the highest retrievals (22 each).


### Metadata

- Indexing: High-quality
- Embedding: `text-embedding-3-large`
- Rerank: Enabled
- Top-K: 10
- Score Threshold: 0.1

### Document List


Includes key files like:

- `aegis_blueprint.md` (26.7k words)
- `claude_prompting_best_practices.md` (18.3k words)
- `manus_capabilities_brief.md` (36.9k words)

<context>


Most documents remain underutilized based on retrieval stats. Potential improvements include refining prompt structure or retraining embeddings.


</context>


<important>


Monitor document retrieval patterns to align document structure with LLM context expectations.


</important>


## Chatbot Application Structure


**Dify's RAG workflow** consists of a 3-node pipeline with structured knowledge injection.


### Workflow Nodes

1. START – Captures query
2. KNOWLEDGE RETRIEVAL – Pulls from Aegis\_KMS
3. LLM – Processes with Gemini 2.5 Flash
4. ANSWER – Returns citations

### Configuration


\<code\_example>


Model: Gemini 2.5 Flash
Temperature: 0.7
Top P: 1
Max Tokens: 65536


\</code\_example>


<thinking>


A high token limit enables detailed responses but increases inference costs and latency.


</thinking>


### System Prompt Flags

- No mention of source model
- XML context wrapping
- English-only enforcement
- Context injection without attribution

<important>


Absence of model self-identification leads to mislabeling in some fallback scenarios.


</important>


## API Extensions and Integrations


**API integration is disabled by default**, but available for advanced use cases.


### Potential Extensions

- n8n Webhooks
- 3rd-party APIs
- External tool hooks

### Customization Features

- Branding: Logo and UI controls
- Label Removal: "Powered by Dify" toggle
- Chatflow UI customization

<answer>


Enable API extensions via admin panel for webhook management and third-party service connections.


</answer>


## Current Issues and Troubleshooting


### RESOLVED: Incorrect Grok Labeling


**Root Cause**: Anthropic quota exhaustion + fallback chain


\<code\_example>


Fix Steps:

1. Purchase Anthropic credits
2. Generate new API key
3. Update configuration
4. Select Claude 4 Opus
5. Refresh app

\</code\_example>


<important>


Model fallback behavior is controlled by token availability and prioritization order.


</important>


### UNRESOLVED: Priority Editing

- No UI support for reorder
- Desired: Anthropic > Gemini > OpenAI > xAI

<thinking>


May require API call or Dify team support ticket.


</thinking>


## Next Steps


### Operational Fixes

- Check quotas
- Enable Gemini 2.5 Pro
- Reorder model priorities
- Add GPT variants under OpenAI

### Optimization Tasks

- Refactor system prompt
- Enable follow-up UX features
- Expand file upload testing

### Integration Goals

- Configure Claude sub-agents
- Improve webhook performance
- Explore performance tracking

---


## End of Guide


**End of guide** covering the Dify Configuration under Aegis setup, updated 2025-08-06. Troubleshooting of Grok misidentification is resolved; provider fallback and prompt design remain open areas for improvement.

