import { useUser } from 'context/userContext';

import Loading from './Loading';

const StartApp: React.FC = ({ children }) => {
  const user = useUser();

  if (user.loadingUser) return <Loading />;

  return <>{children}</>;
};

export default StartApp;
