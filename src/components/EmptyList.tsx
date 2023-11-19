import React, { FunctionComponent, ReactElement } from "react";
import { ImageBackground, Text, View } from "react-native";
import tw from "../Tailwind";
import { EmptyData } from "./Icon";

interface EmptyListProp {
  text: string,
  desc?: string,
  button?: ReactElement,
  margin?: string
  icon?: ReactElement,
  hasWhiteBackground?: boolean
}

const EmptyList: FunctionComponent<EmptyListProp> = (props: EmptyListProp) => {
  return (
    <View>
      <ImageBackground
        imageStyle={tw`rounded-2xl mx-4 bg-white`}
        source={props.hasWhiteBackground ? undefined : require('../assets/img/bg-wallpaper.png')}
        style={tw`${props.margin || "mt-10"}`}
      >
        <View style={tw`text-center p-6 mx-4 flex-col items-center`}>
          {props.icon ? props.icon : <EmptyData className="h-14 w-14" />}
          <Text style={tw`mt-6 text-gray-900 font-sf500 text-base leading-6 text-center`}>{props.text}</Text>
          <Text style={tw`mt-3 text-gray-600 font-sf400 text-sm leading-5 text-center`}>{props.desc}</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default React.memo(EmptyList);
