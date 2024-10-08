// pages/index.tsx
'use client';
import Head from 'next/head';
import { useState } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Head>
        <title>My Next.js Home Page</title>
        <meta name="description" content="Welcome to my Next.js home page" />
      </Head>
      <h1>Welcome to My Next.js Home Page</h1>
      <p>This is a simple example of a home page using Next.js.</p>
      <h2>Counter: {count}</h2>
      <button
        onClick={handleIncrement}
        style={{ margin: '5px', padding: '10px 15px' }}
      >
        Increment
      </button>
      <button
        onClick={handleDecrement}
        style={{ margin: '5px', padding: '10px 15px' }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Home;
