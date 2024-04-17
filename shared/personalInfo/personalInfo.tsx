import React, { useEffect, useState } from "react";
import { Avatar, List } from "react-native-paper";
import { View, Text, Image } from "react-native";
import { personalInfoStyle } from "../../styles/shared/personal/personalInfoStyle";
import PersonalButtonsInfo from "./personalButtonInfo/ui/personalButtonInfo";
import profileData from "./mock/profile.json";
import PersonalFacts from './personalFacts/personalFacts'
import { ScreenNames } from '../../types/screenNames'
import PersonalHockeyStick from "./personalHockeyStick/personalHockeyStick";
import PersonalPhotos from "./personalPhotos/personalPhotos";
import PersonalMessages from './personalMessages/personalMessages'


export function PersonalInfoSection() {
  const defaultActiveTab = ScreenNames.PROFILE_STATS
  const [activeTab, setActiveTab] = useState<string>(defaultActiveTab);

  const handleButtonChange = (item: string) => {
    setActiveTab(item);
  };

  return (
    <View style={personalInfoStyle.headerWrapper}>
      <View style={personalInfoStyle.personInfoWrapper}>
        <List.Item
          style={personalInfoStyle.profileInfo}
          title={(props) => (
            <Text style={personalInfoStyle.profileName}>
              {profileData.name}
              <Image
                style={personalInfoStyle.iconPlayer}
                source={require("../../assets/iconPlayer.png")}
                alt="image"
              />
            </Text>
          )}
          description={() => (
            <Text style={personalInfoStyle.profileFriendsCount}>
              {profileData.friendsCount} friends
            </Text>
          )}
          left={(props) => (
            <Avatar.Image
              size={100}
              source={{ uri: profileData.avatar }}
              style={personalInfoStyle.avatarImage}
            />
          )}
        />
        <Image
          style={personalInfoStyle.imageaddFriend}
          source={require("../../assets/add_friend.png")}
          alt="image"
        />
      </View>
      <PersonalButtonsInfo onChange={handleButtonChange} activeTab={activeTab} />
      {activeTab === ScreenNames.PROFILE_STATS ? (
        <PersonalFacts />
      ) : activeTab === ScreenNames.PROFILE_HOCKEYSTICK ? (
        <PersonalHockeyStick />
      ) : activeTab === ScreenNames.PROFILE_PHOTOS ? (
        <PersonalPhotos />
      ) : activeTab === ScreenNames.PROFILE_MESSAGES && (
        <PersonalMessages />
      )}
    </View>
  );
}
