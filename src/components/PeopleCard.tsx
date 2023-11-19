import React, { FunctionComponent, ReactElement } from 'react'
import { Image, Text, View } from 'react-native'
import tw from '../Tailwind'

interface Props {
  firstName: string,
  lastName: string,
  photoUrl?: string,
  rightSide?: ReactElement,
  leftSide?: ReactElement,
  textColor?: string,
  height?: string
}

const PeopleCard: FunctionComponent<Props> = (props: Props) => {
    
  return (
    <View style={tw`flex flex-row items-center gap-2`}>
      <Image source={props.photoUrl ? { uri: props.photoUrl } : require('../assets/img/EmptyContact.png')} style={[{ resizeMode: "contain" }, tw`${props.height ? props.height : "w-12 h-12"} border border-gray-100 p-2 rounded-full`]} />
      <View>
        <Text numberOfLines={3} style={tw`font-sf400 text-base ${props.textColor || "text-gray-800"}`}>{props.firstName} {props.lastName}</Text>
        {props.leftSide}
      </View>
      <View style={tw`ml-auto`}>
        {props.rightSide}
      </View>
    </View>
  )
}

export default PeopleCard