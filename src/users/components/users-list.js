import Card from '../../shared/components/ui-elements/card';
import { UserItem } from './user-item';
import './users-list.css';

export const UsersList = (props) => {
  const { items } = props;

  if (items.length === 0)
    return (
      <div className='center'>
        <Card>
          <h2>no users found ...</h2>
        </Card>
      </div>
    );

  return (
    <ul className='users-list'>
      {items.map((item) => (
        <UserItem
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          placeCount={item.places}
        />
      ))}
    </ul>
  );
};
