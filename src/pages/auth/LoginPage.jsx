import Login from '../../components/auth/Login'
const LoginPage = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="col-12 col-md-8 col-lg-8 col-xl-6 p-4 shadow rounded-3">
        <h1 className="text-center text-black mb-4">Welcome Back</h1>
        <Login/>
      </div>
    </div>
  );
};

LoginPage.displayName = "Login page";

export default LoginPage;
