import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactList from './router/ContactList';
import BookDelivery from './router/BookDelivery';
import BookDeliverySummary from './router/BookDeliverySummary';
import { Contact } from 'react-native-contacts';
import { FormDataModel } from './models/model';


export type RootStackParamList = {
  Contact: undefined;
  BookDelivery: undefined;
  BookDeliverySummary: { contact: Contact, formData: FormDataModel };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Contact">
        <Stack.Screen name="Contact" component={ContactList} options={{ headerShown: false }} />
        <Stack.Screen name="BookDelivery" component={BookDelivery} options={{ headerShown: false }} />
        <Stack.Screen name="BookDeliverySummary" component={BookDeliverySummary} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;