# Requirements

## **Tacton Integration Requirements and Optimization Opportunities**

**Business drivers captured in discovery**

* Distribution/CS quoting flows rely on Tacton, then “send back to HubSpot” as a PDF and log the quote, but key workflow steps are still email-driven and fragmented.  
* There is an existing HubSpot↔Tacton sync (March 2023\) that has not been reviewed; Taoglas launched a new Tacton version and explicitly wants the sync reviewed/upgraded.  
* Distribution has a known “Tacton overwriting issue or find alternative CPQ” callout as a system improvement need.

**Future integration requirements**

1. **Supported objects and identifiers**  
   * Quote entity in HubSpot (native quotes or custom object) must store: Tacton quote number, configuration/part numbers, pricing snapshot, PDF link/attachment, quote status, created by, and related Deal/Project.  
   * Canonical ID strategy: HubSpot Deal ID and Tacton quote number must be cross-referenced in both directions (required for downstream order matching).  
2. **Directionality and triggers**  
   * **HubSpot → Tacton**: create/initialize quote request context (company/contact, deal/project, ship-to, end customer vs distributor) when a deal reaches “Quote Requested”.  
   * **Tacton → HubSpot**: push quote metadata \+ PDF artifact back on quote generation and on quote revision.  
3. **Versioning / revision control**  
   * Must support multiple quote revisions per project (and per distributor context), without overwriting prior quote artifacts or corrupting deal associations (explicitly aligned to the “overwriting” issue).  
4. **Channel-aware quoting**  
   * Distribution deals often have multiple distributors per single underlying end-customer project; solution must prevent data collisions and must maintain a unified “project view” across competing distributors while still allowing separate commercial terms per distributor.  
5. **Auditability**  
   * Every quote push/pull event must log: timestamp, actor/system, payload version, success/failure, and a link to the artifact (PDF).

## **SAP Integration Requirements and Optimization Opportunities**

**Business drivers captured in discovery**

* Today, orders are manually rekeyed into SAP from HubSpot \+ Tacton \+ emails; it’s “three separate systems … with no integration,” and the manual steps are extensive and error-prone.  
* Quotes and POs are often on separate email threads; order entry must hunt through Tacton to verify pricing, then re-enter into SAP, then later invoices are emailed in bulk and matched manually before being sent to customers.  
* Leadership wants HubSpot forecasting grounded in invoiced reality: separate “total project value” vs “closed/recognized revenue,” and SAP integration to show invoiced amounts and incremental POs against a larger deal.

**Future integration requirements**

1. **Order lifecycle syncing (minimum viable)**  
   * **SAP → HubSpot**: sync Sales Orders (SO) and key status milestones (created, confirmed, shipped, invoiced) back to the originating HubSpot Deal/Project.  
   * Must support **multiple orders per single deal/project** (explicitly described as common).  
2. **Invoice syncing**  
   * **SAP → HubSpot**: invoice header \+ line summary \+ invoice document link/attachment reference so CS does not manually match invoices to orders and re-email them.  
3. **Forecasting data model**  
   * HubSpot must store (at minimum):  
     * Total Project Value (sales estimate)  
     * Ordered-to-Date (sum of synced orders)  
     * Invoiced-to-Date (sum of synced invoices)  
     * Remaining Potential (calculated)  
   * This directly addresses inflated pipeline visibility and finance forecasting issues.  
4. **Cross-database considerations**  
   * SAP operates with Ireland→Taiwan database handoff; integration requirements must specify which SAP instance is authoritative for which lifecycle stages, and how IDs propagate across instances.  
5. **Controls, retries, and reconciliation**  
   * Provide a reconciliation report for “HubSpot deals missing SAP orders/invoices” and vice versa.  
   * Error handling requirements: dead-letter queue (conceptually) and reprocessing mechanism; idempotent upserts keyed by SAP Order/Invoice ID.

## **AEB Sanction Checker ↔ HubSpot**

**Business drivers captured in discovery**

* Taoglas must run an AEB sanction check for every company *before* a company can be created/used; sanctioned companies are locked down in HubSpot and cannot be engaged. This is currently implemented in HubSpot. 

**Future integration requirements**

1. **Pre-create / pre-engage gating**  
   * Any inbound net-new company path (web, enrichment, imports, distributor submissions) must pass through sanction screening before the record becomes “active” in HubSpot.  
2. **Status propagation and enforcement**  
   * Store sanction status (Clear/Pending/Sanctioned), last checked timestamp, and check reference ID.  
   * Enforce restrictions:  
     * Pending: legal review workflow \+ limited engagement  
     * Sanctioned: lock record (permissions \+ automation to prevent outreach)  
3. **Integration placement**  
   * Screening can occur upstream before records are created in HubSpot, possibly evaluated in Clay.  
   * HubSpot must implement an intake “quarantine” stage that prevents any workflow activation until clearance is recorded (this is implied by “you can’t create a company unless it’s proved”).

## **Clay \+ RB2B → HubSpot** 

**Business drivers captured in discovery**

* Clay is used (or planned) for firmographic/demographic enrichment with extensible data sources and waterfall logic, then “pipe those segments into HubSpot.”  
* There is concern about two scoring models (Clay-side vs “Alan’s” HubSpot-side) and how they coexist without duplicative effort.  
* GDPR/PII risk boundary: anonymized website traffic is different from collecting emails; marketing contact classification matters.

**Future integration requirements**

1. **Bidirectional sync capability**  
   * Clay must read enough HubSpot context to exclude contacts/companies already in active sales cycles (i.e. “do not contact list” pattern).  
2. **Lead scoring delineation**  
   * Define which score dimensions are computed where:  
     * Upstream (Clay/RB2B): fit/firmographic segmentation score  
     * In HubSpot: engagement-based progression score  
   * A single “composite score” surfaced in HubSpot should be traceable back to its components to avoid black-box scoring conflicts.  
3. **Compliance \+ suppression**  
   * Suppression lists must include:  
     * Sanctioned/pending entities from AEB process  
     * Existing customer / open-deal exclusions (to avoid interfering with sales)  
   * RB2B/website intent ingestion must respect the “anonymized until email captured” boundary and must codify when a visitor becomes a contact in HubSpot (and as marketing vs non-marketing).

## **Aerospace & Defense “Secured Silo” (HubSpot security model \+ future integration boundaries)**

**Business drivers captured in discovery**

* Hard requirement: create a separate, secured silo for A\&D opportunities with restricted access; default “no access unless explicitly added,” and even executives may need exclusion for customer restrictions.  
* Engineers have ITAR concerns; Taoglas intends to validate HubSpot configuration with an ITAR consultant.

**Future integration requirements**

1. **Record-level access control**  
   * The integration layer must respect A\&D deal-level restrictions (i.e. integrations cannot broadly replicate restricted deal data into systems/locations that violate access rules).  
2. **Data classification**  
   * Explicitly classify what is most sensitive (drawings/technical files, product specs, project details) and ensure those do not leak through integrations unintentionally (especially file/attachment sync).  
3. **Routing \+ identification**  
   * Industry classification must include “Aerospace and Defense” as a distinct value because it drives restrictions and routing logic.

## **Email / Inbox ↔ HubSpot**

**Business drivers captured in discovery**

* A\&D team wants a fast path from inbound email to opportunity creation (“click a button … create an opportunity right away out of this”), and there is mention that inbox connectivity/logging is inconsistent or painful across teams.

**Future integration requirements**

1. **Standardized email capture**  
   * Define when emails must be logged to Contacts/Companies/Deals and enforce consistent association rules (to avoid noise and data pollution).  
2. **AI-assisted intake (coordination point)**  
   * AI can extract structured fields from inbound emails (company, contact, part numbers, context) and propose a draft Deal/Opportunity \+ required properties.  
   * Human-in-the-loop confirmation is required before creation for restricted industries (A\&D) and before triggering any outbound automation.

## **Distributor Portal Concept**

**Business drivers captured in discovery**

* Distribution team’s primary request: self-service distributor portal for registration/quote requests, auto-populate HubSpot, check existing registrations, flag duplicates, reduce email dependency.  
* Needs unified project view across distributors \+ automated duplicate detection \+ performance reporting on who wins.

**Future integration requirements**

1. **Identity and access**  
   * Distributor authentication; distributor users only see their own deals/registrations (mirrors collaborator-based access).  
2. **Submission workflows**  
   * Portal submissions create/update:  
     1. Registration request record  
     2. Deal/Project record(s) in HubSpot with clear linkage to end customer  
     3. Quote request initiation (integrates into Tacton flow)  
3. **Duplicate detection**  
   * Automated matching rules (end customer, project identifiers, part numbers, geography, timeframe) and a “duplicate cluster” view for internal users.

# High- Level Design

## **1\. Executive Summary**

### **Purpose**

This document defines the optimal future-state CRM and integration architecture for Taoglas, with a specific focus on HubSpot, Tacton, SAP, AEB Sanction Checker, and coordination with current and planned AI initiatives. The goal is to establish a clear, scalable, and supportable architectural foundation that reduces manual effort, clarifies system ownership, and enables future automation without introducing technical debt.

### **Scope Boundaries**

This blueprint is limited to architecture and integration planning. It explicitly excludes custom development, field-level mappings, workflow builds, or vendor selection beyond systems already in scope.

## **2\. Business Objectives & Architectural Principles**

### **Business Objectives**

* Reduce manual, error-prone handoffs across sales, distribution, and operations  
* Establish a single, trusted commercial system of record  
* Enable distributor-heavy quoting and registration workflows without data fragmentation  
* Support AI-driven prioritization, intelligence, and forecasting initiatives

### **Architectural Principles**

* Clear system-of-record ownership  
* Event-driven, lifecycle-based integrations where possible  
* Human-in-the-loop preserved for commercial and compliance decisions  
* AI as an intelligence layer, not an execution authority

## **3\. Current-State Constraints & Design Assumptions**

### **Known Constraints**

* Distributor inputs remain largely email- and attachment-based  
* Tacton quote behavior overwrites distributor context  
* SAP is not operationally touched by sales or distribution teams  
* Heavy reliance on manual data entry and follow-ups

### **Design Assumptions**

* HubSpot remains the primary CRM and orchestration layer  
* Tacton remains the CPQ authority  
* SAP remains the post-order operational system of record  
* No change to distributor tooling is assumed in this phase

## **4\. Future-State System Landscape & Ownership Model**

### **System Roles**

* **HubSpot (Primary CRM & Orchestration Layer)**  
  * Accounts, contacts, distributors, projects, deals  
  * Commercial lifecycle tracking  
  * Reporting, visibility, and AI signal consumption

* **Tacton (CPQ System of Record)**  
  * Product configuration logic  
  * Pricing and quoting  
  * Distributor-specific quote instances

* **SAP (ERP / Fulfillment System)**  
  * Orders, fulfillment, invoicing  
  * Financial and operational truth post-PO

* **AEB Sanction Checker (Compliance Layer)**  
  * Sanction validation and enforcement  
  * Pre-order and pre-fulfillment gating

* **Clay (+Scoring Layer)**  
  * Lead validation and scoring  
  * Record enrichment

## **5\. Canonical Commercial Lifecycle Architecture**

## **Lifecycle Design Principles**

The commercial lifecycle is governed by the following principles:

1. **Single System Ownership Per Stage**  
   Each lifecycle stage has one authoritative system responsible for its state and progression. Other systems may reflect or enrich the stage, but they do not control it.

2. **Explicit Entry and Exit Criteria**  
   A record may only advance stages when defined conditions are met. This eliminates implicit progression via email, tribal knowledge, or manual interpretation.

3. **Event-Driven Integration Triggers**  
   Stage transitions are the primary integration triggers. Integrations respond to lifecycle events rather than arbitrary field changes.

4. **Channel-Agnostic Structure**  
   Direct sales and distributor-led motions follow the same lifecycle stages, even if operational handling differs.

## **Process Stages**

### **1\. Demand**

**Definition**  
Demand represents **commercial intent signals** prior to formal opportunity qualification. These signals may be anonymous or known and may originate from marketing, distributors, inbound inquiries, or outbound prospecting.

**Owning System**  
HubSpot

**What Exists at This Stage**

* Contacts and companies (or anonymous visitors)  
* Engagement signals (web, email, downloads, inbound inquiries)  
* Distributor or partner-initiated inquiries that have not yet been qualified  
* AI-generated intent or prioritization signals

**Entry Criteria**

* An inbound or outbound signal indicating potential interest  
* No commercial scope, pricing, or project commitment yet defined

**Exit Criteria**

* Sufficient information exists to define a commercial project or opportunity  
* Ownership is assigned to sales or distribution operations

**Integration Triggers**

* Enrichment tools (i.e. RB2B, Clay) feeding firmographic or intent data  
* Sanction screening initiation for net-new companies  
* AI scoring and prioritization updates

**Key Architectural Note**  
Demand is **not revenue-bearing** and must not inflate pipeline reporting. Demand signals inform prioritization but do not represent forecastable value.

### **2\. Deal (Commercial Qualification / Project)**

**Definition**  
A Deal represents a **qualified commercial project** with a defined end customer, scope intent, and internal ownership. This stage establishes the commercial container that downstream quoting, ordering, and fulfillment activities attach to.

**Owning System**  
HubSpot

**What Exists at This Stage**

* Defined end customer (company \+ contacts)  
* Identified sales owner or distribution owner  
* High-level project context (use case, region, channel)  
* Estimated value and expected timeline (non-binding)  
* One-to-many relationships to distributors (where applicable)

**Entry Criteria**

* Confirmation of a real commercial opportunity (human-validated)  
* Minimum required data to establish a project context  
* Sanction clearance (where applicable)

**Exit Criteria**

* A request for pricing or configuration  
* Internal approval to proceed to quote generation

**Integration Triggers**

* Deal stage change to “Quote Requested”  
* Initialization of CPQ context  
* AI-assisted deal risk, priority, or completeness checks

**Key Architectural Note**  
 A Deal is **not a quote and not an order**. It is the **anchor record** that unifies all downstream activity, including multiple quotes, multiple orders, and partial fulfillment over time.

### **3\. Quote**

**Definition**  
Quote represents the **commercial pricing and configuration phase**, where product selections, quantities, pricing, and terms are defined for a specific channel and distributor context.

**Owning System**  
Tacton (CPQ)  
HubSpot retains a synchronized representation for visibility and reporting.

**What Exists at This Stage**

* Configured product selections  
* Pricing logic and margins  
* Distributor-specific quote instances  
* Quote documents (PDFs)  
* Quote revisions and versions

**Entry Criteria**

* Valid Deal exists in HubSpot  
* Quote request initiated (manual or automated)  
* Required commercial and technical inputs available

**Exit Criteria**

* Quote approved and shared with customer or distributor  
* Purchase Order received or commitment confirmed

**Integration Triggers**

* HubSpot → Tacton: quote initiation  
* Tacton → HubSpot: quote creation, revision, and document sync  
* AI-based quote complexity or risk signals

**Key Architectural Note**  
Multiple quotes may exist per Deal, especially in distributor-led scenarios. The architecture must preserve historical quote context without overwriting prior distributor or pricing data.

### **4\. Order**

**Definition**  
Order represents the **binding commercial commitment**, initiated by receipt of a Purchase Order and resulting in production, shipment, and invoicing.

**Owning System**  
 SAP

**What Exists at This Stage**

* Sales orders  
* Line-level quantities and pricing  
* Production and shipment milestones  
* Financial commitments

**Entry Criteria**

* Valid, accepted Purchase Order  
* Approved quote reference  
* Compliance and sanction checks complete

**Exit Criteria**

* Order fully fulfilled or closed  
* Invoicing complete

**Integration Triggers**

* SAP order creation events synced to HubSpot  
* Order status updates reflected in CRM  
* Invoice creation notifications

**Key Architectural Note**  
A single Deal may generate **multiple orders over time**. Order value must roll up to the Deal for forecasting and reporting without redefining the Deal itself.

### **5\. Fulfillment**

**Definition**  
Fulfillment represents the **post-order operational lifecycle**, including manufacturing, shipment, delivery, invoicing, and post-sale service visibility.

**Owning System**  
 SAP

**What Exists at This Stage**

* Shipment confirmations  
* Invoice records and documents  
* Revenue recognition events

**Entry Criteria**

* Order accepted into SAP

**Exit Criteria**

* All invoices issued and settled  
* Fulfillment complete

**Integration Triggers**

* Invoice sync to HubSpot  
* Revenue and fulfillment status updates  
* Customer service visibility updates

**Key Architectural Note**  
HubSpot reflects fulfillment status for customer and sales visibility but does not control operational execution.

## **6\. Core Integration Flows (Future-State)**

### **ZoomInfo → HubSpot (Current) and ZoomInfo → Clay → HubSpot (Future)**

#### **Purpose**

Firmographic/contact enrichment to improve routing, segmentation, and downstream scoring.

#### **Explicit Changes**

ZoomInfo should connect to Clay directly for enrichment instead of HubSpot. ZoomInfo data will flow into HubSpot via Clay.

#### **Direction**

* Current: ZoomInfo → HubSpot (enrichment; not primary record creation in most cases)  
* Future: ZoomInfo → Clay (as a source) → HubSpot (as the destination)

#### **Objects / Data**

* Company enrichment attributes  
* Contact enrichment attributes  
* Potential match keys: company name \+ domain; contact email

#### **Trigger**

Enrichment workflows / Clay orchestrations (future); native ZoomInfo integration events (current).

#### **Transport / Hosting**

* Current: ZoomInfo native integration (as confirmed in call)  
* Future: Clay-managed connector(s), then Clay → HubSpot sync

#### **Key requirements / constraints**

* Define **match/merge rules** explicitly:  
  * When to update existing records vs create net-new  
  * Which fields are “authoritative” from enrichment vs CRM-owned  
* Prevent polluted CRM creation:  
  * If a company fails AEB screening, do not promote it into “active” HubSpot lifecycle states (see Flow \#5).

#### **Enhancements**

* In the future-state, Clay should run **pre-screen checks** (or call AEB) before pushing net-new companies into HubSpot, but HubSpot must still keep AEB because companies can be created outside Clay (manual entry, forms, imports).

### **Clay → HubSpot (Companies \+ Contacts)**

#### **Purpose**

Make Clay the enrichment/orchestration layer while HubSpot remains the operational CRM.

#### **Explicit Changes**

Net new integration that will serve as a lead scoring and data enrichment layer.

#### **Direction**

Clay → HubSpot (upsert): Enriched data, new contacts & company records

HubSpot → Clay: initial contact and company data that need enriched and scored.

#### **Objects / Data**

* Companies  
* Contacts  
* Enrichment fields (industry, region, firmographics, persona fit, etc.)

#### **Trigger**

Clay managed sync jobs / segment completion.

#### **Requirements**

* **Upsert keys**:  
  * Company: domain preferred; fallback to normalized name \+ country  
  * Contact: email (HubSpot constraint)  
* **Suppression logic**:  
  * Do-not-push rules for sanctioned entities (AEB status) and for existing active sales cycles, if required  
* **Auditability**:  
  * Store “Enrichment Source \= Clay” and last sync timestamps

#### **Enhancements**

* Add bidirectional acknowledgement loop (HubSpot → Clay) only if needed for suppression or sales-cycle status (i.e. “exclude if open deal exists”). The call indicated future-state interest but not final decisions.

### **HubSpot ↔ AEB Sanction Checker (Compliance Gate)**

#### **Purpose**

Prevent sanctioned entities from entering active commercial workflows, and enforce compliance gating on company creation/updates.

#### **Explicit Changes**

Add an additional connection Clay ←→ AEB. Clay also calls AEB before syncing net-new records, but HubSpot remains the enforcement authority because manual company creation still occurs. The HubSpot sync stays in place for non-Clay source records. 

#### **Direction**

HubSpot → AEB → HubSpot

#### **Objects / Data**

* Company name \+ address are passed to AEB  
* AEB returns sanction check status, stored back on the company record

#### **Trigger**

HubSpot workflow-based event (create/update company; likely when address fields change)

#### **Transport / Hosting (Current Architecture)**

* HubSpot workflows → webhooks  
* Custom PHP script receives webhook payload, calls AEB, returns results to HubSpot via API  
* Hosted on Taoglas web cloud server (same host as website, separate API package)

#### **Requirements**

* **Idempotency**: repeated updates should not create inconsistent status.  
* **Status model**: Pending / Clear / Sanctioned \+ timestamp \+ reference ID.  
* **Enforcement controls**:  
  * If Sanctioned: restrict record access and block outreach workflows  
  * If Pending: quarantine from sales/marketing automations until resolved

### **HubSpot ↔ Tacton (Deal-to-Quote Lifecycle)**

#### **Purpose**

Initiate quoting in Tacton from CRM context and return quote artifacts and metadata into HubSpot for visibility, reporting, and collaboration.

#### **Explicit Changes**

* **New HubSpot Resync to Tacton flow**: defined HubSpot changes should update Tacton post-initial creation (owner, distributor, end customer, key commercial fields).  
* **Update Writeback data** into HubSpot:  
  * Quote ID/number on Deal  
  * Items (part number, qty, unit price, extended) additionally as line items and expanded Product Details properties.  
  * Totals (cost/price/margin where permissible)  as line item properties and expanded Product Details properties.  
* **Eliminate reliance on manual “send proposal”** by making return-sync reliant on a different event (i.e. on quote generation/approval/finalization in Tacton).  
* **Distributor-safe modeling**:

#### **Direction**

* HubSpot → Tacton: Company \+ Contact \+ Deal context on deal stage transition to “Quote”, with Quote ID write back to Deal.   
* HubSpot → Tacton: Deal context on property value change  
* Tacton → HubSpot: Initial Quote Preview data \+ Product Details \+ PDF (implemented as note w/ PDF attachment on Deal & Quote Preview)

#### **Objects / Data**

* HubSpot: Deal, Company, Contact, Notes, Quote Preview, Product Details (as diagrammed)  
* Tacton: Quote, Items, Company, Contact (as diagrammed)

#### **Trigger**

* Deal stage change to “Quote”  
* Specific properties are updated on the deal  
* Quote & Items changed on Quote in Tacton

#### **Transport / Hosting**

* Hosted in-house on Taoglas AWS EC2, will update and add to existing codebase

#### **Explicit Gaps**

1. **Distributor context limitation**: current approach cannot support multiple distributors cleanly in one deal because Tacton stores distributor as a single field derived from association labels and this is not changeable. 

### **SAP (Currently Siloed) and the Future HubSpot ↔ SAP Opportunity**

#### **Purpose**

Reduce manual duplication, improve forecasting accuracy, and close the loop from quote → PO → sales order → invoice.

#### **Current state**

SAP is not connected to HubSpot today.

#### **Key Requirements**

* Sync company/contact details to SAP to eliminate double entry when orders are manually created for direct business.  
* Maintain and sync SAP BP Codes (unique identifier) back into HubSpot to prevent misalignment.  
* Explore order ingestion automation:  
  * Some distributors already use EDI into SAP  
  * Smaller distributors and direct orders are still email-driven and manually entered  
* OCR/AI PO reader is an adjacent initiative to reduce manual SAP entry for direct orders (not an integration per se, but impacts future-state design).

#### **Explicit Changes**

* **New HubSpot → SAP Sync**:   
  * create/update customer & contact data on deal closed-won.   
* **SAP → HubSpot** **Sync:**   
  * Create/update customer & contacts in HubSpot on a regular basis, include and backfill BP code,   
  * Create Sales Order in HubSpot when PO created in SAP, including status, invoice summary values, and links to invoice artifacts. Associates with the original deal, distributor, end customer, and marking it closed won.   
  * Create and Update Product Library with inventory values.

## **7\. Distributor-Centric Architecture Considerations**

### **Current Reality**

* Multiple distributors quoting the same end customer project  
* Forced deal duplication to avoid CPQ overwrite behavior  
* Limited visibility into awarded vs non-awarded registrations

### **Future-State Architectural Position**

* 

## **9\. AI Initiative Coordination & Integration Points**

### **AI Role in the Architecture**

AI is positioned as an **intelligence and customer support layer**, not a transactional authority.

### **Coordination Points with Cadre**

* Contact and Customer enrichment via Clay  
* Chatbot for CS inquiries  
* Soft quoting tool for website  
* Email summary tool  
* Meeting notes to HubSpot  
* OCR Reading POs \+ enter into SAP  
* Shipping Confirmations \+ Tracking Information to Customers  
* CS Inbox management (Fin.AI)  
* Rapid Flare for more complex CS inquiries

## **10\. Technical Constraints, Risks, and Mitigations**

### **Constraints**

* Tacton cannot support multiple distributors per quote. 

### **Key Risks**

* Continued email-driven ingestion for Purchase Orders  
* Human follow-up dependencies  
* CPQ limitations impacting data modeling

**Mitigation Strategies**

* 

## **11\. Architecture Diagrams & Visual Artifacts**

### **Diagrams**

[Taoglas](https://lucid.app/lucidchart/cd8081aa-3f75-4eab-a186-594f2abc3f64/edit?viewport_loc=1000%2C-500%2C3872%2C2170%2C.WQefokVOIK5&invitationId=inv_25549edc-41f0-47d8-819b-187b0991d359)

Diagrams are designed for both executive comprehension and technical validation.