# Reverse Demo Structure and Questions

**Session Type:** Freshdesk System Walkthrough  
**Purpose:** Understanding how the client's current system works to inform technology recommendations  
**Participants:** Taryn (Consultant), Ashley (Client - showing system)

---

## Demo Flow Structure

### Phase 1: Setup & Context Setting (Lines 1-58)
**Purpose:** Establish why the demo is needed and set expectations

**Taryn's Opening:**
- Explains the need: "I need to see Ashley walking through the process of a ticket coming in and how they're managing tickets"
- States the confusion: "There's so many aspects of getting the domains to link in, and then once they're in, having the sending domains"
- Goal: "Visually seeing it will help us"

**Key Context Provided:**
- Mentions she talked to HubSpot earlier that day
- Will advocate for the client ("I'm going to voice that you all have and hold certain things")
- Willing to provide evidence if needed ("If they push me, I'll send them receipts")

---

### Phase 2: System Overview (Lines 59-62)
**What Ashley Shows:**
- Freshdesk central ticket area
- Filter system (Products, Business Units)
- Group-based organization (each website = one group)
- "My Tickets" automation for agents

---

### Phase 3: Deep Dive Questions - Email Routing (Lines 64-113)

#### Question 1: Domain Structure
**Taryn asks:** "Is that coming in through all those domains? Is it coming to Bob at one of the domains?"

**What she learns:**
- Each ticket comes to its specific website email (e.g., info@mintonsharlem.com)
- Agents respond AS the website, not as themselves
- Customer sees: info@simply7.net
- Internal team sees: "Faith" as the agent
- Everything stays in thread until invoice (which comes from Zoho)

#### Question 2: Confirming Understanding
**Taryn asks:** "So it's coming from info@[website], but it's showing that Faith has sent it... it's still sending from info@, and that continues the back and forth?"

**What she learns:**
- Stays with website email to maintain thread in customer inbox
- Customers don't know "Post Market Publishing" exists
- They only interact with individual website brands

#### Question 3: Customer Intent
**Taryn asks:** "They're scraping it for that purpose? They're not filling out this form for [actual website topic]?"

**What she learns:**
- Most customers never visit the website - they scrape email addresses
- Some do visit, but it's clearly a blog, not a service business
- Spam occasionally happens (hotel reservations, etc.) but is rare

---

### Phase 4: Deep Dive Questions - Agent Workflow (Lines 155-191)

#### Question 4: Agent Experience
**Taryn asks:** "When I go in to answer each of these, it's auto-filling that it's from Simply 7 so I'm responding from Simply 7?"

**What she learns:**
- System automatically populates correct "from" address
- Agents don't manually switch between domains
- Reply button auto-fills: "Ashley Smith info@crypticstreet.com"

#### Question 5: Automation Triggers
**Taryn asks:** "We touched on 80% go through automation. First touch is pricing, second is discount?"

**What she learns:**
- First touch: Pricing information (automated)
- Second touch: Discount offer if they ask (automated, keyword-triggered)
- After second touch: Human takes over

#### Question 6: Automation Logic
**Taryn asks:** "How does it know to send a discount? Is it picking up keywords?"

**Answer:** Yes, keyword-based triggers

#### Question 7: Support vs. Sales Routing
**Taryn asks:** "How do we know an inquiry is support rather than a new inquiry so it doesn't trigger automations?"

**Answer:** Confirmed it can differentiate

---

### Phase 5: Deep Dive Questions - Agent Management (Lines 212-224)

#### Question 8: Human Intervention Triggers
**Taryn asks:** "What is the trigger point that a human agent knows to go in now?"

**What she learns:**
- No automated alert
- Visual cues: Bolded = brand new email
- Rule: If bolded for 45+ minutes, automation didn't pick it up - respond manually
- "Customer responded" tag = agent's turn to engage
- Queue sorted by "last modified" (most recent first)
- They wish it was oldest-first, but Freshdesk makes things disappear with other sorting

#### Question 9: Priority System
**Taryn asks:** "What's triggering urgent/low/medium priority? Keywords or manual?"

**What she learns:**
- Manually set by agents
- Used for good customers ("do not add late fee")
- Not widely used - maybe only one agent (Faith) uses it consistently

---

### Phase 6: Pain Point Discovery - Outreach Tracking (Lines 242-257)

#### Question 10: Outreach Attribution (Implied)
**Ashley raises the issue, Taryn confirms understanding**

**What she learns:**
- Outreach done in-thread (better response rates)
- Can't track: responses to outreach, conversion from outreach to sale, which outreaches to stop
- Example: 86 emails in one chain, mix of outreach and orders - can't tell what caused what
- Agents use tags (e.g., "Christmas outreach") but can only see volume, not outcomes
- No attribution data: "Did outreach lead to a sale or just a response?"

**Taryn's response:** "We're using a service tool as a CRM... we're losing that capability"

---

### Phase 7: Solution Validation (Lines 260-282)

#### Question 11: HubSpot Capabilities
**Taryn states:** "That's native in HubSpot - it's natively tracking that stuff"

**Ashley's concern:** "How will your call go with them regarding these inboxes?"

**What she learns:**
- Shared inbox is even MORE limited than 2,000 domains
- Can't just forward everything to contact@postmarketpublishing.com
- Customer confusion: "Like emailing Amazon and eBay writes back"

---

### Phase 8: Next Steps & Taryn's Process Map Share (Lines 284-320)

**Taryn asks permission:** "Are you comfortable with me doing some stuff in HubSpot?"

**Taryn shows her work:**
- Process map with entry points
- Sales pipeline vs. support pipeline separation
- Automation triggers (spam filtering, lead scoring, nurture campaigns)
- Deal stages: Pricing → Discount → Order → Publishing → Invoice → Paid
- Support pipeline with filters (finance, invoice, publishing requests)
- Automated stage progression based on time/status

**Ashley's response:** "It looks good"

---

## Taryn's Question Patterns

### 1. **Clarifying Questions** (Confirming Understanding)
- "So it's coming from info@, and that continues?"
- "Am I correct that when I go in to answer, it's auto-filling?"
- "Is that coming in through all those domains?"

### 2. **Process Questions** (How Things Work)
- "What is the trigger point that an agent knows to go in?"
- "How does it know to send a discount?"
- "What's triggering urgent/low/medium priority?"

### 3. **Edge Case Questions** (Exceptions & Problems)
- "Do you ever have someone asking for actual [website topic] services?"
- "How do we know an inquiry is support vs. sales?"
- "If it's bolded for 45 minutes, what happens?"

### 4. **Validation Questions** (Testing Her Solution)
- "That's native in HubSpot, right?"
- "We can definitely get much better than where we are today?"

### 5. **Permission Questions** (Before Acting)
- "Are you comfortable with me doing some stuff in HubSpot?"
- "Do you want Freshdesk access to be my email or my colleague's?"

---

## Key Insights Taryn Gathered

1. **Email Architecture:** Each of 5,000+ websites sends/receives from its own domain
2. **Agent Model:** Agents manage 20-200 sites each, respond AS the website brand
3. **Automation:** 80% automated (pricing + discount), then human takeover
4. **Pain Points:**
   - No outreach attribution/tracking
   - Queue management (can't sort oldest-first)
   - No parent/child customer relationships
   - Using service tool as CRM
5. **HubSpot Blocker:** Domain limits (2,000 max, shared inbox even less)
6. **Critical Requirement:** Must maintain individual website email addresses (can't consolidate)

---

## Taryn's Consulting Approach in This Demo

1. **Asks for visual walkthrough** when verbal explanations aren't clear
2. **Repeats back understanding** to confirm ("So I'm Faith, I have 200 websites...")
3. **Asks "why" questions** to understand business logic, not just technical setup
4. **Identifies gaps** between current state and needs (outreach tracking)
5. **Shows her work** (process map) to validate understanding
6. **Gets permission** before taking action (HubSpot access, building demos)
7. **Advocates for client** ("I'll send them receipts if needed")
8. **Manages expectations** ("We still don't know HubSpot is the right solution")
