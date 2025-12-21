---
title: Description of OpenRouter to Dify n8n Knowledge Base Sync
database: Guides
notion_id: 24880979-7b42-80e6-ba6e-e023d3378397
last_updated: 2025-12-21T09:38:22.634Z
---

# Description of OpenRouter to Dify n8n Knowledge Base Sync


# Description of OpenRouter to Dify n8n Knowledge Base Sync


**File Name:** description-openrouter-dify-n8n-knowledge-base-sync-v1.1**Version:** 1.1
**Date:** 2025-08-04
**Status:** Active
**Owner:** Michael Bono
**Path:** `/Annexes/Guides/openrouter-dify-n8n-sync-guide-v1.1.md`**Dependencies:** `n8n`, `OpenRouter`, `Dify`, `Webhook configuration`**Document Type:** guide
**Domain:** knowledge\_management
**Prerequisites:** Active n8n instance, valid OpenRouter API key, access to Dify
**Related Documents:** `None`**Aegis Context:** knowledge sync, fallback AI chaining, n8n webhook setup
**Compliance Requirements:** Standard
**AI Parse Level:** Operational
**LLM Model:** n8n AI Assistant
**Session:** \[Not applicable]


---


# Description of OpenRouter to Dify n8n Knowledge Base Sync


Created by n8n AI Assistant on August 4, 2025


## Overview


This workflow provides an API endpoint for knowledge queries, processes incoming requests, and utilizes OpenRouter's AI chat completion API with fallback models. The workflow is designed to ensure robust AI responses by cascading through multiple models if the primary model fails.


## Workflow Structure


### 1. Webhook (Trigger)

- **Type:** Webhook (POST)
- **Path:** `/knowledge-fallback-sync`
- **Purpose:** Receives incoming HTTP POST requests containing a knowledge query and optional parameters.

### 2. Set (Data Preparation)

- **Type:** Set
- **Purpose:** Extracts and prepares relevant fields from the incoming request:
    - `query`: Extracted from `body.query`
    - `caller`: Extracted from `caller` or defaults to `'claude-desktop'`
    - `force_fallback`: Boolean flag from `body.force_fallback` (if present)

### 3. OpenRouter Fallback (AI Request)

- **Type:** HTTP Request
- **Purpose:** Sends the prepared query to the OpenRouter API for chat completion.
- **Details:**
    - **Endpoint:** `https://openrouter.ai/api/v1/chat/completions`
    - **Method:** POST
    - **Headers:**
        - `Authorization: Bearer {{$vars.OPENROUTER_API_KEY}}`
        - `Content-Type: application/json`
        - `HTTP-Referer: <https://vesselsales.law`>
    - **Body:**
        - `model`: `anthropic/claude-3-opus`
        - `fallback_models`: `google/gemini-pro`, `openai/gpt-4`
        - `messages`: User query from the Set node

### 4. Respond to Webhook (Response)

- **Type:** Respond to Webhook
- **Purpose:** Returns the AI-generated answer to the original HTTP request.
- **Response Body:**
    - JSON object with the answer:

        ```json
        {
          "answer": "{{ $json.choices[0].message.content }}"
        }
        ```


## Flow Diagram


Webhook (POST /knowledge-fallback-sync)
│
▼
Set (Prepare query and parameters)
│
▼
OpenRouter Fallback (HTTP Request to AI API)
│
▼
Respond to Webhook (Return AI answer)


## Notes

- The workflow is designed for synchronous operation, responding directly to the incoming webhook.
- Fallback models ensure high availability and reliability of AI responses.
- API key for OpenRouter is managed via environment variables (`OPENROUTER_API_KEY`).

---


**End of Guide**


# OpenRouter to Dify n8n Knowledge Base Sync


**File Name:** `description-openrouter-dify-n8n-knowledge-base-sync-v1.1`**Version:** 1.1
**Date:** 2025-08-04
**Status:** Active
**Owner:** Michael Bono
**Path:** `/Annexes/Guides/description-openrouter-dify-n8n-knowledge-base-sync-v1.1`**Dependencies:** `n8n`, `OpenRouter`, `Dify`, `Webhook configuration`**Document Type:** guide
**Domain:** knowledge\_management
**Prerequisites:** Active n8n instance, valid OpenRouter API key, access to Dify
**Related Documents:** `None`**Aegis Context:** knowledge sync, fallback AI chaining, n8n webhook setup
**Compliance Requirements:** Standard
**AI Parse Level:** Operational
**LLM Model:** n8n AI Assistant
**Session:** \[Not applicable]


---


# Description of OpenRouter to Dify n8n Knowledge Base Sync


Created by n8n AI Assistant on August 4, 2025


## Overview


This workflow provides an API endpoint for knowledge queries, processes incoming requests, and utilizes OpenRouter's AI chat completion API with fallback models. The workflow is designed to ensure robust AI responses by cascading through multiple models if the primary model fails.


## Workflow Structure


### 1. Webhook (Trigger)

- **Type:** Webhook (POST)
- **Path:** `/knowledge-fallback-sync`
- **Purpose:** Receives incoming HTTP POST requests containing a knowledge query and optional parameters.

### 2. Set (Data Preparation)

- **Type:** Set
- **Purpose:** Extracts and prepares relevant fields from the incoming request:
    - `query`: Extracted from `body.query`
    - `caller`: Extracted from `caller` or defaults to `'claude-desktop'`
    - `force_fallback`: Boolean flag from `body.force_fallback` (if present)

### 3. OpenRouter Fallback (AI Request)

- **Type:** HTTP Request
- **Purpose:** Sends the prepared query to the OpenRouter API for chat completion.
- **Details:**
    - **Endpoint:** `https://openrouter.ai/api/v1/chat/completions`
    - **Method:** POST
    - **Headers:**
        - `Authorization: Bearer {{$vars.OPENROUTER_API_KEY}}`
        - `Content-Type: application/json`
        - `HTTP-Referer: <https://vesselsales.law`>
    - **Body:**
        - `model`: `anthropic/claude-3-opus`
        - `fallback_models`: `google/gemini-pro`, `openai/gpt-4`
        - `messages`: User query from the Set node

### 4. Respond to Webhook (Response)

- **Type:** Respond to Webhook
- **Purpose:** Returns the AI-generated answer to the original HTTP request.
- **Response Body:**
    - JSON object with the answer:

        ```json
        {
          "answer": "{{ $json.choices[0].message.content }}"
        }
        ```


## Flow Diagram


Webhook (POST /knowledge-fallback-sync)
│
▼
Set (Prepare query and parameters)
│
▼
OpenRouter Fallback (HTTP Request to AI API)
│
▼
Respond to Webhook (Return AI answer)


## Notes

- The workflow is designed for synchronous operation, responding directly to the incoming webhook.
- Fallback models ensure high availability and reliability of AI responses.
- API key for OpenRouter is managed via environment variables (`OPENROUTER_API_KEY`).

---


**End of Guide**

