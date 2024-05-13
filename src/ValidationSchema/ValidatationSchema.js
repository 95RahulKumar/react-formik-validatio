import * as Yup from "yup";
export const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("firstName is required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("lastName is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("email is required"),
  age: Yup.number()
    .required("age is required")
    .min(18, "age must be more then 18")
    .max(100, "age more then 100 is not acceptible"),
  dob: Yup.date()
    .required("date is requird")
    .min(new Date(1900, 0, 1), "Date of birth must be after 1900-01-01")
    .max(new Date(), "Date of birth cannot be in the future"),
  gender: Yup.string().required("gender is required"),
  country: Yup.string().required("Country is required"),
  games: Yup.array()
    .min(1, "Select at least one game")
    .required("Select at least one game"),
});
