# VAFB Account Preparation Document: Sales-to-Implementation Strategic Bridge

**To:** Implementation Team  
**From:** Senior Strategy Consultant  
**Subject:** Account Preparation & Strategic Transition: Virginia Agricultural Farm Bureau (VAFB)

---

### 1. Client Overview & Context
**Virginia Agricultural Farm Bureau (VAFB)** is a multi-entity organization undergoing a large-scale CRM transformation. The project is currently transitioning from a system-agnostic discovery and solution evaluation phase into implementation planning and partner selection.

*   **Primary Business Goal**: Move from siloed legacy systems to a unified "Single Customer View" to drive member engagement, profitable insurance growth, and producer (agent) motivation.
*   **Primary Stakeholders**: 
    *   **Jason Hart** (Director of Membership Projects) – Main Point of Contact.
    *   **Executive Leadership**: CEO/President, CIO (Pat Caine), and VPs of Sales (Ray Leonard), Marketing (Mike Bolino), and Claims (Tom Gannon).
*   **Involved Teams**: Sales, Insurance Operations, Membership Operations, IT/IS Data Services, Marketing, Healthcare Services, and Finance.

---

### 2. The Sales-to-Implementation "Bridge"
These are the critical technical and structural hurdles that transition this project from a "sold concept" to a "working reality."

*   **Identity Resolution (The "Silo" Gap)**: Customer data is currently fragmented across **Finys** (Insurance) and **Personify** (Membership). There is no common identifier between a "Member" and a "Policyholder." Resolving this to create a single customer record is the project’s technical linchpin.
*   **Shift from Policy-Centric to Customer-Centric**: Legacy systems (Finys) are built around policy numbers, not people. The implementation must architect a data model that supports a 360-degree customer view while respecting the distinct workflows of insurance vs. membership.
*   **Legacy System Sunset & Pipedream Automation**: **Constant Contact** and **Ring Central** are slated for sunset. Current "temporary" syncs are being handled via **Pipedream automation** and HubSpot Deal record IDs; the implementation team must replace these ad-hoc links with a robust integration architecture.
*   **Controlled Data Governance (HIPAA/PII)**: The Healthcare Services unit uses a separate Salesforce instance and handles **HIPAA** data. The bridge requires a clear "security wall" strategy to allow unified marketing while maintaining strict compliance for sensitive medical and insurance data.

---

### 3. Top MVP Strategic Priorities
| Feature / Workstream | Strategic Importance |
| :--- | :--- |
| **Unified Customer Profile** | Eliminates data silos between Insurance and Membership; essential for "Member 360" initiatives. |
| **Sales Quick Wins (90-Day)** | Focus on **Lead Generation** and **Producer Motivation** to show immediate ROI to the field agent workforce. |
| **Finys/Personify Integration** | The "Must-Have" technical integration. Without these, the CRM remains a documentation tool rather than an operational hub. |
| **Omnichannel Comms Engine** | Replaces sunsetting tools (Constant Contact) with unified, automated member journeys (Enrollment, Renewals, Claims). |
| **AI/ML Governance Framework** | Establishes the foundation for future lead scoring and predictive renewal modeling. |

---

### 4. Key Operational Risks
*   **High Change Magnitude**: The organization is diverse (12+ stakeholder groups) and distributed (field agents vs. corporate center). Adoption resistance from long-tenured agents is a primary risk.
*   **Data Quality/Mapping Complexity**: Moving data from customized versions of Finys and Personify into a modern CRM will likely reveal deep-seated data quality issues and mapping gaps.
*   **Regulatory Landmines**: Failure to properly isolate HIPAA data or comply with state insurance regulations during the "Unified View" build-out could lead to legal exposure.
*   **Dependency on VAFB IS Team**: Implementation speed is heavily dependent on the VAFB IS Data Services team for API access and ODS (Data Warehouse) mapping.

---

### 5. Implementation Readiness Checklist
- [ ] **Data Classification Inventory**: Review the already-completed inventory to confirm which fields are HIPAA/PII vs. General Marketing.
- [ ] **Stakeholder Map Finalization**: Verify the 10-12 identified stakeholder groups and their primary "Quick Win" needs.
- [ ] **Environment Access**: Request sandbox/staging access for **Finys**, **Personify**, and the **Azure ODS**.
- [ ] **Procurement Alignment**: Confirm the timeline for the Implementation Partner RFP to ensure transition continuity.
- [ ] **Intranet Launch Sync**: Coordinate initial change management communications with the new VAFB Intranet launch (scheduled for December 2025).

---

**Strategic Note**: The VAFB team is highly focused on a **system-agnostic approach**. Even if a solution (e.g., Salesforce, HubSpot, Dynamics) is preferred, the technical architecture *must* be presented as a strategic fit for their specific multi-entity complexity rather than a standard "out-of-the-box" deployment.
