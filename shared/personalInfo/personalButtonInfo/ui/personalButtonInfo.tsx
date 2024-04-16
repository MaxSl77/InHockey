import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { personalButtonInfoStyle } from "../../../../styles/shared/personalButtonIfoStyle";
import { personalButtonInfoSelectors } from "../selectors/personalButtonInfoSelectors";

export default function PersonalButtonsInfo() {
  const  personalButtonInfo = personalButtonInfoSelectors();
  return (
    <View style={personalButtonInfoStyle.buttonsWrapper}>
      { personalButtonInfo.map((item, index) => {
        return (
          <TouchableOpacity key={index}>
            <Image source={item.sourse} alt={item.alt} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
// Images need to be buttons