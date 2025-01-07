import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import CustomInput from "../ui/CustomInput";
import CustomButton from "../ui/CustomButton";
import { validationRegisterSchema, calculateAge } from "../../utils/InputValidate";
import { registerUser } from '../../store/auth/authActions';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(validationRegisterSchema),
  });

  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();

  const handleDobChange = (e) => {
    const dob = e.target.value;
    const parsedDob = new Date(dob);  

    if (dob === "" || isNaN(parsedDob.getTime())) {
      setValue("dob", null, { shouldValidate: true });
      setValue("age", null, { shouldValidate: true });
    } else {
      setValue("dob", dob, { shouldValidate: true });
      const age = calculateAge(dob);
      setValue("age", age, { shouldValidate: true });
    }
  };

  const handleImageUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        return toast.error("Only image files are allowed.");
      }
      if (file.size > 2 * 1024 * 1024) {
        return toast.error("File size exceeds 2MB.");
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        setValue("profileImage", base64Image, { shouldValidate: true });
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {
    const { name, email, password, dob, age, profileImage } = data;

    const existingUsers = JSON.parse(localStorage.getItem("userDetials")) || [];

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      dob,
      age,
      profileImage,
    };

    dispatch(registerUser(newUser));

    existingUsers.push(newUser);
    localStorage.setItem("userDetials", JSON.stringify(existingUsers));

    toast.success("User registered successfully.");
    navigate("/login");
  };

  return (
    <form className="d-flex flex-column gap-3 py-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="row g-3">
        <div className="col-12 col-md-6">
          <input
            type="file"
            {...register("profileImage")}
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <CustomButton
            type="button"
            color="info"
            variant="outlined"
            size="large"
            fullWidth
            onClick={handleImageUpload}
          >
            Upload Profile Image
          </CustomButton>
          {errors.profileImage?.message && (
            <small className="text-danger">{errors.profileImage.message}</small>
          )}
        </div>

        <div className="col-12 col-md-6">
          <CustomInput
            label="Name"
            {...register("name")}
            error={errors.name?.message}
            helperText={errors.name?.message}
            type="text"
          />
        </div>
      </div>

      <div className="row g-3">
        <div className="col-12 col-md-6">
          <CustomInput
            label="Email"
            {...register("email")}
            error={errors.email?.message}
            helperText={errors.email?.message}
            type="email"
          />
        </div>

        <div className="col-12 col-md-6">
          <CustomInput
            label="Mobile Number"
            {...register("mobile")}
            error={errors.mobile?.message}
            helperText={errors.mobile?.message}
            type="text"
          />
        </div>
      </div>

      <div className="row g-3">
        <div className="col-12 col-md-6">
          <CustomInput
            label="Date of Birth"
            {...register("dob")}
            error={errors.dob?.message}
            helperText={errors.dob?.message}
            type="date"
            onChange={handleDobChange}
          />
        </div>

        <div className="col-12 col-md-6">
          <CustomInput
            label="Age"
            {...register("age")}
            error={errors.age?.message}
            helperText={errors.age?.message}
            type="number"
            readOnly
            onKeyDown={(e) => e.preventDefault()}
          />
        </div>
      </div>

      <div className="row g-3">
        <div className="col-12 col-md-6">
          <CustomInput
            label="Password"
            {...register("password")}
            error={errors.password?.message}
            helperText={errors.password?.message}
            type="password"
          />
        </div>
      </div>

      <CustomButton type="submit" color="primary" variant="contained" fullWidth>
        Submit
      </CustomButton>

      <div className="text-dark font-weight-semibold pt-3 text-center">
        Already have an account?{" "}
        <Link className="text-primary text-decoration-none font-weight-bold" to="/login">
          Login now
        </Link>
      </div>
    </form>
  );
};

Register.displayName = "Register";

export default Register;
