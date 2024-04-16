import React, { useState } from "react";
import {
  Linking,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import { TEXT_VARIANT } from "../../../../../../shared/AppText/types";
import { Button } from "../../../../../../shared/buttons/button";
import { BUTTON_VARIANT } from "../../../../../../shared/buttons/types";
import { HeaderLoginInSignIn } from "../../../../../../shared/headerLoginSignIn/headerLoginSignIn";
import { Inputs } from "../../../../../../shared/inputs/input";
import { signInPlayerBaseScreenStyle } from "../../../../../../styles/screens/signInPlayerBaseScreenStyle";
import { useBaseInputsSelector } from "../../../selectors/useBaseInputsSelector";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { EnterStackParamList } from "../../../../../../navigation/enterNavigationStack";
import { ScreenNames } from "../../../../../../types/screenNames";
import { RouteProp } from "@react-navigation/native";

interface SignInPlayerBaseScreenProps {
  navigation: NativeStackNavigationProp<EnterStackParamList>;
  route: RouteProp<EnterStackParamList, ScreenNames.SIGN_IN_PLAYER_BASE>;
}

export const SignInPlayerBaseScreen = ({navigation, route}: SignInPlayerBaseScreenProps) => {
  const { navigate } = navigation;

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
  const inputsSelector = useBaseInputsSelector();

  const goToSignInPlayerAdditionalScreen = () => {
    navigate(ScreenNames.SIGN_IN_PLAYER_ADDITTIONAL);
  };

  const goToLogInScreen = () => {
    navigate(ScreenNames.LOG_IN);
  };

  return (
    <SafeAreaView>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={false}
      >
        <View>
          <HeaderLoginInSignIn />
          <View style={signInPlayerBaseScreenStyle.signInWrapper}>
            <View style={signInPlayerBaseScreenStyle.signInContainer}>
              <Text style={signInPlayerBaseScreenStyle.nameOfScreen}>
                {modifiedText}
              </Text>
              {inputsSelector.map((item, index) => {
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
                onPress={goToSignInPlayerAdditionalScreen}
                textVariant={TEXT_VARIANT.HEADER_LARGE}
              />
              <Text style={signInPlayerBaseScreenStyle.or}>or</Text>
              <Button
                style={{ marginLeft: 15, marginRight: 15 }}
                text="Login"
                variant={BUTTON_VARIANT.ORANGE}
                onPress={goToLogInScreen}
                textVariant={TEXT_VARIANT.HEADER_LARGE}
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
