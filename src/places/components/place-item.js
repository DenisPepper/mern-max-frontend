import './place-item.css';
import Card from '../../shared/components/ui-elements/card';

export const PlaceItem = (props) => {
  const { id, image, name, description, address, creatorId, coordinates } =
    props;

  return (
    <li className='place-item'>
      <Card className='place-item__content'>
        <div className='place-item__image'>
          <img src={image} alt={name} />
        </div>
        <div className='place-item__info'>
          <h2>{name}</h2>
          <h3>{address}</h3>
          <p>{description}</p>
        </div>
        <div className='place-item__actions'>
          <button>VIEW ON MAP</button>
          <button>EDIT</button>
          <button>DELETE</button>
        </div>
      </Card>
    </li>
  );
};
