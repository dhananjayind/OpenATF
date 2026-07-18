# OpenATF Technology Stack

**Document Version:** 1.0

**Project Name:** OpenATF (Open Agent Test Framework)

**Author:** Dhananjay Chauhan

---

# 1. Purpose

This document defines the technology stack used by OpenATF.

Technology selection is based on the following principles:

- Open Source
- Enterprise Ready
- Cross Platform
- Extensible
- AI Friendly
- Large Community Support
- Long-Term Maintainability

---

# 2. Technology Stack Overview

| Layer | Technology | Purpose |
|--------|------------|---------|
| Programming Language | TypeScript | Primary development language |
| Runtime | Node.js | Application runtime |
| Package Manager | npm | Dependency management |
| AI Framework | LangGraph | Multi-Agent Workflow Orchestration |
| LLM Provider | Ollama | Local AI Execution |
| Default LLM | Qwen 3 | Reasoning and Planning |
| Browser Automation | Playwright | Web Automation |
| Mobile Automation | Appium *(Future)* | Mobile Testing |
| API Testing | Playwright API / Axios | API Validation |
| Database | PostgreSQL *(Future)* | Framework Metadata |
| Vector Database | Qdrant *(Future)* | RAG Knowledge Base |
| Configuration | YAML / JSON | Framework Configuration |
| Logging | Winston | Centralized Logging |
| Reporting | Allure + HTML | Test Reports |
| CLI | Commander.js | Command Line Interface |
| Dashboard | React *(Future)* | User Interface |
| Documentation | Markdown | Project Documentation |
| Version Control | Git | Source Control |
| CI/CD | GitHub Actions *(Future)* | Build Pipeline |

---

# 3. Technology Selection Rationale

## Why TypeScript?

- Strong typing
- Excellent IDE support
- Enterprise adoption
- Native Playwright support
- Better maintainability

---

## Why Node.js?

- High performance
- Excellent ecosystem
- Cross platform
- Async execution
- Required by Playwright

---

## Why Playwright?

- Modern browser automation
- Multi-browser support
- Built-in waits
- API testing support
- Excellent debugging tools

---

## Why Ollama?

- Completely open source
- Local execution
- No API cost
- Supports multiple LLMs
- Data remains within the organization

---

## Why LangGraph?

- Designed for AI agents
- Workflow orchestration
- Agent collaboration
- Stateful execution
- Enterprise scalability

---

# 4. Future Technology Support

The architecture allows replacement of any technology without redesigning the framework.

Examples:

| Current | Future Replacement |
|----------|--------------------|
| Ollama | OpenAI |
| Ollama | Azure OpenAI |
| Ollama | Claude |
| Playwright | Selenium |
| Playwright | Cypress |
| Appium | Maestro |
| Qdrant | Pinecone |

This flexibility is achieved using interface-driven architecture.

---

# 5. Design Principles

- No business logic depends directly on third-party libraries.
- All external technologies are accessed through adapters.
- Every integration must implement an interface.
- Technologies should remain replaceable.

---

# 6. Summary

OpenATF adopts a modern, open-source technology stack focused on scalability, maintainability, and extensibility.

The framework follows a technology-independent architecture where external tools can evolve without impacting the core platform.