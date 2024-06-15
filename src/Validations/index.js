import * as yup from "yup";
import {
  commonFields,
  nameValue,
  strongPassword,
  validationErrors,
} from "../Common";

export const registerSchema = yup.object().shape({
  wallet_address: yup
    .string()
    .required(validationErrors.PLEASE_ENTER + commonFields.WALLET_ADDRESS),
  name: yup
    .string()
    .required(validationErrors.PLEASE_ENTER + commonFields.NAME)
    .test(
      validationErrors.NO_SPECIAL_CHAR,
      validationErrors.NO_SPECIAL_CHAR,
      (value) => nameValue(value)
    ),
  email: yup
    .string()
    .email()
    .required(validationErrors.PLEASE_ENTER + commonFields.EMAIL),
  // mobile_no: yup
  //   .string()
  //   .required(validationErrors.PLEASE_ENTER + commonFields.MOBILE_NUMBER)
  //   .test("digitsOnly", validationErrors.ONLY_NUMBERS, (value) =>
  //     numbersOnly(value)
  //   )
  //   .test("minTen", validationErrors.MINIMUM_TEN_DIGITS, (value) =>
  //     minTenDigits(value)
  //   )
  //   .test("maxTen", validationErrors.MAXIMUM_TEN_DIGITS, (value) =>
  //     maxTenDigits(value)
  //   )
  //   .test(
  //     validationErrors.INDIAN_MOBILE_NUMBER,
  //     validationErrors.INDIAN_MOBILE_NUMBER,
  //     (value) => indianMobileNumber(value)
  //   ),
  password: yup
    .string()
    .required(
      validationErrors.PLEASE_ENTER + commonFields.THE + commonFields.PASSWORD
    )
    .min(8)
    .max(18)
    .test(
      validationErrors.STRONG_PASSWORD,
      validationErrors.STRONG_PASSWORD,
      (value) => strongPassword(value)
    ),
  confirmPassword: yup
    .string()
    .required(
      validationErrors.PLEASE_ENTER +
        commonFields.THE +
        commonFields.PASSWORD +
        " Again to Confirm"
    )
    .oneOf([yup.ref("password")], validationErrors.SAME_PASSWORD),
  termsCondition: yup
    .boolean()
    .oneOf([true], validationErrors.TERMS_AND_CONDITION),
});
