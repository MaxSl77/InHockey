import { INPUT_VARIANT } from "../../../../shared/inputs/types";
import { signInPlayerBaseScreenStyle } from "../../../../styles/screens/signInPlayerBaseScreenStyle";

export const useBaseInputsSelector = () => {
    const registrationBaseInputsArray = [
        {
            placeholder: INPUT_VARIANT.NAME,
            variant: INPUT_VARIANT.NAME,
            style: signInPlayerBaseScreenStyle.inputName,
            onChangeText: () => {},
        },
        {
            placeholder: INPUT_VARIANT.SURNAME,
            variant: INPUT_VARIANT.SURNAME,
            style: signInPlayerBaseScreenStyle.inputName,
            onChangeText: () => {},
        },
        {
            placeholder: INPUT_VARIANT.EMAIL,
            variant: INPUT_VARIANT.EMAIL,
            style: signInPlayerBaseScreenStyle.inputName,
            onChangeText: () => {},
        },
        {
            placeholder: INPUT_VARIANT.PASSWORD,
            variant: INPUT_VARIANT.PASSWORD,
            style: signInPlayerBaseScreenStyle.inputPassword,
            onChangeText: () => {},
        },
        {
            placeholder: INPUT_VARIANT.CONFIRM_PASSWORD,
            variant: INPUT_VARIANT.CONFIRM_PASSWORD,
            style: signInPlayerBaseScreenStyle.inputPassword,
            onChangeText: () => {},
        },
    ]
    return registrationBaseInputsArray;
}