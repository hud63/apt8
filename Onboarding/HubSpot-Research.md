# HubSpot Research (as of 2025-12-12)

## Core Objects & Structure
- **Pipelines (sales pipelines)**  
  - Definition: Ordered set of deal stages representing a repeatable sales/CS motion; each pipeline can have its own stages, probabilities, and automation.  
  - Use case: Separate B2B/B2C or direct/channel motions; reporting by funnel; routing to owners/teams.  
  - Analogy: A subway line with a fixed sequence of stops.
- **Unified / consolidated pipelines**  
  - Definition: Practice of reducing multiple pipelines into one or a few standardized pipelines with shared stage names/probabilities; supported by per-team views/filters.  
  - Use case: Clean reporting, easier automation, and consistent forecast math after mergers/territory changes.  
  - Analogy: Combining many playlists into one master playlist with folders, so everyone follows the same order.
- **Deal stages**  
  - Definition: The individual steps within a pipeline; each stage can drive probability, automation, required fields, and SLAs.  
  - Use case: Enforce entry/exit criteria, trigger tasks/notifications, and power weighted forecasts.  
  - Analogy: Checkpoints in a race—hit each in order.
- **Custom objects**  
  - Definition: User-defined record types (e.g., Subscription, Project, Shipment) with their own properties, associations, and pipelines (if enabled).  
  - Use case: Model non-standard data that must relate to contacts/companies/deals (e.g., renewals, assets, classrooms).  
  - Analogy: Adding a new drawer to a filing cabinet for a special document type.
- **Deal records**  
  - Definition: Primary transactional records capturing revenue opportunities; store amount, stage, close date, owners, line items, quotes, and associations.  
  - Use case: Forecasting, pipeline management, revenue attribution, approvals.  
  - Analogy: A manila folder for a single sale.
- **Custom properties**  
  - Definition: Admin-created fields (text, picklist, number, calculation, multi-select, etc.) attached to any object; can be required on stage change.  
  - Use case: Capture sales methodology data (MEDDICC fields), partner info, region, product fit flags, PO numbers.  
  - Analogy: Adding new columns to a spreadsheet.
- **Leads vs. Deals (distinction)**  
  - Definition: A lead is a contact (or company) in a marketing/sales status; a deal represents a monetizable opportunity tied to that contact/company.  
  - Use case: Nurture/qualify contacts as leads; create deals only when a discrete opportunity exists.  
  - Analogy: A lead is a phone number in your contacts; a deal is a specific job you’re quoting for that person.

## Pipeline Stages (Referenced)
- **Qualification stage**  
  - Definition: Early stage where fit/need/budget/timing are confirmed; often tied to required discovery fields.  
  - Use case: Enforce exit criteria before progressing (e.g., BANT/MEDDICC fields completed).  
  - Analogy: Gate check before boarding.
- **Quote / Quote Issued stage**  
  - Definition: Stage representing that pricing/configuration has been sent as a quote record.  
  - Use case: Trigger follow-up tasks, approvals, and SLA timers; sync to CPQ/ERP.  
  - Analogy: Handing someone a written estimate.
- **Initial evaluation**  
  - Definition: Customer is testing or comparing options; proofs-of-concept underway.  
  - Use case: Track POC milestones, assign technical resources, monitor time-in-stage.  
  - Analogy: Test-driving the car.
- **Final evaluation / Final review**  
  - Definition: Late stage where commercials/terms are being finalized with decision-makers.  
  - Use case: Approval workflows, legal/procurement steps, forecast weighting.  
  - Analogy: Last look at the contract before signing.
- **Design registration**  
  - Definition: Channel-only milestone to register an opportunity with a vendor for protection/discount. Often stored as a property or separate pipeline stage.  
  - Use case: Prevent channel conflict, lock in special pricing, tie to distributor fields.  
  - Analogy: Planting your flag to reserve the territory.
- **Closed Won / Closed Lost**  
  - Definition: Terminal stages indicating success or failure; trigger revenue booking or loss analysis.  
  - Use case: Kick off fulfillment/onboarding, update ARR/MRR, drive win/loss reporting.  
  - Analogy: The deal is either a signed contract or a filed rejection.

## Automation & Workflows
- **Workflows (deal stage automation)**  
  - Definition: HubSpot automation builder supporting enrollment triggers, if/then logic, updates, webhooks, and actions across objects.  
  - Use case: Auto-move stages, set required fields, create follow-up tasks, send approvals, sync to external apps.  
  - Analogy: A programmable conveyor belt that performs steps as items pass.
- **Sequences (email sequences)**  
  - Definition: Sales-owned, semi-automated outreach with templated emails, tasks, and branching based on replies/meetings. One-to-one and respect inbox limits.  
  - Use case: Post-quote follow-up, trial nurture, re-engagement; stops on reply/meeting.  
  - Analogy: A drip coffee maker—measured drips until someone picks up the cup.
- **Automated deal progression**  
  - Definition: Moving deals between stages based on triggers (e.g., quote signed, meeting completed, property filled).  
  - Use case: Reduce manual updates, improve forecast accuracy, enforce methodology steps.  
  - Analogy: Turnstile opens automatically when the ticket is validated.
- **Task automation (recurring tasks)**  
  - Definition: Workflows or sequences that create tasks on cadence (e.g., weekly check-ins) or on events (new stage, idle deals).  
  - Use case: Keep reps on SLAs, ensure multi-threading, renewal touches.  
  - Analogy: Calendar reminders that appear without you setting them each time.
- **Triggers (enrollment, stage-change)**  
  - Definition: Conditions that enroll records into workflows—property changes, associations, activities, form submissions, stage moves.  
  - Use case: Start/stop automations, branch paths, set deal probabilities.  
  - Analogy: Light sensors that switch on when movement is detected.
- **Notifications (internal alerts)**  
  - Definition: In-app, email, SMS (via integrations), or Slack/Teams alerts fired from workflows or sequences.  
  - Use case: Signal approvals needed, POs received, quote viewed, stalled deals.  
  - Analogy: Pager buzz when something important happens.

## Reporting & Views
- **Board view (Kanban view)**  
  - Definition: Drag-and-drop pipeline board showing deals by stage with counts, amounts, and aging; supports filters and swimlanes by team/owner.  
  - Use case: Daily standups, pipeline hygiene, quick stage moves.  
  - Analogy: Sticky notes on a whiteboard you can slide across columns.
- **Deal tags**  
  - Definition: Lightweight labels (e.g., “High Risk”, “Renewal”, “Partner-led”) displayed on deal cards; launched to improve board scannability.  
  - Use case: Prioritize follow-up, flag special terms, identify partner vs. direct.  
  - Analogy: Colored stickers on folders.
- **Pipeline reporting**  
  - Definition: Dashboards and reports for funnel conversion, forecast, stage velocity, and pipeline coverage; includes forecast categories and goals.  
  - Use case: Leadership visibility, rep coaching, capacity planning.  
  - Analogy: Car dashboard gauges showing speed and fuel.
- **Deal aging (time-in-stage tracking)**  
  - Definition: Measures how long deals spend in each stage and total cycle time; can trigger SLA alerts when thresholds exceed.  
  - Use case: Highlight stalls, rebalance territories, drive playbook usage.  
  - Analogy: Stopwatch timing each lap.

## Integrations & Quoting
- **Tacton integration (CPQ tool)**  
  - Definition: CPQ integration used for complex configurable products; typically passes configurations and pricing into HubSpot quotes/deals via API.  
  - Use case: Ensure accurate BOM/pricing, generate approval-ready quotes, keep ERP/CRM in sync.  
  - Analogy: A custom sandwich builder that sends the exact recipe to the cashier.
- **Quote-to-deal association**  
  - Definition: Quotes are child records linked to deals; can copy line items, terms, and signatures back to the deal.  
  - Use case: Keep revenue, products, and signatures tied to the opportunity; enable e-sign and payment collection.  
  - Analogy: Attaching the signed estimate to the job folder.
- **Distributor field limitations**  
  - Definition: Channel-specific properties (e.g., Distributor, Reseller) often modeled as dropdowns; some CPQ/ERP syncs support only text/picklists, not complex associations.  
  - Use case: Track which partner owns the deal, surface margin, prevent duplicate design registrations.  
  - Analogy: A form with a fixed list of permitted partner names.

## Other
- **PO (Purchase Order) tracking in deals**  
  - Definition: PO number/date/file captured as deal properties or attachments; can gate Closed Won until present.  
  - Use case: Booking accuracy, finance reconciliation, trigger fulfillment.  
  - Analogy: Receipt number attached to the sale.
- **Deal amount vs. lifetime revenue**  
  - Definition: `Amount` represents the current opportunity value (often ACV/TCV for this deal); lifetime revenue aggregates all historical/expected revenue from a customer (may live on company/subscription objects).  
  - Use case: Forecast near-term deals while still seeing total account value; renewals/expansions become new deals contributing to lifetime.  
  - Analogy: This invoice vs. the customer’s total tab over time.
- **Projects above deal level (hierarchical structure)**  
  - Definition: Modeled via custom objects (e.g., Project/Engagement) associated to multiple deals/quotes; allows roll-up of milestones and revenue.  
  - Use case: Multi-phase programs, SOWs with multiple deals, partner initiatives; reporting roll-ups by project.  
  - Analogy: A binder that holds several related folders (deals).
