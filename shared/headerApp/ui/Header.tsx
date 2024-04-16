import { useRoute } from "@react-navigation/native";
import { View, Image, ImageBackground } from "react-native";
import { headerAppStyle } from "../../../styles/shared/headerAppStyle";
import { useHeaderSelectors } from "../selectors/headerSelectors";

export default function Header() {
  const route = useRoute();
  const headerImages = useHeaderSelectors(route.name);
  return (
    <View>
      <ImageBackground
        source={require("../../../assets/headerImage.png")}
        style={headerAppStyle.backgroundImage}
      />
      <View style={headerAppStyle.wrapper}>
        <View style={headerAppStyle.item}>
          {headerImages.map((item, index) => {
            return (
              <Image
                source={item.source}
                alt={item.alt}
                style={item.style}
                key={index}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
}
