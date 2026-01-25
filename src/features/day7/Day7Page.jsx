import { useReducer,useState} from "react";
import FormInput from "./components/FormInput";
import { formReducer, initialFormData } from "./FormReducer";
import { validateEmail, validatePassword } from "./utils/validators";

export default function Day7Page() {
  const [state, dispatch] = useReducer(formReducer, initialFormData);
  const[signup ,setSignup] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    // run validators for email and password 
    const emailRes = validateEmail(state.email)
    const passRes = validatePassword(state.password)

    const errors  = {
      email:emailRes.ok?null:emailRes.error,
      password:passRes.ok?null:passRes.error

    }
    //update the reducer so the UI shows the errors
    dispatch({type:'set_errors',errors})

    //If there is any error return do not proceed
    const hasError  = Object.values(errors).some(Boolean)
    if(hasError){
      console.log("Fix Validation Errors",errors)
      return
    }

    // all clear no error proceed to submit.
    setSignup(true);

    const payload = {
      email: state.email,
      password: state.password,
      firstName: state.firstName,
      lastName: state.lastName,
      city: state.city,
    };
    console.log('submited payload', payload);

    // navigate to dashboard or other page now 
    setSignup(false);

    dispatch({type:'reset'})

  }

  //generic Change Handler
  function handleChange(e) {
    const { name, value } = e.target;
    dispatch({ type: "field_changed", field: name, value: value });
  }

  return (
    <div className="flex flex-col gap-10 w-full min-h-screen bg-linear-to-b from-gray-950 to-gray-950/90  items-center p-2 sm:p-10  text-gray-50">
      <header className="flex flex-col gap-10  justify-around w-full sm:max-w-lg rounded-2xl p-2">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-400">
          Signup Form Component{" "}
        </h1>
        <p className="text-xs text-gray-200 sm:text-base  pl-4">
          It has password Validation and email validation with proper UI/UX{" "}
        </p>
      </header>

      <div className="flex flex-col w-full p-10 m-2 sm:max-w-xl bg-slate-900/80 shadow-2xl rounded-2xl ">
        <div className="flex justify-center">
          <h2 className="font-bold text-xl ">Sign Up Form </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col border border-emerald-200 rounded-2xl  p-4 mt-4 gap-2"
        >
          <div className="grid sm:grid-cols-2 gap-2 w-full">
            <FormInput
              type="text"
              placeholder="Enter Your First Name.."
              name="firstName"
              label="First Name"
              onChange={handleChange}
              value={state.firstName}
              required={true}
            />
            <FormInput
              type="text"
              placeholder="Enter Your Last Name"
              name={"lastName"}
              label={"Last Name"}
              onChange={handleChange}
              value={state.lastName}
              required={true}
            />
          </div>

          <div>
            <FormInput
              type={"email"}
              placeholder={"example@example.com"}
              name={"email"}
              label={"Email"}
              onChange={handleChange}
              value={state.email}
              required={true}
              error={state.errors.email}
            />
          </div>
          <div>
            <FormInput
              type={"text"}
              name={"city"}
              placeholder={"Enter Your Current City"}
              label={"City"}
              onChange={handleChange}
              value={state.city}
            />
          </div>
          <div>
            <FormInput
              type={"password"}
              placeholder={"**************"}
              name={"password"}
              label={"Password"}
              onChange={handleChange}
              value={state.password}
              required={true}
              error={state.errors.password}
            />
          </div>
          <div className="flex gap-2 text-xs items-center h-8 ">
            <FormInput
              type={"checkbox"}
              name={"agree"}
              onChange={handleChange}
              required={true}
            />
            <p className="text-gray-300 pt-2 ">
              I accept{" "}
              <a className="text-blue-400 cursor-pointer">terms of use</a> and{" "}
              <a className="text-blue-400 cursor-pointer">privacy</a>
            </p>
          </div>
          <div className="flex justify-center ">
            <button className="px-4 py-2 border-emerald-300 bg-blue-500 rounded-2xl hover:bg-blue-400 cursor-pointer font-bold">
              {!signup?'Sign Up':'Signing Up..'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
