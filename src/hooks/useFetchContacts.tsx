import { useEffect, useState } from 'react'
import { Contact, default as contact, requestPermission } from 'react-native-contacts';
import { groupByFirstLetter } from '../util/helper';

export interface ContactSection {
  title: string;
  data: Contact[];
}

const useFetchContacts = () => {

  //#region State

  const [contactList, setContactList] = useState<Contact[]>([]);

  const [contactSections, setContactSections] = useState<ContactSection[]>([]);

  //#endregion

  //#region Func

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    if (await requestPermission()) {
      contact.getAll().then((contacts: Contact[]) => {
  
        const groupedContacts = groupByFirstLetter(contacts);

        setContactList(contacts);
        setContactSections(groupedContacts);
      }).catch((error: Error) => {
        console.log(error);
      });
    }
  };

  //#endregion

  return (
    {
      contactList: contactList,
      groupedContactList: contactSections,
      fetchContacts: fetchContacts
    }
  )
}

export default useFetchContacts;