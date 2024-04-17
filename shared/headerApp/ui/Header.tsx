import { useRoute } from "@react-navigation/native";
import { View, Image, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { EnterStackParamList } from '../../../navigation/enterNavigationStack';
import { headerAppStyle } from "../../../styles/shared/headerAppStyle";
import { useHeaderSelectors } from "../selectors/headerSelectors";

export default function Header() {
  const navigation = useNavigation<NativeStackNavigationProp<EnterStackParamList>>();

  const route = useRoute();
  const headerImages = useHeaderSelectors(route.name);

  const handleButtonClick = (buttonName: string) => {
    switch (buttonName) {
      case "PROFILE":
        break;
      case "BACK":
        navigation.goBack();
        break;
      case "LUPA":
        break;
      case "LOGO":
        break;
      case "ADD":
        break;
      case "NOTIFICATION":
        break;
      default:
        break;
    }
  };

  return (
    <View>
      <ImageBackground
        source={require("../../../assets/headerImage.png")}
        style={headerAppStyle.backgroundImage}
      />
      <View style={headerAppStyle.wrapper}>
        <View style={headerAppStyle.item}>
          {headerImages.map((item, index) => (
            <TouchableOpacity
              onPress={() => handleButtonClick(item.name)}
              key={index}
            >
              <Image
                source={item.source}
                alt={item.alt}
                style={item.style}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}
