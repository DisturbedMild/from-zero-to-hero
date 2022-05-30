import * as yup from "yup";

export const initialRegistrationSchema = yup.object().shape({
  email: yup.string().email().required("Email field required"),
  password: yup
    .string()
    .required()
    .min(6, "Password should contain at list 6 characters")
    .trim(),
  passwordConfirmation: yup
    .string()
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref("password")], "Both passwords should be the same"),
    })
    .required("Both passwords should be the same"),
});