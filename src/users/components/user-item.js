import { Link } from 'react-router-dom';
import Avatar from '../../shared/components/ui-elements/avatar';
import './user-item.css';

export const UserItem = (props) => {
  const { id, image, name, placeCount } = props;
  return (
    <li className='user-item'>
      <div className='user-item__content'>
        <Link to={`/${id}/places`}>
          <div className='user-item__image'>
            <Avatar image={image} alt={name} />
          </div>
          <div className='user-item__info'>
            <h2>{name}</h2>
            <h3>
              {placeCount} {placeCount === 1 ? 'place' : 'places'}
            </h3>
          </div>
        </Link>
      </div>
    </li>
  );
};
