import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { Button } from 'semantic-ui-react';

function Admin() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  async function checkLogin() {
    try {
      const { status, data } = await axios.get('/api/isLogin');
      if (status === 200 && data.name) {
        //   로그인
        setIsLogin(true);
      } else {
        //   로그인 안됨
        router.push('/login');
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function logout() {
    try {
      const { status } = await axios.get('/api/logout');
      if (status === 200) {
        router.push('/');
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <>
      amdin
      {isLogin && <Button onClick={logout}>Logout</Button>}
    </>
  );
}

export default Admin;
