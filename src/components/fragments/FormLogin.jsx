import InputForm from "../elements/Input";
import Button from "../elements/Button";
import { useRef, useEffect, useState } from "react";
import { login } from "../../services/auth.services";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // localStorage.setItem("email", e.target.email.value);
    // localStorage.setItem("password", e.target.password.value);
    // window.location.href = "/product";
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/product";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        name="username"
        type="text"
        placeholder="olaf mex"
        ref={usernameRef}
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="********"
      />
      <Button variant="bg-blue-600 w-full" type="submit">
        Login
      </Button>
      {loginFailed && (
        <p className="text-red-500 text-center text-sm mt-3">{loginFailed}</p>
      )}
    </form>
  );
};

export default FormLogin;
