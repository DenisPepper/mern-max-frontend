import './place-item.css';
import Card from '../../shared/components/ui-elements/card';
import Button from '../../shared/components/form-elements/button';

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
          <Button inverse>VIEW ON MAP</Button>
          <Button to={`/places/${id}`}>EDIT</Button>
          <Button danger>DELETE</Button>
        </div>
      </Card>
    </li>
  );
};
