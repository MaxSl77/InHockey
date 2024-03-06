import { INPUT_VARIANT } from "../../../../shared/inputs/types";
import { signInPlayerAddScreenStyle } from "../../../../styles/screens/signInPlayerAddScreenStyle";

export const useAddInputsSelector = () => {
    const registrationAddInputsArray = [
        {
            placeholder: INPUT_VARIANT.DATE_OF_BIRTH,
            variant: INPUT_VARIANT.DATE_OF_BIRTH,
            style: signInPlayerAddScreenStyle.inputName,
            onChangeText: () => {},
        },
        {
            placeholder: INPUT_VARIANT.CITY,
            variant: INPUT_VARIANT.CITY,
            style: signInPlayerAddScreenStyle.inputName,
            onChangeText: () => {},
        },
        {
            placeholder: INPUT_VARIANT.NATION,
            variant: INPUT_VARIANT.NATION,
            style: signInPlayerAddScreenStyle.inputName,
            onChangeText: () => {},
        },
        {
            placeholder: INPUT_VARIANT.YOUTH_TEAM,
            variant: INPUT_VARIANT.YOUTH_TEAM,
            style: signInPlayerAddScreenStyle.inputPassword,
            onChangeText: () => {},
        },
        {
            placeholder: INPUT_VARIANT.CLUB_OR_FREE,
            variant: INPUT_VARIANT.CLUB_OR_FREE,
            style: signInPlayerAddScreenStyle.inputPassword,
            onChangeText: () => {},
        },
    ]
    return registrationAddInputsArray;
}