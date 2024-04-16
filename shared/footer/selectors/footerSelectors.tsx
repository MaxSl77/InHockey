import { ScreenNames } from "../../../types/screenNames";

const image1 = require("../../../assets/home.png");
const image2 = require("../../../assets/friends.png");
const image3 = require("../../../assets/message.png");
const image4 = require("../../../assets/profile.png");

export const footerSelectors = () => {
  const footerArray: {
    name: string;
    sourse: any;
    alt: string;
    navigate: ScreenNames;
  }[] = [
    {
      name: "Home",
      sourse: image1,
      alt: "image1 alt",
      navigate: ScreenNames.HOME,
    },
    {
      name: "Friends",
      sourse: image2,
      alt: "image2 alt",
      navigate: ScreenNames.FRIENDS,
    },
    {
      name: "Messages",
      sourse: image3,
      alt: "image3 alt",
      navigate: ScreenNames.MESSAGES,
    },
    {
      name: "Profile",
      sourse: image4,
      alt: "image4 alt",
      navigate: ScreenNames.PROFILE,
    },
  ];
  return footerArray;
};
