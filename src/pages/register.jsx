import { Link } from "react-router-dom";
import FormRegister from "../components/fragments/FormRegister";
import AuthLayouts from "../components/layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register">
      <FormRegister />
      <p className="text-center text-sm my-5">
        have an account?{" "}
        <Link to="/login" className="font-bold">
          Login
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default RegisterPage;
