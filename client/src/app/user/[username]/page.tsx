'use client';

import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import { useParams } from 'next/navigation';
import { Fragment } from 'react';

interface UserProfileProps {}

const UserProfile: NextPage<UserProfileProps> = () => {
  const { username } = useParams();

  return (
    <Fragment>
      <Head>
        <title>Habit | {username}</title>
        <meta name="description" content={`Habit ${username} profile`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>User Profile - {username}</div>
    </Fragment>
  );
};

export default UserProfile;
