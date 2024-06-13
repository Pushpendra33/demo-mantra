export const notificationType = {
    INFO: "info",
    SUCCESS: "success",
    WARNING: "warning",
    ERROR: "error",
    DEFAULT: "default",
    DANGER: "danger",
  };
  
  export const notificationPosition = {
    TOP_LEFT: "top-left",
    TOP_RIGHT: "top-right",
    TOP_CENTER: "top-center",
    CENTER: "center",
    BOTTOM_LEFT: "bottom-left",
    BOTTOM_RIGHT: "bottom-right",
    BOTTOM_CENTER: "bottom-center",
  };

  export const notificationSetting = {
    title: "",
    duration: 5000,
    notificationPosition: notificationPosition.BOTTOM_RIGHT,
  };
  
  export const commonFields = {
    A: "A ",
    AN: "An ",
    THE: "The ",
    TO: "To",
    FROM: "From",
    OLD: "Old ",
    NEW: "New ",
    ID: "Id",
    FIRST_NAME: "First Name",
    LAST_NAME: "Last Name",
    NAME: "Name",
    EMAIL: "Email ID",
    MOBILE_NUMBER: "Mobile Number",
    PHONE: "Phone No.",
    OTP: "OTP",
    PASSWORD: "Password",
    CONFIRM: "Confirm",
    ADDRESS: "Address",
    STREET: "Street",
    CITY: "City",
    DISTRICT: "District",
    STATE: "State",
    COUNTRY: "Country",
    PINCODE: "Pin Code",
    POSTALCODE: "Postal Code",
    WALLET_ADDRESS: "Wallet Address",
    TYPE: "Type",
    SPACE: " ",
    MAX_FILE_SIZE: 2000000, // 2MB
    MAX_FILE_SIZE_3MB: 3000000, // 1MB
  };
  
  export const errorMessages = {
    fourNotOne: "Sorry! Your session has been expired, Please login again.",
    fourNotTwo: "Sorry! The parameters were valid but the request failed.",
    fourNotThree:
      "Sorry! You have not the required permissions to perform this action.",
    fourNotFour: "404! Page not found.",
    fourNotNine:
      "Sorry! The request conflicts with another request (perhaps due to using the same idempotent key).",
    fourOneZero: "Sorry! Requested page is no longer available on the server.",
    fourOneNine: "Sorry!, Invalid request.",
    fourTwoNine:
      "Sorry! Too many requests hit the API too quickly. We recommend an exponential backoff of your requests.",
    fiveHoundredSeries:
      "Sorry! Something went wrong on Server's end. (These are rare).",
  };

  export const validationErrors = {
    INDIAN_MOBILE_NUMBER: "Enter a valid indian mobile number",
    VALID_MOBILE_NUMBER: "Enter a valid mobile number",
    ONLY_STRING: "Letters And Spaces Only Please!",
    ONLY_NUMBERS: "Digits Only Please!",
    ONLY_SPECIAL_CHAR: "Only Special Characters Please!",
    NO_SPECIAL_CHAR: "No Special Characters Please!",
    PLEASE_ENTER: "Please Enter ",
    MINIMUM_TEN_DIGITS: "Minimum Ten Digits Required",
    MAXIMUM_TEN_DIGITS: "Maximum Ten Digits Allowed",
    STRONG_PASSWORD:
      "Password Must contain at least one uppercase, one lowercase letter, one special character and at least one digit.",
    SAME_PASSWORD: "Entered value must be same as Password",
    TERMS_AND_CONDITION: "Please Accept Terms & Conditions",
  };
  
  export const metamaskErrorMessages = {
    insufficientFund:
      "Please refresh this page if you think you have sufficient funds in your wallet!",
    browserNotSupported: "Not Supported in your browser",
    // "Not Supported in your browser, please switch to Chrome or Firefox!",
    addressNotWhitelisted: "Your address is not whitelisted in our records",
    notMintedYet:"It Seems You have not Minted any Projects NFT yet, You are not able to register. Kind Mint First and try Again",
    connetMetamask:"🦊 You must connect to Metamask wallet first",
    installMetamask:"🦊 You must install Metamask, a virtual Ethereum wallet, in your browser."
  };