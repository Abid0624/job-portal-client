import React, { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mx-4 mb-4">
      <div className="divider">OR</div>
      <button onClick={handleGoogleSignIn} className="btn btn-accent w-full">
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
