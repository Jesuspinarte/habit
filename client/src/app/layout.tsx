'use client';

import { Fragment, useMemo, useState } from 'react';
import './global.css';
import Nav from '../components/nav/Nav';
import PostForm from '../components/post/PostForm';
import { Provider } from 'react-redux';
import { store } from '../state/store';
import { usePathname } from 'next/navigation';

const PATHS_WITHOUT_NAV = new Set(['/register', '/login']);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showPostForm, setshowPostForm] = useState(false);
  const pathName = usePathname();

  const hasNav = useMemo(() => !PATHS_WITHOUT_NAV.has(pathName), [pathName]);

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {hasNav && <Nav />}
          <main>
            {hasNav && (
              <Fragment>
                <button
                  onClick={() => setshowPostForm(prevState => !prevState)}
                >
                  {showPostForm ? 'Hide form' : 'Show Form'}
                </button>
                {showPostForm && <PostForm />}
              </Fragment>
            )}
            {children}
          </main>
          {hasNav && (
            <aside>
              <h3>Aside</h3>
            </aside>
          )}
        </Provider>
      </body>
    </html>
  );
}
