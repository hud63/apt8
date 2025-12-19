# Account Preparation Document: Greenix

## 1. Client Overview & Context
Greenix is a pest control company undergoing a significant digital transformation centered around HubSpot, PestRoutes, and Genesys. 
- **Primary Goal**: Replace the current sales process (largely manual/PestRoutes-centric) with a high-efficiency HubSpot-driven engine.
- **Key Contacts**: 
    - **Ben / Kuj**: Strategic leadership and sales process owners.
    - **Jeff Cox**: Marketing and data owner; key for reporting and original source integrity.
    - **Karen Hanna**: Lead consultant (Aptitude 8).

## 2. The Sales-to-Implementation "Bridge"
The following items are critical transitions required for a successful implementation:

### A. Lead Identity & Intake (Genesys -> HubSpot)
- **Problem**: Phone leads often lack email addresses, but HubSpot requires email as a primary identifier.
- **Strategy**: Implementation must manage contact de-duplication and identity resolution between Genesys call fields and HubSpot contact records.
- **Action**: Ensure the Genesys integration correctly maps caller ID and available metadata to avoid orphaned contacts.

### B. Structural Shift: Commercial Address Management
- **Decision**: Moving from Contact-centric to **Company-centric** for commercial accounts.
- **Process**: Each service location = one Deal attached to a Company record.
- **Bridge Requirement**: Migration of existing commercial data to this new structure and training sales agents to create Deals at the Company level rather than the Contact level.

### C. ZIP Code & Territory Mapping
- **Technical Gap**: USPS API is restricted.
- **Solution**: A static database (Supabase + CSV import) will map ~42k ZIP codes to branch locations.
- **Bridge Requirement**: Finalize branch-to-ZIP mapping file to power automated routing.

## 3. Top MVP Strategic Priorities
The sales team's efficacy depends on these core HubSpot configurations:

| Feature | Strategic Importance |
| :--- | :--- |
| **Dynamic Callback Lists** | Shift from linear lead handling to "Last In, First Out" (LIFO) based on engagement (ad clicks, website visits). |
| **Sales Sequences** | Automation for 2 high-priority sequences (Non-converted leads, pitchable vs non-pitchable branching). |
| **Reporting Dashboards** | Focus on **Conversion Rate by Call Source**. Agent vs. Manager views for stack ranking and ACV per opportunity. |
| **Service Expiration** | Automation to prevent short-burst services (e.g., Roach service) from continuing indefinitely. |

## 4. Key Operational Risks
- **PestRoutes API**: Currently writing to the wrong database (sandbox vs. production). Needs environment alignment before go-live.
- **Identity Integrity**: Phone leads without email will create duplicates if not managed via custom logic or manual cleanup.
- **Third-Party Dependencies**: Local SMS number provisioning (5-7 days) and Genesys wireframe feedback loops.

## 5. Implementation Readiness Checklist
- [ ] **Access**: KHanna production user permissions for sequences.
- [ ] **Data**: Spreadsheet of service types and corresponding expiration rules.
- [ ] **Training**: Plan for 60-min sessions (Live, Office Hours, Leadership).
- [ ] **Documentation**: Handover of all A8 custom processes.
