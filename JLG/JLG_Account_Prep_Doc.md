# JLG Account Preparation Document

**Role**: Senior Strategy Consultant
**Project**: HubSpot CRM Implementation & Legacy System Migration (Dynamics 365, Marketo)
**Date**: December 18, 2025

---

## 1. Client Overview & Context
*   **Main Stakeholders**: Jon (Executive Sponsor/Strategy), Ben (IT & Data Lead), Scott Crawford (Sales Lead), Rick (CFO).
*   **Primary Business Goal**: Consolidate JLG’s complex sales, marketing, and subscription operations from a heavily customized Dynamics 365/Marketo stack into HubSpot. The objective is to reduce technical debt, enable cross-brand selling (JLG, Library Journal, School Library Journal, Hornbook), and modernize the renewal engine.
*   **Key Teams Involved**: A8 Strategy & Implementation, JLG IT/Data Team (30+ members), Sales Ops, and SAP Hosting Partners (SMB).

## 2. The Sales-to-Implementation "Bridge"
These are the technical and structural hurdles that must be bridged to ensure a successful transition from the sold concept to a working implementation:

*   **Custom SAP B1 Subscription Integration**: This is the most complex technical dependency. SAP B1 handles subscription fulfillment via a custom module not accessible via standard APIs. The current bridge relies on SQL database views for reading and API calls for writing. The implementation team must coordinate with the third-party hosting partner (SMB) for security clearance and architecture approval early.
*   **Many-to-Many Identity & Relationship Resolution**: JLG uses a complex hierarchy (Districts -> Schools -> Contacts) where contacts often associate with multiple schools. Mapping this into HubSpot’s standard object model while preserving the "School-level" logging and "District-level" reporting currently found in Dynamics will require a heavy Custom Object implementation (Schools, Districts) and precise association labeling.
*   **The "Cohort-Based" Renewal Engine**: JLG’s business model relies on automated renewal opportunity generation driven by "Processing Cohorts." The implementation team must bridge the logic between Dynamics' custom automation and HubSpot’s workflow engine to ensure sales reps have auto-generated opportunities and quotes ready for the busy season (starting mid-March).
*   **Marketo-to-HubSpot Migration Timeline**: With a Marketo renewal deadline of Feb 28, there is a hard stop on asset migration. The bridge here is prioritizing which 5-6 journeys and 100K contacts are "clean" enough to move immediately versus what needs to be archived or rebuilt in Phase 2.

## 3. Top MVP Strategic Priorities

| Feature | Strategic Importance |
| :--- | :--- |
| **SAP B1 Bi-Directional Sync** | Maintains SAP as the financial Source of Truth while giving Sales real-time visibility into subscription status and loyalty tiers. |
| **Custom Data Model (Schools/Districts)** | Essential for maintaining the complex relationship hierarchy that ensures accurate sales attribution and communication logging. |
| **Renewal Automation POC** | Replicates the "Processing Cohort" logic to ensure no disruption to JLG’s primary revenue stream during the CRM transition. |
| **Self-Service Renewal Portal** | Reduces administrative overhead by allowing customers to upsell themselves and modify subscriptions via dynamic URLs/Quotes. |
| **Dynamics 365 Data Migration** | Foundational requirement for user adoption; requires precise mapping of historical activities to prevent "blind" transitions for the 35-40 sales users. |

## 4. Key Operational Risks
*   **Third-Party Vendor Dependency**: The timeline for SAP integration is heavily dependent on the response from the hosting partner (SMB). Delays in vendor approval could push the entire CRM launch.
*   **Data Volume & Velocity**: JLG’s data team (30 people) modifies 6-7K records daily. Ensuring data integrity during a delta migration and preventing sync loops between HubSpot and SAP is a high-priority technical risk.
*   **Tight Migration Window**: The Marketo contract ends Feb 28, and the "Busy Season" starts in mid-March. There is almost zero buffer for delays in the discovery or build phases for Marketing Hub.
*   **Custom Object Limitations**: With multiple custom objects identified (Loyalty, Suggested Products, Processing Cohorts, Tax Exemption, etc.), the team must be wary of HubSpot’s architectural limits and ensure reporting can still roll up effectively.

## 5. Implementation Readiness Checklist
- [ ] **Technical Access**: Secure SQL Server database view access and API credentials for SAP Business One from SMB hosting.
- [ ] **Data Audit**: Finalize export of Dynamics 365 custom objects to validate the many-to-many relationship mapping.
- [ ] **Portal Decision**: Confirm if native HubSpot Quotes are sufficient for the "One-Click Renewal" or if a custom-built portal is required.
- [ ] **Permissions**: Obtain Super Admin access to the existing HubSpot portal (Library Journal) and all relevant sandboxes.
- [ ] **Asset Inventory**: Export all Marketo workflows and journeys to be migrated to determine the "Phase 1" scope vs. "Phase 2".
