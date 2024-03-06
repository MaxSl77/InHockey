import React, { useState } from "react";
import {
  Keyboard,
  Linking,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { TEXT_VARIANT } from "../../../../../../shared/AppText/types";
import { Button } from "../../../../../../shared/buttons/button";
import { BUTTON_VARIANT } from "../../../../../../shared/buttons/types";
import { HeaderLoginInSignIn } from "../../../../../../shared/headerLoginSignIn/headerLoginSignIn";
import { Inputs } from "../../../../../../shared/inputs/input";
import { INPUT_VARIANT } from "../../../../../../shared/inputs/types";
import { signInPlayerAddScreenStyle } from "../../../../../../styles/screens/signInPlayerAddScreenStyle";
import { signInPlayerSecondAddScreenStyle } from "../../../../../../styles/screens/signInPlayerSecondAddScreenStyle";
import { useSecondAddInputsSelector } from "../../../selectors/useSecondAddInputsSelector";

export const SignInPlayerSecondAddScreen = () => {
  const text = "signup";
  const modifiedText =
    text.charAt(0).toUpperCase() +
    text.charAt(1) +
    text.charAt(2) +
    text.charAt(3) +
    text.charAt(4).toUpperCase() +
    text.slice(5);

  //   const [inputValue, setInputValue] = useState("1");

  const handlePress = () => {
    Linking.openURL("#");
  };

  const [email, setEmail] = useState("");

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const secondAddInputs = useSecondAddInputsSelector();

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={{ flex: 1 }}>
        <HeaderLoginInSignIn />
        <View style={signInPlayerSecondAddScreenStyle.signInWrapper}>
          <View style={signInPlayerSecondAddScreenStyle.signInContainer}>
            <Text style={signInPlayerSecondAddScreenStyle.nameOfScreen}>
              {modifiedText}
            </Text>
            {secondAddInputs.map((item, index) => {
              return (
                <Inputs
                  placeholder={item.placeholder}
                  variant={item.variant}
                  style={item.style}
                  onChangeText={item.onChangeText}
                  key={index}
                />
              );
            })}
            <Button
              style={{ marginLeft: 15, marginRight: 15 }}
              text="Go"
              variant={BUTTON_VARIANT.BLUE}
              onPress={() => {}}
              textVariant={TEXT_VARIANT.HEADER_LARGE}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
