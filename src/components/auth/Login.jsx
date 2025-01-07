import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import CustomInput from "../ui/CustomInput";
import CustomButton from "../ui/CustomButton";
import { validationLoginSchema } from "../../utils/InputValidate";
import { loginUser } from "../../store/auth/authActions";
import toast from "react-hot-toast";
import { useEffect } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validationLoginSchema),
  });

  const onSubmit = (data) => {
    const user = { email: data.email, name: "User" };
    dispatch(loginUser(user));

    localStorage.setItem("isAuthenticated", true);
    localStorage.setItem("User", JSON.stringify(user));
    navigate("/");
    toast.success("Login successful");
  };

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated === 'true') { 
      navigate("/");
    }
  }, [navigate]);

  return (
    <form
      className="d-flex flex-column gap-3 py-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <CustomInput
        label="Email"
        {...register("email")}
        error={errors.email?.message}
        helperText={errors.email?.message}
        type="email"
        autoComplete={"off"}
      />

      <CustomInput
        label="Password"
        {...register("password")}
        error={errors.password?.message}
        helperText={errors.password?.message}
        type="password"
        autoComplete={"off"}
      />

      <CustomButton type="submit" color="primary" variant="contained" fullWidth>
        {isSubmitting ? "Submitting..." : "Submit"}
      </CustomButton>

      <div className="text-dark font-weight-semibold pt-3 text-center">
        Don&apos;t have an account?{" "}
        <Link
          className="text-primary text-decoration-none font-weight-bold"
          to="/register"
        >
          Register now
        </Link>
      </div>
    </form>
  );
};

Login.displayName = "Login";

export default Login;
