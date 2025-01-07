import Register from "../../components/auth/Register";

const RegisterPage = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="col-12 col-md-12 col-lg-8 col-xl-8 p-4 shadow rounded-3">
        <h1 className="text-center text-black mb-4">Register</h1>
        <Register/>
      </div>
    </div>
  );
};

RegisterPage.displayName = "Register Page";

export default RegisterPage;
