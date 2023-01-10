import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const InputForm = ({ type, placeholder }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="form-input mt-4 w-full rounded-xl border-2 text-lg lg:py-3 lg:text-xl"
  />
);

const Button = ({ className, children, onClick, type }) => (
  <button
    type={type}
    onClick={onClick}
    className={`easy-in-out rounded-xl px-4 py-2 text-lg font-semibold transition delay-100 duration-300 hover:-translate-y-1 lg:px-6 lg:py-3 lg:text-xl ${className}`}
  >
    {children}
  </button>
);

export default function LoginPage() {
  const [isActionSignIn, setIsActionSignIn] = useState(true);

  return (
    <>
      <header className="flex py-6 px-8">
        <Link href="/" className="-mt-1 text-5xl font-semibold">
          s<span className="rounded-xl border-b-4 border-blue-600">v.</span>
        </Link>
      </header>

      <form className="mx-auto max-w-md py-16 px-8 md:mt-64 lg:mt-8">
        <Button className="flex w-full items-center justify-center space-x-2 border-2 border-gray-500">
          <FcGoogle size={24} /> <span>Continue with Google</span>
        </Button>
        <div className="mt-4 text-center text-gray-500 lg:text-lg">or</div>
        <InputForm type="email" placeholder="Email" />
        <InputForm type="password" placeholder="Password" />
        <Button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            isActionSignIn ? alert("login") : alert("signin");
          }}
          className="mt-4 w-full border-2 border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-600/50"
        >
          {isActionSignIn ? "Log in" : "Create account"}
        </Button>
        <div className="mt-6 space-y-1 text-center lg:text-lg">
          {isActionSignIn ? (
            <>
              <a className="text-blue-600">Reset password</a>
              <div>
                <span className="text-gray-600">No account? </span>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    setIsActionSignIn(false);
                  }}
                  className="text-blue-600"
                >
                  Create one
                </a>
              </div>
            </>
          ) : (
            <div>
              <span className="text-gray-600">Already have account? </span>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  setIsActionSignIn(true);
                }}
                className="text-blue-600"
              >
                Log in
              </a>
            </div>
          )}
        </div>
      </form>
    </>
  );
}
