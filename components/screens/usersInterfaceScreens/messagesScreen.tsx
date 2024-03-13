import React from "react";
import { SafeAreaView, Text } from "react-native";
import { Footer } from "../../../shared/footer/ui/footer";
import Header from "../../../shared/headerApp/ui/Header";
import PersonalButtonsInfo from "../../../shared/personalInfo/personalButtonInfo/ui/personalButtonInfo";
import { PersonalInfoSection } from "../../../shared/personalInfo/personalInfo";

export const MessagesScreen = () => {
  return (
    <SafeAreaView>
      <Header />
      <PersonalInfoSection />
      <PersonalButtonsInfo />
      <Text>Welcome to the messages!</Text>
    </SafeAreaView>
  );
};
