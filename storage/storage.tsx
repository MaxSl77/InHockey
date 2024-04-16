import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageKeys } from "./storage-keys.types";

export const getItem = async (key: StorageKeys) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value === "true" || value === "false") {
      return JSON.parse(value);
    } else {
      return value;
    }
  } catch (e) {
    throw e;
  }
};
