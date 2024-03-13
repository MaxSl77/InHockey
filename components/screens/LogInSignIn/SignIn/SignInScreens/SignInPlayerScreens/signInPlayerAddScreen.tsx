import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  Keyboard,
  Linking,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { EnterStackParamList } from "../../../../../../navigation/enterNavigationStack";
import { TEXT_VARIANT } from "../../../../../../shared/AppText/types";
import { Button } from "../../../../../../shared/buttons/button";
import { BUTTON_VARIANT } from "../../../../../../shared/buttons/types";
import { HeaderLoginInSignIn } from "../../../../../../shared/headerLoginSignIn/headerLoginSignIn";
import { Inputs } from "../../../../../../shared/inputs/input";
import { INPUT_VARIANT } from "../../../../../../shared/inputs/types";
import { signInPlayerAddScreenStyle } from "../../../../../../styles/screens/signInPlayerAddScreenStyle";
import { ScreenNames } from "../../../../../../types/screenNames";
import { useAddInputsSelector } from "../../../selectors/useAddInputsSelector";

interface SignInPlayerAddScreenProps {
  navigation: NativeStackNavigationProp<EnterStackParamList>;
  route: RouteProp<EnterStackParamList, ScreenNames.SIGN_IN_PLAYER_ADDITTIONAL>;
}

export const SignInPlayerAddScreen = ({
  navigation,
}: SignInPlayerAddScreenProps) => {
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

  const addInputs = useAddInputsSelector();

  const goToSignInPlayerSecondAdditionalScreen = () => {
    navigate(ScreenNames.SIGN_IN_PLAYER_ADDITTIONAL_CONTINUE);
  };

  return (
    <SafeAreaView>
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
              onPress={goToSignInPlayerSecondAdditionalScreen}
              textVariant={TEXT_VARIANT.HEADER_LARGE}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
