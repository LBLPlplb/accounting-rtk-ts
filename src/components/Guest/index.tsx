import SignIn from "./SignIn.tsx";
import {useState} from "react";
import SignUp from "./SignUp.tsx";

const Guest=()=> {
    const [isSignIn, setIsSignIn] = useState(true);
    return (
        <div>
            {isSignIn ? <SignIn /> :<SignUp />}
            <button onClick={()=> setIsSignIn(!isSignIn)}>
                Switch to {isSignIn ? 'Sign Up' : 'SignIn'}
            </button>
        </div>
    )
}
export default Guest;