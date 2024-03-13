import { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';

const Profile: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Habit | Profile</title>
        <meta name="description" content="Habit Profile page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Profile</h1>
      </div>
    </Fragment>
  );
};

export default Profile;
