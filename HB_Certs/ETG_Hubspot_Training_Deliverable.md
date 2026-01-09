---
title: ETG Hubspot Training Protocol
created: 2026-01-09
tags:
  - hubspot
  - crm
  - etg
  - ratehawk
  - roundtrip
  - training
status: verified
certification_level: professional
---

# ETG Hubspot Training Protocol

> [!abstract] Executive Summary
> This document outlines the official **Hubspot CRM Standard Operating Procedure (SOP)** for Emerging Travel Group (ETG), covering multiple brands including **Ratehawk (API & Retail)** and **Roundtrip (CTM)**.
>
> **Core Objective**: Establishes a unified commercial architecture for managing **Lifecycle Stages**, **Automated Lead Routing**, and distinct **Sales Pipelines** for each business unit.

---

## 📑 Module Index

- [[#Module 1: Lifecycle Architecture & Automation|Module 1: Lifecycle & Automation]]
- [[#Module 2: Lead Scoring & Routing Logic|Module 2: Lead Scoring & Routing]]
- [[#Module 3: Pipeline Specifics (Retail, API, CTM)|Module 3: Pipeline Specifics]]
- [[#Module 4: Analytics & Dashboard Governance|Module 4: Analytics & Dashboard Governance]]

---

## Module 1: Lifecycle Architecture & Automation

### 1.1 Custom Lifecycle Stages
ETG utilizes a brand-specific lifecycle model (Lead, MQL, SQL) that differs from Hubspot defaults. Access specific properties via the **Contact Record** sidebar.

> [!tip] Certification Insight: Stage Progression
> Lifecycle stages are governed by a mix of **Automation** (Lead/MQL) and **Manual Verification** (SQL).

| Stage | Trigger / Definition | Owner |
| :--- | :--- | :--- |
| **Lead** | Automatic: **Lead Score 10 - 69** | Marketing / Auto |
| **MQL** | Automatic: **Lead Score 70+** | Marketing / Auto |
| **SQL** | **Manual Gate**: Requires `Sales Manager Verified = Yes` | Sales Manager |
| **Opportunity** | Automatic: Active **Deal** associated to Contact | Sales Rep |
| **Signed / Working** | Automatic: Syncs from **Company Status** (Business Partner) | System / Netsuite |

### 1.2 "Non-Standard" Stages
*   **Non-Booker**: Logic based on GBB segment (Non-booker/Drop-booker).
*   **Fraud**: **Manual Only**. No current automation moves contacts to Fraud status.

---

## Module 2: Lead Scoring & Routing Logic

### 2.1 The Two-Pronged Score
Lead Scores are calculated separately for **Ratehawk API**, **Ratehawk Retail**, and **Roundtrip CTM**. The score is a composite of:
1.  **Fit (Attributes)**: Hard data points (e.g., *Segmentation Type*, *Annual Turnover*, *Number of Employees*).
2.  **Engagement (Behavior)**: Soft data points (e.g., *Marketing Email Opens*, *Link Clicks*).

> [!warning] Group Limits
> Scoring models use **Group Limits** (e.g., Max 60 points for Segmentation) to prevent one attribute from artificially inflating the score.

### 2.2 HubDB Routing Matrix
ETG uses **HubDB** tables for complex routing logic, rather than simple workflows. This allows for granular assignments based on `Region ID` + `Contract Type`.

**Admin Workflow for Team Changes:**
1.  Navigate to `Content > HubDB`.
2.  Select the `Ratehawk Lead Routing` or `Roundtrip Lead Routing` table.
3.  **Add/Remove Row**: Enter the new Rep's Email, Region ID, and User Type.
4.  **Publish**: Changes take effect immediately for new incoming leads.

---

## Module 3: Pipeline Specifics (Retail, API, CTM)

> [!info] Structure Overview
> Each business unit operates on a dedicated Pipeline with unique "Physics" (Stage rules).

### 3.1 Retail Pipeline (Ratehawk)
*   **Physics**: **Linear & Strict**. No skipping stages.
*   **Sync Logic**: **Bidirectional Sync** between Deal Stage and Company Status.
    *   *Deal Stage: Welcome Outreach* ➔ *Company Status: First Interaction*
    *   *Deal Stage: Negotiation* ➔ *Company Status: Negotiation*

### 3.2 API Pipeline (Ratehawk)
*   **Physics**: **Flexible**. Allows skipping stages and moving backward.
*   **Gating**: Heavy use of **Required Fields** to enforce data hygiene.

| Stage | Requirement type | Key Property |
| :--- | :--- | :--- |
| **Implementation In Progress** | **Required** | `Implementation Completion Date` |
| **Certification In Progress** | **Required** | `Anticipated Cert Date` |
| **Contracts Finalized** | **Required** | `Commercial Terms`, `Tech Discovery` |
| **Closed Lost** | **Dependency** | If Reason = "On Hold", requires `Follow-up Date`. |

### 3.3 CTM Pipeline (Roundtrip)
*   **Physics**: **Restricted Handoff**.
*   **The "Iron Curtain"**:
    *   **Sales Managers**: Own stages from *Sales Assessment* ➔ *Closed Won*.
    *   **Account Managers**: Take ownership at *Onboarding* & *Trading*.
*   **Validation**: Moving to *Op Identified* requires the Associated Contact to have valid PII (Phone, Email, Job Title).

---

## Module 4: Analytics & Dashboard Governance

### 4.1 Dashboard Hierarchy
Dashboards are organized by role (e.g., `B2A SM Desktop`, `CTM SM Desktop`).

*   **Global Filtering**:
    *   **Quick Filters**: User-specific (e.g., "My Deals").
    *   **Advanced Filters**: Apply logic like `Sales Manager is [Me]` AND `Date Range is [This Quarter]`.

### 4.2 Report Management Strategy
When modifying dashboards, follow this decision matrix to prevent "Report Bloat":

```mermaid
graph TD
    A[Cloning a Dashboard?] --> B{Need new Metrics?}
    B -->|No - Same Metrics, New View| C[Clone Dashboard Only (Keep Original Reports)]
    B -->|Yes - changing underlying logic| D[Clone Dashboard & Reports]
    C --> E[Lower Database Load]
    D --> F[Higher Maintenance]
```

### 4.3 Sharing & Exporting
*   **Recurring Emails**: Automate delivery of the Leadership Dashboard (Daily/Weekly) to non-Hubspot stakeholders.
*   **External Content**: Use `Actions > Add Content` to embed external Google Sheets or instructional text directly onto the dashboard canvas.
