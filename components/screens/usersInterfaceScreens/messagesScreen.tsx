import React from "react";
import { SafeAreaView, Text } from "react-native";
import { Footer } from "../../../shared/footer/ui/footer";
import Header from "../../../shared/headerApp/ui/Header";
import PersonalButtonsInfo from "../../../shared/personalInfo/personalButtonInfo/ui/personalButtonInfo";
import { PersonalInfoSection } from "../../../shared/personalInfo/personalInfo";
import { MessagesItemList } from "../../../shared/messages/ui/messageItemList/messageItemList";

export const MessagesScreen = () => {
  return (
    <SafeAreaView>
      <Header />
      <MessagesItemList />
    </SafeAreaView>
  );
};
