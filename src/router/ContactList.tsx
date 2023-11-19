import React, { useState, useMemo, useCallback, FC } from "react";
import { Contact } from "react-native-contacts";
import { TouchableOpacity, Text, View, SectionList, SafeAreaView } from "react-native";
import { useDebounce } from "../hooks/useDebounce";
import useFetchContacts, { ContactSection } from "../hooks/useFetchContacts";
import tw from "../Tailwind";
import PeopleCard from "../components/PeopleCard";
import SearchInput from "../components/SearchInput";
import { useNavigation } from '@react-navigation/native';

const ContactList: FC = () => {

  const { groupedContactList } = useFetchContacts();

  const navigation = useNavigation();

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
        <TouchableOpacity onPress={() => { navigation.navigate("BookDelivery" as never, item as never); }} style={tw`py-1`}>
          <PeopleCard key={item.recordID} photoUrl={item.thumbnailPath} firstName={item.givenName} lastName={item.familyName} />
        </TouchableOpacity>
      )
    }, [])

  const renderSectionHeader = useCallback(
    ({ section: { title } }: { section: { title: string } }) => (
      <Text style={tw`text-blue-500 font-sf500 text-sm leading-5 py-1 bg-gray-25`}>{title}</Text>
    ), []);

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`-pb-14 px-4`}>
        <SearchInput value={searchText} onChange={setSearchText} placeholder={"Ara..."} className="mt-2 mb-4" />
        <SectionList
          sections={filteredContacts(groupedContactList)}
          renderItem={renderContact}
          renderSectionHeader={renderSectionHeader}
          maxToRenderPerBatch={10}
          keyExtractor={(item) => item.recordID}
        />
      </View>
    </SafeAreaView>
  )
}

export default ContactList;