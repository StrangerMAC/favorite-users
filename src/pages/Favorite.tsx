import React, { Suspense } from 'react';
import { Await, defer, LoaderFunction, useLoaderData } from 'react-router-dom';
import { getUsers } from '../API/UserService';
import { User } from '../components/User';
import { IUser, UsersData } from '../types/data';

const Favorite: React.FC = () => {
  const { users } = useLoaderData() as UsersData;
  return (
    <div>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={users}>
          {(resolveUsers) => (
            <div className="usersFavoritePage">
              {resolveUsers.items
                .filter((user: IUser) => user.followed !== false)
                .map((user: IUser) => (
                  <div key={user.id}>
                    <User {...user} />
                  </div>
                ))}
            </div>
          )}
        </Await>
      </Suspense>
    </div>
  );
};

const usersLoader: LoaderFunction = async () => {
  return defer({
    users: getUsers(),
  });
};

export { Favorite, usersLoader };
