import { Fragment } from 'react';

import { NextPage } from 'next';
import Head from 'next/head';

const Register: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Habit | Register</title>
        <meta name="description" content="Habit Register page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Register</h1>
      </div>
    </Fragment>
  );
};

export default Register;
