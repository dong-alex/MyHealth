# MyHealth Home Assistant: HackED 2019

## Overview

User <---> Home/Alexa <---> Doctor

Home/Alexa <---> Doctor Object | | <---> Medical API (if no result from Doctor Object)

Home/Alexa interfaces with the Doctor object and a Medical API to fulfill the following requests:

1. USER *asks* HOME/ALEXA for HEALTHINFO (Medical API)
- "What is X", given X is a medication/condition not present in the Doctor object
2. USER *asks* HOME/ALEXA for CURRENT MEDICATION (Doctor object)
- "What medication am I taking?"
3. USER *asks* HOME/ALEXA for HEALTH NOTES (Doctor object)
- "What is my medical condition?"; this feature is especially useful for having precise records of concerns discussed during appointments/notes made by the doctor 
4. USER *tells* HOME/ALEXA about MEDICATION TAKEN (Doctor object)
- "I took X"; Home/Alexa should note the time and cross-reference current medications for i) the medication the user says they just took; ii) outstanding medications that still need to be taken; iii) medication frequency (is the user taking the medication on time)?
5. DOCTOR *updates* CURRENT MEDICATION and *notifies* user of change (Doctor object) 
- Doctor adjusts medication frequency; during next conversation, Home/Alexa must notify the user of changes and receive and acknowledgement 

**Each patient must be assigned a unique identifier (password protected) encapsulating the patient's medical information (security is a key concern with the system implementation)**

## Doctor Object

Contains all of the data specific to the patient. If a patient request to Home/Alexa cannot find the request data in the Doctor Object, the request will be thrown to a Medical API.

### Patient 
- Patient ID (Unique identifier)
- Password (this should not be stored as plaintext!)
- First Name
- Last Name
- Doctor ID(s)
- Patient Notes

### Doctor
- Doctor ID (Unique identifier)
- Password
- First Name
- Last Name
- Patient IDs

### Medication
- Patient ID
- Drug Name
- Dosage Frequency
- Last Taken (timestamp)
- Upcoming dosage (timestamp)
- Prescribed by (Doctor ID)