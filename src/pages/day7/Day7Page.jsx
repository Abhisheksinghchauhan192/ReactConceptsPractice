import FormInput from "./components/FormInput";

export default function Day7Page() {
  
    function handleSubmit(){
        return true
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

        <form onSubmit={handleSubmit}
        className="flex flex-col border border-emerald-200 rounded-2xl  p-4 mt-4 gap-2"
        >
            <div className="grid sm:grid-cols-2 gap-2 w-full">
                <FormInput
                type="text"
                placeholder="Enter Your First Name.."
                name="firstName"
                label="First Name"
                onChange="fn"
                value=""
                required={true}
                />
                <FormInput
                type="text"
                placeholder="Enter Your Last Name"
                name={"lastName"}
                label={"Last Name"}
                onChange={"fn2"}
                value=""
                required={true}
                />
            </div>

            <div>
                <FormInput
                type={"email"}
                placeholder={"example@example.com"}
                name={"email"}
                label={"Email"}
                onChange={"fn3"}
                value=""
                required={true}
                />
            </div>
            <div>
                <FormInput
                type={"text"}
                name={"city"}
                placeholder={"Enter Your Current City"}
                label={"City"}
                onChange={"fn4"}
                value=""
                />
            </div>
            <div>
                <FormInput
                type={"password"}
                placeholder={"**************"}
                name={"password"}
                label={"Password"}
                onChange={"fn3"}
                value=""
                required={true}
                />
            </div>
            <div className="flex gap-2 text-xs items-center h-8 ">
                <FormInput
                type={"checkbox"}
                name={"agree"}
                onChange={"fn5"}
                required={true}
                />
                <p className="text-gray-300 pt-2 ">I accept <a className="text-blue-400 cursor-pointer">terms of use</a> and <a className="text-blue-400 cursor-pointer">privacy</a></p>
            </div>
            <div className="flex justify-center ">
                <button className="px-4 py-2 border-emerald-300 bg-blue-500 rounded-2xl hover:bg-blue-400 cursor-pointer font-bold">Submit</button>
            </div>
        </form>
      </div>
    </div>
  );
}
