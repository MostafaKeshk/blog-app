import React from 'react';

import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type AlertNotifyProps = {
  msg: string;
  value: boolean;
  setValue: (x: boolean) => void;
  error: boolean;
};

const AlertNotify: React.FC<AlertNotifyProps> = ({ msg = 'Sent', value, setValue, error }) => {
  const handleClose = () => {
    setValue(false);
  };
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={value}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert
        sx={{ width: '100%', wordBreak: 'break-all' }}
        onClose={handleClose}
        severity={error ? 'error' : 'success'}
      >
        {msg}
      </Alert>
    </Snackbar>
  );
};

export default AlertNotify;
