import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC } from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'
import { RootStackParamList } from '../App';
import Header from '../components/Header';
import tw from '../Tailwind';
import { calculatePenalty } from '../util/calculatePenalty';

interface Props extends NativeStackScreenProps<RootStackParamList, 'BookDeliverySummary'> {}

const BookDeliverySummary: FC<Props> = ({ route: { params: { contact, formData } } }) => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`px-6`}>
        <Header onPrev title={`Teslim Özeti`} />

        <View style={tw`flex-col gap-8 mt-10`}>
          <View style={tw`flex flex-row gap-6 rounded-lg px-6 py-3`}>
            <Text style={tw`font-bold text-gray-700`}>İsim Soyisim</Text>
            <Text style={tw`ml-auto`}>{`${contact.givenName} ${contact.familyName}`}</Text>
          </View>
          <View style={tw`flex flex-row gap-6 rounded-lg px-6 py-3`}>
            <Text style={tw`font-bold text-gray-700`}>Telefon Numarası</Text>
            <Text style={tw`ml-auto`}>{contact.phoneNumbers[0].number}</Text>
          </View>
          <View style={tw`flex flex-row gap-6 rounded-lg px-6 py-3`}>
            <Text style={tw`font-bold text-gray-700`}>Kitap Teslim Tarihi</Text>
            <Text style={tw`ml-auto`}>{formData.deliveryDate}</Text>
          </View>
          <View style={tw`flex flex-row gap-6 rounded-lg px-6 py-3`}>
            <Text style={tw`font-bold text-gray-700`}>Kitap Teslim Alma Tarihi</Text>
            <Text style={tw`ml-auto`}>{formData.receivingDate}</Text>
          </View>
          <View style={tw`flex flex-row gap-6 rounded-lg px-6 py-3`}>
            <Text style={tw`font-bold text-gray-700`}>Ülke</Text>
            <Text style={tw`ml-auto`}>{formData.selectedCountry}</Text>
          </View>
          <View style={tw`flex-row gap-10 justify-center`}>
            <Image source={formData.frontImage ? { uri: formData.frontImage } : require('../assets/img/camera.png')} style={[{ resizeMode: "contain" }, tw`w-28 h-28 border border-blue-100 p-2`]} />
            <Image source={formData.backImage ? { uri: formData.backImage } : require('../assets/img/camera.png')} style={[{ resizeMode: "contain" }, tw`w-28 h-28 border border-blue-100 p-2`]} />
          </View>
          <View style={tw`flex flex-row gap-6 items-center rounded-lg px-6 py-3`}>
            <Text style={tw`font-bold text-gray-700`}>Ceza Tutarı</Text>
            <Text style={tw`ml-auto text-2xl font-bold`}>{calculatePenalty(formData.selectedCountry!,formData.deliveryDate,formData.receivingDate)}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BookDeliverySummary;