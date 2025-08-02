---
title: Claude Prompting Best Practices
database: References
notion_id: 23f80979-7b42-80fc-9703-e740d4332d3b
last_updated: 2025-08-02T14:34:39.391Z
---

# Claude Prompting Best Practices


# Claude Prompting Best Practices


**File Name:** `Claude_Prompting_Best_Practices_v1.1.md`**Version:** 1.1
**Date:** 2025-07-19
**Status:** Active
**Path:** `/Annexes/References/Claude_Prompting_Best_Practices_v1.1.md`


_Based on the complete Anthropic Prompting Guide. Preserved core content verbatim. Light surgical edits: Added ToC; chunked into short sections (~300-400 words) with headings (e.g., ## Core Principles → subsections); added transitions for flow. Diffs below._


**DIFF: Original: No ToC or subsections; continuous text. Revised: Added ToC and split into descriptive subsections with transitions (e.g., "Building on core principles...")—reason: RAG chunk optimization (short sections ~300-400 words); improve readability/flow.**


## Table of Contents

1. [Core Principles of Prompting Claude](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280fc9703e740d4332d3b&pm=s#core-principles-of-prompting-claude)
    - 1.1 [The Golden Rule of Clear Prompting](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280fc9703e740d4332d3b&pm=s#the-golden-rule-of-clear-prompting)
    - 1.2 [Key Philosophical Points](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280fc9703e740d4332d3b&pm=s#key-philosophical-points)
    - 1.3 [Prerequisites for Effective Prompt Engineering](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280fc9703e740d4332d3b&pm=s#prerequisites-for-effective-prompt-engineering)
2. [Key Prompting Techniques](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280fc9703e740d4332d3b&pm=s#key-prompting-techniques)
    - 2.1 [Role-Playing](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280fc9703e740d4332d3b&pm=s#role-playing)
    - 2.2 [Providing Examples (Few-Shot/Multishot Prompting)](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280fc9703e740d4332d3b&pm=s#providing-examples-few-shotmultishot-prompting)
    - 2.3 [Using XML Tags](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280fc9703e740d4332d3b&pm=s#using-xml-tags)
    - 2.4 [Chain-of-Thought (CoT)](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280fc9703e740d4332d3b&pm=s#chain-of-thought-cot)
3. [Structuring a Prompt](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280fc9703e740d4332d3b&pm=s#structuring-a-prompt)
4. [What to Avoid](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280fc9703e740d4332d3b&pm=s#what-to-avoid)
    - 4.1 [Structural Issues](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280fc9703e740d4332d3b&pm=s#structural-issues)
    - 4.2 [Content Issues](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280fc9703e740d4332d3b&pm=s#content-issues)
    - 4.3 [Technical Issues](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280fc9703e740d4332d3b&pm=s#technical-issues)
    - 4.4 [Performance Issues](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280fc9703e740d4332d3b&pm=s#performance-issues)
5. [Handling Specific Tasks](https://www.notion.so/238809797b42800ea6e4c1bd26f0188c?v=238809797b4280ac969e000c00cadd67&p=23f809797b4280fc9703e740d4332d3b&pm=s#handling-specific-tasks)

## Core Principles of Prompting Claude


The fundamental philosophy behind writing good prompts for Claude is based on treating Claude as **a brilliant but very new employee (with amnesia) who needs explicit instructions**. Claude does not have context on your norms, styles, guidelines, or preferred ways of working. The more precisely you explain what you want, the better Claude's response will be.


### The Golden Rule of Clear Prompting


**Show your prompt to a colleague, ideally someone who has minimal context on the task, and ask them to follow the instructions. If they're confused, Claude will likely be too.**


### Key Philosophical Points:

- **Clarity over brevity**: Be explicit and detailed rather than concise but ambiguous
- **Context is crucial**: Provide all necessary background information
- **Structure matters**: Well-organized prompts lead to better outputs
- **Iteration is expected**: Refine prompts based on Claude's performance
- **Not every problem needs prompt engineering**: Some issues (like latency or cost) may be better solved by selecting a different model

### Prerequisites for Effective Prompt Engineering:

1. A clear definition of success criteria for your use case
2. Ways to empirically test against those criteria
3. A first draft prompt to improve

## Key Prompting Techniques


<!-- Transition added for flow -->
Building on core principles, these techniques help craft effective prompts.


### Role-Playing


**Importance**: Role prompting is the most powerful way to use system prompts with Claude. The right role can turn Claude from a general assistant into your virtual domain expert.


**How to implement**: Use the `system` parameter in the Messages API to set Claude's role. Put everything else, like task-specific instructions, in the 'user' turn instead.


**Benefits**:

- **Enhanced accuracy**: In complex scenarios like legal analysis or financial modeling, role prompting can significantly boost Claude's performance
- **Tailored tone**: Whether you need a CFO's brevity or a copywriter's flair, role prompting adjusts Claude's communication style
- **Improved focus**: By setting the role context, Claude stays more within the bounds of your task's specific requirements

**Example implementation**:


```python
import anthropic

client = anthropic.Anthropic()
response = client.messages.create(
    model="claude-3-7-sonnet-20250219",
    max_tokens=2048,
    system="You are a seasoned data scientist at a Fortune 500 company.", # <-- role prompt
    messages=[
        {"role": "user", "content": "Analyze this dataset for anomalies: <dataset>{{DATASET}}</dataset>"}
    ]
)
```


**Pro tip**: Experiment with roles! A data scientist might see different insights than a marketing strategist for the same data. A data scientist specializing in customer insight analysis for Fortune 500 companies might yield different results still!


### Providing Examples (Few-Shot/Multishot Prompting)


**Importance**: Examples are your secret weapon shortcut for getting Claude to generate exactly what you need. This technique is particularly effective for tasks that require structured outputs or adherence to specific formats.


**Key recommendation**: Include 3-5 diverse, relevant examples to show Claude exactly what you want. More examples = better performance, especially for complex tasks.


**Benefits**:

- **Accuracy**: Examples reduce misinterpretation of instructions
- **Consistency**: Examples enforce uniform structure and style
- **Performance**: Well-chosen examples boost Claude's ability to handle complex tasks

**Crafting effective examples**:

- **Relevant**: Examples mirror your actual use case
- **Diverse**: Examples cover edge cases and potential challenges, vary enough that Claude doesn't inadvertently pick up on unintended patterns
- **Clear**: Examples are wrapped in `<example>` tags (if multiple, nested within `<examples>` tags) for structure

**Additional tips**:

- Ask Claude to evaluate your examples for relevance, diversity, or clarity
- Have Claude generate more examples based on your initial set

### Using XML Tags


**Critical importance**: When prompts involve multiple components like context, instructions, and examples, XML tags can be a game-changer. They help Claude parse prompts more accurately, leading to higher-quality outputs.


**Core principle**: Use tags like `<instructions>`, `<example>`, and `<formatting>` to clearly separate different parts of your prompt. This prevents Claude from mixing up instructions with examples or context.


**Benefits**:

- **Clarity**: Clearly separate different parts of your prompt and ensure your prompt is well structured
- **Accuracy**: Reduce errors caused by Claude misinterpreting parts of your prompt
- **Flexibility**: Easily find, add, remove, or modify parts of your prompt without rewriting everything
- **Parseability**: Having Claude use XML tags in its output makes it easier to extract specific parts of its response by post-processing

**Best practices for XML tagging**:

1. **Be consistent**: Use the same tag names throughout your prompts, and refer to those tag names when talking about the content (e.g., "Using the contract in `<contract>` tags...")
2. **Nest tags**: You should nest tags `<outer><inner></inner></outer>` for hierarchical content

**Power user tip**: Combine XML tags with other techniques like multishot prompting (`<examples>`) or chain of thought (`<thinking>`, `<answer>`). This creates super-structured, high-performance prompts.


**Important note**: There are no canonical "best" XML tags that Claude has been trained with in particular, although we recommend that your tag names make sense with the information they surround.


### Chain-of-Thought (CoT)


**Core concept**: When faced with complex tasks like research, analysis, or problem-solving, giving Claude space to think can dramatically improve its performance. This technique encourages Claude to break down problems step-by-step, leading to more accurate and nuanced outputs.


**Critical requirement**: Always have Claude output its thinking. Without outputting its thought process, no thinking occurs!


**Benefits**:

- **Accuracy**: Stepping through problems reduces errors, especially in math, logic, analysis, or generally complex tasks
- **Coherence**: Structured thinking leads to more cohesive, well-organized responses
- **Debugging**: Seeing Claude's thought process helps you pinpoint where prompts may be unclear

**When to use**: Use CoT for tasks that a human would need to think through, like complex math, multi-step analysis, writing complex documents, or decisions with many factors.


**When not to use**:

- Increased output length may impact latency
- Not all tasks require in-depth thinking
- Use CoT judiciously to ensure the right balance of performance and latency

**Three approaches (ordered from least to most complex)**:

1. **Basic prompt**: Include "Think step-by-step" in your prompt
    - Lacks guidance on how to think (not ideal for specific tasks)
2. **Guided prompt**: Outline specific steps for Claude to follow in its thinking process
    - Lacks structuring to make it easy to strip out and separate the answer from the thinking
3. **Structured prompt**: Use XML tags like `<thinking>` and `<answer>` to separate reasoning from the final answer
    - Most powerful approach that allows easy separation of reasoning from final output

## Structuring a Prompt


<!-- Transition added for flow -->
Based on the comprehensive guide analysis, here's a step-by-step approach to structuring complex prompts:


### Step 1: Set the Role (System Prompt)

- Use the `system` parameter to define Claude's role and expertise
- Be specific about the domain and level of expertise needed
- Example: "You are an expert maritime lawyer with 15 years of experience in international shipping disputes"

### Step 2: Provide Context and Background (User Message - Top Section)

- For long-form data (20K+ tokens), place documents at the top of your prompt
- Use XML tags to structure different types of information:
    - `<context>` for background information
    - `<document>` for source materials with `<document_content>` and `<source>` subtags
    - `<constraints>` for limitations or requirements

### Step 3: Include Examples (Middle Section)

- Wrap examples in `<examples>` tags with individual `<example>` tags
- Provide 3-5 diverse, relevant examples
- Ensure examples cover edge cases and potential challenges

### Step 4: Give Clear Instructions (Bottom Section)

- Use `<instructions>` tags to separate from other content
- Be specific about what you want Claude to do
- Provide instructions as sequential steps using numbered lists or bullet points
- Specify the desired output format

### Step 5: Enable Thinking (If Needed)

- For complex tasks, ask Claude to think step-by-step
- Use structured thinking with `<thinking>` and `<answer>` tags
- Guide the thinking process with specific steps if needed

### Step 6: Specify Output Format

- Use `<formatting>` tags to specify desired output structure
- Consider using prefilling for specific formats (like JSON)
- Be explicit about what should and shouldn't be included

**Example Structure:**


```plain text
System: You are an expert financial analyst...

User:
<context>
[Background information about the task]
</context>

<documents>
<document>
<source>Annual Report 2023</source>
<document_content>
[Long document content]
</document_content>
</document>
</documents>

<examples>
<example>
[Example input and desired output]
</example>
</examples>

<instructions>
1. First, think through the analysis step by step in <thinking> tags
2. Quote relevant sections from the documents
3. Provide your analysis in <answer> tags
4. Format your response as JSON
</instructions>

<formatting>
Output format: {"analysis": "...", "quotes": [...], "recommendations": [...]}
</formatting>
```


## What to Avoid


<!-- Transition added for flow -->
Based on the guide analysis, here are key anti-patterns and mistakes to avoid:


### Structural Issues:

- **Don't mix instructions with examples**: Use XML tags to clearly separate different parts of your prompt
- **Don't put queries at the beginning**: For long documents, place queries at the end (can improve response quality by up to 30%)
- **Don't use trailing whitespace in prefills**: Prefill content cannot end with trailing whitespace or it will result in an error
- **Don't skip outputting thinking**: Without outputting its thought process, no thinking occurs in chain-of-thought prompting

### Content Issues:

- **Don't be vague or ambiguous**: Claude needs explicit instructions, not implicit understanding
- **Don't assume context**: Claude doesn't know your norms, styles, or preferred ways of working
- **Don't try to handle everything in one prompt**: For complex multi-step tasks, use prompt chaining instead
- **Don't ignore the golden rule**: If a colleague would be confused by your prompt, Claude will be too

### Technical Issues:

- **Don't use prefilling with extended thinking modes**: Prefilling is only available for non-extended thinking modes
- **Don't rely solely on prompt engineering**: Some issues (latency, cost) may be better solved by selecting a different model
- **Don't forget to iterate**: Refine prompts based on Claude's performance rather than expecting perfection on the first try

### Performance Issues:

- **Don't use chain-of-thought for simple tasks**: CoT increases output length and may impact latency unnecessarily
- **Don't create overly complex single prompts**: Break down complex tasks into smaller, manageable subtasks through chaining
- **Don't ignore the order of techniques**: Try techniques in order of effectiveness (as listed in the guide) when troubleshooting

## Handling Specific Tasks


### Text Generation

- Use role prompting to set the appropriate voice and expertise
- Provide examples of the desired style and format
- Use structured thinking to separate ideation from execution
- Chain prompts for multi-step content creation: Research → Outline → Draft → Edit → Format

### Classification Tasks

- Provide 3-5 diverse examples of each category
- Use XML tags to structure input data and classification criteria
- Prefill responses to enforce specific output formats (e.g., prefill `{` for JSON)
- Use clear categories and explicit decision criteria

### Data Extraction

- Structure documents with `<document>` tags and metadata
- Ground responses in quotes by asking Claude to quote relevant parts first
- Use XML tags for clear output structure
- Prefill responses for consistent formatting (especially JSON)

### Analysis Tasks

- Use role prompting to set appropriate expertise level
- Enable chain-of-thought for complex analysis
- Provide context about what the analysis will be used for
- Structure with XML tags to separate data, instructions, and output requirements

### Long Document Processing

- Put documents at the top of your prompt (above queries and instructions)
- Use XML structure with `<document>`, `<document_content>`, and `<source>` tags
- Ground responses in quotes to help Claude focus on relevant content
- Consider prompt chaining for multi-step document analysis

### Multi-Step Workflows

- Use prompt chaining to break complex tasks into manageable subtasks
- Structure with XML for clear handoffs between prompts
- Have single-task goals for each subtask
- Consider self-correction chains for high-stakes tasks

### Decision-Making Tasks

- Use guided chain-of-thought to structure the decision process
- Provide clear criteria for evaluation
- Use examples of good decision-making processes
- Consider chaining: Gather info → List options → Analyze each → Recommend

### Creative Tasks

- Use role prompting to set creative context and expertise
- Provide diverse examples to show range and style
- Use structured thinking to separate ideation from execution
- Chain prompts for iterative refinement

<!-- Transition added for flow -->
This comprehensive guide synthesizes all the key techniques and principles from the Anthropic Prompting Guide to help you write more effective prompts for Claude across a wide variety of tasks and use cases.

