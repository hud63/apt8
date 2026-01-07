# re:Members

## **A8 Summary** 

re:Members claims to be "**infinitely flexible**" and offer "**no custom complexity**" — but provides **remarkably little evidence** that ASIS staff can independently configure complex backend business rules.

---

## **What They Prove Well**

| Capability | Evidence | Self-Service? |
| ----- | ----- | ----- |
| **Frontend Configuration** | Query builder (p.24), dashboards (p.39-41), security roles (p.26) | Yes |
| **Basic Workflows** | Power Automate examples (p.34-38): cart recovery, notifications, data sync | Yes, with training |
| **Integration Ecosystem** | 700+ Power Automate connectors, proven HubSpot/Sage/Higher Logic integrations | Yes |

---

## **What They DON'T Prove**

### **ASIS's Complex Requirements — Zero Configuration Evidence:**

| Requirement | Complexity | re:Members Shows |
| ----- | ----- | ----- |
| **ANSI Compliance** (50% interest category cap with real-time validation) | HIGH | Claims "automated" (p.51) but **zero screenshots** of configuration |
| **Conditional Prerequisites** (CSO requires active Regular membership) | MEDIUM | **Not mentioned** |
| **Automatic Calculations** (Lifetime after 20 consecutive OR 50 total years) | HIGH | **Not mentioned** |
| **Prorated Revenue Recognition** (monthly GL entries based on join date) | HIGH | **Not mentioned** |
| **CPE Credit Formulas** (partial attendance \= partial credit) | MEDIUM | **Not mentioned** |
| **Multi-Tier Corporate Pricing** (first 10 \= $X, next 20 \= $Y) | MEDIUM | Shows roster management (p.22) but **not pricing rules** |

---

## **Critical Red Flags**

### **1\. Marketing Claims Without Evidence**

* **Says**: "infinitely flexible," "highly configurable," "adapts to your business processes" (p.5-13)  
* **Shows**: Zero backend business rule configuration screenshots  
* **Means**: Flexibility likely requires **consultant services**, not self-service

### **2\. "No Custom Complexity" ≠ "No Consultants Required"**

* **Says**: "Without custom complexity" (p.28)  
* **Means**: They don't write custom code BUT you need **their consultants to configure complex rules** via Power Automate/APIs 

### **3\. Implementation Cost \= Configuration Services**

* **$102K buys**: re:Members staff configuring your requirements  
* **Does NOT prove**: ASIS staff can maintain/modify after go-live

### **4\. Power Automate is Low-Code, Not No-Code**

* Simple automation (cart recovery):  No-code  
* Complex logic (ANSI compliance, revenue proration):  Requires technical skills

---

## **Demo Script**

### **Request Live Configuration (Not Consultant Services)**

**Scenario 1: ANSI Compliance**

"Show ASIS staff configuring: No interest category can exceed 50% of voting members. Change threshold to 40%. Add new category. Show prevention of 6th member violating cap."

**Scenario 2: Conditional Membership**

"Configure: CSO membership requires active Regular membership. If member tries to buy CSO without Regular, block the purchase with error message."

**Scenario 3: Automatic Lifetime Qualification**

"Show: After 20 consecutive years OR 50 total years, auto-convert to Lifetime ($0 dues) and send email. Change 20 years to 15."

**Scenario 4: Prorated Revenue**

"Member joins March 15, 2025 for calendar-year membership. Show system calculating daily proration for March, monthly for Apr-Dec."

**Watch For:**

* "We configure that during implementation" \= **Not self-service**  
* "That's a Power Automate workflow we'd build" \= **Consultant required**  
* “Let me show a simpler example" \= **They can't do it**  
* “They **actually configure it** using point-and-click tools

---

## **Overall**

### **re:Members IS:**

* Mature, stable platform (10+ years, SOC 2 certified)  
* True SaaS (no custom code forks)  
* Strong frontend configuration  
* Excellent integration ecosystem  
* Experienced implementation team (90% former association execs)

### **re:Members IS NOT:**

* Proven for complex backend business logic configuration  
* Transparent about ongoing configuration support costs  
*  "Infinitely flexible" for ASIS staff (likely requires consultants)

# Wicket

## **A8 Summary** 

This comes down to if the team is committed to Magento, Wicket offers a modern, flexible alternative to traditional AMS with better long-term adaptability. You all prefer turnkey solutions with less technical overhead, a traditional AMS replacement might provide more predictable implementation and ongoing costs. The scope could snowball with this. 

## ---

## **Gap Analysis**

### **Strong Alignment Areas**

1. **Member Data Management**  
   * Wicket MDP designed specifically for complex member data  
   * Unlimited custom fields vs. rigid AMS schemas  
   * 250,000 contact capacity fits ASIS needs  
2. **Integration Architecture**  
   * 10 managed integrations (HubSpot, Cvent, Prolydian, Higher Logic, etc.)  
   * Modern REST API for custom integrations  
   * Real-time data sync vs. batch processes  
3. **Member Portal & Self-Service**  
   * WordPress provides vastly more flexibility than AMS portals  
   * Custom layouts, content types, and user experiences  
   * Mobile-responsive, accessibility-compliant  
4. **Touchpoint Tracking**  
   * Unified view of member engagement across all systems  
   * Automatic touchpoint creation from integrated platforms  
   * 360-degree member view  
5. **Segmentation & Marketing**  
   * Dynamic segments based on any data in MDP  
   * HubSpot integration for sophisticated marketing automation  
   * Real-time sync for personalization

### **Areas Requiring Attention**

1. **Ecommerce Responsibility Split**  
   * **ASIS Challenge:** Must maintain Magento integration with MDP themselves  
   * **Wicket Position:** "Support ASIS staff/vendor to leverage Wicket MDP's REST API"  
   * **Risk:** ASIS needs strong internal or vendor capability for Magento\<\>Wicket integration  
   * **Cost Impact:** Magento integration is custom, not a fixed Wicket deliverable  
2. **Financial Integration**  
   * Wicket doesn't include native accounting software integration  
   * ASIS must handle Magento→Accounting sync separately  
   * Traditional AMS typically includes GL integration  
3. **Complex Membership Pricing Logic**  
   * Many pricing rules may need to live in Magento, not MDP  
   * Requires careful architecture planning during discovery  
   * Could create scattered business logic  
4. **Certification Application Workflows**  
   * Application processes split between Prolydian and potentially Magento  
   * Wicket provides data sync but not workflow orchestration  
   * Requires clear process design

### **Potential Gaps**

1. **No Native Ecommerce**  
   * Reliance on Magento is strategic but requires ASIS commitment  
   * If Magento becomes problematic, significant rework needed  
   * No turnkey shopping cart like an AMS would provide  
2. **Limited Out-of-Box Workflows**  
   * MDP is a data platform, not a process engine  
   * Complex approval workflows, eligibility rules need custom development  
   * Traditional AMS includes pre-built association workflows  
3. **Corporate Membership Complexity**  
   * Roster management for organizations requires custom development  
   * Auto-assignment, bulk operations need building  
   * AMS often has this built-in

---

## **Recommendations**

### **Wicket is Strong Fit IF:**

1. **ASIS commits to Magento long-term**  
   * Significant investment already made  
   * Magento capabilities exceed AMS commerce modules  
   * Internal or vendor expertise available for integration  
2. **Flexibility and best-of-breed matter most**  
   * Want to avoid vendor lock-in  
   * Value WordPress content management  
   * Need advanced marketing through HubSpot  
3. **Integration-heavy ecosystem is desired**  
   * Already using or planning Cvent, Prolydian, Higher Logic  
   * Want touchpoint tracking across platforms  
   * Need real-time data sync  
4. **Internal technical capability exists**  
   * Can manage Magento integration  
   * Comfortable with API-based architecture  
   * Has resources for custom development needs

### **Proceed with Caution IF:**

1. **Magento is uncertain**  
   * If ASIS might move away from Magento, Wicket loses key advantage  
   * Would need to implement WooCommerce or another platform  
2. **Out-of-box workflows critical**  
   * Traditional AMS has pre-built association processes  
   * Wicket requires building many workflows  
3. **Limited technical resources**  
   * Heavy reliance on Wicket for all customization  
   * May exceed variable budget quickly  
4. **Financial system integration is critical**  
   * No native accounting integration mentioned  
   * Must be architected separately

---

## **Key Questions for ASIS**

### **Technical Architecture**

1. **Magento Commitment:** Is ASIS committed to Magento for 3-5+ years?  
2. **Integration Ownership:** Who will own/maintain the Magento↔Wicket integration?  
3. **Financial Sync:** How will Magento financial data reach accounting system?  
4. **Workflow Engine:** Where will complex eligibility/approval workflows live?

### **Functional Requirements**

5. **Corporate Memberships:** Are the planned features sufficient for roster management?  
6. **Pricing Logic:** Can all pricing rules live in Magento vs. MDP?  
7. **Application Processes:** How will multi-step certification applications be handled?  
8. **Chapter Autonomy:** What level of self-service do chapters need?

### **Organizational Readiness**

9. **Technical Staff:** Does ASIS have developers/technical resources?  
10. **Change Management:** Is organization ready for ecosystem vs. single-system approach?  
11. **Budget Flexibility:** Can ASIS absorb variable costs if customization needs increase?

## **The Bottom Line**

**Wicket represents a fundamentally different paradigm from traditional AMS:**

### **Traditional AMS Philosophy**

* Single system of record and workflow  
* Pre-built association processes  
* Integrated but limited capabilities  
* Vendor-managed upgrades  
* Higher vendor lock-in

### **Wicket Philosophy**

* Data platform \+ ecosystem approach  
* Best-of-breed tools for each function  
* Maximum flexibility, requires assembly  
* Continuous improvement model  
* Lower vendor lock-in

# Cannolai

## **A8 Summary** 

Overall I am slightly concerned about how general this RFP response is. Generally it sounds great and aligns with what’s needed but the lack of detail on how the actual technical functionality is something to dive deeper on. 

## **Alignments**

### **HubSpot Integration \- Major Advantage**

* **ASIS Current State**: Already heavily invested in HubSpot for marketing automation and member engagement  
* **Cannolai Position**: Only AMS built specifically to integrate natively with HubSpot  
* **Strategic Fit**: Eliminates the complex integration challenges mentioned in ASIS's digital transformation evaluation document

### **No-Code Configuration**

* **ASIS Need**: Reduce dependency on technical resources and external developers  
* **Cannolai Delivery**: Comprehensive no-code configuration tools for fields, workflows, and processes  
  * Fine for front end ‘processes’ but would challenge to see this functionality on the demo. More concerned about the back end configuration. I would request:   
    * **Live demo configuring complex backend logic** (not just frontend forms)  
    * **Access to configuration documentation** before contract signature  
    * **Reference calls specifically about configuration** (not general satisfaction)  
* **Cost Impact**: Addresses ASIS's goal to reduce the $195K+ annual NetForum costs

### **Membership Management**

* **ASIS Requirements**: Support for complex membership structures including corporate, individual, CSO Center, emerging market tiers  
* **Cannolai Capability**: Flexible membership structures with configurable eligibility, benefits, and pricing rules  
* **Match**: Strong alignment with ASIS's diverse membership model

### **Event Management**

* **ASIS Need**: Manage GSX conference, regional events, chapter events, virtual/hybrid formats  
* **Cannolai Capability**: Comprehensive event module with registration, ticketing, session management  
  * This wouldn't solve or be the right fit  for the GSX Conference, still use Cvent which we already knew would probably be the case   
  * Could probably solve for Regional/Smaller Events Requirements  
  * Would not solve for Learning Events/Webinars Requirements  
* **Gap**: Lacks native exhibit floor plan management (currently uses static floor plans)

### **Financial Management**

* **ASIS Requirement**: Integration with Sage Intacct, automated invoicing, accounts receivable  
* **Cannolai Solution**: Native Sage Intacct integration, automated A/R, flexible billing  
* **Critical Success**: Maintains ASIS's recent migration to Sage Intacct

## **Concerns**

### **2\. International Capabilities**

* **ASIS Context**: 240+ global chapters, significant international membership growth  
* **Cannolai Claim**: Multi-currency support, international payment processing  
* **Concern**: Limited detail provided on regional payment methods, GDPR compliance tools, localization  
* **Gap**: No mention of timezone-aware communications or multilingual interface (noted as "nice-to-have")

### **3\. Volunteer & Chapter Management**

* **ASIS Complexity**: 240 chapters, complex committee structures, ANSI compliance requirements  
* **Cannolai Approach**: Groups module handles committees, chapters, boards  
* **Concern**: Post-MVP timeline for comprehensive chapter infrastructure (chapter websites, payment processing, email infrastructure)  
* **Risk**: ASIS's immediate needs may not be met within Phase 1

## **Critical Gaps**

### **1\. Standards & Guidelines ANSI Compliance**

* **ASIS Requirement**: Automated ANSI compliance tracking, attendance monitoring, interest category balance alerts  
* **Cannolai Capability**: Claims "Automated ANSI Compliance" but provides no technical detail  
* They describe WHAT it should do (the requirements) but not HOW it works  
* No screenshots or workflow diagrams of ANSI compliance features  
* No mention of specific ANSI/ISO standard versions (e.g., ANSI Essential Requirements 2022\)  
* **Risk Level**: HIGH \- ANSI compliance is legally mandated and mission-critical  
* **Recommendation**: ASIS should require detailed demonstration and compliance documentation

**Follow up questions to ask:** 

**"Can you provide a live demonstration of your ANSI compliance automation in a working client environment?"**

* If they can't, it's vaporware

**"Which of your 40 clients are ANSI-accredited standards developers?"**

* If the answer is "none" or "just one," this feature is unproven

**"Is the automated ANSI compliance system available today, or is it on your roadmap?"**

* The "RECOMMENDED" language is ambiguous

### **3\. SSO Implementation**

* **ASIS Decision**: Auth0 approved as SSO provider  
* **Cannolai Position**: Generic SSO integration support mentioned  
* **Gap**: No specific Auth0 implementation details or case studies provided  
* **Risk**: Integration complexity with Episerver, Magento, Higher Logic, CrowdWisdom, Prolydian, Cvent

### **4\. Exhibit & Sponsorship Management**

* **ASIS Need**: Interactive floor plans, booth management, sponsorship fulfillment tracking  
* **Cannolai Capability**: Static floor plans only; no sponsor fulfillment automation  
* **Current Tools**: Map Your Show integration, HubSpot \+ Asana workflows  
* **Risk**: May require maintaining separate systems, contradicting consolidation goals

### **5\. Company Maturity & Scale**

* **ASIS Size**: \~100 staff, 34,000 members, $18M+ revenue, complex global operations  
* **Cannolai Profile**: \~20 staff, 40 customers total, 1 large association client (\>50 staff)  
* **Concern**: Limited track record with organizations of ASIS's complexity and scale  
* **Risk**: Customer support capacity, product roadmap stability, vendor longevity

## **Final Alignment Score**

| Category | Weight | Score (1-10) | Weighted Score |
| ----- | ----- | ----- | ----- |
| Core Membership Management | 20% | 8 | 1.6 |
| Financial Integration | 15% | 9 | 1.35 |
| HubSpot Integration | 15% | 10 | 1.5 |
| Certification Management | 15% | 4 | 0.6 |
| Volunteer/Chapter Management | 10% | 6 | 0.6 |
| International Capabilities | 10% | 5 | 0.5 |
| Reporting & Analytics | 10% | 5 | 0.5 |
| Vendor Stability/Scale | 5% | 4 | 0.2 |
| **Total** | **100%** | \- | **6.85/10** |

### **Interpretation**

**6.85/10 \= Moderate-to-Good Fit**

Cannolai offers compelling advantages (HubSpot integration, cost savings, no-code flexibility) but carries significant risks (vendor maturity, certification module readiness, international scale, implementation complexity).

**Bottom Line**

**Cannolai could work for ASIS IF:**

* Certification module delivers as promised by Q1 2026  
* ASIS accepts 24+ month timeline to full transformation (not 100 days)  
* ASIS willing to maintain some parallel systems during transition  
* Contract includes strong protections and guarantees  
* Pilot implementation proves capabilities before full commitment

**Red flags that should trigger deeper evaluation:**

* Vendor has only 1 client of comparable size to ASIS  
* Critical certification module not yet released  
* "100-day implementation" marketing vs. 2-3 year reality  
* Limited international association experience

