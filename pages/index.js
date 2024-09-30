import { Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

export default function Home() {
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    router.push('/authentication/sign-in');
  }
  return (
    <>
      <Typography variant='body1' color='initial'>
        Hello, World
      </Typography>
    </>
  );
}
