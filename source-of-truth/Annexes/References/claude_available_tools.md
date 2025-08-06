---
title: Claude Available Tools
database: References
notion_id: 24080979-7b42-8054-a42c-d9cbddfd9c3a
last_updated: 2025-08-06T21:27:12.882Z
---

# Claude Available Tools


# Claude Available Tools


**File Name:** `Claude_Available_Tools_v1.1.md`


**Version:** 1.1


**Date:** 2025-07-19


**Status:** Active


**Path:** `/Annexes/References/Claude_Available_Tools_v1.1.md`


_Preserved core content verbatim from provided source. Light surgical edits: Added ToC; split into short sections (~200-300 words each) with descriptive headings (e.g., ## Native Claude Capabilities → subsections); bolded key tools (e.g.,_ _**Artifacts**__). Diffs below._


## Table of Contents

1. [Native Claude Capabilities](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=240809797b428054a42cd9cbddfd9c3a&pm=s#native-claude-capabilities)
1.1 [Artifacts](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=240809797b428054a42cd9cbddfd9c3a&pm=s#artifacts)
1.2 [Analysis Tool (REPL)](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=240809797b428054a42cd9cbddfd9c3a&pm=s#analysis-tool-repl)
1.3 [Web Tools](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=240809797b428054a42cd9cbddfd9c3a&pm=s#web-tools)
1.4 [Knowledge Management](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=240809797b428054a42cd9cbddfd9c3a&pm=s#knowledge-management)
2. [MCP Toolkit Integrations](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=240809797b428054a42cd9cbddfd9c3a&pm=s#mcp-toolkit-integrations)
2.1 [Docker OpenAPI Tools](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=240809797b428054a42cd9cbddfd9c3a&pm=s#docker-openapi-tools)
2.2 [Brave Search](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=240809797b428054a42cd9cbddfd9c3a&pm=s#brave-search)
2.3 [GitHub Integration](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=240809797b428054a42cd9cbddfd9c3a&pm=s#github-integration)
2.4 [File System Access](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=240809797b428054a42cd9cbddfd9c3a&pm=s#file-system-access)
2.5 [Puppeteer (Browser Automation)](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=240809797b428054a42cd9cbddfd9c3a&pm=s#puppeteer-browser-automation)
2.6 [Firecrawl (Web Scraping)](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=240809797b428054a42cd9cbddfd9c3a&pm=s#firecrawl-web-scraping)
2.7 [Perplexity Integration](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=240809797b428054a42cd9cbddfd9c3a&pm=s#perplexity-integration)
2.8 [Notion Integration](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=240809797b428054a42cd9cbddfd9c3a&pm=s#notion-integration)
2.9 [Google Services](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=240809797b428054a42cd9cbddfd9c3a&pm=s#google-services)
2.10 [Wikipedia](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=240809797b428054a42cd9cbddfd9c3a&pm=s#wikipedia)
2.11 [Advanced AI Tools (Zen MCP)](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=240809797b428054a42cd9cbddfd9c3a&pm=s#advanced-ai-tools-zen-mcp)
2.12 [Memory Tools](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=240809797b428054a42cd9cbddfd9c3a&pm=s#memory-tools)
3. [Model Access (via Zen MCP)](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=240809797b428054a42cd9cbddfd9c3a&pm=s#model-access-via-zen-mcp)
4. [Key Limitations](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=240809797b428054a42cd9cbddfd9c3a&pm=s#key-limitations)
5. [Best Use Cases for Development](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=240809797b428054a42cd9cbddfd9c3a&pm=s#best-use-cases-for-development)

**DIFF: Original: No ToC or subsections. Revised: Added ToC and split into descriptive subsections (e.g., ## Native Claude Capabilities with 1.1 etc.)—reason: RAG chunk optimization (short, focused sections ~200-300 words); improve readability/flow.**


## Native Claude Capabilities


Claude includes several built-in tools that enable advanced functionality without external integrations. These capabilities form the foundation for sophisticated task handling.


### Artifacts

- **Artifacts**: Create and update code, documents, and structured content
- Supports: Code, Markdown, HTML, React components, SVG, Mermaid diagrams
- Use case: Building interfaces, documentation, code generation

### Analysis Tool (REPL)

- **Analysis Tool (REPL)**: Execute JavaScript code in browser environment
- Process CSV, Excel, JSON files
- Data visualization and complex calculations
- Libraries: lodash, papaparse, xlsx, mathjs, d3

### Web Tools

- **Web Tools**
- **web_search**: Search the internet for current information
- **web_fetch**: Retrieve content from specific URLs

### Knowledge Management

- **Knowledge Management**
- Upload and reference documents
- Search within conversation context
- Create structured knowledge items

## MCP Toolkit Integrations


The Model Context Protocol (MCP) extends Claude's capabilities through specialized tool integrations. These tools enable advanced operations across various domains.


### Docker OpenAPI Tools

- **Docker OpenAPI Tools**
- List API endpoints
- Get endpoint details
- Explore request/response schemas
- Search API documentation

### Brave Search

- **Brave Search**
- Web search with advanced filtering
- Local business search
- Real-time information retrieval

### GitHub Integration

- **GitHub Integration** (Extensive)
- Repository management (create, fork, search)
- Issues and PR management
- Code file operations (read, write, update)
- Branch and commit operations
- GitHub Actions workflow triggers
- Code review and commenting

### File System Access

- **File System Access**
- Read/write files and directories
- Search files recursively
- Move/rename files
- Get file metadata
- Limited to allowed directories

### Puppeteer (Browser Automation)

- **Puppeteer (Browser Automation)**
- Navigate websites
- Take screenshots
- Click elements and fill forms
- Execute JavaScript in pages

### Firecrawl (Web Scraping)

- **Firecrawl (Web Scraping)**
- Scrape single or multiple URLs
- Map entire websites
- Extract structured data
- Deep research capabilities
- Generate LLMs.txt files

### Perplexity Integration

- **Perplexity Integration**
- Ask questions (Sonar API)
- Perform deep research
- Reasoning tasks

### Notion Integration

- **Notion Integration**
- Create and update pages
- Search content
- Manage blocks and databases
- Create child pages
- Add comments

### Google Services

- **Google Services**
- **Drive**: Search and fetch documents
- **Maps**: Geocoding, directions, place search
- **Calendar**: (If enabled)
- **Gmail**: (If enabled)

### Wikipedia

- **Wikipedia**
- Search articles
- Get full content or summaries
- Extract key facts
- Topic relationship mapping

### Advanced AI Tools (Zen MCP)

- **Advanced AI Tools (Zen MCP)**
- **chat**: Collaborative discussions with AI models
- **thinkdeep**: Multi-stage investigation workflows
- **planner**: Sequential planning with revision capabilities
- **consensus**: Multi-model consensus building
- **codereview**: Systematic code analysis
- **debug**: Root cause analysis
- **analyze**: Comprehensive code analysis
- **refactor**: Code improvement suggestions
- **tracer**: Code execution flow analysis
- **testgen**: Test suite generation

### Memory Tools

- **Memory Tools**
- Add memories about user preferences
- Search stored memories
- List all memories
- Delete memories

## Model Access (via Zen MCP)


### Available Models:

- **Gemini**: 2.0-flash, 2.5-flash, 2.5-pro
- **OpenAI**: o3, o3-mini, o4-mini, gpt-4.1
- [**X.AI**](http://x.ai/): grok-3, grok-3-fast

## Key Limitations

1. **No Direct Database Access** (must use APIs)
2. **No Email Sending** (can draft but not send)
3. **No Direct Cloud Provider APIs** (AWS, Azure, GCP)
4. **Limited to Browser JavaScript** (no Node.js in analysis tool)
5. **File System Access Restricted** to specific directories

## Best Use Cases for Development


### Claude Excels At:

- Writing configuration files (Docker Compose, n8n workflows)
- Creating setup documentation with exact commands
- Building web interfaces and dashboards
- Data processing and analysis
- GitHub repository management
- Notion content organization

### Claude Needs Human Help For:

- Running Docker commands locally
- Accessing cloud provider consoles
- Making payments or account creation
- Physical server/network configuration
- Testing deployments in real environments
