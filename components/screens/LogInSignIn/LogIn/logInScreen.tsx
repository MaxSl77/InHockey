import React, { useState } from "react";
import {
  Linking,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TEXT_VARIANT } from "../../../../shared/AppText/types";
import { Button } from "../../../../shared/buttons/button";
import { BUTTON_VARIANT } from "../../../../shared/buttons/types";
import { HeaderLoginInSignIn } from "../../../../shared/headerLoginSignIn/headerLoginSignIn";
import { Inputs } from "../../../../shared/inputs/input";
import { INPUT_VARIANT } from "../../../../shared/inputs/types";
import { loginScreenStyle } from "../../../../styles/screens/LogInScreenStyle";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { ScreenNames } from "../../../../types/screenNames";
import { EnterStackParamList } from "../../../../navigation/enterNavigationStack";
import { StackNames } from "../../../../types/stackNames";

interface LogInScreenProps {
  navigation: NativeStackNavigationProp<EnterStackParamList>;
  route: RouteProp<
    EnterStackParamList,
    ScreenNames.LOG_IN
  >;
}


export const LogInScreen = ({navigation}: LogInScreenProps) => {
  const text = "login";
  const modifiedText =
    text.charAt(0).toUpperCase() +
    text.charAt(1) +
    text.charAt(2) +
    text.charAt(3).toUpperCase() +
    text.slice(4);

  //   const [inputValue, setInputValue] = useState("1");

  const handlePress = () => {
    Linking.openURL("#");
  };

  const [email, setEmail] = useState("");

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const { navigate } = navigation;

  const goToChoosePositionScreen = () => {
    navigate(ScreenNames.CHOOSE_POSITION);
  };

  const goToTabStack = () => {
    navigate(StackNames.BOTTOM_TAB_STACK, {
      screen: ScreenNames.HOME,
    });
  };


  return (
    <SafeAreaView>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={false}
      >
        <View>
          <HeaderLoginInSignIn />
          <View style={loginScreenStyle.loginWrapper}>
            <View style={loginScreenStyle.loginContainer}>
              <Text style={loginScreenStyle.nameOfScreen}>{modifiedText}</Text>
              <Inputs
                placeholder={INPUT_VARIANT.EMAIL}
                variant={INPUT_VARIANT.EMAIL}
                style={loginScreenStyle.inputName}
                onChangeText={handleEmailChange}
              />
              <Inputs
                placeholder={INPUT_VARIANT.PASSWORD}
                variant={INPUT_VARIANT.PASSWORD}
                onChangeText={() => {}}
                style={loginScreenStyle.inputPassword}
              />
              <TouchableOpacity onPress={handlePress}>
                <Text style={{ marginLeft: 33, paddingBottom: 15 }}>
                  Forget password?
                </Text>
              </TouchableOpacity>
              <Button
                style={{ marginLeft: 15, marginRight: 15 }}
                text="GO"
                variant={BUTTON_VARIANT.BLUE}
                onPress={goToTabStack}
                textVariant={TEXT_VARIANT.HEADER_LARGE}
              />
              <Text style={loginScreenStyle.or}>or</Text>
              <Button
                style={{ marginLeft: 15, marginRight: 15 }}
                text="SignUp"
                variant={BUTTON_VARIANT.ORANGE}
                onPress={goToChoosePositionScreen}
                textVariant={TEXT_VARIANT.HEADER_LARGE}
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
