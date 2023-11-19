
import React, { Dispatch, FunctionComponent } from 'react'
import { Platform, TextInput, View } from 'react-native'
import tw from '../Tailwind'
import { SearchIcon } from './Icon'

interface Props {
  value: string,
  onChange: Dispatch<string>,
  placeholder: string,
  className?: string,
  autoFocus?: boolean,
}

const SearchInput: FunctionComponent<Props> = (props: Props) => {
  return (
    <View style={tw`h-11 px-3 bg-gray-50 rounded-full border border-gray-100 flex-row gap-3 items-center ${props.className || ""}`}>
      <SearchIcon className="text-gray-500 w-4 h-4" />
      <TextInput autoFocus={props.autoFocus} style={tw`font-sf500 text-sm flex-1 h-full text-gray-900 ${Platform.OS === "android" ? "" : "leading-0"}`} placeholderTextColor="#6B7280" placeholder={props.placeholder || "Ara..."} value={props.value} onChangeText={(e) => props.onChange(e)} />
    </View>
  )
}

export default SearchInput