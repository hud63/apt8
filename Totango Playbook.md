# Totango Implementation Playbook for B2B SaaS Customer Success

Managing 90+ B2B SaaS customers across different journey stages requires a robust customer success platform configuration. **Totango's strength lies in its modular SuccessBLOC architecture, flexible health scoring, and powerful automation capabilities**—but realizing this potential demands strategic setup. This playbook provides actionable guidance for implementing Totango to support customers transitioning from high-touch to self-service engagement models.

---

## Customer health scoring models for tiered customers

Health scores serve as the foundation for all customer success operations in Totango, driving automated workflows, prioritization, and risk detection. For B2B SaaS companies managing Light and Core tier customers, **creating tier-specific health profiles is essential** because different engagement models require different success indicators.

### Choosing between Totango's two health models

Totango offers two distinct health calculation approaches. The **Account Health Model** provides simpler equal-weight scoring where accounts become "Poor" if any single metric hits a poor threshold—best for organizations wanting straightforward traffic-light indicators. The **Multidimensional Health Model** enables weighted scoring with numerical values from 0-100, allowing dimensional analysis across usage, engagement, and satisfaction categories. For B2B SaaS with differentiated customer tiers, the multidimensional approach delivers the granularity needed to distinguish between Light and Core customer expectations.

https://support.totango.com/hc/en-us/articles/360030899812-Creating-Health-Profiles-with-Health-Designer

### Recommended metrics and weightings by tier

For **Light Tier customers** transitioning to self-service, weight metrics toward automated signals since these accounts may not have dedicated CSM relationships:

| Dimension | Light Tier Weight | Key Metrics |
|-----------|------------------|-------------|
| Product Usage | 35% | Login frequency, core feature adoption, session duration |
| Support Health | 25% | Open ticket count, ticket trends, SLA status |
| NPS/Surveys | 20% | Automated survey responses, CSAT scores |
| Feature Adoption | 20% | Breadth of usage, new feature engagement |

For **Core Tier customers** maintaining some high-touch elements, incorporate relationship-based metrics:

| Dimension | Core Tier Weight | Key Metrics |
|-----------|-----------------|-------------|
| Product Usage | 25% | License utilization, feature depth, active users |
| CSM Sentiment | 20% | Subjective assessment (1-4 scale), relationship strength |
| Engagement | 20% | Days since last touch, success plan exists, QBR completion |
| Support Health | 15% | Ticket patterns, escalation history |
| Business Outcomes | 10% | Goal achievement, ROI indicators |
| NPS | 10% | Survey scores, feedback trends |

https://support.totango.com/hc/en-us/articles/202301749-Best-practices-for-designing-health-profiles

### Configuration steps in Health Designer

Navigate to **Settings → Data Management → Health Designer** to create tier-specific profiles. Critical configuration points:

1. **Profile ordering matters**: Position the most restrictive profile first (Core Tier), then Light Tier, with a default catch-all profile last—Totango processes profiles sequentially and assigns the first match
2. **Segment criteria**: Define which accounts use each profile using filters like `Contract Value >= $50,000 AND Customer Tier = "Core"` for Core customers
3. **Threshold calibration**: Set Good at **75-100**, Average at **50-74**, and Poor at **0-49** as starting points, adjusting based on correlation with actual churn data
4. **Missing value handling**: Configure whether missing metrics are excluded entirely or assigned neutral scores—for Light Tier accounts lacking CSM sentiment data, excluding that metric prevents artificial score deflation

https://support.totango.com/hc/en-us/articles/4410017625748-Configure-profiles-for-multidimensional-health

---

## Automated workflows and playbooks by journey stage

Totango's automation engine centers on **SuccessPlays** (automated workflows) packaged within **SuccessBLOCs** (modular program templates). Each journey stage benefits from specific automation patterns.

### Onboarding automation (30-60 day cycles)

The **Manage Onboarding Projects SuccessBLOC** provides pre-configured stages: Kickoff → Configuration → Enablement → Go Live → Completed. Configure these automations:

**Welcome Sequence SuccessPlay**: Trigger when `Customer Journey Stage = Onboarding` to automatically create CSM tasks for kickoff scheduling, send welcome email campaigns with setup instructions, and begin the onboarding health profile that tracks time-to-value metrics rather than mature account indicators.

**Delayed Onboarding Escalation**: Configure a SuccessPlay that triggers when accounts remain in "Configuration" stage beyond **14 days**, creating escalation tasks and notifying team leads. Set the criteria as `Onboarding Stage = Configuration AND Days in Current Stage > 14`.

**Post-Onboarding Transition**: When `Onboarding Stage = Completed`, automatically update Customer Journey Stage to "Adoption," trigger CSAT survey via campaign, and create 30-day check-in task.

https://support.totango.com/hc/en-us/articles/360060561691-Managing-Onboarding-Projects-SuccessBLOC-Setup

### Adoption stage automation

During adoption (typically days 60-365), focus automations on driving feature usage and identifying struggling accounts:

- **Usage Drop Alert**: Trigger when `Weekly Active Users dropped > 25%` to create investigation task with dynamic account context
- **Feature Adoption Campaign**: Target users who haven't used key features within 30 days of onboarding completion with educational content
- **License Utilization Warning**: When `License Utilization < 50%` for 14+ days, trigger outreach sequence

https://support.totango.com/hc/en-us/articles/360059614691-Map-your-customer-journey-stages

### Retention and renewal automation

The **Renewals SuccessBLOC** supports multiple renewal types. Configure these based on your model:

**90-Day Pre-Renewal SuccessPlay**: When `Renewal Date within next 90 days AND Health = Good`, create task to schedule success review and identify expansion opportunities. When `Renewal Date within next 90 days AND Health = Poor`, trigger immediate risk intervention workflow with executive sponsor engagement.

**Auto-Renewal Monitoring**: For subscription-based renewals, configure campaigns that notify customers of upcoming auto-renewal dates while creating internal tasks to verify payment method status.

**Churn Recovery**: When accounts reach `Contract Status = Churned`, trigger win-back campaign sequence with re-engagement offers.

https://support.totango.com/hc/en-us/articles/17369253780116-Renewals-SuccessBLOC-Setup

### SuccessPlay configuration essentials

When creating any SuccessPlay, configure these critical elements:

- **Dynamic assignment**: Assign tasks by role (e.g., "Success Manager") rather than named individuals, enabling plays to scale across teams with automatic fallback to the SuccessPlay owner when roles aren't assigned
- **Post-completion actions**: Make touchpoint logging mandatory before task closure to ensure engagement data capture
- **Estimated effort**: Set task effort hours to enable workload balancing via Totango's availability tracking

https://support.totango.com/hc/en-us/articles/360033300652-Create-SuccessPlays

---

## Early warning systems for at-risk customers

Detecting disengagement before customers "go ghost" requires configuring multiple signal types with appropriate response automations.

### Key disengagement signals to monitor

Configure segments and triggers for these early warning indicators:

| Signal | Detection Criteria | Response Timeline |
|--------|-------------------|-------------------|
| Login silence | `Last Activity > 30 days` | Automated re-engagement within 7 days |
| Engagement collapse | `Engagement Score dropped 50%+ in 14 days` | CSM task within 24 hours |
| Usage cliff | `License Utilization decreased 90% in 7 days` | Immediate investigation |
| Communication silence | `Days Since Last Touch > 45` | Proactive outreach task |
| Support escalation | `Open Ticket Count > 5` | Priority review |

https://support.totango.com/hc/en-us/articles/203166195-Analyze-value-metrics

### Implementing the Detect Risk SuccessBLOC

Install the **Detect Risk SuccessBLOC** from the marketplace as your early warning foundation. It provides:

- **Risk Status lifecycle attribute** tracking stages: Not At Risk → Identified → Engaged → Resolved
- **Risk Reason multi-select** for categorizing specific issues (leadership change, product problems, competitive threat)
- **Pre-configured SuccessPlays** for different risk scenarios including champion loss detection
- **KPI tracking** for days-to-resolve and revenue at risk

Configure the Risk Status to automatically update when health scores cross thresholds, creating an audit trail of risk progression.

https://support.totango.com/hc/en-us/articles/12987365317652-Detect-Risk-SuccessBLOC-Setup

### Configuring automated alerts

**Segment Triggers** provide the alerting mechanism. Create a segment with at-risk criteria, then:

1. Click "Triggers" in segment options
2. Configure "On Entry" actions to add tags (e.g., "at-risk") and send email notifications
3. Configure "On Exit" actions to remove tags when conditions improve
4. Activate the trigger

For Slack notifications, configure webhook actions in SuccessPlays using Slack's Block Kit JSON format. Include dynamic attributes like `{{account.name}}` and `{{account.health_score}}` for context-rich alerts.

https://support.totango.com/hc/en-us/articles/211528586-Use-segment-triggers-and-tag-automation

### AI-powered churn prediction with Totango Unison

Announced in late 2024, **Totango Unison** provides AI-driven churn intelligence analyzing customer engagement patterns across calls, emails, meetings, and support interactions. The standard model enables rapid deployment with quick risk detection, while the custom enterprise model trains on your historical data for predictions months before renewal. Consider this for organizations with sufficient historical churn data to train custom models.

https://www.totango.com/blog/unison-ai-customer-success-churn-prediction

---

## HubSpot data integration workarounds

When native integrations prove insufficient, several workaround strategies maintain data synchronization between HubSpot and Totango.

### Native HubSpot integration capabilities and limits

Totango provides a **native HubSpot Sales Hub connector** through Customer Data Hub supporting bi-directional sync of Companies, Contacts, Deals, and Tickets. However, key limitations exist:

- Maximum **two filter arguments** in the UI (HubSpot Search API allows three)
- API queries limited to **10,000 total results** per query
- Custom object fields not fully supported for field selection

For standard use cases, configure via **Settings → Data Management → Customer Data Hub → CRMs → HubSpot** using OAuth authentication.

https://support.totango.com/hc/en-us/articles/4401900310548-Configure-a-HubSpot-integration

### CSV import process for manual data transfers

When native integration filtering proves inadequate, CSV imports offer complete control:

**File preparation requirements**:
- One row per object with unique identifiers
- Dates in ISO 8601 format: `2026-01-12T00:00:00.0Z`
- Numbers without special characters (no $ or commas)
- Multi-select values comma-separated
- Text with special characters enclosed in double quotes

**Import process**:
1. Navigate to Customer Data Hub → Data Files → Local File
2. Select object type (Accounts, Users, Touchpoints, Tasks)
3. Upload CSV and map fields using the visual mapper
4. Use the Function Editor to transform data during import (e.g., CONSTANT function for static values across all rows)
5. Validate mapping preview before executing

https://support.totango.com/hc/en-us/articles/360033534772-Prepare-a-data-file-for-upload-CSV

### Scheduled imports via external storage

For recurring data transfers, connect Totango to **Google Drive, Dropbox, SFTP, or AWS S3** and configure scheduled imports running hourly, daily, or on custom cadence. Generate an API endpoint from any scheduled integration to trigger imports programmatically when HubSpot data preparation completes.

https://support.totango.com/hc/en-us/articles/360018975091-Schedule-a-data-file-for-import

### Zapier integration for real-time sync

When you need real-time triggers beyond native capabilities, **Zapier** bridges the gap:

- **Totango triggers**: Account created, account attribute changed, user added
- **Totango actions**: Send data via HTTP API

Popular Zap: "Update companies in HubSpot when accounts are created in Totango" enables bi-directional sync for specific events.

https://zapier.com/apps/hubspot/integrations/totango

### Complex filtering workaround

When Totango's two-filter limit blocks needed HubSpot queries:

1. Create a custom checkbox property in HubSpot
2. Build a HubSpot contact/company list with your complex filter criteria
3. Create a HubSpot workflow that sets the checkbox when records enter the list
4. In Totango, filter on that single checkbox property

This consolidates complex multi-condition filters into a simple boolean that Totango can query.

https://support.totango.com/hc/en-us/articles/4865934511380-Use-advanced-query-filtering-in-a-Hubspot-integration

---

## Task management and accountability frameworks

Effective task management ensures customer touchpoints don't fall through cracks while providing visibility into team workload and performance.

### Task creation and assignment best practices

Create tasks with **action-oriented titles** (e.g., "Investigate open support tickets" rather than "Support tickets") and rich descriptions including hyperlinks and context. Key configuration options:

- **Flow assignment**: Categorize tasks by journey stage (Onboarding, Renewal, Escalation) for accurate reporting
- **Priority levels**: High/Normal/Low determines display order in CSM agenda
- **Estimated effort**: Hours required, enabling workload balancing
- **Post-completion actions**: Mandatory touchpoint logging, attribute updates, or follow-up task creation

https://support.totango.com/hc/en-us/articles/360033351532-Create-and-manage-tasks

### Dynamic task assignment with Team Pools

For distributed teams, **Team Pools** enable criteria-based assignment:

1. Create pools segmented by Totango user attributes (Region, Timezone, Language)
2. Configure assignment logic:
   - **Next person in line**: Random selection
   - **Next available person**: Random from those with availability
   - **Most available person**: Lowest current workload

Set availability hours per team member and Totango automatically calculates allocation (sum of estimated task effort) against remaining capacity.

https://support.totango.com/hc/en-us/articles/360037315312-Manage-dynamic-task-assignment

### Touchpoint tracking across the team

Configure multiple touchpoint capture methods:

- **BCC logging**: Send customer emails with BCC to touchpoints@totango.com for automatic capture
- **Touchpoint Connect**: Outlook add-in for logging directly from inbox
- **Calendar integration**: Connect Google/Outlook calendars for meeting tracking
- **SuccessFlow tagging**: Categorize touchpoints by journey stage for filtered reporting

The **Team Spotlight dashboard** aggregates touchpoint activity showing individual CSM contributions, team coverage rates, and engagement trends over configurable time periods.

https://support.totango.com/hc/en-us/articles/11832890322324-Understand-touchpoints

### Task assignment policy for ownership changes

Configure automatic task reassignment when account ownership transfers via **Settings → User Management → Totango Users → General Settings**. Options include reassigning all open tasks to new owner, keeping tasks with original assignee, or splitting based on due date.

https://support.totango.com/hc/en-us/articles/7617947597716-Configure-a-task-assignment-policy

---

## Segmentation strategies for prioritization

Effective segmentation enables CSMs to focus on accounts needing immediate attention while maintaining appropriate engagement across the portfolio.

### Segmenting for trust rebuilding vs. healthy customers

Use the **Detect Risk SuccessBLOC's Risk Status attribute** to create distinct segments:

**Trust Rebuilding Segment**: `Risk Status = Identified OR Risk Status = Engaged` combined with `Risk Reason contains "Product Issues"` isolates customers experiencing specific trust-damaging situations. Add filters for contract value to prioritize high-value recovery efforts.

**Healthy Customer Segment**: `Health Score >= 70 AND Risk Status = Not At Risk` identifies candidates for expansion conversations, referral requests, and case study development.

**Watch List Segment**: `Health Score between 50-69 AND Days Since Last Touch > 21` catches accounts trending toward risk before they reach critical status.

https://support.totango.com/hc/en-us/articles/12987365317652-Detect-Risk-SuccessBLOC-Setup

### Segment configuration for prioritization frameworks

Build layered segments that combine multiple prioritization factors:

```
High Priority Accounts:
  (Health = Poor OR Risk Status = Identified)
  AND Contract Value > $25,000
  AND Renewal Date within 90 days
```

All Totango segments are **dynamic by default**, automatically updating as underlying data changes. This powers real-time SuccessPlay triggers and accurate dashboard reporting without manual list maintenance.

https://support.totango.com/hc/en-us/articles/360032225491-Create-and-save-segments

### My Command Center for CSM prioritization

Totango's My Command Center aggregates key segments into a single prioritization view:

1. **Periodic check-ins**: Time-based milestones for regular outreach
2. **Health alerts**: Accounts with declining scores
3. **Milestone events**: Customers reaching journey stages
4. **At-risk accounts**: Flagged accounts requiring immediate attention
5. **Renewals upcoming**: Accounts approaching contract dates

Configure these segments within SuccessBLOCs and pin them to My Portfolio for daily access.

https://support.totango.com/hc/en-us/articles/202298079-CSM-Portfolio-Segment

---

## Dashboard configurations for balanced productivity

Configure dashboards to support both daily operational execution and strategic portfolio management.

### CSM daily operations dashboard

**My Portfolio** serves as the CSM home screen. Configure these elements:

- **Portfolio Health Widget**: Contract value summary with health breakdown by dimension—use this for morning portfolio scan
- **Notifications/Activity Feed**: Real-time account events, health changes, campaign responses—process like an email inbox
- **Task Agenda**: Grouped by Overdue/Today/Later with priority sorting—aim to "prioritize your day in 10 minutes"
- **Pinned Accounts**: Quick access to high-priority accounts requiring active attention

Set portfolio scope to "Accounts where I am assigned" for focused personal view.

https://support.totango.com/hc/en-us/articles/204012969-Understand-My-Portfolio

### Manager performance dashboard

**Team Spotlight** provides performance visibility under Executive Console:

- **Account Coverage Section**: Touchpoints and tasks created/completed across team
- **Individual CSM Summary**: Each team member's contribution to totals
- **Work Focus Tab**: Task distribution by customer journey stage
- **TV Mode**: Auto-refresh every 60 seconds for office display

Filter by team role, pool, or manager hierarchy. Sort team members by engagement volume, coverage rate, or portfolio health.

https://support.totango.com/hc/en-us/articles/206209133-Team-Spotlight-Overview

### Balancing operational and strategic work

Structure your Totango workflow to protect time for both:

**Daily operational routine (60-90 minutes)**:
1. Process notifications identifying urgent items
2. Review and execute task agenda
3. Log touchpoints from customer interactions
4. Check health alerts for immediate response needs

**Weekly strategic review (30-45 minutes)**:
- Review portfolio quality score trends in Executive Console
- Identify accounts for proactive outreach via segment analysis
- Plan upcoming QBRs and success reviews
- Analyze SuccessPlay completion rates for process optimization

https://support.totango.com/hc/en-us/articles/203657305-Analyze-health-by-segment-and-team

---

## First 30-60 day implementation priorities

Sequence your Totango implementation to establish foundation before adding automation complexity.

### Week 1-2: Data foundation

**Data Modeler configuration** establishes your account structure:
- Define customer journey stages (Onboarding → Adoption → Nurture → Expansion)
- Configure lifecycle status attributes for tracking stage progression
- Map contract statuses (Free, Trial, Paying, Churned)

**Customer Data Hub setup** connects your data sources:
- Establish CRM connection (Salesforce or HubSpot) with account and contact mapping
- Configure recurring sync schedules (daily recommended for account data)
- Import initial customer list via CSV if CRM integration incomplete

**User management** prepares your team:
- Set up team structures and assign roles
- Configure permissions (Practitioner, Contributor, Viewer)
- Enable email notifications for task assignments

https://support.totango.com/hc/en-us/articles/28315187739028-Implement-Totango-for-my-organization

### Week 2-4: Core functionality

**Health profile configuration**:
- Start with Account Health model for simplicity, migrate to Multidimensional later
- Define Good/Average/Poor thresholds using available metrics
- Create tier-specific profiles if customer segments have different success indicators

**Customer Intelligence SuccessBLOC**: Install this first to validate data quality and identify missing information. It provides segments highlighting accounts with incomplete data requiring cleanup.

**Basic segments**: Create essential views including renewals this quarter, at-risk accounts (health = poor), and accounts by journey stage.

https://support.totango.com/hc/en-us/articles/360039428031-Add-new-SuccessBLOCs

### Week 4-6: Automation activation

**Detect Risk SuccessBLOC**: Activate early warning capabilities with risk status tracking and automated alert SuccessPlays.

**Onboarding SuccessBLOC**: Choose Manage Onboarding Projects (high-touch) or Digital Onboarding (low-touch) based on your model. Configure stage progression and completion criteria.

**Initial SuccessPlays**: Start with one automation at a time, evaluate results before adding more. Begin with high-impact, low-risk plays:
- Renewal approaching notification (90 days out)
- Health score drop alert
- Post-onboarding check-in

https://support.totango.com/hc/en-us/articles/360015782992-Creating-and-Configuring-a-SuccessBLOC

### Quick wins to demonstrate value

Achieve these within the first 30 days to build team confidence:

- **Portfolio visibility**: Every CSM can view their accounts with health scores
- **Task management**: Team using Totango for touchpoint logging and task tracking  
- **Basic alerting**: Automated notifications when health drops to Poor
- **Renewal calendar**: Segment showing all renewals in next 90 days

These establish daily Totango usage habits before introducing more sophisticated automation.

### Training resources

Totango Campus (campus.totango.com) provides self-paced courses in recommended order:

1. **New Totango User Path**: Core functionality and terminology
2. **Managing a Portfolio in Totango**: Daily workflow best practices
3. **Totango Admin Course**: Configuration and setup for administrators
4. **SuccessBLOC Setup Courses**: Program-specific configuration guides

https://campus.totango.com/

---

## Conclusion

Successful Totango implementation for 90+ B2B SaaS customers requires methodical foundation-building before automation sophistication. **Start with clean data and basic health scoring**, then layer in tier-specific profiles that reflect the different success indicators for Light versus Core customers. The SuccessBLOC architecture provides pre-built best practices—leverage Customer Intelligence and Detect Risk as your first installations to validate data quality and establish early warning capabilities.

For HubSpot integration challenges, the combination of native connector for standard syncs with CSV imports or Zapier for edge cases provides comprehensive coverage. The key insight for task management is configuring dynamic assignment via Team Pools rather than named individuals, enabling workflows to scale as your team grows.

Most critically, **resist the temptation to automate everything immediately**. Activate one SuccessPlay at a time, measure its effectiveness, then iterate. This approach builds team confidence while ensuring automations actually drive desired customer outcomes rather than generating noise. The organizations that extract maximum value from Totango are those that treat it as an evolving system refined through continuous learning about what signals and interventions actually predict and prevent churn.