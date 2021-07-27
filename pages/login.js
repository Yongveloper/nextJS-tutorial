import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { Button, Form } from 'semantic-ui-react';

function Login() {
  const router = useRouter();
  async function enterAdmin() {
    try {
      const { status } = await axios.post('/api/login');
      if (status === 200) {
        // 로그인 성공
        router.push('/admin');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div style={{ padding: '100px 0', textAlign: 'center' }}>
      <Form>
        <Form.Field inline>
          <input placeholder="ID" />
        </Form.Field>
        <Form.Field inline>
          <input type="password" placeholder="Password" />
        </Form.Field>
        <Button color="blue" onClick={enterAdmin}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
