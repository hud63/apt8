Fri, 12 Dec 25
### Meeting Continuation & Client Interaction Context
- Second part of A8 Services overview meeting with Michelle
- Started with brief personal chat about Michelle’s kitten
    - Michelle on “roadshow” showing off new pet to team members
    - Mark had seen kitten in previous meeting
- Michelle patient with technical setup and scheduling coordination
### Team Delivery Structure & Daily Operations
- Daily standup cadence varies between Core and Enterprise teams
    - Monday meetings: Longer sessions focused on full week setup
        - Review what you’re doing for the week
        - Identify if you have enough/too much work
        - Ensure everyone set up properly for week ahead
    - Tuesday-Friday: Quick daily check-ins
        - What are you working on today?
        - What are you stuck on?
        - What do you need help with?
    - Some teams prefer end-of-week wrap-up plus shorter Monday kickoff
- Team leads utilize dashboards in Salesforce and ClickUp for project oversight
    - Pull up PC or deal information for status updates
    - Review overdue tasks from previous week
    - Identify tasks with no assignee or due date
    - Keep ClickUp clean and organized for upcoming week
- Dashboard access and availability:
    - Mark has access to Enterprise Overview V4 dashboard in Salesforce
    - Navigate to: Dashboards → All Dashboards → Search “Enterprise Overview V4”
    - Soraki manages enterprise-specific reporting and dashboards
    - Sprint dash available for Jen’s projects but not yet built for Matt’s team
    - Can request sprint dash creation through Soraki or Taron if helpful
### Project Management System Transition & Structure
- Currently using ClickUp with planned migration to Rocket Lane (PSA system)
    - Enterprise teams switching January 2025
    - Core and retainer teams switching February-March 2025
    - Both systems will integrate with Salesforce for seamless data flow
- ClickUp hierarchy and organization:
    - Client space (highest level)
    - Project folders (separate folder per project)
    - Task lists within folders (where actual tasks live)
    - Example: Cars client has three separate projects, each with own lists
- Navigation and view differences:
    1. Client level: High-level dashboard with recent folders, docs, minimal functionality
    2. Folder level: Rich feature set including:
        - Client view (shareable with clients via world icon)
        - Pre-built timeline views
        - Agendas and meeting notes section
        - All internal documentation and sprint meetings
    3. List level: Fewer views but customizable options available
- Multiple lists per project sometimes necessary:
    - Primary project list for main work
    - Separate UAT bugs list with client form submission capability
    - All lists remain under same project folder structure
### Task Management Best Practices & Critical Rules
- Never delete tasks - always archive instead
    - Deletion breaks Salesforce integration and messes up reporting
    - Archiving keeps integration clean and maintains data integrity
    - If time already logged to task, use “closed” status instead of archiving
    - Closed status removes from view but preserves all data for reporting
- Task editing permissions and guidelines:
    - Can rename tasks freely without sync issues
    - Can edit all task details and properties
    - Only deletion creates integration problems
- Time entry correction process (when logged incorrectly):
    - Cannot simply delete time entries due to Salesforce sync
    - Proper correction method:
        1. Click into time entry to edit
        2. Change time log to 1 minute
        3. Add note saying “delete”
        4. Integration will remove from both ClickUp and Salesforce
- Why this matters: Maintaining data integrity across systems prevents reporting discrepancies and billing errors
### Client Visibility & Transparency Requirements
- Clients have comprehensive real-time project access through client view:
    - Complete task list organized by status
    - Assignee information and due dates
    - Estimated hours vs actual hours tracked
    - Timeline view showing project progression
- Client engagement varies dramatically:
    - Some clients never open the link once
    - Others live in the system and love seeing progress
    - Weekly reviews conducted but clients can check anytime
- Daily time tracking critical due to client transparency:
    - Clients can see if work promised for the week shows no logged time by Friday
    - Creates trust issues and uncomfortable client questions
    - Better to log time daily than face client scrutiny about progress
- Poor project management consequences:
    - Client loses trust and confidence
    - Escalations to leadership level
    - Tasks fall through cracks when not properly managed in ClickUp
    - Miscommunication about scope and requirements
    - Free work given away due to poor tracking and documentation
### Time Categories, Tracking & Utilization Framework
- Three distinct time categories with specific tracking locations:
    1. **Billable Time**: All client work regardless of billing status
        - Includes work that should be billable even if later written off
        - Counts toward utilization targets (not your fault if scope was wrong)
        - Log location: Client project lists in ClickUp
        - Examples: Any task performed for client benefit
    2. **Business Time**: Company-valuable non-client work
        - Requires manager approval before counting toward utilization
        - Examples: Sales support meetings, client technology certifications, required training
        - Process: Log to A8 Internal list, tag manager for approval, they submit to DoD
        - Reduces available hours denominator (benefits utilization calculation)
    3. **Non-billable Time**: Standard internal activities
        - Internal meetings, standups, one-on-ones, administrative tasks
        - Expected to consume ~25% of total work time
        - Log location: A8 Internal list in ClickUp
- Utilization calculation methodology:
    - Formula: Billable Hours ÷ Available Hours = Utilization %
    - Target: 75% monthly utilization (not weekly - allows for natural ebbs and flows)
    - Available hours = Total work hours - PTO - holidays - business time
    - Example: 40 hours available - 3 hours business time = 37 hours denominator
- Time tracking deadlines and enforcement:
    - Daily logging expected and strongly encouraged
    - Weekly lock: Time must be logged within one week (Sunday to Saturday)
    - Late time entries still appear in ClickUp/client budgets but don’t count for bonuses
    - Monthly lock: Everything locked at midnight on last day of month
    - Business time submissions must be completed before month-end deadline
### Utilization Bonus Structure & Eligibility
- Monthly incentive program to reward efficiency and high utilization:
    - **80-89% utilization**: $500 cash or 1 bonus PTO day
    - **90-99% utilization**: $1,000 cash or 2 bonus PTO days
    - **100%+ utilization**: $1,500 cash or 3 bonus PTO days
- Bonus selection flexibility:
    - Can choose cash or PTO each month independently
    - Change selection in Ripling before month-end
    - Example: Choose cash in December for holidays, PTO in January for vacation
- Eligibility requirements:
    - Minimum 120 available hours per month required
    - Prevents disproportionate bonuses when significant PTO taken
    - November/December: Proportionally reduced minimums due to company holidays
    - New employees: Ramping period expected, not required to hit 75% immediately
- Payment timing:
    - Bonus PTO days: Added to Ripling balance first business day of following month
    - Cash bonuses: Paid on second paycheck following month-end (payroll processing time)
- Important notes:
    - Work-life balance prioritized - no expectation of 60+ hour weeks
    - Designed to reward efficiency, not overwork
    - Monthly calculation smooths out natural project ebbs and flows
### Personal Utilization Tracking & Visibility
- Comprehensive Salesforce dashboard access for self-monitoring:
    - Navigate to your person record → Related tab for detailed breakdowns
    - Leave requests, ClickUp time entries, business time awards all visible
    - Historical utilization records created monthly with numerator/denominator
    - Can verify business time submissions and follow up if missing
- Weekly and monthly reporting available:
    - Report tab shows total weekly hours (target ~40 hours)
    - Color coding: Dark blue (client work), light blue (internal), teal (PTO)
    - Current month utilization based on elapsed days (not full month projection)
    - Quarterly summaries and historical performance tracking
- Self-service monitoring benefits:
    - Track pacing toward monthly targets
    - Identify weeks needing adjustment
    - Verify all time properly categorized and credited
    - Historical performance review for personal development
### Account Management Structure & Escalation Paths
- Account manager assignments by team:
    - Sam: Enterprise accounts (every project has AM + PM)
    - Ali: Core accounts (strategic assignment, not every project needs AM)
    - If no AM assigned, PM handles responsibilities
    - If no AM or PM, Director of Delivery steps in
- Account manager involvement throughout project lifecycle:
    1. **Deal closure**: Ops team sets up ClickUp and Salesforce, notifies assigned team
    2. **Mobilization call**: AM-led client onboarding covering expectations, processes, communication
    3. **Internal kickoff (IKO)**: Sales and solution architect brain dump to delivery team
    4. **External kickoff/activation**: Team introduction to client with AM-created deck
    5. **Weekly project reviews**: With delivery lead and Director of Delivery
    6. **Project closeout**: AM assists with final client wrap-up activities
### Salesforce Case Management System
- Seven case types for different support needs (always create from project record, not case object):
    **Customer Experience Cases (trigger CX team/DoD):**
    1. **Escalations**: Unhappy clients requiring leadership intervention
    2. **Hours Reports**: Detailed client billing breakdowns and custom reporting
    3. **Cancellation Requests**: Typically retainer clients wanting to discontinue
    4. **Change Orders**: Small scope additions to existing project
        - Examples: Adding native integration, scope increase from 8 to 15 hours
        - Happens anytime during project, often at scope validation
    5. **Upsells**: Major additions requiring new project/sales involvement
        - Examples: Entire new integration, multiple customer stories
        - Software upsells: HubSpot hub upgrades, new purchases (ensures partner credit)
        - Submit case even if uncertain - better to get credit than miss opportunity
    **Operations Team Cases:**6. **Billing Adjustments**: Write-offs, credits, approved overage hours 7. **Systems Issues**: Data discrepancies between Salesforce and ClickUp
- Case creation process:
    - Always navigate to project record first, then click “New Case”
    - Never create cases from case object (form too complex/lengthy)
    - Ensures proper project association and routing
### Scoping Responsibilities & Quality Standards
- Scoping occurs at multiple project phases:
    - Primary scoping during sales process and strategy phase
    - Scope validation during solutions design (comparing detailed tasks to contracted hours)
    - Change order scoping for mid-project additions
- Essential scoping practices:
    - Lead with curiosity, ask comprehensive questions
    - Never make assumptions (they will “bite you in the ass”)
    - Gather all documentation and conduct thorough discovery
    - Map complete solution before estimating hours
    - Test complex integrations to verify feasibility
- Mandatory review requirements:
    - All scoping must have second pair of eyes review
    - Common errors: Wrong understanding, forgotten PM hours, missed QA time
    - Simple property creation may not need review, but complex work always does
- Critical inclusions in all scoping:
    - QA time for testing and validation
    - PM time for coordination and communication
    - Discovery time for proper requirements gathering
### Scope Creep Management & Client Communication
- Scope creep definition: Allowing additional work without change orders
    - Seems helpful but takes hours away from committed deliverables
    - Creates downstream problems when original scope can’t be completed
- Proper scope management process:
    1. Client requests additional work
    2. Ask: “Is this needed for go-live?”
    3. If yes: Create change order with proper scoping
    4. If no: Add to backlog for future retainer work
- Avoid being a “yes man”:
    - Pause before agreeing to additional requests
    - Ask clarifying questions to understand full scope
    - Say “Let me chat internally and get back to you”
    - Small requests often reveal much larger requirements upon investigation
- Documentation and status management:
    - Use “Backlog” status for future work items
    - Acknowledge requests while maintaining scope boundaries
    - Prevents client disappointment when promised work can’t be delivered
### Quality Standards & Professional Expectations
- Deliverable quality requirements:
    - Polished, consistent formatting across all documentation
    - Thorough testing before client delivery (“test, test, test, test, test”)
    - Professional presentation from waist up on video calls
    - Camera on for all client interactions
- Documentation standards:
    - Everything built must be documented (hours scoped and allocated)
    - Consistent formatting - avoid mixed Google Docs/ClickUp/Notion deliverables
    - Technical and front-end docs should match in style and quality
- Communication professionalism:
    - Proofread all client emails and communications
    - High hourly rates require correspondingly high quality service
    - Professional appearance and demeanor in all client interactions
- Error handling and learning culture:
    - Mistakes expected and acceptable - used for learning
    - Requirement: Learn from mistakes, don’t repeat same error multiple times
    - Work with manager when issues arise - no shaming, collaborative problem-solving
    - Apply grace to client mistakes as well - they’re human too
### Success Framework & Behavioral Expectations
- Core behavioral requirements:
    - Be a decent human being (baseline expectation)
    - Follow established processes while suggesting improvements
    - Bring better ideas to management rather than going rogue
    - Company improvement through collaborative feedback encouraged
- Proactivity requirements (described as “huge” and going “such a long way”):
    - Don’t wait for direction - start diving into available work
    - Ask what to focus on if uncertain: calls to review, meetings to shadow, tasks to tackle
    - Request to join client meetings for learning opportunities
    - Check team calendars and volunteer to observe relevant sessions
- Tool mastery expectations:
    - Learn ClickUp, Salesforce, Rocket Lane, and other systems thoroughly
    - Utilize time-tracking tools effectively (Timely AI integration available)
    - Master dashboard navigation and reporting capabilities
- Client relationship building:
    - Goal: Clients call you out by name in positive reviews
    - Build solid, professional relationships that create client loyalty
    - Focus on client happiness and satisfaction as key success metric
- Meeting efficiency considerations:
    - Be mindful of attendee costs (4 people on 3 calls = 12 billable hours)
    - Ensure purposeful attendance - each person should provide value
    - Use business time for internal learning/shadowing rather than client budget
### Process Improvement & Feedback Culture
- Active improvement culture encouraged:
    - If you find better ways to do things, bring them up to management
    - Pain points should be reported even without solutions
    - Company growth through employee feedback and suggestions
- Balance between following process and innovation:
    - Follow established processes as baseline
    - Don’t go off and create entirely separate workflows
    - Collaborative improvement preferred over individual improvisation
- Learning and development approach:
    - Try different time-tracking methods to find what works (Timely, timers, calendar blocks, handwritten)
    - Rounding to nearest 5 minutes acceptable for time entries
    - Experiment during onboarding to establish personal systems
    - Manager support available for developing effective workflows
---
Chat with meeting transcript: [https://notes.granola.ai/t/53669066-c34c-4d92-b4da-22bf601d559c](https://notes.granola.ai/t/53669066-c34c-4d92-b4da-22bf601d559c)