const UPDATE_EMAIL = "UPDATE_EMAIL";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";
const LOG_IN = "LOG_IN";
const SING_IN = "SIGN_IN";

const updateEmail = (email) => {
  return {
    type: UPDATE_EMAIL,
    payload: email,
  };
};

const updatePassword = (password) => {
  return {
    type: UPDATE_PASSWORD,
    payload: password,
  };
};

const LOG_IN = ()
