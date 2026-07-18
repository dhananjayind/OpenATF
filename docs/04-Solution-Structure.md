# OpenATF Solution Structure

**Document Version:** 2.0

**Project Name:** OpenATF (Open Agent Test Framework)

**Author:** Dhananjay Chauhan

---

# 1. Purpose

This document defines the logical structure of the OpenATF solution.

The objective is to build a scalable, maintainable and technology-independent platform based on Hexagonal Architecture (Ports & Adapters).

Every module has a single responsibility and communicates through interfaces rather than concrete implementations.

---

# 2. Solution Structure

```text
openatf/
│
├── docs/
│
├── src/
│   │
│   ├── application/
│   │   ├── commands/
│   │   ├── workflows/
│   │   ├── tasks/
│   │   └── usecases/
│   │
│   ├── domain/
│   │   ├── agents/
│   │   ├── models/
│   │   ├── events/
│   │   ├── rules/
│   │   └── valueobjects/
│   │
│   ├── ports/
│   │   ├── ai/
│   │   ├── automation/
│   │   ├── reporting/
│   │   ├── plugin/
│   │   ├── storage/
│   │   └── integrations/
│   │
│   ├── adapters/
│   │   ├── ai/
│   │   ├── automation/
│   │   ├── reporting/
│   │   ├── storage/
│   │   └── integrations/
│   │
│   ├── infrastructure/
│   │   ├── configuration/
│   │   ├── dependency-injection/
│   │   ├── logging/
│   │   ├── lifecycle/
│   │   └── monitoring/
│   │
│   ├── plugins/
│   │
│   ├── shared/
│   │
│   └── index.ts
│
├── tests/
├── examples/
├── scripts/
├── package.json
├── tsconfig.json
└── README.md
```

---

# 3. Module Responsibilities

## application/

Contains application use cases.

Examples

- Execute Test Suite
- Analyze Requirement
- Generate Report
- Run Regression

This layer coordinates business operations.

---

## domain/

Contains business knowledge.

Examples

- Agent
- Workflow
- Task
- ExecutionPlan
- TestCase
- Project
- Plugin

No third-party libraries are allowed here.

---

## ports/

Contains interfaces (contracts).

Examples

- AI Provider
- Browser Automation
- Report Generator
- Plugin Contract

The application depends only on these interfaces.

---

## adapters/

Contains implementations of ports.

Examples

- Playwright Adapter
- Ollama Adapter
- Jira Adapter
- HTML Report Adapter

Adapters communicate with external technologies.

---

## infrastructure/

Contains framework infrastructure.

Examples

- Logging
- Configuration
- Dependency Injection
- Environment
- Startup

No business logic belongs here.

---

## plugins/

Contains application-specific extensions.

Example

Salesforce Plugin

SAP Plugin

Banking Plugin

Healthcare Plugin

Plugins extend OpenATF without modifying its core.

---

## shared/

Contains reusable components.

Examples

- Constants
- Enums
- Exceptions
- Utilities
- Common Types

---

# 4. Design Principles

• Single Responsibility Principle

• Dependency Inversion Principle

• Interface Driven Design

• Plugin First Architecture

• Technology Independence

• AI First Design

• Open for Extension

• Closed for Modification

---

# 5. Summary

The OpenATF solution follows Hexagonal Architecture.

Business logic remains isolated from external technologies, allowing Playwright, Ollama, Jira, databases and future integrations to be replaced without impacting the core platform.