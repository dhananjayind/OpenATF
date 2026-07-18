# OpenATF Core Architecture

**Document Version:** 1.0

**Project Name:** OpenATF (Open Agent Test Framework)

---

# 1. Purpose

The Core Architecture defines the central execution engine of OpenATF.

It describes how requests are converted into workflows, workflows into tasks, tasks into AI decisions, and finally into executable automation.

The Core is completely independent of Playwright, Ollama, Jira, Salesforce or any other external technology.

---

# 2. Core Components

```text
                              User
                                │
                                ▼
                    +----------------------+
                    |  Command Processor   |
                    +----------+-----------+
                               │
                               ▼
                    +----------------------+
                    |   Workflow Engine    |
                    +----------+-----------+
                               │
                               ▼
                    +----------------------+
                    |    Task Manager      |
                    +----------+-----------+
                               │
              +----------------+----------------+
              │                │                │
              ▼                ▼                ▼
      Requirement Task   Execution Task   Report Task
              │                │                │
              ▼                ▼                ▼
      Requirement Agent  Execution Agent Report Agent
              │                │                │
              +----------------+----------------+
                               │
                               ▼
                    +----------------------+
                    |  Service Registry    |
                    +----------+-----------+
                               │
          +--------------------+--------------------+
          │                    │                    │
          ▼                    ▼                    ▼
     AI Service      Execution Service    Reporting Service
                               │
                               ▼
                    +----------------------+
                    |      Adapters        |
                    +----------+-----------+
                               │
                               ▼
       Playwright | Ollama | Jira | Database | File System
```

---

# 3. Component Responsibilities

## Command Processor

Receives every incoming command.

Examples

- Run Smoke Suite
- Execute Regression
- Analyze Release Notes
- Generate Report

Responsibilities

- Validate command
- Create execution context
- Start workflow

---

## Workflow Engine

Responsible for orchestration.

Responsibilities

- Select workflow
- Define execution sequence
- Handle retries
- Handle failures
- Manage execution state

---

## Task Manager

Breaks workflows into executable tasks.

Example

Workflow

↓

Analyze Requirement

↓

Create Test Plan

↓

Execute Tests

↓

Validate Results

↓

Generate Report

Each task is independent.

---

## AI Agents

AI agents perform reasoning.

They never execute automation directly.

Responsibilities

- Requirement Analysis
- Planning
- Validation
- Root Cause Analysis
- Reporting

---

## Service Registry

Acts as the gateway to framework services.

Examples

- AI Service
- Execution Service
- Reporting Service
- Knowledge Service

---

## Services

Perform the actual work.

Examples

Execution Service

↓

Browser Automation

Reporting Service

↓

Generate HTML Report

Knowledge Service

↓

Read Release Notes

---

## Adapters

Implement communication with external technologies.

Examples

- Playwright
- Ollama
- Jira
- GitHub
- Qdrant

---

# 4. Execution Lifecycle

```text
User Command

↓

Command Processor

↓

Workflow Engine

↓

Task Manager

↓

AI Agent

↓

Service

↓

Adapter

↓

External System

↓

Response

↓

Validation

↓

Reporting
```

---

# 5. Core Principles

1. Commands initiate workflows.

2. Workflows create tasks.

3. Tasks are executed by services.

4. AI agents make decisions.

5. Services perform work.

6. Adapters communicate with external systems.

7. External technologies never interact directly with the core.

---

# 6. Benefits

- Clear separation of responsibilities
- Replaceable technologies
- Easy unit testing
- AI independent of automation tools
- Highly extensible
- Enterprise-ready architecture
- Plugin-friendly design
- Supports future cloud and distributed execution

---

# 7. Summary

The Core Architecture is the execution backbone of OpenATF.

Every request follows a consistent lifecycle from command to workflow, workflow to tasks, tasks to AI reasoning, services, adapters and finally external systems.

This design keeps OpenATF scalable, modular and independent of specific technologies.