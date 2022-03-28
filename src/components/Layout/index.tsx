import { Box } from '@mui/system';

import { useError } from 'context/ErrorContext';

import AlertNotify from '../AlertNotify';
import Navbar from './Navbar';
import { useStyles } from './styles';

const Layout: React.FC = ({ children }) => {
  const styles = useStyles();
  const { value, msg, setValue, error } = useError();

  return (
    <Box className={styles.root}>
      <Navbar />

      {children}

      {/* AlertNotify */}
      <AlertNotify value={value} setValue={setValue} error={error} msg={msg} />
    </Box>
  );
};

export default Layout;
