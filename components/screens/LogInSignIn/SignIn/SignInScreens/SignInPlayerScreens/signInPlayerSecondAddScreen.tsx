import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  Linking,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { EnterStackParamList } from "../../../../../../navigation/enterNavigationStack";
import { TEXT_VARIANT } from "../../../../../../shared/AppText/types";
import { Button } from "../../../../../../shared/buttons/button";
import { BUTTON_VARIANT } from "../../../../../../shared/buttons/types";
import { HeaderLoginInSignIn } from "../../../../../../shared/headerLoginSignIn/headerLoginSignIn";
import { Inputs } from "../../../../../../shared/inputs/input";
import { signInPlayerSecondAddScreenStyle } from "../../../../../../styles/screens/signInPlayerSecondAddScreenStyle";
import { ScreenNames } from "../../../../../../types/screenNames";
import { StackNames } from "../../../../../../types/stackNames";
import { useSecondAddInputsSelector } from "../../../selectors/useSecondAddInputsSelector";

interface SignInPlayerSecondAddScreenProps {
  navigation: NativeStackNavigationProp<EnterStackParamList>;
  route: RouteProp<
    EnterStackParamList,
    ScreenNames.SIGN_IN_PLAYER_ADDITTIONAL_CONTINUE
  >;
}

export const SignInPlayerSecondAddScreen = ({
  navigation,
}: SignInPlayerSecondAddScreenProps) => {
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
  const secondAddInputs = useSecondAddInputsSelector();

  const goToTabStack = () => {
    navigate(StackNames.BOTTOM_TAB_STACK, {
      screen: ScreenNames.HOME,
    });
  };

  return (
    <SafeAreaView>
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
              onPress={goToTabStack}
              textVariant={TEXT_VARIANT.HEADER_LARGE}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
