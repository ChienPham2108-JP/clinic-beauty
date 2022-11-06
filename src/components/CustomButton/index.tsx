import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const Button1 = withStyles({
  root: {
    fontFamily: `'Poppins',sans-serif`,
    fontWeight: 600,
    whiteSpace: 'nowrap',
    fontSize: '16px',
    color: 'var(--white-color)',
    background: 'var(--primary-color)',
    borderRadius: '50px',
    display: 'inline-block',
    letterSpacing: '0.1em',
    '&:hover': {
      opacity: '0.65',
      background: 'var(--primary-color)',
    },
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

interface CustomButomProps {
  padding: string;
  children: string;
}

const CustomButton: React.FC<CustomButomProps> = ({ padding, children }) => {
  return (
    <Button1 className="btn" style={{ padding: padding }}>
      {children}
    </Button1>
  );
};

export default CustomButton;
