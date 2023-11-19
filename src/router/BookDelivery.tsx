import React, { FC, useState } from 'react'
import { Alert, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Contact } from 'react-native-contacts';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CameraModal from '../components/CameraModal';
import Header from '../components/Header';
import tw from '../Tailwind';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { CountryType, DateType, FormDataModel, PhotoType } from '../models/model';

type Params = {
  route: {
    params: Contact
  }
}

const BookDelivery: FC<any> = ({ route: { params } }: Params) => {

  const navigation = useNavigation();

  const [formData, setFormData] = useState<FormDataModel>({
    deliveryDate: '-',
    receivingDate: '-',
    selectedCountry: null,
    frontImage: null,
    backImage: null,
  });

  const [isDatePickerVisible, setDatePickerVisibility] = useState<{ status: boolean, dateType: DateType }>({ status: false, dateType: "deliveryDate" });
  const [isCameraModalVisible, setCameraModalVisible] = useState<{ status: boolean, photoType: PhotoType }>({ status: false, photoType: "frontImage" });

  const showDatePicker = (dateType: DateType) => {
    setDatePickerVisibility({ status: true, dateType });
  };

  const hideDatePicker = (dateType: DateType) => {
    setDatePickerVisibility({ status: false, dateType });
  };

  const handleConfirm = (date: Date, dateType: DateType) => {
    setFormData({ ...formData, [dateType]: date.toDateString() });
    hideDatePicker(dateType);
  };

  const openCameraModal = (photoType: PhotoType) => {
    setCameraModalVisible({ status: true, photoType });
  };

  const closeCameraModal = (photoType: PhotoType) => {
    setCameraModalVisible({ status: false, photoType });
  };

  const handlePictureTaken = (uri: string, photoType: PhotoType) => {
    setFormData({ ...formData, [photoType]: uri });
    closeCameraModal(photoType);
  };

  const handleSelectCountry = (country: CountryType) => {
    setFormData({ ...formData, selectedCountry: country });
  }

  const handleReceive = () => {

    if (!formData.deliveryDate || !formData.receivingDate || !formData.selectedCountry || !formData.frontImage || !formData.backImage) {
      Alert.alert('Eksik form', 'Lütfen tüm gerekli bilgileri doldurun.', [
        {
          text: 'İptal',
          onPress: () => console.log('Cancel Pressed'),
        },
        { text: 'Tamam', onPress: () => console.log('OK Pressed') },
      ]);

      return;
    }

    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          { name: "Contact" },
          { name: "BookDeliverySummary", params: { contact: params, formData } }
        ],
      })
    );

  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`px-6`}>
        <Header onPrev title={`${params.givenName} ${params.familyName}`} />

        <ScrollView>
          <View style={tw`flex flex-col gap-10 mt-10`}>
            <TouchableOpacity onPress={() => { showDatePicker('deliveryDate'); }} style={tw`flex flex-row gap-6 border border-blue-300 rounded-lg px-6 py-3`}>
              <Text style={tw`font-bold text-blue-500`}>Kitap Teslim Tarihi</Text>
              <Text style={tw`ml-auto`}>{formData.deliveryDate}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { showDatePicker('receivingDate'); }} style={tw`flex flex-row gap-6 border border-blue-300 rounded-lg px-6 py-3`}>
              <Text style={tw`font-bold text-blue-500`}>Kitap Teslim Alma Tarihi</Text>
              <Text style={tw`ml-auto`}>{formData.receivingDate}</Text>
            </TouchableOpacity>
            <View style={tw`flex flex-col gap-6 border border-blue-300 rounded-lg px-6 py-3`}>
              <Text style={tw`font-bold text-blue-500`}>Ülke Seçimi</Text>
              <View style={tw`flex-row justify-between px-6`}>
                <TouchableOpacity onPress={() => { handleSelectCountry("Turkey"); }} style={tw`py-2 px-6 border rounded-lg ${formData.selectedCountry === "Turkey" ? "border-blue-300" : "border-blue-100"}`}>
                  <Text>Türkiye</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { handleSelectCountry("Germany"); }} style={tw`py-2 px-6 border rounded-lg ${formData.selectedCountry === "Germany" ? "border-blue-300" : "border-blue-100"}`}>
                  <Text>Germany</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={tw`flex-row gap-2`}>
              <TouchableOpacity onPress={() => { openCameraModal("frontImage"); }} style={tw`flex flex-col gap-6 border border-blue-300 rounded-lg px-6 py-3`}>
                <Text style={tw`font-bold text-blue-500`}>Ön yüz fotoğraf</Text>
                <Image source={formData.frontImage ? { uri: formData.frontImage } : require('../assets/img/camera.png')} style={[{ resizeMode: "contain" }, tw`w-28 h-28 border border-blue-100 p-2`]} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { openCameraModal("backImage"); }} style={tw`flex flex-col gap-6 border border-blue-300 rounded-lg px-6 py-3`}>
                <Text style={tw`font-bold text-blue-500`}>Arka yüz fotoğraf</Text>
                <Image source={formData.backImage ? { uri: formData.backImage } : require('../assets/img/camera.png')} style={[{ resizeMode: "contain" }, tw`w-28 h-28 border border-blue-100 p-2`]} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={handleReceive} style={tw`bg-blue-500 rounded-lg w-full py-2 mt-6`}>
              <Text style={tw`text-lg font-medium text-white text-center`}>Teslim Al</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <DateTimePickerModal
          locale='tr_TR'
          isVisible={isDatePickerVisible.status}
          mode="date"
          maximumDate={new Date()}
          minimumDate={isDatePickerVisible.dateType === "receivingDate" ? new Date(formData.deliveryDate) : undefined}
          onConfirm={(e) => { handleConfirm(e, isDatePickerVisible.dateType); }}
          onCancel={() => { hideDatePicker(isDatePickerVisible.dateType); }}
        />
        <CameraModal
          isVisible={isCameraModalVisible.status}
          onClose={() => { closeCameraModal(isCameraModalVisible.photoType); }}
          onPictureTaken={(e) => { handlePictureTaken(e, isCameraModalVisible.photoType); }}
        />
      </View>
    </SafeAreaView>
  )
}

export default BookDelivery