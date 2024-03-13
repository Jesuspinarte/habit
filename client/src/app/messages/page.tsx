import { Fragment } from 'react';

import { NextPage } from 'next';
import Head from 'next/head';

const Messages: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Habit | Messages</title>
        <meta name="description" content="Habit Messages page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h2>No chat selected</h2>
      </div>
    </Fragment>
  );
};

export default Messages;
