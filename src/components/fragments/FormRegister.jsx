import InputForm from "../elements/Input";
import Button from "../elements/Button";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Name"
        name="name"
        type="text"
        placeholder="Insert your name"
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
      <Button variant="bg-blue-600 w-full">Login</Button>
    </form>
  );
};

export default FormRegister;
