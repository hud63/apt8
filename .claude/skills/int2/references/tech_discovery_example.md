+-----------------------------------------------------------------------------------------------------+
| Link to Call Recording                                                                              |
+-----------------------------------------------------------------------------------------------------+
| - [**[A8 // A360 Events                                                                             |
|   Discovery]{.underline}**](https://app.avoma.com/meetings/2f1646fc-5218-411b-a54e-3917628051bb)    |
|   (NOTE: This avoma is titled for Events, but we actually conducted Technical Discovery!)           |
+-----------------------------------------------------------------------------------------------------+
| Questions                                                                                           |
+-----------------------------------------------------------------------------------------------------+
| **Core Sources of Truth (Current & Target State)\                                                   |
| ✅ Target Future State (Desired)**                                                                  |
|                                                                                                     |
| - Profile Data: HubSpot                                                                             |
|                                                                                                     |
| - Membership Status: HubSpot                                                                        |
|                                                                                                     |
| - Transactions & Revenue: HubSpot Payments → QuickBooks                                             |
|                                                                                                     |
| **⚠️ Current Reality**                                                                              |
|                                                                                                     |
| - Profile data is a "moving target":                                                                |
|                                                                                                     |
|   - Users can update via:                                                                           |
|                                                                                                     |
|     - HubSpot                                                                                       |
|                                                                                                     |
|     - Member Hub (Firebase)                                                                         |
|                                                                                                     |
|   - Whichever system is updated most recently overwrites the other                                  |
|                                                                                                     |
| - Temporary exceptions:                                                                             |
|                                                                                                     |
|   - Airtable used for one-off event data edits (e.g., Longevity trip speaker bios)                  |
|                                                                                                     |
|   - These do not sync back to HubSpot                                                               |
|                                                                                                     |
| - Teddy's explicit goal:\                                                                           |
|   Even if the app stays external, it should query HubSpot directly, not Firebase.                   |
|                                                                                                     |
| **Authentication & Access Control\                                                                  |
| ✅ Current Auth Stack**                                                                             |
|                                                                                                     |
| - Firebase Authentication                                                                           |
|                                                                                                     |
| - Login methods:                                                                                    |
|                                                                                                     |
|   - Email + Password                                                                                |
|                                                                                                     |
|   - Magic Link                                                                                      |
|                                                                                                     |
|   - ❌ No social login (Google, Apple, etc.)                                                        |
|                                                                                                     |
| - Firebase UID                                                                                      |
|                                                                                                     |
|   - Likely generated by hashing the email                                                           |
|                                                                                                     |
|   - Replicable, not system-generated randomness                                                     |
|                                                                                                     |
| **✅ Access Logic**                                                                                 |
|                                                                                                     |
| - Membership Access is Determined By:                                                               |
|                                                                                                     |
|   - Nested membership objects inside Firebase user                                                  |
|                                                                                                     |
|   - Redundant data also exists on the user record                                                   |
|                                                                                                     |
| - Most access enforcement is:                                                                       |
|                                                                                                     |
|   - Frontend logic                                                                                  |
|                                                                                                     |
|   - Not centralized by claims/roles                                                                 |
|                                                                                                     |
| **❌ Admin & Troubleshooting Gaps**                                                                 |
|                                                                                                     |
| - No admin access inside the Member Hub                                                             |
|                                                                                                     |
| - No user impersonation                                                                             |
|                                                                                                     |
|   - Makes debugging member issues extremely difficult                                               |
|                                                                                                     |
| - Admins only exist in:                                                                             |
|                                                                                                     |
|   - Separate event check-in app                                                                     |
|                                                                                                     |
| **✅ Desired State**                                                                                |
|                                                                                                     |
| - Single "Access Level" field on Contact                                                            |
|                                                                                                     |
| - No need to:                                                                                       |
|                                                                                                     |
|   - Query all historical memberships                                                                |
|                                                                                                     |
|   - Calculate live access on every app load                                                         |
|                                                                                                     |
| - Immediate access enforcement if:                                                                  |
|                                                                                                     |
|   - Membership expires                                                                              |
|                                                                                                     |
|   - Renewal fails                                                                                   |
|                                                                                                     |
| **3. Field Governance & Schema Control**                                                            |
|                                                                                                     |
| - Who can add fields:                                                                               |
|                                                                                                     |
|   - Teddy                                                                                           |
|                                                                                                     |
|   - Kyle                                                                                            |
|                                                                                                     |
|   - Andrew (HubSpot integrator)                                                                     |
|                                                                                                     |
|   - Dev team                                                                                        |
|                                                                                                     |
| - Firebase fields: Only Teddy has access                                                            |
|                                                                                                     |
| - Currently LOCKED                                                                                  |
|                                                                                                     |
|   - No one is adding new fields during this engagement                                              |
|                                                                                                     |
| **🚨 Major Risk:**                                                                                  |
|                                                                                                     |
| - Hundreds of old fields exist                                                                      |
|                                                                                                     |
| - No usage tracking                                                                                 |
|                                                                                                     |
| - Cleanup risk:                                                                                     |
|                                                                                                     |
|   - Previous form deletions broke historical attribution                                            |
|                                                                                                     |
|   - Fear of deleting something still needed downstream                                              |
|                                                                                                     |
| **Integrations & Sync Architecture\                                                                 |
| ✅ Primary Sync Path**                                                                              |
|                                                                                                     |
| - Event-Based Triggers                                                                              |
|                                                                                                     |
|   - Deal created                                                                                    |
|                                                                                                     |
|   - Deal stage changes                                                                              |
|                                                                                                     |
|   - Payments completed                                                                              |
|                                                                                                     |
| - Most flows pass through Make                                                                      |
|                                                                                                     |
| - Some go:                                                                                          |
|                                                                                                     |
|   - Directly to Google Cloud Functions                                                              |
|                                                                                                     |
| **⚠️ Primary Failure Points**                                                                       |
|                                                                                                     |
| - Make search logic                                                                                 |
|                                                                                                     |
|   - Email vs "additional email" mismatch                                                            |
|                                                                                                     |
|   - Creates duplicates                                                                              |
|                                                                                                     |
| - Silent failures                                                                                   |
|                                                                                                     |
|   - HubSpot outbound webhooks have:                                                                 |
|                                                                                                     |
|     - ❌ No native retry                                                                            |
|                                                                                                     |
|     - ❌ No throttle if sent via workflows                                                          |
|                                                                                                     |
| - No Firebase ↔ HubSpot parity validation                                                           |
|                                                                                                     |
|   - They are "trusting the process"                                                                 |
|                                                                                                     |
| **Membership Upgrades & Tier Changes\                                                               |
| ✅ Current Upgrade Handling**                                                                       |
|                                                                                                     |
| - When member upgrades:                                                                             |
|                                                                                                     |
|   - L1 End Date → Upgrade decision date                                                             |
|                                                                                                     |
|   - L2 Start Date → Today                                                                           |
|                                                                                                     |
|   - L2 End Date → Extended to preserve remaining L1 time                                            |
|                                                                                                     |
| - Proration is unclear                                                                              |
|                                                                                                     |
|   - Most likely they pay full new membership price                                                  |
|                                                                                                     |
|   - Time is extended instead of monetary credit                                                     |
|                                                                                                     |
| **❌ Structural Risk**                                                                              |
|                                                                                                     |
| - Each upgrade creates:                                                                             |
|                                                                                                     |
|   - A new membership record                                                                         |
|                                                                                                     |
|   - Which cascades into Firebase + access logic                                                     |
|                                                                                                     |
| **Notifications & Communications\                                                                   |
| ✅ Current Channels**                                                                               |
|                                                                                                     |
| - Mobile App (React Native WebView)                                                                 |
|                                                                                                     |
|   - Push notifications via Expo (likely)                                                            |
|                                                                                                     |
| - Email                                                                                             |
|                                                                                                     |
|   - Powered by Postmark                                                                             |
|                                                                                                     |
|   - Used for member-to-member message alerts                                                        |
|                                                                                                     |
| - Sanity CMS                                                                                        |
|                                                                                                     |
|   - Push notifications can be triggered manually via checkbox                                       |
|                                                                                                     |
| **❌ Communication Preferences**                                                                    |
|                                                                                                     |
| - No true preference management                                                                     |
|                                                                                                     |
| - Members are:                                                                                      |
|                                                                                                     |
|   - Routinely re-opted into Member Communications if needed                                         |
|                                                                                                     |
| - GDPR & privacy consent are not enforced                                                           |
|                                                                                                     |
|   - Teddy explicitly stated:                                                                        |
|                                                                                                     |
|     - GDPR is not a concern                                                                         |
|                                                                                                     |
|     - All members should receive all communications                                                 |
|                                                                                                     |
| **CMS & Content Strategy\                                                                           |
| ✅ Strong Desire to Centralize in HubSpot**                                                         |
|                                                                                                     |
| - Newsletter archive in portal                                                                      |
|                                                                                                     |
| - Event content                                                                                     |
|                                                                                                     |
| - Video & podcast content                                                                           |
|                                                                                                     |
| - Speaker & exhibitor data                                                                          |
|                                                                                                     |
| - Possible use of:                                                                                  |
|                                                                                                     |
|   - HubSpot CMS                                                                                     |
|                                                                                                     |
|   - HubDB                                                                                           |
|                                                                                                     |
|   - Blog + Custom Objects                                                                           |
|                                                                                                     |
| **❌ Current CMS Stack**                                                                            |
|                                                                                                     |
| - Sanity CMS                                                                                        |
|                                                                                                     |
| - Custom React rendering                                                                            |
|                                                                                                     |
| - No native admin tools inside Member Hub                                                           |
|                                                                                                     |
| - No content impersonation or previewing as users                                                   |
|                                                                                                     |
| **✅ Strategic Direction**                                                                          |
|                                                                                                     |
| > "If HubSpot can natively handle it, we want to use it instead of custom."                         |
|                                                                                                     |
| **Payments & Financial Reconciliation\                                                              |
| ✅ Payments Now Processed Through**                                                                 |
|                                                                                                     |
| - HubSpot Payments                                                                                  |
|                                                                                                     |
| - QuickBooks for reconciliation                                                                     |
|                                                                                                     |
| **⚠️ Key Problems**                                                                                 |
|                                                                                                     |
| - HubSpot Payments reports:                                                                         |
|                                                                                                     |
|   - Do NOT clearly break down:                                                                      |
|                                                                                                     |
|     - Which products                                                                                |
|                                                                                                     |
|     - Which orders                                                                                  |
|                                                                                                     |
|     - Which members are in a lump-sum payout                                                        |
|                                                                                                     |
| - Wire transfers:                                                                                   |
|                                                                                                     |
|   - Manually reconciled                                                                             |
|                                                                                                     |
|   - Trigger manual "mark as paid" → membership provisioning                                         |
|                                                                                                     |
| **✅ Products Being Sold**                                                                          |
|                                                                                                     |
| - Memberships                                                                                       |
|                                                                                                     |
| - Sponsorships                                                                                      |
|                                                                                                     |
| - ❌ No one-off transactional products at events                                                    |
|                                                                                                     |
| **⚠️ Pricing Model Challenges**                                                                     |
|                                                                                                     |
| - Legacy bundle pricing creates:                                                                    |
|                                                                                                     |
|   - Dozens of potential SKUs                                                                        |
|                                                                                                     |
| - Debate:                                                                                           |
|                                                                                                     |
|   - Create many SKUs                                                                                |
|                                                                                                     |
|   - Or use:                                                                                         |
|                                                                                                     |
|     - Standard list price                                                                           |
|                                                                                                     |
|     - Discounts per deal                                                                            |
|                                                                                                     |
| - Reporting implications:                                                                           |
|                                                                                                     |
|   - Discounting visibility                                                                          |
|                                                                                                     |
|   - Rep-level pricing behavior                                                                      |
|                                                                                                     |
| **Workflow Architecture Philosophy**                                                                |
|                                                                                                     |
| - Current internal debate:                                                                          |
|                                                                                                     |
|   - One monster workflow vs modular orchestration                                                   |
|                                                                                                     |
| - Risks of monster workflows:                                                                       |
|                                                                                                     |
|   - Slow processing                                                                                 |
|                                                                                                     |
|   - Hard to debug                                                                                   |
|                                                                                                     |
|   - High blast radius on failure                                                                    |
|                                                                                                     |
| - Preferred direction:                                                                              |
|                                                                                                     |
|   - Small, purpose-built workflows                                                                  |
|                                                                                                     |
|   - Coordinated by a parent orchestration flow                                                      |
|                                                                                                     |
|   - Easier rollback + targeted re-enrollment                                                        |
|                                                                                                     |
| **Tooling & Observability Gaps\                                                                     |
| ❌ No centralized error monitoring**                                                                |
|                                                                                                     |
| - Firebase logs:                                                                                    |
|                                                                                                     |
|   - Hard to interpret                                                                               |
|                                                                                                     |
| - HubSpot custom code:                                                                              |
|                                                                                                     |
|   - Poor native debugging tools                                                                     |
|                                                                                                     |
| **✅ Emerging Direction**                                                                           |
|                                                                                                     |
| - Strong interest in:                                                                               |
|                                                                                                     |
|   - Sentry                                                                                          |
|                                                                                                     |
|   - Unified error tracking across:                                                                  |
|                                                                                                     |
|     - HubSpot                                                                                       |
|                                                                                                     |
|     - Firebase                                                                                      |
|                                                                                                     |
|     - Custom APIs                                                                                   |
|                                                                                                     |
|     - CMS                                                                                           |
|                                                                                                     |
| **Strategic Mindset & Risk Posture**                                                                |
|                                                                                                     |
| - Teddy is fully open to "Burning it all down and rebuilding properly."                             |
|                                                                                                     |
| - The goal is:                                                                                      |
|                                                                                                     |
|   - Blank-slate architecture design                                                                 |
|                                                                                                     |
|   - Using modern HubSpot-native features                                                            |
|                                                                                                     |
|   - Not preserving legacy decisions out of fear                                                     |
|                                                                                                     |
| **Executive-Level Takeaways**                                                                       |
|                                                                                                     |
| - HubSpot must become the uncontested source of truth                                               |
|                                                                                                     |
| - Firebase should be drastically simplified or reduced                                              |
|                                                                                                     |
| - Authentication and access logic are:                                                              |
|                                                                                                     |
|   - Over-distributed                                                                                |
|                                                                                                     |
|   - Redundant                                                                                       |
|                                                                                                     |
|   - Frontend-heavy                                                                                  |
|                                                                                                     |
| - No field governance, no sync validation, no impersonation                                         |
|                                                                                                     |
| - CMS & content management are ripe for:                                                            |
|                                                                                                     |
|   - **Full HubSpot consolidation**                                                                  |
|                                                                                                     |
| - Payments and pricing models currently:                                                            |
|                                                                                                     |
|   - Limit reporting clarity                                                                         |
|                                                                                                     |
|   - Obscure discount discipline                                                                     |
|                                                                                                     |
| - Workflow design needs:                                                                            |
|                                                                                                     |
|   - Modularity                                                                                      |
|                                                                                                     |
|   - Error isolation                                                                                 |
|                                                                                                     |
|   - Observability                                                                                   |
|                                                                                                     |
| - The organization is:                                                                              |
|                                                                                                     |
|   - Technically capable                                                                             |
|                                                                                                     |
|   - But overloaded by years of experimental architecture                                            |
+=====================================================================================================+
