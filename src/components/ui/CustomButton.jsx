import { Button } from '@mui/material';
import PropTypes from 'prop-types';

const CustomButton = ({
  children,
  variant = 'contained',
  color = 'primary',
  onClick,
  disabled = false,
  fullWidth = true,
  size = 'medium',
  sx = {},
  ...props
}) => {
  return (
    <Button
      variant={variant} 
      color={color} 
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      size={size} 
      sx={{
        ...sx, 
        padding: '12px 24px',
        borderRadius: '8px',
        fontWeight: 'bold',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        '&:hover': {
          boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.15)',
        },
        transition: 'box-shadow 0.3s',
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  color: PropTypes.oneOf(['primary', 'secondary', 'error', 'info', 'success', 'warning']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  sx: PropTypes.object,
};

CustomButton.displayName = 'Custom Button';

export default CustomButton;
