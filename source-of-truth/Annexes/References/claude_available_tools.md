---
title: Claude Available Tools
database: References
notion_id: 24780979-7b42-80c3-a91a-de0b68294680
last_updated: 2025-12-16T22:35:23.031Z
---

# Claude Available Tools


# Claude Available Tools


**File Name:** `Claude_Available_Tools_v1.2.md`**Version:** 1.2
**Date:** 2025-07-19
**Updated:** From v1.1—Content preserved verbatim with structural reformatting for RAG optimization (200-500 word chunks, XML tagging, bold keywords per Context Engineering Guide v1.1) using Aegis Knowledge Base Universal Reformatter Prompt v3.
**Status:** Active
**Owner:** Michael Bono
**Path:** `/Annexes/References/Claude_Available_Tools_v1.2.md`**Dependencies:** `Claude_Prompting_Best_Practices_v1.1.md`**Document Type:** reference
**Domain:** ai\_toolchain
**Prerequisites:** zen\_mcp\_access, claude\_account
**Related Documents:** `/Annexes/Protocols/Aegis_Grok_Collaboration_Protocol_v1.3.md`**Aegis Context:** system\_tooling
**Compliance Requirements:** xml\_prompting
**AI Parse Level:** Strategic


## Table of Contents

1. [Native Claude Capabilities](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=247809797b4280c3a91ade0b68294680&pm=s#native-claude-capabilities)
2. [MCP Toolkit Integrations](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=247809797b4280c3a91ade0b68294680&pm=s#mcp-toolkit-integrations)
3. [Model Access (via Zen MCP)](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=247809797b4280c3a91ade0b68294680&pm=s#model-access-via-zen-mcp)
4. [Key Limitations](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=247809797b4280c3a91ade0b68294680&pm=s#key-limitations)
5. [Best Use Cases for Development](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=247809797b4280c3a91ade0b68294680&pm=s#best-use-cases-for-development)

---


## Native Claude Capabilities


**Claude includes built-in tools** that enable core capabilities for technical execution and document manipulation.


### Artifacts

- **Artifacts**: Create/update code, documents, and structured content
- Supports: Markdown, HTML, React, SVG, Mermaid
- Use cases: Technical writing, interface design, coding

### Analysis Tool (REPL)

- **Execute JavaScript** in a browser-like environment
- Supports: CSV, Excel, JSON processing
- Libraries: lodash, papaparse, xlsx, mathjs, d3
- Use cases: Data visualization, quick math, text parsing

### Web Tools

- **web\_search**: General web queries
- **web\_fetch**: Load URL content (HTML or file)

### Knowledge Management

- Upload documents, search context
- Create structured memories
- Query across loaded content

---


## MCP Toolkit Integrations


**Zen MCP extends Claude** into a full-stack toolchain environment.


### Docker OpenAPI Tools

- List and query APIs
- Retrieve endpoint schemas and docs

### Brave Search

- Web queries with local business, real-time search filters

### GitHub Integration

- Repos, PRs, issues, branches, commits
- File edit + create
- Trigger GitHub Actions
- Structured code review

### File System Access

- Read/write local files (sandboxed)
- Rename, search, or move files
- Metadata retrieval

### Puppeteer (Browser Automation)

- Navigate websites
- Screenshot, click, form-fill
- Execute JS on pages

### Firecrawl (Web Scraping)

- Extract data from sites
- Crawl entire domains
- Generate LLMs.txt files
- Map structured elements

### Perplexity (Sonar API)

- Research deep queries
- Use reasoning + context trails

### Notion Integration

- Page + block management
- Comments, databases
- Page creation and updates

### Google Services

- **Drive**: Search, read
- **Maps**: Location, directions
- **Calendar/Gmail**: (if authorized)

### Wikipedia

- Search, summarize, extract articles
- Relationship graphs

### Advanced AI Tools (Zen MCP)

- **chat** – conversational agent
- **planner** – step planning
- **debug**, **refactor**, **testgen** – code improvement tools
- **consensus**, **thinkdeep** – multi-agent investigation

### Memory Tools

- Add, delete, search user/system memories
- Support for long-term context alignment

---


## Model Access (via Zen MCP)


<answer>


Claude connects to multiple models via Zen MCP routing:


</answer>


| Provider | Models                        |
| -------- | ----------------------------- |
| Gemini   | 2.0-flash, 2.5-flash, 2.5-pro |
| OpenAI   | o3, o3-mini, o4-mini, GPT-4.1 |
| xAI      | grok-3, grok-3-fast           |


<important>


Use routing tags in Claude MCP shell to select model (`@model=gpt-4.1`).


</important>


---


## Key Limitations

1. **No native DB access** — use APIs only
2. **No send-email support**
3. **No cloud API integration (AWS, Azure)**
4. **Browser JS only — no Node.js**
5. **File system sandboxed**

<thinking>


These limitations require external orchestration (e.g., n8n) or prompt engineering workarounds.


</thinking>


---


## Best Use Cases for Development


### Claude Excels At

- Markdown-based technical writing
- Setup guides (Docker, n8n, Notion)
- GitHub project automation
- Notion page management
- Data parsing + JS REPL logic
- Web scraping with Firecrawl

### Claude Needs Human Help For

- Docker command execution
- Payment or account creation
- Real-world networking
- Cloud console operations
- Hardware and local app deployment

---


**End of Reference**

