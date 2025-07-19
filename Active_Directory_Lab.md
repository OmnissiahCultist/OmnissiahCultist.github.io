> 🚧 **Work in Progress** 🚧  
> This project page is actively being updated as I build out my lab environment and document my experience.  
> I plan on adding these too in future updates:
> 
> - Network diagrams showing the associated devices and configurations.
> - Screenshots from Active Directory to provide context and visual references.
> - Integration of images in a way that enhances readability and flow.
> - A comprehensive deep dive section — either as a final overview or integrated with each daily log — to better capture my deployment process and key takeaways.

<br>
<br>

<details>
  
  <summary><h1>[ Initial Hopes and Dreams ]</h1></summary>

This project is more about setting up a playground for me to get some hands-on experience with Active Directory.  
I’ve had some lab work involving Active Directory through my CompTIA Network+ course (TestOut — offered through my community college), where they provided virtual environments of a fully deployed AD setup. In those labs, you would tweak configurations here and there to perform troubleshooting tasks or initialize services.

I also gained lab experience from the course [**Workshop: Intro to Active Directory with Dale Hobbs**](https://www.antisyphontraining.com/product/workshop-intro-to-active-directory-with-dale-hobbs/) offered by Antisyphon Training.  
That course gave me a solid overview of central AD components, along with hands-on practice through a variety of labs. It was the biggest contributor to my desire to build my own lab space.  
Active Directory is a heavy-hitting concept for me — one I’ve had to review repeatedly to get a solid grasp. The hands-on labs brought me the closest to understanding it, so that’s why I want to experiment in my own lab environment and see how far I can scale and harden AD within my means.

My main goal here is to deploy Active Directory in my home network and then create an environment I can both harden and test — giving myself perspectives from both offensive and defensive angles on how AD can be locked down.

  
</details>

<br>
<br>

<details>
  
  <summary><h1>[ Jul. 11, 2025 ]</h1></summary>

## 📅 July 11 – Initial Environment Setup

**Things Done:**
- Created the initial Windows Server VM and Kali Linux VM.
- Established network communication between the two VMs.
- Installed Active Directory Domain Services (AD DS) and promoted Windows Server to a domain controller.
- Confirmed DHCP allocation working via libvirt virtual network (NAT mode).
- Configured DNS and network settings to allow basic connectivity across VMs.

**Things To Do:**
- Verify DNS and name resolution from Kali to Windows Server.
- Begin Active Directory Domain Services (AD DS) setup.
- Decide on naming conventions for domains, users, and devices before scaling.

**My Commentary:**
- None. Straightforward actions and I am satisfied with progress.
 
</details>

<br>
<br>

<details>
  
  <summary><h1>[ Jul. 12, 2025 ]</h1></summary>

  
## 📅 July 12 – Active Directory and User Structure

**Things Done:**
- Added Kali Linux as a BYOD-like client with a corresponding AD user `Kal Eye`.
- Created a new Windows workstation VM `HR-0002-win` and contextual workstations/OUs (`HR-0001-win` & `HR-0003-win`).
- Registered two users: **Trevor Ross** and **Nicole Jule**, both assigned to use `HR-0002-win`.
- Created a logical OU structure in ADUC for users, departments, and devices (simulating HR department).

**Things To Do:**
- Set up **hMailServer** to handle internal email for AD users.
- Connect email clients (Outlook, Thunderbird) to test internal mail flow.
- Begin simulating corporate communication workflows between users.
- Explore AD group and OU usage for dynamic management of users and devices.

**My Commentary:**
- None. Straightforward actions and I am satisfied with progress.

</details>

<br>
<br>

<details>
  
  <summary><h1>[ Jul. 14, 2025 ]</h1></summary>

## 📅 July 14 – Mail Server, Shared Mailboxes, and SIEM Planning

**Things Done:**
- Successfully configured **hMailServer** on Windows Server.
- Installed and configured **Thunderbird** for mailbox access via IMAP.
- Created a shared **HR mailbox** and a `noreply@strange.local` account.
- Added an auto-delete rule for the noreply inbox and configured a reply message (for announcement handling).
- Built an internal distribution list manually in hMail (`users@strange.local`).
- Began planning SIEM deployment using **Wazuh** for log collection and monitoring.
- Downloaded Docker — attempted using WSL as backend; encountered "WSL version too old" error.
- Troubleshot WSL on `win-server` (unsuccessfully). May require Docker reinstall.

**Things To Do:**
- Improve the noreply rule to prevent replies from bypassing deletion.
- Automate distribution list updates by syncing with an AD group or OU.
- Configure Thunderbird for multiple mailbox access for HR users (shared inbox).
- Begin Wazuh deployment using Docker on `win-server` (if feasible).
- Tune SIEM agents to monitor events on the domain controller, workstation, and Kali VM.  

**My Commentary:**
- Trying to troubleshoot the windows server was a nightmare, unsure what the issue is but I may need to find a different solution.
- There are plenty of other emails/groups I made so the experience feels more immersive to me... lol.
- I will be shifting to implementing security controls as I am sure I can get lost in the granular changes to Thunderbird or hMailServer's feel.
- I can revisit the organization later - I want to see what security configuration best practices come first, then structure around those.
 
</details>

<br>
<br>

<details>
  
  <summary><h1>[ Jul. 18, 2025 ]</h1></summary>

## 📅 July 18 – Mac Setup & Network Connection

**Things Done:**
- Failed many times at workarounds to get Wazuh on the windows server VM.
- Decided to instead get Wazuh working on a seperate device on my network (my Mac).
- Installed **VirtualBox** on the Mac and downloaded the **Wazuh OVA** for deployment (due to Docker not being supported).
- Successfully started Wazuh.

**Things To Do:**
- Need to go through first setup of Wazuh as well as installing an agent on the host machine.
- Figure out network segmentation or VPN solution to make things make sense for network architecture.
- Try to understand/align with production settings even if on a small scale (multiple DC's, best practices for policies/OU's, etc.)

**My Commentary:**
- Wasted a ton of time trying to get Wazuh working on win-server just for the lab space.
- I want to get things stable first and actually stop at a viable AD environment that makes sense resembling a production environment.
- Once this is set, then I can introduce more security controls and maybe even run some simulations.
 
</details>
