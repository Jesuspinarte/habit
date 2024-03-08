import { PropsWithChildren } from 'react';

const MessagesLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <section>
      <h1>Messages</h1>
      <article>{children}</article>
    </section>
  );
};

export default MessagesLayout;
