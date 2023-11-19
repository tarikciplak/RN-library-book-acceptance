# Project Overview

This repository has been developed based on a business entry case provided by a company, within a limit of 4 hours. Along with the deployment time, it took **4 hours and 50 minutes**. I will share the case documents below.

## Information Collection Application

### Requirements

1. **Data Collection:**
    - **a. Selection of the person delivering the book via the Contact List.**
    - **b. Date of book delivery.**
    - **c. Date of book receipt.**
    - **d. Selection of the country (at least two different countries).**
    - **e. Front and back photos of the delivered book.**
    - **f. Summary screen displaying all entered information.**
    - **g. Receipt button.**

2. **Calculation:**
    - **a. Number of working days.**
    - **b. Penalty amount.**

### Penalty Calculation

3. **Penalty Criteria:**
    - **a. Calculation based on working days between receipt and delivery.**
    - **b. Consider weekends and public holidays for each country.**
    - **c. Avoid hardcoding these assumptions; make them configurable.**
    - **d. Manual update of values via database or xml/json configuration files.**
    - **e. Use a custom algorithm for working day calculations.**

4. **Delivery Timeframe:**
    - **a. Book must be delivered within 10 working days.**
    - **b. Delay incurs a penalty of 5.00 ₺ (currency varies per country).**
    - **c. Penalty amount in decimal format to show fractions.**

5. **Monetary Representation:**
    - **Ensure displayed monetary values adhere to the appropriate format.**
