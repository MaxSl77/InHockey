import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { personalPhotos } from '../../../styles/shared/personal/personalPhotos';
import { Colors } from "../../../styles/const/colors";
import { Button } from '../../buttons/button';
import { BUTTON_VARIANT } from '../../buttons/types';
import { TEXT_VARIANT } from '../../AppText/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { EnterStackParamList } from '../../../navigation/enterNavigationStack';
import { ScreenNames } from '../../../types/screenNames';

interface PersonalPhotosType {
    navigation?: NativeStackNavigationProp<EnterStackParamList>;
}

const PersonalPhotos = ({ navigation }: PersonalPhotosType) => {
    // const { navigate } = props.navigation;

    // const goToPhotosScreen = () => {
    //     navigate(ScreenNames.PHOTOS);
    // };

    useEffect(() => {
        console.log(navigation)
    })

    return (
        <ScrollView contentContainerStyle={personalPhotos.wrapper}>
            <Button
                style={{ marginLeft: 15, marginRight: 15, borderRadius: 20 }}
                text="UPLOAD PHOTO"
                variant={BUTTON_VARIANT.ORANGE}
                onPress={() => console.log('123')}
                textVariant={TEXT_VARIANT.HEADER_LARGE}
            />
            <View>
                <Text></Text>
            </View>
        </ScrollView >
    );
};

export default PersonalPhotos;
