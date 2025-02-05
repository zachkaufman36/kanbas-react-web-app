import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <Form.Control id="wd-username"
             placeholder="username"
             className="mb-2"/>
      <Form.Control id="wd-password"
             placeholder="password" type="password"
             className="mb-2"/>
      <Link id="wd-signin-btn"
            to="/Kambaz/Account/Profile"
            className="btn btn-primary w-100 mb-2">
            Sign in </Link>

      <Link id="wd-signup-btn"
            to="/Kambaz/Account/Signup"
            className="btn btn-secondary w-100 mb-2">
            Sign up </Link>

    </div> );}
