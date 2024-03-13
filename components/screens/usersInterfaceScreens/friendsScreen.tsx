import React from "react";
import { SafeAreaView, Text } from "react-native";
import { Footer } from "../../../shared/footer/ui/footer";
import FriendsHeader from "../../../shared/headerApp/friendsHeader/friendsHeader";
import Header from "../../../shared/headerApp/ui/Header";
import PersonalButtonsInfo from "../../../shared/personalInfo/personalButtonInfo/ui/personalButtonInfo";
import { PersonalInfoSection } from "../../../shared/personalInfo/personalInfo";
import { UsersList } from "../../../usersList/usersList";

export const FriendsScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <FriendsHeader />
      <UsersList />
    </SafeAreaView>
  );
};
