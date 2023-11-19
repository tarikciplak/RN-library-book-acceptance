import React, { useState, useMemo, useCallback, FC } from "react";
import { Contact } from "react-native-contacts";
import { TouchableOpacity, Text, View, SectionList } from "react-native";
import { useDebounce } from "../hooks/useDebounce";
import useFetchContacts, { ContactSection } from "../hooks/useFetchContacts";
import tw from "../Tailwind";
import EmptyList from "./EmptyList";
import PeopleCard from "./PeopleCard";
import SearchInput from "./SearchInput";

const ContactList: FC = () => {

  const { groupedContactList } = useFetchContacts();

  const [searchText, setSearchText] = useState<string>('');

  const debouncedValue = useDebounce<string>(searchText, 200);

  const filteredContacts = useMemo(() =>
    (data: ContactSection[]) => {
      let filteredByTitle: ContactSection[] = [];
      let filteredUsers: Contact[] = [];

      filteredByTitle = data.filter((user) =>
        user.title.toLowerCase().includes(debouncedValue.toLowerCase()[0] ?? '')
      );

      if (debouncedValue.length > 1) {
        filteredByTitle = filteredByTitle.filter((section) => {
          filteredUsers = section.data.filter((user) =>
            user.givenName.toLowerCase().includes(debouncedValue.toLowerCase())
          );
        });
      }

      if (filteredUsers.length >= 1) {
        return [{
          title: debouncedValue[0],
          data: filteredUsers
        }]
      } else {
        return filteredByTitle;
      }

    }, [debouncedValue]);

  const renderContact = useCallback(
    ({ item }: { item: Contact }) => {

      return (
        <TouchableOpacity onPress={() => { }} style={tw`py-1`}>
          <PeopleCard key={item.recordID} photoUrl={item.thumbnailPath} firstName={item.givenName} lastName={item.familyName} />
        </TouchableOpacity>
      )
    }, [])

  const renderSectionHeader = useCallback(
    ({ section: { title } }: { section: { title: string } }) => (
      <Text style={tw`text-blue-500 font-sf500 text-sm leading-5 py-1 bg-gray-25`}>{title}</Text>
    ), []);

  return (
    <View style={tw`flex-1 -pb-14 bg-white px-4`}>
      <SearchInput value={searchText} onChange={setSearchText} placeholder={"Ara..."} className="mt-2 mb-4" />
      <SectionList
        sections={filteredContacts(groupedContactList)}
        renderItem={renderContact}
        ListEmptyComponent={<EmptyList margin='mt-20' text={""} desc={""} icon={<Text style={tw`text-4xl`}>💌</Text>} />}
        renderSectionHeader={renderSectionHeader}
        maxToRenderPerBatch={10}
        keyExtractor={(item) => item.recordID}
      />
    </View>
  )
}

export default ContactList;