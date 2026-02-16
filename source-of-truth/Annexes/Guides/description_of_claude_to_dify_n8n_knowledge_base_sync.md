---
title: Description of Claude to Dify n8n Knowledge Base Sync
database: Guides
notion_id: 24880979-7b42-8000-9536-efb1d44a9c9e
last_updated: 2026-02-16T11:24:23.848Z
---

# Description of Claude to Dify n8n Knowledge Base Sync


---


# Description of Claude to Dify n8n Knowledge Base Sync


**File Name:** `description-claude-dify-n8n-knowledge-base-sync-v1.1`**Version:** 1.1
**Date:** 2025-08-04
**Status:** Active
**Owner:** Michael Bono
**Path:** `/Annexes/Guides/description-claude-dify-n8n-knowledge-base-sync-v1.1`**Dependencies:** `n8n`, `Claude`, `Dify`, `Webhook configuration`**Document Type:** guide
**Domain:** knowledge\_management
**Prerequisites:** Active n8n instance, valid Dify API key, webhook access
**Related Documents:** `None`**Aegis Context:** knowledge sync, dify API, webhook processing
**Compliance Requirements:** Standard
**AI Parse Level:** Operational
**LLM Model:** n8n AI Assistant
**Session:** \[Not applicable]


---


# Description of Claude to Dify n8n Knowledge Base Sync


## Overview


This workflow receives a POST request via webhook, processes the incoming data, sends a query to the Dify API, and returns the API response to the original caller.


---


## Workflow Structure


### 1. Webhook

- **Type:** Webhook
- **HTTP Method:** POST
- **Path:** `/knowledge-dify-sync`
- **Authentication:** None
- **Response Mode:** Response Node (handled by a downstream node)
- **Purpose:** Receives incoming HTTP POST requests with a JSON body.

---


### 2. Set

- **Type:** Set
- **Purpose:** Maps and prepares incoming data for the API call.
- **Fields:**
    - `query`: Extracted from `body.query` of the incoming request.
    - `caller`: Extracted from `caller` in the incoming request, or defaults to `'claude-desktop'` if not provided.
    - `force_fallback`: Boolean, extracted from `body.force_fallback` (if present).

---


### 3. Dify API

- **Type:** HTTP Request
- **Method:** POST
- **URL:** `https://api.dify.ai/v1/chat-messages`
- **Headers:**
    - `Authorization: Bearer {{$vars.DIFY_API_KEY}}`
- **Body (JSON):**
    - `query`: Value from the Set node.
    - `inputs.sys.query`: Same as `query`.
    - `response_mode`: `"blocking"`
    - `user`: Value from the Set node (`caller`).
- **Response Format:** JSON
- **Purpose:** Sends the query to Dify's chat-messages endpoint and receives the response.

---


### 4. Respond to Webhook

- **Type:** Respond to Webhook
- **Respond With:** First incoming item
- **Purpose:** Returns the response from the Dify API back to the original webhook caller.

---


## Data Flow

1. **Incoming Request:** A POST request is sent to `/knowledge-dify-sync` with a JSON body containing at least a `query` field.
2. **Data Mapping:** The Set node extracts and prepares the necessary fields for the API call.
3. **API Call:** The Dify API node sends the query to Dify and waits for a response.
4. **Response:** The Respond to Webhook node sends the Dify API's response back to the original requester.

---


## Notes

- The workflow expects the DIFY API key to be available as a variable (`$vars.DIFY_API_KEY`).
- The workflow is synchronous, returning the Dify API response directly to the webhook caller.
- Error handling in the HTTP Request node is set to "continueRegularOutput", so errors will not stop the workflow.

---


**End of Guide**

