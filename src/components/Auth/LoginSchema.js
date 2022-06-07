import * as yup from "yup";

export const initialLoginSchema = yup.object().shape({
  email: yup.string().email().required("Email field required"),
  password: yup
    .string()
    .required()
    .min(6, "Password should contain at list 6 characters")
    .trim(),
});