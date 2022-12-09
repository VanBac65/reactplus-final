import * as yup from "yup";

export const schemaRegister = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
}).required();

export const schemaLogin = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
}).required();