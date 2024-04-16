import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { footerStyle } from "../../../styles/shared/footerStyle";
import { footerSelectors } from "../selectors/footerSelectors";

export function Footer() {
  const footerArray = footerSelectors();

  return (
    <View style={footerStyle.container}>
      <View style={footerStyle.buttonsWrapper}>
        {footerArray.map((item, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => {}}>
              <Image source={item.sourse} alt={item.alt} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
// Images need to be buttons
