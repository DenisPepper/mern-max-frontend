import { UsersList } from '../components/users-list';

export const UsersPage = () => {
  const users = [
    {
      id: 'u1',
      name: 'user 1',
      image: '/images/users/user-1.jpg',
      places: 3,
    },
    {
      id: 'u2',
      name: 'user 2',
      image: '/images/users/user-2.jpg',
      places: 5,
    },
  ];

  return <UsersList items={users} />;
};
