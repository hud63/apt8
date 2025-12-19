+-----------------------------------------------------------------------------------------------------+
| Link to Call Recording                                                                              |
+-----------------------------------------------------------------------------------------------------+
| - [**[A8 // Abundance360                                                                            |
|   Discovery]{.underline}**](https://app.avoma.com/meetings/3a1edd46-b0bc-4e43-b969-4d8ac6d90ed6)    |
+-----------------------------------------------------------------------------------------------------+
| Call Summary                                                                                        |
+-----------------------------------------------------------------------------------------------------+
| **Key Business Context**                                                                            |
|                                                                                                     |
| Abundance360 operates a highly exclusive, capacity-constrained membership community for founders,   |
| CEOs, and high-level executives, primarily serving organizations doing \$10M-\$10B in revenue. The  |
| business is built around:                                                                           |
|                                                                                                     |
| - \~650 total members                                                                               |
|                                                                                                     |
| - Three membership tiers:                                                                           |
|                                                                                                     |
|   - Virtual: \$11,000                                                                               |
|                                                                                                     |
|   - In-person: \$27,500                                                                             |
|                                                                                                     |
|   - Patron (elite access): \$55,000                                                                 |
|                                                                                                     |
| - Annual live event in March, which physically caps total membership due to long-term venue         |
|   limitations.                                                                                      |
|                                                                                                     |
| - An additional Platinum / Longevity Program (\~\$80,000) exists as a *separate experience* with    |
|   distinct access rules.                                                                            |
|                                                                                                     |
| - They are also exploring a new large-scale sister event (Moonshot Summit) with 1,500--2,000        |
|   attendees, which would operate in a separate HubSpot instance.                                    |
|                                                                                                     |
| **High-Level Strategic Objectives**                                                                 |
|                                                                                                     |
| The overarching goal of this initiative is to:                                                      |
|                                                                                                     |
| - Radically simplify the tech stack                                                                 |
|                                                                                                     |
| - Centralize all core member, event, and engagement data in HubSpot                                 |
|                                                                                                     |
| - Eliminate redundant syncing across Firebase, Airtable, Google Sheets, and external tools          |
|                                                                                                     |
| - Establish HubSpot as the single source of truth                                                   |
|                                                                                                     |
| - Enable scalable access to the same data across:                                                   |
|                                                                                                     |
|   - Member portal                                                                                   |
|                                                                                                     |
|   - Event mobile apps                                                                               |
|                                                                                                     |
|   - AI tools (Peter Bot, future GraphRAG/RAG matching)                                              |
|                                                                                                     |
|   - Executive reporting                                                                             |
|                                                                                                     |
|   - The long-term vision is centralized data → multi-surface delivery without constant sync failure |
|     and reconciliation.                                                                             |
|                                                                                                     |
| **Current Technology EcosystemCore Systems in Play**                                                |
|                                                                                                     |
| - HubSpot -- CRM, payments, memberships, contacts, reporting                                        |
|                                                                                                     |
| - Firebase (Firestore + Functions) --                                                               |
|                                                                                                     |
|   - Legacy payments automation                                                                      |
|                                                                                                     |
|   - Member portal backend                                                                           |
|                                                                                                     |
|   - Messaging infrastructure                                                                        |
|                                                                                                     |
|   - Login/authentication                                                                            |
|                                                                                                     |
|   - Message history + relationships                                                                 |
|                                                                                                     |
| - React Application -- Standalone Member Hub                                                        |
|                                                                                                     |
| - Make.com -- Used heavily for:                                                                     |
|                                                                                                     |
|   - Logging                                                                                         |
|                                                                                                     |
|   - Error handling                                                                                  |
|                                                                                                     |
|   - Daily executive sales summary emails                                                            |
|                                                                                                     |
| - NAN Platform -- AI-based enrichment & qualification                                               |
|                                                                                                     |
| - OpenAI -- Used for:                                                                               |
|                                                                                                     |
|   - Bio Writer                                                                                      |
|                                                                                                     |
|   - Enrichment                                                                                      |
|                                                                                                     |
|   - Matching preparation                                                                            |
|                                                                                                     |
| - Pinecone -- Background RAG foundations for future member matching                                 |
|                                                                                                     |
| - Google Maps API -- Location encoding + city-based filters                                         |
|                                                                                                     |
| - Airtable + Google Sheets -- Used for:                                                             |
|                                                                                                     |
|   - Speaker/faculty exports                                                                         |
|                                                                                                     |
|   - Printable directories                                                                           |
|                                                                                                     |
|   - Ad-hoc data transformation                                                                      |
|                                                                                                     |
| **Membership & Application Process (Current State)**                                                |
|                                                                                                     |
| - Applicants submit an application                                                                  |
|                                                                                                     |
| - AI enrichment (via NAN) scores the applicant                                                      |
|                                                                                                     |
| - If qualified → applicant invited to book sales call                                               |
|                                                                                                     |
| - A \$500 deposit experiment was attempted to bypass qualification:                                 |
|                                                                                                     |
|   - Caused friction and accounting/reporting complications                                          |
|                                                                                                     |
|   - Deposit could not cleanly apply to final membership invoice                                     |
|                                                                                                     |
|   - Temporarily discontinued                                                                        |
|                                                                                                     |
| **Membership Management Complexities**                                                              |
|                                                                                                     |
| - Members may:                                                                                      |
|                                                                                                     |
|   - Delay start dates                                                                               |
|                                                                                                     |
|   - Defer for a year                                                                                |
|                                                                                                     |
|   - Transfer memberships                                                                            |
|                                                                                                     |
|   - Upgrade tiers mid-term                                                                          |
|                                                                                                     |
| - Platinum/Longevity programs exist as separate records, creating:                                  |
|                                                                                                     |
|   - Confusion in onboarding logic                                                                   |
|                                                                                                     |
|   - Issues identifying "true new members"                                                           |
|                                                                                                     |
| - Current new member logic breaks when:                                                             |
|                                                                                                     |
|   - Contacts hold multiple membership object types                                                  |
|                                                                                                     |
| **Member Hub & Portal ArchitectureCurrent State**                                                   |
|                                                                                                     |
| The Member Hub is:                                                                                  |
|                                                                                                     |
| - A standalone React app                                                                            |
|                                                                                                     |
| - Backed by Firebase                                                                                |
|                                                                                                     |
| - Displaying:                                                                                       |
|                                                                                                     |
|   - Member directory (100+ profile attributes)                                                      |
|                                                                                                     |
|   - City-based filtering                                                                            |
|                                                                                                     |
|   - Events calendar (text-only today)                                                               |
|                                                                                                     |
|   - Messaging system                                                                                |
|                                                                                                     |
| - Many fields are:                                                                                  |
|                                                                                                     |
|   - No longer actively used                                                                         |
|                                                                                                     |
|   - Left over from past product experiments                                                         |
|                                                                                                     |
| - Data is constantly syncing between HubSpot & Firebase                                             |
|                                                                                                     |
| **Key Pain Point**                                                                                  |
|                                                                                                     |
| "It has accumulated years of band-aids and abandoned feature requests."                             |
|                                                                                                     |
| There is also:                                                                                      |
|                                                                                                     |
| - No reliable engagement tracking (logins, inactivity, profile completeness)                        |
|                                                                                                     |
| - Poor ability to trigger:                                                                          |
|                                                                                                     |
|   - Inactivity follow-ups                                                                           |
|                                                                                                     |
|   - At-risk renewal nudges                                                                          |
|                                                                                                     |
| **AI & Automation EcosystemActive AI Components**                                                   |
|                                                                                                     |
| - NAN Enrichment                                                                                    |
|                                                                                                     |
|   - Scores applicant qualification                                                                  |
|                                                                                                     |
|   - Used for both new applicants and renewals                                                       |
|                                                                                                     |
| - Bio Writer                                                                                        |
|                                                                                                     |
|   - OpenAI-based                                                                                    |
|                                                                                                     |
|   - Standalone today                                                                                |
|                                                                                                     |
| - Peter Bot                                                                                         |
|                                                                                                     |
|   - Fully custom AI avatar of Peter                                                                 |
|                                                                                                     |
|   - Voice, video, memory, text, Zoom participant                                                    |
|                                                                                                     |
|   - Not currently data-connected to HubSpot                                                         |
|                                                                                                     |
| **Future Vision**                                                                                   |
|                                                                                                     |
| - Peter Bot as a primary interface                                                                  |
|                                                                                                     |
|   - Onboarding                                                                                      |
|                                                                                                     |
|   - Member guidance                                                                                 |
|                                                                                                     |
|   - Networking introductions                                                                        |
|                                                                                                     |
| - RAG-based matching                                                                                |
|                                                                                                     |
|   - Currently indexed to Pinecone                                                                   |
|                                                                                                     |
|   - No active front-end usage yet                                                                   |
|                                                                                                     |
| - Strong interest in MCP (Model Context Protocol) to allow AI to:                                   |
|                                                                                                     |
|   - Query unlocked HubSpot data directly                                                            |
|                                                                                                     |
|   - Identify churn risk                                                                             |
|                                                                                                     |
|   - Suggest member matches                                                                          |
|                                                                                                     |
| **Data Model & Architecture Challenges**                                                            |
|                                                                                                     |
| - Contact Object is overloaded                                                                      |
|                                                                                                     |
|   - \~100 custom profile fields live directly on Contact instead of a Profile object.               |
|                                                                                                     |
| - A Profile Custom Object exists but is not being used.                                             |
|                                                                                                     |
| - Messaging Data Structure                                                                          |
|                                                                                                     |
|   - Currently nested in Firebase                                                                    |
|                                                                                                     |
|   - Would require multiple related custom objects if reconstructed in HubSpot                       |
|                                                                                                     |
|   - Raises serious record volume & cost concerns                                                    |
|                                                                                                     |
| - HubSpot Custom Object Limits                                                                      |
|                                                                                                     |
|   - 1M records across 10 objects by default                                                         |
|                                                                                                     |
|   - Additional blocks are expensive                                                                 |
|                                                                                                     |
|   - Performance degradation becomes a concern at scale                                              |
|                                                                                                     |
| **Reporting & Executive VisibilityPrimary Reporting Needs**                                         |
|                                                                                                     |
| 1.  Sales & Marketing Funnel                                                                        |
|                                                                                                     |
|     - Traffic                                                                                       |
|                                                                                                     |
|     - Contacts                                                                                      |
|                                                                                                     |
|     - Applications                                                                                  |
|                                                                                                     |
|     - Conversion rates                                                                              |
|                                                                                                     |
| 2.  Membership & Revenue                                                                            |
|                                                                                                     |
|     - Members by tier                                                                               |
|                                                                                                     |
|     - Revenue by tier                                                                               |
|                                                                                                     |
|     - Renewals within 90 days                                                                       |
|                                                                                                     |
|     - Sales pipeline health                                                                         |
|                                                                                                     |
| **Key Challenge: Executive Reporting**                                                              |
|                                                                                                     |
| - Peter does not log into HubSpot                                                                   |
|                                                                                                     |
| - Instead receives:                                                                                 |
|                                                                                                     |
|   - A daily sales summary email                                                                     |
|                                                                                                     |
|   - Includes:                                                                                       |
|                                                                                                     |
|     - Net new seats sold                                                                            |
|                                                                                                     |
|     - Progress to capacity                                                                          |
|                                                                                                     |
|     - Day-over-day deltas                                                                           |
|                                                                                                     |
| - This process:                                                                                     |
|                                                                                                     |
|   - Requires snapshot storage                                                                       |
|                                                                                                     |
|   - Cross-day comparisons                                                                           |
|                                                                                                     |
|   - Multiple list queries                                                                           |
|                                                                                                     |
|   - Highly complex Make flows                                                                       |
|                                                                                                     |
| **Additional Reporting Friction**                                                                   |
|                                                                                                     |
| - Funnel reports often:                                                                             |
|                                                                                                     |
|   - Produce inconsistent totals                                                                     |
|                                                                                                     |
|   - Exclude users who skip steps                                                                    |
|                                                                                                     |
| - Form reporting:                                                                                   |
|                                                                                                     |
|   - Cannot be easily saved to dashboards                                                            |
|                                                                                                     |
| - Attribution remains unreliable across:                                                            |
|                                                                                                     |
|   - Meta trends → Webinar → Application → Deal                                                      |
|                                                                                                     |
| **Primary Pain Points Identified**                                                                  |
|                                                                                                     |
| - Too many data sources and sync dependencies                                                       |
|                                                                                                     |
| - Membership logic is fragile                                                                       |
|                                                                                                     |
| - New vs. renewing member classification is unreliable                                              |
|                                                                                                     |
| - Reporting inconsistency and attribution gaps                                                      |
|                                                                                                     |
| - Difficulty applying deposits to final invoices                                                    |
|                                                                                                     |
| - Lack of:                                                                                          |
|                                                                                                     |
|   - Engagement analytics                                                                            |
|                                                                                                     |
|   - Behavior-based renewal automation                                                               |
|                                                                                                     |
| - HubDB is:                                                                                         |
|                                                                                                     |
|   - Limited (10,000 rows)                                                                           |
|                                                                                                     |
|   - Requires custom code to update                                                                  |
|                                                                                                     |
|   - Still creates sync complexity                                                                   |
|                                                                                                     |
| - Messaging data volume makes HubSpot object modeling risky                                         |
|                                                                                                     |
| - AI tools exist in isolation rather than as an integrated intelligence layer                       |
|                                                                                                     |
| **Key Strategic Questions to Solve**                                                                |
|                                                                                                     |
| - What **should live in HubSpot vs. remain external**?                                              |
|                                                                                                     |
| - Should the following be Contacts, Custom Objects, or HubDB records?                               |
|                                                                                                     |
|   - Faculty                                                                                         |
|                                                                                                     |
|   - Speakers                                                                                        |
|                                                                                                     |
|   - Event schedules                                                                                 |
|                                                                                                     |
|   - Attendees                                                                                       |
|                                                                                                     |
| - How can these processes be standardized?                                                          |
|                                                                                                     |
|   - Membership upgrades                                                                             |
|                                                                                                     |
|   - Deferrals                                                                                       |
|                                                                                                     |
|   - Transfers                                                                                       |
|                                                                                                     |
|   - Renewals                                                                                        |
|                                                                                                     |
| - Should the existing portal be:                                                                    |
|                                                                                                     |
|   - Rebuilt inside HubSpot CMS?                                                                     |
|                                                                                                     |
|   - Or remain a standalone React + Firebase system?                                                 |
|                                                                                                     |
| - Can one unified dataset drive:                                                                    |
|                                                                                                     |
|   - Engagement activity                                                                             |
|                                                                                                     |
|   - Risk-of-churn                                                                                   |
|                                                                                                     |
|   - Personalization                                                                                 |
|                                                                                                     |
| **Success Criteria for This Engagement**                                                            |
|                                                                                                     |
| 1.  A clean, centralized HubSpot data model                                                         |
|                                                                                                     |
| 2.  Reduced reliance on:                                                                            |
|                                                                                                     |
|     1.  Firebase                                                                                    |
|                                                                                                     |
|     2.  Airtable                                                                                    |
|                                                                                                     |
|     3.  Sheets                                                                                      |
|                                                                                                     |
| 3.  Stable:                                                                                         |
|                                                                                                     |
|     1.  Membership lifecycle logic                                                                  |
|                                                                                                     |
|     2.  Renewals                                                                                    |
|                                                                                                     |
|     3.  Onboarding classification                                                                   |
|                                                                                                     |
| 4.  Actionable:                                                                                     |
|                                                                                                     |
|     1.  Engagement tracking                                                                         |
|                                                                                                     |
|     2.  Churn risk reporting                                                                        |
|                                                                                                     |
|     3.  Executive-ready dashboards                                                                  |
|                                                                                                     |
| 5.  A future-ready foundation for:                                                                  |
|                                                                                                     |
|     1.  AI-powered recommendations                                                                  |
|                                                                                                     |
|     2.  Intelligent member matching                                                                 |
|                                                                                                     |
|     3.  AI-assisted operations via Peter Bot                                                        |
+=====================================================================================================+
