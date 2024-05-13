import { useFormik } from "formik";
import { validationSchema } from "../ValidationSchema/ValidatationSchema";
import Input from "./input/Input";
import { useRef } from "react";
import RadioGroup from "./radiobtngroup/RadioGroup";
import Select from "./select/Select";
import Button from "./button/Button";
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  age: "",
  dob: "",
  country: "",
  gender: "",
  games: [],
};
const allGames = ["cricket", "football", "bollyboll"];
const genderOptions = [
  {
    label: "Male",
    value: "male",
    name: "gender",
    checked: false,
    disabled: false,
  },
  {
    label: "Female",
    value: "female",
    name: "gender",
    checked: false,
    disabled: false,
  },
];

const Signup = () => {
  // const emailRef = useRef(null);
  const {
    touched,
    values,
    errors,
    handleSubmit,
    handleBlur,
    resetForm,
    handleChange,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      resetForm();
    },
  });
  const handleGameChange = (event) => {
    const { value, checked } = event.target;
    console.log(value, checked);
    if (checked) {
      setFieldValue("games", [...values.games, value]);
    } else {
      setFieldValue(
        "games",
        values.games.filter((game) => game !== value)
      );
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Input
          type="text"
          placeholder="please enter the firstname"
          onChangeHandeler={handleChange}
          onBlurHandeler={handleBlur}
          classname="px-1 py-2 rounded  min-w-[220px]"
          name="firstName"
          lable="FirstName:"
          inputVal={values.firstName}
        />
      </div>
      {touched.firstName && errors.firstName ? (
        <p className="text-red-400 text-center">{errors.firstName}</p>
      ) : null}
      <div>
        <Input
          type="text"
          placeholder="please enter the lastname"
          onChangeHandeler={handleChange}
          onBlurHandeler={handleBlur}
          classname="px-1 py-2 rounded  min-w-[220px]"
          name="lastName"
          lable="LastName:"
          inputVal={values.lastName}
        />
      </div>
      {touched.lastName && errors.lastName ? (
        <p className="text-red-400 text-center">{errors.lastName}</p>
      ) : null}
      <div>
        <Input
          type="email"
          placeholder="please enter the email"
          onChangeHandeler={handleChange}
          onBlurHandeler={handleBlur}
          classname="px-1 py-2 rounded  min-w-[220px]"
          name="email"
          lable="Email:"
          inputVal={values.email}
        />
      </div>
      {touched.email && errors.email ? (
        <p className="text-red-400 text-center">{errors.email}</p>
      ) : null}
      <div>
        <Input
          type="number"
          placeholder="please enter the email"
          onChangeHandeler={handleChange}
          onBlurHandeler={handleBlur}
          classname="px-1 py-2 rounded  min-w-[220px]"
          name="age"
          lable="Age:"
          inputVal={values.age}
        />
      </div>
      {touched.age && errors.age ? (
        <p className="text-red-400 text-center">{errors.age}</p>
      ) : null}
      <div>
        <Input
          type="date"
          placeholder="please enter the email"
          onChangeHandeler={handleChange}
          onBlurHandeler={handleBlur}
          classname="px-1 py-2 rounded  min-w-[220px]"
          name="dob"
          lable="DOB:"
          inputVal={values.dob}
        />
      </div>
      {touched.dob && errors.dob ? (
        <p className="text-red-400 text-center">{errors.dob}</p>
      ) : null}

      <div className="flex justify-center items-center">
        <RadioGroup
          type="radio"
          lable="Select Gender: "
          options={genderOptions}
          checked={values.gender}
          onChangeHandeler={handleChange}
        />
      </div>
      {touched.gender && errors.gender ? (
        <p className="text-red-400 text-center">{errors.gender}</p>
      ) : null}
      <div className="flex justify-between">
        <label htmlFor="country">Select your country:</label>
        <select
          name="country"
          id="country"
          value={values.country}
          onChange={handleChange}
        >
          <option value="">Select Country</option>
          <option value="india">India</option>
          <option value="pak">Pak</option>
          <option value="china">China</option>
        </select>
      </div>

      {/* // */}
      {/* <Select
        name="country"
        value={values.country}
        onSelectHandler={handleChange}
        selectOptions={["", "india", "pak", "china"]}
      /> */}
      {touched.country && errors.country ? (
        <p className="text-red-400 text-center">{errors.country}</p>
      ) : null}
      <label htmlFor="country">Select Your Favorite Game:</label>
      {allGames.map((game) => (
        <div key={game}>
          <input
            id={game}
            type="checkbox"
            name={game}
            value={game}
            checked={values.games.includes(game)}
            onChange={handleGameChange}
          />
          <label htmlFor={game}>{game}</label>
        </div>
      ))}
      {touched.games && errors.games ? (
        <p className="text-red-400 text-center">{errors.games}</p>
      ) : null}
      <div className="flex justify-center item-center">
        <Button
          classname="px-4 py-2 mt-1 text-white text-center bg-green-500 rounded-md"
          type="submit"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};
export default Signup;
