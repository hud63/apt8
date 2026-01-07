

Wed, 07 Jan 26

### TaoGlass Integration Planning Updates

- Ashley presented comprehensive integration architecture document with detailed future state design
    
    - Document covers requirements for all planned integrations based on client discussions
        
    - Future state flows mapped showing Clay integration feeding into AEB with HubSpot maintaining parallel connection
        
    - ZoomInfo will change to feed into Clay but no direct work planned on that integration
        
    - Key improvement areas identified:
        
        - Tacton quote updates: Write quote IDs back to HubSpot for better tracking
            
        - Expand synced object properties to include product details and quote previews
            
        - Add product details as line items on deal records (currently blank)
            
        - Current sync only shows basic product name and cost without material details
            
    - Architecture foundation already exists, enhancement focuses on additional field mapping
        
- Hours allocation concerns raised - current estimates seem high for actual work scope
    
    - Ashley estimates 3 hours vs 11 hours budgeted for some tasks
        
    - Integration coordination strategy needed as separate deliverable
        

### Multi-Distributor Quote Challenge & Solutions

- Critical unresolved issue: Tacton’s technical limitation with distributor quotes
    
    - System requires separate quote per distributor - cannot modify within single quote
        
    - Changing distributor overwrites existing distributor data completely
        
    - Louise confirmed this cannot be changed in Tacton architecture
        
- Current process creates problematic duplicate deals in HubSpot
    
    - Each distributor quote generates separate deal record
        
    - Financial reconciliation becomes complex with multiple deal records
        
- Proposed solution approaches evaluated:
    
    1. **Distributor bid object approach:**
        
        - Create custom HubSpot object for distributor quotes instead of deals
            
        - Associate multiple distributor bids to single primary deal
            
        - Avoids deal duplication but adds complexity
            
    2. **Multiple quote IDs on single deal:**
        
        - Add manual trigger (button/dropdown) to initiate additional quote sync
            
        - Store all quote IDs associated to same deal record
            
        - Risk: Deal record data becomes inconsistent if line items differ between quotes
            
- Outstanding technical questions requiring resolution:
    
    - Whether distributors quote different line items or just different pricing/margins
        
    - How deal record should represent financial data with multiple quotes
        
    - Which quote data should populate deal fields (most recent vs primary)
        
    - Impact on sales process when PO receipt determines winning distributor
        
    - Connection between PO matching and deal closure automation
        
- **Next step:** Schedule meeting with Louise to validate proposed solutions and understand process nuances
    

### SAP Integration Architecture & Automation Strategy

- **Direct sales automation flow:**
    
    - Trigger: Deal reaches “Closed Won” stage
        
    - Action: Auto-create customer and contact records in SAP if not existing
        
    - Prevents manual re-entry of customer data for direct sales
        
- **Distributor sales approach:**
    
    - No automatic SAP customer creation to avoid cluttering system with speculative data
        
    - Manual process maintained due to uncertainty of deal completion
        
- **PO ingestion and sales order automation (major value driver):**
    
    - Integration with Cadre’s PO ingestion system once implemented
        
    - Auto-create sales orders in HubSpot when POs received in SAP
        
    - Complex matching logic required:
        
        - Identify corresponding deal record from PO data
            
        - Determine winning distributor in multi-bid scenarios
            
        - Close appropriate deal and update distributor information
            
    - Currently entirely manual process requiring daily attention
        
- **Product library synchronization:**
    
    - SAP designated as single source of truth for inventory data
        
    - Product creation flows: Some originate in Tacton→SAP, others start in SAP
        
    - Components remain in SAP/Tacton only - not synced to HubSpot
        
    - HubSpot receives finished product data for sales team reference
        
    - Not used for quoting/pricing, purely informational for sales reps
        
- **Integration philosophy:** Avoid full bidirectional sync to prevent data conflicts and over-complexity
    

### Data Model & Process Architecture Clarification

- **Nomenclature confusion identified:** Project vs Deal definitions
    
    - Ashley’s model: One project = One deal (1:1 relationship)
        
    - Client reality: One project = Multiple deals over time + Multiple POs
        
    - Need to clarify whether HubSpot projects object should be implemented
        
- **Process flow implications:**
    
    - Initial deal represents winning the business opportunity
        
    - Subsequent deals represent individual PO orders throughout project lifecycle
        
    - Projects object could serve as umbrella record for related deals/POs
        
    - Alternative: Company record serves as project container for multiple concurrent/sequential projects
        
- **Part number creation process considerations:**
    
    - Client pain point: Creating new configured part numbers
        
    - Need alignment between Tacton configurations, SAP inventory, and HubSpot product library
        
    - New products originate in Tacton, sync to SAP, then to HubSpot
        
    - Component-level data remains in SAP/Tacton only
        

### Aerospace & Defense Security & Permissions Model

- **Activity logging security concern identified:**
    
    - Risk: A&D deal conversations visible on shared company/contact records
        
    - Non-A&D sales reps could access sensitive information via activity logs
        
    - Email logging creates cross-contamination risk between deal types
        
- **Permissions solution strategy:**
    
    - Implement team-based ownership structure for A&D deals
        
    - Leverage HubSpot’s granular permissions for calls, notes, meetings, and tasks
        
    - These four engagement objects support team-based restrictions
        
    - SMS, WhatsApp, postal objects not permissionable (not in use)
        
- **Implementation requirements:**
    
    - Set up proper team hierarchy and ownership rules
        
    - Configure permissions template (Junior has existing template available)
        
    - Ashley leading Phase 1 implementation as delivery lead
        
- **Project transition note:** Moved to Enterprise team due to capacity constraints on Core team
    

### AI Coordination & Integration Strategy Deliverable

- **Separate deliverable required:** Integration coordination strategy
    
    - Timeline coordination between multiple integration workstreams
        
    - Resource allocation and dependency mapping on both client and vendor sides
        
    - Leadership assignment for each integration component
        
    - Cross-team communication and handoff protocols
        
- **AI initiatives scope:** Primarily project management and meeting coordination
    
    - Not technical integration work - relies on Cadre’s expertise
        
    - Ashley’s role: Define dependencies, risks, and timelines
        
    - Trust Cadre to handle Clay integration and AI tool development
        
- **AEB integration considerations:**
    
    - Existing HubSpot integration already functional
        
    - Coordination needed if Clay integration affects AEB workflows
        
    - Requirement: AEB to flag sanctioned records back to HubSpot to prevent re-scoring
        

### Project Timeline & Next Steps

- **Immediate actions:**
    
    1. Schedule solution review meeting with Louise (Ashley’s availability: rest of week free, next week mornings)
        
    2. Complete stories and scope documentation for integration components
        
    3. Refine multi-distributor quote approach based on Louise feedback
        
- **Dry run presentation:** Scheduled for next week with refined approach
    
- **Upcoming project pipeline:** Six new projects kicking off in January
    
- **ASIS project update:** Signed SOW, selected HubSpot (3 licenses) - good choice over cannoli platform
    
- **Resource owners:**
    
    - Ashley: Overall integration strategy, Tacton/SAP design, documentation
        
    - Louise: Process validation, Tacton expertise, solution refinement
        
    - Audrey/Cadre: AI initiatives, Clay integration, PO ingestion system
        
    - Junior: Permissions template and setup guidance
        

---

Chat with meeting transcript: [https://notes.granola.ai/t/6dc65b74-ba5a-4249-ba40-7b1140fdbf00-00demib2](https://notes.granola.ai/t/6dc65b74-ba5a-4249-ba40-7b1140fdbf00-00demib2)