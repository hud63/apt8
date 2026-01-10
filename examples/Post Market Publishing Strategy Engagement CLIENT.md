**Post Market Publishing Strategy Engagement**   
**\_\_\_\_\_\_\_\_\_\_\_\_**

Interview Recordings 

- [Discovery Part 1](https://app.avoma.com/meetings/0ca820b3-94b1-4758-87bb-280b59c43c69)  
- [Discovery Part 2](https://app.avoma.com/meetings/d8db734f-86b2-46c6-b2cb-2afe1f06c8eb)   
- [Freshdesk Reverse Demo](https://app.avoma.com/meetings/7681678b-fa9c-4046-a430-f0ba9ed4588a) 

[Interview Summaries](https://docs.google.com/document/d/13vj0loFlduNMiE0cstN5chPNLsUEleZrg1lgBzuMKFM/edit?usp=sharing) 

**CRM/Service Tool Recommendation \- High Level Overview**  
**\_\_\_\_\_\_\_\_\_\_\_\_**

[Please see detailed user stories linked here.](https://docs.google.com/spreadsheets/d/1mxJyAzjbrE38qvBoGodQlxbcozbwH6ipodH4sIwGUJk/edit?usp=sharing) 

[Please see the future state business process map linked here.](https://lucid.app/lucidchart/7e33403e-6333-4ff4-83c1-837c131b22f3/edit?viewport_loc=-1952%2C-1139%2C2976%2C1536%2C0CQKztRSaLh2&invitationId=inv_a37de8b6-2beb-46cd-8a87-d25252d56407) 

## **Company Context & Scale Challenges**

PMP is a B2B digital publishing company operating at massive scale with unique constraints:

* **5,000+ websites** across multiple business units (tier 1 "PMP" sites averaging $90 per post, tier 2 "Kojak" sites at $25 per post)  
* **60,000+ emails per week** (17-20k new inquiries plus existing customer responses)  
* **400+ orders daily** managed through manual Google Sheets processes  
* **9 sales agents** operating in an entrepreneurial model across global time zones  
* **Complex email infrastructure** requiring each website to send/receive from its own domain

## **Technology Evaluation Process**

### **1\. HubSpot Assessment**

**Initial Promise vs Reality:**

* HubSpot sales team initially promised "unlimited domains" capability  
* Company invested $70,000+ in HubSpot implementation that couldn't be used  
* **Critical limitations discovered:**  
  * 2,000 domain limit per instance (far below PMP's 5,000+ requirement)  
  * Shared inbox limitations of 500-1,000 emails per day (versus PMP's 8,500+ daily need)  
  * No viable bulk domain addition process (30-60 minutes per domain setup)

**Final Verdict:** Despite HubSpot's strong CRM, marketing automation, and sales enablement features, the domain and email volume limitations made it fundamentally incompatible with PMP's business model. Even proposed "multi-account management" solutions wouldn't resolve the core scalability issues.

### **2\. Salesforce Evaluation**

**Capabilities:** Could technically handle PMP's scale and domain requirements **Drawbacks:**

* **Cost:** Extremely expensive, requiring Marketing Cloud and Service Cloud add-ons  
* **Complexity:** Would need dedicated Salesforce administrator (full-time employee)  
* **Implementation:** Massive undertaking requiring 6+ months of complex customization  
* **Overkill:** Far more robust than needed for PMP's current requirements

**Final Verdict:** Salesforce was deemed "too much" \- an expensive, complex solution that would require significant resources to achieve what simpler tools could accomplish.

### **3\. FreshSales \+ FreshDesk Solution**

**Rationale:**

* **Proven Foundation:** Freshdesk already successfully handling PMP's complex email routing and volume  
* **Natural Integration:** Fresh Sales integrates natively with existing Freshdesk infrastructure  
* **Scalable:** Can handle PMP's domain and email volume requirements  
* **Cost-Effective:** Significantly less expensive than enterprise solutions  
* **Manageable Scope:** Builds on existing working systems rather than complete replacement

## **Final Recommendation: Fresh Sales Implementation**

**Core Strategy:**

1. **Maintain Freshdesk** for proven email/ticket management capabilities  
2. **Add Fresh Sales** for CRM, pipeline management, and sales enablement  
3. **Implement Taryn's Business Process Framework** using the detailed user stories and requirements  
4. **Use Lucidchart Process Maps** as implementation blueprint

**Key Benefits:**

* Preserves working email infrastructure while adding CRM capabilities  
* Provides sales pipeline visibility and agent performance metrics  
* Enables lead scoring and automated nurture sequences  
* Offers management dashboards and reporting Joel, Ashley, and Jack need  
* Supports the entrepreneurial agent model with territory management  
* Can scale with business growth without fundamental architectural changes

**Implementation Framework:**

* **User requirements** developed during discovery to guide Fresh Sales configuration  
* **Detailed process maps** showing current and future state workflows  
* **Lead scoring model** with defined criteria and automation rules  
* **Pipeline stages** aligned with PMP's publishing and invoicing processes  
* **Sales enablement features** to support agent performance management

**Business Intelligence Tool Recommendation \- High Level Overview**  
**\_\_\_\_\_\_\_\_\_\_\_\_**

[Please see a detailed document with recommendations linked.](https://docs.google.com/document/d/1Ey8kQch7s0WGkxdBs5RAeSkADCxkmxFpl4YFxfNR07w/edit?usp=sharing) 

## **Business Context**

Post Market Publishing (PMP) is needing a Business Intelligence solution to analyze data from their centralized Snowflake data warehouse, which aggregates information from multiple systems (Airtable, Ahrefs, Freshdesk, WordPress, Zoho).

## **Key Requirements**

* User-friendly, no-code interface for non-technical users  
* Mac compatibility  
* Connects to Snowflake as primary data source  
* Scalable for future growth  
* Cost-effective for small team

## **Three Main Options Evaluated**

**Tableau** \- Industry leader with powerful visualizations, excellent Mac support, and high scalability ceiling including AI features and programming language integration. \~$5,400/year for 6 users.

**Looker Studio** \- Google's free web-based platform, perfect for basic reporting with zero software cost but limited governance and performance constraints.

**Metabase** \- Open-source tool balancing user-friendliness with data governance features, offering central data modeling and SQL capabilities for power users. \~$6,000/year.

## **Final Recommendations**

**Path A (Two-Phase):** Start with free Looker Studio to prove BI value and learn basics, then scale to Tableau for long-term enterprise needs.

**Path B (Unified):** Adopt Metabase as single platform providing governance and ease-of-use from day one.

## **Key Differentiators**

* Rejected Power BI (Windows-only authoring) and Hex (requires SQL skills)  
* All recommended tools have native Snowflake connectors  
* Focus on immediate value delivery while maintaining future scalability

