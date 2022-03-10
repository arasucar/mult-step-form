import {FormErrors, FormType} from "../../../types";

export const isValid = (form: FormType, currentPage: number, setErrors: (errors: FormErrors) => void) => {
  let isValid = true
  let errorList: FormErrors = {}

  if (currentPage === 1) {
    const emailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})]?$)/i)
    if (!form.field1 || !emailPattern.test(form.field1)) {
      isValid = false;
      errorList = {...errorList, field1: "Please enter a valid email address."}
    } else {
      errorList = {...errorList, field1: undefined}
    }
    if (!form.field2) {
      isValid = false;
      errorList = {...errorList, field2: "Please enter a number."}
    } else {
      errorList = {...errorList, field2: undefined}
    }
  } else if (currentPage === 2) {
    if (!form.field3) {
      isValid = false;
      errorList = {...errorList, field3: "Please enter a charset of max length 20."}
    } else {
      errorList = {...errorList, field3: undefined}
    }
    if (!form.field4) {
      isValid = false;
      errorList = {...errorList, field4: "This field must be filled."}
    } else {
      errorList = {...errorList, field4: undefined}
    }
  } else {
    if (!form.field5) {
      isValid = false;
      errorList = {...errorList, field5: "This field must be filled."}
    } else {
      errorList = {...errorList, field5: undefined}
    }
    if (!form.field6) {
      isValid = false;
      errorList = {...errorList, field6: "This field must be filled."}
    } else {
      errorList = {...errorList, field6: undefined}
    }
  }
  setErrors(errorList)
  return isValid;
}