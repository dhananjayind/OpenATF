# OpenATF High Level Architecture (HLD)

**Document Version:** 1.0

**Project Name:** OpenATF (Open Agent Test Framework)

**Author:** Dhananjay Chauhan

---

# 1. Purpose

This document describes the overall architecture of OpenATF.

It explains how requests flow through the platform, how AI agents collaborate, how services execute work, and how external automation tools are integrated.

The objective is to build a scalable, modular, AI-native testing platform that supports any application through plugins.

---

# 2. High Level Architecture

## Purpose

This diagram provides a complete overview of the OpenATF platform.

The architecture separates decision-making (AI Agents) from execution (Services) to keep the platform modular, scalable, and maintainable.

## Diagram

```text
+--------------------------------------------------------------------------------------+
|                                        User                                          |
+---------------------------------------------+----------------------------------------+
                                              |
                                              v
+--------------------------------------------------------------------------------------+
|                              Request Management Layer                                |
|--------------------------------------------------------------------------------------|
| Validate Request | Load Configuration | Create Context | Start Workflow              |
+---------------------------------------------+----------------------------------------+
                                              |
                                              v
+--------------------------------------------------------------------------------------+
|                              Workflow Orchestrator                                   |
|--------------------------------------------------------------------------------------|
| Create Workflow | Invoke Agents | Manage State | Decision Routing                    |
+---------------------------------------------+----------------------------------------+
                                              |
                                              v
+--------------------------------------------------------------------------------------+
|                                 AI Agent Layer                                       |
|--------------------------------------------------------------------------------------|
| Requirement | Planning | Validation | RCA | Reporting | Recommendation               |
+---------------------------------------------+----------------------------------------+
                                              |
                                              v
+--------------------------------------------------------------------------------------+
|                                  Service Layer                                       |
|--------------------------------------------------------------------------------------|
| Execution | Plugin | Knowledge | Reporting | Configuration | Logging                 |
+---------------------------------------------+----------------------------------------+
                                              |
                                              v
+--------------------------------------------------------------------------------------+
|                               Automation Layer                                       |
|--------------------------------------------------------------------------------------|
| Web | Mobile | API | Database | Visual | Accessibility                               |
+---------------------------------------------+----------------------------------------+
                                              |
                                              v
+--------------------------------------------------------------------------------------+
|                             Infrastructure Layer                                     |
|--------------------------------------------------------------------------------------|
| Playwright | Appium | Ollama | Jira | GitHub | Browser | File System | Qdrant        |
+--------------------------------------------------------------------------------------+
```

---

# 3. Layer Responsibilities

## 3.1 User Layer

Responsible for interacting with OpenATF.

Possible requests include:

- Execute Smoke Suite
- Execute Regression
- Analyze Release Notes
- Generate Test Cases
- Review Automation
- Generate Daily Status Report

---

## 3.2 Request Management Layer

Responsibilities

- Validate user request
- Parse user input
- Load project configuration
- Create execution context
- Initialize workflow

This layer never executes automation.

---

## 3.3 Workflow Orchestrator

The Workflow Orchestrator is the brain of OpenATF.

Responsibilities

- Decide workflow sequence
- Invoke AI Agents
- Manage workflow state
- Retry failed activities
- Handle exceptions
- Coordinate services

Future implementation may use LangGraph.

---

## 3.4 AI Agent Layer

This layer performs intelligent reasoning.

Agents never execute automation directly.

Responsibilities include

- Requirement Analysis
- Test Planning
- Validation
- Root Cause Analysis
- Reporting
- Recommendations

Each agent has only one responsibility.

---

## 3.5 Service Layer

Services perform the actual work requested by AI Agents.

Examples

- Execution Service
- Plugin Service
- Reporting Service
- Knowledge Service
- Configuration Service
- Logging Service

Services contain business logic.

---

## 3.6 Automation Layer

Responsible for interacting with automation technologies.

Supported engines

- Web Automation
- Mobile Automation
- API Testing
- Database Validation
- Visual Testing
- Accessibility Testing

Automation engines are replaceable.

---

## 3.7 Infrastructure Layer

Provides integration with external technologies.

Examples

- Playwright
- Appium
- Ollama
- Jira
- GitHub
- Browser
- File System
- Vector Database

No business logic should exist in this layer.

---

# 4. Layered Architecture

## Purpose

Shows dependency direction.

Higher layers depend on lower layers.

Lower layers never depend on higher layers.

## Diagram

```text
+---------------------------------------------+
|           Presentation Layer                |
+---------------------------------------------+
|            Workflow Layer                   |
+---------------------------------------------+
|             AI Agent Layer                  |
+---------------------------------------------+
|             Service Layer                   |
+---------------------------------------------+
|            Automation Layer                 |
+---------------------------------------------+
|          Infrastructure Layer               |
+---------------------------------------------+
```

---

# 5. Component Architecture

## Purpose

Shows interaction between the major components.

## Diagram

```text
                     +----------------------+
                     | Workflow Orchestrator|
                     +----------+-----------+
                                |
          +---------------------+----------------------+
          |                     |                      |
          v                     v                      v
+----------------+     +----------------+     +----------------+
| Requirement    |     | Planning       |     | Validation     |
| Agent          |     | Agent          |     | Agent          |
+-------+--------+     +-------+--------+     +-------+--------+
        |                      |                      |
        +----------+-----------+-----------+----------+
                   |                       |
                   v                       v
           +----------------+      +------------------+
           | Execution      |      | Reporting        |
           | Service        |      | Service          |
           +-------+--------+      +--------+---------+
                   |                        |
                   v                        v
             +-----------+          +--------------+
             | Playwright|          | Report Files |
             +-----------+          +--------------+
```

---

# 6. Request Flow

## Purpose

Shows how a user request travels through OpenATF.

## Diagram

```text
User
 │
 ▼
Command Processors
 │
 ▼
Workflow Orchestrator
 │
 ▼
Planning Agent
 │
 ▼
Execution Service
 │
 ▼
Playwright
 │
 ▼
Validation Agent
 │
 ▼
Reporting Service
 │
 ▼
Final Report
```

---

# 7. Architectural Principles

## Principle 1

AI Agents make decisions.

Services perform execution.

---

## Principle 2

Automation engines are replaceable.

---

## Principle 3

Applications are supported through plugins.

---

## Principle 4

Every module has a single responsibility.

---

## Principle 5

All communication should happen through interfaces.

---

## Principle 6

No component should directly depend on a third-party implementation.

---

# 8. Future Enhancements

The architecture has been designed to support future capabilities without major redesign.

Future additions include

- Multi-Agent Collaboration
- Self-Healing
- AI Code Review
- RAG
- Mobile Automation
- Dashboard
- Distributed Execution
- Cloud Execution
- Marketplace for Plugins

---

# 9. Summary

OpenATF follows a layered architecture where each layer has a single responsibility.

AI Agents are responsible for intelligent decision-making while Services execute those decisions using automation engines and external integrations.

This separation enables the platform to remain scalable, maintainable, extensible, and independent of any specific application or technology.