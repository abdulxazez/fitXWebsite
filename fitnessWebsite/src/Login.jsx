import { useRef, useState } from "react";

function LogIn() {

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const buttonRef = useRef(null)
const [text, changeText] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    changeText(usernameRef.current.value)
    console.log(buttonRef.current.value)
    console.log(usernameRef.current.value);
    console.log(passwordRef.current.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3 col-5 ms-2">
          <label htmlFor="username">Username</label>
          <input ref={usernameRef} type="text" name="" id="username" />
        </div>
        <div className="row mb-3 col-5 ms-2">
          <label htmlFor="password">Password</label>
          <input ref={passwordRef} type="password" name="" id="password" />
        </div>
        <button ref={buttonRef} className="col-5 ms-2" type="submit" value="login">LogIn</button>
        <p>{text}</p>

      </form>
    </>
  );
}

export default LogIn;