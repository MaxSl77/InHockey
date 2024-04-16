const image1 = require('../../../../assets/statistics.png');
const image1_active = require('../../../../assets/statistics_active.png');
const image2 = require('../../../../assets/games.png');
const image2_active = require('../../../../assets/games_active.png');
const image3 = require('../../../../assets/pics.png');
const image3_active = require('../../../../assets/pics_active.png');
const image4 = require('../../../../assets/messages.png');
const image4_active = require('../../../../assets/messages_active.png');

import { ScreenNames } from '../../../../types/screenNames'

export type personalButtonInfoType = {
    name: string;
    sourse: any;
    alt: string;
    activeSource: any;
}

export const personalButtonInfoSelectors = () => {
    const personalButtonInfoArray: personalButtonInfoType[] = [
        {
            name: ScreenNames.PROFILE_STATS,
            sourse: image1,
            alt: ScreenNames.PROFILE_STATS,
            activeSource: image1_active,
        },
        {
            name: ScreenNames.PROFILE_HOCKEYSTICK,
            sourse: image2,
            alt: ScreenNames.PROFILE_HOCKEYSTICK,
            activeSource: image2_active,
        },
        {
            name: ScreenNames.PROFILE_PHOTOS,
            sourse: image3,
            alt: ScreenNames.PROFILE_PHOTOS,
            activeSource: image3_active,
        },
        {
            name: ScreenNames.PROFILE_MESSAGES,
            sourse: image4,
            alt: ScreenNames.PROFILE_MESSAGES,
            activeSource: image4_active,
        }
    ]
    return personalButtonInfoArray;
}