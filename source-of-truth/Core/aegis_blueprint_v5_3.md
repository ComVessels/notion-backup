---
title: Aegis_Blueprint_v5.3
database: Core
notion_id: 23a80979-7b42-80ac-b21d-c60c4f4942c5
last_updated: 2025-07-26T09:38:23.104Z
---

# Aegis_Blueprint_v5.3


# Aegis Ecosystem: Foundational Context & Strategic Blueprint


**File Name:** `Aegis_Blueprint_v5.3.md`


**Version:** 5.3


**Date:** 2025-07-20


**Status:** Active


**Owner:** Michael Bono


**Architect:** Grok 4 Heavy


**Path:** `/Core/Aegis_Blueprint_v5.3.md`


**Dependencies:** Annexes listed in TOC; `Knowledge_Management_Standards_v1.4.md`


**Document Type:** blueprint
**Domain:** maritime_advisory_legal
**Prerequisites:** aegis_mission, entity_overviews, market_analysis
**Related Documents:** /Annexes/Playbooks/Aegis_Report_Generation_Playbook_v1.3.md, /Annexes/Methodologies/Context_Engineering_Guide_v1.0.md
**Aegis Context:** small_maritime_entrepreneurs
**Compliance Requirements:** kyv_due_diligence, aml_procedures
**AI Parse Level:** Advanced


_Updated: From v5.2—Preserved core content verbatim with light surgical edits (e.g., transitions, splits for ~200-500 word RAG chunks). Updated annex links: Removed obsolete (e.g., dev-session-01-archive-summary); reflected mergers (e.g., Documentation Lifecycle/KB Formatting into Standards v1.4). Incorporated new docs; enhanced tech stack with Dify/n8n focus, hallucination mitigations. Added integrated roadmap link. Optimized chunks (200-500 words each section)._


## Table of Contents

1. [Part I: The Aegis Ecosystem Mission & Vision](https://www.notion.so/23a809797b428054b927cb695d091115?v=23a809797b42802a9609000c4ed3534b&p=23a809797b4280acb21dc60c4f4942c5&pm=s#part-i-the-aegis-ecosystem-mission--vision)
2. [Part II: The Three Entities (The \"What\")](https://www.notion.so/23a809797b428054b927cb695d091115?v=23a809797b42802a9609000c4ed3534b&p=23a809797b4280acb21dc60c4f4942c5&pm=s#part-ii-the-three-entities-the-what)
3. [Part III: The Target Market & Client Profile (The \"Who\")](https://www.notion.so/23a809797b428054b927cb695d091115?v=23a809797b42802a9609000c4ed3534b&p=23a809797b4280acb21dc60c4f4942c5&pm=s#part-iii-the-target-market--client-profile-the-who)
4. [Part IV: The Operator & Available Resources (The \"With What\")](https://www.notion.so/23a809797b428054b927cb695d091115?v=23a809797b42802a9609000c4ed3534b&p=23a809797b4280acb21dc60c4f4942c5&pm=s#part-iv-the-operator--available-resources-the-with-what)
4.1 [Personnel & Expertise](https://www.notion.so/23a809797b428054b927cb695d091115?v=23a809797b42802a9609000c4ed3534b&p=23a809797b4280acb21dc60c4f4942c5&pm=s#41-personnel--expertise)
4.2 [Content & Intellectual Property](https://www.notion.so/23a809797b428054b927cb695d091115?v=23a809797b42802a9609000c4ed3534b&p=23a809797b4280acb21dc60c4f4942c5&pm=s#42-content--intellectual-property)
4.3 [Relationships](https://www.notion.so/23a809797b428054b927cb695d091115?v=23a809797b42802a9609000c4ed3534b&p=23a809797b4280acb21dc60c4f4942c5&pm=s#43-relationships)
4.4 [Technology Stack & Capabilities](https://www.notion.so/23a809797b428054b927cb695d091115?v=23a809797b42802a9609000c4ed3534b&p=23a809797b4280acb21dc60c4f4942c5&pm=s#44-technology-stack--capabilities) **UPDATED: Integrated context engineering.**
5. [Part V: The Strategic Goals (The \"Where\")](https://www.notion.so/23a809797b428054b927cb695d091115?v=23a809797b42802a9609000c4ed3534b&p=23a809797b4280acb21dc60c4f4942c5&pm=s#part-v-the-strategic-goals-the-where)
5.1 [Immediate AI/MVP Goals](https://www.notion.so/23a809797b428054b927cb695d091115?v=23a809797b42802a9609000c4ed3534b&p=23a809797b4280acb21dc60c4f4942c5&pm=s#51-immediate-aimvp-goals)
5.2 [The 6-Phase Report Generation Workflow](https://www.notion.so/23a809797b428054b927cb695d091115?v=23a809797b42802a9609000c4ed3534b&p=23a809797b4280acb21dc60c4f4942c5&pm=s#52-the-6-phase-report-generation-workflow)
5.3 [The \"Intelligence Briefs\" Product Architecture](https://www.notion.so/23a809797b428054b927cb695d091115?v=23a809797b42802a9609000c4ed3534b&p=23a809797b4280acb21dc60c4f4942c5&pm=s#53-the-intelligence-briefs-product-architecture)
5.4 [The Lead Generation & Qualification Workflow](https://www.notion.so/23a809797b428054b927cb695d091115?v=23a809797b42802a9609000c4ed3534b&p=23a809797b4280acb21dc60c4f4942c5&pm=s#54-the-lead-generation--qualification-workflow)
5.5 [Vessel Sales Research Outline/To-Do for Small Operators](https://www.notion.so/23a809797b428054b927cb695d091115?v=23a809797b42802a9609000c4ed3534b&p=23a809797b4280acb21dc60c4f4942c5&pm=s#55-vessel-sales-research-outlineto-do-for-small-operators)
6. [Part VI: System Features & Development Backlog](https://www.notion.so/23a809797b428054b927cb695d091115?v=23a809797b42802a9609000c4ed3534b&p=23a809797b4280acb21dc60c4f4942c5&pm=s#part-vi-system-features--development-backlog)
7. [Part VII: System Vision & Ideal Workflow](https://www.notion.so/23a809797b428054b927cb695d091115?v=23a809797b42802a9609000c4ed3534b&p=23a809797b4280acb21dc60c4f4942c5&pm=s#part-vii-system-vision--ideal-workflow) **UPDATED: Added context engineering applications.**
8. [Annex: Source Materials Assimilated](https://www.notion.so/23a809797b428054b927cb695d091115?v=23a809797b42802a9609000c4ed3534b&p=23a809797b4280acb21dc60c4f4942c5&pm=s#annex-source-materials-assimilated)
9. [Annex Links](https://www.notion.so/23a809797b428054b927cb695d091115?v=23a809797b42802a9609000c4ed3534b&p=23a809797b4280acb21dc60c4f4942c5&pm=s#annex-links) **UPDATED: Removed obsolete; reflected mergers.**

**DIFFS & DELETIONS (Applied Below):**

- **DIFF: Original: Annex links included dev-session-01-archive-summary. Revised: Removed—reason: Obsolete/not for SoT.**
- **DIFF: Original: Separate links for Documentation Lifecycle/KB Formatting. Revised: Removed (merged into Standards v1.4)—reason: Reflect consolidations.**
- **DIFF: Original: Annex links. Revised: Updated to latest (e.g., Report Generation Playbook v1.3)—reason: Alignment.**
- **Preserved verbatim: Core mission, entities, etc.; light transitions for flow.**

### Part I: The Aegis Ecosystem Mission & Vision

- **The Unifying Mission:** The Aegis Group was founded on a single principle: to protect **maritime entrepreneurs** from the risks that can cripple their businesses. We know that modern day pirates don't yield weapons, but bad contracts. They operate from business offices, using financial deception and fraudulent schemes to take advantage of honest operators. Our group provides a complete, multi-layered defense under the Aegis shield. First, **Aegis Maritime Services (AMS)** acts as the forward intelligence, guiding clients away from costly mistakes with expert data and **due diligence**. Next, **Aegis Maritime Law (AML)** provides the legal armor, shielding our clients with contractual protections and sound legal counsel. And when all else fails, **VessEx** provides the final, decisive action—the enforcement arm that recovers assets from lawless ports and situations where traditional methods are useless.
- **Core Problem Solved:** The Aegis Group addresses a critical gap in the small commercial vessel market by providing expert guidance to operators who lack the large financial resources or dedicated internal teams of major shipping companies. These smaller operators are vulnerable to numerous risks, including purchasing vessels with hidden defects, overpaying due to poor market knowledge, and signing unfavorable contracts, often because they misunderstand the complexities of a commercial vessel transaction.

(Word count: 248)


### Part II: The Three Entities (The \"What\")


The Aegis Group is composed of three distinct but synergistic entities united by a single mission.

- **Aegis Maritime Services, LLC (AMS) - The Knowledge Foundation:**
    - Functions as a **maritime advisory** and consultation service, acting as an outsourced support team for the smaller commercial vessel market.
    - Provides non-legal services including market research analysis, non-legal **due diligence** on vessels (**KYV**), operating plans, and introductions to vetted experts like marine surveyors and S&P brokers.
    - Will offer \"low touch\" productized services, such as fixed-fee reports and access to an automated document portal, to monetize leads with smaller budgets.
- **Aegis Maritime Law, LLC (AML) - The Legal Toolkit:**
    - A **maritime law** firm providing expert guidance on the commercial vessel sale process.
    - Operates on a dual-service model, offering both full-service representation and limited-scope legal services for well-defined tasks, such as drafting a bespoke clause for a contract.
    - Creates and licenses legal contract templates to AMS for use in its automated document portal.
- **Vessel Extractions, LLC (VessEx) - The Enforcement Arm:**
    - A specialized company, in business since 2002, focused on the physical recovery of high-value marine and aviation assets.
    - Its core service is \"vessel extraction,\" an extra-judicial, physical self-help remedy executed on behalf of clients with an immediate possessory right to an asset. It is distinct from the legal process of \"vessel arrest\".
    - Operates in challenging environments where traditional legal remedies are ineffective, such as \"crime-infested ports to war zones\".

(Word count: 312)


### Part III: The Target Market & Client Profile (The \"Who\")

- **Primary Market (\"Sweet Spot\"):** For AMS and AML, the sweet spot is buyers of used commercial vessels such as tugs, workboats, barges, or small passenger ferries with transaction values between **$500,000 and $3 million**. By contrast, VessEx has no practical upper limit on the value of assets it handles, having represented clients with up to $100 million in assets at risk.
- **Secondary Market (Low-Touch):** AMS and AML leads with budgets under $500,000, to be served via automated, productized services offered by AMS. A high percentage of leads generated from social media advertising had budgets under $100,000.
- **Client Profile:** The target clients for AMS and AML are \"**maritime entrepreneurs**\" or small, family-owned businesses who are in the market to purchase a commercial vessel. They are often owner-captains or have limited resources and rely too heavily on brokers for guidance. They are vulnerable to making costly mistakes due to inexperience. VessEx clients, on the other hand, can range from these same maritime entrepreneurs to multi-national oil conglomerates.
- **Broker as Client/Partner Profile:** U.S.-based vessel sale and purchase (S&P) brokers are a key client segment. These brokers face significant risks related to the Unauthorized Practice of Law (UPL) and liability for vessel misrepresentation, creating a need for a trusted legal partner to refer clients to for contract work and **due diligence**. Some brokers, like Ocean Marine Brokerage Services, are direct clients of AML. The goal is to develop this relationship further by establishing a monthly subscription program for broker-clients.

(Word count: 287)


### Part IV: The Operator & Available Resources (The \"With What\")


The Aegis Group is supported by a significant inventory of personnel, intellectual property, relationships, and technology.

- **Personnel & Expertise:**
    - **Michael Bono (You):** Managing Attorney of Aegis Maritime Law, LLC, Managing Director of Aegis Maritime Services, LLC, and Managing Director of Vessel Extractions, LLC with 32 years of experience in **maritime law** and an advanced Master of Laws (LL.M) in Admiralty from Tulane University. Possesses hands-on experience co-owning and operating a 5,000-ton freighter in the Caribbean.
    - **Max Hardberger:** Senior Maritime Counsel / Of Counsel to Aegis Maritime Law, LLC, Operations Director of Vessel Extractions, LLC, and Senior Maritime Consultant to Aegis Maritime Services, LLC with approximately 35 years of ship repossession experience. Holds licenses as an Unlimited Master Mariner, aviator, and maritime attorney, and is a former NAMS-certified marine surveyor.
    - **Jasmine Perez:** An assistant based in Belize responsible for initial lead follow-up from the CRM.
- **Content & Intellectual Property:**
    - A library of templates, SOPs, and guides from coaching with the **SMB Team** and the **Law Firm Incubator**.
    - 20+ years of **VessEx press coverage** from major outlets (TIME, BBC, The Guardian, etc.) and published books by Max Hardberger (SEIZED, Freighter Captain, etc.).
- **Relationships:**
    - A highly collaborative relationship with **Ocean Marine Brokerage Services (OMB)**, which is a client of AML and the largest U.S. brokerage for the target vessel types. An advertising tracking pixel on the OMB website provides retargeting data.
    - An affiliation with the **Aliant Law** global network, providing legal reach in **30** countries.
- **Technology Stack & Capabilities:**
    - **Primary Strategic Planner:** **Grok 4** serves as the primary strategic planner for business and technology planning.
    - **Primary Orchestrating Agent:** **Claude Desktop** serves as the primary interactive environment and orchestrator for the user. It integrates with other desktop applications and uses an MCP (Model-as-a-Container-Platform) toolkit to act as the \"hands\" of the system, interacting with the local file system and executing commands.
    - **Large Data Processor:** **Gemini** for processing large amounts of data (e.g., SMB Team resources) due to its 1 million token context window, generating temporary files in Google Drive for review before finalization.
    - **Collaboration Space:** **Notion Desktop** is the designated \"workshop\" for drafting, refining, and collaborating on all documents before they are finalized.
    - **Source of Truth Repository:** **GitHub Desktop** is used to manage the definitive Source of Truth (SoT) repository. Finalized documents are committed to this repository from Notion via the Claude agent.
    - **AI Agent Framework:** [**Dify.ai**](http://dify.ai/), a no-code platform, is used to build, host, and manage specialized AI agents (e.g., Report Drafter, Lead Qualification Agent).
    - **Workflow Automation:** A self-hosted **n8n** instance (with subscription option), run via **Docker Desktop**, acts as the central \"plumbing\" connecting APIs and automating event-driven workflows, such as the lead qualification funnel.
    - **AI Model Access:** Access to a suite of AI models (Gemini, OpenAI, [X.AI](http://x.ai/)) via the **Zen-mcp-server**, with **OpenRouter** acting as a universal API endpoint for n8n.
    - **Specialized Research Agent:** **OpenManus** is the planned self-hosted agent for secure, complex web research and dynamic, local tool generation (setup pending in implementation plan).
    **UPDATED: Agents evolved from abandoned Gemini Gems to Claude Projects (interim, with XML tagging per Claude_Prompting_Best_Practices_v1.1.md) and Dify (production); hallucinations mitigations (thresholds, fallbacks). Added vertical agents emulating Anthropic Finance for maritime (e.g., risk analysis, market forecasting via integrated data connectors—source:** [**anthropic.com/news/claude-for-financial-services**](http://anthropic.com/news/claude-for-financial-services)**). Incorporated OpenAI ChatGPT for example agentic capabilities, emphasizing modularity for orchestrator switching (e.g., backup if Claude down). Added memory layer: See annex /Annexes/References/Claude_OpenMemory_System_Brief_v1.0.md for verbatim integration details (persistent context, searchable knowledge, etc.). Integrated context engineering from Context_Engineering_Guide_v1.0.md: Optimize for KV-caching (stable prompts, append-only); use files as extra memory (GitHub/Notion for overflow); mask tools for stability; include errors for learning.**

(Word count: 498)


### Part V: The Strategic Goals (The \"Where\")

- **Immediate AI/MVP Goals:**
    1. **Market Research & Report Generation Tool:** To produce in-depth reports for clients on topics like \"Small Palletized Reefer Vessels\" on a fixed-fee basis.
    2. **\"Know Your Vessel\" (KYV) Due Diligence Tool:** A flexible tool to perform **due diligence** on vessels, from quick checks to full strategic analyses, using scraped data and the Datalastic API.
    3. **Strategic Plan Generator:** A tool to synthesize multiple deep research documents into a single, cohesive strategic plan for a client, such as the \"Caribbean Fuel Transport\" plan.
    _Updated: ASAP rollout (Q3 2025); integrate with Dify KB for agent access._
- **Lead Generation & Qualification:**
    - Restart the successful lead-generation funnel (Facebook/Instagram ads retargeting OMB website visitors) which generated leads at <$10/lead.
    - Implement an automated workflow using n8n and Dify to pre-qualify leads via WhatsApp immediately after they submit a form, replacing the manual Zapier-to-Zoho process.
    - Automatically segment leads into tiers and deliver appropriate value (e.g., self-help guides for sub-$100k leads, report offers for mid-tier leads, and human handoff for high-value leads).
- **Long-Term Vision & Business Model:**
    - Focus on **selling legal products** and **productized advisory services** to maximize scalability and reduce time-consuming direct legal representation.
    - Launch a client-facing portal for sales document creation, using [**Gavel.io**](http://gavel.io/) as the initial out-of-the-box solution due to its speed to implement. **UPDATED: Explore duplicating Gavel functionality in current stack (e.g., Dify for forms, n8n for automation) before final decision.**
    - The primary UI for the internal AI system will be for internal use by you and your team, not a full self-service client portal for report generation initially.
    **UPDATED: Build research library on vessel sales (small ops focus; prioritize due diligence) via Grok 4 Heavy/Gemini for large data. Inspired by Blazing Zebra for context engineering in PM (see new playbook annex). Expanded to include process outline/mind map: Start with Lloyd's certification (classification societies for safety/regs—small ops vs. large: e.g., small may use CONARINA for cost vs. RINA for premium). Include key regulations (e.g., ISM Code, SOLAS for safety; MARPOL for environment). Cover lifecycle: Need assessment (market analysis via SMB Team tools) → Search/acquisition (due diligence SOPs from Law Incubator) → Ops/maintenance (ongoing compliance). Assimilate SMB/Law Incubator for \"business engine\" (e.g., marketing funnels for leads, SOPs for scalable advisory).**
- **5.5 Vessel Sales Research Outline/To-Do for Small Operators**
    - **To-Do:** Conduct deep, cited research (unlimited words) on risks (e.g., hidden defects, overpayment); **due diligence** frameworks (ownership verification, classification checks); frameworks for small ops vs. large (e.g., budget constraints); regulations (e.g., IMO standards); full lifecycle (from need identification to operations). No auto-commits to SoT—manual review required.

(Word count: 452)


### Part VI: System Features & Development Backlog

- **Feature: Evolving Bibliography System**
    - **v1 (MVP):** Generate a consolidated, de-duplicated list of all sources cited in a report.
    - **v2 (Hyperlinked):** Automatically format web sources in the bibliography as clickable hyperlinks.
    - **v3 (Annotated Appendix):** A separate, optional feature to generate a detailed appendix with summaries of each key source cited in the report.
- **Feature: \"AI-Powered, Expert-Vetted\" Brand Messaging**
    - Develop and integrate this core value proposition across all marketing channels and client-facing documents.
- **Feature: Modular \"Intelligence Brief\" Architecture**
    - Design the \"Report Generation Agent\" with a modular architecture based on the six \"Analysis Pillars\" (or \"Intelligence Briefs\") to support a tiered product menu.
- **Feature: Tiered Client-Facing \"Vessel Expert\" Chatbot**
    - **v1 (Internal Use):** A \"Vessel Expert\" chatbot for internal use that can be queried on specific, generated reports.
    - **v2 (Client Portal):** A version of the chatbot made available to paying AMS clients, allowing them to interact with the reports they have purchased.
    - **v3 (Throttled/Premium Access):** A tiered access model where standard clients get a throttled version and premium clients can pay for more advanced analytical capabilities.
- **Feature: AI-Assisted Knowledge Capture:** The system shall proactively identify concepts, decisions, or facts from conversations that are not yet formalized in the Knowledge Base. Upon identifying such an item, the agent will suggest its creation as a new, discrete knowledge asset, which the user can then approve, reject, or edit before it is formally committed to the system. This feature is inspired by the effective, proactive knowledge suggestion capabilities observed in the Manus AI platform.
- **UPDATED: Hallucination Mitigations:** Strict thresholds (0.05), fallback prompts (\"I don't know\"), corrective **RAG** (query rewrite/retries); evals in n8n.
- **NEW: DossDocs/Gavel-Inspired Portals for KYV/Due Diligence:** Implement questionnaire portals for vessel docs intake (inspired by DossDocs: \"Fill-out an easy online questionnaire and the docs are sent to you by email.\" Questionnaire takes ~20 min, save links for edits). Add conditional logic (\"The docs are coded to delete anything that does not apply to your loan. You get only what you need.\") for **KYV** filtering. Integrate with n8n for automation; Gavel for white-labeled portals (SOC II compliant, < billable hour/month pricing, no setup for pre-built forms—source: [gavel.io](http://gavel.io/)). Tailor for **maritime contracts/due diligence**.

(Word count: 418)


### Part VII: System Vision & Ideal Workflow


Building on the features in Part VI, the system vision emphasizes an **AI-first**, scalable architecture for Aegis operations. Key elements include:

- **Content Engine:** Leverage SMB Team templates, guides and books for creating blogs, ads, and handouts for automated marketing; integrate with n8n for dynamic content generation (e.g., personalized vessel tips).
- **Lead Qualification:** Use forms/WhatsApp/n8n for instant triage; segment by budget (e.g., <$100k → self-help; $100k+ → handoff).
- **Assistant Interactions:** Pose targeted questions for clarification; seamless handoff to human experts (e.g., Bono/Hardberger).
- **Consultation Info Handling:** Process specifics like tug purchases in Caribbean under $500k; generate tailored insights via Dify agents.
- **KYV Instant Analysis:** Provide real-time tracking/history via APIs (e.g., Datalastic); flag risks immediately.
- **Sales Outlines:** Automate deal structures with Gavel-inspired conditional logic.
- **Low-Touch Portal:** Offer vetted reports/subscriptions; e.g., $8k/mo for brokers with unlimited access.
- **Entity Focus:** AMS for scalable advisory (reports/portals); AML for bespoke legal; VessEx for enforcement.
- **On-Demand Lead Info:** Pull relevant data (e.g., client history) via **RAG** for personalized responses.
**UPDATED: Apply context engineering lessons (from Context_Engineering_Guide_v1.0.md): Repeat goals via checklists to combat drift in long tasks; include errors in context for resilience (e.g., log failures in Notion for self-correction); avoid repetitive patterns in prompts for flexibility; use GitHub as persistent memory for KYV history.**

(Word count: 298)


### Annex: Source Materials Assimilated


This document was created by synthesizing information from our planning session and the following documents, provided on the specified dates.

- **Provided on June 27, 2025:**
    - [master-plan-ams-platform-v2.0-Gemini.md](http://master-plan-ams-platform-v2.0-gemini.md/)
    - [maritime-context-v1-Gemini.md](http://maritime-context-v1-gemini.md/)
    - Synergy ALE - Outline of Caribbean Fuel Transport Strategic Plan.pdf
    - [gemini-research-workflow.md](http://gemini-research-workflow.md/)
    - [README.md](http://readme.md/) (for KYV App)
    - KYV Analysis_ AGOT (IMO 7700594) - Updated.pdf
    - Comprehensive KYV Due Diligence Program for Commercial Vessels.docx
    - Foundational Chapter on Understanding the Landscape for Small Vessel Transactions.docx
- **Provided on June 28, 2025:**
    - [claude-available-tools.md](http://claude-available-tools.md/)
    - [Manus.im](http://manus.im/) Capabilities and Functionality [Brief.md](http://brief.md/)
    - [Full-Summary-VessEx-Website.md](http://full-summary-vessex-website.md/)
    - The vetted summary of the vesselsales.law website content (initially named Website-Audit-Report-vesselsales.law-Aegis-Maritime [Law.md](http://law.md/) in the Workbench session).
- **Provided on June 30, 2025:**
    - Process [Debrief.md](http://debrief.md/)
- **UPDATED: July 2025—Added Dify/n8n trials, Grok/Claude roles, research outlines, Context_Engineering_Guide_v1.0.md lessons.**

(Word count: 212)


### Annex Links

- [Annex: Report Generation Playbook](https://www.notion.so/Annexes/Playbooks/Aegis_Report_Generation_Playbook_v1.3.md)
- [Annex: Claude Project Development Playbook](https://www.notion.so/Annexes/Playbooks/Aegis_Claude_Project_Development_Playbook_v1.1.md)
- [Annex: Auditor Process](https://www.notion.so/Annexes/Processes/Aegis_Auditor_Process_v1.1.md)
- [Annex: Knowledge Refiner Process](https://www.notion.so/Annexes/Processes/Aegis_Knowledge_Refiner_Process_v1.2.md)
- [Annex: Grok Collaboration Protocol](https://www.notion.so/Annexes/Protocols/Aegis_Grok_Collaboration_Protocol_v1.2.md)
- [Annex: Strategic Planner Protocol](https://www.notion.so/Annexes/Protocols/Aegis_Strategic_Planner_Protocol_v1.4.md)
- [Annex: Claude Available Tools](https://www.notion.so/Annexes/References/Claude_Available_Tools_v1.1.md)
- [Annex: Claude Prompting Best Practices](https://www.notion.so/Annexes/References/Claude_Prompting_Best_Practices_v1.1.md)
- [Annex: Manus Capabilities Brief](https://www.notion.so/Annexes/References/Manus_Capabilities_Brief_v1.1.md)
- [Annex: Knowledge Management Standards](https://www.notion.so/Annexes/References/Knowledge_Management_Standards_v1.4.md)
- [Annex: Integrated Roadmap](https://www.notion.so/Annexes/Roadmaps/Aegis_Integrated_Roadmap_v1.0.md)
- [Annex: Project Management with Context Engineering Playbook](https://www.notion.so/Annexes/Playbooks/Project_Management_with_Context_Engineering_Playbook_v1.0.md)
- [Annex: Claude OpenMemory System Brief](https://www.notion.so/Annexes/References/Claude_OpenMemory_System_Brief_v1.0.md)
- [Annex: Context Engineering Guide](https://www.notion.so/Annexes/Methodologies/Context_Engineering_Guide_v1.0.md)
- [Annex: AnythingLLM Post Mortem](https://www.notion.so/Annexes/Debriefs/AnythingLLM_Post_Mortem_v1.1.md)

(Word count: 215)

