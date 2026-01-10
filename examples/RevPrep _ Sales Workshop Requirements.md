### 1\. Deal Amount Logic & Grade-Level Insights

[User Stories Reference: Line 11](https://docs.google.com/spreadsheets/d/1UMr74DPQv5BODoo3OzyUkmQDzvP_GQ3-HWTnTd5meE4/edit?gid=1950979928#gid=1950979928&range=12:12)

* Determine average deal amounts by:  
  * Grade level  
  * Program type (Academics vs. Test Prep)  
  * Mock-exam consult vs non-mock consult  
* Apply averages to automatically set Deal Amount on new deals  
* Handle missing student/grade data with fallback behavior. For example:  
  * Grade known → Use grade-specific average  
  * Grade unknown, Program Type known → Use program-type average  
  * Neither known → Set to overall historical average deal amount or flag “Missing Info” with a task to update the deal amount

### 2\. Weighted Pipeline Forecasting Improvements

[User Stories Reference: Line 11](https://docs.google.com/spreadsheets/d/1UMr74DPQv5BODoo3OzyUkmQDzvP_GQ3-HWTnTd5meE4/edit?gid=1950979928#gid=1950979928&range=12:12)

* Replace placeholder stage percentages with actual weighted likelihood to close, based on historical data  
* **Goal:** Provide leadership with more accurate forecasting tied to:  
  * Purchase links sent in last X days  
  * Expected close rate based on historical performance

### 3\. Automated Deal Stage Progression

[User Stories Reference: Line 12](https://docs.google.com/spreadsheets/d/1UMr74DPQv5BODoo3OzyUkmQDzvP_GQ3-HWTnTd5meE4/edit?gid=1950979928#gid=1950979928&range=13:13)

* Maintain existing stages but add automated movement:  
  * Opportunity → Consult Scheduled (meeting booked)  
  * Consult Scheduled → Follow-Up Scheduled (second meeting booked)  
  * Follow-Up Scheduled → Purchase Link Sent (purchase link sent)  
  * Purchase Link Sent → Closed Won (link approved)  
  * Purchase Link Sent → Closed Lost after link expiration  
* Automations must not block deals from skipping stages (e.g., Consult Scheduled → Purchase Link Sent)  
* **Investigate integration-created Opportunity deals**

### 4\. Deal Stage Funnel Reporting (Close Rate Per Stage)

[User Stories Reference: Line 14](https://docs.google.com/spreadsheets/d/1UMr74DPQv5BODoo3OzyUkmQDzvP_GQ3-HWTnTd5meE4/edit?gid=1950979928#gid=1950979928&range=15:15)

* Visibility into historical conversion patterns, not just static stage weights  
  * Consult Scheduled → Follow-Up Scheduled  
  * Follow-Up Scheduled → Purchase Link Sent  
  * Purchase Link Sent → Closed Won  
* Calculate conversion rate stage → Closed Won:  
  * “What % of deals close once they reach this stage?”  
* Calculate stage → Closed Lost metrics  
  * “Where are we losing deals?”  
* Funnel report showing drop-off at each stage  
* Trends over time: month, quarter, academic seasonality  
* Validate assumptions:  
  * Purchase links close at \~65% within 14 days  
  * Follow-up scheduled closes at X%.  
* Use the data to guide:  
  * Resource prioritization  
  * Performance coaching  
  * Funnel optimization  
  * Updated weighting logic

### 5\. Sales Insights & Activity–Performance Correlation Dashboards

[User Stories Reference: Line 14](https://docs.google.com/spreadsheets/d/1UMr74DPQv5BODoo3OzyUkmQDzvP_GQ3-HWTnTd5meE4/edit?gid=1950979928#gid=1950979928&range=15:15)

RevPrep needs dashboards and reporting that correlate advisor activity levels with funnel progression, consult volume, and close rates. **Investigate/infer the cause of the 7% drop in enrollment → consult conversion since August.**  Reporting Examples:

* **Activity volume by advisor**  
  * Calls  
  * SMS  
  * Emails  
  * Meetings  
* **Funnel movement correlated with activity**  
  * Activities → Consults scheduled  
  * Consults scheduled → Follow-up  
  * Follow-up → Purchase link sent  
  * Purchase link → Close won  
* **Close rate analysis (tied to activity)**  
  * Close rate by advisor  
  * Close rate by activity mix  
  * Close rate by time-to-first-touch  
  * Close rate by number of touches  
* **Timing/spacing impact**  
  * Time between touches  
  * Time from mock → consult  
  * Time from consult → follow-up  
  * Time from follow-up → link sent  
  * Time from link sent → close  
* **Performance benchmarks to identify traits of top performers**  
  * Daily consultation volume  
  * Activity blend (SMS vs email vs calls)  
  * Response times  
  * Touch frequency prior to consult  
* **Outlier detection**  
  * High performers with low logged activity → reliant on referrals  
  * Low performers with high activity → ineffective patterns  
  * Advisors over-relying on SMS  
  * Advisors not doing follow-up touches  
* **Impact of marketing drips (mock exam)**  
  * Does reducing message frequency improve or hurt conversions?  
  * Do certain drip steps consistently lead to consults?

### 6\. Sequences & Drip Automation

[User Stories Reference: Line 57](https://docs.google.com/spreadsheets/d/1UMr74DPQv5BODoo3OzyUkmQDzvP_GQ3-HWTnTd5meE4/edit?gid=1950979928#gid=1950979928&range=58:58)

[View Automations in Lucidchart](https://lucid.app/lucidchart/3b7689e0-295f-429c-9c40-3c5c0c3b0ec9/edit?viewport_loc=5430%2C-121%2C4593%2C2059%2C~lY8T1cP9fU3&invitationId=inv_a528b947-9f8c-46fa-9fec-6076526f6657)

**Note:** automation should *assist*, not *override* rep judgment \- be careful not to over-automate

* **Consult Cancellation Sequence**  
  * Immediate message (“sorry you couldn’t make it \- here’s a link to reschedule”)  
  * Bump to reschedule 3–5 days later  
* **Consult No-Show Sequence**  
  * Immediate “sorry we missed you” message with link to reschedule  
  * Bump to reschedule \~3 days later  
* **Post-Mock Drip → Sales Follow-Up**  
  * Audit current drip timing/frequency  
  * After final post-mock message, trigger new sales-led follow-up sequence  
  * Exact timing dependent on current-state drip review  
* **Post-Consultation Follow-Up (Manual Enrollment)**  
  * Trigger: No follow-up scheduled **AND** No purchase link sent  
  * Optional enrollment, based on the context  
  * Sequence structure:  
    * Immediate recap  
    * 5-day check-in  
    * 7-day final touch  
* **Customer Lifecycle Touchpoints**  
  * Post-first-session check-in  
  * “Hours used” check-in triggered via Orbit integration at 60% of hours used (rather than fixed number of remaining hours, due to variability in hours purchased)  
    * If we’re unable to do % hours used, and hours are sold in set increments, we could base this on number of hours sold and trigger actions based on hours remaining instead of %  
* **Purchase Link Sent Follow-Up**  
  * This sequence currently exists. Need to automate enrollment after link is sent 

### 7\. Template Library Refresh

[User Stories Reference: Line 55](https://docs.google.com/spreadsheets/d/1UMr74DPQv5BODoo3OzyUkmQDzvP_GQ3-HWTnTd5meE4/edit?gid=1950979928#gid=1950979928&range=56:56)

* Build library of SMS \+ email templates (replacing outdated templates \+ adding personalization via snippets), including:  
  * Consult scheduling  
  * Cancel/no-show  
  * General check-ins  
  * Post-session  
  * Low-hours warnings  
  * Purchase link reminders  
  * Seasonal/holiday touchpoints

### 8\. Permission Set Overhaul

[User Stories Reference: Line 21](https://docs.google.com/spreadsheets/d/1UMr74DPQv5BODoo3OzyUkmQDzvP_GQ3-HWTnTd5meE4/edit?gid=1950979928#gid=1950979928&range=22:22)

* Advisors need visibility into the following, but should NOT be able to modify:  
  * Each other’s meetings  
  * Activity  
  * Communications  
  * Contacts/Contact Ownership

### 9\. Orbit Integration Requirements

[User Stories Reference: Line 3](https://docs.google.com/spreadsheets/d/1UMr74DPQv5BODoo3OzyUkmQDzvP_GQ3-HWTnTd5meE4/edit?gid=1950979928#gid=1950979928&range=4:4)

* Push hours purchased & hours used into HubSpot.  
* Use % of hours used to power sequences/tasks **(see \#6 Customer Lifecycle Touchpoints above)**  
* Investigate why integration is generating Opportunity-stage deals **(see \#3 above)**