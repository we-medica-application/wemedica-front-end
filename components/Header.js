import { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "../contexts/auth";
import { SITE_NAME } from "../lib/site";
import LoginModal from "./sub_components/LoginModal";
import SignUpModal from "./sub_components/SignupModal";


export default function Header() {
  let { user, login, logout } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  if (typeof window !== "undefined") {
    user = JSON.parse(localStorage.getItem("Auth"))
  }
  const showLoginModal = () => {
    setShowLogin(true);
  };
  const hideLoginModal = () => {
    setShowLogin(false);
  };
  const showSignUpModal = () => {
    setShowSignUp(true);
  };
  const hideSignUpModal = () => {
    setShowSignUp(false);
  };

  if(showLogin)
  {
    return <>{showLogin && <LoginModal hide={hideLoginModal} login={login} />}</>
  }
  else if(showSignUp)
  {
    return <>{showSignUp && <SignUpModal hide={hideSignUpModal} signup={()=>{console.log("SIGNED UP USER")/*pass the actual signup function here*/}} />}</>
  }
  else{
  return (
    <>
      <header className="">
        <nav className="bg-gray-100 z-40 fixed inset-x-0">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-4">
                <div>
                  {" "}
                  <a
                    href="#"
                    className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                  >
                    {" "}
                    <i className="bx bxl-medium-old mr-1 text-xl mb-1 text-blue-400"></i>{" "}
                    <Link href="/"><a href="#" className="font-bold text-grey-300">{SITE_NAME}</a></Link>
                  </a>{" "}
                </div>
                <div className="hidden md:flex items-center space-x-1">
                  {" "}
                  <Link href="/">
                    <a className="py-5 px-3 text-gray-700 hover:text-gray-900">
                      Home
                    </a>
                  </Link>
                  {user && (
                    <>
                      <Link href="/discover">
                        <a
                          href="#"
                          className="py-5 px-3 text-gray-700 hover:text-gray-900"
                        >
                          Discover
                        </a>
                      </Link>
                      <Link href="/result">
                        <a
                          href="#"
                          className="py-5 px-3 text-gray-700 hover:text-gray-900"
                        >
                          Results
                        </a>
                      </Link>
                      <Link href="/helpothers">
                        <a
                          href="#"
                          className="py-5 px-3 text-gray-700 hover:text-gray-900"
                        >
                          Help Others
                        </a>
                      </Link>
                    </>
                  )}
                  <Link href="/aboutus">
                    <a
                      href="#"
                      className="py-5 px-3 text-gray-700 hover:text-gray-900"
                    >
                      About Us
                    </a>
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                {user ? (
                  <button
                    className="py-2 px-3 bg-lime-400 text-black hover:bg-lime-300 text-sm hover:text-yellow-800 rounded transition duration-300"
                    onClick={logout}
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <button onClick={showLoginModal}>Login</button>
                    <button
                      className="py-2 px-3 bg-lime-400 text-black hover:bg-lime-300 text-sm hover:text-yellow-800 rounded transition duration-300"
                      onClick={showSignUpModal}
                    >
                      Signup
                    </button>
                  </>
                )}
              </div>
              <div className="md:hidden flex items-center">
                {" "}
                <button className="mobile-menu-button focus:outline-none">
                  {" "}
                  <i className="bx bx-menu text-3xl mt-1"></i>{" "}
                </button>{" "}
              </div>
            </div>
          </div>
          <div className="mobile-menu hidden md:hidden">
            {" "}
            <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
              Home
            </a>{" "}
            <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
              Contact
            </a>{" "}
            <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
              Pricing
            </a>{" "}
            <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
              Features
            </a>{" "}
          </div>
        </nav>
      </header>
    </>
  );
  }
}
