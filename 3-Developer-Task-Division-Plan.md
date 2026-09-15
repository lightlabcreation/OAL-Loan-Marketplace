# CRM nErgy AI ⚡ OMP DEALS
## 3-Developer Work Distribution & Zero-Conflict Git Strategy

**Date:** 15 September 2026  
**Document Status:** Approved Sprint Execution Plan  
**Team Size:** 3 Developers  
**Scope:** Client Chat (Post 27/08/2026) + 4 OMP Deals Blueprint Documents  
**Target Delivery:** December 30, 2026 (Urgent Attorney Demo in 2 Weeks)  

---

## 🛡️ Zero-Conflict Git Architecture & Branching Rules
*Mandatory compliance for all 3 developers*

### Core Principles:
1. **Rule 1: Strict Folder & File Isolation**  
   Har developer ko alag domain aur dedicated folders assign kiye gaye hain. Kabhi bhi kisi dusre developer ke assigned folder ki files ko edit na karein.
2. **Rule 2: Modular Routing Pattern (AppRoutes.jsx Zero Conflict)**  
   Main `AppRoutes.jsx` me baar-baar edits nahi honge. Dev 2 aur Dev 3 apne dedicated sub-route files me routes define karenge.
3. **Rule 3: Safety Mandate (Zero Regression)**  
   Existing working pages (`src/pages/crm/`, `src/pages/oal/`, ERP, HR, Support, Auth Contexts) ko **TOUCH NAHI KARNA**. Sirf naye files aur additive routes banenge.

### Dedicated Git Feature Branches:
* **Developer 1 Branch:**  
  ```bash
  git checkout -b feature/dev1-branding-showcase
  ```
  *Scope: Works strictly in Showcase, Auth Gateway, Global Branding & Utilities.*

* **Developer 2 Branch:**  
  ```bash
  git checkout -b feature/dev2-omp-inventory-marketing
  ```
  *Scope: Works strictly in Marketplace, Inventory, Media & Marketing.*

* **Developer 3 Branch:**  
  ```bash
  git checkout -b feature/dev3-omp-finance-executive
  ```
  *Scope: Works strictly in Sales Desking, BHPH Financing, & Executive Admin.*

---

## 👤 DEVELOPER 1: Client Experience, AI Branding & Attorney Showcase
**Priority:** 🔴 Immediate (Next 7–14 Days)  
**Core Responsibility:** Client ko impress karna, 2-week Attorney presentation demo ready karna, aur global branding & entry flow complete karna (Only UI / Frontend part).

| Task ID | Task Name | Priority | Description & Deliverable (UI Only) | Target Files / Scope |
| :--- | :--- | :--- | :--- | :--- |
| **C-01** | Global Rebrand to "CRM nErgy AI" | 🔴 Urgent | Browser titles, headers, footers, meta tags, and badges ko "CRM nErgy AI" me update karna. | `index.html`, Topbar |
| **C-05** | New AI Energy Logo Component | 🔴 Urgent | Multi-layer concentric glowing neon rings + energy/smoke effect (from `image.png`). | `src/components/common/Logo.jsx` |
| **C-06** | Futuristic AI Entry / Login Screen | 🔴 Urgent | Ultra-modern dark AI login UI inspired by `hospitalui.../login` demo link. | `src/pages/UnifiedLogin.jsx` |
| **C-08** | Attorney Presentation Showcase | 🔴 Urgent (2 Wks) | `/showcase` page ko expand karna: Salesforce vs AI CRM feature comparison matrix. | `src/pages/Showcase.jsx` |
| **P-01 / P-11** | English ↔ Spanish Bilingual Toggle | 🟠 High | Topbar me 1-click instant language toggle button (UI labels translate honge). | `src/components/common/LanguageToggle.jsx` |
| **P-02** | Hover Color Scheme Polish | 🟠 High | Menu hover: Dark Blue ➔ Sky Blue (`#38bdf8`), Icon buttons: Orange ➔ Sky Blue. | Component scoped styles |
| **P-03** | Menu Label Rename | 🟠 High | Navigation me "Software / Products" ko rename karke **"BUSINESS SOLUTIONS"** karna. | Navigation Config |
| **P-05** | Secured Communications eBox | 🟠 High | Encrypted direct eBox UI between Super Executive Admin (Johnny) and Kiaan Tech Team. | `src/pages/admin/SecuredEbox.jsx` |

---

## 👤 DEVELOPER 2: OMP Deals: Verified Dealers, Inventory Suite & Marketing (Pillars 1 & 2)
**Priority:** 🟠 Phase 1 & 2  
**Core Responsibility:** Auto dealer verification, inventory feed syncing, OfferUp marketplace, aur automated AI listing/media generation.

| Task ID | Task Name | Priority | Description & Deliverable | Target Files / Scope |
| :--- | :--- | :--- | :--- | :--- |
| **V-01 / V-02** | ADP Verified Badge & Onboarding | 🟠 High | Verification process for 3 dealer tiers (Small, Franchise, Large) + official `{ADP Verified}` badge. | `src/pages/omp/verification/` |
| **V-03 / N-01** | DMS Auto Inventory Feed Sync | 🟠 High | Auto-sync vehicles from dealer's DMS (no manual entry) + Carfax report integration button. | `src/pages/omp/inventory/FeedSync.jsx` |
| **N-01 (AI)** | Top Lead Indicator | 🟠 High | AI intent badge scoring buyer shopping behavior to identify high-purchase intent leads. | `src/pages/omp/leads/TopLeadIndicator.jsx` |
| **O-01 to O-05** | OfferUp-Style Marketplace | 🟡 Medium | Geo-search, TruYou verification badge, 1600+ police safe meetup spots, nationwide shipping. | `src/pages/omp/marketplace/` |
| **E-02** | VIN Scanner & VHR Bookout | 🟡 Medium | Mobile camera VIN scanning + vehicle history pull (Carfax, Bumper, VinAudit). | `src/pages/omp/inventory/VinScanner.jsx` |
| **E-03** | AI RealPrice™ Pricing (AIMP) | 🟡 Medium | Online market price scanner showing Lowest, Medium, Highest prices for pricing lot. | `src/pages/omp/inventory/MarketPricing.jsx` |
| **E-04** | Auto Lien & Title Search (ALTS) | 🟡 Medium | DMV, NMVTIS & VinAudit check for active liens and salvage/flood title brands. | `src/pages/omp/inventory/TitleSearch.jsx` |
| **E-05** | Reconditioning Center (ROM) | 🟡 Medium | Repair Order Management tracking vehicle recon costs from buy to lot-ready. | `src/pages/omp/inventory/ReconCenter.jsx` |
| **E-06** | AI Photo Genius & Multiverse BG | 🟡 Medium | Guided photo mobile prompts + 1-click 100+ AI studio background changer. | `src/pages/omp/media/PhotoGenius.jsx` |
| **E-07** | AI Postmaster (AIPM) | 🟡 Medium | 1-Click simultaneous multi-lister to FB Marketplace, CarGurus, AutoTrader, Craigslist. | `src/pages/omp/marketing/AiPostmaster.jsx` |
| **E-08 to E-10**| Dealer Web Builder & 4K Video | 🟡 Medium | No-code HQ auto site builder (HQAW), AI Google SEO, and 4K mobile walkaround videos. | `src/pages/omp/marketing/` |

**Dedicated Route File for Dev 2:**  
`src/routes/ompInventoryRoutes.jsx`

---

## 👤 DEVELOPER 3: OMP Deals: Sales Desking, BHPH Financing & Executive Central Office (Pillars 3 & 4)
**Priority:** 🟠 Phase 1 & 2  
**Core Responsibility:** Deal structuring calculators, multi-channel sales CRM, in-house Buy Here Pay Here financing, aur franchise parent management.

| Task ID | Task Name | Priority | Description & Deliverable | Target Files / Scope |
| :--- | :--- | :--- | :--- | :--- |
| **E-01** | OMP Executive Account | 🟠 High | Central Office multi-store management, per-location licensing, combined reports. | `src/pages/omp/executive/CentralOffice.jsx` |
| **E-11** | OMP Deals CRM & Unified Inbox | 🟠 High | Omnichannel inbox (SMS, Email, Marketplace messages) and contact pipeline. | `src/pages/omp/crm/UnifiedInbox.jsx` |
| **E-12** | AI Phone Receptionist | 🟡 Medium | 24/7 AI voice call assistant to answer calls, give specs, and book test drives. | `src/pages/omp/crm/AiReceptionist.jsx` |
| **E-13** | 60-Second Deal Calculator | 🟠 High | Payment-first desking tool (Cash, Finance, BHPH, interest, down payment, trade-in). | `src/pages/omp/desking/DealCalculator.jsx` |
| **E-14** | Auto Loans Marketplace | 🟠 High | Single credit application submission with direct integration to OAL Network lenders. | `src/pages/omp/financing/LenderMarketplace.jsx` |
| **E-15** | Auto E-Business (E-Sign) | 🟡 Medium | 100% paperless digital deal jackets and cloud contract e-signing workflow. | `src/pages/omp/deals/AutoESign.jsx` |
| **E-16** | ROI Profit Dashboard | 🟡 Medium | Real-time net profit calculation and gross margin analytics per sold car. | `src/pages/omp/finance/RoiDashboard.jsx` |
| **E-17** | Receipt Cost Management | 🟡 Medium | Snap receipts on mobile and link direct expense to vehicle stock number/VIN. | `src/pages/omp/finance/CostManagement.jsx` |
| **E-18** | BHPH Management Suite | 🟠 High | Late fees, automated recurring ACH/Card payments, collections logs & QuickBooks sync. | `src/pages/omp/bhph/BhphSuite.jsx` |
| **E-19** | Team Permissions & Roles | 🟡 Medium | Granular roles: Owner, GM, Sales Rep, Finance Mgr, Guest channel access control. | `src/pages/omp/executive/TeamPermissions.jsx` |
| **E-20** | OMP Mobile App View | 🟡 Medium | Mobile dashboard interface for managing entire dealership from smartphone. | `src/pages/omp/mobile/OmpMobileView.jsx` |

**Dedicated Route File for Dev 3:**  
`src/routes/ompFinanceRoutes.jsx`

---

## ⚠️ Git Conflict Prevention & Quality Checklist

1. **Strict File Prohibition:**  
   Do NOT touch any existing files in `src/pages/crm/`, `src/pages/oal/`, or core auth layouts.
2. **Sub-Route Isolation:**  
   Developer 2 aur Developer 3 ko sirf aur sirf apne assigned sub-route files (`ompInventoryRoutes.jsx`, `ompFinanceRoutes.jsx`) me routes register karni hain.
3. **Pre-PR Verification:**  
   Hamesha `git pull origin main` karein aur PR create karne se pehle local build (`npm run build`) chala kar confirm karein ki zero errors hain.
4. **Clean Commits:**  
   Commits hamesha feature-specific aur task ID ke sath karein:
   ```bash
   git commit -m "feat(omp): implement E-13 60-second deal calculator UI"
   ```

---
*CRM nErgy AI • OAL Network • OMP Deals • Confidential & Internal Developer Specification*
