# OSINT Phishing Investigation: Case Study Report

## Foreword
All names/contacts were replaced for privacy concerns, and pictures of any methods are not provided for the same reasons. This is not a highly technical investigation; it was more of a personal exercise in practicing OSINT with an actual application and relevance to a real-world scenario (not just a home lab or experimentation with tools).

---

## Brief
An employee, John Doe, was solicited on WhatsApp by someone impersonating the CEO of CompanyX, Mark Smith. The conversation progressed into a request for John Doe to speak with a company-unaffiliated lawyer, Edward Lam, and keep the conversation confidential. The employee became suspicious and escalated the matter to management for verification. The incident was subsequently reported in an email chain with attached pictures and references to the conversation.

---

## Social Engineering Method
- **Spear Phishing**
- Target-specific WhatsApp solicitation (direct message) to John Doe’s number, posing as the CEO of CompanyX.
- Threat actor prolonged the chat with dynamic responses and a consistent tone.
- Impersonated "Mark Smith" (used profile picture and a wrong number).
- Scripted speech: Claimed a new acquisition was being worked on and requested John Doe’s assistance with strict confidentiality.
- Attempted to have John Doe arrange a financial payment to a source after speaking with an individual (posing as a real lawyer named Edward Lam).

---

## Conversation Timeline
1. **Initial Contact**  
   The attacker messaged John Doe on WhatsApp, claiming to be Mark Smith.  
   The attacker immediately began making a request for John Doe's involvement in a fake financial move for CompanyX.

2. **Engagement**  
   The conversation included discussions about a supposed acquisition.  
   The attacker encouraged John Doe to keep the information confidential.

3. **Escalation**  
   The attacker requested John Doe speak to a lawyer named Edward Lam to finalize financial arrangements.

4. **Suspicion**  
   John Doe found the conversation suspicious and escalated it to management.

---

## Tactics Observed
- Multiple high-level CompanyX employees targeted separately.
  - This was referenced directly by higher management, who initially reported this phishing attempt.
- Personalized and direct approach to increase trust.
- Intelligence gathering to scope out individuals.
- Use of buffer contacts to obscure the attacker's identity.
- Deliberate selection of targets to align with acquisition/merger goals.
  - Confirmed by the choice of lawyer identity and specific phishing target.

---

## Possible Inspiration
- CompanyX’s public acquisition history.
- Legal FirmY’s blogs and articles discussing CompanyX.
  - This was the only connection found between FirmY and CompanyX.
- Shared breach information from previous data leaks.
- The roles of John Doe and Jane Lam make them realistic candidates for involvement in mergers.

---

## Names and Roles
- **Mark Smith (Impersonator)**  
  CEO who was impersonated.  
  Public information available, high profile.

- **John Doe (Victim)**  
  Manager for specific regional business with financial oversight.  
  The attacker had access to his WhatsApp number.  
  Role-specific public information available.  
  Email compromised: johndoe@companyx.com

- **Martha Carter (Unaffiliated)**  
  The number used for Mark Smith belonged to this individual during background searching.  
  Likely randomly selected from leaked data.  
  73-year-old living in Indiana, no relevance to any company involved.  
  Email compromised: marthacarter@juno.com, mcarter@sbcglobal.net

- **Edward Lam (Unaffiliated, Likely Used as a Disguise)**  
  Lawyer at Legal FirmY.  
  Unsure of the exact reason for selection.  
  Specializes in mergers and acquisitions.  
  Based within a regional area overseen by Mark Smith.  
  No known connection to CompanyX.  
  Email publicly available: edward.lam@firmy.com

---

## Companies
- **CompanyX:** Targeted organization.  
- **Legal FirmY:** Referenced law organization in the conversation.  
- **Unnamed Fake Company:** Alleged company to be acquired, only referenced.

---

## Evidence and Findings
- Sources: Various people search sites (any that had the individuals' information), specific Google queries, and general searches for any relevant articles. [Have I been Pwned](https://haveibeenpwned.com/) used to check for possible email compromise(s).
- John Doe, Edward Lam, and Martha Carter had their emails compromised and appeared in three common data breaches:
  - **2019 (Feb):** Verifications.io breach
  - **2019 (Oct):** Data Enrichment Exposure from PDL Customer
  - **2021:** LinkedIn Scraped Data

---

## Conclusion
The threat actors likely accessed leaked data to identify and target CompanyX specifically. The motivation for targeting CompanyX remains unclear, but the attackers demonstrated an understanding of CompanyX’s acquisition history and key personnel. The attackers’ tactics suggest a deliberate attempt to exploit public information, along with compromised emails, to build credibility and execute a convincing phishing attempt. This investigation highlights the importance of safeguarding personal information and regularly checking for exposure in known breaches. Companies should maintain awareness of their public profiles, potential adversaries, and conduct table top exercises to stay resilient.

---

## Potential Next Steps for Further Investigation
1. **Analyze the attacker’s language and style for potential attribution.**  
   Attempt to determine if the attacks are correlated with an Advanced Persistent Threat (APT) group.

2. **Explore additional breaches involving CompanyX employees.**  
   Gather all available information from the interactions.

3. **Provide training for employees on identifying spear-phishing attempts.**  
   Include practical exercises and case studies.
