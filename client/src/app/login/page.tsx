'use client';

import { FormEvent, Fragment, useRef } from 'react';

import { NextPage } from 'next';
import Head from 'next/head';

const Login: NextPage = () => {
  const mailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onSignIn = (e: FormEvent) => {
    e.preventDefault();

    console.log(mailRef.current?.value);
    console.log(passwordRef.current?.value);
  };

  return (
    <Fragment>
      <Head>
        <title>Habit | Login</title>
        <meta name="description" content="Habit Login page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Login</h1>
        <form onSubmit={onSignIn}>
          <label htmlFor="sign-in-email">Email</label>
          <input
            type="email"
            id="sign-in-email"
            name="sign-in-email"
            ref={mailRef}
          />
          <label htmlFor="sign-in-password">Password</label>
          <input
            type="password"
            id="sign-in-password"
            name="sign-in-password"
            ref={passwordRef}
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </Fragment>
  );
};

export default Login;
