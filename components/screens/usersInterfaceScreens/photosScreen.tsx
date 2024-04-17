import React from "react";
import { SafeAreaView, Text } from "react-native";
import { BottomTabStack } from "../../../navigation/bottomTabNavigationStack";
import { Footer } from "../../../shared/footer/ui/footer";
import Header from "../../../shared/headerApp/ui/Header";
import PersonalButtonsInfo from "../../../shared/personalInfo/personalButtonInfo/ui/personalButtonInfo";
import { PersonalInfoSection } from "../../../shared/personalInfo/personalInfo";
import Photos from "../../../shared/photos/photos";

export const PhotosScreen = () => {
    return (
        <SafeAreaView>
            <Header />
            <Photos />
        </SafeAreaView>
    );
};
