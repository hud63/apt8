Happy to help you analyze this **Discovery Transcripts** folder.

  

The folder contains 5 documents, which are transcripts from discovery meetings between the user's team (including Kuj, Jeff Cox, Ben Craner, Mitch Watkins, and others) and a consultant, Karen Hanna, regarding the implementation and customization of HubSpot, particularly concerning the sales process and integration with their existing system, Pestroutes.

  

The main focus of these transcripts is the technical and conceptual discovery required to map the current sales and marketing processes, primarily moving leads from **Pestroutes** to **HubSpot**, and designing the new lead management and follow-up strategies.Topics Covered

|Topic|Description|
|---|---|
|**Contact and Deal Records**|Detailed discussion on what information (custom properties) should be tracked on the HubSpot **Contact** and **Deal** records, prioritizing what the sales team needs to see. This includes customer information, original source, pest concerns (which should concatenate on the Contact record), and billing status.|
|**Lead Scoring and Priority**|Designing a dynamic lead scoring system to prioritize non-converted leads for follow-up. Points are allocated based on engagement with marketing efforts (form fills, website visits, email/SMS engagement) and deducted for time decay.|
|**Sales Process and Workflows**|Mapping the sales process flow, differentiating between **inbound phone calls** (which go through a qualifier step, either human or AI) and **form submissions** (which skip the qualifier). The team aims to enforce lead creation in HubSpot before sending data to Pestroutes.|
|**Automated Follow-up Sequences**|Developing **Sales Sequences** (distinct from marketing workflows) to automate follow-up tasks for sales reps. The key examples discussed are the "Sale Pending - Will Follow Up" sequence (for both inbound and outbound leads) and the proposed "Customer Said No" sequence. These are designed to keep the lead with the rep for 48 hours before kicking it to a general pool.|
|**HubSpot Features & Integrations**|Discussions about leveraging specific HubSpot features like different **Views** for marketing vs. sales, the new **Leads Map** (which Karen Hanna offered to enroll the team in a private beta for), and the capability to house a **pitchable ZIP code and covered pests list** within HubSpot (via HubDB or workflows) to validate leads.|

Key Comparisons and Decisions

  

The team spent significant time discussing the differences and overlaps between their old system, Pestroutes, and the new HubSpot environment, particularly concerning lead information and follow-up logic.

|Feature|HubSpot Implementation Decisions|
|---|---|
|**Source Data**|Contact record tracks **Original Source** (does not change). Deal record tracks the specific **Lead Source** for that deal. Reporting is primarily done off the Deal Source.|
|**Pest Concern**|Initially discussed for the Deal record, the Contact record should concatenate (combine) all historical pest concerns for a complete customer history.|
|**Lead Stages**|Agreed upon stages include Opportunity Identified, Connected, Quoting, and Agreement Sent, leading to Closed Won/Lost.|
|**Qualifier Team**|Current process: Qualifier fills data in Genesys, which plugs into HubSpot. Future State: AI agent replaces human qualifier. All valid leads go to HubSpot; voided (invalid) leads do not.|
|**Do Not Call List**|Agreed to establish an internal DNC repository in HubSpot (in addition to Genesys) as a single source of truth and a property on the contact record for sales visibility.|

Sales Sequence Examples

  

The two primary sales sequences discussed are outlined below, showing the common structure of their 48-hour individual sales rep focus:

|Sequence Name|Triggering Disposition|Key Steps/Structure|Timeframe|
|---|---|---|---|
|**Sale Pending - Will Follow Up**|Sale Pending Will Follow Up|SMS, Email, wait 1 day, then multiple Sales Task phone calls (every 4 hours), followed by a targeted email with a discount offer.|Agent-assigned for 2 business days (approx. 48 hours) before moving to a "Battle Royale" general pool on Day 3.|
|**Customer Said No**|Customer Said No (Form Fill)|Proposed to have a very similar structure to "Sale Pending," but with different messaging that acknowledges the customer's initial refusal and provides a new offer (e.g., reminding them their discount is still viable).|Agent-assigned for 2 business days before moving to general pool.|

This folder provides a rich set of requirements and process mapping details for customizing the user's HubSpot Sales Hub implementation.

  

