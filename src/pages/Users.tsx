import { useEffect, useState } from 'react';
import { fetchData, toggleFavorite } from '../API/UserService';
import { Pagination } from '../components/Pagination';
import { User } from '../components/User';
import { IUser } from '../types/data';

const Users: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalCountOfUsers: number = 100; // 100 - максимальное количество пользоваелей разрешенное для запроса
  const countOfUsersPerPage: number = 5; // количество отображаемых пользователей на странице
  const countOfNumbersDisplayedOnPage: number = 10; // количество отображаемых номеров страниц на странице

  useEffect(() => {
    fetchData(totalCountOfUsers, setUsers);
  }, []);

  const changingTheSelection = (id: number): void => {
    setUsers(
      users.map((user: IUser) => {
        if (user.id !== id) return user;
        else {
          if (user.followed) {
            toggleFavorite(id, 'DELETE');
          } else {
            toggleFavorite(id, 'POST');
          }
        }
        return { ...user, followed: !user.followed };
      })
    );
  };

  return users.length ? (
    <>
      <div className="usersPage">
        {users
          .slice((currentPage - 1) * 5, currentPage * 5)
          .map((user: IUser) => (
            <div key={user.id} className="card">
              <input
                title="Make a selection"
                type="checkbox"
                onChange={() => changingTheSelection(user.id)}
                checked={
                  typeof user.followed === 'boolean' ? user.followed : undefined
                }
              />
              <User {...user} />
            </div>
          ))}
      </div>
      <Pagination
        totalCountOfUsers={totalCountOfUsers}
        countOfUsersPerPage={countOfUsersPerPage}
        countOfNumbersDisplayedOnPage={countOfNumbersDisplayedOnPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  ) : (
    <h2>Users cards is loading ...</h2>
  );
};

export { Users };
