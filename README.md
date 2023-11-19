This repository has been developed based on a business entry case provided by a company, within a limit of 4 hours. Along with the deployment time, it took 4 hours and 50 minutes. I will share the case documents below.


1- An application should be developed to collect the following information from the user:
a. Selection of the person delivering the book via the Contact List.
b. Date of book delivery.
c. Date of book receipt.
d. Selection of the country (at least two different countries).
e. Front and back photos of the delivered book.
f. Summary screen displaying all entered information.
g. Receipt button.

2- The application should calculate the following information:
a. Number of working days.
b. Penalty amount.

3- The penalty amount should be calculated based only on the working days between the date of receipt and the date of delivery, inclusive of these dates.
a. The calculation should consider weekends and public holidays specifically configured for each country.
b. Remember that some countries have different working days and weekends. For example, in the United Arab Emirates, the weekend is Friday and Saturday, while in Turkey, it is Saturday and Sunday.
c. Do not hardcode these assumptions (weekends and public holidays) in your development; they should be configurable.
d. Do not provide a screen to edit these values. It should be sufficient to manually update these values (via database or xml/json configuration files).
e. You must use your own algorithm to calculate the number of working days.

4- The book received must be delivered within 10 working days. Any delay beyond 10 working days will be considered a delay.
a. Each day of delay will incur a penalty of 5.00 ₺ (the currency of the selected country).
b. The currency and penalty are specific to the selected country and may vary for each country.
c. The penalty amount should be a decimal value to show fractions like kuruş/cents.

5- Any displayed monetary value on the screen must adhere to the appropriate format.
