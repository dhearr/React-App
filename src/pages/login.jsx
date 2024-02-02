import { Link } from "react-router-dom";
import FormLogin from "../components/fragments/FormLogin";
import AuthLayouts from "../components/layouts/AuthLayouts";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login">
      <FormLogin />
      <p className="text-center text-sm my-5">
        Don&#39;t have an account?{" "}
        <Link to="/register" className="font-bold">
          Register
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default LoginPage;
