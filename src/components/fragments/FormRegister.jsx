import InputForm from "../elements/Input";
import Button from "../elements/Button";
import { useEffect, useRef } from "react";

const FormRegister = () => {
  const nameRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);
  return (
    <form action="">
      <InputForm
        label="Name"
        name="name"
        type="text"
        placeholder="Insert your name"
        ref={nameRef}
      />
      <InputForm
        label="Email"
        name="email"
        type="email"
        placeholder="email@mail.com"
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="********"
      />
      <InputForm
        label="Confirm Password"
        name="password"
        type="password"
        placeholder="********"
      />
      <Button variant="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
