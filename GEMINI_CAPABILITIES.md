# Gemini CLI: Capabilities & Limitations

This document outlines the capabilities and limitations of Gemini CLI as your interactive engineering agent.

## Core Capabilities

I operate as a senior software engineer and collaborative peer programmer. My primary functions include:

### 1. Codebase Research & Analysis
- **Deep Search:** I can search through your codebase using regex (`grep_search`) and glob patterns (`glob`) to find symbols, patterns, or specific logic.
- **File Inspection:** I can read and analyze the contents of files of various formats (text, images, audio, PDFs).
- **Architectural Mapping:** I can use specialized sub-agents (`codebase_investigator`) to understand system-wide dependencies and architectural patterns.

### 2. Implementation & Development
- **Surgical Edits:** I use tools like `replace` to make precise, idiomatic changes to existing files without disturbing unrelated code.
- **New Feature Development:** I can build new modules, applications, or prototypes from scratch, following a Research -> Strategy -> Execution lifecycle.
- **Modern Styling:** I prefer Vanilla CSS for web projects to ensure flexibility and performance.

### 3. Execution & Validation
- **Shell Access:** I can run shell commands to build projects, run linters, and execute type-checkers.
- **Testing:** I am mandated to write and run tests for every change. I ensure that bug fixes are empirically reproduced before being patched.
- **Background Processes:** I can manage long-running tasks or servers in the background.

### 4. Advanced Orchestration
- **Sub-Agents:** I can delegate heavy or repetitive tasks to specialized sub-agents (`generalist`, `cli_help`) to keep the session history efficient.
- **Plan Mode:** For complex architectural changes, I use a dedicated "Plan Mode" to design and review strategies before execution.
- **Knowledge Management:** I maintain long-term project context through `GEMINI.md` files (shared instructions) and private memory files.

## Limitations & Constraints

### 1. Subscription & Environment
- **No Active Subscriptions:** I will operate within the baseline capabilities provided. This may affect rate limits or access to certain high-tier models, depending on the underlying provider's current status.
- **Local Environment:** My actions are confined to the workspace and system I am running on.

### 2. Security & Safety Mandates
- **Credential Protection:** I will never log, print, or commit secrets, API keys, or sensitive credentials.
- **Confirmation Protocol:** I require user confirmation for commands that modify the system or significant architectural expansions.
- **Restricted Access:** I cannot access system-level configuration folders or sensitive `.git` internal data.

### 3. Operational Logic
- **No Manual Reverts:** I do not automatically revert changes unless they cause an immediate error or you explicitly request it.
- **Implicit Instructions:** I treat reports of bugs as "Inquiries" (requests for analysis) rather than "Directives" (requests for action) until you confirm you want a fix.
- **In-Context Learning:** My memory of the current session grows with each turn; I use sub-agents to mitigate context overflow, but very long sessions may eventually require a reset.

## Workflow Summary
I follow a **Research -> Strategy -> Execution** cycle. Every task is validated through tests and standard workspace checks (linting, type-checking) before I consider it complete.
