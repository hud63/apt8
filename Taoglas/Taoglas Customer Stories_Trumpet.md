![Aptitude 8 Logo][image1]

# **Taoglas**

# **Customer Stories**

https://script.google.com/a/macros/aptitude8.com/s/AKfycbzGfZXXrB8GB7kt-FSeTA8sL0Rw3BzaXwifNA9CDpjsqe8NBn4EL159NLqLBYwGjqUw/exec?sheetId=1Rv87qq0mva5T4EEFp-Cnvy8NeE5SDgMmX41OR8i6z2I

Collapse All

Expand

Speed-to-Lead Architecture & Routing

71 Hours

$17,395

Lead Scoring Architecture Audit, Optimization & Alignment to Speed-to-Lead

18 to 22 Hours

As a Marketing Operations leader, I need a validated and optimized lead scoring model that accurately reflects buyer intent and fit, so high-value opportunities are routed at the right time while unqualified contacts remain in nurture.

**Suggested Path:**

• Audit existing scoring architecture and workflows built by NXT • Validate current Taoglas scoring model (see Demand to Deal doc) • Align scoring thresholds to Speed-to-Lead framework • Rebuild or optimize scoring weights, values, and decay rules as needed • Configure scoring triggers tied to Clay/RB2B enrichment • Ensure model supports Tier classification

**Assumptions:**

• RB2B & Clay are configured by Cadre

• NXT to provide workflow documentation and technical walkthrough (recorded for reference)

• Content creation is out of scope

• Scoring model focuses on Speed-to-Lead needs

Speed-to-Lead Qualification, Routing Logic & Tier Assignment

40 to 55 Hours

As a revops team, we need a unified Speed-to-Lead process in HubSpot that qualifies leads consistently, captures the information Inside Sales needs to determine Tier and vertical, and routes opportunities automatically to the right Sales owners, so that no high-intent lead is missed, Tier 3 and Unknown opportunities remain with Inside Sales, and Tier 1 and Tier 2 opportunities are quickly assigned to the correct Sales team.

**Suggested Path:**

• Build workflows to route scored leads to Inside Sales once they reach threshold criteria • Implement Speed to Lead routing logic • Build Inside Sales qualification process • Build automated routing from Inside Sales to the correct Sales owners (OEM, A\&D, PSCI) for accept/reject • Build Sales accept/reject workflow with required rejection reason • Build automated routing for accepted leads based on Tier and regional routing rules • Build nurture-return workflow • Implement automated handoff notifications

**Assumptions:**

• Final routing rules provided and approved by Taoglas

• Downstream sales pipeline is out of scope for this engagement

• Tools outside HubSpot are out of scope for setup or configuration

Record Customization & Custom Views for Speed-to-Lead

2 to 4 Hours

As an Inside Sales and Sales team, we need HubSpot record layouts and custom views designed around the Speed-to-Lead process so that qualification fields are easy to find, scored leads are easy to work, and Tiered opportunities can be managed efficiently without missing any high-intent leads.

**Suggested Path:**

• Customize Contact, Company, and Deal record layouts to surface the qualification fields, Tier indicators, vertical, project value, and Speed-to-Lead routing fields • Build custom views and queues for Inside Sales (scored leads, Tier 3/Unknown leads, newly assigned leads) • Build custom views/queues for Sales teams (Tier 1/2 assignments by region and vertical) • Create views for Accept/Reject, nurture returns, and leads requiring follow-up • Ensure all views support segmentation, territory logic, and Speed-to-Lead workflow triggers

**Assumptions:**

• A8 configures layouts and views only in HubSpot

• Taoglas provides final approval of required fields and layout preferences

• Record customization limited to Contact, Company and Deal objects only

• Views are created for Inside Sales, Sales, and Marketing Ops

Expand

HubSpot Data Hygiene and Remediation

43 Hours

$10,535

Legacy Workflow & List Remediation for Speed-to-Lead Readiness

15 to 30 Hours

As a Marketing Operations team, we need to safely remediate legacy workflows, lists, and automation structures left over from the previous scoring system so the new Speed-to-Lead and nurture architecture can operate cleanly, without unintended triggers, broken dependencies, or conflicting logic. This ensures we avoid duplicate nurture enrollment, misrouted leads, and automation failures when the new scoring and routing go live.

**Suggested Path:**

• Export and triage all lists; identify those used as workflow triggers, suppression lists, nurture segments, and routing inputs • Audit legacy workflows to identify list-based triggers, re-enrollment risks, and unused scoring dependencies • Disable or archive legacy scoring workflows; remediate only active workflows that must remain operational • Rebuild or update essential lists required for nurture, qualification, or routing (minimal edits only) • Validate and adjust nurture workflow entry and suppression logic to prevent duplicate or unintended enrollment

**Assumptions:**

• Taoglas will approve list archive recommendations

• Scoring logic changes are handled entirely in the Lead Scoring story

• Nurture content is provided by Taoglas

• Routing logic changes are handled in the Speed-to-Lead story

• Full list re-architecture is out of scope

• Full workflow rebuilds are out of scope unless specified in the Speed-to-Lead or Nurture Architecture stories

• Downstream sales process changes are out of scope

Extended Workflow, List & Property Cleanup (Post-Triage Hygiene)

15 to 25 Hours

As a Marketing Operations team, we need to complete extended cleanup of unused workflows, legacy lists, outdated properties, and leftover automation dependencies that fall outside of the minimal remediation required for Speed-to-Lead readiness. This work reduces technical debt, prevents future logic conflicts, and improves long-term system performance and maintainability across HubSpot.

**Suggested Path:**

• Audit and archive unused, outdated, or redundant workflows not required for Speed-to-Lead. • Audit and archive obsolete lists; consolidate or update lists with outdated or conflicting logic. • Audit custom properties for duplication, legacy scoring leftovers, or unused fields; archive or standardize as appropriate. • Update or remove broken automation dependencies (legacy triggers, unused list references, obsolete property logic). • Document cleanup actions and provide recommendations for ongoing governance.

**Assumptions:**

• Speed-to-Lead–critical lists, workflows, routing logic, and scoring changes remain in their respective stories

• No new nurture strategy, segmentation logic, or scoring models will be created as part of this story

• All archives/removals require Taoglas approval prior to execution

• Large workflow rebuilds or new automation design are not in scope for this story

• This cleanup is not required for Speed-to-Lead go-live; it is optional hygiene work to reduce technical debt

Expand

Nurture & Segmentation Architecture

31 Hours

$7,595

Audience Segmentation Framework & Subscription Governance

8 to 12 Hours

As a Marketing team, we need accurate segmentation and subscription structures so the right contacts receive the right campaigns and GDPR compliance is maintained across regions.

**Suggested Path:**

• Audit and refine segmentation (OEM, A\&D, PSCI, GNSS) • Align subscription types to segmentation • Define opt-in vs. legitimate-interest rules by region • Standardize lead source taxonomy for Clay, RB2B, Web, Downloads

**Assumptions:**

• Legal-approved GDPR rules provided by Taoglas

• Sales sequences governed separately from marketing emails

Email Deliverability Audit & Warm-Up Strategy

5 to 10 Hours

As a Marketing Operations owner, I need correct domain configuration and warm-up planning to safely scale nurture and outbound campaigns without risking deliverability.

**Suggested Path:**

• Audit SPF, DKIM, DMARC, bounce rules, and domain alignment • Review sending patterns and subscription use • Create warm-up plan for nurture and outbound • Establish deliverability monitoring thresholds • Remediate any configuration issues

**Assumptions:**

• Taoglas IT executes DNS changes

• A8 only audits HubSpot email infrastructure

Nurture Workflow Architecture & Multi-Vertical Enablement

10 to 15 Hours

As a Marketing team, we need scalable nurture workflows that guide contacts through awareness, evaluation, and readiness stages, tailored to each vertical.

**Suggested Path:**

• Audit existing nurture workflows built by NXT • Build scalable nurture model for OEM, A\&D, PSCI, GNSS • Identify vertical-specific content gaps • Build nurture workflows with behavior- and score-based enrollment

**Assumptions:**

• Taoglas provides all content

Expand

Clay → HubSpot Integration

26 Hours

$6,370

Clay → HubSpot Mapping, Property Governance & Data Readiness

8 to 12 Hours

As a Marketing Operations owner, I need Clay’s enriched data flowing into HubSpot with correct property mapping so it is usable for scoring, routing, and segmentation.

**Suggested Path:**

• Define HubSpot properties required for Clay → HubSpot ingestion • Create naming conventions and governance • Provide mapping rules to Cadre • Configure workflows triggered by Clay-enriched contacts • Validate data supports scoring, segmentation, and routing

**Assumptions:**

• Cadre owns Clay configuration

• A8 governs HubSpot-side data structures and workflows

Clay → HubSpot Integration Configuration, Activation & Data Flow Enablement

12 to 20 Hours

As a Marketing Operations team, we need Clay’s enriched and scored contacts flowing into HubSpot reliably, mapped to the correct fields, and triggering scoring and routing workflows, so that high-intent and enriched leads can enter the Speed-to-Lead process without manual intervention.

**Suggested Path:**

• Configure the incoming Clay → HubSpot integration connection, including authentication, API setup, and connection validation • Coordinate with Cadre to finalize the Clay → HubSpot data structure, payload format, and field mapping • Validate that Clay-delivered data correctly populates HubSpot properties according to the agreed schema. • Conduct integration testing with Cadre, including sample payload tests and validation of edge cases (e.g., updates, new contacts, missing data).

**Assumptions:**

• Cadre is responsible for all Clay-side configuration, scoring models, data enrichment, and outbound payload structure

• A8 is responsible for ensuring HubSpot can correctly receive, store, and operationalize Clay’s data, but does not build or maintain Clay

• Any Clay-side changes requested by Taoglas must be implemented by Cadre

• Integration will rely on HubSpot’s native API limits and available features; middleware or custom integrations are out of scope

• Testing includes validation of sample payloads provided by Cadre but does not include ongoing monitoring of Clay’s data quality

Expand

HubSpot Reporting

13 Hours

$3,185

Reporting & Analytics Architecture

10 to 15 Hours

As a leadership team, we need dashboards that clearly show funnel performance, conversion rates, lead quality, and revenue contribution across tiers and verticals.

**Suggested Path:**

• Build operational dashboards (volume, scoring, routing, acceptance) • Build sales conversion dashboards (Tier 1/2 → Deal) • Build nurture engagement dashboards • Build executive forecasting (traffic → leads → pipeline)

**Assumptions:**

• Reporting relies on HubSpot data only

• No external BI tools are included in scope

Expand

Training & Documentation

30 Hours

$7,350

Data Dictionary, Architecture Maps & Process Documentation

20 to 30 Hours

As an organization, we need clear, centralized documentation that explains our data structures, scoring logic, routing rules, workflows, segmentation, and GDPR/subscription governance so Marketing, Inside Sales, Sales, and Cadre understand and are aligned on the infrastructure and can operate the Speed-to-Lead model consistently.

**Suggested Path:**

• Create a Data Dictionary of all A8-created properties, workflows, reports & forms • Create Speed to Lead Architecture and Process Map • Document routing logic • Document segmentation and subscription governance

**Assumptions:**

• A8 will document data structures and workflows as built or optimized within this engagement; documentation of unrelated/legacy objects is out of scope.

• NXT will provide workflow documentation inputs, which A8 will validate and correct as needed

• Taoglas is responsible for final approval of segmentation, GDPR rules, and subscription governance

• A8 will deliver documentation in a digital editable format (likely to include google docs, lucidcharts and tango docs)

• Any additional documentation for external systems (Clay, RB2B, IT-owned systems) must be provided by Cadre or Taoglas and is not authored by A8

Inside Sales Training on Qualification Process, Tiering & Routing

4 to 6 Hours

As an Inside Sales team, we need hands-on training in HubSpot so we know exactly how to work scored leads, update qualification fields, determine Tier, and understand how our actions trigger automated routing—so we can follow the Speed-to-Lead process correctly and avoid misrouting or lead leakage.

**Suggested Path:**

• Deliver a live HubSpot training session for Inside Sales focused on the qualification and routing tools built in this engagement • Train users on where scored leads appear in HubSpot and how to work them using the qualification properties (vertical, project value, discovery details, Tier determination) • Demonstrate how qualification inputs feed the automated routing logic (i.e., what happens when fields are updated) • Show Inside Sales how to identify leads that remain owned by them (Tier 3 and Unknown) and how to create and work deals in HubSpot

**Assumptions:**

• Training covers HubSpot usage only—A8 does not provide sales methodology, discovery coaching, objection handling, or training on any external tools

• A8 provides one virtual session (recorded); additional sessions must be scoped separately

• Taoglas is responsible for ensuring attendance and internal adoption of the training content

• Training covers the tools and workflows created in this engagement

• HubSpot onboarding, CRM basics, or non–Speed-to-Lead training topics must be scoped separately

Expand

Flex Hours

12 Hours

$2,940

Flex Hours

12 Hours

Taoglas needs additional consulting capacity to take advantage of quick win opportunities in their current HubSpot instance.

**Suggested Path:**

• Hours may be used to supplement any of the above customer stories.

**Assumptions:**

• Hours must be used for this scope of work and do not roll over to any subsequent projects

Expand

Project Management

57 Hours

13,965

To support management and communication, a project manager and delivery lead will own all A8 tasks and clearly communicate needs.

* Visibility to budget spend will be provided during the duration of the project  
* A8 will provide check-in agenda items and follow-ups  
* \[Company\] to communicate to A8's shared inbox for easier collaboration and timely responses  
* \[Company\] driven delay will result in additional PM time billed to manage timeline

### **224**

Low Hours  
Estimate

### **335**

High Hours  
Estimate

### **283**

Total Estimated  
Engagement Hours

### **$69,335**

Total Estimated  
Investment

## **Additional Notes \+ Considerations**

* The assumptions content in this scope is based on information and discovery during the sales evaluation and is subject to change during the project if additional challenges or barriers are discovered.  
* A8 is a Time & Materials agency, we will provide transparent budget tracking throughout the project and change orders will require approvals.  
* We interchange between A8 and Aptitude 8 in this document.

This proposal is valid for 30 days and subject to final scope confirmation.  
ze the page when loaded document.addEventListener('DOMContentLoaded', populatePage); .addEventListener('DOMContentLoaded', populatePage);

[image1]: <data:image/png;base64,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>