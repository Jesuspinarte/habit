import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';

interface UserMessagesProps {
  username?: string;
}

const UserMessages: NextPage<UserMessagesProps> = ({ username }) => {
  return (
    <Fragment>
      <Head>
        <title>Habit | Messages</title>
        <meta name="description" content={`Habit Messages from`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Messags from - {username}</div>
    </Fragment>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const props: UserMessagesProps = {
    username: undefined,
  };

  props.username = context.query.username as string;

  return {
    props,
  };
}

export default UserMessages;
