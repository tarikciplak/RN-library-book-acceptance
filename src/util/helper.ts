import { Contact } from "react-native-contacts";
import { ContactSection } from "../hooks/useFetchContacts";

export const groupByFirstLetter = (data: Contact[]): ContactSection[] => {

  const sortedData = data.sort((a, b) => {
    const aFirstChar = a.givenName.charAt(0).toUpperCase();
    const bFirstChar = b.givenName.charAt(0).toUpperCase();

    if (!/^[A-Za-z]+$/.test(aFirstChar)) {
      return 1;
    }
    if (!/^[A-Za-z]+$/.test(bFirstChar)) {
      return -1;
    }
    return aFirstChar.localeCompare(bFirstChar, undefined, { sensitivity: "base" });
  });

  const groupedContacts: ContactSection[] = sortedData.reduce(
    (accumulator: ContactSection[], contact: Contact) => {
      const firstLetter = contact.givenName.charAt(0).toUpperCase();

      const sectionIndex = accumulator.findIndex((section) => section.title === firstLetter);
      if (sectionIndex !== -1) {
        accumulator[sectionIndex].data.push(contact);
      } else {
        const newSection: ContactSection = {
          title: firstLetter,
          data: [contact],
        };
        accumulator.push(newSection);
      }

      return accumulator;
    },
    []
  );

  return groupedContacts;
}