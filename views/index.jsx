import React, { useState } from 'react';
import { Head } from '@react-ssr/express';

const Index = (props) => {
  const [message, setMessage] = useState('waiting...');

  const onClick = () => setMessage('This is a react-ssr!');

  return (
    <React.Fragment>
      <Head>
        <title>An example of @react-ssr/express</title>
      </Head>
      <p>Hello {props.user.name}!</p>
      <button onClick={onClick}>Click Me</button>
      <p>Message from state: {message}</p>
    </React.Fragment>
  );
};

export default Index;
