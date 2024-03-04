import React, { FC } from "react";
import { StyleProp, TextInput, ViewStyle } from "react-native";
import { INPUT_VARIANT } from "./types";

type InputsProps = {
  value?: any;
  placeholder: string;
  maxLength?: number;
  variant: INPUT_VARIANT;
  style?: StyleProp<ViewStyle>;
  onChangeText: (text: string) => void;
};

export const Inputs: FC<InputsProps> = (props) => {
  const { value, placeholder, maxLength, variant, style, onChangeText } = props;

  // Функция для установки свойства secureTextEntry для скрытия вводимого текста
  const getSecureTextEntry = (variant: INPUT_VARIANT): boolean => {
    switch (variant) {
      case INPUT_VARIANT.PASSWORD:
      case INPUT_VARIANT.CONFIRM_PASSWORD:
        return true;
      default:
        return false;
    }
  };

  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      placeholderTextColor="black"
      style={style}
      onChangeText={onChangeText}
      maxLength={maxLength}
      secureTextEntry={getSecureTextEntry(variant)} // Устанавливаем свойство secureTextEntry для скрытия вводимого текста
    />
  );
};