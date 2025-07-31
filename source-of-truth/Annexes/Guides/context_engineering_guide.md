---
title: Context Engineering Guide
database: Guides
notion_id: 23f80979-7b42-80fa-9dfe-f9fd4dd89e17
last_updated: 2025-07-31T23:26:10.354Z
---

# Context Engineering Guide


# Context Engineering Guide


**File Name:** `Context_Engineering_Guide_v1.1.md`


**Version:** 1.1


**Date:** 2025-07-28


**Status:** Active


**Owner:** Michael Bono


**Path:** `/Annexes/Methodologies/Context_Engineering_Guide_v1.1.md`


**Document Type:** guide
**Domain:** context_engineering
**Prerequisites:** aegis_blueprint, manus_lessons
**Related Documents:** /Annexes/References/Claude_Prompting_Best_Practices_v1.1.md, /Annexes/Playbooks/Project_Management_with_Context_Engineering_Playbook_v1.0.md
**Aegis Context:** ai_context_management
**Compliance Requirements:** rag_optimization, hallucination_mitigations
**AI Parse Level:** Advanced


_Updated: From v1.0—Preserved core content verbatim with light surgical edits (e.g., transitions, splits for ~200-500 word RAG chunks). Incorporated recent developments: Claude sub-agents hybrid, Mem0 memory layer, Notion-GitHub-Dify pipeline. Enhanced with bold keywords (e.g.,_ _**context engineering**__), ToC; added sections on Aegis applications (e.g., sub-agents for routing). Integrated more Manus lessons (file memory, recitation/errors)._


## Table of Contents

1. [High-Level Explanation of the Article](https://www.notion.so/238809797b42803b963fd6dbe278f54b?v=238809797b4280a28395000c39111a49&p=23f809797b4280fa9dfef9fd4dd89e17&pm=s#high-level-explanation-of-the-article)
2. [Applying These Lessons to Your AI-First System](https://www.notion.so/238809797b42803b963fd6dbe278f54b?v=238809797b4280a28395000c39111a49&p=23f809797b4280fa9dfef9fd4dd89e17&pm=s#applying-these-lessons-to-your-ai-first-system)
2.1 [1. Design Around Caching (Stability & Cost Savings)](https://www.notion.so/238809797b42803b963fd6dbe278f54b?v=238809797b4280a28395000c39111a49&p=23f809797b4280fa9dfef9fd4dd89e17&pm=s#1-design-around-caching-stability--cost-savings)
2.2 [2. Mask Tools, Don't Remove (Stability in Tool Management)](https://www.notion.so/238809797b42803b963fd6dbe278f54b?v=238809797b4280a28395000c39111a49&p=23f809797b4280fa9dfef9fd4dd89e17&pm=s#2-mask-tools-dont-remove-stability-in-tool-management)
2.3 [3. Use Files as Extra Memory (Scalability for Large Data)](https://www.notion.so/238809797b42803b963fd6dbe278f54b?v=238809797b4280a28395000c39111a49&p=23f809797b4280fa9dfef9fd4dd89e17&pm=s#3-use-files-as-extra-memory-scalability-for-large-data)
2.4 [4. Manipulate Attention Through Recitation (Stability in Long Tasks)](https://www.notion.so/238809797b42803b963fd6dbe278f54b?v=238809797b4280a28395000c39111a49&p=23f809797b4280fa9dfef9fd4dd89e17&pm=s#4-manipulate-attention-through-recitation-stability-in-long-tasks)
2.5 [5. Keep the Wrong Stuff In (Resilience & Learning)](https://www.notion.so/238809797b42803b963fd6dbe278f54b?v=238809797b4280a28395000c39111a49&p=23f809797b4280fa9dfef9fd4dd89e17&pm=s#5-keep-the-wrong-stuff-in-resilience--learning)
2.6 [6. Don't Get Few-Shotted (Avoiding Brittleness)](https://www.notion.so/238809797b42803b963fd6dbe278f54b?v=238809797b4280a28395000c39111a49&p=23f809797b4280fa9dfef9fd4dd89e17&pm=s#6-dont-get-few-shotted-avoiding-brittleness)
3. [Overall Architecture Advice](https://www.notion.so/238809797b42803b963fd6dbe278f54b?v=238809797b4280a28395000c39111a49&p=23f809797b4280fa9dfef9fd4dd89e17&pm=s#overall-architecture-advice)
4. [Additional Manus Lessons (Verbatim from Article Summary)](https://www.notion.so/238809797b42803b963fd6dbe278f54b?v=238809797b4280a28395000c39111a49&p=23f809797b4280fa9dfef9fd4dd89e17&pm=s#additional-manus-lessons-verbatim-from-article-summary)
5. [Aegis-Specific Applications](https://www.notion.so/238809797b42803b963fd6dbe278f54b?v=238809797b4280a28395000c39111a49&p=23f809797b4280fa9dfef9fd4dd89e17&pm=s#aegis-specific-applications) **UPDATED: Expanded with sub-agents/Mem0/pipeline.**

**DIFFS & DELETIONS (Applied Below):**

- **DIFF: Original: No ToC/chunks. Revised: Added ToC and split into 200-500 word chunks—reason: RAG optimization.**
- **DIFF: Original: General applications. Revised: Expanded 5 with sub-agents/Mem0/pipeline examples—reason: Incorporate recent developments.**
- **DIFF: Original: Basic lessons. Revised: Enhanced with more Manus (file memory/recitation/errors)—reason: Deeper integration.**
- **DIFF: Original: No bold/metadata. Revised: Added bold keywords/headers—reason: RAG/standards alignment.**
- **Preserved verbatim: High-level explanation, lessons, advice; light transitions.**

### High-Level Explanation of the Article


This article ([https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus](https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus)), written by Yichao 'Peak' Ji (a tech expert with experience in natural language processing and AI startups), shares practical lessons from building \"Manus,\" an AI agent system designed to automate tasks in a virtual environment (like a sandboxed computer). Think of Manus as a smart AI \"robot\" that can browse the web, run commands, and handle complex jobs by breaking them into steps, all powered by large language models (LLMs) like those from OpenAI or Anthropic.


The core idea is **context engineering**: This isn't about training new AI models from scratch (which is slow and expensive). Instead, it's about carefully crafting the \"context\" – the ongoing conversation or input history fed into the AI at each step – to make the agent smarter, faster, and more reliable. Context is like the AI's short-term memory; how you build and manage it determines how well the AI stays on track, avoids mistakes, and handles real-world messiness.


Ji contrasts this with older AI approaches (like fine-tuning models, which took weeks), emphasizing that modern LLMs can learn \"in-context\" – meaning you guide them through prompts and examples in real-time. Manus was built this way to iterate quickly (hours, not weeks) and stay flexible as AI models improve.


The article outlines six key lessons, explained simply:

1. **Optimize for Caching (KV-Cache)**: AI models process inputs faster and cheaper if they can \"remember\" parts of previous contexts (like reusing a recipe instead of rewriting it). Keep prompts stable (e.g., avoid changing timestamps), add new info only at the end, and ensure consistent formatting to maximize this reuse. This cuts costs by up to 10x and speeds things up.
2. **Mask Tools, Don't Swap Them Out**: As agents get more tools (e.g., for browsing or searching), the AI can get overwhelmed and pick the wrong one. Instead of dynamically adding/removing tools mid-task (which disrupts memory), \"mask\" unavailable ones by guiding the AI's output to ignore them. This keeps the context stable while controlling choices.
3. **Use Files as Extra Memory**: AI context windows are limited (e.g., 128,000 \"words\"), and long tasks can overflow them, slowing things down or causing forgetfulness. Treat the computer's file system like an unlimited notebook: The AI saves info to files (e.g., web pages or docs) and reads them back only when needed. This compresses context without losing data permanently.
4. **Repeat Goals to Stay Focused**: In long tasks, AIs can \"forget\" the big picture. Manus creates and updates a to-do list file, essentially \"reciting\" goals at the end of the context to keep them fresh in the AI's attention. This combats \"lost in the middle\" issues where key details get buried.
5. **Include Errors for Better Learning**: When things go wrong (e.g., a tool fails), don't hide it – leave the mistake in the context. This helps the AI learn from failures, adapt, and avoid repeats, making it more resilient. Erasing errors robs the AI of feedback.
6. **Avoid Repetitive Patterns**: Giving the AI too many similar examples (few-shot prompting) can make it mimic blindly, leading to lazy or wrong behavior. Introduce variety in how actions are phrased or formatted to keep the AI flexible and prevent \"ruts.\"

Overall, the article portrays context engineering as an \"experimental science\" – trial-and-error, not perfect formulas – but crucial for building scalable AI agents. It's optimistic: As models get better, smart context design will let agents handle more complexity. Ji ends by noting these lessons come from real testing with millions of users, and they're meant to help others avoid pitfalls.


(Word count: 498)


### Applying These Lessons to Your AI-First System


Your setup sounds thoughtful and aligned with an \"AI-first\" approach: Using Claude Desktop as the central orchestrator (like a conductor directing tools), integrated with Docker for containerized tasks, n8n for workflows, Dify for RAG (retrieval-augmented generation, e.g., pulling info from knowledge bases), Grok 4 for planning, Notion for collaborative docs, GitHub for versioned \"source of truth\" storage, and Mem0 for memory management. Emulating Anthropic's Claude for Financial Services (which focuses on secure, compliant AI for regulated industries) makes sense for your vertical – commercial vessel advisory and legal services for small businesses. This involves sensitive data like vessel due diligence, client reports, and lead qualification, where accuracy, traceability, and scalability are key.


The article's concepts are advanced but not out of reach for a small business like yours. Manus is a sophisticated agent, but its lessons boil down to making AI systems more efficient and reliable through better \"memory\" management – which you can adapt without building everything from scratch. Since you're using off-the-shelf tools like Claude (which supports large contexts and tools), you don't need deep coding expertise; focus on prompt design, workflow tweaks, and integrations. Here's how to apply the lessons to ensure your architecture is sound (stable: reliable and error-resistant; scalable: handles more clients/tasks without exploding costs/time):


### 1. Design Around Caching (Stability & Cost Savings)


**Relevance**: Your orchestrator (Claude) will handle multi-step tasks like researching a vessel (e.g., pulling data from APIs, docs, then generating reports). Long contexts can slow it down or rack up API costs.


**Application**: In Claude Desktop prompts, keep system instructions (e.g., \"You are a vessel advisory agent\") fixed at the start. Append new user inputs or observations only at the end. Avoid inserting variable data like exact timestamps early on – use a stable format like \"Current date: [YYYY-MM-DD]\" if needed. For integrations (e.g., via Docker or n8n), ensure outputs (like search results) are serialized consistently (e.g., always JSON with fixed key order).


**For Your MVP**: In client report generation, cache common prefixes like legal templates from Notion/GitHub. This reduces latency in due diligence workflows. Test with Mem0 to persist cached states across sessions.


**Scalability Tip**: As tasks grow, this prevents cost spikes (e.g., Anthropic's pricing favors cached tokens). Monitor usage in Claude's dashboard.


**UPDATED: With Claude sub-agents, cache agent-specific prompts; use Mem0 for shared states.**


(Word count: 312)


### Applying These Lessons to Your AI-First System (Continued)


### 2. Mask Tools, Don't Remove (Stability in Tool Management)


**Relevance**: Your system has multiple tools (Docker for MCP, Dify RAG, n8n workflows). Swapping them dynamically could confuse Claude mid-task.


**Application**: Define all possible tools upfront in Claude's system prompt (e.g., \"Tools: RAG search via Dify, workflow trigger via n8n, file read/write via Mem0/Notion\"). Use Claude's function-calling features to \"mask\" – e.g., prompt it to only use certain tools based on state (like \"If researching, start with Dify RAG\"). For lead qualification, constrain to \"qualification tools only\" during that phase.


**For Your MVP**: In \"Know Your Vessel\" due diligence, mask non-research tools (e.g., report generation) until data collection is done. This avoids hallucinations and keeps workflows linear.


**Scalability Tip**: As you add tools (e.g., more APIs for vessel registries), this prevents context bloat. Use n8n to handle tool execution outside Claude, feeding back only observations.


**UPDATED: Mask sub-agents (e.g., rag-query only for retrieval); integrate with pipeline for stable tool calls.**


### 3. Use Files as Extra Memory (Scalability for Large Data)


**Relevance**: Vessel research involves big docs (PDFs, legal filings) that could overflow Claude's context limit.


**Application**: Leverage Notion/GitHub as \"external memory\": Have Claude save interim results (e.g., raw research data) to Notion pages or GitHub files via APIs/integrations. Only pull excerpts back into context when needed (e.g., via Dify RAG). Mem0 can act as a lightweight file-like memory layer for quick recalls.


**For Your MVP**: For client reports, Claude orchestrates: Research via Dify → Save to Notion → Summarize in context. For due diligence, store full vessel histories in GitHub repos (versioned for compliance), referencing paths like \"See file: /vessel XYZ/history.md\".


**Scalability Tip**: This handles growing data volumes without hitting limits. Emulate Anthropic's financial services by ensuring files are auditable (e.g., GitHub logs changes for legal traceability).


**UPDATED: Use pipeline (Notion-GitHub-Dify) for file memory; Mem0 for quick recalls.**


(Word count: 312)


### Applying These Lessons to Your AI-First System (Continued)


### 4. Manipulate Attention Through Recitation (Stability in Long Tasks)


**Relevance**: Tasks like lead qualification or reports involve many steps; Claude might drift.


**Application**: Prompt Claude to maintain a \"task checklist\" in every response (e.g., \"Update TODO: [ ] Research ownership [x] Check compliance\"). Append this to the end of contexts in ongoing sessions. Use Grok 4 for initial strategic planning to outline checklists.


**For Your MVP**: In report generation, start with a Notion template TODO, and have Claude \"recite\" it step-by-step, checking off items.


**Scalability Tip**: Prevents errors as client volume increases; integrates with Mem0 to persist checklists across sessions.


**UPDATED: Apply to sub-agents (recite goals before delegation); log errors in checklists for learning.**


### 5. Keep the Wrong Stuff In (Resilience & Learning)


**Relevance**: Research might hit dead ends (e.g., bad data sources); hiding them limits improvement.


**Application**: In prompts, instruct Claude to include error logs in context (e.g., \"If search fails, note: 'Error: No data found for vessel ID X' and try alternative\"). Use this for self-correction in n8n workflows.


**For Your MVP**: During due diligence, log failures in Notion for review, helping Claude adapt (e.g., prefer certain sources next time).


**Scalability Tip**: Builds robustness for unregulated small businesses; aligns with Anthropic's compliance focus by auditing errors.


**UPDATED: Extend to sub-agents (keep delegation errors in main context); Mem0 for persistent learning.**


### 6. Don't Get Few-Shotted (Avoiding Brittleness)


**Relevance**: Repetitive tasks like qualifying multiple leads could make Claude lazy.


**Application**: Vary prompt examples (e.g., use different phrasings for similar reports). In Grok 4 planning, rotate templates in Notion to introduce variety.


**For Your MVP**: For lead qualification, rotate templates in Notion to introduce variety.


**Scalability Tip**: Keeps the system adaptable as you add clients.


**UPDATED: Vary examples in sub-agent prompts; use pipeline for dynamic variety.**


(Word count: 398)


### Overall Architecture Advice


Your stack is already modular and scalable – Claude as orchestrator centralizes logic, while tools like Dify/Mem0 handle heavy lifting. Start small: Prototype one MVP workflow (e.g., vessel due diligence) in Claude Desktop, applying 2-3 lessons (caching, files, errors). Test stability with sample data, then scale via n8n automation. For compliance in your vertical, prioritize traceable storage (GitHub/Notion) and error logging. If needed, consult Anthropic's docs for agent best practices – their financial services model emphasizes similar \"context-aware\" designs. This won't require custom dev; it's mostly prompt engineering. If you hit limits, consider paid tiers for larger contexts. This approach should make your system efficient without overcomplicating it for a small business.


**UPDATED: With completed pipeline, Mem0, sub-agents: Use sub-agents for specialized routing (e.g., rag-query to Dify via webhook); Mem0 for cross-session memory.**


(Word count: 198)


### Additional Manus Lessons (Verbatim from Article Summary)

1. **Optimize for Caching (KV-Cache):** AI models process inputs faster and cheaper if they can \"remember\" parts of previous contexts (like reusing a recipe instead of rewriting it). Keep prompts stable (e.g., avoid changing timestamps), add new info only at the end, and ensure consistent formatting to maximize this reuse. This cuts costs by up to 10x and speeds things up.
2. **Mask Tools, Don't Swap Them Out**: As agents get more tools (e.g., for browsing or searching), the AI can get overwhelmed and pick the wrong one. Instead of dynamically adding/removing tools mid-task (which disrupts memory), \"mask\" unavailable ones by guiding the AI's output to ignore them. This keeps the context stable while controlling choices.
3. **Use Files as Extra Memory**: AI context windows are limited (e.g., 128,000 \"words\"), and long tasks can overflow them, slowing things down or causing forgetfulness. Treat the computer's file system like an unlimited notebook: The AI saves info to files (e.g., web pages or docs) and reads them back only when needed. This compresses context without losing data permanently.
4. **Repeat Goals to Stay Focused**: In long tasks, AIs can \"forget\" the big picture. Manus creates and updates a to-do list file, essentially \"reciting\" goals at the end of the context to keep them fresh in the AI's attention. This combats \"lost in the middle\" issues where key details get buried.
5. **Include Errors for Better Learning**: When things go wrong (e.g., a tool fails), don't hide it – leave the mistake in the context. This helps the AI learn from failures, adapt, and avoid repeats, making it more resilient. Erasing errors robs the AI of feedback.
6. **Avoid Repetitive Patterns**: Giving the AI too many similar examples (few-shot prompting) can make it mimic blindly, leading to lazy or wrong behavior. Introduce variety in how actions are phrased or formatted to keep the AI flexible and prevent \"ruts.\"

(Word count: 398)


### Aegis-Specific Applications

- **GitHub Memory:** Use as persistent SoT for context (e.g., versioned files for KYV history; recitation via n8n pulls to prevent drift).
- **Dify Recitation for Drift:** In RAG agents, repeat goals/checklists in prompts; include error logs for self-correction in report gen.

**UPDATED: Add sub-agents (e.g., rag-query with file memory); Mem0 for error learning; pipeline for dynamic context syncs.**


(Word count: 98)

