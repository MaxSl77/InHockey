import React from "react";
import { Avatar, List } from "react-native-paper";
import { View, Text, Image } from "react-native";
import { personalInfoStyle } from "../../styles/shared/personalInfoStyle";

export function PersonalInfoSection() {
  return (
    <View style={personalInfoStyle.headerWrapper}>
      <View style={personalInfoStyle.personInfoWrapper}>
        <List.Item
          style={personalInfoStyle.profileInfo}
          title={(props) => (
            <Text style={personalInfoStyle.profileName}>
              Maksim Slabko
              <Image
                style={personalInfoStyle.iconPlayer}
                source={require("../../assets/iconPlayer.png")}
                alt="image"
              />
            </Text>
          )}
          description={() => (
            <Text style={personalInfoStyle.profileFriendsCount}>
              247 friends
            </Text>
          )}
          left={(props) => (
            <Avatar.Image
              size={100}
              source={require("../../assets/avatar.jpg")}
              style={personalInfoStyle.avatarImage}
            />
          )}
        />
        <Image
          style={personalInfoStyle.imageaddFriend}
          source={require("../../assets/add_friend.png")}
          alt="image"
        />
        {/* need to be button */}
      </View>
    </View>
  );
}
