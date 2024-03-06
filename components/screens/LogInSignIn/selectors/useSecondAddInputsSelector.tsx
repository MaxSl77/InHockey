import { INPUT_VARIANT } from "../../../../shared/inputs/types";
import { signInPlayerAddScreenStyle } from "../../../../styles/screens/signInPlayerAddScreenStyle";
import { signInPlayerBaseScreenStyle } from "../../../../styles/screens/signInPlayerBaseScreenStyle";
import { signInPlayerSecondAddScreenStyle } from "../../../../styles/screens/signInPlayerSecondAddScreenStyle";

export const useSecondAddInputsSelector = () => {
    const registrationSecondAddInputsArray = [
        {
            placeholder: INPUT_VARIANT.AGENCY_OR_FREE,
            variant: INPUT_VARIANT.AGENCY_OR_FREE,
            style: signInPlayerSecondAddScreenStyle.inputName,
            onChangeText: () => {},
        },
        {
            placeholder: INPUT_VARIANT.POSITION,
            variant: INPUT_VARIANT.POSITION,
            style: signInPlayerSecondAddScreenStyle.inputName,
            onChangeText: () => {},
        },
        {
            placeholder: INPUT_VARIANT.SHOOTS,
            variant: INPUT_VARIANT.SHOOTS,
            style: signInPlayerSecondAddScreenStyle.inputName,
            onChangeText: () => {},
        },
        {
            placeholder: INPUT_VARIANT.HEIGHT,
            variant: INPUT_VARIANT.HEIGHT,
            style: signInPlayerSecondAddScreenStyle.inputName,
            onChangeText: () => {},
        },
        {
            placeholder: INPUT_VARIANT.WEIGHT,
            variant: INPUT_VARIANT.WEIGHT,
            style: signInPlayerSecondAddScreenStyle.inputName,
            onChangeText: () => {},
        },
    ]
    return registrationSecondAddInputsArray;
}