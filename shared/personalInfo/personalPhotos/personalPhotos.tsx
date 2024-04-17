import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { personalPhotos } from '../../../styles/shared/personal/personalPhotos';
import { Colors } from "../../../styles/const/colors";
import { Button } from '../../buttons/button';
import { BUTTON_VARIANT } from '../../buttons/types';
import { TEXT_VARIANT } from '../../AppText/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { EnterStackParamList } from '../../../navigation/enterNavigationStack';
import { ScreenNames } from '../../../types/screenNames';
import ImagePicker, { ImagePickerResponse } from 'react-native-image-picker';
const firstPhoto = require('../../../assets/profilePhotos1.png')
const secondPhoto = require('../../../assets/profilePhotos2.png')



const PersonalPhotos = () => {
    const navigation = useNavigation<NativeStackNavigationProp<EnterStackParamList>>();
    const [image, setImage] = useState(null); // заменить потом на диспатч в редакс в базу


    const handleRedirect = () => {
        navigation.navigate('Photos');
    };

    const handleUploadPhoto = () => {
        ImagePicker.launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (response && !response.didCancel && !response.errorCode) {
                //@ts-ignore
                const source = (response as ImagePickerResponse).uri;
                setImage(source);
            } else {
                console.log('canceled');
            }
        });
    };

    return (
        <ScrollView contentContainerStyle={personalPhotos.wrapper}>
            <Button
                style={{ marginLeft: 15, marginRight: 15, borderRadius: 20 }}
                text="UPLOAD PHOTO"
                variant={BUTTON_VARIANT.ORANGE}
                onPress={handleUploadPhoto}
                textVariant={TEXT_VARIANT.HEADER_LARGE}
            />
            <View style={personalPhotos.photoWrapper}>
                <Text style={personalPhotos.title}>My photos</Text>
                <TouchableOpacity style={personalPhotos.photosPreview} onPress={handleRedirect}>
                    <Image source={firstPhoto} style={[personalPhotos.photo, personalPhotos.firstPhoto]} />
                    <Image source={secondPhoto} style={[personalPhotos.photo, personalPhotos.secondPhoto]} />
                </TouchableOpacity>
            </View>
        </ScrollView >
    );
};

export default PersonalPhotos;
