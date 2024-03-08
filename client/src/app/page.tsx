import styles from './page.module.scss';

import { NextPage } from 'next';

export const metadata = {
  title: 'Habit | Home',
  description: 'A space to save your progress!',
};

const Index: NextPage = () => {
  return (
    <div className={styles.page}>
      <h1>Home</h1>
    </div>
  );
};

export default Index;
