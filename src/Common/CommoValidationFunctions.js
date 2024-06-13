import { allowedFileTypes, commonFields, isEmptyObject } from ".";
export const nameValue = (value) => /^[a-z,A-Z," ",0-9]+$/i.test(value);
export const lettersOnly = (value) => /^[a-z,A-Z," "]+$/i.test(value);
export const numbersOnly = (value) => /^[0-9]+$/i.test(value);
export const indianMobileNumber = (value) => /^[6-9][0-9]{9}$/.test(value);
export const strongPassword = (value) =>
  /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
    value
  );
export const minTenDigits = (value) => {
  return value.toString().length >= 10;
};
export const maxTenDigits = (value) => {
  return value.toString().length <= 11;
};


export const atLeastOne = (value) => {
  // debugger;
  if (!value.includes(true)) {
    return false;
  } else {
    return true;
  }
};

