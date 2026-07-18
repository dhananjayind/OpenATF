# OpenATF Plugin Architecture

**Document Version:** 2.0

**Project Name:** OpenATF (Open Agent Test Framework)

**Architecture Style:** Domain Driven + Capability Based + Plugin First

---

# 1. Purpose

The Plugin Architecture allows OpenATF to support any enterprise application without changing the Core.

The Core Framework understands only generic concepts such as:

- Domain
- Capability
- Business Process
- Workflow
- Task

Application-specific knowledge remains inside plugins.

This ensures the framework remains completely application independent.

---

# 2. Plugin Philosophy

OpenATF does NOT know Salesforce.

OpenATF does NOT know SAP.

OpenATF does NOT know Oracle.

OpenATF only knows

Business Domains

↓

Capabilities

↓

Business Processes

↓

Automation Workflows

↓

Automation Assets

This abstraction allows AI Agents to reason using business language instead of technical implementation.

---

# 3. High Level Plugin Architecture

```text
                                      OpenATF Core
                                            │
                                            ▼
                                 +-----------------------+
                                 |    Plugin Manager     |
                                 +-----------+-----------+
                                             │
                  -------------------------------------------------------
                  │                     │                     │
                  ▼                     ▼                     ▼
          Salesforce Plugin       SAP Plugin        Generic Web Plugin
                  │                     │                     │
                  ▼                     ▼                     ▼
          Business Domains      Business Domains     Business Domains
                  │                     │                     │
                  ▼                     ▼                     ▼
             Capabilities         Capabilities         Capabilities
                  │                     │                     │
                  ▼                     ▼                     ▼
          Business Processes   Business Processes   Business Processes
                  │                     │                     │
                  ▼                     ▼                     ▼
              Workflows            Workflows            Workflows
                  │                     │                     │
                  ▼                     ▼                     ▼
          Automation Assets   Automation Assets   Automation Assets
```

---

# 4. Plugin Structure

Every plugin follows exactly the same structure.

```text
plugins/

salesforce/

│

├── plugin.json

├── domains/

│   ├── sales/

│   ├── service/

│   ├── marketing/

│   └── analytics/

├── capabilities/

├── processes/

├── workflows/

├── automation/

│   ├── pages/

│   ├── locators/

│   ├── validations/

│   ├── api/

│   └── testdata/

├── ai/

│   ├── prompts/

│   ├── knowledge/

│   └── examples/

├── reports/

├── configuration/

└── README.md
```

---

# 5. Layer Responsibilities

## Domains

Represents business areas.

Examples

Sales

Service

Marketing

Analytics

---

## Capabilities

Represents business functionality.

Example

Sales

↓

Accounts

↓

Contacts

↓

Leads

↓

Opportunities

↓

Campaigns

---

## Business Processes

Represents how organizations actually use the application.

Example

Accounts

↓

Create Customer

↓

Update Customer

↓

Merge Customer

↓

Distributor Onboarding

↓

Partner Registration

Business processes are country or customer specific.

---

## Workflows

Represents executable automation flows.

Example

Germany

↓

Create Customer

↓

Validate Tax Rules

↓

Validate Territory

↓

Validate Approval

↓

Complete

---

## Automation Assets

Contains implementation details.

Examples

Playwright

Locators

Page Objects

API Clients

Validation Rules

Test Data

Automation assets are replaceable.

---

# 6. Plugin Manifest

Every plugin contains a manifest.

Example

```json
{
  "id": "salesforce",
  "version": "1.0.0",
  "application": "Salesforce",
  "supportedDomains": [
    "Sales",
    "Service"
  ],
  "automationEngine": "Playwright",
  "capabilities": [
    "Accounts",
    "Contacts",
    "Leads",
    "Opportunities"
  ]
}
```

---

# 7. Capability Model

Example

```text
Sales Domain

│

├── Accounts

├── Contacts

├── Opportunities

├── Leads

└── Reports
```

Accounts

↓

Business Processes

↓

Create Account

↓

Update Account

↓

Delete Account

↓

Merge Account

↓

Automation Workflow

↓

Playwright

The AI never reasons about Page Objects.

The AI reasons about business capabilities.

---

# 8. Country Specific Behaviour

One capability may have multiple business processes.

Example

```text
Accounts

│

├── Global

│

├── Germany

│

├── India

│

├── Japan

│

└── Brazil
```

Germany

↓

Customer Creation

↓

VAT Validation

↓

Postal Code Validation

↓

Approval Process

↓

Workflow

India

↓

GST Validation

↓

PAN Validation

↓

State Validation

↓

Workflow

No framework code changes are required.

Only plugin configuration changes.

---

# 9. Plugin Lifecycle

```text
Framework Starts

↓

Plugin Discovery

↓

Manifest Validation

↓

Load Domains

↓

Load Capabilities

↓

Load Business Processes

↓

Load Workflows

↓

Load Automation Assets

↓

Register Plugin

↓

Ready
```

---

# 10. Plugin Communication

Plugins never communicate directly with technologies.

```text
Plugin

↓

Execution Service

↓

Automation Port

↓

Playwright Adapter

↓

Browser
```

The Core never depends on Playwright.

---

# 11. AI Integration

The Planning Agent asks

Example

"Execute Germany Opportunity Regression"

Plugin

↓

Sales Domain

↓

Opportunity Capability

↓

Germany Business Process

↓

Regression Workflow

↓

Automation Assets

↓

Execution

AI understands business language.

---

# 12. Design Principles

Business First

Capability Driven

Domain Oriented

Plugin Independent

Technology Independent

Open for Extension

Closed for Modification

Single Responsibility

Dependency Inversion

Interface Driven

---

# 13. Advantages

• Supports any enterprise application

• Country specific behaviour is isolated

• Customer specific behaviour is isolated

• Business language instead of technical language

• No framework modification

• Highly scalable

• Easier AI reasoning

• Easier maintenance

• Independent plugin versioning

• Reusable automation assets

---

# 14. Future Enhancements

Plugin Marketplace

Plugin Dependency Management

Version Compatibility

Cloud Plugins

AI Generated Plugins

Plugin Health Monitoring

Plugin Security Validation

Automatic Capability Discovery

---

# 15. Summary

The OpenATF Plugin Architecture follows a Business Domain → Capability → Business Process → Workflow → Automation Asset model.

The framework remains completely generic while plugins encapsulate all application knowledge.

This architecture allows AI Agents to reason using business concepts rather than automation implementation, enabling OpenATF to scale across applications, industries, and countries without changing the Core.