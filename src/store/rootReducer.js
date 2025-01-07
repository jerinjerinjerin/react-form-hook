import { combineReducers } from '@reduxjs/toolkit';
import authSlices from './auth/authSlice'

const rootReducer = combineReducers({
  auth: authSlices
})

export { rootReducer };