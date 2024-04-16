import React, { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { personalButtonInfoStyle } from "../../../../styles/shared/personal/personalButtonIfoStyle";
import { personalButtonInfoSelectors, personalButtonInfoType } from "../selectors/personalButtonInfoSelectors";

export interface PersonalButtonProps {
  activeTab: string,
  onChange: (activeTab: string) => void
}


export default function PersonalButtonsInfo(props: PersonalButtonProps) {
  const personalButtonInfo = personalButtonInfoSelectors();


  const handlePress = (item: personalButtonInfoType) => {
    props.onChange(item.name)
  }

  return (
    <View style={personalButtonInfoStyle.buttonsWrapper}>
      {personalButtonInfo.map((item, index) => {
        return (
          <TouchableOpacity key={index} onPress={() => handlePress(item)}>
            {props.activeTab === item.name ? (
              <Image source={item.activeSource} alt={item.alt} />
            ) : (
              <Image source={item.sourse} alt={item.alt} />
            )}

          </TouchableOpacity>
        );
      })}
    </View>
  );
}
