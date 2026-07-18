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