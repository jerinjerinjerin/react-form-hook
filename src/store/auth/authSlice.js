const initialState = {
    isAuthenticated: false,
    user: null,
  };
  
  const authReducer = (state = initialState, action) => {
    console.log('action',action)
    switch (action.type) {
      case 'REGISTER_USER':
        return {
         ...state,
          user: action.payload,
        };
      case 'LOGIN_USER':
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
        };
      case 'LOGOUT_USER':
        return {
          ...state,
          isAuthenticated: false,
          user: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  