---
title: Aegis Report Generation Playbook
database: Playbooks
notion_id: 23880979-7b42-80a2-8bad-e1748da42506
last_updated: 2025-07-25T14:15:17.086Z
---

# Aegis Report Generation Playbook


**File Name:** `Aegis_Report_Generation_Playbook_v1.3.md`


**Version:** 1.3


**Date:** 2025-07-20


**Status:** Active


**Path:** `/Annexes/Playbooks/Aegis_Report_Generation_Playbook_v1.3.md`


**Dependencies:** `Aegis_Blueprint_v5.2.md`


**Document Type:** playbook
**Domain:** report_generation
**Prerequisites:** aegis_blueprint, context_engineering_guide
**Related Documents:** /Annexes/Methodologies/Context_Engineering_Guide_v1.0.md, /Annexes/Playbooks/Project_Management_with_Context_Engineering_Playbook_v1.0.md, /Annexes/Playbooks/Aegis_Claude_Project_Development_Playbook_v1.1.md
**Aegis Context:** maritime_report_generation
**Compliance Requirements:** hallucination_mitigations, rag_optimization
**AI Parse Level:** Advanced


_Updated: From v1.2—Merged Aegis_AI_System_Methodology_v1.0.md (renamed/focused on reports; preserved verbatim phases into workflow, Part 2/3 noted as covered in other playbooks). Adapted Gems to_ _**Claude Projects**_ _(interim; XML/role-playing per Claude_Prompting_Best_Practices_v1.1.md). Added_ _**context engineering**_ _(recitation/errors) + Blazing Zebra (mind maps). Integrated Dify/n8n,_ _**hallucination mitigations**_ _(thresholds/fallbacks). Enhanced chunks (200-500 words), bold keywords, ToC._


## Table of Contents

1. [Introduction](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=238809797b4280a28bade1748da42506&pm=s#introduction)
2. [The Report Generation Workflow](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=238809797b4280a28bade1748da42506&pm=s#the-report-generation-workflow)
2.1 [Phase 1: Client Discovery & Constraint Identification](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=238809797b4280a28bade1748da42506&pm=s#phase-1-client-discovery--constraint-identification)
2.2 [Phase 2: Preliminary Intelligence Briefing (PIB)](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=238809797b4280a28bade1748da42506&pm=s#phase-2-preliminary-intelligence-briefing-pib)
2.3 [Phase 3: Human-in-the-Loop Strategy Session](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=238809797b4280a28bade1748da42506&pm=s#phase-3-human-in-the-loop-strategy-session)
2.4 [Phase 4: Unconstrained Deep Research](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=238809797b4280a28bade1748da42506&pm=s#phase-4-unconstrained-deep-research)
2.5 [Phase 5: Final Synthesis & Tailored Formatting](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=238809797b4280a28bade1748da42506&pm=s#phase-5-final-synthesis--tailored-formatting)
2.6 [Phase 6: Structured Refinement & Validation](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=238809797b4280a28bade1748da42506&pm=s#phase-6-structured-refinement--validation)
3. [Additional Methodology Notes](https://www.notion.so/238809797b428041b717f6029c3a50a2?v=238809797b42802aa49f000cfdfbb461&p=238809797b4280a28bade1748da42506&pm=s#additional-methodology-notes)

**DIFFS & DELETIONS (Applied Below):**

- **DIFF: Original (Playbook): Steps 1-6. Revised: Merged methodology Part 1 phases verbatim into workflow (e.g., Phase 1 enhances Step 1)—reason: Redundant; preserve all details.**
- **DIFF: Original (Methodology): Gems in Part 2. Revised: Noted as covered in Aegis_Claude_Project_Development_Playbook_v1.1.md—reason: Avoid duplication.**
- **DIFF: Original (Methodology): Context Engine in Part 3. Revised: Noted as integrated via Dify KB—reason: Align with stack.**
- **DIFF: Original: No advanced integrations. Revised: Added Claude Projects (XML/role-playing), context engineering (recitation/errors), Blazing Zebra (mind maps), Dify/n8n, hallucination mitigations—reason: Per instructions/guides.**
- **Preserved verbatim: Core steps/phases, processes; light transitions/splits for chunks.**

### Introduction


This playbook outlines the standard operating procedure for creating high-value, \"AI-Powered, Expert-Vetted\" strategic reports for Aegis Maritime Services clients. It is a detailed adaptation of the \"High-End Consulting with Gemini\" methodology, now merged with Aegis_AI_System_Methodology_v1.0.md for comprehensive workflow.


(Word count: 68)


### The Report Generation Workflow


### Phase 1: Client Discovery & Constraint Identification

- **Process Description (from source):**
    - Take time to clearly understand the project's objectives, constraints, and desired outcomes.
    - **The Problem Statement:** What exactly do you want the research to solve or clarify?
    - **Audience and Scope:** Who will read this, and how deep should the analysis go?
    - **Desired Output:** Is it a strategic plan, a research paper, a set of recommendations?
    - **Constraints:** Are there budget considerations, time limitations, or particular guidelines you must follow?
    - Aim to gather and articulate as many details as possible. A well-scoped project drastically improves the quality of your AI-generated output.
- **Aegis Adaptation:**
    - This step corresponds directly to **Phase 1: Client Discovery & Constraint Identification** in our internal workflow.
    - **Action:** Formally document the project's problem statement, audience, scope, desired output, and key constraints (e.g., budget, timeline).
    - **BZ Technique:** This incorporates the \"Clearly Define Your Research Project\" step to ensure a well-scoped project from the outset.**UPDATED: Apply context engineering—use recitation checklists to repeat goals (e.g., TODO: Validate objectives against constraints); adapt Blazing Zebra discovery (e.g., stakeholder mapping for maritime clients). Integrate Dify for discovery agents; hallucination mitigations via fallback prompts.**

(Word count: 248)


### Phase 2: Preliminary Intelligence Briefing (PIB)

- **Process Description (from source):**
    - A \"meta prompt\" is a prompt that instructs the AI to create another, more detailed prompt for you. This approach ensures you cover all your research needs in one thorough request.
    - Here's an example of a meta prompt you can paste into the LLM model (or any advanced AI model capable of generating prompts):
    - META PROMPT IN FLASH 2.0: \"Can you help me create a very detailed prompt that I can use for doing some deep research into launching a [consumer healthcare app] that helps [individuals own and track their bloodwork data]. The output of the prompt should yield a McKinsey style report that I can use to help me [launch my SaaS app to serve these individuals]. I am interested in unique perspectives but want to have some focus on actual data and hard evidence for the findings. Again, your goal is to just create a highly detailed prompt.\"
    - When you run this Meta Prompt in the LLM model, it should produce a second, more specialized prompt. Review it, remove any extraneous content (e.g., repeated titles), and prepare it for the deep research phase.
- **Aegis Adaptation:**
    - This corresponds to **Phase 2: Preliminary Intelligence Briefing (PIB)**. We will use this technique to generate the prompt for the PIB.
    *Updated: For full, unconstrained output in deep research (e.g., 20,000+ words), avoid specifying style/length in meta prompt—focus on comprehensive data gathering for later synthesis/mining to KB research library.
    - **Action:** Conduct a rapid, time-boxed research sprint to validate the project's core assumptions and uncover any \"game-changing facts.\"
    - **BZ Technique:** We will adopt the \"Create a 'Meta Prompt'\" technique to generate a highly detailed and specialized prompt for this deep research phase, ensuring a comprehensive and focused PIB.**UPDATED: Incorporate context engineering—mask tools in prompts for stability; avoid repetitive patterns. Adapt Blazing Zebra synthesis for meta prompt creation (e.g., gap analysis in prompts). Use Claude Projects with XML/role-playing (e.g., <instructions> for meta). n8n for sprint automation; hallucination mitigations (thresholds 0.05).**

(Word count: 398)


### Phase 3: Human-in-the-Loop Strategy Session

- **Process Description (from source):**
    - Here's a step-by-step process to ensure quality and credibility:
        1. **Identify relevant experts:** Look for internal teams, independent consultants, or industry veterans with strong domain knowledge.
        2. **Use AI tools like Manus to help find approachable reviewers.**
        3. **Manus Prompt:** \"I'm looking for experts in the consumer healthcare space. I plan to launch a SaaS product in this space. Can you please help me find a list of experts (including contact info) who may be interested in helping me review my go to market strategy? It's important that these folks are approachable. Very high profile people are not applicable as I wouldn't be able to reach them.\"
        4. **Prepare a structured review process:** Create a 2-3 page summary or a few concise slides. Share these with your experts for high-level feedback. Schedule a Q&A session to surface blind spots or clarify unclear sections.
        5. **Seek feedback on:** Data authenticity, Feasibility of recommendations, Strategic soundness of the report.
        6. **Incorporate expert insights:** Update data points, refine assumptions, and revise strategy recommendations.
        7. **Validate final recommendations:** Ensure each suggestion is realistic, well-reasoned, and aligned with your project goals.
        8. **Final quality check:** Use an AI co-pilot or a trusted team member to help spot inconsistencies or weak logic.
- **SIDE NOTE: Explore the Report Visually With Mind Maps**
    - Visualizing your research using mind maps can help clarify structure, spot inconsistencies, and identify key themes even before you seek expert feedback.
    - Paste the entire text of the report into a mind mapping tool (such as an app like Notebook LM or another tool that supports text-to-map features).
    - Generate a mind map. Many tools will automatically detect headers and sub-sections.
    - Use the mind map strategically to look for inconsistencies, identify themes, and quickly navigate to key sections.
- **Aegis Adaptation:**
    - This dual-purpose step corresponds to our **Phase 3: Human-in-the-Loop Strategy Session** (for reviewing the initial PIB) and our **Phase 6: Structured Refinement Cycle** (for reviewing the final draft). Our designated experts are Michael Bono and Max Hardberger.
    - **Action:** The human expert reviews the PIB to provide clear, focused direction for the main research effort.
    - **BZ Technique:** We will integrate the use of **\"Mind Maps\"** for visual exploration of the report structure. This helps clarify structure, spot inconsistencies, and identify key themes before the deep dive.**UPDATED: Integrate context engineering—include errors for better learning (log failures in reviews); adapt Blazing Zebra context synthesis (e.g., stakeholder alignment, risk mapping in reviews). Use Claude Projects for sessions; Dify for review agents; hallucination mitigations via corrective RAG.**

(Word count: 498)


### Phase 4: Unconstrained Deep Research

- **Process Description (from source):**
    - Once you have your Deep Research Prompt (generated by the meta prompt), start a new conversation in the LLM model and do the following:
        1. Turn on \"Deep Research\" (if that's a specific setting in the tool).
        2. Paste the specialized prompt (minus any distracting headings).
        3. Initiate the research.
    - The LLM model may ask clarifying questions and allow you to review its proposed research plan before proceeding. Take the time to answer these questions thoroughly and assess the plan carefully. The result should be a multi-page, consultant-style report that includes analyses, tables, and actionable insights.
- **Aegis Adaptation:**
    - This corresponds to our **Phase 4: Unconstrained Deep Research**. The output of this step is our \"raw intelligence\" document.
    - **Action:** The AI research agent gathers comprehensive raw intelligence based on the focused direction from Phase 3. The output is a detailed document with inline citations, with no formatting or creative constraints.**UPDATED: Add context engineering—use files as extra memory (save interim results to Notion/GitHub); repeat goals to stay focused. From Blazing Zebra, add pre-mortem analysis in research plan review. Use OpenManus via Claude Project; n8n for research chaining; hallucination mitigations (fallbacks).**

(Word count: 248)


### Phase 5: Final Synthesis & Tailored Formatting

- **Process Description (from source):**
    - If the report includes tables or mentions data sets (e.g., market sizes, competitor metrics), consider transforming that data into attractive visuals. One strategy is:
        1. Isolate the data you want to visualize (copy it from your AI report).
        2. Use a Visualization Tool like Napkin AI for quick infographics, bar charts, etc.
        3. Generate graphs or charts based on the data.
        4. Refine and style to match the aesthetic you'd like.
    - NotebookLM PROMPT: Please recommend a few areas of this document that might lend themselves to visual representations. Please return the numeric data that can be used in these visuals as well.
    - Converting your research into a microsite or interactive layout can add significant \"flair\" to your report.
        1. Choose a Tool: v0.dev, Firebase, or other site-generators that accept text input and can produce multi-page layouts.
        2. Use a prompt to convert the report into a professional document with a great layout.
        3. Add images and graphics created in the previous step.
        4. Publish and share with stakeholders.
- **Aegis Adaptation:**
    - This will be a key part of our **Phase 5: Final Synthesis & Tailored Formatting**.
    - **Action:** The vetted raw intelligence is synthesized into a polished report using a prompt template tailored to the client persona.
    - **BZ Technique:** We will adopt the \"Create Data Visualizations and Infographics\" and \"Transform Your Research Into a Microsite or Document Layout\" steps to enhance the final output.
    - This is part of our **Phase 5: Final Synthesis & Tailored Formatting**. For our Minimum Viable Product (MVP), the final deliverable will be an editable Markdown file. The creation of interactive microsites will be added to our long-term Development Backlog.
    **UPDATED: Add context engineering—optimize for caching (stable visual prompts); from Blazing Zebra, incorporate iterative refinement in visual creation; avoid repetitive patterns in layout prompts; adapt adaptive planning (e.g., contingency for layout changes). Integrate Dify for synthesis, n8n for formatting automation; hallucination mitigations (evals). Use Claude Projects with XML.**

(Word count: 452)


### Phase 6: Structured Refinement & Validation

- **Aegis Adaptation:**
    - **Action:** A formal, iterative editing loop using the [[[ ... ]]] annotation method to finalize the report.
    - **BZ Technique:** This phase incorporates the \"Review & Validate the Report\" process, involving a structured review with identified experts to ensure the quality, credibility, and strategic soundness of the final report.
    **NEW: Add hallucination check—use Dify validation for outputs.UPDATED: Use Claude Projects for refinement cycles; add context engineering (include errors for learning).**

(Word count: 112)


### Additional Methodology Notes


**Note on Gem Development Protocol:** Covered in Aegis_Claude_Project_Development_Playbook_v1.1.md (modular **Claude Projects** for assistants).


**Note on Master Context Engine:** Integrated via Dify KB for centralized knowledge; use n8n for updates.


(Word count: 45)

