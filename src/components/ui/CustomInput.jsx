import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const CustomInput = React.forwardRef(({
  label,
  value,
  onChange,
  error,
  helperText,
  readOnly,
  type = 'text',
  variant = 'outlined',
  fullWidth = true,
  autoComplete = "off",
  ...props
}, ref) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      error={!!error}  
      helperText={helperText}  
      type={type}
      variant={variant}
      fullWidth={fullWidth}
      readOnly={readOnly}
      inputRef={ref}  
      autoComplete={autoComplete} 
      sx={{
        '& .MuiInputBase-root': {
          borderRadius: '8px',
          padding: '10px',
        },
        '& .MuiFormLabel-root': {
          color: 'primary.main',
        },
        '& .MuiOutlinedInput-root': {
          '&:hover fieldset': {
            borderColor: 'secondary.main',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'primary.main',
          },
        },
        '& .MuiFormHelperText-root': {
          color: error ? 'red' : 'green',
        },

        '& .MuiOutlinedInput-input': {
          backgroundColor: '#f5f5f5',
        },
      }}
      {...props}
    />
  );
});

CustomInput.displayName = 'CustomInput';

CustomInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  helperText: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  fullWidth: PropTypes.bool,
  readOnly: PropTypes.bool,
  autoComplete: PropTypes.string,
};

export default CustomInput;
