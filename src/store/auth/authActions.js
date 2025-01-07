
 const registerUser = (user) => ({
    type: 'REGISTER_USER',
    payload: user,
  });


 const loginUser = (user) => ({
    type: 'LOGIN_USER',
    payload: user,
  });
  
   const logoutUser = () => ({
    type: 'LOGOUT_USER',
    user:null,
  });

  export { logoutUser,loginUser, registerUser };
  