import { useNavigation } from '@react-navigation/native'
import React, { FunctionComponent, ReactElement } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import tw from '../Tailwind'
import { CaretLeftIcon } from './Icon'

interface Props {
    title: string,
    onPrev?: boolean,
    hasSearch?: boolean,
    button?: ReactElement,
    searched?: string
}

const Header: FunctionComponent<Props> = (props: Props) => {

    const navigation = useNavigation();

    return (
        <View style={tw`flex-row h-14 justify-between items-center bg-white-900 shadow-sm`}>
            <View style={tw`flex-row items-center`}>
                {props.onPrev &&
                    <TouchableOpacity hitSlop={{ top: 60, bottom: 20, left: 60, right: 120 }} style={tw`mr-4`} onPress={() => { navigation.goBack(); }}>
                        <CaretLeftIcon className='text-blue-500 w-6 h-6' />
                    </TouchableOpacity>
                }
                <Text style={tw`font-sf500 text-gray-900 text-xl leading-6`}>{props.title}</Text>
            </View>
            {props.button}
        </View >
    )
}

export default Header