# Leveraging Gong for CX Team Success: A Complete Playbook

**Conversation intelligence transforms how customer experience teams onboard, learn, and scale knowledge.** For a new CX team lead in a complex domain like insurance compliance, Gong and similar platforms provide the infrastructure to accelerate ramp-up from months to weeks, systematically extract customer insights, and build institutional knowledge that survives team changes. This playbook synthesizes official Gong capabilities, industry best practices, and proven frameworks into actionable guidance for building a world-class CX operation.

The core insight from organizations like Momentive (SurveyMonkey) and Egnyte is that conversation intelligence succeeds when treated as more than call recording—it becomes the "infinite memory" for customer relationships, enabling CSMs to access context from sales conversations, spot churn signals before they become cancellations, and learn from peer excellence at scale.

Sources:
- https://www.gong.io/customers/case-studies/egnyte-streamlines-customer-success-management
- https://www.gong.io/blog/5-reasons-to-introduce-customer-success-teams-to-gong

---

## Gong Search Operators and Filtering

Gong provides **100+ filters** for searching conversations, with text operators that dramatically accelerate finding relevant calls. The key operators every CX lead should master:

| Operator | Syntax | Example | Use Case |
|----------|--------|---------|----------|
| Exact phrase | `"phrase"` | `"renewal at risk"` | Find specific customer statements |
| OR condition | `\|` | `price \| cost` | Surface related concepts |
| AND condition | `+` | `compliance + audit` | Require multiple terms |
| AND NOT | `+ (-word)` | `renewal + (-upsell)` | Exclude irrelevant calls |

Sources:
- https://help.gong.io/docs/search-for-calls

Beyond text search, **Smart Filters** enable segmentation by customer journey stage using Deal Stage (During call), Call Categories for admin-defined stages like kickoff or training, and CRM filters for tier segmentation (Light/Core/Pro). The **interaction filters**—talk ratio, longest monologue, patience metrics—help identify calls where customers weren't heard or where reps dominated conversations, both critical signals in insurance contexts where compliance requires thorough explanation.

You can save frequently used filter combinations for quick access. This eliminates repetitive configuration when you need to regularly analyze specific call types like "all kickoff calls with Pro tier customers in the last 30 days."

For insurance compliance specifically, configure filters for call duration (longer calls may indicate complex coverage discussions), talk ratio below 65% (ensuring customers have space to ask questions), and use word filters for regulatory terms like "coverage exclusion," "policy terms," or "disclosure requirements."

Sources:
- https://help.gong.io/docs/search-for-calls
- https://help.gong.io/docs/save-and-manage-search-filters
- https://help.gong.io/docs/coaching-for-account-executives

---

## Trackers Detect Critical Moments Across Thousands of Conversations

Gong Trackers automatically surface important mentions without manual review—essential when a CX team needs to monitor compliance language across all customer interactions. Two tracker types serve different needs:

**Keyword Trackers** capture exact terms and are unlimited. They identify specific words or phrases spoken during calls. For insurance compliance, create trackers for: regulatory terms (`"coverage limits"`, `"policy exclusions"`, `"binding authority"`), competitor mentions, pricing objections (`"too expensive"`, `"over budget"`), and feature request signals (`"I wish"`, `"it would be great if"`).

Sources:
- https://help.gong.io/docs/understanding-trackers
- https://help.gong.io/docs/keyword-tracker-faqs

**Smart Trackers** use AI to identify concepts regardless of exact phrasing—limited to 20 per workspace but far more powerful. You provide example phrases that represent a concept, and Gong's AI identifies similar expressions even when customers use unexpected phrasing. Configure question-based Smart Trackers for: "Did the customer express concerns about compliance requirements?", "Did the customer mention comparing us to competitors?", "Did the customer indicate they're confused about coverage terms?"

Sources:
- https://help.gong.io/docs/create-and-manage-example-based-smart-trackers
- https://help.gong.io/docs/understanding-trackers
- https://help.gong.io/docs/smart-tracker-faqs

The recommended implementation approach for trackers follows three steps: First, identify the specific business outcomes you want to track (competitor intelligence, compliance monitoring, churn signals). Second, create trackers aligned to those outcomes. Third, validate tracker accuracy by reviewing flagged calls and refining keywords or examples as needed.

Sources:
- https://visioneers.gong.io/configuring-gong-76/how-to-implement-trackers-in-3-simple-steps-396
- https://help.gong.io/docs/create-and-manage-example-based-smart-trackers
- https://help.gong.io/docs/create-and-manage-keyword-trackers

---

## Four Phases of Onboarding Call Analysis

Successful CX organizations analyze onboarding systematically across four phases, each requiring different attention:

**Phase 1: Pre-boarding (Post-Sale)** involves reviewing all sales calls before kickoff. The goal is extracting pain points, goals, and promises made during sales so CSMs don't ask customers to repeat themselves. Momentive's "High-Quality Customer Conversation" program requires CSMs to access sales conversation history before any customer contact—this single practice improved their customer experience scores measurably. This approach prevents the common frustration where customers feel they're starting over with each new contact.

Sources:
- https://www.gong.io/case-studies/how-the-customer-success-team-at-momentive-used-gong-to-shape-high-quality-customer-conversations/

**Phase 2: Kickoff and Implementation** calls require annotation of specific commitments and technical requirements discussed. In insurance contexts, document integration requirements with agency management systems, expected workflows, and compliance considerations the customer raised. Use Gong's comment feature to timestamp critical moments with notes like "#implementation_requirement" or "#compliance_discussion" for later searchability.

Sources:
- https://help.gong.io/docs/find-conversations-and-organize-the-library

**Phase 3: Training Sessions** should be recorded and shared back with customers—enabling them to revisit specific topics. More importantly, aggregate training call analysis reveals which topics generate the most confusion. If 40% of training calls include extended discussion of a particular feature, that's a signal for improved documentation or product UX improvement.

**Phase 4: Launch Day and Early Success** calls monitor for "aha moments" and value realization language. Track sentiment shifts during these calls—declining enthusiasm mid-call often predicts adoption problems.

For pattern recognition across onboarding, use Gong's **Streams** to automatically collect calls matching criteria (e.g., all kickoff calls with talk ratio above 70%) and compare successful customer onboarding patterns against those who eventually churned.

---

## Support Call Extraction Identifies Product Gaps

The most valuable CX intelligence often hides in support conversations. Systematic extraction requires both automated detection and regular analysis rhythms.

Configure **keyword trackers** for friction indicators: "frustrated," "doesn't work," "confused," "expected it to," "workaround." Create separate trackers for feature request language: "I wish," "it would be great if," "can you add," "do you have plans to." For insurance specifically, track compliance-related confusion: "I don't understand the coverage," "what does this exclusion mean," "how do I document this."

**Self-service gap analysis** follows a clear methodology: export support ticket topics monthly, categorize each as Education Gap (inadequate documentation), Missing Content (topic not covered), Stale Content (outdated information), or UX Issues (product problems). Cross-reference with existing knowledge base articles. High ticket volume plus missing documentation equals immediate content creation priority.

Sources:
- https://www.sentisum.com/insights-article/best-practice-for-building-a-tagging-taxonomy
- https://www.sentisum.com/customer-service-analytics/help-desk-ticket-categories-best-practices

The optimal tagging taxonomy for support calls uses **30-50 tags maximum** in a hierarchical structure:

- **Level 1:** High-level categories (Billing, Technical, Training, Compliance)
- **Level 2:** Specific subtopics (Payment processing issue, Integration error, Coverage confusion)
- **Level 3:** Root causes (PayPal not connecting, Salesforce sync failed, Exclusion language unclear)

This structure enables both macro-level trend analysis and specific issue tracking without overwhelming agents with hundreds of tags.

Sources:
- https://www.sentisum.com/insights-article/best-practice-for-building-a-tagging-taxonomy

---

## Coaching Libraries Accelerate Team Knowledge

The library structure that accelerates onboarding follows a multi-dimensional organization:

**By Journey Stage:** Separate folders for kickoff calls, insurance review calls, launch day calls, training sessions, and ongoing check-ins. New team members can immerse in each stage sequentially.

**By Skill Type:** Empathy and rapport building, delivering difficult news (coverage limitations, compliance failures), technical explanations (insurance terminology), QBR presentations, renewal and retention conversations.

**By Outcome:** "Hall of Fame" calls demonstrating exceptional performance, "Learning Opportunities" showing common mistakes with manager annotations explaining better approaches, "Competitive Wins" where customers chose you over alternatives.

**By Customer Segment:** Light/Core/Pro tier folders, since conversation dynamics differ significantly by customer sophistication and contract value.

Sources:
- https://help.gong.io/docs/coaching-for-senior-managers-enablement
- https://execvision.io/blog/conversation-intelligence-customer-success/

Iron Mountain reduced new rep time-to-competency significantly using a structured call library approach—new hires hit their ramp targets faster by learning from recorded examples of successful calls. The mechanism: hearing what experienced peers do on calls answers 80% of new hire questions more effectively than written documentation.

Sources:
- https://www.gong.io/blog/call-coaching-practices
- https://www.gong.io/customers/case-studies/ascending-the-peak-how-gong-helped-new-hires-at-iron-mountain-hit-their-ramp-targets
- https://www.gong.io/call-recording-software

For building the library, use Gong's **Streams** to automatically populate folders. Streams are dynamic collections that auto-populate based on filter criteria you define. Create a stream filtered for calls with overall score above 4 stars, specific trackers triggered (e.g., successful objection handling), and specific call categories. New exemplary calls automatically surface for library review without manual searching.

Sources:
- https://help.gong.io/docs/create-and-manage-streams
- https://www.gong.io/blog/5-reasons-to-introduce-customer-success-teams-to-gong

---

## Sentiment Monitoring and Trust Rebuilding

When customers experience product problems, conversation intelligence enables targeted recovery. The approach combines retrospective analysis with forward-looking monitoring.

**Retrospective Analysis:** Don't focus only on the complaint call—analyze the full story. Customers who don't renew rarely make this decision based on one interaction; there's usually a cumulative pattern. Review the account's complete conversation history to understand the full context before any recovery outreach. Voice of customer data from past conversations provides specific language you can reference in renewal discussions to demonstrate you've been listening.

Sources:
- https://help.gong.io/docs/create-and-manage-streams
- https://help.gong.io/docs/find-conversations-and-organize-the-library
- https://churnzero.com/blog/how-to-use-the-voice-of-the-customer-in-your-renewal-conversations/

**Forward Monitoring:** Configure **Deal Board** views filtered to at-risk accounts with recent negative interactions. Set up stream notifications for budget concern language, competitor mentions, and negative sentiment expressions from specific accounts. The goal is catching deteriorating relationships before the customer decides to leave.

**Recovery Conversation Preparation:** Before calling an upset customer, use Gong search to find their exact words about the problem. The search functionality lets you find calls containing specific phrases. Reference their specific concerns using their language: "I heard you mention that the coverage documentation wasn't clear enough for your compliance audit—I want to address that directly." This demonstrates active listening at an organizational level.

Sources:
- https://help.gong.io/docs/search-for-calls

---

## Journey Stage Tagging and Segmentation

For a CX team handling Light/Core/Pro customer tiers across insurance compliance workflows, implement this tagging structure:

**Customer Tier Tags:** Applied to every call based on CRM data sync. Filter any analysis by tier to understand segment-specific patterns. Pro tier customers may have different objection patterns than Light tier.

**Journey Stage Tags:** Use Gong's Call Categories feature configured by admin: Kickoff, Insurance Review, Launch Day, Training, Ongoing Success, Renewal Discussion, Escalation. Categories enable comparative analytics—what's the average talk ratio in successful kickoff calls vs. struggling ones?

**Issue Type Tags:** Via hashtags in comments: #compliance_question, #feature_request, #integration_issue, #billing_inquiry, #coverage_confusion. These enable rapid search and trend analysis.

**Outcome Tags:** Applied post-call: Resolved, Callback Needed, Escalated, Referred to Documentation. Track resolution effectiveness by issue type and journey stage.

Sources:
- https://www.gong.io/blog/call-coaching-practices
- https://help.gong.io/docs/create-and-manage-streams
- https://help.gong.io/docs/explore-your-gong-workspace

---

## Competitor Platform Insights

While Gong dominates the enterprise conversation intelligence market, competitor features suggest workflow enhancements:

**Clari Copilot** emphasizes connecting conversation data to revenue outcomes—in Gong, replicate this by creating comprehensive tracker-triggered alerts that notify managers when competitive situations arise, enabling real-time coaching intervention.

Sources:
- https://www.clari.com/blog/traditional-conversation-intelligence-is-dead/

**Conversational Intelligence for Insurance** platforms like InMoment focus specifically on compliance monitoring, claims processing, and regulatory adherence. They emphasize detecting missed disclosures and suspicious patterns. Configure Gong Smart Trackers for required disclosure language and alert on calls where expected compliance phrases don't appear.

Sources:
- https://inmoment.com/blog/conversational-intelligence-for-insurance/

**Outreach** conversation intelligence emphasizes manager use cases like identifying coaching opportunities, monitoring messaging consistency, and spotting deals that need intervention. Build equivalent functionality in Gong by creating saved searches for at-risk conversation patterns.

Sources:
- https://www.outreach.io/resources/blog/conversation-intelligence-managers-practical-use-cases

---

## Implementation and Change Management

Gong's own research finds **70% of change programs fail** because teams focus on planning and training while neglecting adoption measurement and business outcomes. Their 4-step framework applies to any CX team implementation:

**Step 1: Pre-Launch Planning** defines outcome-focused metrics from the start. What will success look like—reduced onboarding time, improved CSAT, higher retention? Set specific targets (e.g., 90% adoption within 60 days).

**Step 2: Launch with Extensive Communication** includes role-specific training. CSMs need different guidance than their managers. Address surveillance concerns directly in team meetings—the tool exists for development, not compliance monitoring.

**Step 3: Accelerate Adoption** through visible recognition. All-hands calls praise high-adopting individuals. Leadership reinforces usage expectations in regular meetings with visual tracking charts.

**Step 4: Continuous Reinforcement** updates playbooks based on voice of customer data captured. The coaching library isn't built once—it's refreshed quarterly with new exemplary calls and retired content that's no longer relevant.

Sources:
- https://www.gong.io/the-edge/a-4-step-framework-to-drive-effective-change-management-programs/
- https://www.gong.io/blog/a-4-step-framework-to-drive-effective-change-management-programs

The Momentive implementation offers a specific model: weekly CSM call submission to managers for scorecard review, manager feedback in 1:1s, and weekly leadership sessions sharing 2-3 snippets for collective discussion. This rhythm creates consistent conversation quality without oppressive oversight.

Sources:
- https://www.gong.io/case-studies/how-the-customer-success-team-at-momentive-used-gong-to-shape-high-quality-customer-conversations/

---

## Rapid Ramp-Up Plan for New CX Leaders

A new CX team lead in insurance compliance can accelerate domain expertise through structured call listening:

**Week 1:** Listen exclusively to "Hall of Fame" calls from the library—the 10-15 best examples of each call type. This establishes the target standard and covers 80% of foundational questions faster than documentation review.

**Week 2:** Shadow live calls with experienced team members while simultaneously reviewing calls by common issue types in the insurance domain. Use Gong's search to find calls tagged with compliance discussions, coverage questions, and integration challenges.

**Week 3:** Focus on complex edge cases—escalations, churn saves, difficult compliance situations. These reveal the judgment calls that separate good from great CSMs and expose the domain's most challenging scenarios.

**Week 4:** Begin independent customer engagement with post-call review sessions. The new leader records their calls, then reviews with a mentor focusing on specific skills identified in earlier weeks.

Create a **personal stream** configured for: calls from your assigned accounts, calls with specific trackers relevant to your learning goals, calls from team members you're coaching. This ensures relevant calls surface automatically as daily learning material.

---

## Conclusion

The strategic value of conversation intelligence extends beyond individual call improvement to creating **persistent organizational memory**. When a CSM leaves, their customer knowledge traditionally walks out the door. With comprehensive Gong implementation, their best calls, documented insights, and relationship context remain searchable and accessible.

For insurance compliance specifically, this matters even more—regulatory requirements demand demonstrable processes for customer communication. A well-organized Gong implementation provides both operational excellence and audit trail.

The playbook reduces to three foundational practices: **structured listening** (libraries organized by journey stage, skill, and outcome), **systematic extraction** (trackers, tags, and regular analysis rhythms), and **disciplined adoption** (measurement, recognition, and continuous refinement). Master these, and conversation intelligence becomes the competitive advantage that accelerates every aspect of CX operations.
