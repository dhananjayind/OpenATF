CommandProcessor → Receives the user command.
WorkflowEngine → Decides what should run.
ExecutionService → Responsible for executing the selected workflow.



git add .
git commit -m "Add Plugin Manager implementation"

Push:

git push origin feature/plugin-manager
Pull Request

GitHub

feature/plugin-manager

↓

develop

PR Title:

feat: Add Plugin Manager

Description:

## Summary

Implemented Plugin Manager.

### Changes

- Added PluginManager
- Plugin Registration
- Plugin Loading

### Testing

- Verified plugin loading
- Verified framework startup
Code Review

Review checklist:

Architecture followed?
SOLID?
Naming?
Comments?
No hardcoding?
Build passing?

Approve.

Merge.

Delete feature branch.

Release Flow

After multiple features:

develop

↓

release/v1.0.0

↓

main

Tag:

v1.0.0
Real Company Flow (What We'll Follow)
main
        ▲
        │
release/*
        ▲
        │
develop
   ▲    ▲
   │    │
feature/*
bugfix/*
Commit Message Convention (Conventional Commits)

We'll use this from today:

feat: Add Browser Manager

fix: Resolve Playwright launch issue

docs: Update README

refactor: Simplify Workflow Engine

test: Add CommandProcessor tests

chore: Update dependencies

This looks professional and works well with release tooling.

📌 Before we continue coding

Let's complete these Git steps first. Once done, every new feature (like PluginManager, AI Engine, Salesforce Plugin) will be developed in its own feature branch, raised as a PR into develop, reviewed, merged, and only then become part of the main codebase.

That's exactly how you'd work on a real enterprise team.

Ye final architecture hoga

                +----------------------+
                |      User/Input      |
                +----------+-----------+
                           |
                           v
                +----------------------+
                |   Command Processor  |
                +----------+-----------+
                           |
                           v
                +----------------------+
                |      AI Planner      |
                | (LLM Understands)    |
                +----------+-----------+
                           |
                           v
                +----------------------+
                |     Plan Builder     |
                +----------+-----------+
                           |
                           v
                +----------------------+
                |    Plugin Manager    |
                +----------+-----------+
                           |
                           v
                +----------------------+
                |  Execution Engine     |
                +----------+-----------+
                           |
                           v
                +----------------------+
                | Browser / API / App  |
                +----------------------+


                ________________________________________

Final Development Roadmap
Phase 1 ✅ (Done)
Project setup
Folder structure
Command Processor
Workflow Engine
Execution Engine
Browser Manager
Playwright Adapter
Git workflow
Phase 2 (Current)

🟢 AI Core

AI Planner
Prompt Builder
LLM Client (Qwen)
Response Parser
Plan Builder
Phase 3

🟢 Plugin System

Plugin Interface
Web Plugin
Salesforce Plugin
SAP Plugin
Phase 4

🟢 Execution

Browser
API
Mobile
Phase 5

🟢 Self Healing

Locator Healing
Retry Engine
Root Cause Analysis
Phase 6

🟢 Reporting

HTML
JSON
Screenshots
Videos
AI Summary
Phase 7

🟢 Integrations

Jira
Azure DevOps
GitHub
Slack
Email



OpenATF:
Requirement
      ↓
AI Understands
      ↓
AI Creates Plan
      ↓
AI Selects Plugin
      ↓
Execution Engine
      ↓
Platform
      ↓
Validation
      ↓
Report
      ↓
AI Analysis



OpenATF v1 Architecturegit checkout develop
OpenATF
│
├── src
│   │
│   ├── adapters/
│   │     └── playwright/
│   │
│   ├── ai/
│   │     ├── client/
│   │     ├── planner/
│   │     ├── parser/
│   │     ├── prompts/
│   │     ├── memory/
│   │     └── model/
│   │
│   ├── config/
│   │
│   ├── core/
│   │     ├── command/
│   │     ├── execution/
│   │     ├── plugin/
│   │     ├── workflow/
│   │     └── report/
│   │
│   ├── plugins/
│   │     ├── web/
│   │     ├── salesforce/
│   │     ├── sap/
│   │     ├── mobile/
│   │     └── api/
│   │
│   ├── reports/
│   │
│   ├── shared/
│   │     ├── constants/
│   │     ├── models/
│   │     ├── interfaces/
│   │     └── types/
│   │
│   └── utils/
│
└── docs/

Framework Layers
Presentation Layer
------------------
User
CLI
REST API (Future)

↓

AI Layer
---------
AI Planner
Prompt Builder
LLM Client
Parser

↓

Core Layer
----------
Workflow Engine
Plugin Manager
Execution Engine

↓

Plugin Layer
------------
Web
Salesforce
SAP
API
Mobile

↓

Adapter Layer
-------------
Playwright
Appium
REST

↓

Target Application
------------------
Browser
Mobile
API
Salesforce
SAP

Dependency Rule (Very Important)
CommandProcessor
        │
        ▼
WorkflowEngine
        │
        ▼
PluginManager
        │
        ▼
Plugin
        │
        ▼
ExecutionService
        │
        ▼
BrowserManager
        │
        ▼
PlaywrightAdapter


Git Strategy (Frozen)
main

↑

develop

↑

feature/*
bugfix/*
hotfix/*
release/*