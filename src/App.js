import classes from "./App.module.css";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import ForgotPassword from "./Forgot Password/ForgotPassword";
import ResetPassword from "./Reset Password/ResetPassword";
import EmailVerification from "./Email Verification/EmailVerification";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div className={classes.app}>
      <Navbar />
      <div className={classes.wrapper}>
        <Switch>
          <Route path="/" exact>
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/forgotpassword">
            <ForgotPassword />
          </Route>
          <Route path="/resetpassword">
            <ResetPassword />
          </Route>
          <Route path="/emailverification">
            <EmailVerification />
          </Route>
          <Route path="*">
            <Signup />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
