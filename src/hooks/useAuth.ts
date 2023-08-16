import { useAppSelector } from '@redux/hooks';

export const useAuth = () => {
  const { userToken } = useAppSelector((state) => state.auth);
  if (!userToken) {
    return false;
  }
  return true;
};
