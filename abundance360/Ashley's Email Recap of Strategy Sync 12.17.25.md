Hi Teddy,

  

Thanks for joining us today! [HERE](https://app.avoma.com/meetings/79d44b41-3278-4237-849a-d4e64c875cac) is the recording link for reference. Looking at your remaining hours in Salesforce, it shows you have just under 6 hours remaining (which is pretty on track for our plan to wrap up this week). That being said, I want to make sure we've got you taken care of, so we can be a little flexible here as needed. 

  

You mentioned having us review your HS object schema for any flags/recommendations, and to review your deal won -> membership workflow setup in puzzle app. We can take care of these with the time we have remaining - is that how you'd like us to proceed?

  

AI Recap (this one came out looking really good!):

  

**1. Front-End Architecture & Build Strategy**

- HubSpot’s new React framework can support modern front-end development, but the bottleneck is serverless function performance (15-second timeout, limited processing).
- Given the complexity of your app, a full rebuild inside HubSpot CMS is not recommended at this time.
- Most value will come from improving tracking + strengthening the data sync between Firebase and HubSpot rather than migrating the entire front end.
- Installing the HubSpot tracking code on your existing app will get you the marketing visibility you’re missing without a costly rebuild.

**2. Backend Logic & Workflow Design**

- Workflows + custom code actions are still the preferred place for business logic, because workflows provide better triggers and sequencing than external functions alone.
- Custom coded actions are limited by timeout + memory, so heavy processing may still need to run externally, but the orchestration should stay in HubSpot workflows.
- For complex membership creation logic, modular workflows are recommended (vs. a single monolithic workflow).

**3. Object Model & Schema Guidance**

- Profile object is not needed. All profile-related data can remain on the Contact object with conditional property visibility.
- Memberships:

- Platinum attendees can remain a separate object or be consolidated, but your segmentation issue appears to be a filtering/rollup limitation, not an object model problem.
- Rollups cannot apply conditional filters, so segmentation may require layered lists or multiple rollups.

- AD Memberships (digital course licenses):

- Can remain a separate object or be reworked using contact-to-contact associations—use case depends on how you need to report on it.
- Because licenses are effectively a join table, either approach is viable.

- Associations: Memberships should be associated to Deals, Contacts, and Invoices so you can track:

- Who purchased
- Who is the actual member
- Revenue attribution and renewals

**4. Deal Structure for Multi-Seat Purchases**

- Recommended: one deal per transaction, with multiple memberships created off that deal once it’s Closed Won.
- When a company buys multiple seats:

- Associate all recipients to the deal before creating memberships.
- Workflow logic will need to account for renewals, overlapping years, and reactivation scenarios.

**5. Data Syncing Tools & Logging**

- For data movement between Firebase ![↔️](https://assets.frontapp.com/emoji-data-15.0/img-apple-64/2194-fe0f.png) HubSpot:

- [Make.com](http://make.com/) may not scale reliably.
- [Windmill.dev](http://windmill.dev/) is an open-source, self-hosted alternative the A8 team is actively using.

- For error logging, Sentry integrates well, but would require adding your own instrumentation inside custom code actions.