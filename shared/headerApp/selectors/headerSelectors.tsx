import { headerAppStyle } from "../../../styles/shared/headerAppStyle";
import { ScreenNames } from "../../../types/screenNames";

const image1 = require("../../../assets/back.png");
const image2 = require("../../../assets/lupa.png");
const image3 = require("../../../assets/inhockeypict.png");
const image4 = require("../../../assets/notifications.png");
const image5 = require("../../../assets/add.png");
const image6 = require("../../../assets/avatar.jpg");

export enum HeaderButtonEnum {
  PROFILE = 'PROFILE',
  BACK = 'BACK',
  LUPA = 'LUPA',
  LOGO = 'LOGO',
  ADD = 'ADD',
  NOTIFICATION = 'NOTIFICATION'
}

export const useHeaderSelectors = (currentScreen: any) => {
  const headerImagesArray = [
    {
      source: (currentScreen === ScreenNames.FRIENDS || currentScreen === ScreenNames.MESSAGES) ? image6 : image1,
      alt: "image 1 header",
      style: (currentScreen === ScreenNames.FRIENDS || currentScreen === ScreenNames.MESSAGES) ? headerAppStyle.avatarImage : headerAppStyle.imageBack,
      name: (currentScreen === ScreenNames.FRIENDS || currentScreen === ScreenNames.MESSAGES) ? HeaderButtonEnum.PROFILE : HeaderButtonEnum.BACK
    },
    {
      source: image2,
      alt: "image 2 header",
      style: headerAppStyle.imageLupa,
      name: HeaderButtonEnum.LUPA
    },
    {
      source: image3,
      alt: "image 3 header",
      style: headerAppStyle.imageInHockey,
      name: HeaderButtonEnum.LOGO
    },
    {
      source: image5,
      alt: "image 5 header",
      style: headerAppStyle.imageAdd,
      name: HeaderButtonEnum.ADD
    },
    {
      source: image4,
      alt: "image 4 header",
      style: headerAppStyle.imageNotifications,
      name: HeaderButtonEnum.NOTIFICATION
    },
  ];
  return headerImagesArray;
};
