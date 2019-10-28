import React, { useState } from 'react';
import Head from '@react-ssr/express/head';
import { Layout } from '../components';

const Index = (props) => {
  const {
    user,
    script,
  } = props;

  const [message, setMessage] = useState('waiting...');

  const onClick = () => setMessage('This is a react-ssr!');

  return (
    <Layout script={script}>
      <Head>
        <title>An example of @react-ssr/express</title>
      </Head>
      <p>Hello {user.name}!</p>
      <button onClick={onClick}>Click Me</button>
      <p>Message from state: {message}</p>
    </Layout>
  );
};

export default Index;
