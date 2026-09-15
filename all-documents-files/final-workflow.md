

FINAL MASTER ARCHITECTURE
The client has 2 main software ecosystems:
SOFTWARE 1
CRM nErgy
CRM + ERP + AI SuperHouse + Mobile

                  ↕
        CONTROLLED / SECURE LINKUP
                  ↕

SOFTWARE 2
OAL Network
Business Funding / Lending Platform
The public websites will remain separate:
CRMnErgy.com   → CRM nErgy
OALnetwork.com → OAL Network
However, the client has clearly stated that he has not yet sent the final CRM/ERP website content, because he does not want website information mixed with software information. The current information is for the CRM/ERP SOFTWARE.

SOFTWARE 1 — CRM nErgy SUPERHOUSE
The client's updated roadmap clearly places CRM, ERP, AI Content Studio, AI Video Agent, Mobile App, Territory Management, and User Access Controls inside the same CRM nErgy roadmap.
The high-level architecture will be:
CRM nErgy
│
├── CRM
├── ERP
├── AI Content Studio
├── Bestie AI Agent
├── AI Video Agent
├── AI Marketing
├── HR / Recruiting
├── Territory Management
├── Customer Support
├── AI Knowledge Base
├── Internal AI Search
├── AI Security / Guardrails
├── Mobile App / My Fav Apps
├── Partners / Affiliates
└── Administration

A. CRM nErgy — USER / PORTAL STRUCTURE
The client has defined four portal concepts:
Portal
User
Portal 1
Hidden Super Executive Admin / Johnny
Portal 2
CRM nErgy Company Portal
Portal 3
“My Company” paid CRM subscriber/client portal
Portal 4
Affiliates, Business Partners, Influencers

Recommended Access Hierarchy
SUPER EXECUTIVE ADMIN (SEA)
             │
             ▼
      CRM nErgy Admin
             │
      ┌──────┴─────────┐
      ▼                ▼
Internal Staff      Partners
                       │
                       ▼
                Company Customers
                       │
                  Company Admin
                       │
        ┌──────────────┼─────────────┐
        ▼              ▼             ▼
      Sales           HR          Finance
      Staff        Recruiter      Staff
Super Executive Admin — SEA
The SEA will be the highest-level hidden owner portal.
It should control:
System-level settings
Subscription/plans
Major permissions
Internal administrators
Security
Audit
AI governance
Platform configuration
SaaS-wide performance
The client specifically requested a Secured Communications eBox, where only the CRM nErgy Super Executive Admin can communicate directly with the Kiaan Tech Team.

B. CRM nErgy ACCOUNT / SUBSCRIPTION FLOW
Recommended final flow:
Customer chooses CRM nErgy
        ↓
Create Company Account
        ↓
Email / Phone Verification
        ↓
MFA
        ↓
Select Subscription
        ↓
CRM only
OR
ERP only
OR
CRM + ERP
        ↓
Company Workspace Created
        ↓
Company Admin Created
        ↓
Company Admin Adds Employees
        ↓
Roles & Permissions
        ↓
Dashboard
The client specifically states that CRM Project Management will contain restricted features and that end users can later upgrade to the ERP or both CRM and ERP systems.
Therefore:
CRM → ERP Upgrade
should happen inside the same company/account ecosystem.
The customer should not need to create an entirely new account when upgrading.

C. MULTI-TENANT FLOW
The client requested:
Multi-Tenant Management
Sub-Account Provisioning
Architecture:
CRM nErgy Platform
│
├── COMPANY A
│    ├── Owner
│    ├── Admin
│    ├── Sales
│    ├── HR
│    └── Finance
│
├── COMPANY B
│    ├── Owner
│    ├── Admin
│    └── Employees
│
└── COMPANY C
Company A must not be able to access Company B's information.
Each tenant should have separate:
Contacts
Leads
Employees
Financial records
Documents
AI content
Reports
Settings
Permissions

D. CRM CORE WORKFLOW
The client's CRM roadmap includes:
Custom Domain
UI Rebranding
Branding
Client Portals
Contact Management
Client Data
Billing & Invoicing
Lead & Pipeline Management
Sales Automation
Communication
Email/SMS
Reporting
Analytics
Mobile App
The complete CRM business workflow should be:
LEAD ENTERS
    ↓
Contact Created
    ↓
Lead Source
    ↓
Territory
    ↓
Sales Rep Assignment
    ↓
Pipeline
    ↓
Follow-up Task
    ↓
Email / SMS / Communication
    ↓
Meeting / Interaction
    ↓
Proposal / Opportunity
    ↓
Won / Lost
    ↓
Customer
    ↓
Billing / Invoice
    ↓
Project / Service
    ↓
Customer Support
    ↓
Retention / Upsell
    ↓
Analytics

E. CRM DASHBOARD
The client does not want a complicated CRM.
The dashboard should be:
Customizable
Drag-and-drop
Easy to navigate
Role-specific
KPI focused
Smart-bookmark enabled
Task/reminder enabled
Pipeline oriented
Salesperson sees
Leads
Pipeline
Follow-ups
Targets
Tasks
HR sees
Employees
Candidates
Recruitment
Hiring
Finance sees
Invoices
Expenses
Receivables
Financial performance
Company Owner sees
Company-wide KPIs
Revenue
Sales
Staff
Projects
Customer activity
Support Staff sees
Tickets
Open issues
SLAs
Customer conversations

F. TERRITORY MANAGEMENT
Territory Management is now a confirmed requirement.
The client supplied research covering:
Google Maps
Geographic territory visualization
Route optimization
Assigned territories
Offline access
Automated lead assignment
Reduced territory overlap
Reporting
Forecasting
Efficient resource allocation
Recommended hierarchy:
Company
 ↓
Region
 ↓
Territory
 ↓
Sales Manager
 ↓
Sales Rep
 ↓
Prospects / Customers / Leads
Lead flow:
New Lead
 ↓
Location Identified
 ↓
Territory Identified
 ↓
Appropriate Rep Assigned
 ↓
Rep Gets Alert
 ↓
Route / Appointment
 ↓
Outcome
 ↓
Territory Analytics

G. ERP
ERP will be the deeper operational layer of the same CRM nErgy ecosystem.
The client requires:
Project Management
Purchase Orders
Procurement
Reporting
Sales & Order Management
Human Resources
Supply Chain
Finance & Accounting
Customer Relationships
Manufacturing
Automation
Integrations
Data Analysis
Compliance
Risk Management

H. PROJECT MANAGEMENT
Workflow:
Customer / Internal Need
        ↓
Project Created
        ↓
Project Manager
        ↓
Team / Resources
        ↓
Tasks
        ↓
Timeline
        ↓
Time Tracking
        ↓
Expense Tracking
        ↓
Budget
        ↓
Forecast
        ↓
Progress
        ↓
Completion
        ↓
Project Analytics
The client specifically requested:
Project Planning
Project Execution
Time Tracking
Expense Tracking
Budgeting
Forecasting
Resource Management

I. PROCUREMENT
Recommended workflow:
Requirement
 ↓
Supplier
 ↓
Purchase Request
 ↓
Purchase Order
 ↓
Approval
 ↓
Supplier
 ↓
Invoice
 ↓
Payment
 ↓
Spend Analytics
The client's roadmap includes:
Supplier Management
Invoice Processing
Spend Analysis

J. SALES & ORDER MANAGEMENT
CRM Customer
 ↓
Quotation
 ↓
Pricing / Discount
 ↓
Order
 ↓
Processing
 ↓
Fulfilment
 ↓
Invoice
 ↓
Sales Analytics
CRM customer records should connect directly into ERP sales/order operations.

K. FINANCE & ACCOUNTING
The ERP includes:
Accounts Payable
Accounts Receivable
Budgeting
Forecasting
Financial Reporting
Recommended workflow:
Income / Expense
       ↓
Accounting Entries
       ↓
AP / AR
       ↓
Invoices / Payments
       ↓
Budget
       ↓
Forecast
       ↓
Financial Reports

L. INVENTORY / SUPPLY CHAIN
The client requires:
Stock Level Tracking
Warehouse Management
Inventory Optimization
Demand Forecasting
Compliance
Recommended workflow:
Product / Material
 ↓
Stock
 ↓
Warehouse
 ↓
Purchase
 ↓
Transfer
 ↓
Consumption / Order
 ↓
Low Stock
 ↓
Reorder / Forecast

M. MANUFACTURING
The client requires:
Production Planning
Scheduling
Quality Control
Bill of Materials
Resource Allocation
Recommended workflow:
Sales / Production Demand
       ↓
BOM
       ↓
Raw Material Check
       ↓
Production Plan
       ↓
Schedule
       ↓
Resource Allocation
       ↓
Production
       ↓
Quality Control
       ↓
Finished Inventory

N. HR + RECRUITING
HR/Recruiting is not a separate software product.
It will exist inside the CRM nErgy ERP / HR ecosystem.
The client's ERP scope includes:
Employee Data Management
Payroll
Recruitment
Onboarding
Performance Management
The client's additional hiring/recruiting research significantly expands this module.

O. RECRUITMENT WORKFLOW
Complete recruitment workflow:
Hiring Requirement
       ↓
Job Created
       ↓
Job Board Posting
       ↓
Candidate Application
OR
Passive Candidate Sourcing
       ↓
Candidate Profile
       ↓
Resume
       ↓
Skills / Tags
       ↓
AI Candidate Matching
       ↓
Candidate Segmentation
       ↓
Email / SMS Outreach
       ↓
Interaction Tracking
       ↓
Interview / ATS
       ↓
Decision
       ↓
Offer
       ↓
Hired
       ↓
Onboarding
       ↓
Employee Record
       ↓
Payroll / Performance
The client wants:
Candidate database
Centralized profiles
Candidate notes
Skill tagging
Automated outreach
ATS integration
Candidate segmentation
Passive candidate nurturing
Job board integration
The client also wants:
AI Candidate Matching
Passive Sourcing
Email/SMS Nurture
Multichannel engagement
Interaction tracking
Recruitment analytics
HR/ATS/job-board integrations

P. AI RECRUITING
Recommended workflow:
Job Description
       +
Candidate Resume
       +
Skills / Experience
       ↓
AI Analysis
       ↓
Match / Ranking
       ↓
Recruiter Review
       ↓
Interview
AI should assist the recruitment team.
AI does not need to become the final hiring authority.

Q. CUSTOMER SUPPORT
The CRM roadmap includes:
Customer Support
Help Documentation
Tutorials
Troubleshooting
FAQs
Recommended support flow:
User Needs Help
 ↓
Search Knowledge Base
 ↓
Bestie / AI Answer
 ↓
Resolved?
 ├── Yes → Done
 └── No
      ↓
Support Ticket
      ↓
Agent
      ↓
Resolution

R. CENTRAL AI KNOWLEDGE BASE
The client wants something smarter than a traditional FAQ.
A centralized AI-powered RAG knowledge system should support:
Knowledge Base
     ↓
├── CRM Assistant
├── ERP Assistant
├── Website Assistant later
├── Customer Support
├── FAQs
└── AI Agents
The client's notes specifically describe central FAQ/product knowledge, natural-language questions, and future reuse across the website, CRM assistant, ERP assistant, support, and AI agents.

S. INTERNAL AI SEARCH
The client wants an AI-powered search bar for:
Documents
Tasks
Files
Other information
Example:
User:
"Show me ABC Company's last invoice and open tasks"

             ↓

AI Search
 ↓
Permission Check
 ↓
CRM / ERP / Files Search
 ↓
Relevant Results

T. CRM nErgy AI CONTENT STUDIO
The AI Content Studio is now one of the biggest parts of CRM nErgy.
The client calls it:
AI Content Studio — Story Telling Genius
Main researched tools include:
Bestie — My AI Agent
AAI Muzik Hit Studio
AAI Real Talk
AI Audio Writer
AI ConTalk
AI Film Maker
AI Image TalkR
AI Logo Generator
AI Photo Life
AI Video Crew
AI Visual Workflow
AI VoiceX Change
AAI BIG Movies Lab
Train AI to Speak
These tools also appear in the updated CRM roadmap.

U. CONTENT STUDIO COMMON CREATION FLOW
Open AI Content Studio
       ↓
Choose Tool / Ask Bestie
       ↓
Give Prompt
OR
Upload:
Text / Image / Video / URL / Audio / Document
       ↓
AI Understands Requirement
       ↓
Model / Tool Selection
       ↓
Generate Draft
       ↓
Preview
       ↓
Chat-Based Refinement
       ↓
Regenerate Selected Part
       ↓
Final Output
       ↓
Save to Library / Export

V. SUPPORTED CONTENT FLOWS
The client's research includes:
Script → Video
Text → Video
Image → Video
URL → Video
Audio → Video
Text → Image
Text → Speech
Speech → Text
Image → Talking Image
Text → Music
Image/Text → 3D
Audio/Video → Voice Change
Content → Explainer
Content → Training Video
Content → Social Media Video
The AI Content Studio document explicitly lists:
Script-to-Video
AI Music Generation
AI Image Generation
Lip Sync
Text-to-Video
Image-to-Video
URL-to-Video
Text-to-Image
Audio-to-Video

W. BESTIE — MAIN AI AGENT
Bestie should not be designed as only a chatbot.
The client's research describes a much more capable AI agent that could potentially support:
Chat
Research
Web tasks
Data/code
Uploaded files
Presentations
Images
Videos
Music
Integrations
Scheduled tasks
Long-running jobs
Recommended conceptual flow:
USER
 ↓
BESTIE
 ↓
Understand Intent
 ↓
Break Task Into Steps
 ↓
Choose Correct Tools / AI Models
 ↓
Execute
 ↓
Show Progress
 ↓
User Refines
 ↓
Final Result

X. AI VIDEO AGENT — BESTIE
The AI Video Agent is more than a simple video generator.
User example:
“Make a 30-second upbeat product advertisement.”
Then:
Bestie Understands Request
       ↓
Creative Direction
       ↓
Script
       ↓
Storyboard / Shots
       ↓
Character / Avatar
       ↓
Image / Video Models
       ↓
Voice
       ↓
Music
       ↓
Captions
       ↓
Scene Assembly
       ↓
Preview
       ↓
User Changes
       ↓
Final Video
The client specifically researched an AI Video Agent that interprets intent, proposes creative direction, plans the shots, selects models, and produces a ready-to-post video.

Y. VIDEO AGENT CREATIONS
The client expects the AI Video Agent to support:
Logos
2D Avatars
3D Avatars
AI Characters
Onboarding Videos
Tutorial Videos
How-It-Works Videos
Explainer Videos
Animated Infographics
Training Videos
Product Ad Videos
Product Explainer Videos
Social Media Videos
Short Story Videos

Z. VIDEO AGENT UX
The strongest common user-experience pattern from the client's research is:
SAY IT
The user explains the requirement in plain language.
SEE IT
AI shows:
Script
Scene order
Creative direction
Characters
Preview
SHAPE IT
User can request:
Make it shorter
Change Scene 3
Change character
Use another voice
Make it professional
Change the colors
Regenerate only one scene
SHIP IT
AI produces final publish-ready content.
The client's product-explainer research specifically describes natural-language production and refinement.

AA. AI VIDEO FORMATS
The client's reference research includes formats such as:
16:9
9:16
1:1
Up to 4K
Multiple durations
One project could therefore create versions for:
YouTube
+
Instagram Reels
+
TikTok
+
Social Feed

AB. AI VIDEO / CHARACTER CREATION
The client wants:
2D
3D
Avatars
AI Characters
The research also references selfie-based 3D avatar creation.

AC. AAI BIG MOVIES LAB
The client's research expands this concept into:
AI Short Drama
AI Super Agent
AI Artist
AI Influencer
AI Image Generator
AI Video Generator
AI 3D Model Generator
AI Manga Generator
AI Comics Generator
AI Music Generator
AI Music Video Generator
AI Sound Effects
Text-to-Speech
AI Lipsync
Motion Control
Because this is itself a very large system, final development should divide these capabilities into:
Launch Scope → Advanced Scope → Future Scope.

AD. AI VISUAL WORKFLOW
The client wants workflow-based AI automation.
Example:
Prompt
 ↓
Text Generator
 ↓
Image Generator
 ↓
Character
 ↓
Voice
 ↓
Video
 ↓
Captions
 ↓
Publish
The client's research explicitly describes connecting text generation, image creation, style transfer, video production, and audio synthesis through visual workflows.

AE. VOICE / AUDIO
The AI Content Studio can include:
Text-to-Speech
Voice Changer
Voice Cloning
Dubbing
Speech-to-Text
Audio Transcription
Multilingual processing
Audio Summarization
Music
Real-time translation concepts
The research includes voice changing while preserving timing/emotion, along with cloned/custom voices.

AF. REDESIGN ANY WEBSITE
Important distinction:
“Redesign Any Website” is an AI tool inside CRM nErgy.
It is not the CRMnErgy.com website requirement.
The client's note says this concept is for personal business purposes.
Possible flow:
Existing URL
 ↓
AI Reads Website
 ↓
Extract Content
 ↓
Choose Template
 ↓
Map Existing Content
 ↓
Generate Code
 ↓
Migrate Images
 ↓
Preview

AG. AI SECURITY / DATA PROTECTION
AI security is now a dedicated requirement.
Recommended architecture:
User Prompt / File
        ↓
SECURITY GUARDRAIL
        ↓
Sensitive Data Detection
        ↓
Prompt Injection Detection
        ↓
Permission Check
        ↓
Agent Action Check
        ↓
Allow / Sanitize / Block
        ↓
AI
The client has researched:
Data leak prevention
Risky prompt detection
Prompt injection controls
Allow/deny policies
AI-agent communication monitoring
Abnormal command detection
Central policy controls
Audit tracking
Cloud/local deployment options

AH. CRM nErgy MOBILE APP
The latest Mobile App requirement goes beyond normal CRM mobile access.
The client describes:
My Fav Apps / My CRM nErgy App
with a customizable, drag-and-drop favorite-app homepage.
Concept:
CRM nErgy Mobile App
        ↓
My Fav Apps Home
        ↓
Drag / Drop / Organize
        ↓
Daily Apps
+
CRM nErgy
+
Business Tools

AI. MOBILE APP CATEGORIES
The client gives examples including:
Communication
Facebook
Gmail
WhatsApp
Instagram
Telegram
Entertainment
YouTube
Spotify
TikTok
Netflix
Finance
Banking applications
Digital Payments
Zelle
Cash App
Venmo
PayPal
Apple Pay
Productivity
ChatGPT
CRM nErgy
Shopping
Amazon
Temu
eBay
Business Tasks
Slack
Zoom
CRM nErgy
Health and Fitness
Navigation
Education
The client explicitly states that the purpose is to organize and locate apps customers use every day so CRM nErgy remains relevant and customers continue returning to it.

AJ. MOBILE “SECURED STORAGE” — OPEN DECISION
The client specifically writes “secured storage” beside Finance and Digital Payments.
This needs clarification.
It could mean:
Secure shortcut storage
Integration metadata
Financial app information
Something else
We should not assume it means storing banking/payment passwords or credentials.
That needs explicit client confirmation.

SOFTWARE 2 — OAL NETWORK
The second main software is:
OAL NETWORK LENDING SOFTWARE
Main roles:
Borrower
Lender
OAL Rep / Agent / Broker
Admin
Super Admin
Support
And the platform includes the:
OPM ASAP Lending Marketplace.

AK. BORROWER ENTRY
The client wants the applicant to first create an account using:
Full Legal Name
Email
Phone Number
Password
Email/Text Identity Verification
After account creation, the borrower can begin the loan application.
The platform must use MFA for logins.

AL. BORROWER ACCOUNT WORKFLOW
Recommended operational flow:
Borrower Signup
 ↓
Email Verification
 ↓
Phone Verification
 ↓
MFA
 ↓
Borrower ID
 ↓
Dashboard
 ↓
KYC
 ↓
Loan Application
The borrower should create their own password.
Administrators should never see the user's plain-text password.

AM. BORROWER COMPLETE APPLICATION FLOW
The client's recommended flow is:
Landing Page
 ↓
Create Account
 ↓
KYC Verification
 ↓
Complete Loan Application
 ↓
Upload Documents
 ↓
AI Borrower Score
 ↓
Qualified Lenders Notified
 ↓
Lenders Submit Offers
 ↓
Borrower Compares Offers
 ↓
Accept Offer
 ↓
Loan Processing
 ↓
Funding
 ↓
Post Funding Dashboard
This should remain the master OAL loan lifecycle.

AN. IMPORTANT APPROVAL DIFFERENCE
Two different approvals must exist.
OAL Qualification
OAL/Admin/process determines whether an applicant is:
Verified / Qualified for Marketplace
Actual Loan Approval
The Lender decides whether to approve and fund the actual loan.
Therefore:
OAL Qualification ≠ Loan Approval
This prevents responsibilities between the platform and lender from being mixed.

AO. BORROWER DASHBOARD
The client wants:
AI Borrower Score
Secure Messaging / Chat
Notifications
Waiting Room / Offers
Referral Program
Settings

AP. BORROWER COMMUNICATION — HARD RULE
BORROWER ↔ OAL REP = ALLOWED

BORROWER ↔ LENDER = NOT ALLOWED
The client explicitly states that borrowers communicate with loan representatives, not directly with lenders.

AQ. KYC / VERIFICATION
Recommended workflow:
Borrower
 ↓
KYC Submission
 ↓
Verification Center
 ↓
Verification Result
 ↓
Verified / Failed / More Information Required
The client has not yet defined:
Exact KYC provider
Exact KYC verification process
Therefore this remains a clarification item.

AR. DOCUMENT MANAGEMENT
Recommended architecture:
Borrower Uploads Document
 ↓
Application-Linked Storage
 ↓
Verification / Review
 ↓
Accepted
OR
Rejected / Reupload Required
 ↓
Audit History
The client explicitly asks what features should be included in Document Management, so the complete functionality still needs client confirmation.

AS. AI BORROWER SCORE
Recommended architecture:
Loan Application
        +
Verified Information
        +
Client Scoring Rules
        ↓
AI / Rules Scoring Engine
        ↓
Borrower Score
        ↓
Qualification
        ↓
iNV IQ / Borrower Ranking
The client wants a customized formula using loan application details with the help of AI.
The exact factors and weightages still require confirmation.

AT. TWO SCORING ENGINES
The client specifically wants two scoring paths:
1. Regular Applicant Score
For normal loan applicants.
2. Qualified Verified Investor Score
For qualified verified investor applicants who complete a special form.
The Admin Panel should eventually control separate scoring models/rules.

AU. OAL REP / AGENT
Recommended account creation:
Admin
 ↓
Invite OAL Rep
 ↓
Rep Receives Activation
 ↓
Rep Creates Password
 ↓
MFA
 ↓
Account Active
Public OAL Rep registration is not recommended.

AV. REP ASSIGNMENT
The client already has:
Lead Distribution
inside Admin.
Recommended workflow:
Borrower Qualified
 ↓
Lead Distribution
 ↓
OAL Rep Assigned
Assignment can later support:
Manual assignment
Round-robin
Territory
Workload
Loan type
The exact logic should be approved by the client.

AW. OAL REP DASHBOARD
The client wants:
Communication
Qualified Leads
AI Lead Alerts
Lead Details
Loan Requests
Saved Leads
Offer Management
Analytics
Reports
Billing
Subscription
Profile
Settings

AX. REP COMMUNICATION MODEL
The OAL Rep is the communication bridge:
BORROWER
    ↕
 OAL REP
    ↕
 LENDER
The Rep can communicate with lenders through:
Chat
Email
SMS
The client also wants an OAL LetsWork message box where the Rep can communicate with both the borrower and lender around the deal.

AY. LENDER REGISTRATION
Recommended onboarding:
Lender Applies
 ↓
Business Information
 ↓
Contact Information
 ↓
Verification
 ↓
Pending Admin Approval
 ↓
Admin Approve / Reject
 ↓
Activation Link
 ↓
Password Creation
 ↓
MFA
 ↓
Lender Portal

AZ. LENDER DASHBOARD
The client wants:
Qualified Leads
AI Lead Alerts
Borrower Ranking / iNV IQ
Lead Details
Loan Requests
Saved Leads
Communication
Offer Management
Analytics
Reports
Billing
Subscription
Profile
Settings

BA. QUALIFIED LEADS
Recommended flow:
Borrower
 ↓
Verification
 ↓
AI Score
 ↓
Qualification
 ↓
Qualified Lead
 ↓
Eligible Lenders + OAL Rep Notified

BB. AI LEAD ALERT
The client later specifically reminded that:
Lenders AND OAL Reps must receive notifications
so that they can work the deal, close it, and move it toward funding.

BC. SAVED LEADS — RECOMMENDED DEFINITION
The client asked how Saved Leads should work.
Recommended:
Qualified Lead
 ↓
Lender / Rep Clicks Save
 ↓
Saved Leads
 ↓
Follow-Up Later
Saved Lead = an opportunity the user wants to bookmark/follow.
This is a recommended definition and should be included in client confirmation.

BD. LOAN REQUESTS — RECOMMENDED DEFINITION
The client also asked what Loan Requests means from the lender's perspective.
Recommended distinction:
Qualified Leads
Available qualified lending opportunities.
Saved Leads
Qualified opportunities a user bookmarked.
Loan Requests
Active funding requests that require lender evaluation/action.
This should also be included in the client sign-off.

BE. LENDER PRIVACY
The client's hard rule is:
LENDER A
   ✕
CANNOT IDENTIFY
LENDER B
Other lenders remain anonymous.
Only OAL Reps can see and communicate with lenders.
Borrowers cannot communicate directly with lenders.

BF. OAL LIVE MARKETPLACE
The client wants a:
Live Online + Mobile Lending Marketplace
where OAL Reps and Lenders can see borrowers.
New applicants should have:
New-applicant indicator/status/color
Timestamp
The system should track the process from application start through loan funding.

BG. OFFER MANAGEMENT
Permissions are clear.
Lender
Create Offer = YES
Edit Offer = YES
OAL Rep
View Offer = YES
Edit Offer = NO
Share Offer Result with Borrower = YES
The client specifically states that Offer Management is exclusively editable by lenders.
Workflow:
Lender Reviews Borrower
 ↓
Create Offer
 ↓
Submit Offer
 ↓
OAL Rep Sees Offer
 ↓
OAL Rep Shares Result
 ↓
Borrower Sees Offer

BH. WAITING ROOM / OFFERS
The client explicitly said:
“I will handle this section.”
Therefore:
WAITING ROOM / OFFERS
=
CLIENT SPECIFICATION PENDING
We should not invent its final internal workflow.

BI. OFFER ACCEPTANCE TO FUNDING
Borrower Compares Offers
 ↓
Select Offer
 ↓
Accept Offer
 ↓
Lender + OAL Rep Notified
 ↓
Loan Processing
 ↓
Lender Approval
 ↓
Funding
 ↓
Post-Funding Dashboard

BJ. ADMIN PANEL
The client explicitly wants:
Borrowers
Lenders
Loan Applications
AI Scoring Engine
Verification Center
Document Management
Lead Distribution
Notifications
Referral & Affiliates
Advertisements
Payments
Subscription Plans
CMS
Reports & Analytics
Support Tickets
Audit Logs
System Settings
Super Admin

BK. USER CREATION / APPROVAL HIERARCHY
Recommended final hierarchy:
SUPER ADMIN
     │
     └── Creates / Controls ADMIN

ADMIN
     │
     ├── Creates OAL Reps
     ├── Creates Internal Staff
     └── Approves Lenders

BORROWER
     │
     └── Self Registration

LENDER
     │
     └── Registration / Application
          ↓
       Admin Approval

BL. OAL STATUS FLOW
Recommended full status lifecycle:
REGISTERED
 ↓
VERIFIED
 ↓
KYC PENDING
 ↓
KYC VERIFIED
 ↓
APPLICATION DRAFT
 ↓
APPLICATION SUBMITTED
 ↓
DOCUMENT REVIEW
 ↓
AI SCORED
 ↓
QUALIFIED
 ↓
REP ASSIGNED
 ↓
PUBLISHED TO NETWORK
 ↓
OFFER RECEIVED
 ↓
OFFER ACCEPTED
 ↓
PROCESSING
 ↓
APPROVED
 ↓
FUNDED
Possible exception statuses:
MORE INFORMATION REQUIRED
KYC FAILED
DOCUMENT REJECTED
NOT QUALIFIED
WITHDRAWN
EXPIRED
These status names are workflow recommendations based on the client's lifecycle and should be confirmed during wireframing.

BM. OAL AI HELP DESK
The AI Help Desk is part of OAL.
The client's purpose is to:
Improve application completion
Provide technical assistance
Provide application guidance
Reduce friction
Reduce application abandonment
Improve customer satisfaction
Provide 24/7 support capability
Features include:
Ticketing System
Centralized Management
Email
Chat
Social Media
Automatic Ticket Creation
Knowledge Base
Self-Service Portal
Resource Library
AI Ticket Routing
Suggested Responses
Multi-Channel Support
Performance Analytics
Collaboration Tools
Customization

BN. OAL HELP DESK FLOW
Borrower Needs Help
 ↓
Search Knowledge Base / Ask AI
 ↓
Answer Found?
 ├── YES → Continue Application
 │
 └── NO
      ↓
 Ticket Created
      ↓
 AI Category / Priority
      ↓
 Support Agent
      ↓
 Suggested Response
      ↓
 Resolution
      ↓
 Ticket Closed
      ↓
 Customer Continues Loan Journey

NOW THE MOST IMPORTANT PART
SOFTWARE 1 ↔ SOFTWARE 2 LINKUP
The two systems should not be merged into one database/business application.
The correct architecture is:
     CRM nErgy
 CRM + ERP + AI
         │
         │
    SECURE API LAYER
         │
         ▼
     OAL Network
 Lending Marketplace
The client specifically asks whether CRM/ERP can integrate with the LoanAPP for:
Analytics and Reports.
He also asks whether building the CRM/ERP can allow development reuse and cost savings.
The answer is:
YES — through shared infrastructure and controlled data exchange, not by mixing all customer data.

BO. WHAT CAN BE SHARED / REUSED
To reduce development cost, we can reuse common platform foundations such as:
AUTHENTICATION ENGINE
MFA
ROLE / PERMISSION FRAMEWORK
EMAIL ENGINE
SMS ENGINE
NOTIFICATION ENGINE
CHAT FOUNDATION
FILE STORAGE ENGINE
AUDIT LOGGING
AI GATEWAY
AI GUARDRAILS
REPORTING COMPONENTS
HELP DESK ENGINE
KNOWLEDGE BASE ENGINE
However, CRM/ERP and OAL will still maintain their own business logic.

BP. DATABASE / DATA SEPARATION
Recommended:
CRM / ERP DATA
      │
      │ Controlled APIs
      │
OAL LENDING DATA
OAL sensitive data should not automatically become visible to ordinary CRM users.
Examples:
KYC data
Loan documents
Financial records
Borrower verification information
Scoring inputs
Sensitive personal information
must remain permission-controlled.

BQ. CRM → OAL LINK
A natural future integration:
CRM Lead
 ↓
Customer Interested in Business Funding
 ↓
Refer to OAL
 ↓
Secure OAL Registration
 ↓
Borrower Creates OAL Account
 ↓
Loan Application
 ↓
OAL Handles Lending Process
Exact referral/data-sharing rules require client confirmation.

BR. OAL → CRM LINK
Example:
OAL Borrower
 ↓
Funded
 ↓
Approved CRM Sync
 ↓
CRM Contact / Customer
 ↓
Relationship Management
 ↓
Future Follow-Up
Only approved and necessary non-sensitive information should sync.

BS. OAL → ERP LINK
The strongest source-confirmed integration is:
Analytics + Reports
Example:
OAL
 ↓
Applications
Qualified Applicants
Funded Deals
Commissions
Business Metrics
 ↓
CRM / ERP Reporting Layer
 ↓
Management Dashboard
This directly answers the client's question about integrating the LoanAPP with the CRM/ERP for reporting and analytics.

BT. HELP DESK LINKUP
A common Help Desk technology foundation can save development cost:
Shared Ticket Engine
       │
       ├── CRM Support Queue
       └── OAL Support Queue
But:
CRM tickets remain CRM data.
OAL tickets remain OAL data.
Permissions stay separate.

BU. AI KNOWLEDGE LINKUP
A shared AI knowledge infrastructure can support separate knowledge domains:
AI Knowledge Platform
      │
      ├── CRM Knowledge Base
      ├── ERP Knowledge Base
      └── OAL Knowledge Base
Bestie must not expose OAL private borrower data to unauthorized CRM users.

BV. AI SECURITY LINKUP
The CRM nErgy AI Guardrail architecture can be reused as common technology:
CRM AI Prompt ─┐
               ├→ AI SECURITY GATEWAY → AI Provider
OAL AI Prompt ─┘
But OAL can use stricter policies for lending and sensitive personal/financial information.

BW. COMMUNICATION LINKUP
Both systems require:
Email
SMS
Chat
Notifications
Therefore common infrastructure can be reused:
Shared Communication Infrastructure
         │
         ├── CRM Messages
         └── OAL Messages
However, OAL's communication rules must remain strict:
Borrower ↔ OAL Rep
OAL Rep ↔ Lender
Borrower ✕ Lender

BX. REFERRAL / AFFILIATE CONFLICT TO RESOLVE
The older OAL requirement says:
Referral & Affiliates — “Will use 3rd party CRM / ERP company.”
But now the client is building his own CRM nErgy CRM/ERP.
Therefore one important final question is:
Should OAL continue using a third-party CRM/ERP?
or:
Should CRM nErgy become OAL's own Referral/Affiliate/CRM platform?
This needs client confirmation.

BY. FINAL COMPLETE ECOSYSTEM FLOW
                          CRM nErgy
                    CRM + ERP AI SuperHouse
                             │
     ┌───────────────────────┼─────────────────────┐
     │                       │                     │
     ▼                       ▼                     ▼
    CRM                     ERP                   AI
     │                       │                     │
Contacts                 Projects              Bestie
Leads                    Finance               Content Studio
Sales                    HR                    Video Agent
Pipeline                 Recruiting            Music
Marketing                Inventory             Images
Territory                Supply Chain          Voice
Support                  Manufacturing         3D / Characters
Analytics                Analytics             Workflows
     │                       │                     │
     └───────────────────────┼─────────────────────┘
                             │
                       Mobile App
                             │
                    AI Security Layer
                             │
                             │
                    SECURE INTEGRATION
                             │
                             ▼
                        OAL NETWORK
                             │
        ┌────────────────────┼─────────────────────┐
        │                    │                     │
        ▼                    ▼                     ▼
    Borrower              OAL Rep               Lender
        │                    │                     │
        │                    └────────┬────────────┘
        │                             │
        ▼                             ▼
Loan Application              Live Marketplace
        │                             │
        ▼                             ▼
KYC / Documents               Qualified Leads
        │                             │
        ▼                             ▼
AI Borrower Score             iNV IQ
        │                             │
        ▼                             ▼
Qualification                  Offers
        │                             │
        └──────────────┬──────────────┘
                       ▼
                 Offer Acceptance
                       ↓
                 Loan Processing
                       ↓
                    Funding
                       ↓
              Post-Funding Dashboard
                       ↓
                 Analytics / Reports
                       ↓
               CRM / ERP Integration

BZ. WHAT IS STILL NOT FINALIZED
After combining all old and latest requirements, these client decisions remain open:
Pending Item
Reason
AI Borrower Score formula
Client requested development help
iNV IQ formula
Exact factors/weights not supplied
Investor Special Score
Special form/factors pending
Exact KYC provider/process
Not supplied
Waiting Room / Offers
Client said he will handle it
Loan Requests behavior
Client asked us to define it
Saved Leads behavior
Client asked us to define it
Document Management depth
Client asked what features are included
Notification rules
Full event/channel matrix not supplied
Advertisement structure
Client asked what system should be used
OAL Referral/Affiliate
Third-party vs CRM nErgy needs confirmation
Lead Distribution rules
Exact routing method not finalized
CRM subscription/pricing
Not final
CRM final role matrix
Needs approval
Territory hierarchy
Needs company-specific confirmation
Mobile secured storage
Exact meaning needs clarification
Bestie launch capabilities
Scope is extremely large
AI providers/models
Architecture decision required
AI usage credits/limits
Not supplied
BIG Movies Lab launch scope
Too broad to assume everything at launch
AI in-house content library
Client said it can continue after initial launch
CRM/ERP website
Client intentionally has not supplied final website content

The client specifically requested a 7-day period so he has enough time to answer questions and provide clarifications, and he also asked that older files from previous weeks be reviewed closely.

FINAL CONCLUSION
The client has 2 main software ecosystems.
1. CRM nErgy
A CRM + ERP + AI SuperHouse for small businesses, including:
CRM
ERP
HR
Recruitment
Territory Management
Customer Support
Reporting & Analytics
Bestie
AI Content Studio
AI Video Agent
AI Images
AI Music
AI Voice
AI 3D / Characters
AI Workflows
AI Search
RAG Knowledge Base
AI Security
Mobile/Super App

2. OAL Network
A Business Funding / Lending Marketplace, including:
Borrower Portal
Lender Portal
OAL Rep Portal
Admin
Super Admin
KYC
Documents
AI Borrower Score
iNV IQ
Qualified Leads
AI Lead Alerts
OAL Marketplace
Offer Management
Loan Processing
Funding
Post-Funding Dashboard
AI Help Desk
Reporting & Analytics

CONNECTION BETWEEN BOTH
The systems remain independent, but they can use:
Secure APIs
Shared authentication technology
Shared MFA framework
Shared communication infrastructure
Shared AI infrastructure
Shared security/guardrails
Shared reporting technology
Shared ticketing technology
Controlled CRM/OAL data sync
OAL → CRM/ERP analytics integration
Future referral integration
without exposing sensitive OAL information to unauthorized CRM users.

AND YES — AFTER THIS COMES THE WIREFRAME
This document is not the wireframe itself.
This is the:
FINAL MASTER WORKFLOW + SYSTEM ARCHITECTURE
After this is approved, we create the wireframe.
The wireframe should go much deeper.
For every role, we will define:
Portal
 → Sidebar
 → Main Menu
 → Submenu
 → Screen
 → Tabs
 → Cards
 → Tables
 → Forms
 → Fields
 → Buttons
 → Popups/Modals
 → Filters
 → Search
 → Status
 → Who Can View
 → Who Can Add
 → Who Can Edit
 → Who Can Delete
 → Who Approves
 → Who Gets Notification
 → What Happens After Click
 → What Database Record Changes
 → What Other Role Sees
 → What AI Does
 → What Happens on Error / Rejection / Empty Data
For example, instead of writing only:
Borrower → Loan Application
the wireframe will become:
BORROWER PORTAL

Sidebar
│
├── Dashboard
├── My Application
│    ├── Application Overview
│    ├── Business Information
│    ├── Personal Information
│    ├── Loan Request
│    ├── Documents
│    ├── KYC
│    ├── Submission Review
│    └── Application Timeline
│
├── AI Borrower Score
├── Messages
├── Notifications
├── Waiting Room / Offers
├── Referrals
├── Help Desk
└── Settings
Then My Application → Documents itself will have:
Header
Application Number
Current Status
Upload Document
Document Type
File
Issue Date
Expiry Date
Upload
Cancel

Document Table
Document Name
Type
Uploaded Date
Verification Status
Reviewer
Actions

Statuses:
Pending
Under Review
Approved
Rejected
Re-upload Required

If Rejected:
Reason
Admin Comment
Re-upload Button

Notification:
Borrower
Assigned Rep
Admin

Audit:
Who Uploaded
When Uploaded
Who Reviewed
When Reviewed
What Changed
And we will do this same level of detail for:
SEA
CRM nErgy Admin
Company Admin
Sales
HR
Recruiter
Finance
Support
Affiliate
Bestie
AI Content Studio
AI Video Agent
Mobile App
Borrower
Lender
OAL Rep
OAL Admin
OAL Super Admin
So the correct next sequence is:
1. FINAL MASTER WORKFLOW          ← DONE
        ↓
2. CLIENT CLARIFICATION QUESTIONS
        ↓
3. CLIENT CONFIRMATION
        ↓
4. ROLE & PERMISSION MATRIX
        ↓
5. ULTRA-DEEP WIREFRAME
        ↓
6. DATA / STATUS / NOTIFICATION FLOWS
        ↓
7. TECHNICAL ARCHITECTURE
        ↓
8. PHASE / MVP / DEC 30 PRIORITY
        ↓
9. FINAL DEVELOPMENT SCOPE
        ↓
10. DEVELOPMENT
So yes: this English document should be used first as the complete workflow confirmation. Once the client confirms/corrects it, we should build the extremely detailed wireframe from this exact workflow without removing any requirement.


