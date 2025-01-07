
import * as Yup from 'yup'; 


const calculateAge = (dob) => {
  const birthDate = new Date(dob);
  const ageDifference = Date.now() - birthDate.getTime();
  const ageDate = new Date(ageDifference);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  return age;
};


const validationRegisterSchema = Yup.object({
  profileImage: Yup.mixed().required('Profile Image is required'),
  name: Yup.string().trim().required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  mobile: Yup.string()
    .matches(/^[789]\d{9}$/, 'Invalid mobile number. Must be a valid Indian mobile number.')
    .required('Mobile Number is required'),
  dob: Yup.date().typeError('Date of Birth must be a valid date').required('Date of Birth is required').nullable(),
  age: Yup.number().typeError('Age must be a valid number').min(18, 'Age must be at least 18')
  .required('Age is required').nullable(),
  password: Yup.string().trim()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required'),
});

const validationLoginSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is rquired'),
  password: Yup.string().trim().min(6, 'password must be at least 6 characters long').required('Password is required'),
})



export { validationRegisterSchema, validationLoginSchema, calculateAge }
