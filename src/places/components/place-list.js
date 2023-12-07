import './place-list.css';
import Card from '../../shared/components/ui-elements/card';
import { PlaceItem } from './place-item';

export const PlaceList = (props) => {
  const { items } = props;

  if (items.length === 0)
    return (
      <div className='place-list center'>
        <Card>
          <h2>No places found</h2>
          <button>Share place</button>
        </Card>
      </div>
    );

  return (
    <ul className='place-list'>
      {items.map((item) => (
        <PlaceItem
          key={item.pd}
          id={item.id}
          image={item.imageUrl}
          name={item.name}
          description={item.description}
          address={item.address}
          creatorId={item.creator}
          coordinates={item.location}
        />
      ))}
    </ul>
  );
};
