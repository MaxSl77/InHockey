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
import { useAddInputsSelector } from "../../../selectors/useAddInputsSelector";

export const SignInPlayerAddScreen = () => {
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

  const addInputs = useAddInputsSelector();

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={{ flex: 1 }}>
        <HeaderLoginInSignIn />
        <View style={signInPlayerAddScreenStyle.signInWrapper}>
          <View style={signInPlayerAddScreenStyle.signInContainer}>
            <Text style={signInPlayerAddScreenStyle.nameOfScreen}>
              {modifiedText}
            </Text>
            {addInputs.map((item, index) => {
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
              text="Next"
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
