# HealthConnect – Community Healthcare Outreach Platform

**Cognizant 2027 NPN Salesforce Hackathon | Team 51**

**Developed by:** Yegishetty Anjali  
**Role:** Team Lead  
**Institution:** Vidya Jyothi Institute of Technology, Hyderabad  
**Department:** Information Technology

---

## Project Overview

HealthConnect is a Salesforce-based Community Healthcare Outreach Platform designed to simplify patient registration, community health screenings, doctor reviews, care-plan management, and follow-up tracking.

The application connects healthcare workers, doctors, administrators, and patients through a centralized Salesforce system.

The key innovation is the **CareLoop Recovery Queue**, which helps healthcare workers identify and prioritize upcoming and overdue patient follow-ups.

## Problem Statement

Community healthcare programs often face difficulties managing patient information, coordinating doctor reviews, and tracking follow-up care.

Manual processes can lead to delayed reviews, missed follow-ups, and limited visibility into pending healthcare activities.

HealthConnect addresses these challenges through centralized healthcare records, automated workflows, follow-up prioritization, and patient self-service.

## Key Features Implemented

### 1. Patient Registration
- Register and manage patients using Salesforce Contact records.
- Maintain patient information in a centralized system.
- Link patients to healthcare assessments and care plans.

### 2. Community Outreach Visits
- Record healthcare camps and outreach activities.
- Maintain visit dates, locations, and assigned health workers.
- Associate health assessments with outreach visits.

### 3. Health Assessments
- Record blood pressure, blood sugar, symptoms, and assessment dates.
- Identify assessments requiring doctor review.
- Apply validation rules to improve data accuracy.

### 4. Automated Doctor Reviews
- Use Salesforce Record-Triggered Flows to process assessments requiring review.
- Automatically create related Doctor Review records.
- Store medical recommendations and follow-up decisions.

### 5. Automated Care Plan Creation
- Create Care Plans when follow-up care is required.
- Associate Care Plans with patients and Doctor Reviews.
- Track follow-up due dates, assigned healthcare workers, and completion status.

### 6. CareLoop Recovery Queue
The main differentiating feature of HealthConnect.

- Organizes pending healthcare follow-ups by priority.
- Identifies critical overdue, high-priority overdue, due-soon, and upcoming follow-ups.
- Helps healthcare workers focus on unresolved care activities.
- Uses Salesforce priority fields, list views, and custom Apex priority calculation logic.

### 7. Automated Follow-up Reminders
- Scheduled Salesforce Flow processes upcoming and overdue follow-ups.
- Generates Reminder Log records.
- Supports Salesforce notifications for assigned healthcare workers.
- Includes duplicate-reminder checks and error-handling paths.

### 8. Quick Health Screening – Lightning Web Component
A custom LWC developed for updating health assessment information.

- Provides a user-friendly screening form.
- Supports editing blood pressure, blood sugar, and symptoms.
- Updates the current Health Assessment record.
- Uses HTML, JavaScript, and Salesforce Lightning Web Components.

### 9. Experience Cloud Patient Portal
- Published patient-facing portal using Salesforce Experience Cloud.
- Authenticated patient login.
- My Care Plans and My Follow-ups navigation.
- Support page.
- Patient access managed using profiles, permission sets, and sharing configurations.

### 10. Reports and Dashboards
A seven-component Salesforce dashboard for monitoring healthcare operations, including:

- Patient registrations
- Outreach visit summary
- Health assessment summary
- Doctor review summary
- Care Plan status
- Pending and overdue follow-ups
- Reminder processing status

## End-to-End Project Workflow

**Patient Registration → Outreach Visit → Health Assessment → Doctor Review → Care Plan → Follow-up Reminders → CareLoop Recovery Queue → Patient Portal → Reports and Dashboards**

The workflow connects patient screening, medical review, follow-up planning, and healthcare monitoring within Salesforce.

## Technology Stack

| Layer | Technologies |
|---|---|
| Platform | Salesforce Developer Edition |
| Internal Frontend | Salesforce Lightning Experience |
| Custom Frontend | Lightning Web Components, HTML, JavaScript |
| External Frontend | Salesforce Experience Cloud |
| Backend | Salesforce Flows, Apex |
| Database | Salesforce Standard and Custom Objects |
| Automation | Record-Triggered Flows, Scheduled Flows |
| Security | Profiles, Permission Sets, Sharing Settings |
| Reporting | Salesforce Reports and Dashboards |
| Development Tools | VS Code, Salesforce CLI |
| Version Control | Git and GitHub |

## Salesforce Data Model

The application uses the Salesforce Contact object and related custom objects.

**Core records:**
- Contact – Patient registration
- Outreach Visit – Community healthcare visits
- Health Assessment – Screening observations
- Doctor Review – Medical recommendations
- Care Plan – Follow-up care management
- Reminder Log – Follow-up reminder tracking

Relationships connect patients with their assessments, reviews, care plans, and follow-up activities.

## Salesforce Automation

The project includes these retrieved Salesforce Flows:

1. `Health_Assessment_Review_Routing`
2. `HealthConnect_Auto_Create_Doctor_Review`
3. `Doctor_Review_Auto_Create_Care_Plan`
4. `CareLoop_Daily_Follow_up_Reminders`

These support assessment routing, automatic record creation, and follow-up reminder processing.

## Apex Development and Testing

**Apex Class:** `CareLoopPriorityCalculator.cls`

Implements custom priority calculation logic for healthcare follow-ups.

**Test Class:** `CareLoopPriorityCalculatorTest.cls`

The `testAllPriorities` test method was executed successfully in Salesforce, with a **Pass** result.

The project also underwent manual functional testing of patient registration, assessment routing, Care Plan creation, CareLoop prioritization, and patient portal access.

## Repository Structure

The currently retrieved Salesforce DX source includes:

- `force-app/main/default/classes/` – Apex class and test class
- `force-app/main/default/flows/` – Salesforce automation Flows
- `force-app/main/default/lwc/quickScreeningForm/` – Quick Health Screening component
- `config/` – Salesforce project configuration
- `scripts/` – Salesforce DX utility scripts
- `sfdx-project.json` – Salesforce DX project configuration

**Note:** This repository contains selected retrieved Salesforce metadata. Additional organization configuration, including relevant custom object definitions, security settings, dashboards, and Experience Cloud metadata, may need to be retrieved before the project can be deployed into a new Salesforce organization.

## Project Status

- Salesforce application developed and functionally tested.
- Core healthcare workflow implemented.
- CareLoop priority logic and Apex test verified.
- Follow-up reminder automation configured.
- Experience Cloud Patient Portal published in the development organization.
- Salesforce DX source being organized for GitHub version control.

The application runs in a Salesforce Developer Edition environment. GitHub hosts the project source code, not the running Salesforce application.

## Future Enhancements

- Dedicated immunization tracking and reminder automation.
- Routine preventive check-up reminders.
- Direct patient notifications.
- Appointment scheduling and management.
- Additional integrations and advanced healthcare analytics.

## My Contribution

As Team Lead of Team 51, my work focused on developing and testing the HealthConnect solution in my Salesforce Developer Edition environment, including:

- Salesforce application configuration and data modeling
- Healthcare workflow automation using Salesforce Flows
- CareLoop Recovery Queue and follow-up prioritization
- Apex development and unit testing
- Lightning Web Component implementation
- Experience Cloud Patient Portal configuration
- Security settings and access management
- Reports, dashboards, testing, and documentation

## Conclusion

HealthConnect demonstrates how Salesforce can support community healthcare outreach through centralized patient information, workflow automation, follow-up prioritization, and patient self-service.

The CareLoop Recovery Queue adds value by helping healthcare workers identify unresolved follow-ups and prioritize timely care.

---

**Developed by Yegishetty Anjali**  
**Team 51 – HealthConnect**  
**Cognizant 2027 NPN Salesforce Hackathon**